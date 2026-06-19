import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const encodedMessage = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Hello! I'm interested in your construction services.");
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Crore`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} Lakhs`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function getStatusColor(status: string) {
  const colors: Record<string, { bg: string; text: string; dot: string }> = {
    ongoing: { bg: "bg-amber-100", text: "text-amber-800", dot: "bg-amber-500" },
    completed: { bg: "bg-emerald-100", text: "text-emerald-800", dot: "bg-emerald-500" },
    upcoming: { bg: "bg-blue-100", text: "text-blue-800", dot: "bg-blue-500" },
  };
  return colors[status] || colors.upcoming;
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function animateCounter(
  start: number,
  end: number,
  duration: number,
  onUpdate: (value: number) => void,
  onComplete?: () => void
) {
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    const current = Math.floor(start + (end - start) * easedProgress);
    onUpdate(current);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onUpdate(end);
      onComplete?.();
    }
  };

  requestAnimationFrame(step);
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce(
    (groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(item);
      return groups;
    },
    {} as Record<string, T[]>
  );
}
