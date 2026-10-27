import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">Skills</p>
      <h2 className="mt-3 font-serif text-4xl text-teal-deep">Tools I use to ship</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-line bg-card p-6">
            <h3 className="font-serif text-2xl text-teal">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full bg-foam px-3 py-1 text-sm text-teal-deep">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
