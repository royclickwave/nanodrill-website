"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Home, Construction, Cable, Zap } from "lucide-react";

export const TechnicalSection = ({ dict }: { dict: any }) => {
    const utilities = [
        { icon: Home, title: dict.technical.util_1_title, desc: dict.technical.util_1_desc },
        { icon: Cable, title: dict.technical.util_2_title, desc: dict.technical.util_2_desc },
        { icon: Construction, title: dict.technical.util_3_title, desc: dict.technical.util_3_desc },
        { icon: Zap, title: dict.technical.util_4_title, desc: dict.technical.util_4_desc }
    ];

    return (
        <section className="py-60 bg-[#030305] relative overflow-hidden">
            {/* Tech Blueprint Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-px w-8 bg-primary" />
                            <span className="text-primary font-heading tracking-[0.5em] text-[10px] uppercase block">{dict.technical.badge}</span>
                        </div>
                        <h2 className="text-6xl md:text-[5.5rem] font-black font-heading leading-[0.85] mb-12 uppercase tracking-tighter">
                            {dict.technical.title_main} <br />
                            <span className="text-primary italic">{dict.technical.title_sub}</span>
                        </h2>
                        <p className="text-muted text-xl leading-relaxed mb-16 max-w-lg border-l-2 border-primary/20 pl-8">
                            {dict.technical.description}
                        </p>

                        <div className="flex flex-col gap-10">
                            {[
                                dict.technical.check_1,
                                dict.technical.check_2,
                                dict.technical.check_3,
                                dict.technical.check_4
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 rotate-45">
                                        <CheckCircle2 size={18} className="text-primary group-hover:text-white -rotate-45" />
                                    </div>
                                    <span className="text-white font-heading text-[10px] uppercase tracking-[0.2em]">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        {/* Connecting technical lines */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none hidden md:block">
                            <svg className="w-full h-full stroke-white/5 fill-none">
                                <path d="M 0 50 Q 50 50 50 0" />
                                <path d="M 100 50 Q 50 50 50 100" />
                            </svg>
                        </div>

                        {utilities.map((util, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="glass-card p-12 rounded-[4rem] border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-10 font-heading text-[6rem] leading-none pointer-events-none group-hover:opacity-20 transition-opacity">
                                    0{i + 1}
                                </div>
                                <div className="h-16 w-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500">
                                    <util.icon className="text-primary group-hover:text-white transition-all duration-500" size={32} />
                                </div>
                                <h3 className="text-xl font-heading mb-4 uppercase tracking-tighter">{util.title}</h3>
                                <p className="text-muted text-xs leading-relaxed uppercase tracking-widest">{util.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
