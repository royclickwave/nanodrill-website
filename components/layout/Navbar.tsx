"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const models = [
    { name: "Nanodrill 3004", id: "3004", image: "/images/nanodrill-3004.png", desc: "Excavator Attachment" },
    { name: "Nanodrill 4030", id: "4030", image: "/images/nanodrill-4030.png", desc: "Urban Precise" },
    { name: "Nanodrill 5060", id: "5060", image: "/images/nanodrill-5060.png", desc: "Heavy Duty Slim" },
    { name: "Nanodrill 5060TR", id: "5060tr", image: "/images/nanodrill-5060.png", desc: "Autonomous Electric" },
];

const navItems = [
    { name: "Tooling", href: "/tooling" },
    { name: "Cases", href: "/cases" },
    { name: "About", href: "/about" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Premium Top Bar - Fades on scroll */}
            <div className={cn(
                "fixed top-0 left-0 right-0 z-[60] py-2 px-6 transition-all duration-500 border-b border-white/5 bg-background/50 backdrop-blur-sm",
                isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
            )}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex gap-6 text-[10px] font-heading tracking-[0.2em] text-white/40 uppercase">
                        <a href="tel:+31342745100" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Phone size={10} className="text-primary" /> +31 (0) 342 745 100
                        </a>
                        <a href="mailto:info@nanodrill.com" className="flex items-center gap-2 hover:text-primary transition-colors hidden sm:flex">
                            <Mail size={10} className="text-primary" /> info@nanodrill.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-heading tracking-[0.2em] text-white/40 uppercase">
                        <button className="hover:text-white transition-colors text-primary">EN</button>
                        <span className="text-white/10">/</span>
                        <button className="hover:text-white transition-colors">NL</button>
                        <span className="text-white/10">/</span>
                        <button className="hover:text-white transition-colors">DE</button>
                    </div>
                </div>
            </div>

            <nav
                className={cn(
                    "fixed left-0 right-0 z-50 transition-all duration-500 px-6",
                    isScrolled ? "top-4" : "top-10"
                )}
            >
                <div className={cn(
                    "max-w-7xl mx-auto flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-[2rem]",
                    isScrolled ? "bg-background/80 backdrop-blur-2xl border border-white/10 shadow-2xl" : "bg-transparent"
                )}>
                    {/* Logo */}
                    <Link href="/" className="relative h-8 w-32 group">
                        <Image
                            src="/images/logo.svg"
                            alt="Nanodrill Logo"
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {/* Animated Underline Effect wrapper */}
                        <div className="relative group/nav" onMouseEnter={() => setActiveMegaMenu(true)} onMouseLeave={() => setActiveMegaMenu(false)}>
                            <button className="text-xs font-heading tracking-widest text-white/70 hover:text-white transition-all py-2 flex items-center gap-2 uppercase">
                                Models <ChevronDown size={14} className={cn("transition-transform duration-300", activeMegaMenu && "rotate-180")} />
                            </button>

                            {/* Visual Mega Menu */}
                            <AnimatePresence>
                                {activeMegaMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-card/95 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                                        <div className="grid grid-cols-4 gap-6">
                                            {models.map((model) => (
                                                <Link
                                                    key={model.id}
                                                    href={`/model/nanodrill-${model.id}`}
                                                    className="group/item flex flex-col gap-4 p-4 rounded-3xl hover:bg-white/5 transition-all"
                                                >
                                                    <div className="relative h-32 w-full">
                                                        <Image src={model.image} alt={model.name} fill className="object-contain transition-transform duration-500 group-hover/item:scale-110" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-primary font-heading tracking-widest uppercase mb-1">{model.desc}</p>
                                                        <p className="text-sm font-heading text-white">{model.name}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                                            <p className="text-xs text-muted">Need advice on which model fits your needs?</p>
                                            <button className="text-xs font-heading text-primary flex items-center gap-2 group/btn">
                                                Compare all models <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs font-heading tracking-widest text-white/70 hover:text-white transition-all uppercase py-2"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Action Area */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link href="/contact">
                            <Button variant="primary" size="sm" className="h-10 px-6 text-[10px] tracking-[.2em] font-heading">
                                CONTACT
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background flex flex-col p-10"
                    >
                        <div className="flex justify-between items-center mb-20">
                            <Image
                                src="/images/logo.svg"
                                alt="Logo"
                                width={120}
                                height={30}
                            />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            <p className="text-primary font-heading text-xs tracking-widest uppercase">Navigation</p>
                            {["Home", "Models", "Tooling", "Cases", "About"].map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-5xl md:text-7xl font-black font-heading hover:text-primary transition-colors uppercase leading-none"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-6">
                            <div className="flex gap-10">
                                <div>
                                    <p className="text-[10px] font-heading text-white/30 uppercase tracking-widest mb-2">Call Us</p>
                                    <p className="text-white">+31 (0) 342 745 100</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-heading text-white/30 uppercase tracking-widest mb-2">Email</p>
                                    <p className="text-white">info@nanodrill.com</p>
                                </div>
                            </div>
                            <Button className="w-full h-16 text-sm tracking-widest py-10">GET A QUOTE</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
