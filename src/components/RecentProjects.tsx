"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import { PinContainer } from "./ui/Pin";

const services = [
  {
    id: 1,
    title: "Web Development",
    des: "Custom websites, e-commerce platforms, and web applications built with modern technologies.",
    img: "/web.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
    link: "/web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    des: "Native iOS and Android applications, plus cross-platform solutions using React Native and Flutter.",
    img: "/mobile.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/mobile-app-development",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    des: "Scalable cloud infrastructure, migration, and optimization on AWS, Azure, and Google Cloud.",
    img: "/cloud.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/cloud-solutions",
  },
  {
    id: 4,
    title: "Cybersecurity",
    des: "Security audits, penetration testing, and comprehensive protection solutions for your digital assets.",
    img: "/shield.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/cybersecurity",
  },
];

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
        Our <span className="text-purple">Services</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {services.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <Link href={item.link}>
              <PinContainer
                title={item.title}
                href={item.link}
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Learn More
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
