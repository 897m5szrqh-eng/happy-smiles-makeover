import { motion } from "framer-motion";
import clinic from "@/assets/clinic-interior.jpg";
import { Check } from "lucide-react";

const points = [
  "State-of-the-art Implant Centre with the latest technology",
  "Highly experienced specialists across every dental discipline",
  "Comfortable, calming environment designed around you",
  "Transparent pricing and personalised treatment plans",
];

export const About = () => (
  <section id="about" className="py-24 md:py-32 bg-secondary">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-soft">
          <img src={clinic} alt="Modern dental clinic interior" className="h-full w-full object-cover" loading="lazy" width={1536} height={1024} />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-glow max-w-xs hidden md:block">
          <div className="font-serif text-2xl leading-tight">"Care that feels like family."</div>
          <div className="mt-2 text-xs opacity-80">— Dr. Majid M. Shaik, BDS, DMD (USA)</div>
        </div>
      </motion.div>

      <div>
        <div className="text-sm uppercase tracking-[0.25em] text-accent mb-4">About Miswak</div>
        <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance leading-tight">
          Two decades of crafting confident smiles.
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          Since 2002, Miswak Dental Hospital & Implant Centre has delivered high-quality dental care with compassion, professionalism and excellence. Our state-of-the-art Implant Centre is equipped with the latest technology and advanced equipment to ensure safe, effective, modern treatments.
        </p>
        <ul className="mt-8 space-y-4">
          {points.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-3 items-start"
            >
              <div className="mt-1 h-6 w-6 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="text-foreground/80">{p}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
