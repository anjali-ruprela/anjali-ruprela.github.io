"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#qualification", label: "Qualification" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand/[0.08] bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px flex h-[68px] items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink-900">
          Anjali<span className="text-brand">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-500 transition-colors hover:bg-brand-50 hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href={profile.resume} download className="btn-primary hidden text-[13px] md:inline-flex">
          <Download className="h-4 w-4" />
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-brand/15 bg-white text-ink-700 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand/[0.08] bg-white/95 backdrop-blur-xl md:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-700 hover:bg-brand-50"
              >
                {l.label}
              </a>
            ))}
            <a href={profile.resume} download onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
