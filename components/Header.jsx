"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Start", "/#startseite"],
  ["Über uns", "/#ueber-uns"],
  ["Leistungen", "/#leistungen"],
  ["Faq", "/#faq"],
  ["Kontakt", "/contact#kontakt"],
];

export default function Header({ forceCompact = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (forceCompact) return undefined;

    const updateHeader = () => {
      const heroHeight = document.querySelector("#startseite")?.offsetHeight || window.innerHeight;
      const headerHeight = document.querySelector(".site-header")?.offsetHeight || 68;
      setScrolled(window.scrollY >= heroHeight - headerHeight - 1);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, [forceCompact]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${scrolled || forceCompact ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}
      data-compact={forceCompact || undefined}
    >
      <div className="header-inner">
        <a className="brand" href="/#startseite" aria-label="Aktay Protection – Startseite">
          <Image
            className="brand-logo brand-logo-light"
            src="/images/logo-white.avif"
            alt="Aktay Protection"
            width={200}
            height={200}
            priority
          />
          <Image
            className="brand-logo brand-logo-dark"
            src="/icon.png"
            alt=""
            width={200}
            height={200}
            aria-hidden="true"
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <span className="header-phone">
          (+49) 3381 3465601
        </span>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile Navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <p className="mobile-phone">
          (+49) 3381 3465601
        </p>
      </div>
    </header>
  );
}
