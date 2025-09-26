import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-black-100 relative overflow-hidden" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-20"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:max-w-[45vw] text-white">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-300 md:mt-10 my-5 text-center max-w-2xl">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your digital transformation goals.
        </p>
        <a href="mailto:contact@linkinnovations.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="home"
            className="flex items-center text-white font-medium gap-3 space-x-3"
          >
            <Image
              src="/logos/Link_Innovations_transparent.png"
              alt="Link Innovations"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-black text-lg tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-orbitron">
              Link Innovations
            </span>
          </Link>
          <p className="md:text-base text-sm md:font-normal font-light text-gray-300">
            Copyright © 2024 Link Innovations
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-gray-800 rounded-lg border border-gray-700 hover:bg-purple/20 hover:border-purple/50 transition-all duration-300 hover:scale-110"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
