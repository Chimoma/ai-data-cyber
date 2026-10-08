/**
 * Single source of truth for company details.
 * Replace the [Add business email] placeholder with the real address;
 * every email link and the contact form will start working automatically.
 */
export const company = {
  name: 'AI & Data Cyber Ltd',
  tagline: 'We help organisations in Nigeria put AI to work, make sense of their data and keep their systems secure.',
  contact: {
    email: '[Add business email]',
    location: 'Nigeria',
  },
} as const;

export const isPlaceholder = (value: string): boolean => value.trim().startsWith('[');
