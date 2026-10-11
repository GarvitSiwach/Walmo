import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MapPin, BookmarkCheck } from "lucide-react";

interface FloatingPlaceCardProps {
  className?: string;
}

export function FloatingPlaceCard({ className = "" }: FloatingPlaceCardProps) {
  return (
    <div
      className={`p-3 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-surface/95 backdrop-blur-md border border-border shadow-float dark:shadow-float-dark transition-all duration-300 hover:translate-y-[-2px] select-none ${className}`}
    >
      <div className="flex items-center gap-3">
        {/* Destination Thumbnail */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-secondary flex-shrink-0">
          <Image
            src={siteConfig.assets.cardDestinationImage}
            alt="Saved destination from reel"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 48px, 56px"
          />
          <div className="absolute top-1 right-1 p-0.5 rounded-full bg-primary text-white shadow-sm">
            <BookmarkCheck className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Destination Info */}
        <div className="min-w-0 pr-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-accent-soft text-primary">
              Extracted Spot
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-foreground truncate mt-1">
            Positano Cliffside View
          </h4>
          <p className="text-[11px] text-muted flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
            <span className="truncate">Amalfi Coast, Italy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
