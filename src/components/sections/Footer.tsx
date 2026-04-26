export const Footer = () => (
  <footer className="bg-primary text-primary-foreground/80 py-16">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-accent grid place-items-center text-accent-foreground font-serif text-xl">M</div>
            <div className="font-serif text-2xl text-primary-foreground">Miswak</div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            Miswak Dental Hospital & Implant Centre — delivering compassionate, world-class dental care since 2002.
          </p>
        </div>
        <div>
          <div className="text-primary-foreground font-medium mb-4">Visit</div>
          <p className="text-sm leading-relaxed">Hyderabad, Telangana<br />India</p>
        </div>
        <div>
          <div className="text-primary-foreground font-medium mb-4">Contact</div>
          <p className="text-sm leading-relaxed">
            +91 90000 00000<br />
            hello@miswakdental.com
          </p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs">
        <div>© {new Date().getFullYear()} Miswak Dental Hospital & Implant Centre. All rights reserved.</div>
        <div>Crafted with care.</div>
      </div>
    </div>
  </footer>
);
