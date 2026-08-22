"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

const coordinates = "52.41151859650407,12.54747794570078";
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`;

export default function ConsentMap() {
  const [allowed, setAllowed] = useState(false);

  if (allowed) {
    return (
      <div className="contact-map">
        <iframe
          src={`https://maps.google.com/maps?q=${coordinates}&z=16&output=embed`}
          title="Standort von Aktay Protection in Brandenburg an der Havel"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          className="contact-map-link"
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span>In Google Maps öffnen</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <div className="contact-map contact-map-consent">
      <MapPin className="contact-map-pin" aria-hidden="true" />
      <div className="contact-map-consent-copy">
        <strong>Google Maps anzeigen</strong>
        <p>
          Die Karte wird erst nach Ihrer Zustimmung geladen. Dabei werden Daten an
          Google übermittelt.
        </p>
      </div>
      <div className="contact-map-actions">
        <button type="button" onClick={() => setAllowed(true)}>
          Karte laden
        </button>
        <a href={directionsUrl} target="_blank" rel="noreferrer">
          Nur Link öffnen
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
