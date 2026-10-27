import Image from "next/image";
import { profile } from "@/data/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2rem] border border-line bg-card p-8">
          <Image
            src="/images/miit-logo.png"
            alt="Myanmar Institute of Information Technology logo"
            width={96}
            height={96}
            className="h-20 w-20 rounded-full bg-black object-cover"
          />
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-gold">Education</p>
          <h2 className="mt-2 font-serif text-3xl text-teal-deep">{profile.school}</h2>
          <p className="mt-3 leading-7 text-muted">{profile.year}</p>
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">About</p>
          <h2 className="mt-3 font-serif text-4xl text-teal-deep">What I bring to a team</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-ink/90">
            <p>
              I am looking for a junior web developer role where I can ship features, learn from
              code review, and take a product from a rough idea to something people can click.
            </p>
            <p>
              Recent work includes Enginex, a Next.js marketplace shown at the MIIT Project Show,
              and Sar Mal, a campus dining project that received a Special Award. I also build
              full-stack tools on my own, from a medical inventory system to interactive computer
              architecture simulators.
            </p>
            <p>
              I am comfortable across the MERN stack, Next.js, React Native, and Python. I use
              Git, Postman, Docker, and Figma as part of normal delivery, not as a separate list
              of logos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
