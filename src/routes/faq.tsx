import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FAQS } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Common Questions | Zeeya Home" },
      { name: "description", content: "Answers to common questions about Zeeya Home's services, areas covered, project timelines and consultations." },
      { property: "og:title", content: "FAQ | Zeeya Home" },
      { property: "og:description", content: "Common questions about Zeeya Home — answered." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow mb-6">FAQ</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
              Questions, <em className="not-italic gold-text">answered</em>.
            </h1>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={150}>
            <p className="text-muted-foreground leading-relaxed">
              Can't find what you're looking for? <Link to="/contact" className="link-underline text-foreground">Contact us</Link> — we usually reply within one working day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x max-w-3xl">
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 40}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left py-6 flex items-center justify-between gap-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl sm:text-2xl transition-colors duration-300 group-hover:text-gold">{f.q}</span>
                    <Plus className={`h-5 w-5 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-45 text-gold" : ""}`} />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-foreground/75 leading-relaxed max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
