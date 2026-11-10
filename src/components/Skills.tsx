import { skillGroups, marquee } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";

export function Skills() {
  const loop = [...marquee, ...marquee];
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="02 · Skills"
          title="A toolkit built for scale."
          sub="Architecture, state, real-time and integrations: the pieces that make an app production-ready."
        />
      </div>

      <div className="relative mb-16 overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {loop.map((m, i) => (
            <span key={i} className="flex items-center gap-10 text-2xl font-medium text-foreground/70">
              {m}
              <span className="text-violet">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 4) * 0.07}>
            <SpotlightCard className="h-full p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
