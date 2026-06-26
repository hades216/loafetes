import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3 shrink-0">
          <span className="grid place-items-center h-11 w-11 rounded-md bg-ink overflow-hidden transition-transform duration-500 group-hover:rotate-3">
            <img src={SITE.logoUrl} alt="Zeeya Home" width={44} height={44} className="h-11 w-11 object-cover" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-foreground">Zeeya Home</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Complete Home Solutions</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[12px] uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground link-underline transition-colors duration-300"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a href={`tel:${SITE.phoneIntl}`} className="hidden [@media(min-width:1400px)]:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal hover:text-foreground transition-colors duration-300">
            <Phone className="h-3.5 w-3.5 text-gold" /> {SITE.phone}
          </a>
          <Link to="/book" className="btn-gold !px-5 !py-3 !text-[11px] whitespace-nowrap">Book Now</Link>
        </div>


        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center h-11 w-11 rounded-full border border-border bg-background/80 backdrop-blur transition-all duration-300 hover:bg-ink hover:text-background"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] origin-top transition-all duration-500 ${
          open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-luxury p-6">
          <nav className="flex flex-col">
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                style={{ animationDelay: `${i * 40}ms` }}
                className="py-3 text-sm uppercase tracking-[0.2em] border-b border-border/60 last:border-0 hover:text-gold transition-colors duration-300 animate-fade-up"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/book" className="btn-gold w-full mt-6">Book Consultation</Link>
          <a href={`tel:${SITE.phoneIntl}`} className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal">
            <Phone className="h-3.5 w-3.5 text-gold" /> {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
