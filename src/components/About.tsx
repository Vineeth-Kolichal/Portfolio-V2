import { about, stats, education } from "@/data/portfolio";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-28">
      <SectionHeading eyebrow="01 · About" title="Mobile engineer who ships products, not just screens." />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-card p-5">
              <div className="rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 p-3 text-cyan">
                <GraduationCap />
              </div>
              <div>
                <p className="font-medium text-foreground">{education.degree}</p>
                <p className="text-sm">{education.school}</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <SpotlightCard className="h-full p-6">
                <p className="gradient-text text-5xl font-semibold tracking-tight">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
