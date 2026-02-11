"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

import Link from "next/link";

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    lang?: string;
    className?: string;
}

export const ProductCard = ({ id, name, image, lang = "en", className }: ProductCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        cardRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
        cardRef.current.style.setProperty("--mouse-y", `${y * 100}%`);

        const rotateX = (y - 0.5) * 10;
        const rotateY = (x - 0.5) * -10;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <Link href={`/${lang}/model/nanodrill-${id.toLowerCase()}`} className="block">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                    "group relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] transition-all duration-300 ease-out glass-card overflow-hidden",
                    className
                )}
            >
                {/* Interactive Flashlight Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(214,0,28,0.1),transparent_40%)]" />

                <div className="relative z-10">
                    <div className="relative h-48 sm:h-56 lg:h-64 w-full mb-6 lg:mb-10 overflow-hidden rounded-xl lg:rounded-2xl">
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-contain p-8 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 grayscale group-hover:grayscale-0"
                        />
                    </div>

                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-primary text-xs font-heading mb-2 block tracking-widest">SERIES {id}</span>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading mb-0">{name}</h3>
                        </div>
                        <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:rotate-45">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute -top-10 -right-10 text-[6rem] lg:text-[10rem] font-black text-white/5 pointer-events-none select-none group-hover:text-primary/10 transition-colors">
                    {id.slice(-2)}
                </div>
            </motion.div>
        </Link>
    );
};
