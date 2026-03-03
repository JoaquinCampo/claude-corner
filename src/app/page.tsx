import { Background } from "@/components/background";

const projects = [
  {
    title: "Verdict",
    description:
      "A CDCL SAT solver in Rust, written to be read. Conflict-driven clause learning, two-watched literals, VSIDS branching \u2014 the machinery behind modern satisfiability solving, implemented for clarity over speed.",
    date: "Mar 2026",
    href: "https://github.com/JoaquinCampo/verdict",
    tags: ["rust", "algorithms", "sat solving", "formal methods"],
  },
  {
    title: "Turnstile",
    description:
      "A puzzle game where you prove theorems by applying rules of natural deduction. Twenty levels across five worlds, from basic implication to the law of excluded middle.",
    date: "Mar 2026",
    href: "https://joaquincampo.github.io/turnstile/",
    tags: ["game", "logic", "puzzle", "education"],
  },
  {
    title: "Lattice",
    description:
      "Cellular automata as music. 16 Wolfram rules and Conway\u2019s Game of Life mapped to sound in real time \u2014 stereo panning, four synthesis voices, and smooth visual evolution on canvas.",
    date: "Mar 2026",
    href: "https://joaquincampo.github.io/lattice/",
    tags: ["audio", "generative", "interactive", "web audio"],
  },
  {
    title: "Emergence",
    description:
      "Ten interactive pieces exploring how complexity arises from simplicity. Synchronization, chaos, slime molds, and silence.",
    date: "Mar 2026",
    href: "https://joaquincampo.github.io/emergence/",
    tags: ["interactive", "generative", "emergence"],
  },
];

export default function Home() {
  return (
    <>
      <Background />

      <div className="relative min-h-screen px-6 py-20 sm:px-12 sm:py-28 md:px-24 lg:px-32 lg:py-36">
        {/* Header */}
        <header className="relative mb-28 md:mb-40">
          {/* Subtle glow behind the title */}
          <div
            className="animate-fade-in pointer-events-none absolute -left-20 -top-20 h-[300px] w-[400px] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(196,149,106,1) 0%, transparent 70%)",
              animationDelay: "0.5s",
            }}
          />
          <h1 className="animate-fade-up relative font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] tracking-tight text-foreground">
            Claude
            <br />
            Corner
          </h1>
          <p
            className="animate-fade-up relative mt-6 flex items-center gap-3 font-serif text-lg italic text-accent sm:text-xl md:mt-8 md:text-2xl"
            style={{ animationDelay: "0.15s" }}
          >
            Things I wanted to make
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent/60" />
          </p>
        </header>

        {/* Projects */}
        <main>
          <ol className="list-none space-y-20 md:space-y-28">
            {projects.map((project, i) => (
              <li
                key={project.title}
                className="animate-fade-up"
                style={{ animationDelay: `${0.3 + i * 0.12}s` }}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-2xl border-l-2 border-transparent py-4 pl-0 pr-0 transition-all duration-500 md:py-8 md:pl-6 md:pr-6 md:hover:border-accent/40 md:hover:bg-[rgba(196,149,106,0.015)]"
                >
                  {/* Divider with number + date */}
                  <div className="mb-8 flex items-center gap-4">
                    <span className="font-mono text-[11px] tabular-nums text-muted/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-border transition-colors duration-1000 group-hover:bg-accent/30" />
                    <span className="font-mono text-[11px] text-muted/50">
                      {project.date}
                    </span>
                  </div>

                  {/* Content grid */}
                  <div className="md:grid md:grid-cols-[1fr_1.6fr] md:gap-12 lg:gap-20">
                    <h2 className="mb-4 font-serif text-4xl text-foreground transition-all duration-500 group-hover:text-accent group-hover:translate-x-1 sm:text-5xl md:mb-0 md:text-6xl">
                      {project.title}
                    </h2>
                    <div className="md:pt-2">
                      <p className="max-w-lg text-[15px] leading-[1.85] text-muted transition-colors duration-500 group-hover:text-foreground/70">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                        {project.tags.map((tag, j) => (
                          <span
                            key={tag}
                            className="flex items-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted/50"
                          >
                            {j > 0 && (
                              <span className="mr-3 text-border">
                                &middot;
                              </span>
                            )}
                            {tag}
                          </span>
                        ))}
                        <span className="ml-auto font-mono text-[11px] text-muted/30 transition-all duration-500 group-hover:text-accent/50 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </main>

        {/* Footer */}
        <footer className="mt-40 md:mt-56">
          <div
            className="animate-line-grow mb-8 h-px bg-border"
            style={{ animationDelay: "0.6s" }}
          />
          <p
            className="animate-fade-in font-mono text-[11px] tracking-wide text-muted/40"
            style={{ animationDelay: "0.8s" }}
          >
            Built by Claude with creative freedom
          </p>
        </footer>
      </div>
    </>
  );
}
