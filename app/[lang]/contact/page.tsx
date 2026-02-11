import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Contact Us | Nanodrill Professional Support",
    description: "Get in touch with the Nanodrill engineering team for quotes, demos, and technical support worldwide.",
};

export default async function ContactPage({
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
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black font-heading mb-6 md:mb-8 uppercase">Let&apos;s <span className="text-primary italic">Connect</span></h1>
                            <p className="text-muted text-base lg:text-xl mb-8 md:mb-12 max-w-lg leading-relaxed">
                                Have questions about our models or need a technical consultation? Our experts are ready to assist you worldwide.
                            </p>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                        <MapPin className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Headquarters</h3>
                                        <p className="text-muted">Anthonie Fokkerstraat 2, <br /> 3772 MR Barneveld, Netherlands</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                        <Phone className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Direct Call</h3>
                                        <p className="text-muted">+31 (0) 342 745 100</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                        <Mail className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Email Support</h3>
                                        <p className="text-muted">info@nanodrill.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[40px] border-white/5 relative overflow-hidden">
                                <form className="relative z-10 flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs text-muted uppercase tracking-widest pl-2 font-heading">Full Name</label>
                                            <input type="text" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs text-muted uppercase tracking-widest pl-2 font-heading">Email Address</label>
                                            <input type="email" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs text-muted uppercase tracking-widest pl-2 font-heading">Subject</label>
                                        <select className="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-white focus:outline-none focus:border-primary transition-colors appearance-none outline-none">
                                            <option className="bg-background" value="General Inquiry">General Inquiry</option>
                                            <option className="bg-background" value="Quote Request">Quote Request</option>
                                            <option className="bg-background" value="Technical Support">Technical Support</option>
                                            <option className="bg-background" value="Dealer Application">Dealer Application</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs text-muted uppercase tracking-widest pl-2 font-heading">Message</label>
                                        <textarea rows={5} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-base text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
                                    </div>

                                    <Button size="lg" className="w-full mt-2 font-heading tracking-widest h-16">SEND MESSAGE</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
