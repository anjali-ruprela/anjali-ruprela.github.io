"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "in/anjali-ruprela", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "@anjali-ruprela", href: profile.github },
  { icon: MapPin, label: "Location", value: profile.location, href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = encodeURIComponent(String(data.get("name") || ""));
    const message = encodeURIComponent(String(data.get("message") || ""));
    const from = encodeURIComponent(String(data.get("email") || ""));
    window.location.href = `mailto:${profile.email}?subject=Portfolio enquiry from ${name}&body=${message}%0D%0A%0D%0AReply to: ${from}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="sec-title">Contact Me</h2>
          <p className="sec-sub">Let&rsquo;s build something with data</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group card p-5 transition-all hover:-translate-y-0.5 hover:border-brand/20"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-ink-300">
                    {c.label}
                  </p>
                  <p className="truncate text-sm font-medium text-ink-700">{c.value}</p>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-teal" />
                  <p className="mt-4 font-display text-lg font-bold text-ink-900">
                    Opening your email client…
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    Thanks for reaching out — I&rsquo;ll reply soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="name" label="Name" placeholder="Jane Recruiter" />
                    <Field name="email" label="Email" type="email" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about the role or project…"
                      className="w-full resize-none rounded-xl border border-brand/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send message
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-ink-400">
                    Opens your email app — no data is stored.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-brand/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
