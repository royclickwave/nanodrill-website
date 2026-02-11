import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LeadFlow } from "@/components/ui/LeadFlow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";

const nasalization = localFont({
    src: "../../public/fonts/nasalization.otf",
    variable: "--font-nasalization",
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Nanodrill | Professional HDD Solutions",
    description: "Advanced Horizontal Directional Drilling rigs for urban infrastructure and utility fiber deployment.",
    metadataBase: new URL("https://nanodrill-website.vercel.app"),
};

export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "nl" }, { lang: "de" }];
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <html lang={lang} className="scroll-smooth">
            <body className={`${poppins.variable} ${nasalization.variable} antialiased text-white bg-background overflow-x-hidden`}>
                <SmoothScrollProvider>
                    <LeadFlow />
                    <Navbar lang={lang} dict={dict} />
                    {children}
                    <Footer lang={lang} dict={dict} />
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
