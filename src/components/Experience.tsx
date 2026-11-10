"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading eyebrow="03 · Experience" title="Where I've been building." />
      <div ref={ref} className="relative pl-8 md:pl-12">
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-[15px]" />
        <motion.div
          style={{ scaleY: h }}
          className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-cyan via-violet to-pink md:left-[15px]"
        />
        <div className="space-y-10">
          {experience.map((e) => (
            <Reveal key={e.company}>
              <div className="relative">
                <span className="absolute -left-[33px] top-7 h-4 w-4 rounded-full border-2 border-violet bg-background md:-left-[49px] md:h-[18px] md:w-[18px]" />
                <SpotlightCard className="p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-2xl font-semibold">{e.role}</h3>
                    <span className="font-mono text-sm text-cyan">{e.period}</span>
                  </div>
                  <p className="mb-5 mt-1 text-muted">
                    {e.company} · {e.place}
                  </p>
                  <ul className="space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-foreground/80">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
