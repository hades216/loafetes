import { useEffect, useRef } from "react";
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
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex(((index ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex(((index ?? 0) - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [open, index, items.length, onClose, onIndex]);

  if (!open) return null;
  const item = items[index!];

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    touchStart.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) onIndex(((index ?? 0) + 1) % items.length);
      else onIndex(((index ?? 0) - 1 + items.length) % items.length);
    } else if (dy > 80 && Math.abs(dy) > Math.abs(dx)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-10 animate-fade-in-slow"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-5 sm:right-5 grid place-items-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-gold hover:text-ink transition-all duration-300 z-10"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        aria-label="Previous"
        onClick={(e) => { e.stopPropagation(); onIndex(((index ?? 0) - 1 + items.length) % items.length); }}
        className="absolute left-2 sm:left-8 grid place-items-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-gold hover:text-ink transition-all duration-300 z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="Next"
        onClick={(e) => { e.stopPropagation(); onIndex(((index ?? 0) + 1) % items.length); }}
        className="absolute right-2 sm:right-8 grid place-items-center h-12 w-12 rounded-full bg-background/10 text-background hover:bg-gold hover:text-ink transition-all duration-300 z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <figure className="max-w-6xl w-full animate-zoom-in select-none">
        <img
          src={item.src}
          alt={item.alt}
          draggable={false}
          className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-xl"
        />
        {(item.title || item.description) && (
          <figcaption className="mt-4 sm:mt-5 text-background text-center px-2">
            {item.title && <p className="font-display text-xl sm:text-2xl">{item.title}</p>}
            {item.subtitle && <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold mt-1">{item.subtitle}</p>}
            {item.description && <p className="mt-2 text-sm sm:text-base text-background/75 max-w-2xl mx-auto">{item.description}</p>}
          </figcaption>
        )}
        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-background/40 sm:hidden">Swipe ← →</p>
      </figure>
    </div>
  );
}
