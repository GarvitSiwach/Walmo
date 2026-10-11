"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MapPin, Bookmark, Compass, Heart, Share2, Search, SlidersHorizontal } from "lucide-react";

interface PhoneMockupProps {
  className?: string;
}

export function PhoneMockup({ className = "" }: PhoneMockupProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[310px] md:w-[325px] h-[580px] sm:h-[630px] md:h-[660px] rounded-[48px] p-3.5 bg-[#1C1C1E] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.12)] border-4 border-[#2C2C2E] select-none transition-transform duration-500 hover:scale-[1.01] ${className}`}
    >
      {/* Speaker / Dynamic Island */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-end px-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#1C1C1E] border border-[#333337]" />
      </div>

      {/* Screen Frame Container */}
      <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#121212] text-white flex flex-col">
        {/* Genuine Screenshot or Elegant High-Fidelity Wishlist Interface Fallback */}
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image
              src={siteConfig.assets.wishlistScreenshot}
              alt="Walmo Wishlist Screen"
              fill
              className="object-cover object-top"
              priority
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          /* High-Fidelity Native Wishlist Interface Preview (Active fallback until wishlist.png is placed in assets) */
          <div className="w-full h-full flex flex-col justify-between pt-10 pb-4 px-4 bg-gradient-to-b from-[#18181A] via-[#121214] to-[#0A0A0C]">
            {/* App Header */}
            <div className="pt-2 pb-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF702F]">
                  Walmo Wishlist
                </span>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-white/10 text-white/90">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-1.5 rounded-full bg-white/10 text-white/90">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Saved Places
              </h3>
              <p className="text-[11px] text-white/50">
                18 spots extracted from reels
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1.5 pb-2 overflow-x-hidden text-[11px]">
              <span className="px-3 py-1 rounded-full bg-[#FF702F] text-white font-medium">
                All Spots (18)
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/70">
                Cafes & Food
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/70">
                Views
              </span>
            </div>

            {/* Wishlist Place Cards List */}
            <div className="flex-1 space-y-2.5 overflow-hidden py-1">
              {/* Card 1 */}
              <div className="p-2.5 rounded-2xl bg-white/[0.06] border border-white/10 flex gap-3 items-center backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-600/40 relative overflow-hidden flex-shrink-0 border border-white/10">
                  <div className="absolute bottom-1 right-1 px-1 py-0.5 rounded bg-black/60 text-[8px] text-[#FF702F] font-semibold">
                    REEL
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-white truncate">
                      Bar Luce · Fondazione
                    </h4>
                    <Heart className="w-3.5 h-3.5 text-[#FF702F] fill-[#FF702F]" />
                  </div>
                  <p className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-[#FF702F]" /> Milan, Italy
                  </p>
                  <div className="mt-1 flex items-center gap-1.5 text-[9px] text-white/70">
                    <span className="px-1.5 py-0.5 rounded bg-white/10">Wes Anderson design</span>
                    <span className="text-[#FF702F]">★ 4.9</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-2.5 rounded-2xl bg-white/[0.06] border border-white/10 flex gap-3 items-center backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-600/40 relative overflow-hidden flex-shrink-0 border border-white/10">
                  <div className="absolute bottom-1 right-1 px-1 py-0.5 rounded bg-black/60 text-[8px] text-[#FF702F] font-semibold">
                    REEL
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-white truncate">
                      Oia Cliffside Sunset View
                    </h4>
                    <Heart className="w-3.5 h-3.5 text-[#FF702F] fill-[#FF702F]" />
                  </div>
                  <p className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-[#FF702F]" /> Santorini, Greece
                  </p>
                  <div className="mt-1 flex items-center gap-1.5 text-[9px] text-white/70">
                    <span className="px-1.5 py-0.5 rounded bg-white/10">Golden hour</span>
                    <span className="text-[#FF702F]">★ 4.95</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/5 flex gap-3 items-center opacity-70">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/30 to-teal-600/40 relative overflow-hidden flex-shrink-0 border border-white/10" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-white truncate">
                    Tsukiji Outer Market
                  </h4>
                  <p className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-[#FF702F]" /> Tokyo, Japan
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tab Bar */}
            <div className="pt-2 pb-1 border-t border-white/10 flex items-center justify-around text-white/60">
              <div className="flex flex-col items-center gap-0.5">
                <Compass className="w-4 h-4" />
                <span className="text-[9px]">Discover</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-[#FF702F]">
                <Bookmark className="w-4 h-4" />
                <span className="text-[9px] font-semibold">Wishlist</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <MapPin className="w-4 h-4" />
                <span className="text-[9px]">Map</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Screen Glare reflection overlay */}
      <div className="absolute inset-x-3.5 top-3.5 h-44 rounded-t-[38px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
    </div>
  );
}
