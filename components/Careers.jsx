"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function Careers() {
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");

  const submitApplication = (event) => {
    event.preventDefault();

    // Connect a real application endpoint here. Until then no applicant data is sent.
    setStatus(
      "Noch nicht versendet: Bitte verbinden Sie das Formular vor dem Launch mit Ihrem sicheren Bewerbungs-Backend.",
    );
  };

  return (
    <section className="careers" id="contact" aria-labelledby="careers-title">
      <div className="careers-panel">
        <div className="careers-copy" data-reveal>
          <SectionLabel>Karriere</SectionLabel>
          <h2 id="careers-title">Bewerben Sie sich jetzt</h2>
          <p>
            Unsere Tätigkeit im Bewachungsgewerbe beginnt nach Erteilung der
            erforderlichen Erlaubnis gemäß §34a GewO
          </p>
        </div>

        <form className="application-form" onSubmit={submitApplication} data-reveal>
          <label>
            <span>Nachricht</span>
            <textarea
              name="message"
              rows="3"
              placeholder="Erzähle uns kurz, warum du zu uns passt."
              required
            />
          </label>

          <label className="upload-field">
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
            />
            <span>
              <strong>Lebenslauf hochladen</strong>
              <small>{fileName || "PDF oder DOCX · Datei auswählen"}</small>
            </span>
            <span className="upload-plus" aria-hidden="true">+</span>
          </label>

          <label className="consent-field">
            <input name="privacy" type="checkbox" required />
            <span>
              Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung
              meiner Daten für diese Bewerbung zu.
            </span>
          </label>

          <button className="submit-button" type="submit">
            <span>Senden</span>
            <ArrowUpRight className="button-icon" aria-hidden="true" />
          </button>
          {status ? <p className="form-status" role="status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
