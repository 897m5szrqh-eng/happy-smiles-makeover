import { motion } from "framer-motion";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50"
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-serif text-xl">M</div>
          <div className="leading-tight">
            <div className="font-serif text-lg text-primary">Miswak</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Dental & Implant Centre</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-accent transition-smooth">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+919000000000" className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <Button variant="hero" size="sm" className="hidden sm:inline-flex">Book Visit</Button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2"><Menu className="h-5 w-5" /></button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-2">{l.label}</a>)}
          </div>
        </div>
      )}
    </motion.header>
  );
};
