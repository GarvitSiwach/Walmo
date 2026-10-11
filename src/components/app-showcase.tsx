"use client";

import { ScrollReveal } from "@/components/scroll-reveal";


import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AppShowcase() {
  return (
    <ScrollReveal>
      <section
      id="app"
      className="relative isolate w-full overflow-hidden bg-transparent py-12 sm:py-16 lg:py-20"
    >
      

      {/* Soft circular orange glow behind all three phones */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[48%] z-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "min(45vw, 500px)",
          aspectRatio: "1 / 1",
          background:
            "radial-gradient(circle, rgba(255,105,35,0.24) 0%, rgba(255,105,35,0.14) 32%, rgba(255,105,35,0.06) 55%, transparent 72%)",
          filter: "blur(25px)",
        }}
      />

      <div className="relative mx-auto flex min-h-[500px] max-w-[1500px] items-center justify-center px-5 sm:min-h-[650px] lg:min-h-[780px]">

        <div className="relative flex h-[480px] w-full max-w-[1080px] items-center justify-center sm:h-[620px] lg:h-[760px]">

          {/* Left: appimage2 */}
          <div className="absolute left-[3%] top-[12%] z-10 h-[72%] w-[34%] -rotate-[7deg] sm:left-[5%] sm:h-[75%] sm:w-[31%] lg:left-[7%]">
            <Image
              src="/assets/appimage2.png"
              alt="Walmo trips screen"
              fill
              priority
              sizes="(max-width: 640px) 34vw, 320px"
              className="object-contain select-none"
            />
          </div>

          {/* Center: appimage1 */}
          <div className="absolute left-1/2 top-1/2 z-20 h-[94%] w-[43%] -translate-x-1/2 -translate-y-1/2 sm:w-[39%] lg:w-[34%]">
            <Image
              src="/assets/appimage1.png"
              alt="Walmo home screen"
              fill
              priority
              sizes="(max-width: 640px) 43vw, 380px"
              className="object-contain select-none"
            />
          </div>

          {/* Right: appimage3 */}
          <div className="absolute right-[3%] top-[12%] z-10 h-[72%] w-[34%] rotate-[7deg] sm:right-[5%] sm:h-[75%] sm:w-[31%] lg:right-[7%]">
            <Image
              src="/assets/appimage3.png"
              alt="Walmo trip itinerary screen"
              fill
              priority
              sizes="(max-width: 640px) 34vw, 320px"
              className="object-contain select-none"
            />
          </div>

        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}
