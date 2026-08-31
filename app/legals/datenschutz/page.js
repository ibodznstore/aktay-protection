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
          <p className="legal-eyebrow">Stand: 24. August 2026</p>
          <h1>Datenschutzerklärung</h1>
          <div className="legal-copy">
            <section id="verantwortlicher">
              <h2>1. Verantwortlicher</h2>
              <p>
                Aktay Al Zahab Protection GmbH<br />
                Nicolaiplatz 14–15<br />
                14770 Brandenburg an der Havel<br />
                E-Mail: aktayprotection@gmail.com<br />
                E-Mail: info@aktayprotection.com<br />
                Telefon: (+49) 3381 3465601
              </p>
            </section>

            <section id="hosting">
              <h2>2. Domain, DNS und Hosting</h2>
              <p>
                Die Domain wird bei der STRATO GmbH, Otto-Ostrowski-Straße 7,
                10249 Berlin, Deutschland, verwaltet. STRATO stellt insbesondere
                die Domain- und DNS-Verwaltung bereit; die Inhalte dieser Website
                werden nicht bei STRATO gehostet. Bei der technischen Bereitstellung
                der Domain- und DNS-Dienste können erforderliche Verbindungs- und
                Protokolldaten verarbeitet werden. Weitere Informationen finden Sie
                in den {" "}
                <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noreferrer">
                  Datenschutzhinweisen von STRATO
                </a>.
              </p>
              <p>
                Das Hosting und die weltweite Auslieferung der Website erfolgen
                über Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
                USA. Beim Aufruf verarbeitet Vercel technisch erforderliche Daten,
                insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse,
                Referrer, Browser- und Geräteinformationen sowie Sicherheits-,
                Diagnose- und Fehlerdaten. Die Verarbeitung ist erforderlich, um
                die Website auszuliefern, Angriffe abzuwehren und ihre Stabilität
                sicherzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                Unser berechtigtes Interesse liegt im sicheren und zuverlässigen
                Betrieb dieser Website.
              </p>
              <p>
                Soweit Vercel personenbezogene Daten in unserem Auftrag verarbeitet,
                erfolgt dies auf Grundlage des mit Vercel geltenden
                Auftragsverarbeitungsvertrags. Daten können in den USA und weiteren
                Ländern verarbeitet werden. Vercel nennt hierfür insbesondere die
                Zertifizierung nach dem EU-U.S. Data Privacy Framework sowie die
                EU-Standardvertragsklauseln als Übermittlungsgrundlagen. Weitere
                Informationen finden Sie im {" "}
                <a href="https://vercel.com/legal/dpa" target="_blank" rel="noreferrer">
                  Data Processing Addendum von Vercel
                </a>
                {" "}und in der {" "}
                <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">
                  Datenschutzerklärung von Vercel
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
                Wenn Sie das Kontaktformular absenden, verarbeiten wir Ihren Namen,
                Ihre E-Mail-Adresse, die ausgewählte Leistung und Ihre Nachricht zur
                Bearbeitung Ihrer Anfrage. Pflichtangaben sind im Formular
                gekennzeichnet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei
                vorvertraglichen Anfragen und im Übrigen Art. 6 Abs. 1 lit. f DSGVO.
                Unser berechtigtes Interesse liegt in der Beantwortung geschäftlicher
                Anfragen. Gesetzliche Aufbewahrungspflichten bleiben unberührt.
              </p>
              <p>
                Zur Übermittlung und vorübergehenden Speicherung des Kontaktformulars
                nutzen wir Basin, einen Dienst der Moonshot Ventures Inc. mit Sitz in
                British Columbia, Kanada. Beim Absenden werden die eingegebenen Daten
                sowie technische Metadaten wie IP-Adresse, Browserinformationen,
                Herkunft und Zeitpunkt der Übermittlung an Basin übertragen. Die
                weiteren Hinweise zu Basin, möglichen Drittlandübermittlungen und den
                eingesetzten Garantien finden Sie im Abschnitt {" "}
                <a href="#bewerbung">Bewerbungen</a>.
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
                Wenn Sie das Bewerbungsformular absenden, verarbeiten wir Ihre
                Nachricht und den hochgeladenen Lebenslauf zur Entscheidung über die
                Begründung eines Beschäftigungsverhältnisses. Rechtsgrundlage ist
                § 26 Abs. 1 BDSG. Pflichtangaben sind im Formular gekennzeichnet.
                Bitte übermitteln Sie keine Informationen, die für Ihre Bewerbung
                nicht erforderlich sind, insbesondere keine unnötigen besonderen
                Kategorien personenbezogener Daten.
              </p>
              <p>
                Zur Übermittlung und vorübergehenden Speicherung nutzen wir Basin,
                einen Dienst der Moonshot Ventures Inc. mit Sitz in British Columbia,
                Kanada. Beim Absenden werden die eingegebenen Daten, die Datei sowie
                technische Metadaten wie IP-Adresse, Browserinformationen, Herkunft
                und Zeitpunkt der Übermittlung an Basin übertragen. Basin verarbeitet
                diese Daten als Auftragsverarbeiter. Für Kanada besteht für
                kommerzielle Organisationen ein Angemessenheitsbeschluss der
                Europäischen Kommission; soweit Unterauftragsverarbeiter in weiteren
                Drittländern eingesetzt werden, verwendet Basin nach eigenen Angaben
                geeignete Garantien wie Standardvertragsklauseln. Weitere
                Informationen finden Sie in den Hinweisen von Basin zu {" "}
                <a href="https://usebasin.com/gdpr" target="_blank" rel="noreferrer">
                  Datenschutz und DSGVO
                </a>
                , im {" "}
                <a href="https://usebasin.com/dpa" target="_blank" rel="noreferrer">
                  Auftragsverarbeitungsvertrag
                </a>
                {" "}und in der {" "}
                <a href="https://usebasin.com/privacy" target="_blank" rel="noreferrer">
                  Datenschutzerklärung von Basin
                </a>.
              </p>
              <p>
                Eine darüber hinausgehende Speicherung für spätere Stellen erfolgt
                nur auf Grundlage einer gesonderten, freiwilligen Einwilligung.
              </p>
            </section>

            <section id="empfaenger">
              <h2>7. Empfänger und Auftragsverarbeiter</h2>
              <p>
                Zugriff auf personenbezogene Daten erhalten nur Stellen, die diese
                zur Erfüllung der genannten Zwecke benötigen. Dazu können
                Vercel als Hosting-Anbieter, STRATO als Domain- und DNS-Anbieter,
                E-Mail-Dienstleister und für Kontaktanfragen sowie Bewerbungen Basin als
                Formulardienstleister gehören. Mit Auftragsverarbeitern werden die
                gesetzlich erforderlichen Vereinbarungen geschlossen.
              </p>
            </section>

            <section id="speicherdauer">
              <h2>8. Speicherdauer</h2>
              <p>
                Personenbezogene Daten werden gelöscht, sobald der jeweilige Zweck
                entfällt und keine gesetzlichen Aufbewahrungs-, Nachweis- oder
                Verjährungsfristen entgegenstehen. Technische Protokolldaten werden
                nach den für Vercel und STRATO geltenden beziehungsweise von uns
                konfigurierten Fristen verarbeitet.
                Über Basin übermittelte Bewerbungen werden dort entsprechend der
                für das Formular festgelegten Aufbewahrungsfrist, derzeit höchstens
                30 Tage, gespeichert. Unsere eigenen Kopien erfolgloser Bewerbungen
                löschen wir grundsätzlich spätestens sechs Monate nach Abschluss des
                Bewerbungsverfahrens, sofern keine längere Aufbewahrung gesetzlich
                erforderlich oder zur Rechtsverteidigung notwendig ist. Bei einer
                Einstellung werden erforderliche Unterlagen in die Personalakte
                übernommen.
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
