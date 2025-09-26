"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VideoDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.section
      className="relative py-20 text-center overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-pink-50"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {/* Pastel Blobs for Light Theme */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Accelerate performance
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          With our AI-powered tools embedded throughout your workflow, you can
          simplify your toolchain, automate tasks, and enhance your developer
          experience.
        </p>

        {/* Video demo */}
        <div className="mt-12 relative flex justify-center">
          <video
            ref={videoRef}
            className="w-full max-w-lg h-auto rounded-xl shadow-lg border border-gray-200"
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.ctfassets.net/8aevphvgewt8/490cvTcPE95XqUKGA4C2Kn/427a8803b029857c58167cce0e855191/github-copilot-agent-mode.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button */}
          {/* Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            className="absolute bottom-4 right-4 p-2 rounded-full bg-gray-800/80 hover:bg-gray-800/90 shadow-lg transition"
          >
            <svg
              className="h-12 w-12 text-white"
              fill="currentColor"
              viewBox="0 0 84 84"
            >
              <circle cx="42" cy="42" r="42" opacity="0.3" />
              {isPlaying ? (
                // Pause icon
                <g>
                  <rect x="30" y="28" width="8" height="28" fill="gray-900" />
                  <rect x="46" y="28" width="8" height="28" fill="gray-900" />
                </g>
              ) : (
                // Play icon
                <polygon points="33,28 33,56 57,42" fill="gray-900" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
