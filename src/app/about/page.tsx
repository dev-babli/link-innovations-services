import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Link Innovations",
  description: "We build fast, reliable software with modern tech.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-5xl px-6 pt-32 pb-20 lg:px-12">
      <h1 className="text-4xl font-bold tracking-tight">About Link Innovations</h1>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            At Link Innovations, we create software that makes a difference. We transform complex
            problems into elegant solutions that drive real business value.
          </p>
          <p className="text-muted-foreground">
            Speed and quality define our work. We deliver fast without sacrificing reliability,
            working as true partners with our clients from idea to launch and beyond.
          </p>
          <p className="text-muted-foreground">
            We specialize in React, Next.js, TypeScript, Node.js, and modern cloud platforms to
            build scalable products, robust APIs, and end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Senior Engineering</h3>
            <p className="text-sm text-muted-foreground">Decades of combined experience building systems that scale.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Clear Communication</h3>
            <p className="text-sm text-muted-foreground">Transparent, frequent updates to keep alignment at every step.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">On‑time Delivery</h3>
            <p className="text-sm text-muted-foreground">Reliable execution with clear milestones and ownership.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Long‑term Support</h3>
            <p className="text-sm text-muted-foreground">We stay engaged post‑launch with maintenance and iteration.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/services" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
          Our Services
        </Link>
        <Link href="/contact" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95">
          Get in Touch
        </Link>
      </div>
    </main>
  );
}