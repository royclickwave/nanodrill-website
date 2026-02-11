import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { MapPin, ArrowRight, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Customer Cases | HDD Precision Projects",
    description: "Real-world applications of Nanodrill technology. See how our compact HDD rigs solve utility challenges.",
};

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

export default async function CasesPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { lang } = await params;

    return (
        <main className="min-h-screen bg-background">
            <section className="pt-32 md:pt-44 lg:pt-60 pb-16 md:pb-24 lg:pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mb-16 md:mb-24 lg:mb-32">
                        <span className="text-primary font-heading tracking-[0.5em] text-[10px] uppercase mb-6 md:mb-8 block">Proven Performance</span>
                        <h1 className="text-4xl sm:text-6xl md:text-9xl font-black font-heading leading-none mb-8 md:mb-12 uppercase">
                            FIELD <br />
                            <span className="text-gradient">OPERATIONS</span>
                        </h1>
                        <p className="text-muted text-base lg:text-xl leading-relaxed">
                            Real-world results from infrastructure projects across Europe. Explore how our fleet solves complex logistical and geological challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-16 md:gap-24 lg:gap-40">
                        {caseStudies.map((project, idx) => (
                            <div key={idx} className="group">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                                    <div className="relative h-[300px] md:h-[400px] lg:h-[600px] rounded-2xl md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-white/10">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex gap-3 md:gap-4">
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
                                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black font-heading leading-tight mb-6 md:mb-8 uppercase">
                                            {project.title}
                                        </h2>
                                        <p className="text-muted text-base lg:text-lg leading-relaxed mb-8 md:mb-12">
                                            {project.desc}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
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
                                            className="h-14 sm:h-16 lg:h-20 px-6 sm:px-8 lg:px-12 border border-white/10 rounded-2xl lg:rounded-3xl font-heading text-[10px] sm:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center gap-4 md:gap-6"
                                        >
                                            READ FULL PROJECT REPORT <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
