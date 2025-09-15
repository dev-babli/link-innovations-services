import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Link Innovations",
  description: "Selected work from product builds and integrations.",
};

const projects = [
  { title: "Logistics Ops Dashboard", description: "Real-time tracking and analytics for fleet management." },
  { title: "Fintech KYC Platform", description: "End-to-end digital identity and compliance solution." },
  { title: "AI Support Assistant", description: "Intelligent customer service automation." },
  { title: "Headless Commerce Store", description: "Lightning-fast platform built for scale and performance." },
  { title: "IoT Device Portal", description: "Unified dashboard for monitoring connected sensors." },
  { title: "Marketing Analytics Hub", description: "Attribution, funnels, and cohort reporting in one place." },
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-12">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Portfolio</h1>
        <p className="mt-3 text-muted-foreground">Selected work from product builds and integrations.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl border bg-card p-5 transition-colors hover:border-ring/40">
            <h3 className="text-base font-medium">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-3">
        <Link href="/services" className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
          Explore Services
        </Link>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95">
          Contact Us
        </Link>
      </div>
    </main>
  );
}