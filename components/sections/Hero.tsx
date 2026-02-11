"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";
import { triggerLeadModal } from "@/lib/modal-utils";

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030305]">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src="/images/hero-bg.png"
                    alt="Nanodrill HDD"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
            </div>

            <div className="hero-glow top-1/4 -left-20" />
            <div className="hero-glow bottom-1/4 -right-20 !bg-white/5" />

            {/* Large Background Marquee */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.03] select-none">
                <div className="animate-marquee">
                    <span className="text-[25vw] font-black font-heading leading-none px-10">NANODRILL PRECISION COMPACT POWER </span>
                    <span className="text-[25vw] font-black font-heading leading-none px-10">NANODRILL PRECISION COMPACT POWER </span>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
                <motion.div style={{ opacity }} className="flex flex-col gap-10">
                    <div className="overflow-hidden">
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-primary font-heading uppercase tracking-[0.5em] text-xs mb-4 block"
                        >
                            Industry-Leading Technology
                        </motion.span>
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                            className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.85] font-black tracking-tighter"
                        >
                            LIMITLESS <br />
                            <span className="text-outline">DRILLING</span> <br />
                            <span className="text-gradient">ACCESS</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg text-muted max-w-lg leading-relaxed border-l-2 border-primary/30 pl-8"
                    >
                        We don&apos;t just build machines; we engineer the ability to go where others can&apos;t. The most powerful compact HDD rigs in the world.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-6 mt-4"
                    >
                        <Button size="lg" className="h-16 px-10" onClick={() => triggerLeadModal("quote")}>
                            Launch Explorer <ArrowRight className="ml-2" />
                        </Button>
                        <button className="flex items-center gap-4 group text-white/80 hover:text-white transition-colors">
                            <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <Play fill="currentColor" size={20} />
                            </div>
                            <span className="font-heading tracking-widest text-xs uppercase">Watch Documentary</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Dynamic Product Showcase */}
                <motion.div
                    style={{ y: y1 }}
                    className="relative h-[600px] w-full hidden lg:block"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src="/images/nanodrill-3004.png"
                            alt="Nanodrill 3004"
                            fill
                            sizes="50vw"
                            loading="eager"
                            className="object-contain drop-shadow-[0_0_150px_rgba(214,0,28,0.3)] scale-110"
                        />
                        {/* Holographic Element */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent mix-blend-screen animate-pulse pointer-events-none" />
                    </motion.div>

                    {/* Draggable Specs Tag (Simulated) */}
                    <div className="absolute top-1/4 -right-10 glass-card p-6 rotate-12">
                        <p className="text-white font-heading text-[10px] tracking-widest uppercase mb-1">Max Pullback</p>
                        <p className="text-primary text-3xl font-black">3,000 KG</p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Stats Scroller */}
            <div className="absolute bottom-10 left-0 w-full flex justify-between px-10 items-end pointer-events-none">
                <div className="text-[10px] font-heading tracking-[0.5em] text-white/20 uppercase vertical-lr">
                    NANODRILL 2026 // GEN-IV
                </div>
            </div>
        </section>
    );
};
