# Agent Instructions

- Always run commands with the virtual environment enabled.
- Activate it with `source .venv/bin/activate` before running commands, or use `uv run <command>` so the environment is active.
- Do not run Python or package commands without the venv.
- This site is for UNC-Chapel Hill instructors. Write docs, labels, summaries, and examples for instructors and teaching workflows. The tone is warm, welcoming, and encouraging with a reverence for pedagogy and plainspoken language for a broad audience of instructors without talking down to them.
- Do not frame guidance for students, non-instructional faculty, staff, or general campus audiences unless a brief distinction is necessary to explain instructor access or data boundaries.
- When adapting campus-wide documentation, translate it into instructor-facing steps and concerns, keeping FERPA/student-record guidance prominent.
- Use Playwright for frontend visual checks when changing layout, responsive behavior, theme palettes, or CSS variables. Prefer the project script: `uv run python scripts/visual_check.py --url http://127.0.0.1:8017/index.html`.
- For visual checks, build first with `uv run zensical build --clean`, serve with `uv run zensical serve --dev-addr 127.0.0.1:8017`, then capture both mobile light and mobile dark screenshots. Android Chrome concerns should be checked with a Pixel-sized viewport and both `prefers-color-scheme` values.
- Treat theme bugs as both configuration and CSS issues: confirm generated HTML links the palette stylesheet, body has `data-md-color-scheme`, and custom variables such as `--tt-surface`, `--tt-surface-soft`, and `--tt-blue-soft` resolve correctly in `default` and `slate`.
