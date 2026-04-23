import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Zap } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.13_0.04_262)]">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div className="leading-tight">
              <div className="text-base font-extrabold">EDDY POWER CELL</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Pvt. Ltd.</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Powering your world with reliable energy. Trusted batteries for cars, bikes, inverters and solar — built for Indian conditions.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Nambi Complex, Thillai Nagar, Hosur, Tamil Nadu – 635109</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />+91 00000 00000</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />info@eddypowercell.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Eddy Power Cell Pvt. Ltd. All rights reserved.</p>
          <p>Hosur, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
