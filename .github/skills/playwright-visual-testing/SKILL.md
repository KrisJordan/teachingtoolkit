---
name: playwright-visual-testing
description: 'Take Playwright screenshots of an active web page and use the image as visual input to an agent for visual verification and acceptance testing. Use when asked to: visually verify a web page, take a screenshot for inspection, run visual acceptance tests, check UI layout or appearance, validate visual acceptance criteria, or perform screenshot-based regression checks.'
argument-hint: 'URL or page description to visually test, plus any acceptance criteria'
---

# Playwright Visual Testing

## When to Use

- Visually verify that a web page renders correctly
- Acceptance testing: confirm a page meets visual criteria before sign-off
- Capture a screenshot to inspect layout, styling, or content
- Debug UI issues by seeing the rendered page
- Test responsive layouts at multiple viewport sizes

## Prerequisites

Playwright with Chromium must be installed in the devcontainer. Verify with:

```bash
npx playwright --version
```

If missing, run: `npm install -g playwright && npx playwright install --with-deps chromium`

## Procedure

### 1. Load Required Tools

Before starting, call `tool_search` for each of these capabilities so their deferred tools are available:

| Tool needed | Search query |
|-------------|-------------|
| Open a browser page | `open_browser_page` |
| Capture a screenshot | `screenshot_page` |
| View an image file | `view_image` |
| Run custom Playwright code | `run_playwright_code` |

### 2. Start the Target Server (if local)

If the page is on a local dev server, start it first and wait for it to be ready. For this MkDocs project:

```bash
source .venv/bin/activate && zensical serve --dev-addr 127.0.0.1:8000
```

### 3. Navigate to the Page

Use `open_browser_page` with the full URL (e.g. `http://127.0.0.1:8000/tools/` or a production URL).

### 4. Capture the Screenshot

Use `screenshot_page` to save the screenshot to `./screenshots/<descriptive-name>.png`.

Create the output directory first if needed:

```bash
mkdir -p ./screenshots
```

For advanced scenarios (interactions before capture, hover states, waiting for animations), use `run_playwright_code` with the [multi-viewport reference script](./scripts/screenshot.js).

### 5. Visual Analysis

Use `view_image` with the saved screenshot path to load the image into the agent's vision context.

Perform the following checks:

| Check | What to Look For |
|-------|-----------------|
| Layout integrity | Elements aligned, no overflow, no broken grid |
| Content presence | Expected headings, text, images are present |
| Navigation | Header/footer/nav links render correctly |
| Visual errors | Broken images (alt placeholders), overlapping text, cut-off elements |
| Color & contrast | Text is legible against its background |
| Responsive fit | Page fits viewport; no horizontal scrollbar at target width |

### 6. Acceptance Testing

When acceptance criteria are provided, map each criterion to a visual check and record a verdict:

```
[ PASS ] Header navigation is visible with correct links
[ FAIL ] Hero image is missing (broken image placeholder visible)
[ PASS ] Footer copyright text present
[REVIEW] Sidebar overlaps main content at 768px viewport
```

For multi-viewport testing, capture screenshots at each breakpoint using [screenshot.js](./scripts/screenshot.js):

- Mobile: 375 × 812
- Tablet: 768 × 1024
- Desktop: 1280 × 800

### 7. Report Results

Summarize:

1. **Overall verdict**: PASS / FAIL / NEEDS REVIEW
2. **Per-criterion results** (table with status, criterion, evidence)
3. **Issues found** with specific descriptions (element, location, nature of defect)
4. **Suggested fixes** for any failures

## Quick Reference

```
tool_search → open_browser_page, screenshot_page, view_image, run_playwright_code
  → open_browser_page(url)
  → screenshot_page(path="./screenshots/test.png")
  → view_image(filePath="./screenshots/test.png")
  → analyze + report
```
