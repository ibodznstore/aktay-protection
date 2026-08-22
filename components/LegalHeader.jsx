import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function LegalHeader({
  backHref = "/",
  backLabel = "Zurück zur Startseite",
}) {
  return (
    <header className="legal-header">
      <div className="legal-header-inner">
        <a href="/" aria-label="Aktay Protection – Startseite">
          <Image src="/icon.png" alt="Aktay Protection" width={200} height={200} />
        </a>
        <a className="legal-back" href={backHref}>
          <ArrowLeft className="legal-back-icon" aria-hidden="true" />
          {backLabel}
        </a>
      </div>
    </header>
  );
}
