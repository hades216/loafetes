import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zeeya Home — Islamabad" },
      { name: "description", content: "Get in touch with Zeeya Home. Phone, address, working areas and a Google Map to our office in Islamabad." },
      { property: "og:title", content: "Contact | Zeeya Home" },
      { property: "og:description", content: "Phone, address and message form — let's build your dream home." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = [
      "Hello Zeeya Home,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      "",
      "Message:",
      form.message,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow mb-6">Contact</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
              Let's build your <em className="not-italic gold-text">dream home</em>.
            </h1>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={150}>
            <p className="text-muted-foreground leading-relaxed">
              We're based in Islamabad and work across Pakistan. Reach out for a free consultation — we usually reply within one working day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-3 gap-6">
          {[
            { icon: Phone, title: "Call us", body: SITE.phone, href: `tel:${SITE.phoneIntl}` },
            { icon: MapPin, title: "Visit us", body: `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}` },
            { icon: Clock, title: "Working areas", body: SITE.coverage.join(" · ") },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="group lux-card p-8 h-full hover:lux-card-hover">
                <c.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-charcoal">{c.title}</p>
                {c.href ? (
                  <a href={c.href} className="mt-2 block font-display text-2xl link-underline">{c.body}</a>
                ) : (
                  <p className="mt-2 font-display text-2xl">{c.body}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-32">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <Reveal>
            {sent ? (
              <div className="lux-card p-12 text-center animate-zoom-in h-full grid place-items-center">
                <div>
                  <CheckCircle2 className="h-16 w-16 text-gold mx-auto" />
                  <h2 className="mt-6 font-display text-3xl">Message ready</h2>
                  <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                    WhatsApp has opened with your message. Tap Send to deliver it directly to our team.
                  </p>
                  <button onClick={() => setSent(false)} className="mt-8 btn-ghost">Send another</button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="lux-card p-8 sm:p-10 space-y-5">
                <h2 className="font-display text-3xl">Send a message</h2>
                <Field label="Name" required>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your name" />
                </Field>
                <Field label="Phone" required>
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="03xx xxxxxxx" />
                </Field>
                <Field label="Email">
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@example.com" />
                </Field>
                <Field label="Message" required>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} placeholder="Tell us about your project..." />
                </Field>
                <button type="submit" className="btn-gold w-full sm:w-auto">Send message <Send className="h-4 w-4" /></button>
              </form>
            )}
          </Reveal>

          <Reveal delay={150}>
            <div className="lux-card overflow-hidden h-full min-h-[460px]">
              <iframe
                title="Zeeya Home location"
                src="https://www.google.com/maps?q=DHA+Phase+II+Main+GT+Road+Islamabad+Pakistan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[460px] border-0 grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300";

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.22em] text-charcoal">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
