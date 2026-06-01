import { assets } from './assets'
import type { ProductCard, TemplatePage } from './types'

const furnitureProducts: ProductCard[] = [
  {
    id: 'linen-sofa',
    title: 'Linen Modular Sofa',
    category: 'Living Room',
    price: '$1,450',
    rating: '4.8 / 5',
    reviewCount: 213,
    badges: ['New'],
    imageUrl: assets.products.ocoSilver,
  },
  {
    id: 'oak-table',
    title: 'Round Oak Dining Table',
    category: 'Dining',
    price: '$860',
    rating: '4.7 / 5',
    reviewCount: 96,
    badges: ['Solid Oak'],
    imageUrl: assets.products.ocoBlack,
  },
  {
    id: 'storage-console',
    title: 'Low Storage Console',
    category: 'Storage',
    price: '$520',
    rating: '4.6 / 5',
    reviewCount: 74,
    badges: ['Small Space'],
    imageUrl: assets.products.sentryGreen,
  },
  {
    id: 'linen-bed',
    title: 'Soft Linen Bed Frame',
    category: 'Bedroom',
    price: '$980',
    rating: '4.9 / 5',
    reviewCount: 141,
    badges: ['Bestseller'],
    imageUrl: assets.products.chronoLeather,
  },
]

const decorProducts: ProductCard[] = [
  {
    id: 'ceramic-lamp',
    title: 'Ceramic Table Lamp',
    category: 'Lighting',
    price: '$180',
    rating: '4.8 / 5',
    reviewCount: 289,
    badges: ['New Color'],
    imageUrl: assets.products.timeTellerGold,
  },
  {
    id: 'woven-rug',
    title: 'Woven Area Rug',
    category: 'Decor',
    price: '$340',
    rating: '4.7 / 5',
    reviewCount: 122,
    badges: ['Handwoven'],
    imageUrl: assets.products.eddyBlue,
  },
]

export const page: TemplatePage = {
  meta: {
    title: 'HavenHaus Living',
    description: 'Home-goods e-commerce storefront with working cart, wishlist, checkout, and live newsletter capture.',
  },
  announcements: [
    'Free design consult with orders over $500',
    'Free shipping on select furniture',
    'Sign up for 15% off your first room edit',
  ],
  hero: {
    eyebrow: 'Fresh room edits',
    title: 'Make room for living',
    subtitle: 'Furniture, decor, lighting, and home essentials for relaxed modern spaces.',
    cta: { label: 'Shop Room Edits', href: '#new-season' },
    imageUrl: assets.heroImageUrl,
  },
  quickLinks: [
    { title: 'Living Room', href: '#new-season', imageUrl: assets.categories.womens },
    { title: 'Bedroom', href: '#categories', imageUrl: assets.categories.analog },
    { title: 'Dining', href: '#categories', imageUrl: assets.categories.digital },
    { title: 'Small Space', href: '#categories', imageUrl: assets.categories.custom },
    { title: 'Outdoor', href: '#surf', imageUrl: assets.categories.surf },
    { title: 'Lighting', href: '#categories', imageUrl: assets.categories.bands },
    { title: 'Rugs & Decor', href: '#categories', imageUrl: assets.categories.headwear },
  ],
  newSeason: {
    eyebrow: 'New this season',
    title: 'Furniture and decor for calmer everyday rooms',
    description: 'Tabbed product rails support room-based shopping, materials, seasonal edits, and bundles.',
    cta: { label: 'View all', href: '#new-season' },
    items: furnitureProducts,
    tabs: [
      {
        label: 'Furniture',
        description: 'Shop foundational pieces for living rooms, bedrooms, dining spaces, and storage.',
        products: furnitureProducts,
      },
      {
        label: 'Decor',
        description: 'Layer rooms with lighting, rugs, textiles, ceramics, and finishing touches.',
        products: decorProducts,
      },
    ],
  },
  brandBanners: [
    {
      eyebrow: 'Home made easier',
      title: 'Room-ready collections without the showroom pressure.',
      description:
        'Use this editorial banner for home campaigns, style guides, material stories, or design services.',
      cta: { label: 'Shop Best Sellers', href: '#new-season' },
      imageUrl: assets.brandVideoPosterUrl,
      dark: true,
    },
  ],
  surfRail: {
    eyebrow: 'Outdoor living',
    title: 'Patio and balcony essentials',
    description:
      'Collection rails can promote seasonal home categories, bundles, delivery offers, and design services.',
    cta: { label: 'Shop Outdoor', href: '#surf' },
    items: [
      {
        id: 'patio-chair',
        title: 'Stacking Patio Chair',
        category: 'Outdoor',
        price: '$145',
        rating: '4.6 / 5',
        reviewCount: 78,
        badges: ['Weather Ready'],
        imageUrl: assets.products.heat,
      },
      {
        id: 'lantern-set',
        title: 'Solar Lantern Set',
        category: 'Outdoor Lighting',
        price: '$95',
        rating: '4.8 / 5',
        reviewCount: 201,
        badges: ['Set of 3'],
        imageUrl: assets.products.highTide,
      },
    ],
  },
  categoryCollections: {
    eyebrow: 'Shop by category',
    title: 'Home retail categories that are easy to customize',
    description: 'Use the same card structure for rooms, materials, decor, delivery services, and bundles.',
    items: [
      { title: 'Living Room', href: '#new-season', imageUrl: assets.categories.analog },
      { title: 'Bedroom', href: '#new-season', imageUrl: assets.categories.womens },
      { title: 'Dining & Kitchen', href: '#categories', imageUrl: assets.categories.custom },
      { title: 'Decor & Lighting', href: '#categories', imageUrl: assets.categories.bands },
    ],
  },
  newsletter: {
    title: 'Get 15% off your first room edit',
    description: 'A compact sign-up block for seasonal launches, design services, and home offers.',
    emailPlaceholder: 'you@example.com',
    submitLabel: 'Sign Up',
  },
}
