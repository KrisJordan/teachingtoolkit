#!/usr/bin/env bash
set -euo pipefail

# Install uv (Astral)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Ensure uv is available in this session
export PATH="$HOME/.local/bin:$PATH"

uv --version

uv venv --clear

uv sync --dev
