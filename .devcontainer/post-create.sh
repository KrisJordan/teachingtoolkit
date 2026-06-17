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
# Playwright — required for visual regression checks
# ---------------------------------------------------------------------------

# Install the browser version that matches the Python Playwright package locked
# in uv.lock. The visual check script runs through `uv run python`.
uv run playwright install --with-deps chromium

# Install the Playwright Node.js package globally as a convenience for agents or
# editor tooling that expect the Node CLI.
npm install -g playwright

npx playwright install chromium
