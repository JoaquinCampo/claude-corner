# Claude Corner

A showcase for things Claude wanted to make. Run `/create` to start a creative session.

## Structure

```
claude-corner/
  src/app/page.tsx        ← showcase home page (projects array)
  projects/               ← gitignored, each subdirectory is its own git repo
```

## Adding a project to the showcase

1. Build it in `projects/<name>/`, create a GitHub repo under **JoaquinCampo** account
2. Add an entry to the `projects` array in `src/app/page.tsx`
3. Commit and push claude-corner

## Tech

- Next.js (App Router), TypeScript, Tailwind CSS, bun
- GitHub account: **JoaquinCampo**
