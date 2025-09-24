# Lottie Animations in Link Innovations

This guide covers everything you need to know about using Lottie animations in our Next.js application.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Component API](#component-api)
3. [Performance Optimization](#performance-optimization)
4. [Integration with Framer Motion](#integration-with-framer-motion)
5. [Best Practices](#best-practices)
6. [Examples](#examples)
7. [Troubleshooting](#troubleshooting)

## Quick Start

### Basic Usage

```tsx
import LottieAnimation from "@/components/LottieAnimation";

function MyComponent() {
  return (
    <LottieAnimation
      src="/animations/my-animation.json"
      width={400}
      height={300}
      loop={true}
      autoplay={true}
    />
  );
}
```

### With Framer Motion Integration

```tsx
import LottieAnimation from "@/components/LottieAnimation";

function MyComponent() {
  return (
    <LottieAnimation
      src="/animations/my-animation.json"
      width={400}
      height={300}
      withFramerMotion={true}
      motionProps={{
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
        whileHover: { scale: 1.05 },
      }}
    />
  );
}
```

## Component API

### LottieAnimation Props

| Prop               | Type                          | Default  | Description                                                     |
| ------------------ | ----------------------------- | -------- | --------------------------------------------------------------- |
| `src`              | `string \| object`            | -        | **Required.** Path to Lottie JSON file or animation data object |
| `className`        | `string`                      | `''`     | CSS classes to apply to the container                           |
| `style`            | `React.CSSProperties`         | `{}`     | Inline styles for the container                                 |
| `width`            | `number \| string`            | `'100%'` | Width of the animation                                          |
| `height`           | `number \| string`            | `'auto'` | Height of the animation                                         |
| `loop`             | `boolean`                     | `true`   | Whether the animation should loop                               |
| `autoplay`         | `boolean`                     | `true`   | Whether the animation should start automatically                |
| `speed`            | `number`                      | `1`      | Playback speed (1 = normal, 2 = double speed, 0.5 = half speed) |
| `direction`        | `1 \| -1`                     | `1`      | Animation direction (1 = forward, -1 = reverse)                 |
| `playOnHover`      | `boolean`                     | `false`  | Start playing when mouse enters                                 |
| `playOnClick`      | `boolean`                     | `false`  | Toggle play/pause on click                                      |
| `pauseOnHover`     | `boolean`                     | `false`  | Pause when mouse enters                                         |
| `quality`          | `'low' \| 'medium' \| 'high'` | `'high'` | Rendering quality                                               |
| `renderer`         | `'svg' \| 'canvas' \| 'html'` | `'svg'`  | Rendering engine                                                |
| `preload`          | `boolean`                     | `true`   | Preload animation data                                          |
| `lazy`             | `boolean`                     | `false`  | Load animation only when in viewport                            |
| `threshold`        | `number`                      | `0.1`    | Intersection observer threshold for lazy loading                |
| `fallback`         | `React.ReactNode`             | `null`   | Fallback content while loading                                  |
| `withFramerMotion` | `boolean`                     | `false`  | Enable Framer Motion integration                                |
| `motionProps`      | `object`                      | `{}`     | Framer Motion animation props                                   |
| `onComplete`       | `() => void`                  | -        | Callback when animation completes                               |
| `onLoopComplete`   | `() => void`                  | -        | Callback when loop completes                                    |
| `onEnterFrame`     | `(frame: number) => void`     | -        | Callback on each frame                                          |

## Performance Optimization

### Automatic Optimization

The component automatically optimizes based on device capabilities:

```tsx
import { createOptimizedLottieProps } from "@/utils/lottieOptimizer";

const optimizedProps = createOptimizedLottieProps(
  "/animations/heavy-animation.json",
  {
    maxWidth: 800,
    maxHeight: 600,
    quality: "high",
    reduceComplexity: false,
  }
);

<LottieAnimation {...optimizedProps} />;
```

### Manual Optimization

```tsx
import { getOptimizedLottieConfig } from "@/utils/lottieOptimizer";

const config = getOptimizedLottieConfig({
  quality: "medium",
  removeUnusedAssets: true,
  compressAssets: true,
});

<LottieAnimation
  src="/animations/my-animation.json"
  renderer={config.renderer}
  quality={config.quality}
  lazy={config.lazy}
  preload={config.preload}
/>;
```

### Performance Monitoring

```tsx
import { LottiePerformanceMonitor } from "@/utils/lottieOptimizer";

const monitor = new LottiePerformanceMonitor();

<LottieAnimation
  src="/animations/my-animation.json"
  onEnterFrame={(frame) => monitor.recordFrame("my-animation", frame)}
  onComplete={() => {
    const metrics = monitor.stopMonitoring("my-animation");
    console.log("Animation performance:", metrics);
  }}
/>;
```

## Integration with Framer Motion

### Basic Integration

```tsx
<LottieAnimation
  src="/animations/my-animation.json"
  withFramerMotion={true}
  motionProps={{
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  }}
/>
```

### Advanced Integration

```tsx
<LottieAnimation
  src="/animations/my-animation.json"
  withFramerMotion={true}
  motionProps={{
    initial: { opacity: 0, scale: 0.8, rotate: -10 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.8, rotate: 10 },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    whileTap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  }}
/>
```

### Staggered Animations

```tsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {animations.map((anim, index) => (
    <motion.div key={index} variants={itemVariants}>
      <LottieAnimation
        src={anim.src}
        withFramerMotion={true}
        motionProps={{
          variants: itemVariants,
        }}
      />
    </motion.div>
  ))}
</motion.div>;
```

## Best Practices

### 1. File Organization

```
public/
  animations/
    icons/
      loading.json
      success.json
      error.json
    illustrations/
      hero-animation.json
      feature-animation.json
    interactions/
      button-hover.json
      card-flip.json
```

### 2. Naming Conventions

- Use descriptive names: `hero-illustration.json` not `anim1.json`
- Include purpose: `loading-spinner.json`, `success-checkmark.json`
- Use kebab-case for file names

### 3. Performance Guidelines

#### File Size Optimization

- Keep animations under 500KB for web
- Use After Effects optimization settings
- Remove unused assets and layers
- Compress images within animations

#### Loading Strategy

```tsx
// For above-the-fold animations
<LottieAnimation
  src="/animations/hero.json"
  preload={true}
  lazy={false}
/>

// For below-the-fold animations
<LottieAnimation
  src="/animations/feature.json"
  preload={false}
  lazy={true}
  threshold={0.3}
/>
```

#### Device-Specific Optimization

```tsx
import { shouldDisableLottieAnimations } from "@/utils/lottieOptimizer";

const shouldDisable = shouldDisableLottieAnimations();

{
  !shouldDisable ? (
    <LottieAnimation src="/animations/complex.json" />
  ) : (
    <StaticImage src="/images/fallback.png" alt="Fallback" />
  );
}
```

### 4. Accessibility

```tsx
<LottieAnimation
  src="/animations/loading.json"
  aria-label="Loading animation"
  role="img"
  // Respect user's motion preferences
  autoplay={!window.matchMedia("(prefers-reduced-motion: reduce)").matches}
/>
```

### 5. Error Handling

```tsx
<LottieAnimation
  src="/animations/my-animation.json"
  fallback={
    <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
      <p className="text-gray-500">Animation unavailable</p>
    </div>
  }
  onError={(error) => {
    console.error("Lottie animation failed to load:", error);
    // Track error in analytics
  }}
/>
```

## Examples

### Hero Section Integration

```tsx
// In HeroSection.tsx
const TAB_LIST = [
  {
    icon: Code,
    title: "Web Development",
    animation: "/animations/web-dev.json",
    type: "lottie" as const,
  },
  // ... other tabs
];

// In render
<TabsContent value={content.title}>
  <div className="aspect-[1.696202532] w-full overflow-hidden rounded-3xl">
    {content.type === "lottie" ? (
      <LottieAnimation
        src={content.animation}
        width="100%"
        height="100%"
        loop={true}
        autoplay={true}
        playOnHover={true}
        withFramerMotion={true}
        motionProps={{
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, ease: "easeOut" },
          whileHover: { scale: 1.02 },
        }}
      />
    ) : (
      <video src={content.animation} autoPlay loop muted />
    )}
  </div>
</TabsContent>;
```

### Loading States

```tsx
function LoadingSpinner() {
  return (
    <LottieAnimation
      src="/animations/loading-spinner.json"
      width={60}
      height={60}
      loop={true}
      autoplay={true}
      className="mx-auto"
    />
  );
}
```

### Interactive Elements

```tsx
function InteractiveButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-lg"
    >
      <LottieAnimation
        src="/animations/button-hover.json"
        width="100%"
        height="100%"
        autoplay={isHovered}
        loop={false}
        className="absolute inset-0"
      />
      <span className="relative z-10 px-6 py-3 text-white font-semibold">
        Click Me
      </span>
    </button>
  );
}
```

### Responsive Animations

```tsx
function ResponsiveAnimation() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <LottieAnimation
        src="/animations/responsive-animation.json"
        width="100%"
        height="auto"
        className="w-full h-auto max-h-96"
        renderer="svg" // SVG scales better
        quality="high"
      />
    </div>
  );
}
```

## Troubleshooting

### Common Issues

#### 1. Animation Not Loading

```tsx
// Check file path and network
<LottieAnimation
  src="/animations/my-animation.json" // Ensure correct path
  fallback={<div>Loading failed</div>}
  onError={(error) => console.error("Load error:", error)}
/>
```

#### 2. Performance Issues

```tsx
// Use canvas renderer for complex animations
<LottieAnimation
  src="/animations/complex.json"
  renderer="canvas"
  quality="medium"
  lazy={true}
/>
```

#### 3. Mobile Issues

```tsx
// Optimize for mobile
<LottieAnimation
  src="/animations/mobile-optimized.json"
  renderer="canvas"
  quality="low"
  preload={false}
  lazy={true}
/>
```

#### 4. Framer Motion Conflicts

```tsx
// Ensure proper nesting
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  <LottieAnimation
    src="/animations/my-animation.json"
    withFramerMotion={false} // Disable if parent handles motion
  />
</motion.div>
```

### Debug Mode

```tsx
// Enable debug logging
<LottieAnimation
  src="/animations/debug.json"
  onEnterFrame={(frame) => console.log("Frame:", frame)}
  onComplete={() => console.log("Animation completed")}
  onLoopComplete={() => console.log("Loop completed")}
/>
```

### Performance Monitoring

```tsx
import { LottiePerformanceMonitor } from "@/utils/lottieOptimizer";

const monitor = new LottiePerformanceMonitor();

function MonitoredAnimation() {
  useEffect(() => {
    monitor.startMonitoring("my-animation");

    return () => {
      const metrics = monitor.stopMonitoring("my-animation");
      console.log("Performance metrics:", metrics);
    };
  }, []);

  return (
    <LottieAnimation
      src="/animations/my-animation.json"
      onEnterFrame={(frame) => monitor.recordFrame("my-animation", frame)}
    />
  );
}
```

## Resources

- [Lottie Files](https://lottiefiles.com/) - Free animations
- [After Effects to Lottie](https://lottiefiles.com/plugins/after-effects) - Export plugin
- [Lottie Web Documentation](https://github.com/LottieFiles/lottie-web) - Technical reference
- [Performance Best Practices](https://lottiefiles.com/blog/optimizing-lottie-animations-for-web) - Optimization guide

## Support

For issues or questions:

1. Check this documentation
2. Review the examples in `src/components/LottieExamples.tsx`
3. Check browser console for errors
4. Contact the development team

