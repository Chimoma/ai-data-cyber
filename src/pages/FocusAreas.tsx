import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../lib/company';
import { focusAreas, intro } from '../lib/content';

export default function FocusAreas() {
  usePageMeta('Focus Areas', `The areas ${company.name} works in: artificial intelligence, data and cyber security.`);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <section className="bg-grid border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionLabel code="INDEX">Focus areas</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">What we work on</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{intro}</p>
        </div>
      </section>

      {focusAreas.map((area) => (
        <section key={area.id} id={area.id} className="scroll-mt-20 border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.4fr] md:py-24">
            <div>
              <p aria-hidden="true" className="font-mono text-6xl font-medium text-line md:text-8xl">{area.index}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{area.title}</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-mist">{area.summary}</p>
              <p className="mt-4 leading-relaxed">{area.audience}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {area.services.map((service) => (
                  <li key={service} className="flex gap-3 border border-line bg-panel px-4 py-4 text-sm transition-colors hover:border-lime">
                    <span aria-hidden="true" className="font-mono text-lime">+</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
