import serviceConstruction from "@/assets/service-construction.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import service3d from "@/assets/service-3d.jpg";
import serviceExecution from "@/assets/service-execution.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export type ServiceSlug =
  | "construction"
  | "interior-design"
  | "exterior-design"
  | "3d-visualization"
  | "execution"
  | "expert-consultation";

export const SERVICES: {
  slug: ServiceSlug;
  title: string;
  short: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}[] = [
  {
    slug: "construction",
    title: "Construction",
    short: "Grey-structure to turnkey — engineered to last generations.",
    image: serviceConstruction,
    description:
      "From foundation to finishing, we deliver full-scope residential and commercial construction backed by certified engineers, premium materials, and uncompromising quality control on every site.",
    features: [
      "Foundation & RCC frame engineering",
      "Brickwork, plaster & waterproofing",
      "Plumbing & electrical rough-in",
      "Roofing, façades & finishing",
    ],
    benefits: [
      "Certified structural engineering",
      "Premium grade-A materials",
      "Transparent milestones & costing",
      "On-time, on-budget delivery",
    ],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    short: "Considered interiors that elevate everyday living.",
    image: serviceInterior,
    description:
      "Bespoke interior schemes tailored to your lifestyle — from custom joinery and lighting design to furniture curation, finishes, and styling that feel timeless and warm.",
    features: [
      "Space planning & moodboards",
      "Custom millwork & joinery",
      "Lighting & material selection",
      "Furniture curation & styling",
    ],
    benefits: [
      "Award-grade design language",
      "Premium suppliers & artisans",
      "End-to-end project management",
      "Photo-finished handover",
    ],
  },
  {
    slug: "exterior-design",
    title: "Exterior Design",
    short: "Façades that make a statement, landscapes that breathe.",
    image: serviceExterior,
    description:
      "Architectural façades, landscape design, and outdoor living spaces engineered for climate, light, and curb appeal. Stone, timber, glass and water — composed with intent.",
    features: [
      "Façade & elevation design",
      "Landscape & hardscape",
      "Pools, decks & lighting",
      "Boundary walls & gates",
    ],
    benefits: [
      "Climate-responsive detailing",
      "Premium cladding materials",
      "Increased property value",
      "Low-maintenance landscapes",
    ],
  },
  {
    slug: "3d-visualization",
    title: "3D Visualization",
    short: "See your home before a single brick is laid.",
    image: service3d,
    description:
      "Photoreal 3D renders and walkthroughs that let you experience materials, light and proportion in advance — eliminating guesswork and aligning every stakeholder.",
    features: [
      "Photoreal exterior renders",
      "Interior walkthroughs",
      "Material & lighting studies",
      "VR-ready 360° tours",
    ],
    benefits: [
      "Make decisions with confidence",
      "Approve once, build once",
      "Investor & family alignment",
      "Faster construction cycles",
    ],
  },
  {
    slug: "execution",
    title: "Project Execution",
    short: "Single point of accountability, end to end.",
    image: serviceExecution,
    description:
      "We manage architects, contractors, suppliers and inspections under one roof — so your project moves on a single timeline with a single point of accountability.",
    features: [
      "Dedicated project manager",
      "Vendor & supplier coordination",
      "Quality & safety inspections",
      "Weekly progress reporting",
    ],
    benefits: [
      "Zero coordination headaches",
      "Fewer change orders",
      "Cost & schedule control",
      "Documented handover",
    ],
  },
  {
    slug: "expert-consultation",
    title: "Expert Consultation",
    short: "Senior architects and engineers, on demand.",
    image: serviceConsultation,
    description:
      "Independent expert reviews of plans, BOQs, site conditions and material choices. Get a clear, unbiased opinion before you invest — or partner with us for the full build.",
    features: [
      "Site & feasibility studies",
      "Plan & BOQ review",
      "Material & finish guidance",
      "Cost & timeline forecasting",
    ],
    benefits: [
      "Independent expert opinion",
      "Avoid expensive mistakes",
      "Clear, costed roadmap",
      "Confidence to commit",
    ],
  },
];

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Exterior"
  | "Renovation"
  | "Luxury Villas";

export const PROJECTS: {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  description: string;
  image: string;
}[] = [
  {
    id: "p1",
    title: "Skyline Penthouse",
    location: "F-7, Islamabad",
    category: "Interior",
    description: "A 4,200 sq ft penthouse refit with custom walnut joinery, layered lighting and floor-to-ceiling glazing.",
    image: project1,
  },
  {
    id: "p2",
    title: "Stone & Glass Villa",
    location: "DHA Phase II, Islamabad",
    category: "Luxury Villas",
    description: "A modern stone-clad villa with a dramatic entry colonnade and warm interior glow at dusk.",
    image: project2,
  },
  {
    id: "p3",
    title: "Marble Tower Lobby",
    location: "Blue Area, Islamabad",
    category: "Commercial",
    description: "Twelve-storey commercial tower fit-out with marble façade and gallery-grade lobby experience.",
    image: project3,
  },
  {
    id: "p4",
    title: "Walnut Kitchen",
    location: "Bahria Town, Rawalpindi",
    category: "Interior",
    description: "Bespoke walnut and Calacatta marble kitchen with hand-finished brass hardware.",
    image: project4,
  },
  {
    id: "p5",
    title: "Heritage Refit",
    location: "Saddar, Rawalpindi",
    category: "Renovation",
    description: "Full structural and façade renovation of a 1990s home — modern silhouette, classic warmth.",
    image: project5,
  },
  {
    id: "p6",
    title: "Hillcrest Retreat",
    location: "Murree Hills",
    category: "Luxury Villas",
    description: "A hillside retreat with infinity pool, cantilevered terraces and uninterrupted valley views.",
    image: project6,
  },
];

export const GALLERY: { id: string; src: string; category: string; alt: string; ratio: "tall" | "wide" | "square" }[] = [
  { id: "g1", src: gallery1, category: "Interior", alt: "Marble bathroom with brass fittings", ratio: "tall" },
  { id: "g2", src: project2, category: "Exterior", alt: "Stone villa entrance at dusk", ratio: "wide" },
  { id: "g3", src: gallery2, category: "Interior", alt: "Floating wooden staircase", ratio: "tall" },
  { id: "g4", src: project4, category: "Interior", alt: "Walnut kitchen with marble island", ratio: "wide" },
  { id: "g5", src: service3d, category: "3D Designs", alt: "3D rendering of luxury villa", ratio: "wide" },
  { id: "g6", src: project1, category: "Luxury Homes", alt: "Designer bedroom with city view", ratio: "wide" },
  { id: "g7", src: serviceExecution, category: "Construction", alt: "Construction crew on premium site", ratio: "wide" },
  { id: "g8", src: project6, category: "Luxury Homes", alt: "Hillside villa with infinity pool", ratio: "wide" },
  { id: "g9", src: gallery3, category: "Office Spaces", alt: "Premium office interior", ratio: "wide" },
  { id: "g10", src: serviceExterior, category: "Exterior", alt: "Modern villa exterior at dusk", ratio: "wide" },
  { id: "g11", src: serviceInterior, category: "Interior", alt: "Beige luxury living room", ratio: "wide" },
  { id: "g12", src: serviceConstruction, category: "Construction", alt: "Luxury home under construction", ratio: "wide" },
];

export const REVIEWS = [
  { name: "Ahmed Khan", city: "Islamabad", text: "Zeeya Home transformed our house beyond our expectations. Their team was professional, punctual, and delivered exceptional quality." },
  { name: "Fatima Ali", city: "Rawalpindi", text: "The interior design exceeded everything we imagined. Every detail was handled perfectly." },
  { name: "Usman Sheikh", city: "Islamabad", text: "The construction process was transparent and stress-free. Highly recommended." },
  { name: "Ayesha Malik", city: "Lahore", text: "Their 3D visualization helped us see our dream home before construction even started." },
  { name: "Bilal Hussain", city: "Islamabad", text: "Excellent workmanship, premium materials, and timely delivery. Outstanding experience." },
  { name: "Zainab Ahmed", city: "Rawalpindi", text: "The exterior design completely changed the look of our home. Amazing team." },
  { name: "Hamza Tariq", city: "Karachi", text: "Professional communication and excellent execution from start to finish." },
  { name: "Sana Riaz", city: "Islamabad", text: "They delivered exactly what they promised. I would definitely recommend Zeeya Home." },
];

export const FAQS = [
  { q: "What services do you offer?", a: "Construction, interior design, exterior design, 3D visualization, project execution, and expert consultation — covered end-to-end under one roof." },
  { q: "Do you work outside Islamabad?", a: "Yes. We are headquartered in Islamabad and undertake projects in Rawalpindi and nationwide across Pakistan." },
  { q: "Can you build complete houses?", a: "Absolutely. We deliver turnkey homes — from architectural drawings and approvals to grey structure, finishing, interiors and landscaping." },
  { q: "Do you provide interior and exterior design?", a: "Yes. Both interior and exterior design are core services. We can deliver them independently or as part of a full build." },
  { q: "How long does a project take?", a: "A typical 1-kanal residential build runs 9–14 months; interior fit-outs run 6–12 weeks. Every project gets a detailed timeline at consultation." },
  { q: "Can I request only 3D visualization?", a: "Yes. We offer 3D visualization as a standalone service — photoreal exterior renders, interior walkthroughs and VR-ready 360° tours." },
  { q: "How do consultations work?", a: "Book a consultation through the website or WhatsApp. We discuss your scope, site and budget, then deliver a costed roadmap within 5 working days." },
  { q: "How do I book a project?", a: "Use the Book Consultation page — it sends your brief directly to our team on WhatsApp at 0316 1787017. We respond within one working day." },
];

export const WHY = [
  { title: "Expert Engineers", text: "Certified structural and MEP engineers on every project, not just consultants." },
  { title: "Professional Designers", text: "Award-grade architects and interior designers leading every brief." },
  { title: "Quality Materials", text: "Only grade-A, specified materials from vetted suppliers — every time." },
  { title: "Modern Techniques", text: "Contemporary construction methods, digital tools, and rigorous QA." },
  { title: "Transparent Pricing", text: "Itemised BOQs and milestone-based billing — no surprises, ever." },
  { title: "Timely Delivery", text: "Documented schedules, weekly progress reports, on-time handover." },
  { title: "Nationwide Service", text: "Mobilised teams across Islamabad, Rawalpindi and nationwide Pakistan." },
  { title: "Turnkey Solutions", text: "From first sketch to keys-in-hand — one team, one accountability." },
  { title: "Lifetime Support", text: "Post-handover care, snagging and maintenance partnerships." },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Cities Served" },
  { value: 40, suffix: "+", label: "Professional Team" },
];

export const PROCESS = [
  { step: "01", title: "Consultation", text: "We listen first — scope, lifestyle, site, budget and aspirations." },
  { step: "02", title: "Design & Drawings", text: "Architects translate your brief into plans, elevations and material palettes." },
  { step: "03", title: "3D Visualization", text: "Walk through your home in photoreal 3D before approval." },
  { step: "04", title: "Costing & Schedule", text: "Itemised BOQ, milestones and a transparent contract." },
  { step: "05", title: "Construction", text: "Certified engineers, premium materials, weekly progress reports." },
  { step: "06", title: "Handover & Care", text: "Photo-finished handover plus snagging and post-handover support." },
];

export const VALUES = [
  { title: "Craft", text: "We obsess over the millimetre. Joinery, joint lines, lighting angles." },
  { title: "Trust", text: "Transparent costing, documented progress, and a single accountable team." },
  { title: "Longevity", text: "Materials and details chosen so your home looks better at year ten than year one." },
  { title: "Service", text: "We answer the phone. We turn up. We finish what we start." },
];
