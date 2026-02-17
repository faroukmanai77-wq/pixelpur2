import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { count, ref };
}

const stats = [
  { value: 10, suffix: "+", label: "Projets livrés" },
  { value: 10, suffix: "+", label: "Clients satisfaits" },
  { value: 3, suffix: "+", label: "Années d'expérience" },
];

const StatsBanner = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-card/50">
      <div className="container">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat) => {
            const { count, ref } = useCountUp(stat.value);
            return (
              <div key={stat.label} ref={ref} className="text-center">
                <div className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-gradient mb-1 md:mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
