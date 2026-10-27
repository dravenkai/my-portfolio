"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" className="leading-tight">
          <span className="block font-serif text-lg text-teal-deep">{profile.name}</span>
          <span className="block text-xs text-muted">{profile.role}</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="Page">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-teal px-4 py-2 font-medium text-card"
          >
            GitHub
          </a>
        </nav>
        <button
          type="button"
          className="rounded-lg border border-line p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <nav className="space-y-1 border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2 text-sm"
            >
              {link.label}
            </a>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer" className="block px-2 py-2 text-sm font-medium text-teal">
            GitHub
          </a>
        </nav>
      ) : null}
    </header>
  );
}
