import Image from "next/image";

export default function ServiceCard({ service, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className="service-card"
      id={`service-${number}`}
      data-service-index={index}
    >
      <div className="service-copy">
        <p className="service-number">/{number}</p>
        <h3>{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <p className="service-features">{service.features}</p>
      </div>
      <div className="service-image-wrap">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 809px) calc(100vw - 32px), 30vw"
        />
      </div>
      {index === 3 ? <span className="service-indicator">01 / 04</span> : null}
    </article>
  );
}
