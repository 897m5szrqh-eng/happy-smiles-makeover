export const Footer = () => (
  <footer className="bg-primary text-primary-foreground/80 py-16">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-accent grid place-items-center text-accent-foreground font-serif text-xl">M</div>
            <div className="font-serif text-2xl text-primary-foreground">Miswak Dental Hospital & Implant Centre</div>
          </div>
          <p className="max-w-md text-sm leading-relaxed">
            A premium dental healthcare facility established in November 2002 by Dr Shaik Mohammed Majid — providing world-class dental care with the latest equipment and innovative technology.
          </p>
        </div>
        <div>
          <div className="text-primary-foreground font-medium mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-accent transition-smooth">Services</a></li>
            <li><a href="#about" className="hover:text-accent transition-smooth">About Us</a></li>
            <li><a href="#reviews" className="hover:text-accent transition-smooth">Reviews</a></li>
            <li><a href="#faq" className="hover:text-accent transition-smooth">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-primary-foreground font-medium mb-4">Connect</div>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.miswakdental.com/contact-us" className="hover:text-accent transition-smooth">Contact Us</a></li>
            <li><a href="https://www.miswakdental.com/appointments" className="hover:text-accent transition-smooth">Online Appointments</a></li>
            <li><a href="https://www.miswakdental.com/privacy-policy" className="hover:text-accent transition-smooth">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs">
        <div>© {new Date().getFullYear()} Miswak Dental Hospital & Implant Centre. All rights reserved.</div>
        <div>Bringing smiles to people's lives for over 24 years.</div>
      </div>
    </div>
  </footer>
);
