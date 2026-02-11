"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Clock, Shield } from "lucide-react";
import Image from "next/image";
import { triggerLeadModal } from "@/lib/modal-utils";

const caseStudies = [
    {
        title: "Fiber Deployment: Historic Amsterdam",
        location: "Amsterdam, NL",
        image: "/images/field-drill.png",
        tags: ["Micro HDD", "FTTH"],
        desc: "Precision drilling in the UNESCO World Heritage center. Successfully deployed 300m of fiber through extremely narrow alleyways with zero surface disruption."
    },
    {
        title: "Sub-Road Crossing: London Outer Ring",
        location: "London, UK",
        image: "/images/field-drill.png",
        tags: ["Infrastucture", "5060"],
        desc: "Heavy duty 60m road crossing under live traffic. The Nanodrill 5060's high torque handled the compacted clay and flint sub-soil without issue."
    }
];

export default function CasesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-60 pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mb-32"
                    >
                        <span className="text-primary font-heading tracking-[0.5em] text-[10px] uppercase mb-8 block">Proven Performance</span>
                        <h1 className="text-6xl md:text-9xl font-black font-heading leading-none mb-12 uppercase">
                            FIELD <br />
                            <span className="text-gradient">OPERATIONS</span>
                        </h1>
                        <p className="text-muted text-xl leading-relaxed">
                            Real-world results from infrastructure projects across Europe. Explore how our fleet solves complex logistical and geological challenges.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-40">
                        {caseStudies.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="group"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                    <div className="relative h-[600px] rounded-[4rem] overflow-hidden border border-white/10">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-12 left-12 flex gap-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-heading tracking-widest text-white uppercase">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 text-primary mb-6">
                                            <MapPin size={16} />
                                            <span className="text-xs font-heading tracking-widest uppercase">{project.location}</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-8 uppercase">
                                            {project.title}
                                        </h2>
                                        <p className="text-muted text-lg leading-relaxed mb-12">
                                            {project.desc}
                                        </p>

                                        <div className="grid grid-cols-2 gap-8 mb-12">
                                            <div className="flex items-center gap-4">
                                                <Clock className="text-primary/40" size={24} />
                                                <div>
                                                    <p className="text-[10px] text-muted font-heading uppercase tracking-widest">Duration</p>
                                                    <p className="text-white font-heading">Sub-3 Days</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <Shield className="text-primary/40" size={24} />
                                                <div>
                                                    <p className="text-[10px] text-muted font-heading uppercase tracking-widest">Safety Score</p>
                                                    <p className="text-white font-heading">Zero Incident</p>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => triggerLeadModal("quote")}
                                            className="h-20 px-12 border border-white/10 rounded-3xl font-heading text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center gap-6"
                                        >
                                            READ FULL PROJECT REPORT <ArrowRight size={20} />
                                        </button>
                                    </div>
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
