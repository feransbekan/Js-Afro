import type { Metadata } from "next";
import "./globals.css";
import { ClientNavigation } from "@/components/layout/ClientNavigation";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MinimalFloatingIcons } from "@/components/ui/MinimalFloatingIcons";

export const metadata: Metadata = {
  title: "JS Afro Trading - International Trading & Business Solutions",
  description: "Professional international trading company providing e-commerce, procurement consulting, medical facilitation, logistics, and advertising services. Trusted business partner worldwide.",
  keywords: "international trading, e-commerce, procurement consulting, medical facilitation, logistics, freight forwarding, advertising, business solutions",
  authors: [{ name: "JS Afro Trading" }],
  creator: "JS Afro Trading",
  publisher: "JS Afro Trading",
  robots: "index, follow",
  metadataBase: new URL('https://jsafrotrading.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jsafrotrading.com",
    siteName: "JS Afro Trading",
    title: "JS Afro Trading - International Trading & Business Solutions",
    description: "Professional international trading company providing comprehensive business solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JS Afro Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JS Afro Trading",
    description: "International Trading & Business Solutions",
    images: ["/og-image.jpg"],
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          {/* Minimal floating icons across all pages */}
          <MinimalFloatingIcons />
          
          <ClientNavigation />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
