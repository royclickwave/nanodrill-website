import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { CTASection } from "@/components/sections/CTASection";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { TechnicalSection } from "@/components/sections/TechnicalSection";

const products = [
  { id: "3004", name: "Nanodrill 3004", image: "/images/nanodrill-3004.png" },
  { id: "4030", name: "Nanodrill 4030", image: "/images/nanodrill-4030.png" },
  { id: "5060", name: "Nanodrill 5060", image: "/images/nanodrill-5060.png" },
  { id: "5060tr", name: "Nanodrill 5060TR", image: "/images/nanodrill-5060.png" }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <section className="py-40 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="max-w-3xl">
              <span className="text-primary font-heading tracking-[0.3em] uppercase text-xs mb-6 block">Precision Engineering</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none uppercase font-black">
                THE <span className="text-primary italic">FLEET</span>
              </h2>
            </div>
            <p className="text-muted text-lg max-w-sm mb-4">
              Explore our lineup of high-performance rigs. Each designed to solve a specific infrastructural challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((model, idx) => (
              <ProductCard
                key={model.id}
                {...model}
                className={idx % 2 !== 0 ? "md:mt-24" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      <TechnicalSection />
      <QuoteSection />
      <AboutBrief />
      <CTASection />
      <Footer />
    </main>
  );
}
