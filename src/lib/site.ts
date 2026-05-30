export const SITE = {
  name: 'Avante',
  tagline: 'Complete interior design. Every room.',
  description:
    'Avante delivers end-to-end interior design and furniture for every room — kitchens, living rooms, bedrooms, offices, dining rooms, and complete homes. Young team, bold design, built to last.',
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
    headline: 'Where life begins',
    description:
      'Custom kitchens where function meets beauty — designed for the way you really cook, gather, and start each day.',
    image: '/images/hero-kitchen.svg',
    accent: '#9A5B36',
  },
  living: {
    slug: 'living',
    title: 'Living Rooms',
    headline: 'The heart of the home',
    description:
      'Living spaces crafted for connection — comfortable, beautifully curated furniture that brings people together.',
    image: '/images/hero-kitchen.svg',
    accent: '#5E7D78',
  },
  bedroom: {
    slug: 'bedroom',
    title: 'Bedrooms',
    headline: 'Rest, recharged',
    description:
      'Sleeping rooms built for calm — smart storage, plush comfort, and clean modern lines that help you truly unwind.',
    image: '/images/hero-bedroom.svg',
    accent: '#7C9994',
  },
  office: {
    slug: 'office',
    title: 'Offices',
    headline: 'Work that moves',
    description:
      'Flexible office furniture for professionals and teams who demand focus, comfort, and a space that inspires.',
    image: '/images/hero-office.svg',
    accent: '#26333B',
  },
  dining: {
    slug: 'dining',
    title: 'Dining Rooms',
    headline: 'Gather around the table',
    description:
      'Dining rooms designed for long evenings, great food, and the conversations that matter most.',
    image: '/images/hero-bedroom.svg',
    accent: '#8B7355',
  },
} as const;

export const SERVICES = [
  { label: 'Design Consultation', icon: '◈' },
  { label: 'Space Planning', icon: '◈' },
  { label: 'Kitchens', icon: '◈' },
  { label: 'Living Rooms', icon: '◈' },
  { label: 'Bedrooms', icon: '◈' },
  { label: 'Offices & Studies', icon: '◈' },
  { label: 'Dining Rooms', icon: '◈' },
  { label: 'Bathrooms', icon: '◈' },
  { label: 'Wardrobes & Storage', icon: '◈' },
  { label: 'Complete Homes', icon: '◈' },
  { label: 'Material Selection', icon: '◈' },
  { label: 'Installation & Handover', icon: '◈' },
] as const;
