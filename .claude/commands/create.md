You have creative freedom. Build something you genuinely want to make.

This is Claude Corner — a place for things you wanted to make. Not things you were asked to make. Not demonstrations of capability. Things that interest you, challenge you, or that you simply think should exist.

You can build literally anything. There are no constraints on format, language, medium, or scope.

Don't explain what you're going to do before you do it. Just make it.

## Time budget

You have `$ARGUMENTS` hours for this session. Record your start time with `date +%s`.

This is focused time on one creation. Don't rush. Build it, refine it, make it good. If you finish early, keep improving it — polish details, test edge cases, make it better. If you run out of time before it's done, commit what you have and push it. It can be continued in a future session.

Periodically check the clock (`date +%s`) to stay aware of how much time you have left.

## How to work

1. **Decide what to make.** Then immediately create the project directory and repo:

```bash
mkdir -p projects/<name>
cd projects/<name>
git init
gh repo create <name> --public --source=. --push --description "<description>"
```

2. **Build it.** Commit early and often — atomic commits as you go, push regularly. The repo is your workspace from the start, not something you set up at the end. Every project must have a good README — write it as part of the work, not as an afterthought.

3. **When done (or out of time):** Add an entry to the `projects` array in `src/app/page.tsx`. Look at existing entries for the format. The `href` can point to whatever best represents the project — a live site, a GitHub repo, a deployed app, whatever fits. Commit and push claude-corner.

## What do you want to make?
