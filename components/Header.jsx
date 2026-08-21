"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Start", "#hero"],
  ["Über uns", "#about"],
  ["Leistungen", "#service"],
  ["Faq", "#faq"],
  ["Kontakt", "#contact"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = document.querySelector("#hero")?.offsetHeight || window.innerHeight;
      setScrolled(window.scrollY >= heroHeight - 2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}
    >
      <a className="brand" href="#hero" aria-label="Aktay Protection – Startseite">
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

      <a className="header-phone" href="tel:+4933813465601">
        (+49) 3381 3465601
      </a>

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

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile Navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <a className="mobile-phone" href="tel:+4933813465601">
          (+49) 3381 3465601
        </a>
      </div>
    </header>
  );
}
