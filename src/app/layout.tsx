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
  title: "Mirrorstandard News – Latest World Updates, Politics, Business & Expert Insights",
  description: "Mirrorstandard brings you real-time headlines and authoritative coverage across politics, business, world news, science, health, education, sports, and technology. Explore investigative reporting, global perspectives, and expert commentary that help you stay informed and ahead in a rapidly changing world.",
  keywords: "2025 social media regulation, Brazil Supreme Court tech decisions, global platform accountability, Uber Waymo robotaxi Atlanta launch, Georgia autonomous vehicles, Cooper Flagg 2025 NBA draft, next generation NBA stars, smartphone addiction youth impact, screen time and mental health, home HPV test cervical cancer screening, self-sample cancer detection kits, Puerto Rico political case targeting, legal reforms in Puerto Rico",
  openGraph: {
    title: "Mirrorstandard – Latest News, Politics, Business & Global Insights",
    description: "Mirrorstandard delivers breaking news and expert insights on politics, business, tech, health, science, and sports. Stay updated with global analysis and top stories every day.",
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
    title: "Mirrorstandard – Breaking News, Politics, Business & World Analysis",
    description: "Get the latest headlines and in-depth analysis on politics, business, technology, health, science, and sports with Mirrorstandard’s trusted reporting.",
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
