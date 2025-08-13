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
  const classNames = clsx(className, initialClass, inView && animationClass);

  if (as === "span") {
    return (
      <span
        ref={ref as (node: HTMLSpanElement | null) => void}
        className={classNames}
      >
        {children}
      </span>
    );
  }

  if (as === "p") {
    return (
      <p
        ref={ref as (node: HTMLParagraphElement | null) => void}
        className={classNames}
      >
        {children}
      </p>
    );
  }

  return (
    <div
      ref={ref as (node: HTMLDivElement | null) => void}
      className={classNames}
    >
      {children}
    </div>
  );
}
