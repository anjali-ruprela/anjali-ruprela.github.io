"use client";

import { ArrowUpRight, LineChart, LayoutDashboard, FlaskConical } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const services = [
  {
    icon: LineChart,
    title: "Data Analysis",
    desc: "Cleaning, exploring, and modeling messy datasets to surface the patterns that matter.",
    points: ["Python & SQL pipelines", "Exploratory analysis", "KPI definition"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Reporting",
    desc: "Decision-ready Power BI dashboards with clean visual hierarchy and the right metrics up front.",
    points: ["Power BI & DAX", "Interactive reports", "Stakeholder storytelling"],
  },
  {
    icon: FlaskConical,
    title: "Stats & ML",
    desc: "From hypothesis tests and A/B experiments to clustering and regression for prediction.",
    points: ["A/B testing", "K-Means clustering", "Regression models"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="sec-title">What I Do</h2>
          <p className="sec-sub">Services I offer</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl border border-brand/[0.08] bg-gradient-to-br from-white to-brand-50/40 p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-white shadow-soft transition-transform group-hover:-rotate-6">
                  <s.icon className="h-6 w-6" strokeWidth={2.1} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="#portfolio" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  View work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
