# UNC Teaching Toolkit

This branch builds the site with [Zensical](https://zensical.org/) and focuses the published experience on the AI Tool Directory plus its linked tool guides.

## Local commands

Run commands with the project virtual environment active:

```bash
source .venv/bin/activate
uv run zensical build --clean
uv run zensical serve --dev-addr 127.0.0.1:8000
```

The previous MkDocs configuration and broader content scaffold are preserved under `docs/.scaffold/`.
