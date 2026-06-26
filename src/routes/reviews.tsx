import { createFileRoute } from "@tanstack/react-router";
import { REVIEWS } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews | Zeeya Home" },
      { name: "description", content: "Real words from Zeeya Home clients across Pakistan — construction, interior design, and turnkey homes." },
      { property: "og:title", content: "Reviews | Zeeya Home" },
      { property: "og:description", content: "Trusted by families across Pakistan." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  // duplicate for infinite marquee
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow mb-6">Reviews</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
              Trusted by families <em className="not-italic gold-text">across Pakistan</em>.
            </h1>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={150}>
            <div className="flex items-center gap-2 text-gold">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-6 w-6 fill-current" />)}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Average client rating across reviewed projects.</p>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 overflow-hidden">
        <div className="group relative">
          <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {loop.map((r, i) => (
              <article
                key={`m-${i}`}
                className="w-[340px] sm:w-[400px] shrink-0 lux-card p-8 hover:lux-card-hover transition-all duration-500"
              >
                <Quote className="h-6 w-6 text-gold mb-4" />
                <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg">{r.name}</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{r.city}</p>
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of reviews */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <article className="lux-card p-8 h-full hover:lux-card-hover transition-all duration-500">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 text-foreground/85 leading-relaxed">"{r.text}"</p>
                <div className="mt-6">
                  <p className="font-display text-xl">{r.name}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{r.city}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
