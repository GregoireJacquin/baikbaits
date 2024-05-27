export const PRODUCT_CATEGORIES = [
  {
    label: 'Leurres',
    value: 'baits' as const,
    featured: [
      {
        name: 'Leurres',
        href: `/products?category=baits`,
        imageSrc: '/nav/baits.jpg',
      },

    ],
  },
  {
    label: 'Vêtements',
    value: 'clothing' as const,
    featured: [
      {
        name: 'Vêtements',
        href: '/products?category=clothing',
        imageSrc: '/nav/clothing.jpg',
      },
    ],
  },
]
