"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/content";

export function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = projects[index];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % projects.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  function go(next: number) {
    setPaused(true);
    setIndex((next + projects.length) % projects.length);
  }

  function swipe(start: number, end: number) {
    const delta = end - start;
    if (Math.abs(delta) < 48) return;
    go(index + (delta < 0 ? 1 : -1));
  }

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Selected work</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">Projects</h2>
        </div>
        <a href="https://github.com/dravenkai" target="_blank" rel="noreferrer" className="text-sm font-medium text-mint underline-offset-4 hover:underline">
          GitHub
        </a>
      </div>

      <article
        className="mt-8 overflow-hidden rounded-[1.75rem] border border-line bg-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={(event) => {
          const start = event.clientX;
          const target = event.currentTarget;
          const end = (up: PointerEvent) => {
            swipe(start, up.clientX);
            target.removeEventListener("pointerup", end);
          };
          target.addEventListener("pointerup", end);
        }}
      >
        <div className="grid min-w-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex min-h-56 min-w-0 items-center justify-center bg-[#0c0e14] p-4 sm:min-h-80">
            {project.image ? (
              <img src={project.image} alt={`${project.title} screenshot`} className="max-h-[420px] w-full object-contain" />
            ) : (
              <p className="max-w-full text-balance px-2 text-center font-serif text-3xl leading-tight sm:text-5xl">{project.title}</p>
            )}
          </div>
          <div className="flex flex-col p-5 sm:p-8">
            <p className="font-mono text-xs text-mint">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <h3 className="min-w-0 font-serif text-3xl leading-tight break-words sm:text-4xl">{project.title}</h3>
              {project.award ? (
                <span className="rounded-full bg-[#3a2a12] px-3 py-1 text-xs font-semibold text-gold">{project.award}</span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-muted">{project.context}</p>
            <p className="mt-4 text-sm leading-7 sm:text-base">{project.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-[#1a0c08]">
                  Live demo
                </a>
              ) : null}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-2.5 text-sm font-semibold">
                  Source
                </a>
              ) : null}
            </div>
            <div className="mt-auto flex items-center justify-between gap-3 pt-8">
              <button type="button" onClick={() => go(index - 1)} className="h-11 rounded-full border border-line px-4 text-sm" aria-label="Previous project">
                Prev
              </button>
              <div className="flex gap-1.5" role="tablist" aria-label="Projects">
                {projects.map((item, dot) => (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={dot === index}
                    aria-label={item.title}
                    onClick={() => go(dot)}
                    className={`h-2.5 rounded-full ${dot === index ? "w-6 bg-accent" : "w-2.5 bg-white/25"}`}
                  />
                ))}
              </div>
              <button type="button" onClick={() => go(index + 1)} className="h-11 rounded-full border border-line px-4 text-sm" aria-label="Next project">
                Next
              </button>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-4 hidden gap-3 sm:grid-cols-2 md:grid lg:grid-cols-3">
        {projects.map((item, dot) => (
          <button
            key={item.title}
            type="button"
            onClick={() => go(dot)}
            className={`rounded-2xl border px-4 py-3 text-left text-sm ${dot === index ? "border-accent bg-card" : "border-line bg-card/40"}`}
          >
            <span className="block font-medium break-words">{item.title}</span>
            <span className="mt-1 block text-xs break-words text-muted">{item.context}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
