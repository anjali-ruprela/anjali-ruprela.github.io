"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Mouse, Send } from "lucide-react";
import Image from "next/image";
import { profile, heroRoles } from "@/lib/data";

function useTypewriter(words: string[]) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }
    const current = words[index % words.length];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) {
        setTimeout(() => setDeleting(true), 1300);
      } else if (deleting && next === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, reduce]);

  return text;
}

const socials = [
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export function Hero() {
  const role = useTypewriter(heroRoles);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-brand" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(75%_55%_at_50%_0%,black,transparent)]" />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
        {/* Left: socials rail + copy */}
        <div className="flex gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden flex-col items-center gap-3 pt-2 sm:flex"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="social-pill"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
            <span className="mt-2 h-16 w-px bg-gradient-to-b from-brand/30 to-transparent" />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-50 px-4 py-1.5 text-[13px] font-medium text-brand-700"
            >
              <span aria-hidden>👋</span> Hi, I&rsquo;m {profile.name}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-[3.4rem]"
            >
              Turning Data Into{" "}
              <span className="bg-gradient-to-r from-brand to-brand-300 bg-clip-text text-transparent">
                Actionable Insights
              </span>
            </motion.h1>

            <div className="mt-4 flex items-center gap-2 font-mono text-base text-ink-500 sm:text-lg">
              <span className="text-ink-400">role&nbsp;=</span>
              <span className="font-semibold text-ink-900">{role}</span>
              <span className="inline-block h-5 w-[8px] animate-blink bg-brand" aria-hidden />
            </div>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-500 sm:text-base">
              {profile.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Contact Me
                <Send className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={profile.resume} download className="btn-ghost">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            <a
              href="#about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink-400 transition-colors hover:text-brand"
            >
              <Mouse className="h-4 w-4 animate-bounce-slow" />
              Scroll down
            </a>
          </div>
        </div>

        {/* Right: blob portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-6 animate-blob bg-gradient-to-br from-brand-200 to-brand-100 blur-2xl" />
          <div className="relative aspect-square w-full animate-blob overflow-hidden bg-gradient-to-br from-brand to-brand-700 shadow-lift">
            <Image
              src="/profile.svg"
              alt={`${profile.name} — ${profile.role}`}
              fill
              priority
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-brand/15 bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-card"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-teal align-middle" />
            {profile.role} · {profile.location}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
