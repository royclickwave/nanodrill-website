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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-heading uppercase tracking-[0.5em] text-xs mb-6 block">{dict.about.badge}</span>
                        <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-10 uppercase">
                            {dict.about.title_main} <br />
                            <span className="text-gradient">{dict.about.title_sub}</span> <br />
                            {dict.about.title_end}
                        </h2>
                        <p className="text-muted text-xl mb-12 leading-relaxed border-l border-white/10 pl-8">
                            {dict.about.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                    <span className="text-white/60 group-hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">{feature}</span>
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
