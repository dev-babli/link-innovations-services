import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started | Link Innovations",
  description: "Kick off your project with a simple, clear process.",
};

export default function GetStartedPage() {
  const steps = [
    {
      num: 1,
      title: "Discovery Call",
      desc: "We learn about your goals, constraints, and success metrics.",
    },
    {
      num: 2,
      title: "Scope & Proposal", 
      desc: "Clear deliverables, milestones, timeline, and pricing.",
    },
    {
      num: 3,
      title: "Kickoff & Build",
      desc: "We execute in sprints with transparent updates and demos.",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 lg:px-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Started</h1>
        <p className="mt-3 text-muted-foreground">
          Our process is simple but thorough—discovery, scope, and delivery with clear milestones and
          ongoing communication.
        </p>
      </div>

      <ol className="space-y-4">
        {steps.map((s) => (
          <li key={s.num} className="flex gap-4">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {s.num}
            </span>
            <div>
              <div className="font-semibold">{s.title}</div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/quote"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95"
        >
          Request a Quote
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          Contact Sales
        </Link>
      </div>
    </main>
  );
}