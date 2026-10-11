import { Footer } from "@/components/footer";

function PolicyLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline underline-offset-4 transition-opacity hover:opacity-75"
    >
      {children}
    </a>
  );
}

export default function CookiePolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <article className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <header className="mb-12 sm:mb-16">
            <p className="mb-6 text-sm font-medium text-primary">Legal</p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Cookie Policy
            </h1>

            <p className="mt-5 text-sm text-muted-foreground">
              Last updated: April 30, 2026
            </p>
          </header>

          <div className="space-y-10 sm:space-y-12">
            <p className="text-base leading-7 text-muted-foreground">
              Walmo uses cookies and similar technologies on our website to
              keep you signed in, remember preferences, and understand how the
              site is used.
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Types of cookies we use
              </h2>

              <ul className="list-disc space-y-3 pl-6 text-base leading-7 text-muted-foreground marker:text-primary">
                <li>
                  <strong className="text-foreground">Essential</strong> —
                  required for the site to function (auth, security).
                </li>
                <li>
                  <strong className="text-foreground">Preference</strong> —
                  remember your settings (e.g. theme).
                </li>
                <li>
                  <strong className="text-foreground">Analytics</strong> —
                  anonymized usage data to improve the product.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Managing cookies
              </h2>

              <p className="text-base leading-7 text-muted-foreground">
                You can clear or block cookies in your browser settings.
                Disabling essential cookies may break parts of the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Third parties
              </h2>

              <p className="text-base leading-7 text-muted-foreground">             We use <strong className="text-foreground">Google Analytics 4</strong>{" "}
                to measure website traffic (page views, device, and approximate
                location). Google may set its own cookies. See{" "}
                <PolicyLink href="https://policies.google.com/privacy">
                  Google&apos;s Privacy Policy
                </PolicyLink>
                . We may also use trusted services for error monitoring that set
                their own cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Contact
              </h2>

              <p className="text-base leading-7 text-muted-foreground">
                Questions about cookies? Email{" "}
                <a
                  href="mailto:privacy@walmo.app"
                  className="text-primary underline underline-offset-4 transition-opacity hover:opacity-75"
                >
                  privacy@walmo.app
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
