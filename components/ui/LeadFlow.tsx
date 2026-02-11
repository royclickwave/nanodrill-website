"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, FileText, Download, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ModalType = "quote" | "download" | null;

export const LeadFlow = () => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Listen for custom events to trigger modals from anywhere
    useEffect(() => {
        const handleOpen = (e: any) => {
            setActiveModal(e.detail.type);
            setStep(1);
            setIsSuccess(false);
        };
        window.addEventListener("open-lead-modal", handleOpen);
        return () => window.removeEventListener("open-lead-modal", handleOpen);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate premium processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (!activeModal) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl flex items-center justify-center p-6"
                onClick={() => setActiveModal(null)}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    className="bg-card border border-white/10 rounded-[3rem] p-8 md:p-12 w-full max-w-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={() => setActiveModal(null)}
                        className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <div className="mb-10 text-center lg:text-left">
                                    <div className="inline-flex items-center gap-2 text-primary font-heading text-[10px] tracking-[0.3em] uppercase mb-4">
                                        {activeModal === "quote" ? "Request Pricing" : "Resources"}
                                    </div>
                                    <h2 className="text-4xl font-black font-heading uppercase">
                                        {activeModal === "quote" ? "Configure your Quote" : "Download Factsheet"}
                                    </h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-heading text-white/40 uppercase tracking-widest pl-2">Full Name</label>
                                            <input required type="text" className="w-full h-14 bg-white/5 border border-white/5 rounded-2xl px-6 text-white focus:border-primary/50 outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-heading text-white/40 uppercase tracking-widest pl-2">Email Address</label>
                                            <input required type="email" className="w-full h-14 bg-white/5 border border-white/5 rounded-2xl px-6 text-white focus:border-primary/50 outline-none transition-all" placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-heading text-white/40 uppercase tracking-widest pl-2">Model of Interest</label>
                                        <select className="w-full h-14 bg-white/5 border border-white/5 rounded-2xl px-6 text-white focus:border-primary/50 outline-none transition-all appearance-none cursor-pointer">
                                            <option className="bg-background">Nanodrill 3004</option>
                                            <option className="bg-background">Nanodrill 4030</option>
                                            <option className="bg-background">Nanodrill 5060</option>
                                            <option className="bg-background">Nanodrill 5060TR</option>
                                        </select>
                                    </div>

                                    {activeModal === "quote" && (
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-heading text-white/40 uppercase tracking-widest pl-2">Project Details</label>
                                            <textarea className="w-full h-32 bg-white/5 border border-white/5 rounded-2xl p-6 text-white focus:border-primary/50 outline-none transition-all resize-none" placeholder="Tell us about your upcoming project..."></textarea>
                                        </div>
                                    )}

                                    <Button disabled={isSubmitting} className="w-full h-16 text-xs tracking-widest uppercase">
                                        {isSubmitting ? (
                                            <Loader2 className="animate-spin" />
                                        ) : (
                                            activeModal === "quote" ? "Submit Request" : "Request Access"
                                        )}
                                        {!isSubmitting && <ArrowRight className="ml-2" />}
                                    </Button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center py-12"
                            >
                                <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center mb-8 border border-primary/20">
                                    <CheckCircle2 size={48} className="text-primary" />
                                </div>
                                <h2 className="text-4xl font-black font-heading mb-4 uppercase">Success</h2>
                                <p className="text-muted text-lg max-w-xs mb-10 leading-relaxed">
                                    {activeModal === "quote"
                                        ? "Your request has been received. One of our engineers will contact you shortly."
                                        : "Your download is ready. Check your inbox for the high-res technical documentation."
                                    }
                                </p>
                                {activeModal === "download" && (
                                    <Button variant="outline" className="h-16 px-12 gap-3">
                                        <Download size={20} /> DOWNLOAD NOW
                                    </Button>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
