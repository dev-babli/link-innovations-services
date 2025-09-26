import { Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Custom Software Development | YourCompany",
  description:
    "We build tailored web apps, desktop software, and enterprise solutions to fit your business needs.",
};
export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        <Code2 className="h-16 w-16 text-indigo-600 flex-shrink-0" />
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Custom Software Development
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            We design and develop web applications, desktop software, and
            enterprise solutions tailored to your unique business requirements.
            From internal tools to full-scale platforms, our solutions are
            scalable, secure, and performant.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-white mb-2">
            Web Applications
          </h2>
          <p className="text-gray-700">
            Build responsive and modern web applications using React, Angular,
            Vue, or Node.js.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-white mb-2">
            Desktop Applications
          </h2>
          <p className="text-gray-700">
            Create cross-platform desktop apps with Electron or .NET for
            enterprise needs.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-white mb-2">
            Enterprise Solutions
          </h2>
          <p className="text-gray-700">
            ERP, internal tools, workflow systems, and integrations tailored to
            your business.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-white mb-2">
            Cloud & Security
          </h2>
          <p className="text-gray-700">
            Scalable cloud-ready apps with top-level security and
            maintainability.
          </p>
        </div>
      </section>

      {/* Hero Image / Showcase */}
      <section className="mt-16">
        <Image
          src="https://images.unsplash.com/photo-1581091215361-29007f17f77c?auto=format&fit=crop&w=1200&q=80"
          alt="Custom Software Development"
          width={1200}
          height={600}
          className="w-full rounded-xl shadow-lg object-cover"
          priority
        />
      </section>
    </main>
  );
}
