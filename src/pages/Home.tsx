import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import FocusCard from '../components/FocusCard';
import SectionLabel from '../components/SectionLabel';
import ValueList from '../components/ValueList';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../lib/company';
import { focusAreas, mission } from '../lib/content';

export default function Home() {
  usePageMeta('AI, Data and Cyber Security', company.tagline);

  return (
    <>
      <section className="bg-grid border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-28 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <SectionLabel code="NG">AI · Data · Cyber Security</SectionLabel>
            <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              AI.<br />Data.<br /><span className="text-lime">Cyber.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-mist">{company.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-lime px-7 py-4 font-mono text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:bg-white">
                Get in touch
              </Link>
              <Link to="/focus-areas" className="border border-line px-7 py-4 font-mono text-sm uppercase tracking-widest transition-colors hover:border-lime hover:text-lime">
                Focus areas
              </Link>
            </div>
          </div>

          <div className="border border-line bg-panel font-mono text-sm">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3 text-xs text-mist">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-lime" />
              capabilities.index
            </div>
            <ul className="divide-y divide-line">
              {focusAreas.map((area) => (
                <li key={area.id} className="p-5">
                  <p className="text-lime">
                    <span aria-hidden="true" className="mr-2 text-mist">{area.index}</span>
                    {area.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-mist">{area.services.slice(0, 2).join(' · ')}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionLabel code="01">Focus areas</SectionLabel>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          Three disciplines, one company.
        </h2>
        <div className="mt-12 border-b border-line">
          {focusAreas.map((area) => (
            <FocusCard key={area.id} area={area} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-panel">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionLabel code="02">Our mission</SectionLabel>
            <p className="mt-6 text-2xl font-medium leading-snug tracking-tight md:text-3xl">{mission}</p>
            <Link to="/company" className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-lime hover:text-white">
              About the company <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ValueList />
        </div>
      </section>

      <CTASection />
    </>
  );
}
