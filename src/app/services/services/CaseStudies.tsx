"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "E-Commerce Platform",
    client: "Shopify Client",
    image: "https://picsum.photos/800/600?random=10",
    description:
      "Built a scalable e-commerce solution using React and Node.js.",
    techStack: ["React", "Node.js", "AWS"],
    link: "#",
  },
  {
    title: "AI Chatbot",
    client: "Healthcare Startup",
    image: "https://picsum.photos/800/600?random=20",
    description:
      "Implemented an AI-powered chatbot to handle patient queries efficiently.",
    techStack: ["Python", "TensorFlow", "Flask"],
    link: "#",
  },
  {
    title: "Mobile Banking App",
    client: "FinTech Corp",
    image: "https://picsum.photos/800/600?random=30",
    description:
      "Developed a secure and user-friendly mobile banking app for iOS and Android.",
    techStack: ["Flutter", "Firebase", "Stripe API"],
    link: "#",
  },
  {
    title: "Healthcare Dashboard",
    client: "Medical Analytics",
    image: "https://picsum.photos/800/600?random=40",
    description:
      "Designed a real-time analytics dashboard for patient monitoring.",
    techStack: ["React", "D3.js", "Node.js"],
    link: "#",
  },
];

export default function CaseStudiesSection() {
  return (
    <motion.section
      className="relative py-20 text-gray-900 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-pink-50"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {/* Pastel Glow Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}>
          Case Studies
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map(
            ({ title, client, image, description, techStack, link }, i) => (
              <motion.div
                key={title}
                className="group rounded-xl bg-white/80 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDJ8BzYAAAAASUVORK5CYII="
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">{client}</p>
                  <p className="text-gray-700 text-sm mb-2">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={link}
                    className="text-sm text-indigo-700 font-medium hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}
