import { profile } from "@/data/content";
import { Reveal } from "./Reveal";

const facts = [
  { label: "Looking for", value: "A junior web role where I can ship features and learn from review." },
  { label: "Recently", value: "Enginex at the MIIT Project Show, and Sar Mal, which received a Special Award." },
  { label: "How I work", value: "React, Next.js, and the MERN stack, with Git, Postman, Docker, and Figma in daily use." },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
          Interfaces people can use. Code another developer can pick up.
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {facts.map((fact, index) => (
          <Reveal key={fact.label}>
            <article className="h-full rounded-3xl border border-line bg-card p-5 sm:p-6">
              <p className="font-mono text-xs text-mint">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl">{fact.label}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{fact.value}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
        {profile.year} at the {profile.school}. Based in {profile.location}.
      </p>
    </section>
  );
}
