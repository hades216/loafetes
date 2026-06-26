import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GALLERY } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import { Maximize2 } from "lucide-react";

const CATS = ["All", "Construction", "Interior", "Exterior", "3D Designs", "Luxury Homes", "Office Spaces"];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Premium Architecture & Interiors | Zeeya Home" },
      { name: "description", content: "A curated gallery of construction, interior, exterior, 3D designs, luxury homes and office spaces by Zeeya Home." },
      { property: "og:title", content: "Gallery | Zeeya Home" },
      { property: "og:description", content: "A curated visual archive of our work." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);
  const filtered = useMemo(() => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat)), [cat]);

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-6">Gallery</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98] max-w-4xl">
              A <em className="not-italic gold-text">curated</em> visual archive.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.22em] border transition-all duration-500 ${
                cat === c ? "bg-ink text-background border-ink" : "border-border hover:bg-ink hover:text-background hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {filtered.map((g, i) => (
            <Reveal key={g.id} delay={i * 40} className="mb-6 break-inside-avoid">
              <button
                onClick={() => setActive(GALLERY.indexOf(g))}
                className="group relative block w-full overflow-hidden rounded-2xl bg-secondary"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-background opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{g.category}</p>
                  <p className="mt-1 text-sm">{g.alt}</p>
                </div>
                <span className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-ink">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        items={GALLERY.map((g) => ({ src: g.src, alt: g.alt, title: g.alt, subtitle: g.category }))}
        index={active}
        onClose={() => setActive(null)}
        onIndex={setActive}
      />
    </>
  );
}
