import Footer from "../../../components/Footer";
import LegalHeader from "../../../components/LegalHeader";

export const metadata = {
  title: "Datenschutzerklärung | Aktay Protection",
  description: "Datenschutzhinweise der Aktay Al Zahab Protection GmbH.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHeader backHref="/legals" backLabel="Rechtliche Informationen" />
      <main className="legal-page legal-page-wide">
        <div className="legal-inner">
          <p className="legal-eyebrow">Stand: 22. August 2026</p>
          <h1>Datenschutzerklärung</h1>
          <div className="legal-copy">
            <section id="verantwortlicher">
              <h2>1. Verantwortlicher</h2>
              <p>
                Aktay Al Zahab Protection GmbH<br />
                Nicolaiplatz 14–15<br />
                14770 Brandenburg an der Havel<br />
                E-Mail: aktayprotection@gmail.com<br />
                Telefon: (+49) 3381 3465601
              </p>
            </section>

            <section id="hosting">
              <h2>2. Hosting und technische Bereitstellung</h2>
              <p>
                Diese Website wird über ChatGPT Sites bereitgestellt. Anbieter für
                Nutzer im Europäischen Wirtschaftsraum ist OpenAI Ireland Limited,
                1st Floor, The Liffey Trust Centre, 117–126 Sheriff Street Upper,
                Dublin 1, D01 YC43, Irland. Beim Aufruf der Website werden technisch
                erforderliche Daten wie IP-Adresse, Zeitpunkt, angeforderte Adresse,
                Browser- und Geräteinformationen sowie Sicherheits- und Fehlerdaten
                verarbeitet, um die Website auszuliefern, Angriffe abzuwehren und die
                Stabilität sicherzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                DSGVO. Unser berechtigtes Interesse liegt im sicheren und
                zuverlässigen Betrieb dieser Website.
              </p>
              <p>
                Soweit OpenAI personenbezogene Daten in unserem Auftrag verarbeitet,
                erfolgt dies auf Grundlage des ChatGPT Sites Data Processing
                Addendum. Bei einer Verarbeitung außerhalb des Europäischen
                Wirtschaftsraums werden nach Angaben des Anbieters geeignete
                Garantien, insbesondere Standardvertragsklauseln, eingesetzt.
                Weitere Informationen finden Sie im {" "}
                <a href="https://openai.com/policies/chatgpt-sites-data-processing-addendum/" target="_blank" rel="noreferrer">
                  ChatGPT Sites Data Processing Addendum
                </a>
                {" "}und in der {" "}
                <a href="https://openai.com/policies/eu-privacy-policy/" target="_blank" rel="noreferrer">
                  europäischen Datenschutzerklärung von OpenAI
                </a>.
              </p>
            </section>

            <section id="cookies">
              <h2>3. Cookies, Analyse und Marketing</h2>
              <p>
                Wir setzen auf dieser Website keine eigenen Analyse- oder
                Marketingdienste ein. Nicht erforderliche Drittinhalte werden nicht
                ohne eine vorherige bewusste Handlung geladen. Technisch notwendige
                Funktionen des Hosting-Anbieters können für Bereitstellung und
                Sicherheit erforderlich sein.
              </p>
            </section>

            <section id="kontakt">
              <h2>4. Kontaktaufnahme</h2>
              <p>
                Das Kontaktformular öffnet das auf Ihrem Gerät eingerichtete
                E-Mail-Programm. Formulardaten werden nicht zuvor auf unserer Website
                gespeichert. Sobald Sie uns eine E-Mail senden oder telefonisch
                kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der
                Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei
                vorvertraglichen Anfragen und im Übrigen Art. 6 Abs. 1 lit. f DSGVO.
                Unser berechtigtes Interesse liegt in der Beantwortung geschäftlicher
                Anfragen. Gesetzliche Aufbewahrungspflichten bleiben unberührt.
              </p>
            </section>

            <section id="google-maps">
              <h2>5. Google Maps</h2>
              <p>
                Die Google-Maps-Karte wird nicht automatisch geladen. Erst wenn Sie
                „Karte laden“ auswählen, stellt Ihr Browser eine Verbindung zu Google
                her. Anbieter im Europäischen Wirtschaftsraum ist Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland. Dabei können
                insbesondere Ihre IP-Adresse, Browserinformationen und die
                aufgerufene Seite verarbeitet sowie Informationen auf Ihrem Gerät
                gespeichert oder ausgelesen werden. Rechtsgrundlage ist Ihre
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                Eine Verarbeitung in Drittländern kann nicht ausgeschlossen werden.
                Ohne Einwilligung können Sie stattdessen den ausdrücklich
                gekennzeichneten externen Google-Maps-Link öffnen. Die Einwilligung
                wird auf dieser Website nicht dauerhaft gespeichert; nach einem
                erneuten Seitenaufruf bleibt die Karte wieder gesperrt. Weitere
                Informationen enthält die {" "}
                <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">
                  Datenschutzerklärung von Google
                </a>.
              </p>
            </section>

            <section id="bewerbung">
              <h2>6. Bewerbungen</h2>
              <p>
                Das dargestellte Bewerbungsformular ist derzeit nicht mit einem
                Übermittlungsdienst verbunden. Eingaben und ausgewählte Dateien
                werden nicht an uns gesendet. Wird das Formular aktiviert,
                verarbeiten wir Bewerbungsdaten ausschließlich zur Entscheidung über
                die Begründung eines Beschäftigungsverhältnisses auf Grundlage von
                § 26 Abs. 1 BDSG. Vor der Aktivierung ergänzen wir an dieser Stelle
                den eingesetzten Dienstleister, Empfänger, Speicherort,
                Speicherdauer, Löschfristen und gegebenenfalls Informationen zu
                Drittlandübermittlungen. Eine darüber hinausgehende Speicherung für
                spätere Stellen erfolgt nur auf Grundlage einer gesonderten,
                freiwilligen Einwilligung.
              </p>
            </section>

            <section id="empfaenger">
              <h2>7. Empfänger und Auftragsverarbeiter</h2>
              <p>
                Zugriff auf personenbezogene Daten erhalten nur Stellen, die diese
                zur Erfüllung der genannten Zwecke benötigen. Dazu können
                Hosting-Anbieter, E-Mail-Dienstleister und nach Aktivierung des
                Bewerbungsformulars ein Formulardienstleister gehören. Mit
                Auftragsverarbeitern werden die gesetzlich erforderlichen
                Vereinbarungen geschlossen.
              </p>
            </section>

            <section id="speicherdauer">
              <h2>8. Speicherdauer</h2>
              <p>
                Personenbezogene Daten werden gelöscht, sobald der jeweilige Zweck
                entfällt und keine gesetzlichen Aufbewahrungs-, Nachweis- oder
                Verjährungsfristen entgegenstehen. Technische Protokolldaten werden
                nach den für den Hosting-Dienst geltenden Fristen verarbeitet.
                Konkrete Fristen für Bewerbungen werden vor Aktivierung des
                Bewerbungsformulars festgelegt und hier veröffentlicht.
              </p>
            </section>

            <section id="rechte">
              <h2>9. Ihre Rechte</h2>
              <p>
                Sie haben im gesetzlichen Rahmen das Recht auf Auskunft,
                Berichtigung, Löschung, Einschränkung der Verarbeitung,
                Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung
                können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Zur
                Ausübung Ihrer Rechte können Sie die oben genannten Kontaktdaten
                verwenden.
              </p>
            </section>

            <section id="beschwerde">
              <h2>10. Beschwerderecht</h2>
              <p>
                Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren.
                Zuständig für unser Unternehmen ist grundsätzlich die
                Landesbeauftragte für den Datenschutz und für das Recht auf
                Akteneinsicht Brandenburg, Stahnsdorfer Damm 77, 14532 Kleinmachnow.
                Weitere Informationen finden Sie auf der {" "}
                <a href="https://www.lda.brandenburg.de/" target="_blank" rel="noreferrer">
                  Website der Aufsichtsbehörde
                </a>.
              </p>
            </section>

            <section id="aenderungen">
              <h2>11. Änderungen</h2>
              <p>
                Wir aktualisieren diese Datenschutzerklärung, wenn sich Funktionen,
                eingesetzte Anbieter oder rechtliche Anforderungen ändern. Es gilt
                die jeweils auf dieser Seite veröffentlichte Fassung.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
