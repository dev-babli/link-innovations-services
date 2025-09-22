import { Play, Code, Database, Cloud, Shield, Smartphone, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Transform your data into actionable business insights"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and consulting"
    }
  ];

  return (
    <section className="py-32">
      <div className="container relative">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl shadow-lg border backdrop-blur-md bg-muted/40 md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-balance text-3xl font-medium md:text-4xl lg:text-5xl">
              Innovate Your Business with Link Innovations
            </h2>
            <p className="mt-4 text-muted-foreground md:text-base">
              Transform your digital presence with our comprehensive IT solutions.
              From custom software to cloud migration, we deliver innovation
              that drives your business forward.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm">
                  <div className="flex-shrink-0 text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{service.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Start Your Project</Button>
              <Button variant="outline">
                See Our Solutions
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <video
              src="https://assets.jitter.video/product-import-hero-hd-20.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };