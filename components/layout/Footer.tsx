"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";

export const Footer = ({ lang, dict }: { lang: string; dict: any }) => {
    return (
        <footer className="bg-card pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <Link href={`/${lang}`} className="relative h-12 w-48">
                            <Image src="/images/logo.svg" alt="Nanodrill Logo" fill className="object-contain" />
                        </Link>
                        <p className="text-muted leading-relaxed">
                            Precision-engineered compact HDD solutions for the modern construction and utility infrastructure industry.
                            Efficiency meets durability.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                                <Youtube size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-heading uppercase tracking-wider text-sm">Solutions</h4>
                        <div className="flex flex-col gap-3">
                            <Link href={`/${lang}/model/nanodrill-3004`} className="text-muted hover:text-white transition-colors">Nanodrill 3004</Link>
                            <Link href={`/${lang}/model/nanodrill-4030`} className="text-muted hover:text-white transition-colors">Nanodrill 4030</Link>
                            <Link href={`/${lang}/model/nanodrill-5060`} className="text-muted hover:text-white transition-colors">Nanodrill 5060</Link>
                            <Link href={`/${lang}/tooling`} className="text-muted hover:text-white transition-colors">HDD Tooling</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-heading uppercase tracking-wider text-sm">Company</h4>
                        <div className="flex flex-col gap-3">
                            <Link href={`/${lang}/about`} className="text-muted hover:text-white transition-colors">{dict.nav.about}</Link>
                            <Link href={`/${lang}/cases`} className="text-muted hover:text-white transition-colors">{dict.nav.cases}</Link>
                            <Link href={`/${lang}/contact`} className="text-muted hover:text-white transition-colors">{dict.common.contact}</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-heading uppercase tracking-wider text-sm">Get in Touch</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1" size={18} />
                                <span className="text-muted">Anthonie Fokkerstraat 2, 3772 MR Barneveld, Netherlands</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-primary" size={18} />
                                <span className="text-muted">+31 (0) 342 745 100</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary" size={18} />
                                <span className="text-muted">info@nanodrill.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
                    <p className="text-muted text-sm">
                        © {new Date().getFullYear()} Kormee Machinery B.V. - Realized by <a href="https://clickwave.nl?utm_source=nanodrill&utm_medium=referral&utm_campaign=footer_credit" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors font-bold">clickwave</a>
                    </p>
                    <div className="flex gap-6">
                        <Link href={`/${lang}/terms`} className="text-xs text-muted/60 hover:text-white">Terms & Conditions</Link>
                        <Link href={`/${lang}/privacy`} className="text-xs text-muted/60 hover:text-white">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
