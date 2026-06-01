import type { NavGroup } from './types'

export const site = {
  brand: {
    name: 'HavenHaus Living',
    shortName: 'HavenHaus',
  },
  utilityLinks: [
    { label: 'Order Status', href: '#order-status' },
    { label: 'Find a Store', href: '#stores' },
    { label: 'Sign in', href: '#signin' },
  ],
  countries: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France'],
  footer: '© 2026 HavenHaus Living. Working home-goods storefront with live newsletter capture.',
}

export const navGroups: NavGroup[] = [
  {
    label: 'Rooms',
    featured: 'Shop by room',
    items: [
      { label: 'New Arrivals', href: '#new-season' },
      { label: 'Best Sellers', href: '#new-season' },
      { label: 'Living Room', href: '#categories' },
      { label: 'Bedroom', href: '#categories' },
      { label: 'Kitchen', href: '#categories' },
      { label: 'Outdoor', href: '#surf' },
    ],
  },
  {
    label: 'Collections',
    featured: 'Seasonal edits',
    items: [
      { label: 'Small Space', href: '#new-season' },
      { label: 'Natural Materials', href: '#categories' },
      { label: 'Host Essentials', href: '#new-season' },
      { label: 'Gift Guide', href: '#newsletter' },
    ],
  },
  {
    label: 'Furniture',
    featured: 'Materials and sizing',
    items: [
      { label: 'Sofas', href: '#categories' },
      { label: 'Tables', href: '#categories' },
      { label: 'Storage', href: '#categories' },
      { label: 'Lighting', href: '#categories' },
    ],
  },
  {
    label: 'Decor & More',
    featured: 'Accessories',
    items: [
      { label: 'Rugs', href: '#categories' },
      { label: 'Bedding', href: '#categories' },
      { label: 'Kitchenware', href: '#categories' },
    ],
  },
]
