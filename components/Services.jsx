import SectionLabel from "./SectionLabel";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Objektschutz",
    description: "Zuverlässiger Schutz für Gebäude, Gelände und sensible Bereiche.",
    features: "Zutritt · Kontrollgänge · Schließdienste",
    image: "/images/service-object.avif",
    alt: "Überwachungskamera an einer Gebäudefassade",
  },
  {
    title: "Veranstaltungsschutz",
    description: "Sichere Abläufe für Veranstaltungen jeder Größenordnung.",
    features: "Einlass · Besucher · Konfliktprävention",
    image: "/images/service-event.avif",
    alt: "Beleuchteter Veranstaltungsraum",
  },
  {
    title: "Empfangs- und Kontrolldienste",
    description: "Professioneller Empfang und kontrollierter Zugang zu Ihren Räumen.",
    features: "Empfang · Ausweise · Schlüssel",
    image: "/images/service-reception.avif",
    alt: "Sicherheitsmitarbeiter bei einer Zugangskontrolle",
  },
  {
    title: "Revier- und Streifendienst",
    description: "Kontrollfahrten sichern Ihre Objekte und klären Auffälligkeiten schnell.",
    features: "Kontrollen · Verschlüsse · Alarmverfolgung",
    image: "/images/service-patrol.avif",
    alt: "Sicherheitskontrolle auf einem Außengelände",
  },
];

export default function Services() {
  return (
    <section className="services" id="service" aria-labelledby="services-title">
      <div className="services-layout">
        <div className="services-intro">
          <SectionLabel light>Leistungen</SectionLabel>
          <h2 id="services-title">Was wir schützen</h2>
          <p>Sicherheit beginnt mit einem verlässlichen Partner.</p>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
