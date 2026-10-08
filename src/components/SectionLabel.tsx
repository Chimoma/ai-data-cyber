interface SectionLabelProps {
  code: string;
  children: string;
}

/** Small monospace eyebrow used above section headings. */
export default function SectionLabel({ code, children }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">
      <span aria-hidden="true" className="mr-2 text-mist">{code} //</span>
      {children}
    </p>
  );
}
