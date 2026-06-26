import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

const ICONS = { Instagram, Facebook, LinkedIn: Linkedin, YouTube: Youtube } as const;

export function Footer() {
  return (
    <footer className="relative bg-ink text-background mt-32">
      <div className="container-x py-20 grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-12 w-12 rounded-md bg-background/5 overflow-hidden">
              <img src={SITE.logoUrl} alt="Zeeya Home" width={48} height={48} className="h-12 w-12 object-cover" />
            </span>
            <div>
              <p className="font-display text-2xl">Zeeya Home</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-background/60 mt-1">Complete Home Solutions</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm text-background/70 leading-relaxed">
            Premium construction and interior design from Islamabad to nationwide Pakistan. From concept to keys-in-hand.
          </p>
          <div className="mt-8 flex gap-3">
            {SITE.socials.map((s) => {
              const Icon = ICONS[s.name as keyof typeof ICONS];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid place-items-center h-10 w-10 rounded-full border border-background/20 hover:bg-gold hover:text-ink hover:border-gold transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Explore</h4>
          <ul className="space-y-3">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="group inline-flex items-center gap-1 text-background/80 hover:text-gold transition-colors duration-300"
                >
                  {n.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Working Areas</h4>
          <ul className="space-y-3 text-background/80">
            {SITE.coverage.map((c) => (
              <li key={c} className="transition-colors duration-300 hover:text-gold">{c}</li>
            ))}
            <li className="transition-colors duration-300 hover:text-gold">Bahria Town</li>
            <li className="transition-colors duration-300 hover:text-gold">DHA Phases</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Contact</h4>
          <a href={`tel:${SITE.phoneIntl}`} className="group flex items-start gap-3 mb-5 text-background/80 hover:text-gold transition-colors duration-300">
            <Phone className="h-5 w-5 mt-0.5 shrink-0 text-gold" />
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-background/50">Phone</span>
              {SITE.phone}
            </span>
          </a>
          <div className="flex items-start gap-3 text-background/80">
            <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-gold" />
            <address className="not-italic text-sm leading-relaxed">
              {SITE.address.line1}<br />
              {SITE.address.line2}<br />
              {SITE.address.city}, {SITE.address.country} {SITE.address.postal}
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-background/50">
          <p>© {new Date().getFullYear()} Zeeya Home. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em]">Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}
