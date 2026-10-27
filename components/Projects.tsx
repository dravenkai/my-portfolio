import { projects } from "@/data/content";

export function Projects() {
  const featured = projects.slice(0, 4);
  const more = projects.slice(4);

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">Selected work</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-serif text-4xl text-teal-deep">Projects and demos</h2>
        <a href="https://github.com/dravenkai" target="_blank" rel="noreferrer" className="text-sm font-medium text-teal underline-offset-4 hover:underline">
          All repositories on GitHub
        </a>
      </div>
      <div className="mt-8 grid gap-6">
        {featured.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-[2rem] border border-line bg-card">
            <div className="grid lg:grid-cols-2">
              <div className="flex min-h-48 items-center bg-white">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} screenshot`} className="h-auto w-full object-contain" />
                ) : (
                  <div className="flex h-full min-h-48 w-full items-end bg-[radial-gradient(circle_at_20%_20%,#1f6a62,transparent_45%),linear-gradient(160deg,#143f45,#0d2c31)] p-6">
                    <p className="font-serif text-3xl text-card">{project.title}</p>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-3xl text-teal-deep">{project.title}</h3>
                  {project.award ? (
                    <span className="rounded-full bg-[#f6ead2] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
                      {project.award}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-muted">{project.context}</p>
                <p className="mt-4 max-w-2xl leading-7">{project.summary}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.stack.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li key={item} className="rounded-full border border-line px-3 py-1 text-xs text-teal-deep">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-card"
                    >
                      Live demo
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-teal"
                    >
                      Source code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {more.map((project) => (
          <article key={project.title} className="rounded-3xl border border-line bg-card p-5">
            <h3 className="font-serif text-2xl text-teal-deep">{project.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">{project.context}</p>
            <p className="mt-3 text-sm leading-6">{project.summary}</p>
            <div className="mt-4 flex gap-4 text-sm font-semibold">
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-teal">
                  Demo
                </a>
              ) : null}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-teal">
                  Code
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
