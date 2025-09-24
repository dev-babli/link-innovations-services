"use client";

import React from 'react';
import LottieExamples from '@/components/LottieExamples';

export default function LottieExamplesPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Lottie Animation Examples
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore different ways to use Lottie animations in your Next.js application.
                        From basic implementations to advanced integrations with Framer Motion.
                    </p>
                </div>

                <LottieExamples />

                <div className="mt-16 bg-gray-50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Getting Started
                    </h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4">
                            To use Lottie animations in your components, simply import the LottieAnimation component:
                        </p>
                        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
                            <code>{`import LottieAnimation from '@/components/LottieAnimation';

function MyComponent() {
  return (
    <LottieAnimation
      src="/16_9.json"
      width={400}
      height={300}
      loop={true}
      autoplay={true}
    />
  );
}`}</code>
                        </pre>
                        <p className="text-gray-600 mt-4">
                            For more detailed documentation, check out the{' '}
                            <a
                                href="/docs/lottie-guide"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                complete Lottie guide
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

