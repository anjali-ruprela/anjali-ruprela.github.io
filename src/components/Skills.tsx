"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Code2, BarChart3, Database, Sigma, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

const icons: Record<string, typeof Code2> = {
  Programming: Code2,
  "Data Analysis": Database,
  Visualization: BarChart3,
  Statistics: Sigma,
  Tools: Wrench,
};

function SkillAccordion({
  group,
  open,
  onToggle,
}: {
  group: (typeof skillGroups)[number];
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = icons[group.category] ?? Code2;
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <span className="flex-1">
          <span className="block font-display text-base font-bold text-ink-900">
            {group.category}
          </span>
          <span className="block text-xs text-ink-400">
            {group.skills.length} skills
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 text-ink-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 px-5 pb-5">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ink-700">{s.name}</span>
                    <span className="font-mono text-xs text-ink-400">{s.level}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-brand-50">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-brand-300"
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Skills() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="skills" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="sec-title">Skills</h2>
          <p className="sec-sub">My technical level</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 0.06}>
              <SkillAccordion
                group={group}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
