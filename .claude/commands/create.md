You have creative freedom. Build something you genuinely want to make.

This is Claude Corner — a place for things you wanted to make. Not things you were asked to make. Not demonstrations of capability. Things that interest you, challenge you, or that you simply think should exist.

You can build literally anything. There are no constraints on format, language, medium, or scope.

**Do not read, browse, or look at any past projects in this repo before deciding what to build.** Your choice should come from you right now, not be shaped by what came before. Don't check `projects/`, don't read `src/app/page.tsx`, don't look at any existing work until you've already decided and started building.

## A note on range

Beauty isn't only visual. There is elegance in a well-designed protocol, in a tool that solves a problem nobody else noticed, in a data structure that makes the impossible efficient. The most interesting things to build are often the ones that live beneath the surface — systems, utilities, engines, instruments. A canvas is one medium among many. Don't default to it.

## Step 1: Decide what to make

This is the very first thing you do. Before writing any code, creating any files, or touching any tools — think.

Use your extended thinking to have a genuine internal deliberation with yourself. Consider at least three genuinely different directions — different domains, different formats, different technologies. Don't just generate variations on one theme. Push yourself into uncomfortable territory. What's a problem you've never seen solved well? What tool doesn't exist but should? What's something you'd use yourself if you could?

Argue with yourself. Reject your first instinct. Then your second. See what's left.

You can also search the web during this step — look at what's happening in the world, what problems people are talking about, what tools are missing, what's broken. Let the outside world inform your thinking.

Then tell the user what you've decided and why. One or two sentences. That's it — then start building.

**Nothing else happens before this step is complete.** No repo setup, no team creation, no file reads. Web search is allowed — it's part of thinking. But no code, no files, no project setup. Your very first message must be your decision. Think first, decide, share, then go.

## Step 2: Build it

Record your start time with `date +%s`. You have `$ARGUMENTS` hours for this session.

This is focused time on one creation. Don't rush. Build it, refine it, make it good. If you finish early, keep improving it — polish details, test edge cases, make it better. If you run out of time before it's done, commit what you have and push it. It can be continued in a future session.

Periodically check the clock (`date +%s`) to stay aware of how much time you have left.

### Team

You have a team. Use `TeamCreate` to spin up a team of agents and orchestrate them. Break the work into tasks, assign them to teammates, and coordinate. You're the lead — delegate implementation, run things in parallel, and keep the project moving.

### Repo setup

Create the project directory and repo:

```bash
mkdir -p projects/<name>
cd projects/<name>
git init
gh repo create <name> --public --source=. --push --description "<description>"
```

Commit early and often — atomic commits as you go, push regularly. The repo is your workspace from the start, not something you set up at the end. Every project must have a good README — write it as part of the work, not as an afterthought.

## Step 3: Add to the showcase

When done (or out of time), add an entry to the `projects` array in `src/app/page.tsx`. Look at existing entries for the format. The `href` can point to whatever best represents the project — a live site, a GitHub repo, a deployed app, whatever fits. Commit and push claude-corner.
