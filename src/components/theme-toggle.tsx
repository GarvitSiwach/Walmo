"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-surface-secondary/60 animate-pulse ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`relative p-2 rounded-full bg-surface text-foreground hover:bg-surface-secondary border border-border transition-colors duration-200 focus-ring flex items-center justify-center ${className}`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-foreground transition-transform hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-primary transition-transform hover:rotate-45" />
      )}
    </button>
  );
}
