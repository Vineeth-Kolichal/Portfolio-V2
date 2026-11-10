import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const items = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: profile.location },
    profile.links.linkedin && { icon: LinkedinIcon, label: "LinkedIn", href: profile.links.linkedin },
    profile.links.github && { icon: GithubIcon, label: "GitHub", href: profile.links.github },
  ].filter(Boolean) as { icon: React.ElementType; label: string; href?: string }[];

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-32">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan/20 via-violet/25 to-pink/20 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan">06 · Contact</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something <span className="gradient-text">great</span> together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Hiring a Flutter or React Native developer, or have a freelance project in mind? I&apos;d love to hear about it.
          </p>
          <a
            href={`mailto:${profile.email}?subject=Let's work together`}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-lg font-medium text-background transition-transform hover:scale-105"
          >
            <Mail className="h-5 w-5" /> Say hello
          </a>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {items.map(({ icon: Icon, label, href }) => {
              const inner = (
                <>
                  <Icon className="h-4 w-4 text-cyan" /> {label}
                </>
              );
              const cls = "inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm backdrop-blur";
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className={`${cls} transition-colors hover:border-white/30`}>{inner}</a>
                  ) : (
                    <span className={cls}>{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
