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
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const rotate = useTransform(scrollY, [0, 800], [0, 10]);

    return (
        <section className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden bg-[#030305]">
            {/* Blueprint Tech Grid */}
            <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:200px_200px]" />
            </div>
            <div className="absolute inset-0 z-0 opacity-40">
                <Image src="/images/hero-bg.png" alt="Nanodrill HDD" fill sizes="100vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
            </div>

            <div className="hero-glow top-0 right-0 !bg-primary/5 w-[800px] h-[800px]" />
            <div className="hero-glow -bottom-40 -left-40 !bg-white/5" />

            <div className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.03] select-none">
                <div className="animate-marquee">
                    <span className="text-[25vw] font-black font-heading leading-none px-10 whitespace-nowrap">NANODRILL PRECISION COMPACT POWER </span>
                    <span className="text-[25vw] font-black font-heading leading-none px-10 whitespace-nowrap">NANODRILL PRECISION COMPACT POWER </span>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full min-h-[80vh]">
                <motion.div style={{ opacity }} className="flex flex-col gap-10 lg:col-span-7 relative z-20">
                    <div className="overflow-visible">
                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-primary font-heading uppercase tracking-[0.5em] text-[10px]">
                                {dict.hero.badge}
                            </span>
                        </motion.div>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }} className="text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.75] font-black tracking-tighter uppercase mb-6">
                            {dict.hero.title_main} <br />
                            <span className="text-gradient drop-shadow-2xl">{dict.hero.title_sub}</span>
                        </motion.h1>
                    </div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="relative">
                        <p className="text-muted text-xl max-w-xl leading-relaxed border-l-2 border-primary/30 pl-8 bg-black/40 backdrop-blur-xl py-6 pr-6 rounded-r-2xl border-y border-white/5">
                            {dict.hero.description}
                        </p>
                        {/* Decorative HUD node */}
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-4 w-4 bg-primary rotate-45 border-4 border-background" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="flex flex-col sm:flex-row gap-8 mt-4">
                        <Button size="lg" className="h-20 px-12 text-[10px] tracking-[0.3em] font-heading overflow-hidden group/btn relative bg-white text-black border-none hover:text-white" onClick={() => triggerLeadModal("quote")}>
                            <span className="relative z-10 flex items-center gap-3">{dict.hero.cta_primary} <ArrowRight size={16} /></span>
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-soft" />
                        </Button>
                        <button className="flex items-center gap-6 group text-white hover:text-primary transition-all">
                            <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-all shadow-[0_0_20px_rgba(214,0,28,0)] group-hover:shadow-[0_0_40px_rgba(214,0,28,0.2)] relative overflow-hidden">
                                <Play fill="currentColor" size={20} className="translate-x-0.5 relative z-10" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading tracking-[0.3em] text-[10px] uppercase opacity-40">{dict.hero.cta_secondary}</span>
                                <span className="font-heading tracking-[0.1em] text-xs uppercase">WATCH GEN-IV FILM</span>
                            </div>
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div style={{ y: y2, rotate }} className="lg:col-span-12 absolute -right-20 top-1/2 -translate-y-1/2 h-[900px] w-full hidden lg:block z-10 pointer-events-none">
                    <motion.div initial={{ opacity: 0, x: 200, scale: 0.8 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="relative h-full w-full">
                        <Image src="/images/nanodrill-3004.png" alt="Nanodrill 3004" fill sizes="80vw" loading="eager" className="object-contain drop-shadow-[0_0_200px_rgba(214,0,28,0.3)] filter brightness-110" />
                    </motion.div>

                    {/* Parallax HUD Circles */}
                    <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/2 h-32 w-32 border border-primary/20 rounded-full animate-ping opacity-20" />
                    <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 h-64 w-64 border border-white/5 rounded-full" />
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
