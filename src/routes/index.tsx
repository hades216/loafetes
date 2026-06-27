import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Phone, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-villa.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import exteriorImg from "@/assets/service-exterior.jpg";
import constructionImg from "@/assets/service-construction.jpg";
import { SERVICES, STATS, WHY, REVIEWS, PROJECTS } from "@/lib/site-data";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zeeya Home — Premium Construction & Interior Design, Islamabad" },
      { name: "description", content: "Building dream homes with excellence. Construction, interior, exterior, 3D visualization and turnkey execution across Pakistan." },
      { property: "og:title", content: "Zeeya Home — Building Dream Homes with Excellence" },
      { property: "og:description", content: "From concept to keys-in-hand. Premium construction and interior design from Islamabad to nationwide Pakistan." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setIsMobile(mq.matches || reduce.matches);
    update();
    mq.addEventListener("change", update);
    reduce.addEventListener("change", update);
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);
  const px = (v: number) => (isMobile ? 0 : v);


  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 will-change-transform" style={{ transform: `translate3d(0, ${px(scrollY * 0.35)}px, 0) scale(1.08)` }}>
          <img
            src={heroImg}
            alt="Luxury modern villa at golden hour"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />
        </div>

        <div className="relative z-10 container-x min-h-screen flex flex-col justify-end pb-32 pt-40 text-background">
          <p className="eyebrow text-background/80 mb-6 animate-fade-up" style={{ ['--tw-text-opacity' as never]: 1 }}>
            <span className="text-background/80">Complete Home Solutions</span>
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl max-w-5xl leading-[0.95] animate-fade-up" style={{ animationDelay: "120ms" }}>
            Building <span className="gold-text">dream homes</span>
            <br />with excellence.
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg text-background/85 leading-relaxed animate-fade-up" style={{ animationDelay: "260ms" }}>
            From concept and design to construction and finishing, Zeeya Home delivers premium home solutions across Pakistan — with quality craftsmanship and modern innovation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Link to="/book" className="btn-gold !bg-gold !text-ink !border-gold hover:!bg-background hover:!text-ink hover:!border-background">
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost !text-background !border-background/40 hover:!bg-background hover:!text-ink">
              Explore Services
            </Link>
          </div>

          {/* Floating stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 backdrop-blur-md rounded-2xl overflow-hidden border border-background/15">
            {STATS.map((s, i) => (
              <div key={s.label} className="bg-ink/30 px-6 py-7 animate-fade-up" style={{ animationDelay: `${500 + i * 100}ms` }}>
                <p className="font-display text-4xl sm:text-5xl text-background">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-background/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-background/70 text-[10px] uppercase tracking-[0.4em] animate-fade-in-slow">
          Scroll
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 lg:py-40">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">About Zeeya Home</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              A premium studio for those who refuse to compromise on <em className="not-italic gold-text">craft</em>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <p className="text-muted-foreground leading-relaxed">
              Zeeya Home is a premium construction and interior design house based in Islamabad, delivering complete residential and commercial solutions nationwide. We plan, design, visualize, build, and finish — all under one accountable roof.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] link-underline text-foreground">
              Our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <Reveal>
              <p className="eyebrow mb-5">What we do</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-2xl leading-[1.05]">
                Six disciplines, one accountable team.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/services" className="btn-ghost">All services <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link to="/services" hash={s.slug} className="group block lux-card overflow-hidden h-full hover:lux-card-hover">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground group-hover:text-gold transition-colors duration-300">
                      Explore <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — parallax */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: `url(${interiorImg})`,
            backgroundSize: "cover",
            backgroundPosition: `center ${px(scrollY * -0.05)}px`,
          }}
        />
        <div className="container-x">
          <Reveal className="max-w-3xl mb-16">
            <p className="eyebrow mb-5">Featured Work</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Spaces we've made — quietly extraordinary.
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-6">
            {PROJECTS.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 100} className={`group ${i % 4 === 0 || i % 4 === 3 ? "lg:col-span-7" : "lg:col-span-5"}`}>
                <Link to="/projects" className="block relative overflow-hidden rounded-2xl bg-ink">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="h-full w-full object-cover transition-all duration-[1400ms] group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-background">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category}</p>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-background/75">{p.location}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/projects" className="btn-gold">View all projects <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28 lg:py-36 bg-ink text-background">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-16">
            <p className="eyebrow mb-5" style={{ color: "var(--gold)" }}>
              <span className="text-gold">Why Choose Us</span>
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Nine reasons clients trust us with their most important spaces.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-3xl overflow-hidden border border-background/15">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="group bg-ink p-8 lg:p-10 h-full transition-colors duration-500 hover:bg-background/[0.04]">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-5 w-5 text-gold transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                    <span className="text-[11px] uppercase tracking-[0.3em] text-background/50">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl">{w.title}</h3>
                  <p className="mt-3 text-sm text-background/70 leading-relaxed">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX SPLIT — construction showcase */}
      <section className="relative grid lg:grid-cols-2 min-h-[80vh]">
        <div className="relative overflow-hidden order-2 lg:order-1">
          <div
            className="absolute inset-0 will-change-transform"
            style={{ transform: `translate3d(0, ${px((scrollY - 2400) * 0.1)}px, 0) scale(1.1)` }}
          >
            <img src={constructionImg} alt="Construction site" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="bg-background flex items-center order-1 lg:order-2 px-6 sm:px-12 lg:px-20 py-20">
          <Reveal>
            <p className="eyebrow mb-6">From Concept → Reality</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] max-w-xl">
              Engineered with rigour. Finished with intention.
            </h2>
            <ul className="mt-8 space-y-4">
              {["Certified structural engineering", "Premium grade-A materials", "Weekly progress reporting", "Documented handover"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold mt-0.5" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-10 inline-flex btn-gold">Our process</Link>
          </Reveal>
        </div>
      </section>

      {/* INTERIOR PARALLAX */}
      <section className="relative grid lg:grid-cols-2 min-h-[80vh]">
        <div className="bg-secondary/40 flex items-center px-6 sm:px-12 lg:px-20 py-20">
          <Reveal>
            <p className="eyebrow mb-6">Luxury Interiors</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] max-w-xl">
              Interiors that feel like home — and look like a magazine.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Bespoke joinery, layered lighting, considered materials. We design interiors that elevate everyday living without ever feeling cold.
            </p>
            <Link to="/services" hash="interior-design" className="mt-10 inline-flex btn-ghost">Interior design</Link>
          </Reveal>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 will-change-transform"
            style={{ transform: `translate3d(0, ${px((scrollY - 3200) * 0.08)}px, 0) scale(1.1)` }}
          >
            <img src={exteriorImg} alt="Luxury villa exterior" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-28 lg:py-36">
        <div className="container-x">
          <Reveal className="mb-14 max-w-3xl">
            <p className="eyebrow mb-5">Clients</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Trusted by families across Pakistan.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <article className="lux-card p-8 h-full hover:lux-card-hover transition-all duration-500">
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-foreground/85 leading-relaxed">"{r.text}"</p>
                  <p className="mt-6 font-display text-lg">{r.name}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{r.city}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews" className="btn-ghost">Read all reviews <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA PARALLAX */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: `center ${px(scrollY * -0.04)}px`,
          }}
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative container-x text-background text-center">
          <Reveal>
            <p className="eyebrow justify-center" style={{ color: "var(--gold)" }}><span className="text-gold">Ready when you are</span></p>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto">
              Let's build the home you've always pictured.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-background/80">
              Book a free consultation. We'll review your scope, site and budget — and come back with a clear, costed roadmap within five working days.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/book" className="btn-gold !bg-gold !text-ink !border-gold hover:!bg-background hover:!text-ink hover:!border-background">Book Consultation</Link>
              <a href="tel:+923161787017" className="btn-ghost !text-background !border-background/40 hover:!bg-background hover:!text-ink">
                <Phone className="h-4 w-4" /> 0316 1787017
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
