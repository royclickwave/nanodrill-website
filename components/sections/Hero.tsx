"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";
import { triggerLeadModal } from "@/lib/modal-utils";

export const Hero = ({ dict }: { dict: any }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030305]">
            <div className="absolute inset-0 z-0 opacity-40">
                <Image src="/images/hero-bg.png" alt="Nanodrill HDD" fill sizes="100vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
            </div>

            <div className="hero-glow top-1/4 -left-20" />
            <div className="hero-glow bottom-1/4 -right-20 !bg-white/5" />

            <div className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.03] select-none">
                <div className="animate-marquee">
                    <span className="text-[25vw] font-black font-heading leading-none px-10 whitespace-nowrap">NANODRILL PRECISION COMPACT POWER </span>
                    <span className="text-[25vw] font-black font-heading leading-none px-10 whitespace-nowrap">NANODRILL PRECISION COMPACT POWER </span>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full min-h-[80vh]">
                <motion.div style={{ opacity }} className="flex flex-col gap-10 lg:col-span-7 relative z-20">
                    <div className="overflow-visible">
                        <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-primary font-heading uppercase tracking-[0.5em] text-[10px] mb-4 block">
                            {dict.hero.badge}
                        </motion.span>
                        <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.33, 1, 0.68, 1] }} className="text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.8] font-black tracking-tighter uppercase">
                            {dict.hero.title_main} <br />
                            <span className="text-gradient drop-shadow-2xl">{dict.hero.title_sub}</span>
                        </motion.h1>
                    </div>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-lg text-muted max-w-lg leading-relaxed border-l-2 border-primary/30 pl-8 bg-black/20 backdrop-blur-sm py-4 pr-4 rounded-r-xl">
                        {dict.hero.description}
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="flex flex-col sm:flex-row gap-6 mt-4">
                        <Button size="lg" className="h-20 px-12 text-[10px] tracking-[0.2em] font-heading" onClick={() => triggerLeadModal("quote")}>
                            {dict.hero.cta_primary} <ArrowRight className="ml-2" size={16} />
                        </Button>
                        <button className="flex items-center gap-6 group text-white/80 hover:text-white transition-colors">
                            <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shadow-[0_0_20px_rgba(214,0,28,0)] group-hover:shadow-[0_0_30px_rgba(214,0,28,0.4)]">
                                <Play fill="currentColor" size={20} className="translate-x-0.5" />
                            </div>
                            <span className="font-heading tracking-[0.3em] text-[10px] uppercase">{dict.hero.cta_secondary}</span>
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div style={{ y: y1 }} className="lg:col-span-5 relative h-[600px] w-full hidden lg:block z-10 lg:-ml-20">
                    <motion.div initial={{ opacity: 0, x: 100, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1.1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="relative h-full w-full">
                        <Image src="/images/nanodrill-3004.png" alt="Nanodrill 3004" fill sizes="50vw" loading="eager" className="object-contain drop-shadow-[0_0_150px_rgba(214,0,28,0.4)]" />
                    </motion.div>
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] -z-10" />
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-0 w-full flex justify-between px-10 items-end pointer-events-none">
                <div className="text-[10px] font-heading tracking-[0.5em] text-white/20 uppercase vertical-lr">
                    {dict.hero.stats_title}
                </div>
            </div>
        </section>
    );
};
