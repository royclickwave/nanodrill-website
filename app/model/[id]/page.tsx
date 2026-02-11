"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Download, CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const modelData: Record<string, any> = {
    "nanodrill-3004": {
        name: "Nanodrill 3004",
        title: "Micro Precise Excavator Attachment",
        image: "/images/nanodrill-3004.png",
        description: "The Nanodrill 3004 is a horizontal drilling unit designed to be used on mini-excavators from 1.8 tons. It is the ideal solution for house connections, offering surgical precision in extremely confined urban environments.",
        specs: {
            "Max. Torque": "180 Nm",
            "Pull and Thrust": "400 Kg",
            "Max. Rotation": "200 rpm",
            "Hydraulic Power": "30 l/min",
            "Dimensions": "0.3 x 1.3 x 0.6 m",
            "Operating Weight": "275 Kg",
            "Max. Drill Length": "30 Meters",
            "Max. Diameter": "90 mm"
        },
        features: [
            "To be used on mini-excavators from 1.8 tons",
            "More accurate than rocket drilling",
            "Adjustable start angle for site flexibility",
            "Bend radius of only 2 meters"
        ]
    },
    "nanodrill-4030": {
        name: "Nanodrill 4030",
        title: "Extended Range Precision",
        image: "/images/nanodrill-4030.png",
        description: "Perfectly balancing size and capability. The 4030 is designed for longer stretches and road crossings up to 50 meters without the logistical headache of heavy machinery.",
        specs: {
            "Max. Torque": "380 Nm",
            "Pull and Thrust": "3.000 Kg",
            "Max. Rotation": "200 rpm",
            "Hydraulic Power": "45 l/min",
            "Dimensions": "0.4 x 1.3 x 0.75 m",
            "Operating Weight": "300 Kg",
            "Max. Drill Length": "50 Meters",
            "Max. Diameter": "240 mm"
        },
        features: [
            "Bend radius steel rods: 15 meters",
            "Bend radius plastic rods: 2 meters",
            "Suitable for electric mini-excavators",
            "Surgical accuracy for road crossings"
        ]
    },
    "nanodrill-5060": {
        name: "Nanodrill 5060",
        title: "Industrial Grade Power",
        image: "/images/nanodrill-5060.png",
        description: "The heavy-duty compact solution. Delivering massive 750 Nm torque while maintaining a super-slim profile. Capable of drilling up to 80 meters with precision.",
        specs: {
            "Max. Torque": "750 Nm",
            "Pull and Thrust": "6.000 Kg",
            "Max. Rotation": "200 rpm",
            "Hydraulic Power": "60-90 l/min (220 bar)",
            "Dimensions": "1.7 x 0.52 x 1.1 m",
            "Operating Weight": "594 Kg",
            "Max. Drill Length": "80 Meters",
            "Max. Diameter": "320 mm"
        },
        features: [
            "Incredible 6-ton pullback capacity",
            "High-torque rotation system for rocky soil",
            "Ultra-slim 0.52m width for alleyway access",
            "Bend radius of 6 meters"
        ]
    },
    "nanodrill-5060tr": {
        name: "Nanodrill 5060TR",
        title: "Autonomous Electric Crawler",
        image: "/images/nanodrill-5060.png", // Assuming same visual or placeholder
        description: "Our flagship autonomous solution. Featuring a track-driven carrier with a dozer blade, powered by a Lithium battery pack for zero-emission operations.",
        specs: {
            "Max. Torque": "650 Nm",
            "Pull and Thrust": "6.000 Kg",
            "Max. Rotation": "150 rpm",
            "Battery Pack": "34 kWh 96VDC Lithium",
            "Electric Motor": "22 kW Parker Traction",
            "Operating Weight": "1.700 Kg",
            "Max. Drill Length": "90 Meters",
            "Max. Diameter": "325 mm"
        },
        features: [
            "Tracks with integrated dozer blade",
            "Zero-emission operation for city centers",
            "Independent mobility on the job site",
            "Extreme 90m drilling range"
        ]
    }
};

import { triggerLeadModal } from "@/lib/modal-utils";

export default function ModelDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const model = modelData[id] || modelData["nanodrill-3004"];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-40 lg:pt-60 pb-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
                    <span className="text-[40vw] font-black font-heading leading-none uppercase">
                        {id.includes("tr") ? "5060" : id.split("-")[1]}
                    </span>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link href="/products" className="inline-flex items-center gap-2 text-primary font-heading text-xs tracking-widest uppercase mb-12 hover:gap-4 transition-all">
                        <ArrowLeft size={14} /> Back to fleet
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-white/40 font-heading text-[10px] uppercase tracking-[0.5em] block mb-4">Industrial Grade Gen-IV</span>
                            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black font-heading leading-[0.85] mb-8 uppercase">
                                {model.name.split(" ")[0]} <br />
                                <span className="text-primary italic">{model.name.split(" ")[1]}</span>
                            </h1>
                            <p className="text-muted text-xl max-w-lg leading-relaxed mb-12">
                                {model.description}
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <button
                                    onClick={() => triggerLeadModal("download")}
                                    className="h-16 px-10 bg-primary text-white font-heading text-xs tracking-widest rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-4"
                                >
                                    DOWNLOAD DATASHEET <Download size={16} />
                                </button>
                                <button
                                    onClick={() => triggerLeadModal("quote")}
                                    className="h-16 px-10 border border-white/20 text-white font-heading text-xs tracking-widest rounded-full hover:bg-white hover:text-black transition-all"
                                >
                                    GET A QUOTE
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative h-[600px] w-full"
                        >
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[150px] -z-10" />
                            <Image
                                src={model.image}
                                alt={model.name}
                                fill
                                className="object-contain drop-shadow-[0_0_100px_rgba(214,0,28,0.2)]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-[#060608] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl font-black font-heading mb-10 border-b border-primary/30 pb-4 uppercase">Technical Specs</h3>
                            <div className="flex flex-col gap-6">
                                {Object.entries(model.specs).map(([label, value]) => (
                                    <div key={label} className="flex justify-between items-end border-b border-white/5 pb-2">
                                        <span className="text-xs text-muted uppercase tracking-widest">{label}</span>
                                        <span className="text-xl font-heading text-white">{value as string}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-black font-heading mb-10 border-b border-white/5 pb-4 uppercase">Key Advantages</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {model.features.map((feature: string, i: number) => (
                                    <div key={i} className="glass-card p-10 rounded-[2.5rem] border-white/5 flex gap-6 group hover:border-primary/30 transition-all">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                            <CheckCircle size={14} className="text-primary group-hover:text-white" />
                                        </div>
                                        <p className="text-white text-sm font-medium leading-relaxed uppercase tracking-wider">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <h2 className="text-4xl md:text-5xl font-black font-heading uppercase">OTHER <span className="text-primary italic">MODELS</span></h2>
                        <Link href="/products" className="text-primary font-heading text-xs tracking-widest uppercase hover:gap-4 transition-all flex items-center gap-2">View full fleet <ChevronRight size={16} /></Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {Object.values(modelData)
                            .filter(m => m.name !== model.name)
                            .slice(0, 3)
                            .map((m) => (
                                <Link key={m.name} href={`/model/nanodrill-${m.name.split(" ")[1].toLowerCase()}`}>
                                    <div className="glass-card p-8 rounded-[3rem] border-white/5 group hover:border-primary/30 transition-all text-center">
                                        <div className="relative h-48 w-full mb-6">
                                            <Image src={m.image} alt={m.name} fill className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100" />
                                        </div>
                                        <h4 className="text-xl font-heading mb-2 uppercase">{m.name}</h4>
                                        <p className="text-xs text-muted uppercase tracking-widest">{m.title}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
