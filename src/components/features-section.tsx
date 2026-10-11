import Image from "next/image";
import {
  ArrowRight,
  Bookmark,
  Compass,
  FileText,
  Info,
  Map,
  MapPin,
  Pencil,
  Plus,
  Sparkle,
  Star,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Save from any reel",
    description:
      "Share from Instagram, TikTok or YouTube. AI picks out restaurants, cafés, and spots automatically.",
    icon: Bookmark,
    art: "social" as const,
  },
  {
    title: "Your places on a map",
    description:
      "Every save pinned on your personal map. Filter by city, cuisine, vibe, or trip.",
    icon: Map,
    art: "map" as const,
  },
  {
    title: "AI trip itineraries",
    description:
      "Tell Walmo your dates and vibe — get a day-by-day plan with meal stops, walking routes, and your saved spots.",
    icon: Sparkle,
    art: "trip" as const,
  },
  {
    title: "Discover new places",
    description:
      "Curated city guides built from what real explorers save. Find the restaurant worth the detour, not the tourist trap.",
    icon: Compass,
    art: "discover" as const,
  },
  {
    title: "Deep-dive any place",
    description:
      "Hours, ratings, AI summary, and your personal notes — whether it's a café or a viewpoint.",
    icon: Info,
    art: "details" as const,
  },
  {
    title: "Explore with friends",
    description:
      "Invite friends to a trip, vote on restaurants and spots, and build the perfect day out together.",
    icon: Users,
    art: "friends" as const,
  },
];

function ContourLines() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full text-[#F56627]/[0.11] dark:text-[#FF702F]/[0.16]"
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M-80 220C40 140 180 120 280 210C400 320 520 360 620 280C760 170 900 210 1020 340"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M-40 280C80 190 220 170 330 260C450 370 560 410 680 320C820 210 960 250 1100 390"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M-20 340C120 250 250 230 360 310C480 420 600 450 730 360C870 250 1020 290 1180 430"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path
        d="M1220 80C1320 160 1480 140 1560 60"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M1180 140C1290 230 1460 210 1580 90"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M1160 210C1280 300 1470 280 1600 150"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path
        d="M-60 620C80 700 240 680 340 560C460 420 620 400 760 510C900 620 1080 600 1240 470"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M1240 760C1340 680 1480 700 1580 800"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

function FeatureArt({ type }: { type: (typeof features)[number]["art"] }) {
  if (type === "social") {
    return (
      <div className="pointer-events-none absolute right-2 top-8 h-[170px] w-[42%] sm:right-4 sm:top-9">
        <div className="absolute right-1 top-0 rotate-[-16deg] rounded-[18px] bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-2.5 text-white shadow-[0_12px_24px_rgba(221,42,123,0.28)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-0 top-[78px] rotate-[14deg] rounded-[18px] bg-black p-2.5 text-white shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16.5 2c.06 1.4.58 2.82 1.62 3.86 1.04 1.03 2.47 1.53 3.88 1.58v3.15c-1.32-.05-2.64-.38-3.84-.94a8.2 8.2 0 0 1-1.66-.96v7.13c0 3.07-2.5 5.18-5.42 5.18S5.66 19.9 5.66 16.82s2.5-5.18 5.42-5.18c.46 0 .9.05 1.32.16v3.28a2.2 2.2 0 0 0-1.2-.34c-1.5 0-2.5 1.08-2.5 2.4 0 1.33 1 2.42 2.5 2.42 1.48 0 2.46-1.07 2.46-2.4V2h2.84Z" />
          </svg>
        </div>
        <div className="absolute right-[58px] top-[96px] -rotate-[14deg] rounded-[18px] bg-[#FF0000] p-2.5 text-white shadow-[0_12px_24px_rgba(255,0,0,0.25)]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 1.9 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.1 12a31 31 0 0 0-.5-4.8ZM10 15.1V8.9l5.6 3.1L10 15.1Z" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === "map") {
    return (
      <div className="pointer-events-none absolute inset-y-4 right-0 w-[44%] overflow-hidden rounded-l-[42%]">
        <svg viewBox="0 0 220 240" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="mapLand" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D7E9B8" />
              <stop offset="55%" stopColor="#B7D48A" />
              <stop offset="100%" stopColor="#8EBF7A" />
            </linearGradient>
            <linearGradient id="mapWater" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C9E7F2" />
              <stop offset="100%" stopColor="#7EC8E3" />
            </linearGradient>
          </defs>
          <rect width="220" height="240" fill="url(#mapWater)" />
          <path d="M0 40C40 20 70 50 90 90C110 140 40 170 0 150V40Z" fill="url(#mapLand)" />
          <path d="M70 0C120 30 150 10 220 40V160C170 140 140 170 90 130C60 108 80 40 70 0Z" fill="url(#mapLand)" />
          <path d="M-10 210C40 170 90 190 130 230H-10V210Z" fill="url(#mapLand)" opacity="0.85" />
          <path d="M20 200C70 150 110 120 170 70" stroke="#F56627" strokeWidth="2.5" strokeDasharray="5 6" fill="none" />
          {[[58, 78], [118, 128], [168, 62], [92, 176]].map(([x, y], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <path d="M0 16C-4 8-11 2-11-6A11 11 0 1 1 11-6C11 2 4 8 0 16Z" fill="#F56627" />
              <circle cy="-6" r="3.5" fill="white" />
            </g>
          ))}
        </svg>
        <div className="absolute right-6 top-5 h-14 w-16 overflow-hidden rounded-xl border-[3px] border-white shadow-md">
          <Image
            src="/assets/places/hagshu.jpg"
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  if (type === "trip") {
    const days = [
      { src: "/assets/places/pin-bhaba.jpg", day: "Day 1", className: "left-0 top-6 -rotate-[9deg]" },
      { src: "/assets/places/muling.jpg", day: "Day 2", className: "left-[42px] top-2 z-10 rotate-[2deg]" },
      { src: "/assets/places/gartang-gali.jpg", day: "Day 3", className: "left-[84px] top-7 rotate-[11deg]" },
    ];
    return (
      <div className="pointer-events-none absolute right-2 top-8 h-[150px] w-[160px] sm:right-3 sm:top-7">
        {days.map((card) => (
          <div
            key={card.day}
            className={`absolute w-[72px] rounded-2xl border-[3px] border-white bg-white p-1 shadow-[0_10px_22px_rgba(30,20,10,0.12)] ${card.className}`}
          >
            <div className="relative h-[64px] overflow-hidden rounded-xl">
              <Image src={card.src} alt="" fill sizes="72px" className="object-cover" />
            </div>
            <p className="mt-1 px-0.5 text-[9px] font-semibold text-neutral-700">
              {card.day}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (type === "discover") {
    return (
      <div className="pointer-events-none absolute right-2 top-8 h-44 w-[44%] sm:right-4">
        <svg
          className="absolute left-0 top-2 h-8 w-8 text-[#F56627]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.5 12.2 21 3.8l-4.2 17.2-4.6-6.4-5.2 3.2 1.3-7.6-5.8 2Z" />
        </svg>
        <div className="absolute right-0 top-1 h-[118px] w-[92px] rotate-[11deg] overflow-hidden rounded-2xl border-[3px] border-white shadow-lg">
          <Image src="/assets/places/pin-bhaba.jpg" alt="" fill sizes="92px" className="object-cover" />
        </div>
        <div className="absolute right-10 top-12 h-[118px] w-[92px] -rotate-[12deg] overflow-hidden rounded-2xl border-[3px] border-white shadow-xl">
          <Image src="/assets/places/gartang-gali.jpg" alt="" fill sizes="92px" className="object-cover" />
        </div>
      </div>
    );
  }

  if (type === "details") {
    return (
      <div className="pointer-events-none absolute right-2 top-12 w-[40%] sm:right-3 sm:top-14">
        <div className="relative h-[92px] overflow-hidden rounded-2xl shadow-md">
          <Image src="/assets/places/muling.jpg" alt="" fill sizes="180px" className="object-cover" />
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-neutral-900 shadow">
            4.8
            <Star size={12} fill="#F56627" className="text-[#F56627]" />
          </div>
        </div>
        <div className="relative -mt-4 ml-2 rounded-xl bg-white p-2.5 shadow-[0_10px_24px_rgba(30,20,10,0.12)] dark:bg-neutral-900">
          {[
            { label: "AI summary", icon: FileText },
            { label: "Reviews", icon: Star },
            { label: "Your notes", icon: Pencil },
          ].map((row) => {
            const Icon = row.icon;
            return (
              <div
                key={row.label}
                className="flex items-center gap-2 py-1.5 text-[11px] text-neutral-600 dark:text-neutral-300"
              >
                <Icon size={13} className="text-[#F56627]" />
                {row.label}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-y-4 right-2 w-[44%] sm:right-4">
      <svg viewBox="0 0 180 210" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M18 28C70 8 108 70 132 92C156 114 148 160 92 196"
          fill="none"
          stroke="#F56627"
          strokeWidth="2"
          strokeDasharray="5 6"
        />
      </svg>
      <div className="absolute right-8 top-8 flex">
        {["#C9844A", "#6B7280", "#9A5A3A"].map((color, i) => (
          <div
            key={color}
            className="-ml-3 h-11 w-11 rounded-full border-[3px] border-white shadow-md"
            style={{ background: color, zIndex: 3 - i }}
          />
        ))}
      </div>
      <div className="absolute right-0 top-[72px] flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-[#F56627] text-white shadow-lg">
        <Plus size={22} strokeWidth={2.4} />
      </div>
      <MapPin
        className="absolute bottom-6 left-6 text-[#F56627]"
        size={34}
        fill="#F56627"
        stroke="white"
      />
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative isolate scroll-mt-28 overflow-hidden bg-transparent px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <ContourLines />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <header className="mx-auto mb-10 max-w-[760px] text-center sm:mb-14">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#F56627] sm:text-xs">
            Features
          </p>
          <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#151515] sm:text-5xl md:text-6xl lg:text-[64px] dark:text-white">
            Everything you save,
            <br />
            <span className="text-[#F56627]">ready to explore.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-sm leading-6 text-neutral-500 sm:text-lg sm:leading-8 dark:text-neutral-400">
            Walmo is for travelers and explorers who collect restaurants, cafés, and hidden
            spots — and want one place to find them again.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group relative flex min-h-[250px] overflow-hidden rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_8px_30px_rgba(45,31,20,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(45,31,20,0.08)] sm:min-h-[270px] sm:p-7 dark:border-white/10 dark:bg-neutral-900/70 dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="relative z-10 flex w-[62%] flex-col items-start pr-2">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#FFF0E5] text-[#F56627] dark:bg-[#38241B]">
                    <Icon size={22} strokeWidth={1.9} />
                  </div>
                  <h3 className="font-serif text-[22px] font-bold leading-tight tracking-[-0.03em] text-[#151515] sm:text-[24px] dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-neutral-500 sm:text-sm dark:text-neutral-400">
                    {feature.description}
                  </p>
                  <a
                    href="#the-app"
                    aria-label={`Learn more about ${feature.title}`}
                    className="mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0E5] text-[#F56627] transition-colors duration-200 hover:bg-[#F56627] hover:text-white dark:bg-[#38241B]"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
                <FeatureArt type={feature.art} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
