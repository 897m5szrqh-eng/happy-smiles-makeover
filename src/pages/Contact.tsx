import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact & Book Appointment — Miswak Dental";
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Thanks for submitting!", description: "Our team will get back to you shortly." });
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  const info = [
    { icon: Phone, label: "Call us", value: "+91 90000 00000" },
    { icon: Mail, label: "Email", value: "hello@miswakdental.com" },
    { icon: MapPin, label: "Visit", value: "Hyderabad, Telangana, India" },
    { icon: Clock, label: "Hours", value: "Mon–Sat 9 AM – 9 PM · Sun 10 AM – 6 PM" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 md:pt-40 pb-8 bg-gradient-hero">
        <div className="container">
          <div className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Book An Appointment</div>
          <h1 className="font-serif text-5xl md:text-7xl text-primary text-balance leading-[0.95] max-w-4xl">
            Let's bring your <em className="not-italic text-accent">smile</em> to life.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Tell us a bit about you and we'll get back with availability. For urgent care, call us directly.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid lg:grid-cols-12 gap-12">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-7 bg-card border border-border rounded-[2rem] p-8 md:p-12 shadow-card space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                <Input id="firstName" required className="mt-2 h-12 rounded-xl" />
              </div>
              <div>
                <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                <Input id="lastName" required className="mt-2 h-12 rounded-xl" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <Input id="email" type="email" required className="mt-2 h-12 rounded-xl" />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                <Input id="phone" type="tel" required className="mt-2 h-12 rounded-xl" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <Textarea id="message" rows={5} className="mt-2 rounded-xl" placeholder="Tell us how we can help..." />
            </div>
            <Button type="submit" variant="hero" size="xl" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </form>

          {/* Info */}
          <aside className="lg:col-span-5 space-y-4">
            {info.map((i) => (
              <div key={i.label} className="bg-secondary rounded-2xl p-6 flex gap-4 items-start">
                <div className="h-11 w-11 rounded-xl bg-gradient-accent grid place-items-center text-accent-foreground shrink-0">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{i.label}</div>
                  <div className="mt-1 font-serif text-lg text-primary">{i.value}</div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
