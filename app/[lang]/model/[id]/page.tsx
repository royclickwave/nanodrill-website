"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { triggerLeadModal } from "@/lib/modal-utils";

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
            "Pull and Thrust": "3,000 Kg",
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
            "Pull and Thrust": "6,000 Kg",
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
        image: "/images/nanodrill-5060.png",
        description: "Our flagship autonomous solution. Featuring a track-driven carrier with a dozer blade, powered by a Lithium battery pack for zero-emission operations.",
        specs: {
            "Max. Torque": "650 Nm",
            "Pull and Thrust": "6,000 Kg",
            "Max. Rotation": "150 rpm",
            "Battery Pack": "34 kWh 96VDC Lithium",
            "Electric Motor": "22 kW Parker Traction",
            "Operating Weight": "1,700 Kg",
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

export default function ModelDetailPage({
    params,
}: {
    params: Promise<{ lang: string; id: string }>;
}) {
    const { lang, id } = use(params);
    const model = modelData[id] || modelData["nanodrill-3004"];

    return (
        <main className="min-h-screen bg-background">
            <section className="pt-60 pb-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
                    <span className="text-[40vw] font-black font-heading leading-none uppercase">
                        {id.includes("tr") ? "5060" : id.split("-")[1]}
                    </span>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link href={`/${lang}/products`} className="inline-flex items-center gap-2 text-primary font-heading text-[10px] tracking-widest uppercase mb-12 hover:gap-4 transition-all group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to fleet
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
                                    className="h-20 px-10 bg-white text-black font-heading text-[10px] tracking-widest rounded-full hover:bg-primary hover:text-white transition-all flex items-center gap-4 uppercase"
                                >
                                    DOWNLOAD DATASHEET <Download size={16} />
                                </button>
                                <button
                                    onClick={() => triggerLeadModal("quote")}
                                    className="h-20 px-10 border border-white/20 text-white font-heading text-[10px] tracking-widest rounded-full hover:bg-white hover:text-black transition-all uppercase"
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
                                className="object-contain drop-shadow-[0_0_150px_rgba(214,0,28,0.2)]"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-[#060608]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                        <div>
                            <h2 className="text-4xl font-black font-heading mb-12 uppercase tracking-tight">Technical <br /> <span className="text-primary">Specifications</span></h2>
                            <div className="grid grid-cols-1 gap-4">
                                {Object.entries(model.specs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center py-6 border-b border-white/5 group hover:border-primary/30 transition-colors">
                                        <span className="text-muted font-heading text-[10px] uppercase tracking-widest">{key as string}</span>
                                        <span className="text-white font-bold">{value as string}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-black font-heading mb-12 uppercase tracking-tight">Key <br /> <span className="text-primary">Features</span></h2>
                            <div className="grid grid-cols-1 gap-6">
                                {model.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="glass-card p-8 rounded-3xl border-white/5 flex items-start gap-6 group hover:border-primary/20 transition-all">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                            <CheckCircle size={18} className="text-primary group-hover:text-white" />
                                        </div>
                                        <p className="text-white font-heading text-sm uppercase tracking-widest leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
