import CTASection from '../components/CTASection';
import SectionLabel from '../components/SectionLabel';
import ValueList from '../components/ValueList';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../lib/company';
import { intro, mission } from '../lib/content';

export default function Company() {
  usePageMeta('Company', `About ${company.name}: our mission and values.`);

  return (
    <>
      <section className="bg-grid border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionLabel code="ABOUT">Company</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{company.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionLabel code="01">Mission</SectionLabel>
        <p className="mt-6 max-w-4xl text-3xl font-medium leading-snug tracking-tight md:text-5xl">{mission}</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <SectionLabel code="02">Values</SectionLabel>
        <h2 className="mb-10 mt-5 text-3xl font-semibold tracking-tight md:text-4xl">What guides our work</h2>
        <ValueList />
      </section>

      <CTASection />
    </>
  );
}
