import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { useEffect } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Construction, Interior, Exterior, 3D & More | Zeeya Home" },
      { name: "description", content: "Premium construction, interior design, exterior design, 3D visualization, project execution and expert consultation across Pakistan." },
      { property: "og:title", content: "Services | Zeeya Home" },
      { property: "og:description", content: "Six disciplines, one accountable team." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  // Scroll to hash on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, []);

  return (
    <>
      <section className="pt-40 pb-20 lg:pt-48">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow mb-6">Services</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
              Six disciplines, one <em className="not-italic gold-text">accountable</em> team.
            </h1>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={150}>
            <p className="text-muted-foreground leading-relaxed">
              Pick a single service or hand us the keys for the whole project — every discipline below is delivered by Zeeya Home directly, not subcontracted.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service index */}
      <section className="pb-12">
        <div className="container-x grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="text-center text-[11px] uppercase tracking-[0.18em] p-4 rounded-full border border-border hover:bg-ink hover:text-background hover:border-ink transition-all duration-500"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`py-24 lg:py-32 ${i % 2 ? "bg-secondary/40" : ""}`}>
          <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className={`${i % 2 ? "lg:order-2" : ""}`}>
              <div className="group relative overflow-hidden rounded-3xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.22em] text-ink">
                  0{i + 1} / 06
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow mb-5">{s.short}</p>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">{s.title}</h2>
              <p className="mt-6 text-foreground/80 leading-relaxed">{s.description}</p>

              <div className="mt-10 grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">What's included</p>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-gold mt-1 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">Why it matters</p>
                  <ul className="space-y-3">
                    {s.benefits.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-gold mt-1 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/book" className="mt-10 inline-flex btn-gold">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="py-24 bg-ink text-background text-center">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl">Not sure where to start?</h2>
            <p className="mt-4 max-w-xl mx-auto text-background/75">A 30-minute consultation usually clarifies everything. No pressure, no fee.</p>
            <Link to="/book" className="mt-10 inline-flex btn-gold !bg-gold !text-ink !border-gold hover:!bg-background hover:!text-ink hover:!border-background">Book now</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
