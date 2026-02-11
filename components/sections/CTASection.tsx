"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { triggerLeadModal } from "@/lib/modal-utils";

export const CTASection = ({ dict }: { dict: any }) => {
    return (
        <section className="py-40 relative overflow-hidden bg-background">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-primary font-heading tracking-[0.5em] text-[10px] uppercase mb-8 block">{dict.cta.badge}</span>
                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black font-heading leading-[0.85] mb-12 uppercase">
                        {dict.cta.title_main} <br />
                        <span className="text-gradient">{dict.cta.title_sub}</span>
                    </h2>
                    <p className="text-muted text-xl md:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto">
                        {dict.cta.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="h-20 px-12 text-sm tracking-widest" onClick={() => triggerLeadModal("quote")}>
                            {dict.cta.primary_btn}
                        </Button>
                        <Button variant="outline" size="lg" className="h-20 px-12 text-sm tracking-widest border-white/10" onClick={() => triggerLeadModal("quote")}>
                            {dict.cta.secondary_btn}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
