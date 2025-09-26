"use client";

import { motion } from "framer-motion";

export default function TrustedCarousel() {
    const logos = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Facebook", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" },
        { name: "Tesla", url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
        { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    ];

    return (
        <motion.section
            className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-pink-50"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
        >
            {/* Soft pastel blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Trusted by Industry Leaders Worldwide
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                    Join hundreds of companies that trust Link Innovations for their digital transformation
                </p>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden relative z-10">
                <motion.div
                    className="flex gap-8 w-max"
                    animate={{
                        x: ["0%", "-50%"],
                        transition: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
                    }}
                >
                    {logos.concat(logos).map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center p-6 transition-transform duration-500 hover:scale-110"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
