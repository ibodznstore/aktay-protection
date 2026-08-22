import Image from "next/image";

const navLinks = [
  ["Start", "/#startseite"],
  ["Über uns", "/#ueber-uns"],
  ["Leistungen", "/#leistungen"],
  ["Faq", "/#faq"],
  ["Kontakt", "/contact#kontakt"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-main">
        <a className="footer-brand" href="/#startseite" aria-label="Zurück zum Anfang">
          <Image src="/images/logo-white.avif" alt="Aktay Protection" width={200} height={200} />
        </a>

        <nav className="footer-nav" aria-label="Fußnavigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <address className="footer-address">
          <p>Aktay Al Zahab Protection GmbH</p>
          <p>Nicolaiplatz 14–15</p>
          <p>14770 Brandenburg an der Havel</p>
          <p>Amtsgericht Potsdam</p>
          <p>HRB 42490 P</p>
        </address>
        </div>

        <div className="footer-bottom">
        <p>
          <a href="/legals">Rechtliche Informationen</a>
          <span aria-hidden="true">•</span>
          <a href="/legals/impressum">Impressum</a>
          <span aria-hidden="true">•</span>
          <a href="/legals/datenschutz">Datenschutzerklärung</a>
        </p>
        <p>Vertreten durch die Geschäftsführerin: Nour Abdal Khalek</p>
        </div>
      </div>
    </footer>
  );
}
