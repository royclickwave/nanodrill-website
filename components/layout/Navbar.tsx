"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const models = [
    { name: "Nanodrill 3004", id: "3004", image: "/images/nanodrill-3004.png", desc: "Excavator Attachment" },
    { name: "Nanodrill 4030", id: "4030", image: "/images/nanodrill-4030.png", desc: "Urban Precise" },
    { name: "Nanodrill 5060", id: "5060", image: "/images/nanodrill-5060.png", desc: "Heavy Duty Slim" },
    { name: "Nanodrill 5060TR", id: "5060tr", image: "/images/nanodrill-5060.png", desc: "Autonomous Electric" },
];

export const Navbar = ({ lang, dict }: { lang: string; dict: any }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: dict.nav.tooling, href: `/${lang}/tooling` },
        { name: dict.nav.cases, href: `/${lang}/cases` },
        { name: dict.nav.about, href: `/${lang}/about` },
    ];

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        return segments.join("/");
    };

    return (
        <>
            {/* Premium Top Bar */}
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
                        {["en", "nl", "de"].map((l) => (
                            <React.Fragment key={l}>
                                <Link
                                    href={switchLocale(l)}
                                    className={cn("hover:text-white transition-colors", lang === l && "text-primary")}
                                >
                                    {l.toUpperCase()}
                                </Link>
                                {l !== "de" && <span className="text-white/10">/</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <nav className={cn("fixed left-0 right-0 z-50 transition-all duration-500 px-4 lg:px-6", isScrolled ? "top-4" : "top-10")}>
                <div className={cn(
                    "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-5 transition-all duration-700 rounded-full",
                    isScrolled ? "bg-background/40 backdrop-blur-3xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-transparent"
                )}>
                    <Link href={`/${lang}`} className="relative h-7 w-36 group">
                        <Image src="/images/logo.svg" alt="Nanodrill Logo" fill className="object-contain transition-all duration-500 group-hover:brightness-125" priority />
                    </Link>

                    <div className="hidden lg:flex items-center gap-10">
                        <div className="relative group/nav" onMouseEnter={() => setActiveMegaMenu(true)} onMouseLeave={() => setActiveMegaMenu(false)}>
                            <button className="text-xs font-heading tracking-widest text-white/70 hover:text-white transition-all py-2 flex items-center gap-2 uppercase">
                                {dict.nav.models} <ChevronDown size={14} className={cn("transition-transform duration-300", activeMegaMenu && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {activeMegaMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[900px] bg-card/60 backdrop-blur-[40px] border border-white/5 rounded-[4rem] p-10 shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                                        <div className="absolute inset-0 bg-primary/5 opacity-50 pointer-events-none" />
                                        <div className="grid grid-cols-4 gap-6">
                                            {models.map((model) => (
                                                <Link key={model.id} href={`/${lang}/model/nanodrill-${model.id}`} className="group/item flex flex-col gap-4 p-4 rounded-3xl hover:bg-white/5 transition-all">
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
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-xs font-heading tracking-widest text-white/70 hover:text-white transition-all uppercase py-2">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
                        <Link href={`/${lang}/contact`}>
                            <Button variant="primary" size="sm" className="h-10 px-6 text-[10px] tracking-[.2em] font-heading uppercase">
                                {dict.common.contact}
                            </Button>
                        </Link>
                    </div>

                    <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col p-6 sm:p-10 overflow-y-auto">
                        <div className="flex justify-between items-center mb-10 sm:mb-16">
                            <Image src="/images/logo.svg" alt="Logo" width={120} height={30} />
                            <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={22} className="text-white" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 sm:gap-8">
                            {[
                                { name: "Home", href: `/${lang}` },
                                { name: dict.nav.models, href: `/${lang}/products` },
                                { name: dict.nav.tooling, href: `/${lang}/tooling` },
                                { name: dict.nav.cases, href: `/${lang}/cases` },
                                { name: dict.nav.about, href: `/${lang}/about` },
                                { name: dict.common.contact, href: `/${lang}/contact` }
                            ].map((item, idx) => (
                                <motion.div key={item.name} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.08 }}>
                                    <Link href={item.href} className="text-4xl sm:text-5xl md:text-7xl font-black font-heading hover:text-primary transition-colors uppercase leading-none" onClick={() => setIsMobileMenuOpen(false)}>
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto pt-10 flex flex-col gap-3 text-[10px] font-heading tracking-[0.2em] text-white/40 uppercase">
                            <a href="tel:+31342745100" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Phone size={10} className="text-primary" /> +31 (0) 342 745 100
                            </a>
                            <a href="mailto:info@nanodrill.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Mail size={10} className="text-primary" /> info@nanodrill.com
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
