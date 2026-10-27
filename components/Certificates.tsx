"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { certificates } from "@/data/content";

export function Certificates() {
  const [active, setActive] = useState<(typeof certificates)[number] | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">Certificates</p>
      <h2 className="mt-3 font-serif text-4xl text-teal-deep">Awards and courses</h2>
      <p className="mt-3 max-w-2xl text-muted">Select a certificate to view it larger.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setActive(item)}
            className="overflow-hidden rounded-3xl border border-line bg-card text-left transition hover:-translate-y-0.5 hover:border-teal"
          >
            <span className="flex h-48 items-center justify-center bg-white">
              <Image src={item.image} alt="" width={640} height={480} className="h-48 w-full object-contain" />
            </span>
            <span className="block p-4">
              <span className="block font-semibold">{item.title}</span>
              <span className="mt-1 block text-sm text-muted">{item.detail}</span>
              <span className="mt-2 block text-xs uppercase tracking-wide text-gold">{item.date}</span>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-2xl bg-card p-3" onClick={(event) => event.stopPropagation()}>
            <div className="mb-2 flex items-start justify-between gap-4 px-2 pt-1">
              <div>
                <p className="font-semibold">{active.title}</p>
                <p className="text-sm text-muted">{active.issuer} · {active.date}</p>
              </div>
              <button type="button" onClick={() => setActive(null)} className="rounded-full border border-line p-2" aria-label="Close certificate">
                <X size={16} />
              </button>
            </div>
            <Image src={active.image} alt={`${active.title} from ${active.issuer}`} width={1400} height={1000} className="h-auto w-full rounded-xl bg-white object-contain" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
