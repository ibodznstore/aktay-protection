import Image from "next/image";

export default function LegalHeader() {
  return (
    <header className="legal-header">
      <a href="/" aria-label="Aktay Protection – Startseite">
        <Image src="/icon.png" alt="Aktay Protection" width={200} height={200} />
      </a>
      <a className="legal-back" href="/">
        <span aria-hidden="true">←</span>
        Zurück zur Startseite
      </a>
    </header>
  );
}
