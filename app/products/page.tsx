"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Drill, Settings, ShieldCheck, Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const productCategories = [
    {
        title: "Excavator Attachment",
        slug: "3004",
        name: "Nanodrill 3004",
        image: "/images/nanodrill-3004.png",
        specs: ["Max Torque: 180 Nm", "Pull and Thrust: 400 Kg", "Weight: 275 Kg"],
        desc: "The ultimate solution for house connections. Directly powered by your mini-excavator hydraulics."
    },
    {
        title: "Micro Precise Series",
        slug: "4030",
        name: "Nanodrill 4030",
        image: "/images/nanodrill-4030.png",
        specs: ["Max Torque: 380 Nm", "Pull and Thrust: 3,000 Kg", "Weight: 300 Kg"],
        desc: "Balanced power for road crossings and urban stretches up to 50 meters."
    },
    {
        title: "Industrial Grade",
        slug: "5060",
        name: "Nanodrill 5060",
        image: "/images/nanodrill-5060.png",
        specs: ["Max Torque: 750 Nm", "Pull and Thrust: 6,000 Kg", "Weight: 594 Kg"],
        desc: "Maximum power in a super-slim frame. Engineered for the hardest soil conditions."
    }
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-60 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-[70vh] pointer-events-none opacity-20">
                    <div className="absolute inset-0 bg-radial-gradient from-primary/30 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-primary font-heading tracking-[0.5em] text-xs uppercase mb-8 block">The Product Ecosystem</span>
                        <h1 className="text-6xl md:text-9xl font-black font-heading leading-none mb-12 uppercase">
                            POWER <br />
                            <span className="text-gradient">REDEFINED</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="border-y border-white/5 py-12 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12">
                    {[
                        { icon: Drill, label: "Precision Boring" },
                        { icon: Settings, label: "Advanced Control" },
                        { icon: ShieldCheck, label: "Certified Safety" },
                        { icon: Box, label: "Compact Logistics" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-help">
                            <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                <feature.icon className="text-white group-hover:text-white" size={20} />
                            </div>
                            <span className="text-[10px] font-heading tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">{feature.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col gap-40">
                        {productCategories.map((product, idx) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={cn(
                                    "flex flex-col gap-20 items-center",
                                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                )}
                            >
                                <div className="lg:w-1/2 relative">
                                    <div className="absolute inset-0 bg-primary/5 rounded-[4rem] blur-[80px] -z-10" />
                                    <div className="relative h-[500px] w-full group overflow-hidden rounded-[3rem] border border-white/5 glass-card p-12">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                <div className="lg:w-1/2 lg:px-20 text-center lg:text-left">
                                    <p className="text-primary font-heading tracking-[0.3em] text-[10px] uppercase mb-6">{product.title}</p>
                                    <h2 className="text-5xl md:text-7xl font-black font-heading mb-8 leading-none uppercase">{product.name}</h2>
                                    <p className="text-muted text-lg mb-10 leading-relaxed italic border-l-2 border-primary/20 pl-6 mx-auto lg:mx-0">
                                        &quot;{product.desc}&quot;
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                        {product.specs.map((spec, sIdx) => (
                                            <div key={sIdx} className="bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
                                                <p className="text-white font-heading text-xs uppercase tracking-tighter">{spec}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/model/nanodrill-${product.slug}`}>
                                        <button className="flex items-center gap-6 group mx-auto lg:mx-0">
                                            <span className="text-xs font-heading tracking-[0.4em] uppercase">Detailed Sheet</span>
                                            <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                                <ArrowRight size={20} />
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function cn(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
