import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found', 'The page you were looking for could not be found.');
  return (
    <section className="mx-auto max-w-6xl px-5 py-32">
      <p className="font-mono text-sm text-lime">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">Page not found</h1>
      <Link to="/" className="mt-8 inline-block font-mono text-sm uppercase tracking-widest text-lime hover:text-white">
        ← Back to home
      </Link>
    </section>
  );
}
