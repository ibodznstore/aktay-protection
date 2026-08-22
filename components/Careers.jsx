"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

const BASIN_ENDPOINT = "https://usebasin.com/f/fe98cd7a463e";
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export default function Careers() {
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitApplication = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setStatusType("error");
      setStatus("Bitte wählen Sie einen Lebenslauf aus.");
      return;
    }

    const extensionIsAllowed = /\.(pdf|docx)$/i.test(resume.name);
    const typeIsAllowed = !resume.type || ALLOWED_FILE_TYPES.has(resume.type);

    if (!extensionIsAllowed || !typeIsAllowed) {
      setStatusType("error");
      setStatus("Bitte laden Sie Ihren Lebenslauf als PDF- oder DOCX-Datei hoch.");
      return;
    }

    if (resume.size > MAX_FILE_SIZE) {
      setStatusType("error");
      setStatus("Die Datei ist zu groß. Die maximale Dateigröße beträgt 10 MB.");
      return;
    }

    setIsSubmitting(true);
    setStatusType("");
    setStatus("Ihre Bewerbung wird gesendet …");

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
      setFileName("");
      setStatusType("success");
      setStatus("Vielen Dank. Ihre Bewerbung wurde erfolgreich gesendet.");
    } catch {
      setStatusType("error");
      setStatus(
        "Ihre Bewerbung konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder senden Sie uns eine E-Mail.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="careers" id="careers" aria-labelledby="careers-title">
      <div className="careers-panel">
        <div className="careers-copy" data-reveal>
          <SectionLabel>Karriere</SectionLabel>
          <h2 id="careers-title">Bewerben Sie sich jetzt</h2>
          <p>
            Unsere Tätigkeit im Bewachungsgewerbe beginnt nach Erteilung der
            erforderlichen Erlaubnis gemäß §34a GewO
          </p>
        </div>

        <form
          className="application-form"
          action={BASIN_ENDPOINT}
          method="POST"
          encType="multipart/form-data"
          acceptCharset="UTF-8"
          onSubmit={submitApplication}
          data-reveal
        >
          <input type="hidden" name="_gotcha" value="" />
          <label>
            <span>Nachricht</span>
            <textarea
              name="message"
              rows="3"
              maxLength="2500"
              placeholder="Erzähle uns kurz, warum du zu uns passt."
              required
            />
          </label>

          <label className="upload-field">
            <input
              name="resume"
              type="file"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              aria-describedby="resume-help"
              required
              onChange={(event) => {
                setFileName(event.target.files?.[0]?.name || "");
                setStatus("");
                setStatusType("");
              }}
            />
            <span>
              <strong>Lebenslauf hochladen</strong>
              <small id="resume-help">{fileName || "PDF oder DOCX · maximal 10 MB"}</small>
            </span>
            <span className="upload-plus" aria-hidden="true">+</span>
          </label>

          <label className="consent-field">
            <input name="privacy" type="checkbox" required />
            <span>
              Ich habe die {" "}
              <a href="/legals/datenschutz#bewerbung">Datenschutzhinweise für Bewerbungen</a>
              {" "}zur Kenntnis genommen.
            </span>
          </label>

          <button className="submit-button" type="submit" disabled={isSubmitting}>
            <span>{isSubmitting ? "Wird gesendet …" : "Senden"}</span>
            <ArrowUpRight className="button-icon" aria-hidden="true" />
          </button>
          {status ? (
            <p
              className={`form-status${statusType ? ` is-${statusType}` : ""}`}
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
