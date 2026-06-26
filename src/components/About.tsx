"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Counter } from "./ui/Counter";

export function About() {
  const shown = stats.slice(0, 3);

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <h2 className="sec-title">About Me</h2>
          <p className="sec-sub">My introduction</p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-100 to-transparent" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-700 shadow-card">
              <Image
                src="/profile.svg"
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-600">{profile.about}</p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {shown.map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <p className="font-display text-2xl font-bold text-ink-900">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-ink-400">{s.label}</p>
                </div>
              ))}
            </div>

            <a href={profile.resume} download className="btn-primary mt-8">
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
