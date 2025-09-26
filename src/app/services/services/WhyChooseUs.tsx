"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const usps = [
    {
      title: "⚡ Fast Delivery",
      desc: "We deliver projects quickly without compromising on quality.",
    },
    {
      title: "🎯 Domain Expertise",
      desc: "Our experts bring deep knowledge across multiple industries.",
    },
    {
      title: "📈 Scalable Solutions",
      desc: "We build solutions that grow with your business.",
    },
    {
      title: "💡 Innovative Approach",
      desc: "We use cutting-edge technologies to create smarter solutions.",
    },
    {
      title: "🤝 Client Collaboration",
      desc: "We involve you in every step to ensure your vision is realized.",
    },
    {
      title: "🔒 Security & Reliability",
      desc: "Your applications are built with strong security and high availability in mind.",
    },
  ];

  return (
    <motion.section
      className="relative overflow-hidden bg-black-100 py-20 md:py-28 text-white"
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

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-r from-blue-200 via-gray-300 to-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 opacity-30 animate-pulse rounded-2xl -z-10"></div>

              <h3 className="text-xl font-semibold mb-3 text-white">
                {usp.title}
              </h3>
              <p className="text-gray-300 text-sm">{usp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
