import { motion } from "framer-motion";
import {
  Zap, Shield, Heart, Smile, Crown, Activity, Pill, Wrench,
  Scissors, Sliders, AlertCircle, Sparkles, Wand2, Baby
} from "lucide-react";

const treatments = [
  { icon: Zap, title: "Laser Dentistry" },
  { icon: Shield, title: "Advance Gum Treatment" },
  { icon: Heart, title: "Preventive Dentistry" },
  { icon: Sliders, title: "Clear Aligners" },
  { icon: Crown, title: "Bridges & Crowns" },
  { icon: Smile, title: "Dentures" },
  { icon: Activity, title: "Dental Implants" },
  { icon: Pill, title: "Dental Filling" },
  { icon: Wrench, title: "Root Canal Treatment" },
  { icon: Scissors, title: "Wisdom Teeth Removal" },
  { icon: Sliders, title: "Braces & Aligners" },
  { icon: AlertCircle, title: "Mouth Ulcers" },
  { icon: Sparkles, title: "Teeth Whitening" },
  { icon: Wand2, title: "Smile Makeover" },
  { icon: Baby, title: "Kids Dentistry" },
];

const coreServices = [
  "General Dentistry",
  "Oral Surgery",
  "Emergency Dentistry",
  "Root Canal Treatment",
  "Dental Implants",
  "Cosmetic Dentistry",
];

export const Services = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Symptoms & Treatments</div>
          <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance">
            Every treatment, <em className="not-italic text-accent">under one roof.</em>
          </h2>
        </div>
        <p className="text-muted-foreground text-lg">
          From routine check-ups to advanced implant surgery — comprehensive dental care delivered by experienced specialists with the latest equipment and innovative technology.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
        {treatments.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-smooth cursor-pointer"
          >
            <div className="h-11 w-11 rounded-xl bg-accent-soft grid place-items-center mb-4 group-hover:bg-gradient-accent transition-smooth">
              <t.icon className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-smooth" />
            </div>
            <h3 className="font-serif text-base text-primary leading-tight">{t.title}</h3>
          </motion.div>
        ))}
      </div>

      <div className="rounded-[2rem] bg-secondary p-10 md:p-16">
        <div className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Our Services</div>
        <h3 className="font-serif text-3xl md:text-4xl text-primary mb-10 max-w-2xl">
          Six core specialities delivered with a personal touch.
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {coreServices.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 pb-6 border-b border-border"
            >
              <span className="font-serif text-2xl text-accent">0{i + 1}</span>
              <span className="font-serif text-xl text-primary">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
