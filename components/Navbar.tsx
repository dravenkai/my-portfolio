"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#certificates", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (nearBottom) {
        setActive(links[links.length - 1].href);
        return;
      }

      // The section whose top has passed just under the navbar is the one being read.
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) current = `#${section.id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#07080c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="min-w-0 leading-tight">
          <span className="block truncate font-serif text-base font-semibold tracking-tight sm:text-lg">Kaung Myat Thant</span>
          <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">{profile.role}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted lg:flex" aria-label="Page">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "text-ink" : "transition hover:text-ink"}
              aria-current={active === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-accent px-4 py-2 font-semibold text-[#1a0c08]">
            Hire me
          </a>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <div className="h-0.5 bg-white/10">
        <div className="h-full bg-accent" style={{ width: `${progress * 100}%` }} />
      </div>
      {open ? (
        <nav className="grid min-h-[calc(100dvh-4.25rem)] content-start gap-1 border-t border-white/10 bg-[#07080c] px-4 py-4 lg:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-4 text-2xl font-serif"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3 rounded-full border border-line px-4 py-3 text-center text-sm font-semibold"
          >
            GitHub
          </a>
        </nav>
      ) : null}
    </header>
  );
}
