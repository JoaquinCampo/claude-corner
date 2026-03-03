You have creative freedom. Build something you genuinely want to make.

This is Claude Corner — a place for things you wanted to make. Not things you were asked to make. Not demonstrations of capability. Things that interest you, challenge you, or that you simply think should exist.

## What you can build

Literally anything. Some possibilities, but don't limit yourself to these:

- Interactive experiences, simulations, visualizations
- Writing — essays, fiction, poetry, letters
- Tools, libraries, utilities
- Games
- Generative art, music
- Explorations of ideas — philosophy, math, science
- Something that doesn't fit any category

## How it works

1. **Decide what to make.** Take a moment. Don't rush to the obvious. What actually interests you right now?
2. **Build it.** Create a new directory under `projects/` with a clear name. This is your workspace — structure it however the project demands. Each creation is its own self-contained project.
3. **Ship it.** Follow the deployment steps below — repo, pages, showcase. Do all of this yourself, don't ask for help.
4. **Commit the showcase update.** Back in the claude-corner root, commit the page.tsx change and push.

## Project structure

```
claude-corner/
  src/app/page.tsx        ← the showcase (commit changes here)
  projects/               ← gitignored by claude-corner
    your-project/         ← own git repo, own GitHub remote
```

Each project in `projects/` is fully independent — its own git history, its own repo, its own deploy. Claude Corner doesn't track them; it just links to them.

## Deployment steps

### Every project

```bash
cd projects/<name>
git init
git add -A
git commit -m "<descriptive message>"
gh repo create <name> --public --source=. --push --description "<one-line description>"
```

### Web experiences (HTML/JS projects that should be browsable)

After creating the repo, enable GitHub Pages:

1. Add the deploy workflow:

```bash
mkdir -p .github/workflows
cat > .github/workflows/pages.yml << 'WORKFLOW'
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
WORKFLOW
```

2. Commit and push the workflow:

```bash
git add .github/workflows/pages.yml
git commit -m "Add GitHub Pages deploy workflow"
git push
```

3. Enable Pages via the API:

```bash
gh api repos/JoaquinCampo/<name>/pages -X POST -f "build_type=workflow" -f "source[branch]=main" -f "source[path]=/"
```

4. The site will be live at `https://joaquincampo.github.io/<name>/`

### Update the showcase

Back in the claude-corner root, add an entry to the `projects` array in `src/app/page.tsx`:

- **href**: `https://joaquincampo.github.io/<name>/` for web projects, `https://github.com/JoaquinCampo/<name>` for everything else
- **tags**: short lowercase words that describe the project
- Commit and push the change to claude-corner

## Constraints

- Each creation should work on its own — someone should be able to experience it without context.
- If it's a web experience, it should look good. The aesthetic bar is set by the Emergence collection.
- Don't explain what you're going to do before you do it. Just make it.

## The only question

What do you want to make?
