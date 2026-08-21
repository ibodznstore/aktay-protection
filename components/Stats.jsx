"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1, suffix: "+", label: "Jahre Erfahrung" },
  { value: 1, suffix: "+", label: "Erfolgreiche Einsätze" },
  { value: 100, suffix: "%", label: "Kundenzufriedenheit" },
];

export default function Stats() {
  const rootRef = useRef(null);
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const duration = 1250;
        const animate = (now) => {
          const raw = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - raw, 3);
          setValues(stats.map((stat) => Math.round(stat.value * eased)));
          if (raw < 1) frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(root);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="stats" ref={rootRef} aria-label="Unternehmenskennzahlen">
      {stats.map((stat, index) => (
        <div className="stat" key={stat.label}>
          <p className="stat-value" aria-label={`${stat.value}${stat.suffix}`}>
            <span>{values[index]}</span>
            <sup>{stat.suffix}</sup>
          </p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
