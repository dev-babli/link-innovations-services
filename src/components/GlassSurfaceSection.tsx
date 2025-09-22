'use client';

import Image from 'next/image';
import GlassSurface from './GlassSurface';

const glassBoxes = [
    {
        id: 1,
        title: "Web Development",
        description: "Modern, responsive websites built with cutting-edge technologies",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        alt: "Web Development Services",
        width: 300,
        height: 250,
        displace: 8,
        distortionScale: -120,
        redOffset: 3,
        greenOffset: 8,
        blueOffset: 15,
        brightness: 45,
        opacity: 0.85
    },
    {
        id: 2,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
        alt: "Mobile App Development",
        width: 300,
        height: 250,
        displace: 12,
        distortionScale: -150,
        redOffset: 5,
        greenOffset: 12,
        blueOffset: 20,
        brightness: 50,
        opacity: 0.9
    },
    {
        id: 3,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment solutions",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
        alt: "Cloud Solutions",
        width: 300,
        height: 250,
        displace: 10,
        distortionScale: -140,
        redOffset: 4,
        greenOffset: 10,
        blueOffset: 18,
        brightness: 48,
        opacity: 0.88
    },
    {
        id: 4,
        title: "AI & Analytics",
        description: "Intelligent solutions powered by artificial intelligence and data analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        alt: "AI and Analytics Services",
        width: 300,
        height: 250,
        displace: 15,
        distortionScale: -160,
        redOffset: 6,
        greenOffset: 15,
        blueOffset: 25,
        brightness: 52,
        opacity: 0.92
    }
];

export default function GlassSurfaceSection() {
    return (
        <div className="w-full py-20 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/2 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our comprehensive range of technology services, each designed to bring your vision to life with cutting-edge solutions and innovative approaches.
                    </p>
                </div>

                {/* Glass Surface Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {glassBoxes.map((box) => (
                        <div key={box.id} className="group">
                            <GlassSurface
                                width={box.width}
                                height={box.height}
                                borderRadius={24}
                                displace={box.displace}
                                distortionScale={box.distortionScale}
                                redOffset={box.redOffset}
                                greenOffset={box.greenOffset}
                                blueOffset={box.blueOffset}
                                brightness={box.brightness}
                                opacity={box.opacity}
                                mixBlendMode="screen"
                                className="group-hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}
                            >
                                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                                    {/* Image Container */}
                                    <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                                        <Image
                                            src={box.image}
                                            alt={box.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                                        {box.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {box.description}
                                    </p>

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                </div>
                            </GlassSurface>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-300 mb-6">
                        Ready to transform your ideas into reality?
                    </p>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
}
