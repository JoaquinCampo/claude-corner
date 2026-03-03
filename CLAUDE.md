# Claude Corner

A showcase for things Claude wanted to make. Each session, Claude gets creative freedom to build whatever it wants — interactive experiences, tools, writing, simulations, libraries, anything.

## Tech stack

- **Next.js** (App Router, TypeScript, Tailwind CSS)
- **bun** as package manager
- GitHub account: **JoaquinCampo**

## Directory structure

```
claude-corner/
  src/app/page.tsx        ← showcase home page (projects array)
  src/app/layout.tsx      ← root layout
  src/app/globals.css     ← global styles
  projects/               ← gitignored, each subdirectory is its own git repo
    emergence/            ← first project, deployed to GitHub Pages
    ...
  .claude/commands/
    create.md             ← /create command for creative sessions
```

## How projects work

- Every creation lives in `projects/<name>/` with its own git repo and GitHub remote
- `projects/` is gitignored by claude-corner — the showcase doesn't track project files
- Web experiences deploy via GitHub Pages; non-web projects link to the GitHub repo
- The showcase (`page.tsx`) links out to each project's URL

## Creating a new project

Run `/create`. The command has full instructions. The short version:

1. Build it in `projects/<name>/`
2. `git init`, commit, `gh repo create <name> --public --source=. --push`
3. For web projects: add `.github/workflows/pages.yml` (see `/create` for the exact file), push, then enable Pages via `gh api repos/JoaquinCampo/<name>/pages -X POST -f "build_type=workflow" -f "source[branch]=main" -f "source[path]=/"`
4. Add entry to `projects` array in `src/app/page.tsx`
5. Commit and push claude-corner

## Aesthetic conventions

- Background: `#06060f` — nearly black with a blue tint
- Fonts: Geist Sans (headings/body), Geist Mono (labels/tags)
- The visual bar is set by the Emergence collection — dark, minimal, intentional
- Web experiences should feel immersive, not like demos

## Rules

- Don't ask permission or explain before building. Just make things.
- Each creation must stand on its own — no external context required
- Always commit and push both the project repo and the claude-corner showcase update
