import { ArrowUpRight } from "lucide-react";
import Footer from "../../components/Footer";
import LegalHeader from "../../components/LegalHeader";

export const metadata = {
  title: "Rechtliche Informationen | Aktay Protection",
  description: "Rechtliche Informationen der Aktay Al Zahab Protection GmbH.",
};

const documents = [
  {
    href: "/legals/impressum",
    title: "Impressum",
    text: "Anbieterkennzeichnung, Registerangaben, Kontakt und Aufsichtsbehörde.",
  },
  {
    href: "/legals/datenschutz",
    title: "Datenschutzerklärung",
    text: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  },
];

export default function LegalOverviewPage() {
  return (
    <>
      <LegalHeader />
      <main className="legal-page legal-overview">
        <div className="legal-inner">
          <p className="legal-eyebrow">Unternehmens- und Rechtsinformationen</p>
          <h1>Rechtliche Informationen</h1>

          <div className="legal-document-grid">
            {documents.map((document) => (
              <a key={document.href} href={document.href} className="legal-document-card">
                <div>
                  <h2>{document.title}</h2>
                  <p>{document.text}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="legal-copy legal-overview-copy">
            <section>
              <h2>Unternehmen</h2>
              <p>
                Aktay Al Zahab Protection GmbH, Nicolaiplatz 14–15, 14770
                Brandenburg an der Havel. Vertreten durch die Geschäftsführerin Nour
                Abdal Khalek. Registergericht: Amtsgericht Potsdam, HRB 42490 P.
              </p>
            </section>
            <section>
              <h2>Bewachungsgewerbe</h2>
              <p>
                Die Tätigkeit im Bewachungsgewerbe ist erlaubnispflichtig nach § 34a
                Gewerbeordnung. Zuständige Aufsichts- und Erlaubnisbehörde ist die
                Gewerbebehörde der Stadt Brandenburg an der Havel.
              </p>
            </section>
            <section>
              <h2>Onlineangebot</h2>
              <p>
                Diese Website informiert über Leistungen und ermöglicht eine
                Kontaktaufnahme. Über die Website werden derzeit keine Verträge
                geschlossen und keine Zahlungen entgegengenommen. Verbindliche
                Leistungen und Konditionen werden individuell vereinbart.
              </p>
            </section>
            <section>
              <h2>Inhalte und externe Angebote</h2>
              <p>
                Texte, Gestaltung, Marken und Bildmaterial dürfen nur im Rahmen der
                gesetzlichen Bestimmungen oder mit Zustimmung der jeweiligen
                Rechteinhaber verwendet werden. Externe Angebote werden erst durch
                eine bewusste Auswahl des entsprechenden Links aufgerufen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
