"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Star, Shield, Zap, Target } from "lucide-react";
import Image from "next/image";

const stats = [
    { label: "Engineering Excellence", value: "15+", sub: "Years Experience" },
    { label: "Global Reach", value: "25+", sub: "Countries" },
    { label: "Precision Range", value: "0.1", sub: "MM Accuracy" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-60 pb-40 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[80vh] opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-heading tracking-[0.5em] text-xs uppercase mb-8 block">Our Heritage</span>
                        <h1 className="text-6xl md:text-9xl font-black font-heading leading-none mb-12">
                            BORN IN <br />
                            <span className="text-gradient">BARNEVELD</span>
                        </h1>
                        <p className="text-muted text-xl md:text-2xl leading-relaxed max-w-2xl border-l border-primary/30 pl-8">
                            Kormee Machinery B.V. is more than a manufacturer. We are an engineering house dedicated to solving the &quot;impossible&quot; in horizontal directional drilling.
                        </p>
                    </motion.div>
                </div>

                {/* Floating machine part image for high-tech feel */}
                <div className="absolute top-1/4 right-0 w-1/3 h-[500px] pointer-events-none opacity-40">
                    <Image
                        src="/images/nanodrill-3004.png"
                        alt="Tech focus"
                        fill
                        className="object-contain"
                    />
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="py-40 bg-[#060608]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-4xl md:text-6xl font-black font-heading mb-12">THE <span className="text-primary italic">NANODRILL</span> PHILOSOPHY</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { icon: Shield, title: "Dutch Engineering", desc: "Built to last. Every bolt and circuit is engineered for extreme durability and field reliability." },
                                    { icon: Zap, title: "Compact Power", desc: "We refuse to compromise. Small enough for a backyard, powerful enough for rock drilling." },
                                    { icon: Target, title: "Surgical Precision", desc: "In dense urban environments, precision is not a choice—it is a requirement." },
                                    { icon: Star, title: "Owner-Operated", desc: "Designed by people who understand the field. We focus on ease of use and maintenance." }
                                ].map((item, i) => (
                                    <div key={i} className="glass-card p-10 rounded-[2.5rem] border-white/5 group hover:border-primary/20 transition-all">
                                        <item.icon className="text-primary mb-6" size={32} />
                                        <h3 className="text-xl font-heading mb-4 text-white uppercase">{item.title}</h3>
                                        <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex-1 bg-white/5 rounded-[2.5rem] p-12 flex flex-col justify-center border border-white/5 text-center group hover:bg-primary/5 transition-colors">
                                    <p className="text-primary text-5xl font-black font-heading mb-2">{stat.value}</p>
                                    <p className="text-white text-xs uppercase tracking-widest font-heading">{stat.label}</p>
                                    <p className="text-muted text-[10px] uppercase tracking-widest mt-1 opacity-50">{stat.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-40 relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden group">
                        <Image
                            src="/images/about-image.png"
                            alt="Factory"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-black font-heading mb-8">ENGINEERING THE <span className="text-primary italic">FUTURE</span></h2>
                        <p className="text-muted text-lg leading-relaxed mb-10">
                            Kormee Machinery B.V., based in the heart of the Netherlands, has become a global synonym for high-end compact drilling. What started as a technical vision of Mr. Cor van Maanen has evolved into a global brand serving utility contractors across the globe.
                        </p>
                        <p className="text-muted text-lg leading-relaxed mb-12">
                            Our facility in Barneveld combines traditional craftsmanship with cutting-edge robotic assembly, ensuring every Nanodrill meets our rigorous &apos;Gen-IV&apos; quality standards.
                        </p>

                        <div className="flex gap-4">
                            <div className="h-14 w-1 flex-shrink-0 bg-primary" />
                            <p className="text-white text-xl font-heading italic">
                                &quot;We don&apos;t build for the market; we build for the operator who faces the hardest jobs.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
