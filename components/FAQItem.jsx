export default function FAQItem({ question, children, open, onToggle, index }) {
  const answerId = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={answerId}
          onClick={onToggle}
        >
          <span>{question}</span>
          <span className="faq-icon" aria-hidden="true" />
        </button>
      </h3>
      <div
        className="faq-answer-grid"
        id={answerId}
        role="region"
        aria-labelledby={buttonId}
      >
        <div>
          <div className="faq-answer">{children}</div>
        </div>
      </div>
    </div>
  );
}
