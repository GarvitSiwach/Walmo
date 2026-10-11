import Link from "next/link";
import { Footer } from "@/components/footer";

const sections = [
  {
    title: "1. Eligibility",
    paragraphs: [
      "You must be at least 13 years old to use Walmo. By using the Service, you represent that you meet this requirement and that all information you provide is accurate and complete.",
    ],
  },
  {
    title: "2. Your account",
    paragraphs: [
      'You are responsible for all activity that occurs under your account. Keep your login credentials confidential and notify us immediately at [hello@walmo.app](mailto:hello@walmo.app) if you suspect unauthorized access. We reserve the right to suspend or terminate accounts that violate these Terms.',
    ],
  },
  {
    title: "3. Acceptable use",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Scrape, crawl, or systematically extract data from the Service.",
      "Reverse-engineer, decompile, or attempt to access the source code of Walmo.",
      "Upload, share, or process content that you do not have the right to use.",
      "Use the Service for unlawful, harmful, abusive, harassing, or fraudulent purposes.",
      "Interfere with or disrupt the integrity or performance of the Service or its infrastructure.",
      "Create multiple accounts to circumvent limits, bans, or restrictions.",
      "Use the Service to collect or harvest other users' data without consent.",
    ],
  },
  {
    title: "4. Your content",
    paragraphs: [
      "You retain ownership of all content you create in Walmo — your saved places, trips, notes, photos, and lists. By using the Service, you grant Walmo a limited, non-exclusive, royalty-free, worldwide license to host, store, display, and process your content solely as needed to operate and improve the Service.",
      "You are responsible for ensuring you have the rights to any content you add to Walmo, including anymages, videos, or place information derived from third-party platforms.",
    ],
  },
  {
    title: "5. Reel import",
    paragraphs: [
      "Walmo allows you to save places from Instagram, TikTok, and YouTube reels via the iOS Share Extension or by pasting a link inside the app. By using reel import, you:",
    ],
    bullets: [
      "Confirm that you are sharing content you are entitled to use and that you comply with the source platform's terms of service.",
      "Understand that Walmo processes the publicly available metadata and content of the reel URL you share to extract place information.",
      "Acknowledge that extracted place data is attributed to your Walmo account and stored per our Privacy Policy.",
    ],
    extra: [
      'Your use of the Instagram integration is also subject to [Instagram’s Terms of Use](https://help.instagram.com/581066165581870) and [Meta’s Privacy Policy](https://www.facebook.com/policy.php).',
    ],
  },
  {
    title: "6. AI-generated content",
    paragraphs: [
      "Walmo uses AI to extract place information from reels and generate travel itineraries. AI-generated content is provided for convenience and may contain errors or outdated information. You should independently verify opening hours, prices, addresses, and travel conditions before relying on any AI-generated suggestion. Walmo is not liable for decisions made based on AI-generated content.",
    ],
  },
  {
    title: "7. Subscriptions and billing",
    paragraphs: [
      "Walmo offers a free plan (Wanderer) and a paid subscription (Walmo Pro), plus optional one-time reel credit packs. Walmo Pro is billed monthly or annually and renews automatically at the end of each billing period unless you cancel. Credit packs are consumable purchases and do not renew.",
    ],
    bullets: [
      "**Cancellation** — you can cancel a Walmo Pro subscription anytime from your App Store or Google Play subscription settings. Cancellation takes effect at the end of the current billing period; you retain access to paifeatures until then.",
      "**Refunds** — subscription and credit-pack refunds are handled by Apple or Google per their policies. Contact [hello@walmo.app](mailto:hello@walmo.app) if you believe you were charged in error.",
      "**Price changes** — we will give you at least 30 days' notice before increasing the price of your current plan.",
      "**Free tier** — Walmo offers a permanent free tier (Wanderer). Walmo Pro and reel credit packs are available as in-app purchases through the App Store and Google Play.",
    ],
  },
  {
    title: "8. Intellectual property",
    paragraphs: [
      "All Walmo software, designs, logos, and brand assets are the property of Walmo and protected by applicable intellectual property laws. You may not use our name, logo, or branding without prior written permission.",
    ],
  },
  {
    title: "9. Third-party services",
    paragraphs: [
      "The Service integrates with third-party platforms (Instagram, TikTok, Google Maps, etc.). We are not responsible for tarty content, their terms, or their availability. Links to third-party sites do not imply endorsement.",
    ],
  },
  {
    title: "10. Disclaimers",
    paragraphs: [
      'Walmo is provided "as is" and "as available" without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Service will be uninterrupted, error-free, or free of harmful components.',
    ],
  },
  {
    title: "11. Limitation of liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Walmo's total liability for any claim arising out of or relating to these Terms or the Service is limited to the greater of (a) the amount you paid us in the 12 months prior to the claim or (b) $10 USD. We are not liable for indirect, incidental, special, consequential, or punitive damages.",
    ],
  },
  {
    title: "12. Governing law",
    paragraphs: [
      "These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes shall be resolved in the courts of India.",
    ],
  },
  {
    title: "13. Changes to these Terms",
    paragraphs: [
      "We may update these Terms from time to time. We will notify you of material changes via email or an in-app notice at least 14 days before they take effect. Continued use of the Service after that date constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "14. Contact",
    paragraphs: [
      "Questions about these Terms? Email [hello@walmo.app](mailto:hello@walmo.app).",
    ],
  },
];

function renderText(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

    if (link) {
      const [, label, href] = link;

      if (href.startsWith("mailto:")) {
        return (
          <a
            key={index}
            href={href}
            className="text-primary underline underline-offset-4 transition-opacity hover:opacity-75"
          >
            {label}
          </a>
        );
      }

      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 transition-opacity hover:opacity-75"
        >
          {label}
        </a>
      );
    }

    const bold = part.match(/^\*\*(.+)\*\*$/);

    if (bold) {
      return <strong key={index}>{bold[1]}</strong>;
    }

    return part;
  });
}

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <article className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <header className="mb-12 sm:mb-16">
            <Link
              href="/"
              className="mb-6 inline-flex text-sm font-medium text-primary transition-opacity hover:opacity-75"
            >
              Legal
            </Link>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>

            <p className="mt-5 text-sm text-muted-foreground">
              Last updated: July 2026
            </p>
          </header>

          <div className="space-y-10 sm:space-y-12">
            <p className="text-base leading-7 text-muted-foreground">
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of Walmo, including our mobile app, website, and any
              related services (collectively, the &quot;Service&quot;),
              operated by Walmo (&quot;we&quot;, &quot;us&quot;). By creating
              an account or using the Service in any way, you agree to be bound
              by these Terms. If you do not agree, do not use the Service.
            </p>

            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph, index) => (
                  <p
                    key={`${section.title}-paragraph-${index}`}
                    className="text-base leading-7 text-muted-foreground"
                  >
                    {renderText(paragraph)}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc space-y-3 pl-6 text-base leading-7 text-muted-foreground marker:text-primary">
                    {section.bullets.map((bullet, index) => (
                      <li key={`${section.title}-bullet-${index}`}>
                        {renderText(bullet)}
                      </li>
                    ))}
                  </ul>
                )}

                {section.extra?.map((paragraph, index) => (
                  <p
                    key={`${section.title}-extra-${index}`}
                    className="text-base leading-7 text-muted-foreground"
                  >
                    {renderText(paragraph)}
                  </p>
                ))}
              </section>
            ))}
          </div>

        </article>
      </main>

      <Footer />
    </>
  );
}
