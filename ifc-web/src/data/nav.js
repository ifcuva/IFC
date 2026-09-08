// Navigation structure matching virginiaifc.com
export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Chapters',
    href: '/chapters',
  },
  {
    label: 'Recruitment',
    href: '/recruitment',
  },
  {
    label: 'IFC-JC',
    href: '/ifc-jc',
  },
  {
    label: 'Governing Board',
    href: '/governing-board',
    children: [
      { label: 'Public Releases', href: '/governing-board/public-releases' },
    ],
  },
  {
    label: 'Scholarships & Sponsorships',
    href: '/scholarships',
    children: [
      { label: 'Scholarships', href: '/scholarships' },
      { label: 'Sponsorships', href: '/sponsorships' },
    ],
  },
];
