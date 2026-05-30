export const SITE = {
  name: 'Avante',
  tagline: 'Furniture with young energy',
  description:
    'Avante is a modern furniture company specializing in kitchens, offices, and sleeping rooms. Young team, bold design, built to last.',
  url: 'https://avantefurniture.com',
  email: 'hello@avantefurniture.com',
  phone: '+1 (555) 012-3456',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/spaces/kitchen', label: 'Kitchens' },
  { href: '/spaces/office', label: 'Offices' },
  { href: '/spaces/bedroom', label: 'Bedrooms' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SPACES = {
  kitchen: {
    slug: 'kitchen',
    title: 'Kitchens',
    headline: 'Where life happens',
    description:
      'Custom kitchens designed for how you cook, gather, and start every day.',
    image: '/images/hero-kitchen.svg',
    accent: '#c45c26',
  },
  office: {
    slug: 'office',
    title: 'Offices',
    headline: 'Work that moves',
    description:
      'Flexible office furniture for startups and teams who refuse to sit still.',
    image: '/images/hero-office.svg',
    accent: '#2d6a4f',
  },
  bedroom: {
    slug: 'bedroom',
    title: 'Bedrooms',
    headline: 'Rest, recharged',
    description:
      'Sleeping rooms built for calm — storage, comfort, and clean modern lines.',
    image: '/images/hero-bedroom.svg',
    accent: '#5c4d7a',
  },
} as const;
