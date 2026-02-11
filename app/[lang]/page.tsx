import { Hero } from "@/components/sections/Hero";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { CTASection } from "@/components/sections/CTASection";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { TechnicalSection } from "@/components/sections/TechnicalSection";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const products = [
    { id: "3004", name: "Nanodrill 3004", image: "/images/nanodrill-3004.png" },
    { id: "4030", name: "Nanodrill 4030", image: "/images/nanodrill-4030.png" },
    { id: "5060", name: "Nanodrill 5060", image: "/images/nanodrill-5060.png" },
    { id: "5060tr", name: "Nanodrill 5060TR", image: "/images/nanodrill-5060.png" }
];

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <main className="min-h-screen">
            <Hero dict={dict} />

            <section className="py-20 md:py-32 lg:py-40 bg-background relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 lg:mb-32 gap-6 md:gap-8">
                        <div className="max-w-3xl">
                            <span className="text-primary font-heading tracking-[0.3em] uppercase text-xs mb-4 md:mb-6 block">{dict.fleet.badge}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl leading-none uppercase font-black">
                                {dict.fleet.title_main} <span className="text-primary italic">{dict.fleet.title_sub}</span>
                            </h2>
                        </div>
                        <p className="text-muted text-base lg:text-lg max-w-sm mb-0 md:mb-4">
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

            <TechnicalSection dict={dict} />
            <QuoteSection />
            <AboutBrief dict={dict} />
            <CTASection dict={dict} />
        </main>
    );
}
