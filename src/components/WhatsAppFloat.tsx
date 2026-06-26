import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Zeeya Home, I'd like to know more about your services.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-luxury hover:scale-110 transition-transform duration-300 animate-float"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
