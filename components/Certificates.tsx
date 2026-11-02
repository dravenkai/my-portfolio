"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { certificates } from "@/data/content";

export function Certificates() {
  const [active, setActive] = useState<(typeof certificates)[number] | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  function slide(direction: number) {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.8, 360), behavior: "smooth" });
  }

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Awards</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">Certificates</h2>
          <p className="mt-3 max-w-xl text-sm text-muted">Swipe the row, then open one to read it.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button type="button" onClick={() => slide(-1)} className="h-11 rounded-full border border-line px-4 text-sm" aria-label="Scroll certificates back">
            Prev
          </button>
          <button type="button" onClick={() => slide(1)} className="h-11 rounded-full border border-line px-4 text-sm" aria-label="Scroll certificates forward">
            Next
          </button>
        </div>
      </div>

      <div ref={scroller} className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 no-scrollbar">
        {certificates.map((item) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setActive(item)}
            className="w-[82%] shrink-0 snap-start overflow-hidden rounded-3xl border border-line bg-card text-left sm:w-[46%] lg:w-[31%]"
          >
            <span className="flex h-44 items-center justify-center bg-white">
              <Image src={item.image} alt="" width={640} height={420} className="h-44 w-full object-contain" />
            </span>
            <span className="block p-4">
              <span className="block font-semibold">{item.title}</span>
              <span className="mt-1 block text-sm text-muted">{item.detail}</span>
              <span className="mt-2 block font-mono text-[11px] uppercase tracking-wide text-gold">{item.date}</span>
            </span>
          </button>
        ))}
      </div>

      {active
        ? createPortal(
            <div
              className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4"
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              onClick={() => setActive(null)}
            >
              <div
                className="max-h-[90dvh] w-full max-w-4xl overflow-auto rounded-2xl bg-card p-3"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-2 flex items-start justify-between gap-4 px-1 pt-1">
                  <div>
                    <p className="font-semibold">{active.title}</p>
                    <p className="text-sm text-muted">{active.issuer} · {active.date}</p>
                  </div>
                  <button type="button" onClick={() => setActive(null)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line" aria-label="Close certificate">
                    <X size={16} />
                  </button>
                </div>
                <Image
                  src={active.image}
                  alt={`${active.title} from ${active.issuer}`}
                  width={1400}
                  height={1000}
                  className="mx-auto h-auto max-h-[72dvh] w-auto max-w-full rounded-xl bg-white object-contain"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
