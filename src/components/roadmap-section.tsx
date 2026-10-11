"use client";

import { ScrollReveal } from "@/components/scroll-reveal";


import Image from "next/image";

const points = [
  {
    number: "01",
    title: "Weekend explorers",
    subtitle: "Find your next favourite meal.",
    description: "Discover restaurants, cafés, and hidden gems.",
    position: "left-[18%] top-[0%]",
  },
  {
    number: "02",
    title: "Travelers",
    subtitle: "Your trip starts on Instagram.",
    description: "Turn saved travel reels into places on your map.",
    position: "left-[38%] top-[17%]",
  },
  {
    number: "03",
    title: "Reel collectors",
    subtitle: "200 saves, zero plans?",
    description: "Finally turn your saved reels into real destinations.",
    position: "left-[1%] top-[42%]",
  },
  {
    number: "04",
    title: "Group planners",
    subtitle: "Be the friend with the plan.",
    description: "Bring everyone's favourite places together.",
    position: "left-[46%] top-[68%]",
  },
];

export function RoadmapSection() {
  return (
    <ScrollReveal>
      <section
      id="roadmap"
      className="w-full overflow-hidden bg-transparent px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:pt-8 pb-24"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-5 sm:gap-7 lg:grid-cols-12 lg:gap-4 xl:gap-6">

        {/* LEFT: Road illustration and floating callouts */}
        <div className="relative z-10 w-full lg:col-span-7 lg:-translate-x-6 lg:-translate-y-8">
          <div className="relative mx-auto aspect-[3/2] w-[115%] max-w-none lg:w-[130%]">
            <Image
              src="/assets/roadmap.png"
              alt="A winding mountain road with four destination checkpoints"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-contain [mask-image:linear-gradient(to_bottom,black_0%,black_72%,transparent_100%),linear-gradient(to_left,black_0%,black_75%,transparent_100%)] [mask-composite:intersect]"
            />

            {points.map((point) => (
              <div
                key={point.number}
                className={`absolute ${point.position} z-20 w-[46%] sm:w-[39%] lg:w-[38%]`}
              >
                <div className="relative rounded-2xl border border-white/80 bg-white/90 px-2.5 py-2.5 shadow-[0_8px_25px_rgba(35,25,15,0.10)] backdrop-blur-md sm:rounded-[22px] sm:px-4 sm:py-3 lg:px-4 lg:py-3.5 dark:border-white/10 dark:bg-neutral-900/90">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F56627] text-[9px] font-bold text-white sm:h-7 sm:w-7 sm:text-[10px]">
                      {point.number}
                    </span>
                    <h3 className="text-xs font-bold leading-tight text-neutral-900 sm:text-base lg:text-lg dark:text-white">
                      {point.title}
                    </h3>
                  </div>

                  <p className="text-[11px] font-semibold leading-snug text-[#F56627] sm:text-sm">
                    {point.subtitle}
                  </p>

                  <p className="mt-1 hidden text-xs leading-relaxed text-neutral-600 sm:block lg:text-sm dark:text-neutral-300">
                    {point.description}
                  </p>


                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Compact editorial heading */}
        <div className="relative z-30 w-full text-left lg:col-span-5 lg:pl-0 lg:relative lg:-top-36 lg:translate-x-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#F56627] sm:text-xs">
            Your next adventure starts here
          </p>

          <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#151515] sm:text-5xl md:text-6xl xl:text-[72px] dark:text-white lg:text-[72px]">
            Built for people who
            <br />
            <span className="text-[#F56627]">
              never stop
              <br />
              exploring.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7 dark:text-neutral-400">
            Whether you're planning a trip or picking tonight's dinner — if you
            discover places through reels, Walmo is for you.
          </p>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
