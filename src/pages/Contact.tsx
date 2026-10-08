import ContactForm from '../components/ContactForm';
import ContactLink from '../components/ContactLink';
import SectionLabel from '../components/SectionLabel';
import { usePageMeta } from '../hooks/usePageMeta';
import { company } from '../lib/company';

export default function Contact() {
  usePageMeta('Contact', `Contact ${company.name} about artificial intelligence, data or cyber security.`);
  const { contact } = company;

  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-24 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <SectionLabel code="CONTACT">Get in touch</SectionLabel>
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">Talk to us</h1>
        <p className="mt-6 max-w-md leading-relaxed text-mist">
          Tell us what you are working on and we will get back to you.
        </p>
        <dl className="mt-10 space-y-6">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-mist">Email</dt>
            <dd className="mt-1"><ContactLink kind="email" value={contact.email} className="hover:text-lime" /></dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-mist">Location</dt>
            <dd className="mt-1">{contact.location}</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </section>
  );
}
