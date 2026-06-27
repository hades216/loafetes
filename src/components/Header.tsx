import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
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

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (open) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-background/90 backdrop-blur-xl border-b border-border/60 py-3" : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2.5 sm:gap-3 min-w-0 shrink">
          <span className="grid place-items-center h-10 w-10 sm:h-11 sm:w-11 rounded-md bg-ink overflow-hidden shrink-0 transition-transform duration-500 group-hover:rotate-3">
            <img src={SITE.logoUrl} alt="Zeeya Home" width={44} height={44} className="h-full w-full object-cover" />
          </span>
          <span className="flex flex-col leading-none min-w-0">
            <span className="font-display text-base sm:text-lg tracking-wide text-foreground truncate">Zeeya Home</span>
            <span className="hidden xs:block text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-1 truncate">Complete Home Solutions</span>
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
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative grid place-items-center h-11 w-11 rounded-full border border-border bg-background/80 backdrop-blur transition-all duration-300 active:scale-95 shrink-0"
        >
          <span className="relative h-5 w-5">
            <Menu className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
            <X className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
          </span>
        </button>
      </div>

      {/* Mobile backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`lg:hidden fixed inset-0 top-0 bg-ink/40 backdrop-blur-md transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: -1 }}
      />

      {/* Mobile sheet */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] sm:top-[76px] origin-top transition-all duration-500 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="mx-3 sm:mx-4 mt-2 rounded-2xl border border-border bg-background/98 backdrop-blur-xl shadow-luxury p-5 sm:p-6 max-h-[calc(100vh-100px)] overflow-y-auto">
          <nav className="flex flex-col">
            {NAV.map((n, i) => {
              const isActive = n.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  style={{ animationDelay: open ? `${i * 50}ms` : "0ms" }}
                  className={`group flex items-center justify-between py-3.5 text-sm uppercase tracking-[0.2em] border-b border-border/60 last:border-0 transition-colors duration-300 ${
                    isActive ? "text-gold" : "hover:text-gold"
                  } ${open ? "animate-fade-up" : ""}`}
                >
                  <span className="flex items-center gap-3">
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                    {n.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              );
            })}
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
