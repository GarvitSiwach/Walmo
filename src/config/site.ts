/**
 * Centralized site configuration and external URLs for Walmo Website
 */

export const siteConfig = {
  name: "Walmo",
  tagline: "Turn saved reels into places to explore",
  description:
    "For travelers and explorers hunting their next restaurant, café, or hidden spot — share any reel and Walmo extracts every place, pins it to your map, and helps you actually go.",

  // Navigation Links (will anchor to upcoming sections)
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "The app", href: "https://walmo.app/app" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Guides", href: "https://walmo.app/guides" },
    { label: "About", href: "https://walmo.app/about" },
    { label: "Support", href: "https://walmo.app/support" },
  ],

  // CTAs & External URLs
  // NOTE: If live App Store or Play Store URLs are not provided, these configurable defaults are used.
  links: {
    // Configurable iOS App Store link (placeholder until live production URL is supplied)
    appStore: "https://apps.apple.com/app/walmo-trip-planner-map/id6771807304",
    // Configurable Android Beta link (placeholder until live beta program URL is supplied)
    androidBeta: "https://forms.gle/walmo-android-beta",
  },

  // Exact Copy Requirements (Phase 2)
  heroCopy: {
    announcement: "Now on the App Store",
    headline: "Your saved reels, turned into places to explore.",
    description:
      "For travelers and explorers hunting their next restaurant, café, or hidden spot — share any reel and Walmo extracts every place, pins it to your map, and helps you actually go.",
    primaryCta: "Download on the App Store",
    secondaryCta: "Join the Android beta",
    availability: "Free on iOS · Android coming soon",
  },

  // Asset configurations
  assets: {
    // Official Logo
    logo: "/assets/walmo-logo.png",

    // Primary Cinematic Hero Visual (Car emerging from iPhone screen)
    heroImage: "/assets/walmo-hero.png",

    // Genuine App Screenshots:
    // When real screenshots are added to public/assets/, update these paths:
    wishlistScreenshot: "/assets/screenshots/wishlist.png",

    // Sample verified travel spot thumbnail for modular cards
    cardDestinationImage:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
  },
};
