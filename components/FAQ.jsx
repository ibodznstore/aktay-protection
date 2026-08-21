"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import SectionLabel from "./SectionLabel";

const entries = [
  {
    question: "Sind Sie Mitglied der IHK Potsdam?",
    answer: <p>Ja, unser Unternehmen ist Mitglied der IHK Potsdam.</p>,
  },
  {
    question: "Wie können Sie uns kontaktieren?",
    answer: (
      <p>
        E-Mail: <a href="mailto:aktayprotection@gmail.com">aktayprotection@gmail.com</a>
        <br />
        Telefon: <a href="tel:+4933813465601">(+49) 3381 3465601</a>
      </p>
    ),
  },
  {
    question: "Mit wem arbeiten wir zusammen?",
    answer: (
      <p>
        Wir arbeiten in Kooperation mit{" "}
        <a href="https://www.sonnenscheinfuerfinanzen.com/" target="_blank" rel="noreferrer">
          Sonnenschein für Finanzen
        </a>
        .
      </p>
    ),
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([0]);

  const toggle = (index) => {
    setOpenItems((items) =>
      items.includes(index) ? items.filter((item) => item !== index) : [...items, index],
    );
  };

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq-inner">
        <div className="faq-intro" data-reveal>
        <SectionLabel>FAQ</SectionLabel>
        <h2 id="faq-title">Ihre Fragen, beantwortet</h2>
        <p>
          Hier finden Sie schnelle Antworten auf die häufigsten Fragen zu unseren
          Dienstleistungen und unserem Ablauf.
        </p>
        </div>
        <div className="faq-list" data-reveal>
        {entries.map((entry, index) => (
          <FAQItem
            key={entry.question}
            question={entry.question}
            open={openItems.includes(index)}
            onToggle={() => toggle(index)}
            index={index}
          >
            {entry.answer}
          </FAQItem>
        ))}
        </div>
      </div>
    </section>
  );
}
