export const SITE = {
  name: 'Avante',
  tagline: 'Furniture with young energy',
  description:
    'Avante is a modern furniture company specializing in kitchens, offices, and sleeping rooms. Young team, bold design, built to last.',
  url: 'https://avantefurniture.com',
  email: 'contact@avantefurniture.com',
  phone: '+38349309080',
  phones: [
    { number: '+38349309080', label: '+383 49 309 080' },
    { number: '+38349500287', label: '+383 49 500 287' },
  ],
  location: 'Magjistralja Fushe Kosove – Peje, Bresje',
  social: {
    instagram: 'https://instagram.com/avantefurniture',
    facebook: 'https://facebook.com/avantefurniture',
    whatsapp: [
      { number: '+38349309080', href: 'https://wa.me/38349309080', label: '+383 49 309 080' },
      { number: '+38349500287', href: 'https://wa.me/38349500287', label: '+383 49 500 287' },
    ],
  },
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
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
    accent: '#9A5B36',
  },
  office: {
    slug: 'office',
    title: 'Offices',
    headline: 'Work that moves',
    description:
      'Flexible office furniture for startups and teams who refuse to sit still.',
    image: '/images/hero-office.svg',
    accent: '#26333B',
  },
  bedroom: {
    slug: 'bedroom',
    title: 'Bedrooms',
    headline: 'Rest, recharged',
    description:
      'Sleeping rooms built for calm — storage, comfort, and clean modern lines.',
    image: '/images/hero-bedroom.svg',
    accent: '#5E7D78',
  },
} as const;
