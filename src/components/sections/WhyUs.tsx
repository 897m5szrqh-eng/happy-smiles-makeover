import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Microscope, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Trust & Safety", desc: "Strict sterilisation protocols and US-trained leadership." },
  { icon: HeartHandshake, title: "Compassion First", desc: "We treat patients the way we'd want our family treated." },
  { icon: Microscope, title: "Advanced Tech", desc: "Digital X-rays, intraoral scanners and laser systems." },
  { icon: Clock, title: "Open 7 Days", desc: "Flexible appointments that fit around your life." },
];

export const WhyUs = () => (
  <section id="why" className="py-24 md:py-32">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <div className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Why Miswak</div>
        <h2 className="font-serif text-4xl md:text-6xl text-primary text-balance">
          A standard of care you can <em className="not-italic text-accent">feel.</em>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth"
          >
            <it.icon className="h-8 w-8 text-accent mb-6" />
            <h3 className="font-serif text-2xl mb-3">{it.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
