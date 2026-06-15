import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";

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
  // Structured Data (JSON-LD) for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Digitek Lab Solutions",
        "url": "https://www.digiteklab.com",
        "logo": "https://www.digiteklab.com/icon.png",
        "founder": {
          "@type": "Person",
          "name": "Ameer Muneer"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-770-8276542",
          "contactType": "customer service",
          "areaServed": ["AE", "IN"],
          "availableLanguage": "en"
        },
        "sameAs": [
          "https://www.linkedin.com/in/ameermuneer" 
        ]
      },
      {
        "@type": "WebSite",
        "name": "Digitek Lab Solutions",
        "url": "https://www.digiteklab.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.digiteklab.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}