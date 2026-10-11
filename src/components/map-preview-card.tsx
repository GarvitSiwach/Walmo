import React from "react";
import { MapPin, Navigation } from "lucide-react";

interface MapPreviewCardProps {
  className?: string;
}

export function MapPreviewCard({ className = "" }: MapPreviewCardProps) {
  return (
    <div
      className={`p-3 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-surface/95 backdrop-blur-md border border-border shadow-float dark:shadow-float-dark transition-all duration-300 hover:translate-y-[-2px] select-none ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="text-[10px] sm:text-xs font-semibold text-foreground">
            Live Trip Map
          </span>
        </div>
        <span className="text-[10px] text-muted font-medium">4 Pins Nearby</span>
      </div>

      {/* Mini Visual Map Canvas */}
      <div className="relative w-44 sm:w-48 h-20 sm:h-22 rounded-xl bg-surface-secondary/70 border border-border/80 overflow-hidden flex items-center justify-center">
        {/* Subtle grid and contour lines */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Route Line */}
        <svg
          className="absolute inset-0 w-full h-full text-primary/40"
          viewBox="0 0 180 80"
          fill="none"
        >
          <path
            d="M 25 55 Q 60 20 95 40 T 155 25"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="4 3"
          />
        </svg>

        {/* Pin 1 */}
        <div className="absolute top-4 left-6 flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
            <MapPin className="w-3 h-3 fill-white" />
          </div>
        </div>

        {/* Pin 2 */}
        <div className="absolute bottom-3 left-20 flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-surface text-primary border border-primary flex items-center justify-center shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </div>

        {/* Pin 3 - User location */}
        <div className="absolute top-3 right-7 flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
            <Navigation className="w-2.5 h-2.5 rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}
