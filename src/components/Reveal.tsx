import { useEffect, useRef, useState, type ReactNode } from "react";

// Lightweight scroll-reveal: fades + slides element up when it enters viewport.
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` }}
      className={`${className} ${shown ? "animate-fade-up" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
