import { Footer } from "@/components/footer";
import Link from "next/link";

const sections = [
  {
    title: "1. Information we collect",
    intro: "We collect the following categories of information:",
    items: [
      "Account information — your name, email address, and profile photo when you create an account or sign in with Google or Apple.",
      "Content you create — saved places, trips, notes, lists, photos, and any other content you add to Walmo.",
      "Reel and video content — when you share a reel or video link to Walmo (via the iOS Share Extension or by pasting a link), we process the video URL and publicly available metadata (caption, location tags, mentioned places, thumbnail) to extract travel information. We do not store raw video files.",
      "Location data — if you grant permission, we collect your device's preapproximate location when you use features such as Near me, the map, or the location picker. We also process location coordinates or named places embedded in reels or content you share.",
      "Photos you upload — if you participate in the Explorer program or upload place photos, we store the images you submit and related metadata (place, timestamp, device information) to review, display, and improve place content.",
      "Usage data — device type, OS version, app version, and interaction events (e.g. which screens you visit and features you use). We associate a pseudonymous internal identifier with this data to understand usage patterns, but this identifier cannot be used to determine your name, email, or identity without access to our internal database.",
      "Crash and performance data — if the app crashes, we automatically collect diagnostic information including device model, OS version, stack traces, and app state at the time of the crash. This helps us identify and fix bugs. Crash reports aociated with your pseudonymous internal identifier but do not contain your personal details.",
      "Communications — if you contact us via email or support channels, we retain those messages to respond and improve the Service."
    ]
  },
  {
    title: "2. How we use your information",
    items: [
      "To create and maintain your account and sync data across your devices.",
      "To process reels and video content you share, extract place information, and populate your saved places and maps.",
      "To generate AI-powered travel itineraries from your saves using third-party AI providers.",
      "To send you product updates, security notices, account-related emails, and occasional marketing about Walmo.",
      "To improve the Service through aggregate, anonymized usage analysis.",
      "To comply with legal obligations and enforce our Terms of Service."
    ],
    after: "We never sell your personal data to third parties."
  },
  {
    title: "3. Reel import and third-party platform data",
    iro: "When you share a reel to Walmo via the iOS Share Extension or by pasting a link:",
    items: [
      "We process the reel URL and publicly available metadata (caption, location tags, mentioned places, thumbnail) to extract travel information. We do not store raw video files.",
      "We do not access your private Instagram, TikTok, or YouTube account data, messages, or followers.",
      "Extracted place data is stored in your Walmo account and private by default."
    ]
  },
  {
    title: "4. Third-party service providers",
    intro: "We share data with carefully selected service providers who help us operate Walmo. All providers are bound by data processing agreements:",
    items: [
      "Database & hosting — Supabase (PostgreSQL), Railway (application hosting)",
      "AI analysis — Google Gemini (place extraction and itinerary generation)",
      "Maps & place data — Google Maps Platform (place search, details, and map data)",
      "Reel processing — Apify (downloading publicly availa metadata and media for analysis)",
      "Photo storage — Cloudflare R2 (Explorer and user-uploaded place photos)",
      "Email — Resend (transactional emails)",
      "Analytics & crash reporting — Firebase Analytics and Firebase Crashlytics (Google). We send a pseudonymous internal identifier, screen views, feature usage events, and crash diagnostics. We do not send your name, email, or personal content to Firebase.",
      "Sign-in — Google and Apple (if you choose to sign in with those providers; governed by their respective privacy policies)",
      "Payments — Apple App Store and Google Play (subscription and in-app purchase processing)"
    ],
    after: "We do not allow providers to use your data for their own purposes."
  },
  {
    title: "5. Data retention",
    paragraphs: [
      "We retain your account data for as long as your account is active. If you delete your account, we remove your personal data within 30 days, except where we are legally required to retain it. Aggregated, anata may be retained indefinitely."
    ]
  },
  {
    title: "6. Your rights",
    intro: "Depending on your location, you may have the right to:",
    items: [
      "Access the personal data we hold about you.",
      "Correct inaccurate data.",
      'Request deletion of your data ("right to be forgotten").',
      "Export your data in a portable format.",
      "Object to or restrict certain processing."
    ],
    after: "To exercise any of these rights, email privacy@walmo.app. We will respond within 30 days. You can also export or delete your data directly from app settings."
  },
  {
    title: "7. Children",
    paragraphs: [
      "Walmo is not intended for users under the age of 13. We do not knowingly collect personal data from children under 13. If we learn we have done so, we will delete it promptly."
    ]
  },
  {
    title: "8. Security",
    paragraphs: [
      "We use industry-standard security measures including encryption in transit (TLS) and at rest, access controls, and regular security reviews. No system is 100% secure; please use a strong, unique password for email sign-in."
    ]
  },
  {
    title: "9. International transfers",
    paragraphs: [
      "Walmo is operated from India. Your data may be processed by providers in other countries (including the United States). By using the Service, you consent to such transfers. Where required, we rely on Standard Contractual Clauses or equivalent safeguards."
    ]
  },
  {
    title: "10. Changes to this policy",
    paragraphs: [
      "We will notify you of material changes via email or an in-app notice at least 14 days before they take effect. Continued use of Walmo after that date constitutes acceptance of the updated policy."
    ]
  },
  {
    title: "11. Contact",
    paragraphs: [
      "Questions or concerns? Email privacy@walmo.app. We aim to respond within 5 business days."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-6 pb-24 pt-16 sm:px-10">
        <Link href="/" className="text-sm text-primary transition hover:opacity-70">
          ← Back to home
        </Link>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Legal
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-foreground/60">
          Last updated: July 2026
        </p>

        <p className="mt-8 text-base leading-8 text-foreground/80">
          This Privacy Policy explains how Walmo ("we", "us", "our") collects,
          uses, and shares information when you use our mobile app, website, and
          related services (collectively, the "Service"). By using Walmo, you
          agree to the practices described here. If you do not agree, please
          stop using the Service.
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-28">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {section.title}
              </h2>

              {section.intro && (
                <p className="mt-4 leading-8 text-foreground/80">
                  {section.intro}
                </p>
              )}

              {section.items && (
                <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-foreground/80">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.includes("Questions or concerns?") ? (
                  <>Questions or concerns? Email <a href="mailto:privacy@walmo.app" className="text-primary underline underline-offset-4">privacy@walmo.app</a>. We aim to respond within 5 business days.</>
                ) : paragraph} className="mt-4 leading-8 text-foreground/80">
                  {paragraph.includes("Questions or concerns?") ? (
                  <>Questions or concerns? Email <a href="mailto:privacy@walmo.app" className="text-primary underline underline-offset-4">privacy@walmo.app</a>. We aim to respond within 5 business days.</>
                ) : paragraph}
                </p>
              ))}

              {section.after && (
                <p className="mt-4 leading-8 text-foreground/80">
                  {section.after.split("privacy@walmo.app").map((part, i, all) => (
                    <span key={i}>
                      {part}
                      {i < all.length - 1 && (
                        <a
                          href="mailto:privacy@walmo.app"
                          className="text-primary underline underline-offset-4"
                        >
                          privacy@walmo.app
                        </a>
                      )}
                    </span>
                  ))}
                </p>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
    <Footer />
    </>
  );
}
