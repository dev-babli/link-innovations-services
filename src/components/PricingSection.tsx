import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Pricing() {
  return (
    <div className=" relative py-16 w-full md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-medium md:text-4xl lg:text-6xl">
            Link Innovations services that power your success
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl  text-lg">
            Choose the Link Innovations service that fits your needs and start
            transforming your business with cutting-edge technology today.
          </p>
        </div>
        <div className="@container relative mt-12 md:mt-20">
          <Card className="@4xl:max-w-full bg-gradient-to-tr from-violet-200/40 via-white/50  to-white/90 backdrop-blur-3xl relative mx-auto max-w-sm">
            <div className="@4xl:grid-cols-3 grid">
              <div>
                <CardHeader className="p-8">
                  <CardTitle className="font-medium">Web Development</CardTitle>
                  <span className="mb-0.5 mt-2 block text-2xl font-semibold">
                    Custom Quote
                  </span>
                  <CardDescription className="text-sm">
                    Modern responsive websites built with latest technology
                  </CardDescription>
                </CardHeader>
                <div className="border-y px-8 py-4">
                  <Button asChild className="w-full" variant="outline">
                    <Link href="#">Get Quote Today</Link>
                  </Button>
                </div>

                <ul role="list" className="space-y-3 p-8">
                  {[
                    "Responsive design implementation",
                    "Modern framework integration",
                    "SEO optimization included",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check
                        className="text-primary size-3"
                        strokeWidth={3.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ring-foreground/10 bg-background/80 backdrop-blur-[50px] rounded-(--radius) @3xl:mx-0 @3xl:-my-9 -mx-1 border-transparent  shadow ring-1">
                <div className="@3xl:py-3 @3xl:px-0 relative px-1">
                  <CardHeader className="p-8">
                    <CardTitle className="font-medium">Mobile Development</CardTitle>
                    <span className="mb-0.5 mt-2 block text-2xl font-semibold">
                      Premium Service
                    </span>
                    <CardDescription className="text-sm">
                      Native and cross-platform mobile apps for all devices
                    </CardDescription>
                  </CardHeader>
                  <div className="@3xl:mx-0 -mx-1 border-y px-8 py-4">
                    <Button asChild className="w-full">
                      <Link href="#">Schedule Consultation</Link>
                    </Button>
                  </div>

                  <ul role="list" className="space-y-3 p-8">
                    {[
                      "iOS & Android development",
                      "React Native expertise",
                      "App Store deployment support",
                      "Cross-platform compatibility",
                      "Performance optimization",
                      "Push notifications setup",
                      "Backend API integration",
                      "User analytics tracking",
                      "Regular maintenance updates",
                      "Security best practices",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check
                          className="text-primary size-3"
                          strokeWidth={3.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <CardHeader className="p-8">
                  <CardTitle className="font-medium">Cloud Solutions</CardTitle>
                  <span className="mb-0.5 mt-2 block text-2xl font-semibold">
                    Enterprise Level
                  </span>
                  <CardDescription className="text-sm">
                    Scalable cloud infrastructure and DevOps solutions
                  </CardDescription>
                </CardHeader>
                <div className="border-y px-8 py-4">
                  <Button asChild className="w-full" variant="outline">
                    <Link href="#">Contact Our Team</Link>
                  </Button>
                </div>

                <ul role="list" className="space-y-3 p-8">
                  {[
                    "AWS & Azure deployment",
                    "Docker containerization",
                    "CI/CD pipeline setup",
                    "Database optimization",
                    "Load balancing solutions",
                    "24/7 monitoring support",
                    "Backup & disaster recovery",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check
                        className="text-primary size-3"
                        strokeWidth={3.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}