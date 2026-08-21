import Footer from "../../../components/Footer";
import LegalHeader from "../../../components/LegalHeader";

export const metadata = {
  title: "Impressum | Aktay Protection",
  description: "Impressum der Aktay Al Zahab Protection GmbH.",
};

export default function ImpressumPage() {
  return (
    <>
      <LegalHeader />
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
                Telefon: <a href="tel:+4933813465601">(+49) 3381 3465601</a><br />
                E-Mail: <a href="mailto:aktayprotection@gmail.com">aktayprotection@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
