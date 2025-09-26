import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Server, Smartphone, Globe, Shield, Database } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full py-16 md:py-32 bg-black-100">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mt-8 max-w-3xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 text-white">
          Complete IT solutions for your business needs
        </h2>
        <h2 className="mt-8 max-w-2xl text-gray-300 tracking-wide text-pretty text-lg">
          Link Innovations offers comprehensive development services to help you
          build and scale your technology infrastructure
        </h2>
        <div className="mx-auto mt-16 grid gap-2 sm:grid-cols-5">
          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <p className="font-semibold text-muted-foreground text-2xl">
                  Custom Web{" "}
                  <span className="text-primary"> Development</span>
                </p>
                <p className="text-muted-foreground mt-3 font-medium max-w-sm text-sm">
                  Link Innovations crafts modern web applications using cutting-edge
                  technologies. From responsive frontends to robust backends, we
                  deliver scalable solutions tailored to your business.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

              <div className="bg-background overflow-hidden rounded-tl-lg pl-2 pt-2 dark:bg-zinc-950">
                <video
                  src="https://assets.jitter.video/design-1-hd-20.mp4"
                  className=""
                  autoPlay
                  loop
                  muted
                  playsInline
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
              Build powerful mobile apps with native performance and seamless
              user experiences across all platforms.
            </p>

            <CardContent className="mt-auto h-full">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
                <div className="h-full overflow-hidden rounded-r-lg border">
                  <video
                    className=" h-full w-auto object-fill"
                    src="https://assets.jitter.video/collaborate-4-hd-30.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={1207}
                    height={2929}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
            <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">
              Secure cloud infrastructure and DevOps solutions. Scale with
              confidence and maintain peak performance.
            </p>

            <div className="flex justify-center gap-6">
              <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                <span className="absolute right-2 top-1 block text-sm">Li</span>
                <Server className="mt-auto size-4" />
              </div>
              <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                <Shield className="size-4" />
              </div>
            </div>
          </Card>
          <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <p className="font-semibold text-2xl">
                Integrate. Optimize. Scale.
              </p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Connect Link Innovations to your existing tech stack. We work
                with AWS, Docker, Kubernetes, and more. Streamline operations
                and accelerate your digital transformation.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Code className="size-8" />
                </div>
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Database className="size-8" />
                </div>
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <Smartphone className="size-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}