"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageSquare, ArrowRight, Zap } from "lucide-react";
import { triggerLeadModal } from "@/lib/modal-utils";

export const CTASection = () => {
    return (
        <section className="py-60 relative overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="glass-card rounded-[4rem] p-12 md:p-24 overflow-hidden relative border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                    {/* Internal background shapes */}
                    <div className="absolute -top-24 -right-24 h-64 w-64 bg-primary/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-white/5 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                        <div className="lg:w-2/3 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
                                <Zap size={14} className="text-primary" />
                                <span className="text-[10px] font-heading tracking-[0.2em] uppercase text-primary">Get Started Today</span>
                            </div>
                            <h2 className="text-5xl md:text-[6rem] font-black font-heading leading-none mb-8">
                                PUSH THE <br />
                                <span className="text-gradient">BOUNDARIES</span>
                            </h2>
                            <p className="text-muted text-xl leading-relaxed max-w-xl">
                                Ready to transform your drilling infrastructure? Our engineers are standing by to guide you through the Nanodrill ecosystem.
                            </p>
                        </div>

                        <div className="lg:w-1/3 flex flex-col gap-6 w-full">
                            <Button size="lg" className="h-24 w-full text-lg tracking-[0.2em]" onClick={() => triggerLeadModal("quote")}>
                                REQUEST QUOTE <ArrowRight className="ml-4" />
                            </Button>
                            <button
                                onClick={() => triggerLeadModal("quote")}
                                className="h-20 w-full rounded-3xl border border-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 font-heading text-xs uppercase tracking-widest"
                            >
                                <MessageSquare size={20} /> TECHNICAL SUPPORT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
