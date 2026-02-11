import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Nanodrill Professional Support",
    description: "Get in touch with the Nanodrill engineering team for quotes, demos, and technical support worldwide.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-40 pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/2">
                            <h1 className="text-6xl md:text-8xl font-heading mb-8">Let&apos;s <span className="text-primary italic">Connect</span></h1>
                            <p className="text-muted text-xl mb-12 max-w-lg leading-relaxed">
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
                            <div className="glass-card p-10 rounded-[40px] border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-primary/10">
                                    <Globe size={120} />
                                </div>

                                <form className="relative z-10 flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs text-muted uppercase tracking-widest pl-2">Full Name</label>
                                            <input type="text" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs text-muted uppercase tracking-widest pl-2">Email Address</label>
                                            <input type="email" className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs text-muted uppercase tracking-widest pl-2">Subject</label>
                                        <select className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none outline-none">
                                            <option className="bg-background">General Inquiry</option>
                                            <option className="bg-background">Quote Request</option>
                                            <option className="bg-background">Technical Support</option>
                                            <option className="bg-background">Dealer Application</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs text-muted uppercase tracking-widest pl-2">Message</label>
                                        <textarea rows={5} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
                                    </div>

                                    <Button size="lg" className="w-full mt-2">Send Message</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder or Interactive Map can be added here */}
            <section className="h-[400px] w-full grayscale contrast-125 brightness-50 px-6 max-w-7xl mx-auto mb-32">
                <div className="w-full h-full bg-card rounded-[40px] flex items-center justify-center border border-white/5 text-muted/30">
                    [ Interactive Workspace Map ]
                </div>
            </section>

            <Footer />
        </main>
    );
}
