"use client";

import React, { useState } from 'react';
import MagneticCursor from '@/components/MagneticCursor';
import HolographicCard from '@/components/HolographicCard';
import ParticleField from '@/components/ParticleField';
import MorphingShapes from '@/components/MorphingShapes';
import VoiceInteraction from '@/components/VoiceInteraction';
import GestureControl from '@/components/GestureControl';
import HolographicText from '@/components/HolographicText';
import NeuralNetwork from '@/components/NeuralNetwork';
import TimeTravelTimeline from '@/components/TimeTravelTimeline';
import AIChatBubble from '@/components/AIChatBubble';

export default function UniqueComponentsPage() {
    const [activeComponent, setActiveComponent] = useState<string>('magnetic');

    const timelineEvents = [
        {
            id: '1',
            year: 2020,
            title: 'Company Founded',
            description: 'Link Innovations was established with a vision to revolutionize digital solutions.',
            category: 'milestone' as const,
            color: '#3B82F6',
        },
        {
            id: '2',
            year: 2021,
            title: 'First Major Project',
            description: 'Successfully delivered our first enterprise web application.',
            category: 'achievement' as const,
            color: '#10B981',
        },
        {
            id: '3',
            year: 2022,
            title: 'AI Integration',
            description: 'Integrated AI capabilities into our development workflow.',
            category: 'technology' as const,
            color: '#8B5CF6',
        },
        {
            id: '4',
            year: 2023,
            title: 'Global Expansion',
            description: 'Expanded our services to international markets.',
            category: 'business' as const,
            color: '#F59E0B',
        },
        {
            id: '5',
            year: 2024,
            title: 'Innovation Lab',
            description: 'Launched our innovation lab for cutting-edge research.',
            category: 'technology' as const,
            color: '#EC4899',
        },
    ];

    const components = [
        { id: 'magnetic', name: 'Magnetic Cursor', icon: '🧲' },
        { id: 'holographic', name: 'Holographic Card', icon: '💎' },
        { id: 'particles', name: 'Particle Field', icon: '✨' },
        { id: 'morphing', name: 'Morphing Shapes', icon: '🔄' },
        { id: 'voice', name: 'Voice Interaction', icon: '🎤' },
        { id: 'gesture', name: 'Gesture Control', icon: '👋' },
        { id: 'text', name: 'Holographic Text', icon: '🌈' },
        { id: 'neural', name: 'Neural Network', icon: '🧠' },
        { id: 'timeline', name: 'Time Travel', icon: '⏰' },
        { id: 'chat', name: 'AI Chat Bubble', icon: '💬' },
    ];

    const renderComponent = () => {
        switch (activeComponent) {
            case 'magnetic':
                return (
                    <div className="space-y-8">
                        <MagneticCursor strength={0.5}>
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                Magnetic
                            </div>
                        </MagneticCursor>
                        <MagneticCursor strength={0.3}>
                            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                                Hover Me
                            </div>
                        </MagneticCursor>
                    </div>
                );

            case 'holographic':
                return (
                    <HolographicCard
                        frontContent={
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Front Side</h3>
                                <p>Hover and click to see the magic!</p>
                            </div>
                        }
                        backContent={
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Back Side</h3>
                                <p>Amazing holographic effect!</p>
                            </div>
                        }
                    />
                );

            case 'particles':
                return (
                    <div className="relative h-96 bg-gray-900 rounded-lg overflow-hidden">
                        <ParticleField particleCount={30} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <h3 className="text-2xl font-bold mb-2">Interactive Particles</h3>
                                <p>Move your mouse around!</p>
                            </div>
                        </div>
                    </div>
                );

            case 'morphing':
                return (
                    <div className="flex justify-center">
                        <MorphingShapes
                            shapes={['circle', 'square', 'triangle', 'diamond', 'hexagon']}
                            duration={2000}
                            size={300}
                        />
                    </div>
                );

            case 'voice':
                return (
                    <div className="flex justify-center">
                        <VoiceInteraction
                            onTranscript={(text) => console.log('Transcript:', text)}
                            onCommand={(command) => console.log('Command:', command)}
                        />
                    </div>
                );

            case 'gesture':
                return (
                    <GestureControl
                        onGesture={(gesture, confidence) => console.log('Gesture:', gesture, confidence)}
                        enableCamera={true}
                    />
                );

            case 'text':
                return (
                    <div className="space-y-8">
                        <HolographicText
                            text="RAINBOW TEXT"
                            animation="rainbow"
                            size="xl"
                        />
                        <HolographicText
                            text="GLITCH EFFECT"
                            animation="glitch"
                            size="lg"
                        />
                        <HolographicText
                            text="NEON GLOW"
                            animation="neon"
                            size="lg"
                        />
                        <HolographicText
                            text="MATRIX STYLE"
                            animation="matrix"
                            size="lg"
                        />
                    </div>
                );

            case 'neural':
                return (
                    <NeuralNetwork
                        layers={[3, 6, 4, 2]}
                        width={800}
                        height={400}
                        speed={1}
                    />
                );

            case 'timeline':
                return (
                    <TimeTravelTimeline
                        events={timelineEvents}
                        onEventSelect={(event) => console.log('Selected event:', event)}
                    />
                );

            case 'chat':
                return (
                    <div className="max-w-md mx-auto">
                        <AIChatBubble
                            onSendMessage={(message) => console.log('Message sent:', message)}
                            placeholder="Ask the AI anything..."
                        />
                    </div>
                );

            default:
                return <div>Select a component to view</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Unique Components Showcase
                    </h1>
                    <p className="text-xl text-gray-600">
                        10 innovative and "hatke" components for modern web experiences
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Component Navigation */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Components
                            </h3>
                            <div className="space-y-2">
                                {components.map((component) => (
                                    <button
                                        key={component.id}
                                        onClick={() => setActiveComponent(component.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeComponent === component.id
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-xl">{component.icon}</span>
                                            <span className="font-medium">{component.name}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Component Display */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm p-8 min-h-96">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {components.find(c => c.id === activeComponent)?.name}
                                </h2>
                                <p className="text-gray-600">
                                    Interactive demonstration of the {components.find(c => c.id === activeComponent)?.name.toLowerCase()} component
                                </p>
                            </div>

                            <div className="flex justify-center items-center min-h-80">
                                {renderComponent()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Why These Components Are Special
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="text-3xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Unique Visual Effects</h3>
                            <p className="text-gray-600">Holographic cards, morphing shapes, and particle fields create stunning visual experiences.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="text-3xl mb-4">🤖</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Integration</h3>
                            <p className="text-gray-600">Voice interaction, gesture control, and AI chat bubbles for next-gen user experiences.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="text-3xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Elements</h3>
                            <p className="text-gray-600">Magnetic cursors, neural networks, and time travel timelines for engaging interactions.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="text-3xl mb-4">🌈</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Animations</h3>
                            <p className="text-gray-600">Holographic text effects, smooth transitions, and dynamic visual feedback.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="text-3xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsive Design</h3>
                            <p className="text-gray-600">All components work seamlessly across desktop, tablet, and mobile devices.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="text-3xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Optimized</h3>
                            <p className="text-gray-600">Built with performance in mind, using efficient rendering and smooth animations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

