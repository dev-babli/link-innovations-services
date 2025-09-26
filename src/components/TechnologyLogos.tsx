'use client';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGit, SiGithub, SiVercel, SiFigma } from 'react-icons/si';
import LogoLoop from './LogoLoop';

const techLogos = [
    { node: <SiReact className="text-blue-500" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-black dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs className="text-green-600" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiMongodb className="text-green-500" />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql className="text-blue-700" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiDocker className="text-blue-400" />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiGit className="text-orange-500" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub className="text-gray-800 dark:text-white" />, title: "GitHub", href: "https://github.com" },
    { node: <SiVercel className="text-black dark:text-white" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiFigma className="text-purple-500" />, title: "Figma", href: "https://www.figma.com" },
];

export default function TechnologyLogos() {
    return (
        <div className="w-full py-16 bg-black-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Built with Modern Technologies
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Our solutions are powered by the latest and most reliable technologies in the industry
                    </p>
                </div>

                <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={80}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology stack"
                        className="dark:[--logoloop-fadeColor:#0b0b0b]"
                    />
                </div>
            </div>
        </div>
    );
}

