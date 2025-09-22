'use client';

import FluidGlass from './FluidGlass';

export function FluidGlassSection() {
    return (
        <section className="w-full h-[600px] relative overflow-hidden bg-white">
            {/* Subtle gradient background that blends with white */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                <FluidGlass
                    mode="lens"
                    lensProps={{
                        scale: 0.3,
                        ior: 1.2,
                        thickness: 8,
                        chromaticAberration: 0.15,
                        anisotropy: 0.02,
                        transmission: 0.9,
                        roughness: 0.1,
                        color: '#ffffff',
                        attenuationColor: '#3b82f6',
                        attenuationDistance: 0.3
                    }}
                />
            </div>
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 pointer-events-none" />
            {/* Optional: Add some floating particles or subtle effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse delay-2000" />
            </div>
        </section>
    );
}
