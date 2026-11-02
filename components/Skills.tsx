import { skillGroups } from "@/data/content";
import { Reveal } from "./Reveal";

const ribbon = skillGroups.flatMap((group) => group.items);

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Skills</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">What I build with</h2>
      </Reveal>
      <div className="marquee-wrap mt-8 overflow-hidden rounded-full border border-line bg-card/70 py-3">
        <div className="marquee-track px-3">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex gap-3 pr-3" aria-hidden={copy === 1}>
              {ribbon.map((item) => (
                <span key={`${copy}-${item}`} className="rounded-full bg-foam px-3 py-1 text-sm text-ink">
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <Reveal key={group.title}>
            <article className="h-full rounded-3xl border border-line bg-card p-5">
              <h3 className="font-serif text-2xl">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
