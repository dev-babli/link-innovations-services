"use client";

import React from 'react';
import ScrollImageSequence from '@/components/ScrollImageSequence';
import ScrollLottieSequence from '@/components/ScrollLottieSequence';

export default function ScrollDemoPage() {
    // Sample images for the sequence (you can replace these with your actual images)
    const sampleImages = [
        '/assets/3d/bar.glb', // Using your existing 3D assets as placeholders
        '/assets/3d/cube.glb',
        '/assets/3d/lens.glb',
        // Add more image URLs here
    ];

    // For demo purposes, let's create some placeholder image URLs
    const demoImages = [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&sat=-100',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&hue=180',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&hue=90',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&hue=270',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&hue=45',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&hue=135',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&hue=225',
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">
                        Scroll Sequence Demo
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Scroll down to see images change in sequence. This creates an engaging
                        storytelling experience as users scroll through your content.
                    </p>
                </div>
            </section>

            {/* Image Sequence Section */}
            <ScrollImageSequence
                images={demoImages}
                height="100vh"
                sticky={true}
                speed={1}
                className="bg-gray-900"
                onFrameChange={(frame) => {
                    console.log('Current frame:', frame);
                }}
            />

            {/* Spacer */}
            <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Lottie Scroll Sequence
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Now scroll to see a Lottie animation controlled by scroll position.
                    </p>
                </div>
            </section>

            {/* Lottie Sequence Section */}
            <ScrollLottieSequence
                lottieSrc="/16_9.json"
                height="100vh"
                sticky={true}
                speed={1}
                quality="high"
                className="bg-gray-800"
                onProgressChange={(progress) => {
                    console.log('Animation progress:', progress);
                }}
            />

            {/* Final Section */}
            <section className="h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-100">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Scroll Complete!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        You've experienced smooth scrolling with image sequences.
                        This technique is perfect for storytelling, product showcases, and interactive experiences.
                    </p>
                </div>
            </section>
        </div>
    );
}

