"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Drill, Shield, Zap, Settings, ArrowRight } from "lucide-react";
import Image from "next/image";
import { triggerLeadModal } from "@/lib/modal-utils";

const toolingCategories = [
    {
        name: "Precision Reamers",
        desc: "High-grade alloy steel reamers designed for maximum material displacement with minimal torque resistance.",
        features: ["Self-cleaning geometry", "Hard-faced cutting edges", "Available in ø 110mm - 400mm"]
    },
    {
        name: "HDD Drill Rods",
        desc: "One-piece forged drill rods optimized for the unique power-to-weight ratio of Nanodrill machines.",
        features: ["High-flexibility alloy", "Precision machined threads", "Enhanced fatigue resistance"]
    },
    {
        name: "Inertial Guidance",
        desc: "Advanced sensor packages that provide real-time XYZ coordinates in areas where GPS signals are blocked.",
        features: ["0.1% Depth accuracy", "Small probe diameter", "Wireless data sync"]
    }
];

export default function ToolingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-60 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-heading tracking-[0.5em] text-[10px] uppercase mb-8 block">Project Accessories</span>
                            <h1 className="text-6xl md:text-8xl font-black font-heading leading-tight mb-8 uppercase">
                                PRECISION <br />
                                <span className="text-gradient">TOOLING</span>
                            </h1>
                            <p className="text-muted text-xl leading-relaxed max-w-lg mb-12">
                                Every component is engineered to complement the unique performance profile of Nanodrill machines. Built for durability, accuracy, and speed.
                            </p>
                            <button
                                onClick={() => triggerLeadModal("download")}
                                className="h-16 px-12 bg-white text-black font-heading text-xs tracking-widest rounded-full hover:bg-primary hover:text-white transition-all flex items-center gap-4"
                            >
                                VIEW FULL CATALOG <ArrowRight size={16} />
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative h-[500px] w-full glass-card rounded-[4rem] border-white/5 overflow-hidden"
                        >
                            <Image
                                src="/images/tooling.png"
                                alt="Nanodrill Tooling"
                                fill
                                className="object-contain p-12"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-[#060608]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {toolingCategories.map((cat, i) => (
                            <div key={i} className="glass-card p-12 rounded-[3rem] border-white/5 hover:border-primary/20 transition-all flex flex-col group">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary transition-colors">
                                    <Drill className="text-primary group-hover:text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-heading mb-6 uppercase">{cat.name}</h3>
                                <p className="text-muted text-sm leading-relaxed mb-10 flex-grow">{cat.desc}</p>

                                <ul className="space-y-4 mb-10">
                                    {cat.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-[10px] font-heading tracking-widest text-white/60 uppercase">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => triggerLeadModal("quote")}
                                    className="text-[10px] font-heading tracking-widest text-primary flex items-center gap-2 hover:gap-4 transition-all"
                                >
                                    ENQUIRE <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
