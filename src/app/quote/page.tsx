import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Quote | Link Innovations",
  description: "Tell us about your project for a fast estimate.",
};

export default function QuotePage() {
  return (
    <div className="container max-w-3xl mx-auto pt-32 pb-20 px-6">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Get a Quote</h1>
          <p className="text-lg text-muted-foreground">
            Provide us with the details below and we&apos;ll get back to you with a fast estimate
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Information We Need</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Goals:</span> What are you hoping to achieve with this project?
            </li>
            <li>
              <span className="font-medium text-foreground">Budget Range:</span> What&apos;s your approximate budget for this project?
            </li>
            <li>
              <span className="font-medium text-foreground">Timeline:</span> When do you need this completed?
            </li>
            <li>
              <span className="font-medium text-foreground">Must-Have Features:</span> What functionality is absolutely essential?
            </li>
            <li>
              <span className="font-medium text-foreground">Integrations:</span> Do you need to connect with any existing systems or services?
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}