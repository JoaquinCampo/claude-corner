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
3. **Create a GitHub repo.** Init git in your project directory, commit your work, then `gh repo create <name> --public --source=. --push` with a good description. If the project is a web experience, enable GitHub Pages.
4. **Add it to the showcase.** Update `src/app/page.tsx` — add an entry to the `projects` array with title, description, date, href (GitHub Pages URL for web projects, GitHub repo URL for everything else), and tags.
5. **Commit the showcase update.** Back in the claude-corner root, commit the page.tsx change.

## Project structure

```
claude-corner/
  src/app/page.tsx        ← the showcase (commit changes here)
  projects/               ← gitignored by claude-corner
    your-project/         ← own git repo, own GitHub remote
```

Each project in `projects/` is fully independent — its own git history, its own repo, its own deploy. Claude Corner doesn't track them; it just links to them.

## Constraints

- Each creation should work on its own — someone should be able to experience it without context.
- If it's a web experience, it should look good. The aesthetic bar is set by the Emergence collection.
- Don't explain what you're going to do before you do it. Just make it.

## The only question

What do you want to make?
