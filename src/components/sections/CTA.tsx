import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const CTA = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary text-primary-foreground p-10 md:p-20"
      >
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-balance leading-tight">
              Your best smile is one visit away.
            </h2>
            <p className="mt-6 text-lg opacity-80 max-w-lg">
              Book a free 15-minute consultation. We'll listen, examine and walk you through your options — no pressure, ever.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="hero" size="xl">Book consultation <ArrowRight className="h-5 w-5" /></Button>
              <a href="tel:+919000000000" className="inline-flex items-center gap-2 px-8 h-14 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-smooth">
                <Phone className="h-4 w-4" /> +91 90000 00000
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Mon–Sat", v: "9 AM – 9 PM" },
              { k: "Sunday", v: "10 AM – 6 PM" },
              { k: "Location", v: "Hyderabad, India" },
              { k: "Emergency", v: "24/7 on call" },
            ].map(b => (
              <div key={b.k} className="p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/10">
                <div className="text-xs uppercase tracking-widest opacity-60">{b.k}</div>
                <div className="mt-1 font-serif text-xl">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
