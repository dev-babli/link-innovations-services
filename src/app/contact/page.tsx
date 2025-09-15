import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Link Innovations",
  description: "Get in touch with Link Innovations to discuss your project.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 lg:px-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground">
          Tell us about your goals and challenges. We typically respond within one business day.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border bg-card p-5">
          <h2 className="text-base font-semibold">Email</h2>
          <p className="mt-1 text-sm text-muted-foreground">hello@linkinnovations.dev</p>
        </div>
        <div className="rounded-xl border bg-card p-5">
          <h2 className="text-base font-semibold">Location</h2>
          <p className="mt-1 text-sm text-muted-foreground">Remote-first • Global clients</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/quote"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95"
        >
          Request a Quote
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          Explore Services
        </Link>
      </div>
    </main>
  );
}