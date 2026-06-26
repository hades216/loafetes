import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PROJECTS, type ProjectCategory } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import { MapPin } from "lucide-react";

const CATEGORIES: ("All" | ProjectCategory)[] = ["All", "Residential", "Commercial", "Interior", "Exterior", "Renovation", "Luxury Villas"];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Premium Portfolio | Zeeya Home" },
      { name: "description", content: "Selected projects across residential, commercial, interior, exterior, renovation and luxury villas." },
      { property: "og:title", content: "Projects | Zeeya Home" },
      { property: "og:description", content: "A premium portfolio of homes, commercial spaces and luxury villas." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(() => (cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat)), [cat]);

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-6">Portfolio</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98] max-w-4xl">
              Selected work — <em className="not-italic gold-text">quietly extraordinary</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.22em] border transition-all duration-500 ${
                cat === c
                  ? "bg-ink text-background border-ink"
                  : "border-border hover:bg-ink hover:text-background hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <button
                onClick={() => setActive(PROJECTS.indexOf(p))}
                className="group block w-full text-left lux-card overflow-hidden hover:lux-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] uppercase tracking-[0.25em] text-ink">{p.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </p>
                  <p className="mt-3 text-sm text-foreground/75 line-clamp-2">{p.description}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        items={PROJECTS.map((p) => ({ src: p.image, alt: p.title, title: p.title, subtitle: `${p.category} · ${p.location}`, description: p.description }))}
        index={active}
        onClose={() => setActive(null)}
        onIndex={setActive}
      />
    </>
  );
}
