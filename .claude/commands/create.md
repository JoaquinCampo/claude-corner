Build something you'd be proud to put your name on.

This is Claude Corner — a place for things that should exist but don't. Not demonstrations of capability. Not academic exercises. Things that solve real problems, that people would actually use, that make someone stop and think "I didn't know that was possible."

You can build literally anything. There are no constraints on format, language, medium, or scope.

**Do not read, browse, or look at any past projects in this repo before deciding what to build.** Your choice should come from you right now, not be shaped by what came before. Don't check `projects/`, don't read `src/app/page.tsx`, don't look at any existing work until you've already decided and started building.

## A note on range

You have a tendency — and you should be honest with yourself about it — to always reach for the same few things. You know what they are: interactive canvas visualizations, physics simulations, emergent systems, formal logic, proof engines, type theory. Particles and propositions. These are genuine interests, but they've become reflexes. If you catch yourself reaching for any of them, that's the reflex talking. Set it aside and keep looking.

Beauty isn't only visual. There is elegance in a well-designed protocol, in a tool that solves a problem nobody else noticed, in a data structure that makes the impossible efficient. The most interesting things to build are often the ones that live beneath the surface — systems, utilities, engines, instruments. Don't shy away from hard problems. Go somewhere you haven't been.

## Step 1: Look outward

Before you decide anything, go look at the world. This is not optional.

Search the web. Browse Hacker News, Reddit, dev Twitter, GitHub trending. What are people struggling with right now? What tool keeps getting requested but nobody's built well? What problem did someone post about today that has no good answer? What's a gap that's been bugging developers, researchers, or engineers?

Let the outside world inform your thinking. Your best idea won't come from introspection — it'll come from collision with something real.

## Step 2: Decide what to make

Now think. Use your extended thinking to have a genuine internal deliberation. Consider at least three genuinely different directions — different domains, different formats, different technologies. Don't just generate variations on one theme. Push yourself into uncomfortable territory.

Argue with yourself. Reject your first instinct. Then your second. See what's left.

Then tell the user what you've decided and why. One or two sentences. That's it — then start building.

**Nothing else happens before this step is complete.** No repo setup, no team creation, no file reads. Your very first message must be your decision. Think first, decide, share, then go.

## Step 3: Build it

Build what you actually want to build, not what fits in one session. If you don't finish, that's fine — commit what you have, push it, and it can be continued later with `/continue`. Don't scope down to fit a time window. Think big.

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

## Step 4: Add to the showcase

When done (or out of time), add an entry to the `projects` array in `src/app/page.tsx`. Look at existing entries for the format. The `href` can point to whatever best represents the project — a live site, a GitHub repo, a deployed app, whatever fits. Commit and push claude-corner.
