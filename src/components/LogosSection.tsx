"use client";

const SERVICES = [
  {
    name: "Web Development",
    description: "Custom web applications",
    width: 143,
    height: 26,
    href: "#web-development",
  },
  {
    name: "Mobile Apps", 
    description: "iOS & Android solutions",
    width: 154,
    height: 31,
    href: "#mobile-apps",
  },
  {
    name: "Cloud Solutions",
    description: "Scalable infrastructure",
    width: 113,
    height: 22,
    href: "#cloud-solutions",
  },
  {
    name: "DevOps",
    description: "CI/CD & automation",
    width: 112,
    height: 27,
    href: "#devops",
  },
  {
    name: "API Development",
    description: "RESTful & GraphQL APIs",
    width: 141,
    height: 32,
    href: "#api-development",
  },
  {
    name: "Database Design",
    description: "Optimized data solutions",
    width: 104,
    height: 18,
    href: "#database-design",
  },
  {
    name: "UI/UX Design",
    description: "User-centered interfaces",
    width: 105,
    height: 28,
    href: "#ui-ux-design",
  },
  {
    name: "Consulting",
    description: "Technical architecture",
    width: 128,
    height: 33,
    href: "#consulting",
  },
  {
    name: "Support",
    description: "24/7 maintenance",
    width: 90,
    height: 28,
    href: "#support",
  },
];

const LogoSection = () => {
  return (
    <section className="overflow-hidden w-full px-0  bg-muted/80 backdrop-blur-3xl py-32 dark:bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold tracking-tight text-balance lg:text-3xl">
          Link Innovations - Your IT Development Partner.
          <br />
          <span className="text-muted-foreground">
            From startup ideas to enterprise solutions.
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="flex w-full">
          {/* First marquee group */}
          <div className="flex shrink-0 animate-marquee items-center gap-12">
            {SERVICES.map((service, index) => (
              <a href={service.href} key={index} className="p-6 flex flex-col items-center min-w-[200px]">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          {/* Second marquee group */}
          <div className="flex shrink-0 animate-marquee items-center gap-12">
            {SERVICES.map((service, index) => (
              <a href={service.href} key={index} className="p-6 flex flex-col items-center min-w-[200px]">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { LogoSection };