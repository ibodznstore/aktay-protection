import Header from "../../components/Header";
import SectionLabel from "../../components/SectionLabel";
import ContactForm from "../../components/ContactForm";
import FAQ from "../../components/FAQ";
import Careers from "../../components/Careers";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Kontakt | Aktay Protection",
  description: "Kontaktieren Sie Aktay Protection für eine passende Sicherheitslösung.",
};

export default function ContactPage() {
  return (
    <main className="contact-page" id="main-content">
      <Header forceCompact />
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div className="contact-heading" data-reveal>
            <SectionLabel>Kontakt</SectionLabel>
            <div className="contact-heading-row">
              <h1 id="contact-title">Nehmen Sie Kontakt auf</h1>
              <p>
                Teilen Sie uns Ihre Anforderungen mit, und wir melden uns mit einem
                klaren nächsten Schritt bei Ihnen.
              </p>
            </div>
          </div>

          <div className="contact-content" data-reveal>
            <ContactForm />
            <div className="contact-details">
              <div className="contact-map">
                <iframe
                  src="https://maps.google.com/maps?q=52.41151859650407%2C12.54747794570078&z=16&output=embed"
                  title="Standort von Aktay Protection in Brandenburg an der Havel"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  className="contact-map-link"
                  href="https://www.google.com/maps/dir/?api=1&destination=52.41151859650407%2C12.54747794570078"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>In Google Maps öffnen</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="contact-info">
                <div>
                  <span>E-Mail</span>
                  <p>aktayprotection@gmail.com</p>
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
