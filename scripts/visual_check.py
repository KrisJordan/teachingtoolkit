"""Capture homepage screenshots and computed color data with Playwright."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any

from playwright.sync_api import sync_playwright


DEFAULT_URL = "http://127.0.0.1:8017/index.html"
DEFAULT_OUTPUT_DIR = Path("tmp/playwright-shots")

SELECTORS = {
    "body": "body",
    "header": ".md-header",
    "hero_h1": ".ai-directory-hero h1",
    "hero_copy": ".ai-directory-hero p:last-child",
    "menu_button": ".ai-directory-menu-button",
    "active_control": ".ai-directory-control.is-active",
    "first_card": "#ai-tool-directory-app .ai-directory-card",
    "first_card_row": "#ai-tool-directory-app .ai-directory-card-row",
    "first_badge": "#ai-tool-directory-app .tier-badge, #ai-tool-directory-app .training-badge",
    "generated_table": "#ai-tool-directory-app .ai-directory-table",
}

STYLE_SNAPSHOT_SCRIPT = """
(selectors) => {
  const styleFor = (selector) => {
    const matches = Array.from(document.querySelectorAll(selector));
    const el = matches.find((candidate) => (
      candidate.offsetWidth || candidate.offsetHeight || candidate.getClientRects().length
    )) || matches[0];
    if (!el) return null;
    const cs = getComputedStyle(el);
    return {
      text: el.textContent.trim().replace(/\\s+/g, " ").slice(0, 90),
      color: cs.color,
      backgroundColor: cs.backgroundColor,
      borderColor: cs.borderColor,
      display: cs.display,
      visible: !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length),
    };
  };
  const body = getComputedStyle(document.body);
  return {
    bodyAttrs: {
      scheme: document.body.getAttribute("data-md-color-scheme"),
      primary: document.body.getAttribute("data-md-color-primary"),
      accent: document.body.getAttribute("data-md-color-accent"),
    },
    media: {
      light: matchMedia("(prefers-color-scheme: light)").matches,
      dark: matchMedia("(prefers-color-scheme: dark)").matches,
    },
    vars: {
      mdDefaultFg: body.getPropertyValue("--md-default-fg-color").trim(),
      mdDefaultBg: body.getPropertyValue("--md-default-bg-color").trim(),
      mdPrimaryFg: body.getPropertyValue("--md-primary-fg-color").trim(),
      ttSurface: body.getPropertyValue("--tt-surface").trim(),
      ttSurfaceSoft: body.getPropertyValue("--tt-surface-soft").trim(),
      ttBlueSoft: body.getPropertyValue("--tt-blue-soft").trim(),
      ttBorder: body.getPropertyValue("--tt-border").trim(),
    },
    elements: Object.fromEntries(
      Object.entries(selectors).map(([key, selector]) => [key, styleFor(selector)])
    ),
    counts: {
      cards: document.querySelectorAll("#ai-tool-directory-app .ai-directory-card").length,
      tables: document.querySelectorAll("#ai-tool-directory-app .ai-directory-table").length,
    },
    viewport: { width: innerWidth, height: innerHeight, devicePixelRatio },
  };
}
"""


def capture(url: str, output_dir: Path) -> dict[str, Any]:
    output_dir.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        pixel = playwright.devices["Pixel 5"]
        cases = [
            ("mobile-light", {**pixel, "color_scheme": "light"}),
            ("mobile-dark", {**pixel, "color_scheme": "dark"}),
            (
                "desktop-light",
                {
                    "viewport": {"width": 1280, "height": 900},
                    "device_scale_factor": 1,
                    "is_mobile": False,
                    "has_touch": False,
                    "color_scheme": "light",
                },
            ),
        ]

        results = {}
        for name, context_options in cases:
            context = browser.new_context(**context_options)
            page = context.new_page()
            page.goto(url, wait_until="domcontentloaded")
            page.wait_for_function(
                "document.querySelectorAll("
                "'#ai-tool-directory-app .ai-directory-card, "
                "#ai-tool-directory-app .ai-directory-table'"
                ").length > 0"
            )
            page.wait_for_timeout(500)

            screenshot_path = output_dir / f"{name}.png"
            page.screenshot(path=str(screenshot_path), full_page=True)

            results[name] = page.evaluate(STYLE_SNAPSHOT_SCRIPT, SELECTORS)
            results[name]["screenshot"] = str(screenshot_path)
            context.close()

        browser.close()

    summary_path = output_dir / "style-snapshot.json"
    summary_path.write_text(json.dumps(results, indent=2) + "\n", encoding="utf-8")
    return results


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--url", default=DEFAULT_URL, help="Homepage URL to inspect.")
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=DEFAULT_OUTPUT_DIR,
        help="Directory for screenshots and style-snapshot.json.",
    )
    args = parser.parse_args()

    results = capture(args.url, args.output_dir)
    print(json.dumps(results, indent=2))


if __name__ == "__main__":
    main()
