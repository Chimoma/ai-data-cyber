export interface NavLinkItem {
  to: string;
  label: string;
}

export interface FocusArea {
  id: string;
  index: string;
  title: string;
  summary: string;
  audience: string;
  services: string[];
}

export interface CompanyValue {
  title: string;
  description: string;
}

export const navLinks: NavLinkItem[] = [
  { to: '/', label: 'Home' },
  { to: '/focus-areas', label: 'Focus Areas' },
  { to: '/company', label: 'Company' },
  { to: '/contact', label: 'Contact' },
];

export const focusAreas: FocusArea[] = [
  {
    id: 'ai',
    index: '01',
    title: 'Artificial Intelligence',
    summary:
      'Systems that learn from information to support decisions, automate routine work and surface patterns people would otherwise miss.',
    audience: 'For organisations that want to apply AI to real operational problems, not just experiment with it.',
    services: [
      'AI strategy and readiness assessments',
      'Custom machine learning models',
      'Chatbots and virtual assistants',
      'Workflow and process automation',
    ],
  },
  {
    id: 'data',
    index: '02',
    title: 'Data',
    summary:
      'Collecting, organising and analysing information so that it is accurate, accessible and useful to the people who rely on it.',
    audience: 'For teams that have data spread across systems and spreadsheets and need answers they can trust.',
    services: [
      'Data engineering and pipelines',
      'Business intelligence dashboards',
      'Analytics and reporting',
      'Data governance and quality',
    ],
  },
  {
    id: 'cyber',
    index: '03',
    title: 'Cyber Security',
    summary: 'Protecting systems, networks and information from unauthorised access, disruption and loss.',
    audience: 'For any organisation that holds customer, financial or operational information worth protecting.',
    services: [
      'Security assessments and penetration testing',
      'Security monitoring and incident response',
      'Staff security awareness training',
      'Data protection and compliance support',
    ],
  },
];

export const intro =
  'AI & Data Cyber Ltd brings three connected disciplines together. Good AI depends on good data, and both depend on strong security, so we work across all three for businesses, institutions and public-sector organisations.';

export const mission =
  'To help organisations use artificial intelligence and data with confidence, and to keep the systems they depend on secure.';

export const values: CompanyValue[] = [
  { title: 'Clarity', description: 'We explain what we are doing and why, in plain language.' },
  { title: 'Security by default', description: 'Protecting systems and data is part of every piece of work, never an add-on.' },
  { title: 'Practical results', description: 'We focus on work that solves a real problem for the organisation.' },
  { title: 'Integrity', description: 'We handle client information responsibly and give honest advice.' },
];
