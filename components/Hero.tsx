"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { profile } from "@/data/content";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export function Hero() {
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotion(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:pb-24 lg:pt-32">
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rise min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Open to junior roles
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-base text-muted sm:text-lg">
            {profile.role} · also {profile.alsoKnownAs}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">{profile.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#1a0c08]">
              See the work
            </a>
            <a href="#contact" className="rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold">
              Contact
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-5 text-sm">
            <div>
              <dt className="text-muted">Focus</dt>
              <dd className="mt-1 font-medium">Next.js / MERN</dd>
            </div>
            <div>
              <dt className="text-muted">School</dt>
              <dd className="mt-1 font-medium">MIIT, year 4</dd>
            </div>
            <div>
              <dt className="text-muted">Based</dt>
              <dd className="mt-1 font-medium">Mandalay</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-w-0">
          <div className="relative h-56 w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,90,31,0.35),transparent_42%),linear-gradient(160deg,#171a24,#0b0c10)] sm:h-72 lg:h-[520px]">
            <div className="absolute inset-0">
              <SceneBoundary>
                <HeroScene motion={motion} />
              </SceneBoundary>
            </div>
            <p className="pointer-events-none absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
              a live sculpture
            </p>
          </div>
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-line bg-card p-3 lg:absolute lg:bottom-5 lg:left-5 lg:mt-0 lg:w-[250px] lg:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/portrait.png"
              alt="Portrait of Kaung Myat Thant"
              width={160}
              height={160}
              priority
              className="h-16 w-16 rounded-xl object-cover object-[center_20%] lg:h-20 lg:w-20"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{profile.name}</p>
              <p className="mt-1 text-xs text-muted">{profile.schoolShort} · {profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
