"use client";
import { useInView } from "react-intersection-observer";
import { cn } from "@/utils";

const HIDDEN: Record<string, string> = {
  up:    "opacity-0 translate-y-8",
  down:  "opacity-0 -translate-y-8",
  left:  "opacity-0 translate-x-8",
  right: "opacity-0 -translate-x-8",
};

// ─── RevealText ────────────────────────────────────────────────────────────────
export function RevealText({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out duration-500",
        inView ? "opacity-100 translate-x-0 translate-y-0" : HIDDEN[direction],
        className
      )}
      style={delay ? { transitionDelay: `${delay * 1000}ms` } : undefined}
    >
      {children}
    </div>
  );
}

// ─── StaggerChildren ───────────────────────────────────────────────────────────
export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  void staggerDelay; // delay is handled in CSS via nth-child

  return (
    <div ref={ref} className={cn(className, inView ? "stagger-visible" : "")}>
      {children}
    </div>
  );
}

// ─── StaggerItem ───────────────────────────────────────────────────────────────
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("stagger-item", className)}>
      {children}
    </div>
  );
}
