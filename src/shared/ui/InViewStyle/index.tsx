"use client";

import { useInView, IntersectionOptions } from "react-intersection-observer";
import clsx from "clsx";

interface InViewAnimationProps extends IntersectionOptions {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  initialClass?: string;
  /**
   * Which HTML tag to render as. Defaults to 'div'.
   * Useful to avoid layout breaks when animating inline elements like span/p.
   */
  as?: "div" | "span" | "p";
}

export function InViewStyle({
  children,
  className,
  animationClass,
  initialClass,
  as = "div",
  ...props
}: InViewAnimationProps) {
  const { ref, inView } = useInView(props);
  const Component = as as keyof JSX.IntrinsicElements;
  return (
    <Component
      ref={ref as any}
      className={clsx(className, initialClass, inView && animationClass)}
    >
      {children}
    </Component>
  );
}
