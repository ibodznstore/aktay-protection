"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ServiceCard({ service, index }) {
  const slides = service.slides || [service];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = slides[activeIndex];
  const number = activeService.number || String(index + 1).padStart(2, "0");
  const isCarousel = slides.length > 1;

  const showNextService = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const nextService = slides[(activeIndex + 1) % slides.length];

  return (
    <article
      className={`service-card ${isCarousel ? "service-card-carousel" : ""}`}
      id={`service-${String(index + 1).padStart(2, "0")}`}
      data-service-index={index}
    >
      <div className="service-copy" aria-live={isCarousel ? "polite" : undefined}>
        <div className="service-slide-copy" key={activeService.number || activeService.title}>
          <p className="service-number">/{number}</p>
          <h3>{activeService.title}</h3>
          <p className="service-description">{activeService.description}</p>
          <p className="service-features">{activeService.features}</p>
        </div>
      </div>
      <div className="service-image-wrap">
        <div className="service-slide-image" key={activeService.image}>
          <Image
            src={activeService.image}
            alt={activeService.alt}
            fill
            sizes="(max-width: 809px) calc(100vw - 32px), 30vw"
          />
        </div>
        {isCarousel ? (
          <button
            className="service-carousel-control"
            type="button"
            onClick={showNextService}
            aria-label={`Nächste Leistung: ${nextService.title}`}
          >
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            <span className="service-carousel-arrow" aria-hidden="true">
              <ArrowRight />
            </span>
          </button>
        ) : null}
      </div>
    </article>
  );
}
