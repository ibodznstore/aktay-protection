"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const serviceOptions = [
  "Objektschutz",
  "Veranstaltungsschutz",
  "Empfangs- und Kontrolldienste",
  "Revier- und Streifendienst",
  "Baustellenbewachung",
  "Videoüberwachung",
  "Doormen- und Pfortendienste",
  "Andere Anfrage",
];

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const submitContact = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Kontaktanfrage – ${form.get("service")}`;
    const body = [
      `Name: ${form.get("name") || "–"}`,
      `E-Mail: ${form.get("email")}`,
      `Leistung: ${form.get("service")}`,
      "",
      form.get("message") || "Keine zusätzliche Nachricht.",
    ].join("\n");

    setStatus("Ihr E-Mail-Programm wird geöffnet. Die Nachricht wird erst nach Ihrer Bestätigung versendet.");
    window.location.href = `mailto:aktayprotection@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={submitContact}>
      <label className="contact-field">
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" />
      </label>

      <label className="contact-field">
        <span>E-Mail</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane.smith@gmail.com"
          required
        />
      </label>

      <label className="contact-field">
        <span>Leistung</span>
        <span className="contact-select">
          <select name="service" defaultValue="" required>
            <option value="" disabled>Wählen…</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <ChevronDown className="contact-select-icon" aria-hidden="true" />
        </span>
      </label>

      <label className="contact-field">
        <span>Nachricht</span>
        <textarea
          name="message"
          rows="5"
          placeholder="Erzählen Sie uns von Ihrem Projekt"
        />
      </label>

      <button className="contact-submit" type="submit">
        <span>Senden</span>
        <ArrowUpRight aria-hidden="true" />
      </button>
      {status ? <p className="contact-form-status" role="status">{status}</p> : null}
    </form>
  );
}
