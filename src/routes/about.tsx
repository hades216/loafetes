import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-team.jpg";
import villaImg from "@/assets/hero-villa.jpg";
import { Reveal } from "@/components/Reveal";
import { VALUES, PROCESS, STATS } from "@/lib/site-data";
import { Counter } from "@/components/Counter";
import { ArrowRight, Target, Eye, Heart, Compass } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zeeya Home — Our Story, Mission & Process" },
      { name: "description", content: "Meet Zeeya Home — a premium construction and interior design studio in Islamabad. Our story, values, process and team." },
      { property: "og:title", content: "About Zeeya Home" },
      { property: "og:description", content: "A premium studio for those who refuse to compromise on craft." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  { name: "Engineering", role: "Certified structural & MEP engineers", text: "Foundations, frames and systems built to last." },
  { name: "Architecture", role: "Senior architects & designers", text: "Plans, elevations and details, refined to perfection." },
  { name: "Interiors", role: "Interior designers & stylists", text: "Joinery, lighting, furniture — composed with intent." },
  { name: "Visualization", role: "3D artists & VR specialists", text: "See your home in photoreal detail before approval." },
  { name: "Project Management", role: "Dedicated project leads", text: "Single point of accountability, end to end." },
  { name: "Site & Craft", role: "Skilled trades & site supervisors", text: "Premium materials handled by people who care." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">About</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
              We build homes that <em className="not-italic gold-text">feel like home</em>.
            </h1>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <p className="text-muted-foreground leading-relaxed">
              Zeeya Home is a premium construction and interior design house. From our base in Islamabad we serve families and businesses across Pakistan — combining engineering rigour with the warmth of considered craft.
            </p>
          </Reveal>
        </div>
        <Reveal className="container-x mt-16">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={aboutImg} alt="The Zeeya Home team" width={1600} height={1024} className="w-full h-[55vh] object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Our story</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">Why we started.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 space-y-5 text-foreground/85 leading-relaxed" delay={150}>
            <p>
              Zeeya Home was founded on a simple frustration: that building or refurbishing a home in Pakistan too often meant juggling architects, contractors, suppliers and inspectors — and absorbing every gap between them. We knew it could be done better.
            </p>
            <p>
              So we built one team to do all of it. Engineers, architects, interior designers, 3D artists, project managers and site supervisors — under one roof, on one schedule, accountable to one client. The result is a calmer process and a sharper finish.
            </p>
            <p>
              Today we plan, design, visualize, construct and finish premium homes and commercial spaces across Islamabad, Rawalpindi and nationwide Pakistan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values quad */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, t: "Mission", d: "To deliver premium, end-to-end home solutions with engineering rigour and design integrity — at a fair, transparent price." },
            { icon: Eye, t: "Vision", d: "To be Pakistan's most trusted name in turnkey homes and considered interiors." },
            { icon: Heart, t: "Why we do it", d: "Because a well-built home shapes how a family lives — for decades." },
            { icon: Compass, t: "How we work", d: "One team, one schedule, one accountable point of contact — from sketch to keys." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 80}>
              <div className="group lux-card p-10 h-full hover:lux-card-hover">
                <b.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                <h3 className="mt-5 font-display text-2xl">{b.t}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-5">Our values</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">Four principles. Everything else flows from these.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="p-8 border-t border-foreground/15 h-full transition-colors duration-500 hover:border-gold">
                  <p className="font-display text-3xl">0{i + 1}</p>
                  <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-24 lg:py-32 bg-ink text-background">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow"><span className="text-gold">Our process</span></p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.05]">From first sketch to keys in hand.</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-background/15" aria-hidden />
            <ol className="space-y-12">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={i * 80}>
                  <li className={`relative grid sm:grid-cols-2 gap-8 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                    <div className="pl-12 sm:pl-0 sm:pr-12 sm:text-right">
                      <p className="font-display text-5xl text-gold">{p.step}</p>
                      <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
                    </div>
                    <div className="pl-12 sm:pl-12">
                      <p className="text-background/75 leading-relaxed">{p.text}</p>
                    </div>
                    <span className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 top-2 grid place-items-center h-5 w-5 rounded-full bg-gold ring-4 ring-ink" />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="p-8 lux-card text-center hover:lux-card-hover">
                <p className="font-display text-5xl lg:text-6xl gold-text"><Counter to={s.value} suffix={s.suffix} /></p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-5">Professional team</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">Specialists for every stage of your project.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="group lux-card p-8 h-full hover:lux-card-hover">
                  <h3 className="font-display text-2xl">{t.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-gold">{t.role}</p>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <img src={villaImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Ready to start a project?</h2>
            <Link to="/book" className="mt-10 inline-flex btn-gold">Book Consultation <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
