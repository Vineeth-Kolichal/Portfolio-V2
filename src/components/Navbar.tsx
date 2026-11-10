"use client";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-line bg-background/70 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="gradient-text">&lt;vineeth /&gt;</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-105 md:block"
        >
          Hire me
        </a>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-5 md:hidden">
          {links.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-lg text-muted hover:bg-white/5 hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-cyan via-violet to-pink"
      />
    </header>
  );
}
