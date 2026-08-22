import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/images/hero.webp"
        alt="Moderner Arbeitsraum in einer Felsenlandschaft"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-intro">
          <p>
            Ihre Sicherheit steht bei uns an erster Stelle. Diskret, professionell
            und rund um die Uhr für Sie im Einsatz.
          </p>
          <a className="text-cta text-cta-light" href="/contact#contact">
            <span>Jetzt Anfragen</span>
            <ArrowUpRight className="cta-icon" aria-hidden="true" />
          </a>
        </div>
        <h1 id="hero-title">
          Aktay Protection<sup>®</sup>
        </h1>
      </div>
    </section>
  );
}
