"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1300);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((i + 1) % words.length);
          }
        }
      },
      del ? 35 : 75,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return (
    <span className="gradient-text">
      {text}
      <span className="animate-blink text-foreground">|</span>
    </span>
  );
}

function Phone() {
  const rows = [
    { c: "from-cyan to-violet", t: "Group ride · Western Ghats", s: "12 riders live" },
    { c: "from-violet to-pink", t: "Roadside assist", s: "Shield active" },
    { c: "from-pink to-cyan", t: "Expense split", s: "₹ 2,340 settled" },
  ];
  return (
    <div className="relative mx-auto w-[260px] animate-float sm:w-[290px]">
      <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-cyan/25 via-violet/25 to-pink/25 blur-3xl" />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-[#0d0f18] p-3 shadow-2xl shadow-violet/20">
        <div className="absolute left-1/2 top-4 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#12142a] to-[#0a0b14] px-4 pb-6 pt-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">Flutter · 60fps</p>
          <p className="mb-4 mt-1 text-lg font-semibold">Good morning, rider</p>
          <div className="relative mb-4 h-32 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c18]">
            <svg viewBox="0 0 220 128" className="absolute inset-0 h-full w-full">
              <motion.path
                d="M10 105 C 50 20, 90 120, 130 60 S 190 30, 212 22"
                fill="none"
                stroke="url(#g)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.4, delay: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
              />
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop stopColor="#38bdf8" />
                  <stop offset="1" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> LIVE
            </span>
          </div>
          <div className="space-y-2.5">
            {rows.map((r) => (
              <div key={r.t} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] p-2.5">
                <div className={`h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br ${r.c}`} />
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium">{r.t}</p>
                  <p className="text-[11px] text-muted">{r.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {["Dart", "BLoC", "Socket.IO"].map((t, k) => (
        <motion.span
          key={t}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + k * 0.2, type: "spring" }}
          className={`absolute rounded-full border border-white/15 bg-background/80 px-3 py-1 font-mono text-xs backdrop-blur ${
            ["-left-8 top-24", "-right-6 top-44", "-left-4 bottom-20"][k]
          }`}
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

export function Hero() {
  const fade = (d: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan/15 blur-[120px]" aria-hidden />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-pink/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            {...fade(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
          >
            Hi, I&apos;m <span className="gradient-text">{profile.firstName}</span>.
            <br />
            <span className="text-3xl font-medium text-foreground/90 sm:text-5xl">
              <Typewriter words={profile.roles} />
            </span>
          </motion.h1>

          <motion.p {...fade(0.25)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform hover:scale-105"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 font-medium backdrop-blur transition-colors hover:border-white/30"
            >
              <Mail className="h-4 w-4" /> Let&apos;s talk
            </a>
            <div className="ml-1 flex items-center gap-1">
              {profile.links.github && (
                <a href={profile.links.github} aria-label="GitHub" className="rounded-full p-3 text-muted transition-colors hover:bg-white/5 hover:text-foreground">
                  <GithubIcon className="h-5 w-5" />
                </a>
              )}
              {profile.links.linkedin && (
                <a href={profile.links.linkedin} aria-label="LinkedIn" className="rounded-full p-3 text-muted transition-colors hover:bg-white/5 hover:text-foreground">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </motion.div>

          <motion.p {...fade(0.55)} className="mt-8 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4" /> {profile.location}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Phone />
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
