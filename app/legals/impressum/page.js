import Footer from "../../../components/Footer";
import LegalHeader from "../../../components/LegalHeader";

export const metadata = {
  title: "Impressum | Aktay Protection",
  description: "Impressum der Aktay Al Zahab Protection GmbH.",
};

export default function ImpressumPage() {
  return (
    <>
      <LegalHeader backHref="/legals" backLabel="Rechtliche Informationen" />
      <main className="legal-page">
        <div className="legal-inner">
          <p className="legal-eyebrow">Rechtliches</p>
          <h1>Impressum</h1>
          <div className="legal-grid">
            <section>
              <h2>Angaben gemäß § 5 DDG</h2>
              <p>
                Aktay Al Zahab Protection GmbH<br />
                Nicolaiplatz 14–15<br />
                14770 Brandenburg an der Havel
              </p>
            </section>
            <section>
              <h2>Vertretung</h2>
              <p>Vertreten durch die Geschäftsführerin: Nour Abdal Khalek</p>
            </section>
            <section>
              <h2>Registereintrag</h2>
              <p>
                Registergericht: Amtsgericht Potsdam<br />
                Registernummer: HRB 42490 P
              </p>
            </section>
            <section>
              <h2>Kontakt</h2>
              <p>
                Telefon: (+49) 3381 3465601<br />
                E-Mail: aktayprotection@gmail.com
              </p>
            </section>
            <section>
              <h2>Aufsichtsbehörde</h2>
              <p>
                Stadt Brandenburg an der Havel<br />
                Gewerbebehörde<br />
                Nicolaiplatz 30<br />
                14770 Brandenburg an der Havel
              </p>
            </section>
            <section>
              <h2>Berufsrechtliche Regelungen</h2>
              <p>
                <a href="https://www.gesetze-im-internet.de/gewo/__34a.html" target="_blank" rel="noreferrer">
                  § 34a Gewerbeordnung (GewO)
                </a><br />
                <a href="https://www.gesetze-im-internet.de/bewachv_2019/" target="_blank" rel="noreferrer">
                  Verordnung über das Bewachungsgewerbe (BewachV)
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
