import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">
      © {profile.name}. Crafted with Next.js, Tailwind &amp; Motion.
    </footer>
  );
}
