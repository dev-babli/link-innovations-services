"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronRight, Star, Zap } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Founder",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "Link Innovations transformed our entire digital infrastructure. Their custom solutions are incredibly robust and scalable.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "Their cloud migration services saved us months of work. The team's expertise in modern technologies is truly impressive.",
  },
  {
    name: "Robert Davis",
    role: "COO",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "The mobile app they developed exceeded our expectations. Link Innovations delivers quality solutions on time, every time.",
  },
  {
    name: "Jennifer Adams",
    role: "Tech Lead",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content:
      "Their DevOps implementation streamlined our entire deployment process. The automation tools have improved our efficiency by 300%.",
  },
  {
    name: "Daniel Rodriguez",
    role: "Product Manager",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content:
      "Working with Link Innovations on our web platform was seamless. Their attention to detail and technical excellence is outstanding.",
  },
  {
    name: "Lisa Thompson",
    role: "Developer",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content:
      "Their API integration services made connecting our systems effortless. Link Innovations truly understands enterprise-level development.",
  },
];

const TestimonialSection = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  return (
    <section className="py-32 w-full mx-auto overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-1 text-sm font-semibold">
          <Zap className="h-6 w-auto fill-primary" />
          Rated 5 stars by 500+ satisfied clients
        </div>

        <h2 className="text-balance text-center text-3xl font-medium md:text-4xl lg:text-6xl">
          Meet our satisfied Link clients
        </h2>
        <p className="text-muted-foreground text-center mx-auto mt-4 max-w-2xl text-lg">
          Join leading companies worldwide who trust Link Innovations for their
          IT development needs.
        </p>
      </div>
      <div className="lg:w-full mx-auto ">
        <div className="mt-16 space-y-4">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-36 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-36 after:bg-linear-to-l after:from-orange-200 after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-6 select-none">
                    <div className="flex justify-between">
                      <div className="mb-4 flex gap-4">
                        <Avatar className="size-14 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                        <Star className="size-5 fill-amber-500 text-amber-500" />
                      </div>
                    </div>
                    <q className="leading-7 text-muted-foreground">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };