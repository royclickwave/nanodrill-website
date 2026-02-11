"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const AboutBrief = ({ dict }: { dict: any }) => {
    const features = [
        dict.about.feat_1,
        dict.about.feat_2,
        dict.about.feat_3,
        dict.about.feat_4
    ];

    return (
        <section className="py-40 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div className="relative order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                        className="relative h-[700px] w-full rounded-[4rem] overflow-hidden group shadow-2xl"
                    >
                        <Image
                            src="/images/about-image.png"
                            alt="About Nanodrill"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </motion.div>

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -bottom-12 -left-12 glass-card p-12 rounded-[3rem] border-white/10 hidden md:block"
                    >
                        <p className="text-primary text-7xl font-black mb-2 leading-none">{dict.about.stats_num}</p>
                        <p className="text-white font-heading text-[10px] uppercase tracking-[0.3em] leading-tight whitespace-pre-line">
                            {dict.about.stats_text}
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-10 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-px w-8 bg-primary" />
                            <span className="text-primary font-heading uppercase tracking-[0.5em] text-[10px] block">{dict.about.badge}</span>
                        </div>
                        <h2 className="text-7xl md:text-8xl font-black leading-[0.8] mb-12 uppercase font-heading tracking-tighter">
                            {dict.about.title_main} <br />
                            <span className="text-gradient drop-shadow-xl">{dict.about.title_sub}</span> <br />
                            <span className="text-4xl md:text-6xl text-white/40 block mt-2">{dict.about.title_end}</span>
                        </h2>
                        <p className="text-muted text-xl mb-12 leading-relaxed border-l-2 border-primary/20 pl-8 bg-white/5 py-6 pr-6 rounded-r-2xl border-y border-white/5 backdrop-blur-sm">
                            {dict.about.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-6 group">
                                    <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(214,0,28,0.8)] group-hover:scale-[2.5] transition-all duration-500" />
                                    <span className="text-white/40 group-hover:text-white transition-all text-[10px] uppercase font-heading tracking-[0.2em]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="flex items-center gap-4 group text-white font-heading tracking-widest text-xs uppercase">
                            <span className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                <ArrowUpRight size={20} />
                            </span>
                            {dict.about.cta}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
