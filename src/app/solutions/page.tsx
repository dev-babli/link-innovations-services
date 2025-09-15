import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | Link Innovations",
  description: "Tailored software solutions for startups and enterprises.",
};

const solutions = [
  {
    title: "SaaS Platforms",
    description: "Multi-tenant applications with integrated billing, analytics, and user management."
  },
  {
    title: "E-commerce",
    description: "Headless storefronts with payments, inventory management, and omni-channel experiences."
  },
  {
    title: "Internal Tools",
    description: "Custom admin dashboards and automated workflows to streamline operations."
  },
  {
    title: "Integrations",
    description: "Seamless connections with CRMs, ERPs, and third-party services via webhooks and data sync."
  },
  {
    title: "Automation",
    description: "RPA, scheduled jobs, and AI agents to eliminate manual tasks and boost efficiency."
  },
  {
    title: "Performance",
    description: "Comprehensive audits, caching strategies, edge deployment, and CDN optimization."
  }
];

export default function SolutionsPage() {
  return (
    <div className="container max-w-6xl pt-32 pb-20 px-6 lg:px-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">Solutions</h1>
        <p className="text-muted-foreground">
          Tailored software solutions for startups and enterprises.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="rounded-xl border bg-card p-5 hover:border-ring/40 transition-colors"
          >
            <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
            <p className="text-muted-foreground text-sm">{solution.description}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
        >
          Contact Us
        </Link>
        <Link
          href="/quote"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}