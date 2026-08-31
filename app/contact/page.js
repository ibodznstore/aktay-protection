import Header from "../../components/Header";
import SectionLabel from "../../components/SectionLabel";
import ContactForm from "../../components/ContactForm";
import FAQ from "../../components/FAQ";
import Careers from "../../components/Careers";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import ConsentMap from "../../components/ConsentMap";

export const metadata = {
  title: "Kontakt | Aktay Protection",
  description: "Kontaktieren Sie Aktay Protection für eine passende Sicherheitslösung.",
};

export default function ContactPage() {
  return (
    <main className="contact-page" id="main-content">
      <Header forceCompact />
      <section className="contact-section" id="kontakt" aria-labelledby="kontakt-title">
        <div className="contact-inner">
          <div className="contact-heading" data-reveal>
            <SectionLabel>Kontakt</SectionLabel>
            <div className="contact-heading-row">
              <h1 id="kontakt-title">Nehmen Sie Kontakt auf</h1>
              <p>
                Teilen Sie uns Ihre Anforderungen mit, und wir melden uns mit einem
                klaren nächsten Schritt bei Ihnen.
              </p>
            </div>
          </div>

          <div className="contact-content" data-reveal>
            <ContactForm />
            <div className="contact-details">
              <ConsentMap />
              <div className="contact-info">
                <div>
                  <span>E-Mail</span>
                  <p>aktayprotection@gmail.com</p>
                  <p>info@aktayprotection.com</p>
                </div>
                <div>
                  <span>Nummer</span>
                  <p>(+49) 3381 3465601</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Careers />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
