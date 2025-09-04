import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Depfin Finance - Get Loans from R30,000 to R10 Million",
  description: "Get affordable loans from R30,000 to R10 Million with 24-hour approval. Simple online application, 6% interest rate. Apply now at Depfin Finance.",
  keywords: "loans, finance, personal loans, business loans, South Africa, quick approval",
  authors: [{ name: "Depfin Finance" }],
  robots: "index, follow",
  openGraph: {
    title: "Depfin Finance - Quick Loan Approval",
    description: "Get loans from R30,000 to R10 Million in minutes",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
