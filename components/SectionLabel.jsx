export default function SectionLabel({ children, light = false }) {
  return (
    <p className={`section-label ${light ? "section-label-light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
