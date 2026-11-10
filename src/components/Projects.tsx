import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";
import { ArrowUpRight, Sparkles } from "lucide-react";

function Card({ p }: { p: Project }) {
  return (
    <SpotlightCard className="flex h-full flex-col p-7">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-1 text-sm text-cyan">{p.kind}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5 text-right">
          <span className="font-mono text-xs text-muted">{p.period}</span>
          {p.badge && (
            <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] text-emerald-300">
              {p.badge}
            </span>
          )}
        </div>
      </div>
      <p className="text-muted">{p.description}</p>
      <ul className="my-5 space-y-2 text-sm text-foreground/80">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2.5">
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {p.tech.map((t) => (
          <span key={t} className="rounded-md border border-line bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
      {p.link && (
        <a href={p.link.href} className="mt-5 inline-flex items-center gap-1 text-sm text-cyan hover:underline">
          {p.link.label} <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </SpotlightCard>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading
        eyebrow="04 · Projects"
        title="Selected work."
        sub="Production apps across mobility, networking, enterprise and e-commerce."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <Card p={p} />
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <Card p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
