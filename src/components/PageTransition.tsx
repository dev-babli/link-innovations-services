'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
    children: React.ReactNode;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: -20,
        scale: 1.02
    }
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
};

const loadingVariants = {
    initial: {
        scaleX: 0,
        originX: 0
    },
    animate: {
        scaleX: 1,
        originX: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    },
    exit: {
        scaleX: 0,
        originX: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    }
};

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="relative"
            >
                {/* Loading bar */}
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            variants={loadingVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
                        />
                    )}
                </AnimatePresence>

                {/* Page content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
