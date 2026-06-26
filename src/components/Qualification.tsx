"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { education, certifications, journey } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

type Node = { title: string; place: string; period: string; desc: string };

const educationNodes: Node[] = [
  ...education.map((e) => ({
    title: e.degree,
    place: `${e.school} · ${e.place}`,
    period: "",
    desc: e.detail,
  })),
  ...certifications.map((c) => ({
    title: c.title,
    place: c.issuer,
    period: "Certified",
    desc: c.blurb,
  })),
];

const experienceNodes: Node[] = journey.map((j) => ({
  title: j.title,
  place: j.skills.join(" · "),
  period: `Phase ${j.phase}`,
  desc: j.desc,
}));

function Timeline({ nodes }: { nodes: Node[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl">
      <span className="absolute left-4 top-1 h-full w-px bg-gradient-to-b from-brand/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
      {nodes.map((n, i) => (
        <motion.li
          key={n.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className={`relative mb-8 pl-12 sm:w-1/2 sm:pl-0 ${
            i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
          }`}
        >
          <span
            className={`absolute left-0 top-1.5 grid h-8 w-8 place-items-center rounded-full border-4 border-canvas bg-brand text-white shadow-soft sm:left-auto ${
              i % 2 === 0 ? "sm:-right-4" : "sm:-left-4"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <div className="card p-5">
            {n.period && (
              <span className="font-mono text-xs font-medium text-brand">{n.period}</span>
            )}
            <h3 className="mt-1 font-display text-lg font-bold text-ink-900">{n.title}</h3>
            <p className="mt-0.5 text-sm font-medium text-ink-500">{n.place}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">{n.desc}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export function Qualification() {
  const [tab, setTab] = useState<"education" | "experience">("experience");

  return (
    <section id="qualification" className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="sec-title">Qualification</h2>
          <p className="sec-sub">My personal journey</p>
        </Reveal>

        <div className="mt-10 flex justify-center gap-3">
          {[
            { key: "education", label: "Education", icon: GraduationCap },
            { key: "experience", label: "Experience", icon: Briefcase },
          ].map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key as typeof tab)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                tab === t.key
                  ? "border-brand bg-brand text-white shadow-soft"
                  : "border-brand/15 bg-white text-ink-500 hover:border-brand/30 hover:text-brand"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Timeline nodes={tab === "education" ? educationNodes : experienceNodes} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
