import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Award, Globe, Users } from "lucide-react";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const metadata: Metadata = {
    title: "About Us | Nanodrill Heritage & Engineering",
    description: "Discover the story of Nanodrill and Kormee Machinery. Dutch engineering at its peak since 2011.",
};

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <main className="min-h-screen bg-background">
            <section className="pt-60 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-primary font-heading tracking-[0.5em] text-[10px] uppercase mb-8 block">{dict.about.badge}</span>
                            <h1 className="text-6xl md:text-8xl font-black font-heading leading-tight mb-10 uppercase">
                                {dict.about.title_main} <br />
                                <span className="text-gradient">{dict.about.title_sub}</span> <br />
                                {dict.about.title_end}
                            </h1>
                            <p className="text-muted text-xl leading-relaxed mb-12">
                                {dict.about.description}
                            </p>

                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <p className="text-4xl font-black text-white mb-2">{dict.about.stats_num}</p>
                                    <p className="text-xs text-muted font-heading uppercase tracking-widest whitespace-pre-line">{dict.about.stats_text}</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-white mb-2">24/7</p>
                                    <p className="text-xs text-muted font-heading uppercase tracking-widest">Global Support</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[600px] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
                            <Image
                                src="/images/about-image.png"
                                alt="Nanodrill Workshop"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-[#060608]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Award, title: "Dutch Quality", desc: "Every component is designed, tested, and assembled in Barneveld, Netherlands." },
                            { icon: Globe, title: "Global Reach", desc: "Our machines operate in over 20 countries, from tight European cities to rocky terrains." },
                            { icon: Users, title: "Partner-Led", desc: "We work closely with contractors to ensure our machines solve real-world site problems." }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-12 rounded-[3rem] border-white/5">
                                <item.icon className="text-primary mb-8" size={40} />
                                <h3 className="text-2xl font-heading mb-4 uppercase">{item.title}</h3>
                                <p className="text-muted leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
