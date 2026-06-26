import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const quick = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-700 to-brand-800 text-white">
      <div className="container-px py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold">
              Anjali<span className="text-brand-200">.</span>
            </p>
            <p className="mt-4 max-w-xs font-display text-xl font-semibold leading-snug">
              Transforming Data Into Decisions.
            </p>
            <p className="mt-2 text-sm text-white/70">
              {profile.role} · {profile.location}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Quick links</p>
            <ul className="mt-4 space-y-2.5">
              {quick.map((q) => (
                <li key={q.href}>
                  <a href={q.href} className="text-sm text-white/80 transition-colors hover:text-white">
                    {q.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resume} download className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Connect</p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-brand"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono text-xs">Built with Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
