"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/content";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phoneDisplay, href: profile.phoneHref },
  { label: "Telegram", value: profile.telegram, href: profile.telegramHref },
  { label: "Viber", value: profile.phoneDisplay, href: profile.viberHref },
  { label: "GitHub", value: "github.com/dravenkai", href: profile.github },
];

export function Contact() {
  const [sentHint, setSentHint] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSentHint(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
      <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-5xl">Let’s talk about a role.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
        Email and Telegram are the fastest. The form opens your mail app with the message filled in.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {channels.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="block rounded-2xl border border-line bg-card px-4 py-4"
              >
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{item.label}</span>
                <span className="mt-1 block break-all font-medium">{item.value}</span>
              </a>
            </li>
          ))}
        </ul>
        <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-line bg-card p-5 sm:p-8">
          <label className="block text-sm font-medium" htmlFor="name">Name</label>
          <input id="name" name="name" required autoComplete="name" className="mt-2 w-full rounded-xl border border-line bg-[#0c0e14] px-4 py-3 text-base" />
          <label className="mt-4 block text-sm font-medium" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-xl border border-line bg-[#0c0e14] px-4 py-3 text-base" />
          <label className="mt-4 block text-sm font-medium" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={5} className="mt-2 w-full rounded-xl border border-line bg-[#0c0e14] px-4 py-3 text-base" />
          <button type="submit" className="mt-5 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#1a0c08] sm:w-auto">
            Open email draft
          </button>
          {sentHint ? <p className="mt-3 text-sm text-muted">Your email app should open, addressed to {profile.email}.</p> : null}
        </form>
      </div>
      <footer className="mt-16 border-t border-line pt-6 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. {profile.role} · {profile.schoolShort}, {profile.location}.</p>
      </footer>
    </section>
  );
}
