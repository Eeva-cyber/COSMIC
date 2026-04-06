import type { Metadata } from "next";
import { Syne, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COSMIC — Makeup. In Seconds.",
  description:
    "A single dissolvable mask. Your entire makeup look. Two minutes. No skill required. Join the waitlist for the future of beauty.",
  keywords: [
    "COSMIC",
    "makeup mask",
    "instant makeup",
    "beauty technology",
    "nanofiber",
    "dissolving mask",
  ],
  openGraph: {
    title: "COSMIC — Makeup. In Seconds.",
    description:
      "A single dissolvable mask replaces your entire makeup routine in under two minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
