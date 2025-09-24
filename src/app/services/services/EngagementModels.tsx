"use client";

import { Briefcase, Clock, Users, Globe, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const engagementModels = [
  {
    title: "Fixed Price",
    desc: "Best for well-defined projects with clear requirements, timelines, and deliverables.",
    icon: Briefcase,
  },
  {
    title: "Time & Material",
    desc: "Flexible model where you pay for actual time and resources spent, ideal for evolving projects.",
    icon: Clock,
  },
  {
    title: "Dedicated Team",
    desc: "A team of experts works exclusively on your project, acting as an extension of your in-house staff.",
    icon: Users,
  },
  {
    title: "Offshore Development Center",
    desc: "Leverage cost-effective global talent with a dedicated offshore team aligned to your goals.",
    icon: Globe,
  },
  {
    title: "Hybrid Model",
    desc: "Combine fixed price for core features with time & material for enhancements and iterations.",
    icon: Layers,
  },
  {
    title: "Managed Services",
    desc: "End-to-end ownership where we manage everything from development to ongoing support.",
    icon: Sparkles,
  },
];

export default function EngagementModelsSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-pink-50 py-20 md:py-28 text-gray-900"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {/* Pastel glow blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          Engagement Models
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              className="group rounded-xl bg-gradient-to-r from-blue-200 via-gray-200 to-gray-100 shadow-md p-6 hover:shadow-lg hover:scale-105 transition transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
