import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
          Have a project or a question? Start a conversation.
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-lime px-7 py-4 font-mono text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:bg-white"
        >
          Contact us <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
