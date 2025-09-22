'use client';

import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import Image from 'next/image';

const ImageScrollStack: React.FC = () => {
    const imageCards = [
        {
            id: 1,
            title: "Web Development",
            description: "Modern, responsive web applications",
            image: "/next.svg",
            alt: "Web Development Services"
        },
        {
            id: 2,
            title: "Mobile Apps",
            description: "Cross-platform mobile solutions",
            image: "/vercel.svg",
            alt: "Mobile App Development"
        },
        {
            id: 3,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure",
            image: "/globe.svg",
            alt: "Cloud Services"
        },
        {
            id: 4,
            title: "AI & Machine Learning",
            description: "Intelligent automation solutions",
            image: "/file.svg",
            alt: "AI Services"
        },
        {
            id: 5,
            title: "Data Analytics",
            description: "Insights from your data",
            image: "/window.svg",
            alt: "Data Analytics"
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <ScrollStack
                useWindowScroll={true}
                itemDistance={150}
                itemScale={0.03}
                itemStackDistance={50}
                stackPosition="25%"
                scaleEndPosition="10%"
                baseScale={0.85}
                rotationAmount={1}
                blurAmount={0.5}
                className="h-screen"
            >
                {imageCards.map((card) => (
                    <ScrollStackItem key={card.id} itemClassName="bg-white/90 backdrop-blur-sm">
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="relative w-32 h-32 mb-6">
                                <Image
                                    src={card.image}
                                    alt={card.alt}
                                    fill
                                    className="object-contain"
                                    priority={card.id <= 2}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-lg max-w-sm">
                                {card.description}
                            </p>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </div>
    );
};

export default ImageScrollStack;
