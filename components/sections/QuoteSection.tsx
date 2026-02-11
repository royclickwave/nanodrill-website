"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const QuoteSection = () => {
    return (
        <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-[#030305]">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-primary/10 flex items-center justify-center mb-8 lg:mb-12">
                        <Quote className="text-primary" size={28} />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black font-heading leading-tight mb-8 lg:mb-12 italic">
                        &quot;Our mission is to provide the <span className="text-primary">world&apos;s most compact</span> and powerful HDD solutions, allowing precision where others see obstacles.&quot;
                    </h2>

                    <div className="flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20 mb-4 bg-muted animate-pulse">
                            {/* Image placeholder for founder/CEO if available */}
                        </div>
                        <p className="font-heading text-sm tracking-[0.2em] uppercase text-white">Engineering Leadership</p>
                        <p className="text-primary text-[10px] uppercase tracking-[0.3em] mt-1">Kormee Machinery B.V.</p>
                    </div>
                </motion.div>
            </div>

            {/* Large background text for depth */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none translate-y-1/2">
                <span className="text-[30vw] font-black font-heading leading-none whitespace-nowrap">MISSION DRIVEN</span>
            </div>
        </section>
    );
};
