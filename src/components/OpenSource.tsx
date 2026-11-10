"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Package } from "lucide-react";
import { openSource } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const lines = [
  { t: "$ dart pub global activate easy_init_cli", c: "text-foreground" },
  { t: "$ easy_init create my_app --arch clean", c: "text-foreground" },
  { t: "✔ Generated project structure", c: "text-emerald-400" },
  { t: "✔ Wired dependency injection & TDD setup", c: "text-emerald-400" },
  { t: "✔ Ready. Start building features.", c: "text-cyan" },
];

export function OpenSource() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="open-source" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading eyebrow="05 · Open source" title="I build tools for developers, too." />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 p-3 text-cyan">
              <Package />
            </div>
            <div>
              <h3 className="font-mono text-2xl font-semibold">{openSource.name}</h3>
              <p className="text-sm text-muted">{openSource.tagline}</p>
            </div>
          </div>
          <p className="leading-relaxed text-muted">{openSource.description}</p>
          <div className="my-6 flex items-end gap-3">
            <span className="gradient-text text-5xl font-semibold">{openSource.metric.value}</span>
            <span className="pb-2 text-muted">{openSource.metric.label}</span>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {openSource.tech.map((t) => (
              <span key={t} className="rounded-md border border-line bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
          <a
            href={openSource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform hover:scale-105"
          >
            View on pub.dev <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div ref={ref} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d16] shadow-2xl shadow-violet/10">
            <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 font-mono text-xs text-muted">terminal</span>
            </div>
            <div className="min-h-[220px] space-y-2 p-5 font-mono text-sm">
              {lines.map((l, i) => (
                <motion.p
                  key={l.t}
                  className={l.c}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.55 }}
                >
                  {l.t}
                </motion.p>
              ))}
              <span className="animate-blink inline-block h-4 w-2 bg-foreground/80 align-middle" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
