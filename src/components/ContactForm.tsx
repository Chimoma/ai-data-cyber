import { useContactForm } from '../hooks/useContactForm';
import { focusAreas } from '../lib/content';

const initialValues = { name: '', email: '', topic: '', message: '' };
const fieldClass =
  'mt-2 w-full border border-line bg-ink px-4 py-3 text-white placeholder:text-mist/60 focus:border-lime';
const labelClass = 'font-mono text-xs uppercase tracking-widest text-mist';

export default function ContactForm() {
  const { values, errors, message, handleChange, handleSubmit } = useContactForm(initialValues, [
    'name',
    'email',
    'message',
  ]);

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6 border border-line bg-panel p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={handleChange}
            aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} className={fieldClass} />
          {errors.name && <p id="name-error" className="mt-2 text-sm text-red-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange}
            aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className={fieldClass} />
          {errors.email && <p id="email-error" className="mt-2 text-sm text-red-300">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="topic" className={labelClass}>Area of interest</label>
        <select id="topic" name="topic" value={values.topic} onChange={handleChange} className={fieldClass}>
          <option value="">Select an area</option>
          {focusAreas.map((area) => (
            <option key={area.id} value={area.title}>{area.title}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange}
          aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className={fieldClass} />
        {errors.message && <p id="message-error" className="mt-2 text-sm text-red-300">{errors.message}</p>}
      </div>
      <button type="submit" className="bg-lime px-7 py-4 font-mono text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:bg-white">
        Send message
      </button>
      <p role="status" aria-live="polite" className="text-sm text-lime">
        {message}
      </p>
    </form>
  );
}
