import { Rocket, Code2, Smartphone, Cloud, Shield, Database, Wand2, Workflow } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Link Innovations",
  description: "Explore our fast, scalable IT services: web & mobile development, cloud, DevOps, security, AI, automation and more.",
};

// Optimize for speed: fully static generation with daily revalidation
export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

const services = [
  {
    title: "Custom Web Development",
    desc: "High-performance websites and web apps using modern stacks.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    desc: "iOS/Android apps with native performance and great UX.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure, CI/CD, observability, and cost optimization.",
    icon: Cloud,
  },
  {
    title: "Security & Compliance",
    desc: "App hardening, audits, and best-practice security workflows.",
    icon: Shield,
  },
  {
    title: "Data & Databases",
    desc: "Schema design, migrations, performance tuning, and analytics.",
    icon: Database,
  },
  {
    title: "AI Integrations",
    desc: "Practical AI features integrated into your product securely.",
    icon: Wand2,
  },
  {
    title: "Process Automation",
    desc: "Automate repetitive workflows to save time and cost.",
    icon: Workflow,
  },
  {
    title: "Product Launch & Growth",
    desc: "Go-to-market setup, analytics, and iterative improvement.",
    icon: Rocket,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-[70vh] w-full">
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h1>
          <p className="mt-3 text-muted-foreground">
            We build and scale digital products with speed and precision. Choose a service below or reach out for a custom plan.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-xl border bg-card p-5 transition-colors hover:border-ring/40">
              <div className="flex items-start gap-4">
                <div className="rounded-lg border bg-secondary p-2 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium hover:bg-secondary">
            Contact Us
          </Link>
          <Link href="/quote" className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95">
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}