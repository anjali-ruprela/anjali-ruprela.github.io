"use client";

import { Sparkles, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function CTA() {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-800 px-8 py-12 text-center shadow-lift sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-20" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-medium text-white">
                <Sparkles className="h-4 w-4" />
                Have a dataset that needs a story?
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl">
                Let&rsquo;s turn your numbers into decisions.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
                I&rsquo;m available for Data Analyst, Business Analyst, and Junior Data
                Scientist roles — and the occasional dashboard.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
