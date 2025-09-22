"use client";

import Hyperspeed from "./Hyperspeed";
import TextType from "./TextType";
import "./HyperspeedSection.css";

const HyperspeedSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            {/* Hyperspeed Background */}
            <div className="absolute inset-0 z-0">
                <Hyperspeed
                    effectOptions={{
                        distortion: 'mountainDistortion',
                        length: 600,
                        roadWidth: 12,
                        islandWidth: 3,
                        lanesPerRoad: 3,
                        fov: 75,
                        fovSpeedUp: 120,
                        speedUp: 3,
                        carLightsFade: 0.3,
                        totalSideLightSticks: 30,
                        lightPairsPerRoadWay: 50,
                        colors: {
                            roadColor: 0x0a0a0a,
                            islandColor: 0x111111,
                            background: 0x000000,
                            shoulderLines: 0x00ff88,
                            brokenLines: 0x00ff88,
                            leftCars: [0xff0080, 0xff4080, 0xff8080],
                            rightCars: [0x0080ff, 0x4080ff, 0x8080ff],
                            sticks: 0x00ff88
                        }
                    }}
                />
            </div>

            {/* Gradient overlay for better visual depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5"></div>

            {/* Animated background particles effect */}
            <div className="absolute inset-0 z-5">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-30"></div>
            </div>

            {/* Content overlay with minimal styling */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white px-4 max-w-6xl mx-auto">
                    {/* Main Title */}
                    <div className="mb-8">
                        <h1 className="hyperspeed-title text-5xl md:text-7xl font-black leading-[0.9] text-white">
                            LINK INNOVATIONS
                        </h1>
                    </div>

                    {/* Dynamic Subtext */}
                    <div className="mb-8">
                        <TextType
                            as="p"
                            className="text-2xl md:text-3xl text-gray-300 font-light"
                            text={[
                                "Accelerating Your Digital Future",
                                "Innovation at the Speed of Light",
                                "Transforming Ideas into Reality",
                                "Building Tomorrow's Technology Today"
                            ]}
                            typingSpeed={100}
                            pauseDuration={2000}
                            deletingSpeed={50}
                            showCursor={true}
                            cursorCharacter="|"
                            cursorBlinkDuration={0.8}
                            textColors={["#ffffff", "#e5e7eb", "#d1d5db", "#9ca3af"]}
                            loop={true}
                            initialDelay={1000}
                        />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        </section>
    );
};

export { HyperspeedSection };
