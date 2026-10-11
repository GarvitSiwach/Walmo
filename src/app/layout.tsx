import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Walmo — Your saved reels, turned into places to explore",
  description: siteConfig.description,
  keywords: [
    "Walmo",
    "travel reels",
    "travel app",
    "trip planner",
    "saved places",
    "travel wishlist",
    "restaurant discovery",
  ],
  authors: [{ name: "Walmo" }],
  openGraph: {
    title: "Walmo — Your saved reels, turned into places to explore",
    description: siteConfig.description,
    type: "website",
    siteName: "Walmo",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F7" },
    { media: "(prefers-color-scheme: dark)", color: "#101010" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary transition-colors duration-200">
        <ThemeProvider><Navbar />{children}</ThemeProvider>
      </body>
    </html>
  );
}
