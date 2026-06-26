import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | Zeeya Home" },
      { name: "description", content: "Book a free consultation with Zeeya Home. Tell us about your project — we'll come back with a clear, costed roadmap." },
      { property: "og:title", content: "Book Consultation | Zeeya Home" },
      { property: "og:description", content: "Free 30-minute consultation. Clear roadmap within 5 working days." },
    ],
  }),
  component: BookPage,
});

const BUDGETS = ["Under 50 Lakhs", "50 Lakhs – 1 Crore", "1 – 3 Crores", "3 – 10 Crores", "10+ Crores"];
const PROJECT_TYPES = ["New Build", "Renovation", "Interior Only", "Exterior Only", "Commercial", "Other"];

function BookPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", whatsapp: "", email: "",
    service: SERVICES[0].title, date: "", time: "",
    location: "", budget: BUDGETS[1], type: PROJECT_TYPES[0], notes: "",
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = [
      "Hello Zeeya Home,",
      "I would like to book a consultation.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.whatsapp ? `WhatsApp: ${form.whatsapp}` : null,
      form.email ? `Email: ${form.email}` : null,
      `Service: ${form.service}`,
      `Location: ${form.location}`,
      `Preferred Date: ${form.date}`,
      `Preferred Time: ${form.time}`,
      `Budget: ${form.budget}`,
      `Project Type: ${form.type}`,
      form.notes ? `Additional Details: ${form.notes}` : null,
      "",
      "Please contact me regarding my project.",
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <section className="pt-40 pb-12 lg:pt-48">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow mb-6">Book Consultation</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
              Tell us about your <em className="not-italic gold-text">project</em>.
            </h1>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={150}>
            <p className="text-muted-foreground leading-relaxed">
              We'll send your brief straight to our team on WhatsApp at <span className="text-foreground">{SITE.phone}</span> and reply within one working day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-8">
            {sent ? (
              <div className="lux-card p-12 text-center animate-zoom-in">
                <CheckCircle2 className="h-16 w-16 text-gold mx-auto" />
                <h2 className="mt-6 font-display text-3xl">Request prepared</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  WhatsApp has opened with your consultation request ready to send. Tap Send to deliver it directly to our team.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button onClick={() => setSent(false)} className="btn-ghost">New request</button>
                  <Link to="/" className="btn-gold">Return home <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="lux-card p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" required>
                  <input required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls} placeholder="Your name" />
                </Field>
                <Field label="Phone Number" required>
                  <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} placeholder="03xx xxxxxxx" />
                </Field>
                <Field label="WhatsApp Number">
                  <input type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputCls} placeholder="Same as phone" />
                </Field>
                <Field label="Email">
                  <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} placeholder="you@example.com" />
                </Field>
                <Field label="Select Service" required>
                  <select required value={form.service} onChange={(e) => update("service", e.target.value)} className={inputCls}>
                    {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                  </select>
                </Field>
                <Field label="Project Type">
                  <select value={form.type} onChange={(e) => update("type", e.target.value)} className={inputCls}>
                    {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Date">
                  <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={inputCls} />
                </Field>
                <Field label="Preferred Time">
                  <input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className={inputCls} />
                </Field>
                <Field label="Project Location" className="sm:col-span-2">
                  <input value={form.location} onChange={(e) => update("location", e.target.value)} className={inputCls} placeholder="City, area" />
                </Field>
                <Field label="Budget Range" className="sm:col-span-2">
                  <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputCls}>
                    {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </Field>
                <Field label="Additional Notes" className="sm:col-span-2">
                  <textarea rows={5} value={form.notes} onChange={(e) => update("notes", e.target.value)} className={inputCls} placeholder="Tell us more about your vision..." />
                </Field>

                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">Submitting opens WhatsApp with your request prefilled.</p>
                  <button type="submit" className="btn-gold">Send via WhatsApp <ArrowRight className="h-4 w-4" /></button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal className="lg:col-span-4" delay={150}>
            <div className="lux-card p-8 sticky top-28">
              <h3 className="font-display text-2xl">What happens next</h3>
              <ol className="mt-6 space-y-5">
                {[
                  { t: "We reply within 1 working day", d: "Usually within a few hours during business time." },
                  { t: "We schedule a 30-minute call", d: "Or an in-person visit if you're in Islamabad / Rawalpindi." },
                  { t: "You get a costed roadmap", d: "Itemised scope, schedule and price within 5 working days." },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="grid place-items-center h-8 w-8 rounded-full bg-ink text-background text-xs font-display shrink-0">{i + 1}</span>
                    <div>
                      <p className="font-medium">{s.t}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 p-5 rounded-2xl bg-secondary/60">
                <p className="text-xs uppercase tracking-[0.22em] text-charcoal">Prefer to talk?</p>
                <a href={`tel:${SITE.phoneIntl}`} className="mt-2 block font-display text-2xl link-underline">{SITE.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300";

function Field({ label, children, required, className = "" }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[11px] uppercase tracking-[0.22em] text-charcoal">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
