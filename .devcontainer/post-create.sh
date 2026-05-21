#!/usr/bin/env bash
set -euo pipefail

# Install uv (Astral)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Ensure uv is available in this session
export PATH="$HOME/.local/bin:$PATH"

uv --version

uv venv --clear

uv sync --dev

# ---------------------------------------------------------------------------
# Playwright — required by the playwright-visual-testing skill
# ---------------------------------------------------------------------------

# Install the Playwright Node.js package globally so `playwright` CLI and
# the `run_playwright_code` / `screenshot_page` agent tools can use it.
npm install -g playwright

# Install Chromium browser binary and all required OS-level dependencies.
# --with-deps handles system packages (fonts, libs) on Debian/Ubuntu images.
npx playwright install --with-deps chromium
