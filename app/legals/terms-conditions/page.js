import Footer from "../../../components/Footer";
import LegalHeader from "../../../components/LegalHeader";

export const metadata = {
  title: "Datenschutzrichtlinie | Aktay Protection",
  description: "Datenschutzhinweise der Aktay Al Zahab Protection GmbH.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader />
      <main className="legal-page legal-page-wide">
        <div className="legal-inner">
          <p className="legal-eyebrow">Rechtliches</p>
          <h1>Datenschutzrichtlinie</h1>
          <div className="legal-copy">
            <section>
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              Aktay Al Zahab Protection GmbH, Nicolaiplatz 14–15, 14770 Brandenburg
              an der Havel. Sie erreichen uns unter aktayprotection@gmail.com oder
              {" "}(+49) 3381 3465601.
            </p>
            </section>
            <section>
            <h2>2. Besuch dieser Website</h2>
            <p>
              Beim Aufruf können technisch notwendige Verbindungsdaten durch den
              Hosting-Anbieter verarbeitet werden, um die Website sicher und
              zuverlässig bereitzustellen. Wir verwenden auf dieser Version keine
              eigenen Analyse- oder Marketing-Cookies.
            </p>
            </section>
            <section>
            <h2>3. Bewerbungsformular</h2>
            <p>
              Das auf dieser Website dargestellte Bewerbungsformular ist derzeit
              nicht mit einem Übermittlungsdienst verbunden. Eingaben und ausgewählte
              Dateien werden nicht an uns gesendet. Vor einer späteren Aktivierung
              wird diese Richtlinie um Empfänger, Rechtsgrundlage, Speicherdauer und
              Sicherheitsmaßnahmen ergänzt.
            </p>
            </section>
            <section>
            <h2>4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre
              Angaben zur Bearbeitung Ihrer Anfrage. Die hierfür geltenden gesetzlichen
              Aufbewahrungspflichten bleiben unberührt.
            </p>
            </section>
            <section>
            <h2>5. Ihre Rechte</h2>
            <p>
              Sie können im gesetzlichen Rahmen Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit oder Widerspruch
              verlangen. Außerdem besteht ein Beschwerderecht bei einer zuständigen
              Datenschutzaufsichtsbehörde.
            </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
