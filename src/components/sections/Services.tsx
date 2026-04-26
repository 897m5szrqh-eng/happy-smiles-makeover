import { motion } from "framer-motion";
import { Smile, Sparkles, Shield, Wrench, Activity, Heart, Zap, Crown } from "lucide-react";

const services = [
  { icon: Zap, title: "Laser Dentistry", desc: "Precise, painless treatments using cutting-edge laser technology." },
  { icon: Shield, title: "Advanced Gum Care", desc: "Comprehensive periodontal treatment to restore gum health." },
  { icon: Heart, title: "Preventive Dentistry", desc: "Regular care that keeps your smile healthy for life." },
  { icon: Smile, title: "Clear Aligners", desc: "Discreet teeth straightening with modern invisible aligners." },
  { icon: Crown, title: "Bridges & Crowns", desc: "Custom-crafted restorations that look and feel natural." },
  { icon: Activity, title: "Dental Implants", desc: "Permanent tooth replacement by our implant specialists." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Veneers, whitening and smile design tailored to you." },
  { icon: Wrench, title: "Root Canal Therapy", desc: "Pain-free, single-visit endodontic treatments." },
];

export const Services = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Our Services</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance">
            Every treatment, <em className="not-italic text-accent">under one roof.</em>
          </h2>
        </div>
        <p className="text-muted-foreground text-lg">
          From your first cleaning to advanced full-mouth rehabilitation, our team of specialists delivers world-class care with warmth and precision.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group relative p-7 rounded-3xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-smooth cursor-pointer"
          >
            <div className="h-12 w-12 rounded-2xl bg-accent-soft grid place-items-center mb-5 group-hover:bg-gradient-accent transition-smooth">
              <s.icon className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-smooth" />
            </div>
            <h3 className="font-serif text-xl text-primary mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
