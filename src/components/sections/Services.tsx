import { motion } from "framer-motion";

const treatments = [
  { img: "/treatments/laser.jpg", title: "Laser Dentistry" },
  { img: "/treatments/gum.jpg", title: "Advance Gum Treatment" },
  { img: "/treatments/preventive.jpg", title: "Preventive Dentistry" },
  { img: "/treatments/aligners.jpg", title: "Clear Aligners" },
  { img: "/treatments/crowns.jpg", title: "Bridges & Crowns" },
  { img: "/treatments/dentures.jpg", title: "Dentures" },
  { img: "/treatments/implants.jpg", title: "Dental Implants" },
  { img: "/treatments/filling.jpg", title: "Dental Filling" },
  { img: "/treatments/rct.jpg", title: "Root Canal Treatment" },
  { img: "/treatments/wisdom.jpg", title: "Wisdom Teeth Removal" },
  { img: "/treatments/braces.jpg", title: "Braces & Aligners" },
  { img: "/treatments/ulcers.jpg", title: "Mouth Ulcers" },
  { img: "/treatments/whitening.jpg", title: "Teeth Whitening" },
  { img: "/treatments/makeover.jpg", title: "Smile Makeover" },
  { img: "/treatments/kids.jpg", title: "Kids Dentistry" },
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
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-card"
          >
            <img
              src={t.img}
              alt={t.title}
              loading="lazy"
              width={480}
              height={480}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90 group-hover:opacity-95 transition-smooth" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-serif text-lg md:text-xl text-primary-foreground leading-tight">{t.title}</h3>
              <div className="mt-1 h-px w-8 bg-accent group-hover:w-16 transition-smooth" />
            </div>
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
