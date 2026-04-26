import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { WhyUs } from "@/components/sections/WhyUs";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Miswak Dental Hospital & Implant Centre — Crafted Smiles, Compassionate Care";
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    meta.setAttribute('content', "Hyderabad's trusted dental hospital since 2002. Implants, aligners, laser dentistry & more — delivered with world-class care and warmth.");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Team />
      <WhyUs />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
