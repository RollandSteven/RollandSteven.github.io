import Link from "next/link";
import { profile, experience, education } from "@/content/profile";
import { projects } from "@/content/projects";

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-2xl border-b border-ink pb-2 mb-2">{children}</h2>
);

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24">
      <header className="flex items-center justify-between py-6 text-sm">
        <span className="font-semibold">{profile.name}</span>
        <nav className="flex gap-5 text-muted">
          <a href="#work" className="hover:text-ink">Work</a>
          <a href="#projects" className="hover:text-ink">Projects</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </nav>
      </header>

      <section className="pt-10 pb-14">
        <p className="text-teal text-sm mb-3">{profile.title}</p>
        <h1 className="font-serif text-4xl sm:text-6xl leading-[1.05] max-w-2xl">
          Software for money that has to add up.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">{profile.intro}</p>
      </section>

      <section id="work" className="py-8">
        <H>Experience</H>
        <ul>
          {experience.map((e) => (
            <li key={e.period + e.role} className="grid sm:grid-cols-[11rem_1fr] gap-x-6 gap-y-1 py-4 border-b border-rule">
              <span className="text-sm text-muted tabular-nums">{e.period}</span>
              <div>
                <p className="font-medium">{e.role}</p>
                <p className="text-sm text-muted">{e.org}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed max-w-prose">{e.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">Employer systems are described in general terms only. No internal code or data is published here.</p>
      </section>

      <section id="projects" className="py-8">
        <H>Projects</H>
        <ul>
          {projects.map((p) => (
            <li key={p.slug} className="border-b border-rule">
              <Link href={`/projects/${p.slug}/`} className="grid sm:grid-cols-[11rem_1fr] gap-x-6 py-4 group">
                <span className="text-sm text-muted">{p.status}</span>
                <span>
                  <span className="font-medium group-hover:text-teal underline-offset-4 group-hover:underline">{p.title}</span>
                  <span className="block mt-1 text-[0.95rem] text-muted max-w-prose">{p.summary}</span>
                  <span className="block mt-1 text-xs text-muted">{p.stack.join(", ")}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-8">
        <H>Education and certification</H>
        <ul className="mt-3 space-y-2 text-[0.95rem]">{education.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>

      <section id="contact" className="py-8">
        <H>Contact</H>
        <p className="mt-3 text-muted">{profile.location}</p>
        <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          <a className="underline underline-offset-4 hover:text-teal" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="underline underline-offset-4 hover:text-teal" href={profile.github}>GitHub</a>
          {profile.linkedin && <a className="underline underline-offset-4 hover:text-teal" href={profile.linkedin}>LinkedIn</a>}
        </p>
      </section>
    </main>
  );
}
