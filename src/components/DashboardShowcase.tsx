"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowDownRight, ArrowUpRight, Users, IndianRupee, ShoppingCart, Repeat } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const revenue = [
  { m: "Jan", revenue: 320, profit: 96 },
  { m: "Feb", revenue: 410, profit: 132 },
  { m: "Mar", revenue: 388, profit: 120 },
  { m: "Apr", revenue: 552, profit: 190 },
  { m: "May", revenue: 610, profit: 232 },
  { m: "Jun", revenue: 720, profit: 281 },
];

const segments = [
  { name: "Champions", value: 34, color: "#7C3AED" },
  { name: "Loyal", value: 27, color: "#14B8A6" },
  { name: "At Risk", value: 22, color: "#F59E0B" },
  { name: "New", value: 17, color: "#94A3B8" },
];

const sales = [
  { d: "W1", units: 120 },
  { d: "W2", units: 168 },
  { d: "W3", units: 142 },
  { d: "W4", units: 204 },
  { d: "W5", units: 188 },
  { d: "W6", units: 246 },
];

const kpis = [
  { icon: IndianRupee, label: "Total Revenue", value: "₹4.82M", delta: "+18.2%", up: true },
  { icon: ShoppingCart, label: "Orders", value: "12,480", delta: "+9.4%", up: true },
  { icon: Users, label: "New Customers", value: "1,932", delta: "+12.1%", up: true },
  { icon: Repeat, label: "Churn Rate", value: "4.6%", delta: "-1.3%", up: false },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid rgba(15,23,42,0.08)",
  boxShadow: "0 12px 28px -10px rgba(15,23,42,0.25)",
  fontSize: 12,
};

function Panel({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white p-5 shadow-soft ${className}`}
    >
      <div className="mb-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-300">
          {subtitle}
        </p>
        <h3 className="font-display text-base font-bold text-ink-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export function DashboardShowcase() {
  const reduce = useReducedMotion();

  return (
    <section id="dashboard" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/40 to-transparent" />
      <div className="container-px relative">
        <Reveal>
          <h2 className="sec-title">Dashboard Showcase</h2>
          <p className="sec-sub">Live, interactive analytics</p>
        </Reveal>

        {/* KPI row */}
        <Reveal delay={0.05} className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-2xl border border-ink-900/[0.06] bg-white p-5 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand">
                  <k.icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span
                  className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                    k.up ? "text-teal" : "text-gold"
                  }`}
                >
                  {k.up ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  )}
                  {k.delta}
                </span>
              </div>
              <p className="mt-4 font-display text-2xl font-bold text-ink-900">
                {k.value}
              </p>
              <p className="mt-0.5 text-xs text-ink-400">{k.label}</p>
            </div>
          ))}
        </Reveal>

        {/* Charts grid */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Reveal delay={0.05} className="lg:col-span-2">
            <Panel title="Revenue vs. Profit" subtitle="Monthly · ₹ thousands">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenue} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                    <defs>
                      <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="prof" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#14B8A6" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#14B8A6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(15,23,42,0.06)" vertical={false} />
                    <XAxis dataKey="m" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94A3B8" }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94A3B8" }} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "#CBD5E1", strokeDasharray: 4 }} />
                    <Area type="monotone" dataKey="revenue" stroke="#7C3AED" strokeWidth={2.5} fill="url(#rev)" isAnimationActive={!reduce} />
                    <Area type="monotone" dataKey="profit" stroke="#14B8A6" strokeWidth={2.5} fill="url(#prof)" isAnimationActive={!reduce} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.1}>
            <Panel title="Customer Segmentation" subtitle="K-Means · share %">
              <div className="flex h-64 items-center">
                <div className="h-full w-1/2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={segments}
                        dataKey="value"
                        innerRadius={42}
                        outerRadius={72}
                        paddingAngle={3}
                        stroke="none"
                        isAnimationActive={!reduce}
                      >
                        {segments.map((s) => (
                          <Cell key={s.name} fill={s.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={tooltipStyle} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <ul className="w-1/2 space-y-2.5">
                  {segments.map((s) => (
                    <li key={s.name} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-ink-600">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                        {s.name}
                      </span>
                      <span className="font-mono text-xs text-ink-400">{s.value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.05}>
            <Panel title="Sales Trend" subtitle="Weekly units sold">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sales} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(15,23,42,0.06)" vertical={false} />
                    <XAxis dataKey="d" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94A3B8" }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94A3B8" }} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "#CBD5E1", strokeDasharray: 4 }} />
                    <Line type="monotone" dataKey="units" stroke="#F59E0B" strokeWidth={2.5} dot={{ r: 3, fill: "#F59E0B" }} activeDot={{ r: 5 }} isAnimationActive={!reduce} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <Panel title="Category Performance" subtitle="Revenue by product line">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { c: "Electronics", v: 86 },
                    { c: "Apparel", v: 64 },
                    { c: "Home", v: 72 },
                    { c: "Beauty", v: 48 },
                    { c: "Sports", v: 58 },
                    { c: "Books", v: 39 },
                  ]} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(15,23,42,0.06)" vertical={false} />
                    <XAxis dataKey="c" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94A3B8" }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "#94A3B8" }} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(37,99,235,0.06)" }} />
                    <Bar dataKey="v" radius={[6, 6, 0, 0]} fill="#7C3AED" isAnimationActive={!reduce} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Panel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
