import React from "react";
import { Metadata } from "next";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const metadata: Metadata = {
    title: "Our Fleet | Industrial HDD Models",
    description: "Explore the Nanodrill lineup. From the compact 3004 excavator attachment to the autonomous 5060TR electric crawler.",
};

const products = [
    {
        id: "3004",
        name: "Nanodrill 3004",
        image: "/images/nanodrill-3004.png",
        category: "Excavator Attachment"
    },
    {
        id: "4030",
        name: "Nanodrill 4030",
        image: "/images/nanodrill-4030.png",
        category: "Precise Compact"
    },
    {
        id: "5060",
        name: "Nanodrill 5060",
        image: "/images/nanodrill-5060.png",
        category: "Heavy Duty Slim"
    },
    {
        id: "5060tr",
        name: "Nanodrill 5060TR",
        image: "/images/nanodrill-5060.png",
        category: "Autonomous Electric"
    }
];

export default async function ProductsPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <main className="min-h-screen bg-background">
            <section className="pt-60 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mb-32">
                        <span className="text-primary font-heading tracking-[0.5em] text-[10px] uppercase mb-8 block">{dict.nav.models}</span>
                        <h1 className="text-6xl md:text-9xl font-black font-heading leading-tight mb-8 uppercase">
                            EXPLORE THE <br />
                            <span className="text-gradient">FLEET</span>
                        </h1>
                        <p className="text-muted text-xl leading-relaxed max-w-lg mb-12">
                            {dict.fleet.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {products.map((model, idx) => (
                            <ProductCard
                                key={model.id}
                                {...model}
                                lang={lang}
                                className={idx % 2 !== 0 ? "md:mt-24" : ""}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <QuoteSection />
        </main>
    );
}
