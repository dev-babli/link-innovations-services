"use client";

import React from 'react';
import LottieAnimation from './LottieAnimation';
import { motion } from 'framer-motion';

// Example 1: Basic Lottie Animation
export const BasicLottieExample = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Basic Lottie Animation</h3>
            <LottieAnimation
                src="/16_9.json"
                width={400}
                height={300}
                loop={true}
                autoplay={true}
                className="rounded-lg shadow-lg"
            />
        </div>
    );
};

// Example 2: Interactive Lottie with Hover Effects
export const InteractiveLottieExample = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Interactive Lottie (Hover to Play)</h3>
            <LottieAnimation
                src="/16_9.json"
                width={400}
                height={300}
                loop={true}
                autoplay={false}
                playOnHover={true}
                pauseOnHover={true}
                className="rounded-lg shadow-lg transition-transform hover:scale-105"
            />
        </div>
    );
};

// Example 3: Lottie with Framer Motion Integration
export const FramerMotionLottieExample = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Lottie + Framer Motion</h3>
            <LottieAnimation
                src="/16_9.json"
                width={400}
                height={300}
                loop={true}
                autoplay={true}
                withFramerMotion={true}
                motionProps={{
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.5, ease: "easeOut" },
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 }
                }}
                className="rounded-lg shadow-lg"
            />
        </div>
    );
};

// Example 4: Lottie with Custom Controls
export const ControlledLottieExample = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [speed, setSpeed] = React.useState(1);

    return (
        <div className="w-full max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Controlled Lottie Animation</h3>

            {/* Custom Controls */}
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="flex-1"
                />
                <span className="text-sm text-gray-600">{speed}x</span>
            </div>

            <LottieAnimation
                src="/16_9.json"
                width={400}
                height={300}
                loop={true}
                autoplay={isPlaying}
                speed={speed}
                onComplete={() => console.log('Animation completed!')}
                onLoopComplete={() => console.log('Loop completed!')}
                className="rounded-lg shadow-lg"
            />
        </div>
    );
};

// Example 5: Lazy Loaded Lottie
export const LazyLottieExample = () => {
    return (
        <div className="w-full max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Lazy Loaded Lottie</h3>
            <div className="h-96 overflow-y-auto border rounded-lg p-4">
                <div className="h-64 mb-4 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Scroll down to see the animation</p>
                </div>
                <LottieAnimation
                    src="/16_9.json"
                    width={400}
                    height={300}
                    loop={true}
                    autoplay={true}
                    lazy={true}
                    threshold={0.3}
                    fallback={
                        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Loading animation...</p>
                        </div>
                    }
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

// Example 6: Multiple Lottie Animations in Grid
export const LottieGridExample = () => {
    const animations = [
        { id: 1, title: "Animation 1" },
        { id: 2, title: "Animation 2" },
        { id: 3, title: "Animation 3" },
        { id: 4, title: "Animation 4" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Lottie Animation Grid</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {animations.map((anim) => (
                    <motion.div
                        key={anim.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: anim.id * 0.1 }}
                        className="bg-white rounded-lg shadow-lg p-4"
                    >
                        <h4 className="font-medium mb-2">{anim.title}</h4>
                        <LottieAnimation
                            src="/16_9.json"
                            width="100%"
                            height={200}
                            loop={true}
                            autoplay={true}
                            playOnHover={true}
                            className="rounded-lg"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Main Examples Component
export const LottieExamples = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Lottie Animation Examples
                </h2>

                <div className="space-y-16">
                    <BasicLottieExample />
                    <InteractiveLottieExample />
                    <FramerMotionLottieExample />
                    <ControlledLottieExample />
                    <LazyLottieExample />
                    <LottieGridExample />
                </div>
            </div>
        </div>
    );
};

export default LottieExamples;

