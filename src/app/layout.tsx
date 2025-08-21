import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
// In your app/layout.js (App Router) or pages/_app.js (Pages Router)
import { Providers } from '@/components/ThemeProvider'
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], 
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mirrorstandard.com"),
  title: "Mirrorstandard - Breaking News, Politics & Business Analysis",
  description: "Breaking news and expert analysis on politics, business, tech, health, science & sports. Stay ahead with daily global insights and trending stories.",
  keywords:
    "social media liability laws 2025, Brazil Supreme Court tech rulings, platform accountability regulations, Uber Waymo robotaxi launch Atlanta, self-driving cars in Georgia, Cooper Flagg NBA draft 2025, top NBA prospects after LeBron, youth mental health and smartphone addiction, screen time vs addictive app use, cervical cancer screening with self-sample kits, mailed HPV test effectiveness, political targeting case, Puerto Rico politics and legal system",
  openGraph: {
    title: "Mirrorstandard - Breaking News, Politics & Business Analysis",
    description: "Breaking news and expert analysis on politics, business, tech, health, science & sports. Stay ahead with daily global insights and trending stories.",
    url: "https://www.mirrorstandard.com",
    siteName: "Mirrorstandard",
    images: [
      {
        url: "https://www.mirrorstandard.com/images/mirrorstandard-logo.webp",
        width: 1200,
        height: 630,
        alt: "Mirrorstandard Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Breaking News, Politics & Business Analysis - Mirrorstandard",
    description: "Stay ahead with breaking news and expert analysis on politics, business, technology, health, science & sports.",
    images: "https://www.Mirrorstandard.com/images/mirrorstandard-logo.webp",
    site: '@Mirrorstandard'
  },

  alternates: {
    canonical: "https://www.mirrorstandard.com",
    languages: {
      en: "https://www.mirrorstandard.com",
      "x-default": "https://www.mirrorstandard.com",
    },
  },

  authors: [{ name: "mirrorstandard staff" }],

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="en" suppressHydrationWarning>
  <body
    className={`${geistSans?.variable ?? ''} ${geistMono?.variable ?? ''} ${oswald?.variable ?? ''} antialiased`}
    suppressHydrationWarning
  >
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  </body>
</html>

  );
}
