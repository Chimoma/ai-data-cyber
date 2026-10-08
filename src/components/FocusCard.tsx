import { Link } from 'react-router-dom';
import type { FocusArea } from '../lib/content';

interface FocusCardProps {
  area: FocusArea;
}

export default function FocusCard({ area }: FocusCardProps) {
  return (
    <Link
      to={`/focus-areas#${area.id}`}
      className="group grid gap-4 border-t border-line py-8 transition-colors hover:border-lime md:grid-cols-[6rem_1fr_2fr_auto] md:items-baseline md:gap-8"
    >
      <span aria-hidden="true" className="font-mono text-sm text-mist group-hover:text-lime">{area.index}</span>
      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{area.title}</h3>
      <p className="leading-relaxed text-mist">{area.summary}</p>
      <span aria-hidden="true" className="font-mono text-lime transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}
