import type { Metadata } from "next";
import { Poppins, Orbitron } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nanodrill | Professional HDD Solutions",
  description: "Advanced Horizontal Directional Drilling rigs for urban infrastructure and utility fiber deployment.",
  metadataBase: new URL("https://nanodrill-website.vercel.app"),
  keywords: ["Nanodrill", "Compact HDD", "Horizontal Directional Drilling", "Drilling Machinery", "Kormee Machinery", "Compacte HDD oplossingen", "Boormachines"],
  openGraph: {
    title: "Nanodrill | Compact HDD Solutions",
    description: "Innovative compact HDD solutions for precision drilling. Explore our Nanodrill models.",
    url: "https://nanodrill.com",
    siteName: "Nanodrill",
    images: [
      {
        url: "/og-image.png", // We can generate this later or use a brand image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

import { LeadFlow } from "@/components/ui/LeadFlow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${orbitron.variable} antialiased`}
      >
        <LeadFlow />
        {children}
      </body>
    </html>
  );
}
