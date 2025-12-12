import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digitek Lab Solutions | Global Procurement Consulting",
  description: "Strategic sourcing for Security Systems, IT Infrastructure, and MEP Projects in the UAE and India. Expert procurement consulting by Ameer Muneer.",
  keywords: ["Procurement Consultant", "MEP Sourcing", "Security Systems UAE", "IT Infrastructure India", "Digitek Lab", "Ameer Muneer", "Strategic Sourcing"],
  openGraph: {
    title: "Digitek Lab Solutions",
    description: "Global Sourcing & Procurement Consulting for Contractors.",
    url: "https://www.digiteklab.com",
    siteName: "Digitek Lab Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitek Lab Solutions",
    description: "Global Sourcing & Procurement Consulting for Contractors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}