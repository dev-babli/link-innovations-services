'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

export const useFastNavigation = () => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const navigateTo = useCallback(async (path: string) => {
    setIsNavigating(true);
    try {
      // Use Next.js router for faster client-side navigation
      router.push(path);
    } finally {
      // Hide loading after a short delay to ensure smooth transition
      setTimeout(() => setIsNavigating(false), 1000);
    }
  }, [router]);

  const prefetchRoute = useCallback((path: string) => {
    // Prefetch the route for faster loading
    router.prefetch(path);
  }, [router]);

  return {
    navigateTo,
    prefetchRoute,
    isNavigating
  };
};
