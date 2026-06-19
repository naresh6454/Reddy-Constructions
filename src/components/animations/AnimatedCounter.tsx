"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/utils";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000, className }: AnimatedCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView || !countRef.current) return;
    let startTime: number;
    let frame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (countRef.current) {
        countRef.current.textContent = `${prefix}${Math.floor(eased * end)}${suffix}`;
      }
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else if (countRef.current) {
        countRef.current.textContent = `${prefix}${end}${suffix}`;
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration, suffix, prefix]);

  return (
    <span ref={ref} className={cn(className)}>
      <span ref={countRef}>{prefix}0{suffix}</span>
    </span>
  );
}
