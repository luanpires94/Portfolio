import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const _geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Pires | Frontend Developer Pleno",
  description:
    "Portfolio profissional de Luan Pires - Desenvolvedor Frontend especializado em React, TypeScript e Next.js. Experiência com fintech e projetos escaláveis.",
  keywords: [
    "React",
    "TypeScript",
    "Next.js",
    "Frontend Developer",
    "Web Development",
    "Portugal",
  ],
  authors: [{ name: "Luan Pires" }],
  creator: "Luan Pires",
  openGraph: {
    type: "website",
    url: "https://luanpires.com",
    title: "Luan Pires | Frontend Developer",
    description:
      "Desenvolvedor Frontend com experiência em React, TypeScript e Next.js",
    siteName: "Luan Pires Portfolio",
    images: [
      {
        url: "https://luanpires.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luan Pires Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@luanpires",
    creator: "@luanpires",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  generator: "v0.app",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://luanpires.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Luan Pires",
              url: "https://luanpires.com",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/luanpires",
                "https://linkedin.com/in/luanpires",
              ],
            }),
          }}
        />
      </head>
      <body className={`${_geistSans.className} dark`}>{children}</body>
    </html>
  );
}
