"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowUpRight, Apple} from "lucide-react";
import { SiApple, SiAndroid } from "react-icons/si";

export function Hero() {
  const { heroCopy, links, assets } = siteConfig;

  return (
    <section className="flex-1 flex items-center w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-6 lg:py-0 overflow-hidden translate-y-[105px]">
      <div className="w-full max-w-[1580px] mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions (~47% on desktop) */}
          <div className="lg:col-span-7 xl:col-span-7 z-20 flex flex-col items-start -translate-y-6 w-full lg:-translate-y-[62px]">
            {/* Announcement Badge - App Store announcement */}
            <div className="inline-flex items-center gap-2.5 mt-2 mb-3 sm:mb-4 text-[#F56627] dark:text-[#FF702F]">
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 384 512"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.3-41.7-85.1-44.6-35.8-2.8-74.9 20.9-89.2 20.9-15.1 0-49.7-19.9-76.7-19.9C62 141.1 0 186.5 0 279.3c0 27.4 5 55.7 15 84.8 13.3 36.7 61.3 126.6 111.4 125.1 24.9-.6 42.5-17.7 75.7-17.7 32.2 0 48.5 17.7 76.3 17.7 50.5-.7 93.9-82.4 106.6-119.2-67.7-31.9-66.3-94.4-66.3-101.3zM261.1 104.5C288.6 71.9 286.1 42.2 285.3 32c-24.3 1.4-52.1 16.5-68.1 35.2-17.6 19.8-28 44.3-25.8 72 26.3 2 50.3-11.5 69.7-34.7z"/>
              </svg>
              <span className="h-4 w-px bg-[#D8D8DC] dark:bg-[#3A3A3C]" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.10em] uppercase whitespace-nowrap">
                Now available on the App Store
              </span>
            </div>


            {/* Headline - Exact 3-line breakdown, ~84px at 1600px, 800 weight, -0.055em letter spacing, tight line-height */}
            <h1 style={{ fontFamily: "Arial, Helvetica, sans-serif" }} className="relative z-20 w-[calc(100%+140px)] max-w-none text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] 2xl:text-[6.75rem] font-extrabold tracking-[-0.055em] text-[#151515] dark:text-[#F5F5F7] leading-[0.9] mb-5 sm:mb-6 font-sans">
              Your saved reels,
              <br />
              <span className="text-[#F56627] dark:text-[#FF702F]">
                turned into places
                <br />
                to explore.
              </span>
            </h1>

            {/* Description - ~20px at 1600px, font weight 400, line height 1.55, max width ~620px */}
            <p className="text-base sm:text-lg xl:text-[1.2rem] text-[#8E8E93] dark:text-[#A1A1A6] font-normal leading-[1.55] mb-7 sm:mb-8 max-w-[620px] font-sans">
              {heroCopy.description}
            </p>

            {/* CTAs - 16px semibold modern sans-serif */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-3">
              <a
                href={links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#F56627] hover:bg-[#E05518] text-white font-semibold text-[16px] shadow-sm hover:shadow transition-all duration-150 select-none active:scale-[0.98] font-sans"
              >
                <SiApple className="w-5 h-5" aria-hidden="true" />
                <span>{heroCopy.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href={links.androidBeta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-neutral-50 dark:bg-[#1C1C1E] dark:hover:bg-[#2C2C2E] text-[#151515] dark:text-[#F5F5F7] border border-[#E5E5E7] dark:border-[#333337] font-semibold text-[16px] shadow-sm hover:shadow transition-all duration-150 select-none active:scale-[0.98] font-sans"
              >
                <SiAndroid className="w-5 h-5" aria-hidden="true" />
                <span>{heroCopy.secondaryCta}</span>
              </a>
            </div>

            {/* Availability Text */}
            <p className="text-xs sm:text-sm text-[#8E8E93] dark:text-[#A1A1A6] font-normal pl-1 mt-1 font-sans">
              {heroCopy.availability}
            </p>
          </div>

          {/* Right Column: Primary Cinematic Hero Visual (~53% on desktop) */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center lg:justify-end w-full h-[45vh] sm:h-[55vh] lg:h-[78vh] xl:h-[82vh] max-h-[900px] lg:-translate-y-4">
            <div className="relative w-full h-full">
              <Image
                src={assets.heroImage}
                alt="Cinematic 3D render of a car emerging from an iPhone screen, visualizing travel reels transformed into real-world destinations with Walmo"
                fill
                priority
                className="object-contain object-center lg:object-right select-none drop-shadow-2xl scale-100 lg:scale-[1.18] xl:scale-[1.38] 2xl:scale-[1.42] origin-center lg:origin-right"
                sizes="(max-width: 1024px) 100vw, 53vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
