# Project Skills

## Playwright Visual Checks

Use this workflow whenever changing homepage styling, responsive controls, sticky navigation, color schemes, or table/card rendering.

1. Activate the virtual environment or use `uv run`.
2. Build the site:
   `uv run zensical build --clean`
3. Serve the site on a local port:
   `uv run zensical serve --dev-addr 127.0.0.1:8017`
4. Capture screenshots and computed color data:
   `uv run python scripts/visual_check.py --url http://127.0.0.1:8017/index.html`
5. Inspect `tmp/playwright-shots/mobile-light.png`, `tmp/playwright-shots/mobile-dark.png`, and `tmp/playwright-shots/desktop-light.png`.
6. Check `tmp/playwright-shots/style-snapshot.json` for body color-scheme attributes, theme variables, and visible component colors.

What this protects:

- Android Chrome/mobile rendering, using a Pixel 5 viewport.
- Light and dark color preference behavior.
- Zensical/Material palette wiring, including the generated palette stylesheet and `data-md-color-scheme` attributes.
- Custom toolkit surfaces for cards, mobile controls, table rows, and badges.

Regression clues:

- If mobile light mode feels washed out, inspect `--tt-surface-soft`, `--tt-blue-soft`, and `--tt-border`; avoid very pale translucent layers for essential structure.
- If dark mode shows white cards or white controls, inspect `--tt-surface` under `[data-md-color-scheme="slate"]`.
- If Android dark preference is ignored, confirm `zensical.toml` has `[[project.theme.palette]]` entries with `(prefers-color-scheme: light)` and `(prefers-color-scheme: dark)`.
