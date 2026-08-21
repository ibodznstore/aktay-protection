import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function LegalHeader() {
  return (
    <header className="legal-header">
      <div className="legal-header-inner">
        <a href="/" aria-label="Aktay Protection – Startseite">
          <Image src="/icon.png" alt="Aktay Protection" width={200} height={200} />
        </a>
        <a className="legal-back" href="/">
          <ArrowLeft className="legal-back-icon" aria-hidden="true" />
          Zurück zur Startseite
        </a>
      </div>
    </header>
  );
}
