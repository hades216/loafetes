import logoAsset from "@/assets/zeeya-logo.png.asset.json";

export const SITE = {
  name: "Zeeya Home",
  tagline: "Complete Home Solutions",
  phone: "0316 1787017",
  phoneIntl: "+923161787017",
  whatsapp: "923161787017",
  address: {
    line1: "Opposite DHA Phase II",
    line2: "Main GT Road",
    city: "Islamabad",
    country: "Pakistan",
    postal: "54000",
  },
  coverage: ["Islamabad", "Rawalpindi", "Nationwide Projects"],
  logoUrl: logoAsset.url,
  socials: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "YouTube", href: "https://youtube.com" },
  ],
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
