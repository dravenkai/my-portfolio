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
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 1024px)");
    const update = () => setShowScene(!motion.matches && wide.matches);
    update();
    motion.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-32">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-gold">
          {profile.role} · Open to roles
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-teal-deep sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-muted">Also known as {profile.alsoKnownAs}</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink/90">{profile.summary}</p>
        <p className="mt-4 text-base leading-7 text-muted">
          {profile.year} at the {profile.school}. Based in {profile.location}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-teal px-5 py-3 text-sm font-semibold text-card transition hover:bg-teal-deep"
          >
            View selected work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-teal transition hover:border-teal"
          >
            Email me
          </a>
        </div>
        <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6 text-sm">
          <div>
            <dt className="text-muted">Focus</dt>
            <dd className="mt-1 font-medium">MERN and Next.js</dd>
          </div>
          <div>
            <dt className="text-muted">School</dt>
            <dd className="mt-1 font-medium">MIIT, year 4</dd>
          </div>
          <div>
            <dt className="text-muted">Award</dt>
            <dd className="mt-1 font-medium">Project Show 2026</dd>
          </div>
        </dl>
      </div>

      <div className="relative mx-auto h-[520px] w-full max-w-md">
        {showScene ? (
          <SceneBoundary>
            <div className="absolute -right-2 top-0 h-64 w-64">
              <HeroScene />
            </div>
          </SceneBoundary>
        ) : null}
        <div className="absolute bottom-0 left-0 w-[86%] overflow-hidden rounded-[2rem] border border-line bg-card shadow-[0_24px_60px_rgba(28,25,21,0.12)]">
          <Image
            src="/images/portrait.png"
            alt="Portrait of Kaung Myat Thant"
            width={900}
            height={1120}
            priority
            className="h-[430px] w-full object-cover object-[center_20%]"
          />
        </div>
        <div className="absolute bottom-6 right-0 flex items-center gap-3 rounded-2xl border border-line bg-card/95 px-3 py-2 shadow-lg backdrop-blur">
          <Image
            src="/images/miit-logo.png"
            alt="Myanmar Institute of Information Technology logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full bg-black object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Studying at</p>
            <p className="text-sm font-semibold">MIIT Mandalay</p>
          </div>
        </div>
      </div>
    </section>
  );
}
