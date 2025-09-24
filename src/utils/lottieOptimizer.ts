/**
 * Lottie Animation Optimizer
 * Utilities for optimizing Lottie animations for web performance
 */

export interface LottieOptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: 'low' | 'medium' | 'high';
  removeUnusedAssets?: boolean;
  compressAssets?: boolean;
  reduceComplexity?: boolean;
}

export interface OptimizedLottieConfig {
  renderer: 'svg' | 'canvas' | 'html';
  rendererSettings: {
    preserveAspectRatio: string;
    progressiveLoad: boolean;
    hideOnTransparent: boolean;
    className?: string;
  };
  quality: 'low' | 'medium' | 'high';
  preload: boolean;
  lazy: boolean;
}

/**
 * Get optimized configuration based on device and network conditions
 */
export const getOptimizedLottieConfig = (
  options: LottieOptimizationOptions = {}
): OptimizedLottieConfig => {
  const {
    maxWidth = 1920,
    maxHeight = 1080,
    quality = 'high',
    removeUnusedAssets = true,
    compressAssets = true,
    reduceComplexity = false,
  } = options;

  // Detect device capabilities
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isLowEndDevice = typeof navigator !== 'undefined' && 
    (navigator.hardwareConcurrency || 4) < 4;
  const isSlowConnection = typeof navigator !== 'undefined' && 
    navigator.connection && 
    (navigator.connection as any).effectiveType === 'slow-2g';

  // Determine optimal settings
  let renderer: 'svg' | 'canvas' | 'html' = 'svg';
  let optimizedQuality: 'low' | 'medium' | 'high' = quality;
  let preload = true;
  let lazy = false;

  if (isMobile || isLowEndDevice) {
    renderer = 'canvas';
    optimizedQuality = 'medium';
    lazy = true;
  }

  if (isSlowConnection) {
    optimizedQuality = 'low';
    preload = false;
    lazy = true;
  }

  if (reduceComplexity) {
    renderer = 'canvas';
    optimizedQuality = 'low';
  }

  return {
    renderer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
      hideOnTransparent: true,
      className: `lottie-optimized-${optimizedQuality}`,
    },
    quality: optimizedQuality,
    preload,
    lazy,
  };
};

/**
 * Preload Lottie animation data
 */
export const preloadLottieAnimation = async (src: string): Promise<object> => {
  try {
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`Failed to load animation: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to preload Lottie animation:', error);
    throw error;
  }
};

/**
 * Batch preload multiple Lottie animations
 */
export const preloadLottieAnimations = async (
  sources: string[]
): Promise<Map<string, object>> => {
  const animations = new Map<string, object>();
  
  const promises = sources.map(async (src) => {
    try {
      const animationData = await preloadLottieAnimation(src);
      animations.set(src, animationData);
    } catch (error) {
      console.warn(`Failed to preload animation: ${src}`, error);
    }
  });

  await Promise.allSettled(promises);
  return animations;
};

/**
 * Create a performance-optimized Lottie component configuration
 */
export const createOptimizedLottieProps = (
  src: string,
  options: LottieOptimizationOptions = {}
) => {
  const config = getOptimizedLottieConfig(options);
  
  return {
    src,
    renderer: config.renderer,
    rendererSettings: config.rendererSettings,
    quality: config.quality,
    preload: config.preload,
    lazy: config.lazy,
    loop: true,
    autoplay: !config.lazy,
    playOnHover: config.lazy,
    fallback: (
      <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full flex items-center justify-center">
        <div className="text-gray-400 text-sm">Loading animation...</div>
      </div>
    ),
  };
};

/**
 * Performance monitoring for Lottie animations
 */
export class LottiePerformanceMonitor {
  private metrics: Map<string, any> = new Map();

  startMonitoring(animationId: string) {
    this.metrics.set(animationId, {
      startTime: performance.now(),
      frameCount: 0,
      droppedFrames: 0,
    });
  }

  recordFrame(animationId: string, frameTime: number) {
    const metric = this.metrics.get(animationId);
    if (metric) {
      metric.frameCount++;
      const expectedFrameTime = 1000 / 60; // 60fps
      if (frameTime > expectedFrameTime * 1.5) {
        metric.droppedFrames++;
      }
    }
  }

  stopMonitoring(animationId: string) {
    const metric = this.metrics.get(animationId);
    if (metric) {
      metric.endTime = performance.now();
      metric.duration = metric.endTime - metric.startTime;
      metric.fps = (metric.frameCount / metric.duration) * 1000;
      metric.dropRate = metric.droppedFrames / metric.frameCount;
    }
    return metric;
  }

  getMetrics(animationId: string) {
    return this.metrics.get(animationId);
  }

  getAllMetrics() {
    return Object.fromEntries(this.metrics);
  }
}

/**
 * Utility to detect if Lottie animations should be disabled
 */
export const shouldDisableLottieAnimations = (): boolean => {
  if (typeof window === 'undefined') return false;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return true;

  // Check for low battery
  if ('getBattery' in navigator) {
    (navigator as any).getBattery().then((battery: any) => {
      if (battery.level < 0.2 && !battery.charging) {
        return true;
      }
    });
  }

  // Check for slow connection
  if (navigator.connection) {
    const connection = navigator.connection as any;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return true;
    }
  }

  return false;
};

/**
 * Create a responsive Lottie configuration
 */
export const createResponsiveLottieConfig = (
  baseConfig: any,
  breakpoints: { [key: string]: any } = {}
) => {
  const defaultBreakpoints = {
    mobile: { width: '100%', height: 200, quality: 'medium' as const },
    tablet: { width: '100%', height: 300, quality: 'high' as const },
    desktop: { width: '100%', height: 400, quality: 'high' as const },
  };

  const mergedBreakpoints = { ...defaultBreakpoints, ...breakpoints };

  return {
    ...baseConfig,
    responsive: true,
    breakpoints: mergedBreakpoints,
  };
};

export default {
  getOptimizedLottieConfig,
  preloadLottieAnimation,
  preloadLottieAnimations,
  createOptimizedLottieProps,
  LottiePerformanceMonitor,
  shouldDisableLottieAnimations,
  createResponsiveLottieConfig,
};

