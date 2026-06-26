"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Database,
  Github,
  Target,
  Wrench,
} from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

const tags = ["All", "Dashboard", "SQL", "Machine Learning", "Statistics"] as const;

const tagColor: Record<Project["tag"], string> = {
  Dashboard: "text-brand bg-brand-50 border-brand/15",
  SQL: "text-teal bg-teal-50 border-teal/20",
  "Machine Learning": "text-gold bg-gold-50 border-gold/20",
  Statistics: "text-ink-700 bg-brand-50 border-brand/10",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand/[0.08] bg-white shadow-soft transition-shadow hover:shadow-lift"
    >
      <div className="relative h-36 overflow-hidden border-b border-brand/[0.06] bg-gradient-to-br from-brand-50 via-white to-brand-100/50">
        <div className="absolute inset-0 bg-grid-faint [background-size:22px_22px] opacity-60" />
        <div className="absolute inset-x-5 bottom-0 flex h-20 items-end gap-1.5">
          {[40, 65, 48, 80, 58, 92, 70, 84].map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-t bg-brand/70"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
              style={{ opacity: 0.35 + (h / 100) * 0.5 }}
            />
          ))}
        </div>
        <span className={`absolute left-4 top-4 chip ${tagColor[project.tag]}`}>
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-ink-900">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{project.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-700"
        >
          {open ? "Hide case study" : "Read case study"}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-4 border-t border-brand/[0.06] pt-5 text-sm">
                <Detail icon={Target} label="Problem">
                  {project.problem}
                </Detail>
                <Detail icon={Database} label="Dataset">
                  {project.dataset}
                </Detail>
                <Detail icon={Wrench} label="Approach">
                  <ul className="mt-1 space-y-1">
                    {project.approach.map((a) => (
                      <li key={a} className="flex gap-2 text-ink-500">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </Detail>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {project.results.map((r) => (
                    <div key={r.label} className="rounded-xl border border-brand/[0.08] bg-canvas p-3 text-center">
                      <p className="font-display text-base font-bold text-ink-900">{r.value}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-ink-400">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex gap-2.5 pt-1">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary flex-1 text-[13px]">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary flex-1 text-[13px]">
            Live Dashboard
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Target;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-400">
        <Icon className="h-3.5 w-3.5 text-brand" />
        {label}
      </p>
      <div className="mt-1 leading-relaxed text-ink-500">{children}</div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof tags)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="portfolio" className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="sec-title">Portfolio</h2>
          <p className="sec-sub">Featured case studies</p>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                filter === t
                  ? "border-brand bg-brand text-white shadow-soft"
                  : "border-brand/15 bg-white text-ink-500 hover:border-brand/30 hover:text-brand"
              }`}
            >
              {t}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <AnimatePresence>
            {visible.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
