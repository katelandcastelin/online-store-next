import corsetItems from "../corsetItemGallery-data/corsetItemGallery";

const corsetProducts = [
  {
    id: 1,
    image: '/images/order-products/botanical-test.png',
    price: 880,
    description: 'Botanical',
    images: corsetItems.find(item => item.id === 1).images,
  },
  {
    id: 2,
    image: '/images/order-products/ub-toile-front.jpeg',
    price: 990,
    description: 'Toile de Jouy',
  },
  {
    id: 3,
    image: '/images/order-products/three-graces.jpg',
    price: 1050,
    description: 'The Three Graces',
  },
  {
    id: 4,
    image: '/images/order-products/cat-1.jpg',
    price: 880,
    description: 'Pot Cat',
  },
  {
    id: 5,
    image: '/images/order-products/ub-sn.jpg',
    price: 880,
    description: 'Starry Night underbust',
  },
  {
    id: 6,
    image: '/images/order-products/tapestry.jpeg',
    price: 1050,
    description: 'Vintage tapestry',
  },
  {
    id: 7,
    image: '/images/order-products/ub-chain.jpg',
    price: 1050,
    description: 'Chain underbust',
  },
  {
    id: 8,
    image: '/images/order-products/fb-bov.jpg',
    price: 1050,
    description: 'The Birth of Venus full bust',
  },
  {
    id: 9,
    image: '/images/order-products/coa.png',
    price: 1050,
    description: 'The Creation of Adam',
  },
  {
    id: 10,
    image: '/images/corsets/beige-toile/beige2.png',
    price: 1050,
    description: 'Toile de Jouy',
    images: corsetItems.find(item => item.id === 10).images,
  },
  {
    id: 11,
    image: '/images/corsets/berry/berry1.png',
    price: 1050,
    description: 'Berries',
    images: corsetItems.find(item => item.id === 11).images,
  },
  {
    id: 12,
    image: '/images/corsets/sn-fb/sn-fb.png',
    price: 1050,
    description: 'Starry Night full bust',
  },
  {
    id: 13,
    image: '/images/corsets/bov-fb/bov-fb.png',
    price: 1050,
    description: 'Birth of Venus full bust',
  },
  {
    id: 14,
    image: '/images/corsets/prim-fb/prim-fb.png',
    price: 1050,
    description: 'Primavera full bust',
  },
];

export default corsetProducts;