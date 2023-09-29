import corsetGallery from "../corsetItemGallery-data/corsetGallery-data";

const corsetProducts = [
  {
    id: 1,
    image: '/images/corsets/botanical-fl/1.png',
    price: 880,
    description: 'Botanical',
    images: corsetGallery.find(item => item.id === 1).images,
  },
  {
    id: 2,
    image: '/images/corsets/toile-ub/1.jpeg',
    price: 990,
    description: 'Toile de Jouy underbust',
    images: corsetGallery.find(item => item.id === 2).images,
  },
  {
    id: 3,
    image: '/images/corsets/three-graces/1.jpg',
    price: 1050,
    description: 'The Three Graces',
    images: corsetGallery.find(item => item.id === 3).images,
  },
  {
    id: 4,
    image: '/images/corsets/pot-cat/1.jpg',
    price: 880,
    description: 'Pot Cat',
    images: corsetGallery.find(item => item.id === 4).images,
  },
  {
    id: 5,
    image: '/images/corsets/sn-ub/1.jpg',
    price: 880,
    description: 'Starry Night underbust',
    images: corsetGallery.find(item => item.id === 5).images,
  },
  {
    id: 6,
    image: '/images/corsets/tapestry/1.jpeg',
    price: 1050,
    description: 'Vintage tapestry',
    images: corsetGallery.find(item => item.id === 6).images,
  },
  {
    id: 7,
    image: '/images/corsets/chain-ub/1.jpg',
    price: 1050,
    description: 'Chain underbust',
    images: corsetGallery.find(item => item.id === 7).images,
  },
  {
    id: 8,
    image: '/images/corsets/bov-strapless/1.jpg',
    price: 1080,
    description: 'The Birth of Venus strapless full bust',
    images: corsetGallery.find(item => item.id === 8).images,
  },
  {
    id: 9,
    image: '/images/corsets/coa/1.png',
    price: 1050,
    description: 'The Creation of Adam',
    images: corsetGallery.find(item => item.id === 9).images,
  },
  {
    id: 10,
    image: '/images/corsets/beige-toile/beige1.png',
    price: 1050,
    description: 'Toile de Jouy',
    images: corsetGallery.find(item => item.id === 10).images,
  },
  {
    id: 11,
    image: '/images/corsets/berry/berry1.png',
    price: 1050,
    description: 'Berries',
    images: corsetGallery.find(item => item.id === 11).images,
  },
  {
    id: 12,
    image: '/images/corsets/sn-straps/1.png',
    price: 1050,
    description: 'Starry Night full bust',
    images: corsetGallery.find(item => item.id === 12).images,
  },
  {
    id: 13,
    image: '/images/corsets/bov-straps/1.png',
    price: 1050,
    description: 'Birth of Venus with straps full bust',
    images: corsetGallery.find(item => item.id === 13).images,
  },
  {
    id: 14,
    image: '/images/corsets/prim-fb/1.png',
    price: 1050,
    description: 'Primavera full bust',
    images: corsetGallery.find(item => item.id === 14).images,
  },
];

export default corsetProducts;
