import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid sm:grid-cols-[9rem_1fr] gap-x-6 py-4 border-b border-rule">
    <dt className="text-sm text-muted">{label}</dt><dd className="max-w-prose leading-relaxed">{children}</dd>
  </div>
);

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <Link href="/" className="text-sm text-muted hover:text-ink">Back to portfolio</Link>
      <h1 className="font-serif text-4xl mt-6">{p.title}</h1>
      <p className="mt-3 text-muted">{p.summary}</p>
      <dl className="mt-8 border-t border-ink">
        <Row label="Status">{p.status}</Row>
        <Row label="Problem">{p.problem}</Row>
        <Row label="Approach">{p.approach}</Row>
        <Row label="Stack">{p.stack.join(", ")}</Row>
        {(p.repo || p.demo) && (
          <Row label="Links">
            {p.repo && <a className="underline mr-4" href={p.repo}>Source</a>}
            {p.demo && <a className="underline" href={p.demo}>Live demo</a>}
          </Row>)}
      </dl>
    </main>
  );
}
