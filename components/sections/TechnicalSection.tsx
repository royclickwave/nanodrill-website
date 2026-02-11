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
        <section className="py-40 bg-[#060608] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div>
                        <span className="text-primary font-heading tracking-[0.5em] text-[10px] uppercase mb-8 block">{dict.technical.badge}</span>
                        <h2 className="text-5xl md:text-7xl font-black font-heading leading-tight mb-12 uppercase">
                            {dict.technical.title_main} <br />
                            <span className="text-gradient">{dict.technical.title_sub}</span>
                        </h2>
                        <p className="text-muted text-xl leading-relaxed mb-16">
                            {dict.technical.description}
                        </p>

                        <div className="flex flex-col gap-8">
                            {[
                                dict.technical.check_1,
                                dict.technical.check_2,
                                dict.technical.check_3,
                                dict.technical.check_4
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <CheckCircle2 size={18} className="text-primary group-hover:text-white" />
                                    </div>
                                    <span className="text-white font-heading text-sm uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {utilities.map((util, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-primary/20 transition-all group"
                            >
                                <util.icon className="text-primary mb-8 group-hover:scale-110 transition-transform" size={40} />
                                <h3 className="text-xl font-heading mb-4 uppercase">{util.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{util.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
