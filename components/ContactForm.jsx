"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const BASIN_ENDPOINT = "https://usebasin.com/f/fe98cd7a463e";

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
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatusType("");
    setStatus("Ihre Anfrage wird gesendet …");

    try {
      const response = await fetch(BASIN_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Basin returned ${response.status}`);
      }

      form.reset();
      setStatusType("success");
      setStatus("Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet.");
    } catch {
      setStatusType("error");
      setStatus(
        "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder senden Sie uns eine E-Mail.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="contact-form"
      action={BASIN_ENDPOINT}
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={submitContact}
    >
      <input type="hidden" name="_gotcha" value="" />
      <input type="hidden" name="formular" value="Kontaktanfrage" />
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

      <p className="contact-form-privacy">
        Mit dem Absenden gelten unsere {" "}
        <a href="/legals/datenschutz#kontakt">Datenschutzhinweise zur Kontaktaufnahme</a>.
      </p>

      <button className="contact-submit" type="submit" disabled={isSubmitting}>
        <span>{isSubmitting ? "Wird gesendet …" : "Senden"}</span>
        <ArrowUpRight aria-hidden="true" />
      </button>
      {status ? (
        <p
          className={`contact-form-status${statusType ? ` is-${statusType}` : ""}`}
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      ) : null}
    </form>
  );
}
