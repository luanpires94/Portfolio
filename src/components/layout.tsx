import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const _geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Pires | Desenvolvedor Full Stack",
  description:
    "Portfólio de Luan Pires, Desenvolvedor Full Stack com experiência em React.js, Next.js, TypeScript, Node.js, APIs REST, MongoDB e AWS.",
  keywords: [
    "React",
    "TypeScript",
    "Next.js",
    "Full Stack Developer",
    "Web Development",
    "Portugal",
  ],
  authors: [{ name: "Luan Pires" }],
  creator: "Luan Pires",
  openGraph: {
    type: "website",
    url: "https://luanpires.com",
    title: "Luan Pires | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack com experiência em React.js, Next.js, TypeScript e Node.js.",
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
              jobTitle: "Full Stack Developer",
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
