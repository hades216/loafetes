import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = index !== null;
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex(((index ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex(((index ?? 0) - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, items.length, onClose, onIndex]);

  if (!open) return null;
  const item = items[index!];

  return (
    <div className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 animate-fade-in-slow">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-background/10 text-background hover:bg-gold hover:text-ink transition-all duration-300"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        aria-label="Previous"
        onClick={() => onIndex(((index ?? 0) - 1 + items.length) % items.length)}
        className="absolute left-4 sm:left-8 grid place-items-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-gold hover:text-ink transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next"
        onClick={() => onIndex(((index ?? 0) + 1) % items.length)}
        className="absolute right-4 sm:right-8 grid place-items-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-gold hover:text-ink transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <figure className="max-w-6xl w-full animate-zoom-in">
        <img src={item.src} alt={item.alt} className="w-full max-h-[80vh] object-contain rounded-xl" />
        {(item.title || item.description) && (
          <figcaption className="mt-5 text-background text-center">
            {item.title && <p className="font-display text-2xl">{item.title}</p>}
            {item.subtitle && <p className="text-xs uppercase tracking-[0.25em] text-gold mt-1">{item.subtitle}</p>}
            {item.description && <p className="mt-2 text-background/75 max-w-2xl mx-auto">{item.description}</p>}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
