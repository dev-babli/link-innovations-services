'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { Code, Smartphone, Cloud, BarChart3, Shield, Bot, Database, Zap, Users, Target, TrendingUp, Lightbulb, Eye, Lock, AlertTriangle, Brain, Globe } from 'lucide-react';
import './MagicBento.css';

export interface ServiceBentoCardProps {
    color?: string;
    title?: string;
    description?: string;
    label?: string;
    textAutoHide?: boolean;
    disableAnimations?: boolean;
    icon?: React.ComponentType<any>;
    imageUrl?: string;
}

export interface ServiceBentoProps {
    textAutoHide?: boolean;
    enableStars?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    disableAnimations?: boolean;
    spotlightRadius?: number;
    particleCount?: number;
    enableTilt?: boolean;
    glowColor?: string;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
    serviceType?: string;
    features?: Array<{
        title: string;
        description: string;
        icon?: React.ReactNode;
    }>;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;

// Service-specific data mapping
const getServiceData = (serviceType: string, features: any[] = []) => {
    const baseData = {
        'cloud-solutions': [
            {
                color: '#1a1a1a',
                title: 'Cloud Migration',
                description: 'Seamless migration of your existing infrastructure to AWS, Azure, or Google Cloud',
                label: 'Migration',
                icon: Cloud,
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'DevOps & CI/CD',
                description: 'Complete DevOps implementation with automated pipelines and deployment',
                label: 'DevOps',
                icon: Zap,
                imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Database Solutions',
                description: 'Managed database services, data migration, and performance optimization',
                label: 'Database',
                icon: Database,
                imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Security & Compliance',
                description: 'Comprehensive cloud security implementation and compliance frameworks',
                label: 'Security',
                icon: Shield,
                imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Monitoring & Analytics',
                description: 'Advanced monitoring, logging, and analytics solutions for optimal performance',
                label: 'Analytics',
                icon: BarChart3,
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Infrastructure as Code',
                description: 'Automated infrastructure provisioning using Terraform and CloudFormation',
                label: 'IaC',
                icon: Code,
                imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center'
            }
        ],
        'consulting': [
            {
                color: '#1a1a1a',
                title: 'Digital Strategy',
                description: 'Develop comprehensive digital transformation strategies aligned with business objectives',
                label: 'Strategy',
                icon: Target,
                imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Technology Assessment',
                description: 'Evaluate your current technology stack and identify optimization opportunities',
                label: 'Assessment',
                icon: TrendingUp,
                imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Process Optimization',
                description: 'Streamline business processes and workflows to improve efficiency',
                label: 'Optimization',
                icon: Lightbulb,
                imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Change Management',
                description: 'Guide your organization through digital transformation with effective strategies',
                label: 'Management',
                icon: Users,
                imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center'
            }
        ],
        'cybersecurity': [
            {
                color: '#1a1a1a',
                title: 'Security Audits',
                description: 'Comprehensive security assessments to identify vulnerabilities and compliance gaps',
                label: 'Audits',
                icon: Eye,
                imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Penetration Testing',
                description: 'Simulated cyber attacks to test your security defenses and identify breach points',
                label: 'Testing',
                icon: Shield,
                imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Compliance Management',
                description: 'Ensure compliance with GDPR, HIPAA, SOX, and other regulatory requirements',
                label: 'Compliance',
                icon: Lock,
                imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Incident Response',
                description: 'Rapid response and recovery services to minimize damage from security incidents',
                label: 'Response',
                icon: AlertTriangle,
                imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center'
            }
        ],
        'data-analytics': [
            {
                color: '#1a1a1a',
                title: 'Business Intelligence',
                description: 'Transform raw data into actionable insights with powerful BI dashboards',
                label: 'BI',
                icon: BarChart3,
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Data Visualization',
                description: 'Create compelling visualizations and interactive dashboards for complex data',
                label: 'Visualization',
                icon: TrendingUp,
                imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Machine Learning',
                description: 'Implement AI and ML models to predict trends and automate decisions',
                label: 'ML',
                icon: Brain,
                imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Data Warehousing',
                description: 'Design and implement robust data warehouses for efficient data storage',
                label: 'Warehouse',
                icon: Database,
                imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center'
            }
        ],
        'app-development': [
            {
                color: '#1a1a1a',
                title: 'Native iOS & Android',
                description: 'High-performance native applications built with Swift, Kotlin, and Java',
                label: 'Native',
                icon: Smartphone,
                imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Cross-Platform Development',
                description: 'React Native and Flutter apps that work seamlessly across platforms',
                label: 'Cross-Platform',
                icon: Code,
                imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'UI/UX Design',
                description: 'Intuitive, user-friendly interfaces following platform guidelines',
                label: 'Design',
                icon: Users,
                imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Backend Integration',
                description: 'Seamless integration with APIs, databases, and cloud services',
                label: 'Backend',
                icon: Globe,
                imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'App Store Optimization',
                description: 'Complete ASO strategy including keyword optimization and store listing',
                label: 'ASO',
                icon: TrendingUp,
                imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Security & Compliance',
                description: 'Built-in security measures, data encryption, and privacy regulations',
                label: 'Security',
                icon: Shield,
                imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center'
            }
        ],
        'web-development': [
            {
                color: '#1a1a1a',
                title: 'Custom Web Applications',
                description: 'Tailored web solutions built with React, Next.js, and Vue.js',
                label: 'Custom',
                icon: Code,
                imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Responsive Design',
                description: 'Mobile-first, responsive designs that work across all devices',
                label: 'Responsive',
                icon: Smartphone,
                imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'E-commerce Solutions',
                description: 'Complete online stores with payment integration and inventory management',
                label: 'E-commerce',
                icon: Globe,
                imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Database Integration',
                description: 'Robust database design with PostgreSQL, MongoDB, and modern systems',
                label: 'Database',
                icon: Database,
                imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Cloud Deployment',
                description: 'Seamless deployment to AWS, Vercel, and Netlify with CI/CD pipelines',
                label: 'Cloud',
                icon: Cloud,
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center'
            },
            {
                color: '#1a1a1a',
                title: 'Security & Performance',
                description: 'Built-in security measures, performance optimization, and SEO best practices',
                label: 'Performance',
                icon: Shield,
                imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center'
            }
        ]
    };

    return baseData[serviceType as keyof typeof baseData] || baseData['web-development'];
};

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
    const el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
    return el;
};

const calculateSpotlightValues = (radius: number) => ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
    const rect = card.getBoundingClientRect();
    const relativeX = ((mouseX - rect.left) / rect.width) * 100;
    const relativeY = ((mouseY - rect.top) / rect.height) * 100;

    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard: React.FC<{
    children: React.ReactNode;
    className?: string;
    disableAnimations?: boolean;
    style?: React.CSSProperties;
    particleCount?: number;
    glowColor?: string;
    enableTilt?: boolean;
    clickEffect?: boolean;
    enableMagnetism?: boolean;
}> = ({
    children,
    className = '',
    disableAnimations = false,
    style,
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
    enableTilt = true,
    clickEffect = false,
    enableMagnetism = false
}) => {
        const cardRef = useRef<HTMLDivElement>(null);
        const particlesRef = useRef<HTMLDivElement[]>([]);
        const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
        const isHoveredRef = useRef(false);
        const memoizedParticles = useRef<HTMLDivElement[]>([]);
        const particlesInitialized = useRef(false);
        const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

        const initializeParticles = useCallback(() => {
            if (particlesInitialized.current || !cardRef.current) return;

            const { width, height } = cardRef.current.getBoundingClientRect();
            memoizedParticles.current = Array.from({ length: particleCount }, () =>
                createParticleElement(Math.random() * width, Math.random() * height, glowColor)
            );
            particlesInitialized.current = true;
        }, [particleCount, glowColor]);

        const clearAllParticles = useCallback(() => {
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
            magnetismAnimationRef.current?.kill();

            particlesRef.current.forEach(particle => {
                gsap.to(particle, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'back.in(1.7)',
                    onComplete: () => {
                        particle.parentNode?.removeChild(particle);
                    }
                });
            });
            particlesRef.current = [];
        }, []);

        const animateParticles = useCallback(() => {
            if (!cardRef.current || !isHoveredRef.current) return;

            if (!particlesInitialized.current) {
                initializeParticles();
            }

            memoizedParticles.current.forEach((particle, index) => {
                const timeoutId = setTimeout(() => {
                    if (!isHoveredRef.current || !cardRef.current) return;

                    const clone = particle.cloneNode(true) as HTMLDivElement;
                    cardRef.current.appendChild(clone);
                    particlesRef.current.push(clone);

                    gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

                    gsap.to(clone, {
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                        rotation: Math.random() * 360,
                        duration: 2 + Math.random() * 2,
                        ease: 'none',
                        repeat: -1,
                        yoyo: true
                    });

                    gsap.to(clone, {
                        opacity: 0.3,
                        duration: 1.5,
                        ease: 'power2.inOut',
                        repeat: -1,
                        yoyo: true
                    });
                }, index * 100);

                timeoutsRef.current.push(timeoutId);
            });
        }, [initializeParticles]);

        useEffect(() => {
            if (disableAnimations || !cardRef.current) return;

            const element = cardRef.current;

            const handleMouseEnter = () => {
                isHoveredRef.current = true;
                animateParticles();

                if (enableTilt) {
                    gsap.to(element, {
                        rotateX: 5,
                        rotateY: 5,
                        duration: 0.3,
                        ease: 'power2.out',
                        transformPerspective: 1000
                    });
                }
            };

            const handleMouseLeave = () => {
                isHoveredRef.current = false;
                clearAllParticles();

                if (enableTilt) {
                    gsap.to(element, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }

                if (enableMagnetism) {
                    gsap.to(element, {
                        x: 0,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            const handleMouseMove = (e: MouseEvent) => {
                if (!enableTilt && !enableMagnetism) return;

                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                if (enableTilt) {
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;

                    gsap.to(element, {
                        rotateX,
                        rotateY,
                        duration: 0.1,
                        ease: 'power2.out',
                        transformPerspective: 1000
                    });
                }

                if (enableMagnetism) {
                    const magnetX = (x - centerX) * 0.05;
                    const magnetY = (y - centerY) * 0.05;

                    magnetismAnimationRef.current = gsap.to(element, {
                        x: magnetX,
                        y: magnetY,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            const handleClick = (e: MouseEvent) => {
                if (!clickEffect) return;

                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const maxDistance = Math.max(
                    Math.hypot(x, y),
                    Math.hypot(x - rect.width, y),
                    Math.hypot(x, y - rect.height),
                    Math.hypot(x - rect.width, y - rect.height)
                );

                const ripple = document.createElement('div');
                ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

                element.appendChild(ripple);

                gsap.fromTo(
                    ripple,
                    {
                        scale: 0,
                        opacity: 1
                    },
                    {
                        scale: 1,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: () => ripple.remove()
                    }
                );
            };

            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('click', handleClick);

            return () => {
                isHoveredRef.current = false;
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('click', handleClick);
                clearAllParticles();
            };
        }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

        return (
            <div
                ref={cardRef}
                className={`${className} particle-container`}
                style={{ ...style, position: 'relative', overflow: 'hidden' }}
            >
                {children}
            </div>
        );
    };

const GlobalSpotlight: React.FC<{
    gridRef: React.RefObject<HTMLDivElement | null>;
    disableAnimations?: boolean;
    enabled?: boolean;
    spotlightRadius?: number;
    glowColor?: string;
}> = ({
    gridRef,
    disableAnimations = false,
    enabled = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    glowColor = DEFAULT_GLOW_COLOR
}) => {
        const spotlightRef = useRef<HTMLDivElement | null>(null);
        const isInsideSection = useRef(false);

        useEffect(() => {
            if (disableAnimations || !gridRef?.current || !enabled) return;

            const spotlight = document.createElement('div');
            spotlight.className = 'global-spotlight';
            spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
            document.body.appendChild(spotlight);
            spotlightRef.current = spotlight;

            const handleMouseMove = (e: MouseEvent) => {
                if (!spotlightRef.current || !gridRef.current) return;

                const section = gridRef.current.closest('.bento-section');
                const rect = section?.getBoundingClientRect();
                const mouseInside =
                    rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

                isInsideSection.current = mouseInside || false;
                const cards = gridRef.current.querySelectorAll('.card');

                if (!mouseInside) {
                    gsap.to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    cards.forEach(card => {
                        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                    });
                    return;
                }

                const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
                let minDistance = Infinity;

                cards.forEach(card => {
                    const cardElement = card as HTMLElement;
                    const cardRect = cardElement.getBoundingClientRect();
                    const centerX = cardRect.left + cardRect.width / 2;
                    const centerY = cardRect.top + cardRect.height / 2;
                    const distance =
                        Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                    const effectiveDistance = Math.max(0, distance);

                    minDistance = Math.min(minDistance, effectiveDistance);

                    let glowIntensity = 0;
                    if (effectiveDistance <= proximity) {
                        glowIntensity = 1;
                    } else if (effectiveDistance <= fadeDistance) {
                        glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                    }

                    updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
                });

                gsap.to(spotlightRef.current, {
                    left: e.clientX,
                    top: e.clientY,
                    duration: 0.1,
                    ease: 'power2.out'
                });

                const targetOpacity =
                    minDistance <= proximity
                        ? 0.8
                        : minDistance <= fadeDistance
                            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                            : 0;

                gsap.to(spotlightRef.current, {
                    opacity: targetOpacity,
                    duration: targetOpacity > 0 ? 0.2 : 0.5,
                    ease: 'power2.out'
                });
            };

            const handleMouseLeave = () => {
                isInsideSection.current = false;
                gridRef.current?.querySelectorAll('.card').forEach(card => {
                    (card as HTMLElement).style.setProperty('--glow-intensity', '0');
                });
                if (spotlightRef.current) {
                    gsap.to(spotlightRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseleave', handleMouseLeave);
                spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
            };
        }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

        return null;
    };

const BentoCardGrid: React.FC<{
    children: React.ReactNode;
    gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
    <div className="card-grid bento-section" ref={gridRef}>
        {children}
    </div>
);

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const ServiceMagicBento: React.FC<ServiceBentoProps> = ({
    textAutoHide = true,
    enableStars = true,
    enableSpotlight = true,
    enableBorderGlow = true,
    disableAnimations = false,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    particleCount = DEFAULT_PARTICLE_COUNT,
    enableTilt = false,
    glowColor = DEFAULT_GLOW_COLOR,
    clickEffect = true,
    enableMagnetism = true,
    serviceType = 'web-development',
    features = []
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const isMobile = useMobileDetection();
    const shouldDisableAnimations = disableAnimations || isMobile;

    const cardData = getServiceData(serviceType, features);

    return (
        <>
            {enableSpotlight && (
                <GlobalSpotlight
                    gridRef={gridRef}
                    disableAnimations={shouldDisableAnimations}
                    enabled={enableSpotlight}
                    spotlightRadius={spotlightRadius}
                    glowColor={glowColor}
                />
            )}

            <BentoCardGrid gridRef={gridRef}>
                {cardData.map((card, index) => {
                    const baseClassName = `card ${textAutoHide ? 'card--text-autohide' : ''} ${enableBorderGlow ? 'card--border-glow' : ''}`;
                    const cardProps = {
                        className: baseClassName,
                        style: {
                            backgroundColor: card.color,
                            '--glow-color': glowColor
                        } as React.CSSProperties
                    };

                    if (enableStars) {
                        return (
                            <ParticleCard
                                key={index}
                                {...cardProps}
                                disableAnimations={shouldDisableAnimations}
                                particleCount={particleCount}
                                glowColor={glowColor}
                                enableTilt={enableTilt}
                                clickEffect={clickEffect}
                                enableMagnetism={enableMagnetism}
                            >
                                <div className="card__header">
                                    <div className="card__label">{card.label}</div>
                                    {card.icon && (
                                        <div className="card__icon">
                                            <card.icon size={24} />
                                        </div>
                                    )}
                                </div>
                                <div className="card__image-container">
                                    {card.imageUrl && (
                                        <img
                                            src={card.imageUrl}
                                            alt={card.title}
                                            className="card__image"
                                        />
                                    )}
                                </div>
                                <div className="card__content">
                                    <h2 className="card__title">{card.title}</h2>
                                    <p className="card__description">{card.description}</p>
                                </div>
                            </ParticleCard>
                        );
                    }

                    return (
                        <div
                            key={index}
                            {...cardProps}
                            ref={el => {
                                if (!el) return;

                                const handleMouseMove = (e: MouseEvent) => {
                                    if (shouldDisableAnimations) return;

                                    const rect = el.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const centerX = rect.width / 2;
                                    const centerY = rect.height / 2;

                                    if (enableTilt) {
                                        const rotateX = ((y - centerY) / centerY) * -10;
                                        const rotateY = ((x - centerX) / centerX) * 10;
                                        gsap.to(el, {
                                            rotateX,
                                            rotateY,
                                            duration: 0.1,
                                            ease: 'power2.out',
                                            transformPerspective: 1000
                                        });
                                    }

                                    if (enableMagnetism) {
                                        const magnetX = (x - centerX) * 0.05;
                                        const magnetY = (y - centerY) * 0.05;
                                        gsap.to(el, {
                                            x: magnetX,
                                            y: magnetY,
                                            duration: 0.3,
                                            ease: 'power2.out'
                                        });
                                    }
                                };

                                const handleMouseLeave = () => {
                                    if (shouldDisableAnimations) return;

                                    if (enableTilt) {
                                        gsap.to(el, {
                                            rotateX: 0,
                                            rotateY: 0,
                                            duration: 0.3,
                                            ease: 'power2.out'
                                        });
                                    }

                                    if (enableMagnetism) {
                                        gsap.to(el, {
                                            x: 0,
                                            y: 0,
                                            duration: 0.3,
                                            ease: 'power2.out'
                                        });
                                    }
                                };

                                const handleClick = (e: MouseEvent) => {
                                    if (!clickEffect || shouldDisableAnimations) return;

                                    const rect = el.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;

                                    const maxDistance = Math.max(
                                        Math.hypot(x, y),
                                        Math.hypot(x - rect.width, y),
                                        Math.hypot(x, y - rect.height),
                                        Math.hypot(x - rect.width, y - rect.height)
                                    );

                                    const ripple = document.createElement('div');
                                    ripple.style.cssText = `
                    position: absolute;
                    width: ${maxDistance * 2}px;
                    height: ${maxDistance * 2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                    left: ${x - maxDistance}px;
                    top: ${y - maxDistance}px;
                    pointer-events: none;
                    z-index: 1000;
                  `;

                                    el.appendChild(ripple);

                                    gsap.fromTo(
                                        ripple,
                                        {
                                            scale: 0,
                                            opacity: 1
                                        },
                                        {
                                            scale: 1,
                                            opacity: 0,
                                            duration: 0.8,
                                            ease: 'power2.out',
                                            onComplete: () => ripple.remove()
                                        }
                                    );
                                };

                                el.addEventListener('mousemove', handleMouseMove);
                                el.addEventListener('mouseleave', handleMouseLeave);
                                el.addEventListener('click', handleClick);
                            }}
                        >
                            <div className="card__header">
                                <div className="card__label">{card.label}</div>
                                {card.icon && (
                                    <div className="card__icon">
                                        <card.icon size={24} />
                                    </div>
                                )}
                            </div>
                            <div className="card__image-container">
                                {card.imageUrl && (
                                    <img
                                        src={card.imageUrl}
                                        alt={card.title}
                                        className="card__image"
                                    />
                                )}
                            </div>
                            <div className="card__content">
                                <h2 className="card__title">{card.title}</h2>
                                <p className="card__description">{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </BentoCardGrid>
        </>
    );
};

export default ServiceMagicBento;
