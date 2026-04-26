import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ayesha R.", text: "Best dental experience I've ever had. The team is gentle, professional and genuinely caring. My implant felt like nothing.", role: "Implant patient" },
  { name: "Rahul S.", text: "I was terrified of dentists. Dr. Majid and his team made me feel completely at ease. My aligners journey was seamless.", role: "Aligners patient" },
  { name: "Fatima K.", text: "Spotless clinic, latest equipment, and the warmth of family. I now bring my entire family to Miswak.", role: "Family patient" },
];

export const Reviews = () => (
  <section id="reviews" className="py-24 md:py-32 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Patient Stories</div>
        <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">Loved by 1 lakh+ patients.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative p-8 rounded-3xl bg-card border border-border shadow-card"
          >
            <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/30" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <blockquote className="font-serif text-xl text-primary leading-snug mb-6">"{r.text}"</blockquote>
            <figcaption>
              <div className="font-medium text-primary">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
