"use client";

import { motion } from "framer-motion";
import React from "react";
import { Code, Globe, Smartphone, Cloud, Shield, Zap, Database, Users } from "lucide-react";

import { cn } from "@/lib/utils";

const IntegrationsSection = () => {
  return (
    <section className="relative w-full mx-auto py-32">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-muted-foreground">
          Innovate. Develop. Transform your business with Link Innovations
        </p>
        <h1 className="realtive z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-6xl">
          The only IT development company you need to{" "}
          <span
            className="overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}
          >
            {"Scale Forward".split(" ").map((word, i) => (
              <motion.span
                className="relative inline-block px-[6px] leading-[none]"
                key={i}
                initial={{
                  opacity: 0,
                  y: "70%",
                  rotateX: "-28deg",
                }}
                animate={{
                  opacity: 1,
                  y: "0%",
                  rotateX: "0deg",
                }}
                transition={{
                  delay: i * 0.08 + 0.1,
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {word === "Forward" ? (
                  <span className="font-playfair">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-20 mt-10 flex items-center justify-center gap-4"
        >
          <SkiperUiMarquee
            showCard={1}
            className=""
            reverse={true}
            services={[
              { icon: Code, name: "Web Development" },
              { icon: Smartphone, name: "Mobile Apps" },
              { icon: Globe, name: "E-Commerce" },
              { icon: Database, name: "Backend Systems" },
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            services={[
              { icon: Cloud, name: "Cloud Solutions" },
              { icon: Shield, name: "Cybersecurity" },
              { icon: Zap, name: "API Integration" },
              { icon: Users, name: "CRM Systems" },
            ]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            className=""
            services={[
              { icon: Code, name: "Custom Software" },
              { icon: Globe, name: "DevOps & CI/CD" },
              { icon: Database, name: "Data Analytics" },
              { icon: Shield, name: "System Migration" },
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            services={[
              { icon: Smartphone, name: "UI/UX Design" },
              { icon: Cloud, name: "Server Management" },
              { icon: Zap, name: "Performance Optimization" },
              { icon: Users, name: "Team Augmentation" },
            ]}
          />
          <SkiperUiMarquee
            showCard={3}
            reverse={true}
            className=""
            services={[
              { icon: Code, name: "Legacy Modernization" },
              { icon: Globe, name: "Digital Transformation" },
              { icon: Database, name: "Database Design" },
              { icon: Shield, name: "Security Audits" },
            ]}
          />
          <SkiperUiMarquee
            showCard={2}
            className=""
            services={[
              { icon: Cloud, name: "Microservices" },
              { icon: Smartphone, name: "Progressive Web Apps" },
              { icon: Zap, name: "Real-time Systems" },
              { icon: Users, name: "Technical Consulting" },
            ]}
          />
          <SkiperUiMarquee
            reverse={true}
            showCard={1}
            className=""
            services={[
              { icon: Code, name: "Machine Learning" },
              { icon: Database, name: "Big Data Solutions" },
              { icon: Globe, name: "Blockchain Development" },
              { icon: Shield, name: "Compliance Solutions" },
            ]}
          />
        </motion.div>

        <div className="h-92 bg- absolute bottom-20 left-0 right-0 w-full blur-xl" />
      </div>
    </section>
  );
};

export { IntegrationsSection };

function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around ![animation-duration:12s] [animation-play-state:running] [gap:var(--gap)] group-hover:[animation-play-state:paused]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

interface SkiperUiMarqueeProps {
  showCard: number;
  reverse?: boolean;
  className?: string;
  services: Array<{ icon: React.ComponentType<any>; name: string }>;
}

export function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  services,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {services.map((service, idx) => (
          <Card key={idx} service={service} />
        ))}
      </Marquee>
      <div className="from-background absolute top-0 z-10 h-8 w-full" />
      <div className="from-background absolute bottom-0 z-10 h-8 w-full " />
    </div>
  );
}

function Card({ service }: { service?: { icon: React.ComponentType<any>; name: string } }) {
  const IconComponent = service?.icon || Code;
  
  return (
    <div
      className={cn(
        "border-muted relative flex size-24 items-center shadow-md justify-center overflow-hidden rounded-3xl border p-4",
        "from-muted/50 to-background bg-gradient-to-b",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "group cursor-pointer hover:scale-105 transition-transform duration-200"
      )}
      title={service?.name}
    >
      <IconComponent className="size-8 text-foreground/80 group-hover:text-foreground transition-colors" />
    </div>
  );
}