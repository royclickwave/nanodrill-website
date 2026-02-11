"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { triggerLeadModal } from "@/lib/modal-utils";

export const CTASection = ({ dict }: { dict: any }) => {
    return (
        <section className="py-60 relative overflow-hidden bg-[#030305]">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(214,0,28,0.1)_0%,transparent_70%)]" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex justify-center items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-primary/50" />
                        <span className="text-primary font-heading tracking-[0.6em] text-[10px] uppercase">{dict.cta.badge}</span>
                        <div className="h-px w-10 bg-primary/50" />
                    </div>
                    <h2 className="text-6xl md:text-8xl lg:text-[11rem] font-black font-heading leading-[0.8] mb-12 uppercase tracking-tighter">
                        {dict.cta.title_main} <br />
                        <span className="text-gradient drop-shadow-2xl italic">{dict.cta.title_sub}</span>
                    </h2>
                    <p className="text-muted text-xl md:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto">
                        {dict.cta.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center mt-20">
                        <Button size="lg" className="h-24 px-16 text-[10px] tracking-[0.4em] font-heading uppercase bg-primary text-white border-none shadow-[0_20px_50px_rgba(214,0,28,0.4)] hover:shadow-[0_25px_60px_rgba(214,0,28,0.6)] transition-all hover:-translate-y-2" onClick={() => triggerLeadModal("quote")}>
                            {dict.cta.primary_btn}
                        </Button>
                        <button className="h-24 px-16 border border-white/10 rounded-full text-[10px] tracking-[0.4em] font-heading uppercase bg-white/5 hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm" onClick={() => triggerLeadModal("quote")}>
                            {dict.cta.secondary_btn}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
