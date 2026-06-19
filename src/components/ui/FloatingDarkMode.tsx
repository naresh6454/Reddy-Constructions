"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function FloatingDarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-brand-blue dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-2 border-white/20"
      aria-label="Toggle dark mode"
    >
      {theme === "dark"
        ? <Sun size={22} className="text-brand-yellow" />
        : <Moon size={22} className="text-white" />
      }
    </button>
  );
}
