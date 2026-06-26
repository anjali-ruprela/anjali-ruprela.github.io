"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="sec-title">Certifications</h2>
          <p className="sec-sub">Verified credentials</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.verify}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-brand/[0.08] bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-soft">
                  <BadgeCheck className="h-6 w-6" />
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-teal/20 bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal">
                  Verified
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink-900">{c.title}</h3>
              <p className="mt-1 font-mono text-xs text-ink-400">{c.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{c.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Verify credential
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
