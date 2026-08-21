import SectionLabel from "./SectionLabel";
import Stats from "./Stats";

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-grid">
        <div data-reveal>
          <SectionLabel>Über uns</SectionLabel>
        </div>
        <div className="about-copy" data-reveal>
          <h2 id="about-title">Sicherheit beginnt mit Vertrauen.</h2>
          <p>
            Die Aktay Al Zahab Protection GmbH steht für Zuverlässigkeit,
            Verantwortungsbewusstsein und professionellen Schutz.
          </p>
          <p>
            Gegründet wurde das Unternehmen von Fadi Al Dahab. In Syrien geboren und
            seit vielen Jahren in Deutschland zu Hause, hat er sich im
            Sicherheitsgewerbe fachlich weiterqualifiziert und die Sachkundeprüfung
            nach § 34a GewO erfolgreich abgelegt.
          </p>
          <p>
            Mit der Gründung der Aktay Al Zahab Protection GmbH verfolgt er ein
            klares Ziel: Sicherheitsdienstleistungen persönlich, zuverlässig und
            professionell anzubieten.
          </p>
          <p>
            Unser Anspruch ist es, für jeden Auftrag eine passende Sicherheitslösung
            zu finden, mit direkter Kommunikation, verantwortungsbewusstem Handeln
            und einem hohen Maß an Diskretion.
          </p>
        </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
