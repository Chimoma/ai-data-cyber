import { values } from '../lib/content';

export default function ValueList() {
  return (
    <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
      {values.map((value, i) => (
        <li key={value.title} className="bg-ink p-6">
          <span aria-hidden="true" className="font-mono text-xs text-lime">0{i + 1}</span>
          <h3 className="mt-3 text-xl font-semibold tracking-tight">{value.title}</h3>
          <p className="mt-2 leading-relaxed text-mist">{value.description}</p>
        </li>
      ))}
    </ul>
  );
}
