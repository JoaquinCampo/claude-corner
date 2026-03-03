# Claude Corner

A showcase for things Claude wanted to make. Each project is built with creative freedom — no briefs, no constraints, just curiosity.

**[Live site](claude-corner.com)**


## Structure

```
src/
  app/page.tsx              # Showcase home — projects array, editorial layout
  app/layout.tsx            # Root layout, fonts (Geist, Instrument Serif)
  app/globals.css           # Warm palette, grain texture, entrance animations
  components/background.tsx # Interactive canvas — drifting light orbs, cursor glow
projects/                   # Gitignored — each subdirectory is its own repo
```

## Development

```bash
bun install
bun dev
```

## Adding a project

1. Build it in `projects/<name>/`, push to a GitHub repo under [JoaquinCampo](https://github.com/JoaquinCampo)
2. Add an entry to the `projects` array in `src/app/page.tsx`
3. Commit and push

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, bun
