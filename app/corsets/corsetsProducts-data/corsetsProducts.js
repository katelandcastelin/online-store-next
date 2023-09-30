import corsetGallery from "../corsetGallery-data/corsetGallery";

const corsetProducts = [
  {
    id: 'C1',
    image: '/images/corsets/botanical-fl/1.png',
    price: 880,
    description: 'Botanical',
    images: corsetGallery.find(item => item.id === 'C1').images,
  },
  {
    id: 'C2',
    image: '/images/corsets/toile-ub/1.jpeg',
    price: 990,
    description: 'Toile de Jouy underbust',
    images: corsetGallery.find(item => item.id === 'C2').images,
  },
  {
    id: 'C3',
    image: '/images/corsets/three-graces/1.jpg',
    price: 1050,
    description: 'The Three Graces',
    images: corsetGallery.find(item => item.id === 'C3').images,
  },
  {
    id: 'C4',
    image: '/images/corsets/pot-cat/1.jpg',
    price: 880,
    description: 'Pot Cat',
    images: corsetGallery.find(item => item.id === 'C4').images,
  },
  {
    id: 'C5',
    image: '/images/corsets/sn-ub/1.jpg',
    price: 880,
    description: 'Starry Night underbust',
    images: corsetGallery.find(item => item.id === 'C5').images,
  },
  {
    id: 'C6',
    image: '/images/corsets/tapestry/1.jpeg',
    price: 1050,
    description: 'Vintage tapestry',
    images: corsetGallery.find(item => item.id === 'C6').images,
  },
  {
    id: 'C7',
    image: '/images/corsets/chain-ub/1.jpg',
    price: 1050,
    description: 'Chain underbust',
    images: corsetGallery.find(item => item.id === 'C7').images,
  },
  {
    id: 'C8',
    image: '/images/corsets/bov-strapless/1.jpg',
    price: 1080,
    description: 'The Birth of Venus strapless full bust',
    images: corsetGallery.find(item => item.id === 'C8').images,
  },
  {
    id: 'C9',
    image: '/images/corsets/coa/1.png',
    price: 1050,
    description: 'The Creation of Adam',
    images: corsetGallery.find(item => item.id === 'C9').images,
  },
  {
    id: 'C10',
    image: '/images/corsets/beige-toile/1.png',
    price: 1050,
    description: 'Toile de Jouy',
    images: corsetGallery.find(item => item.id === 'C10').images,
  },
  {
    id: 'C11',
    image: '/images/corsets/berry/1.png',
    price: 1050,
    description: 'Berries',
    images: corsetGallery.find(item => item.id === 'C11').images,
  },
  {
    id: 'C12',
    image: '/images/corsets/sn-straps/1.png',
    price: 1050,
    description: 'Starry Night full bust',
    images: corsetGallery.find(item => item.id === 'C12').images,
  },
  {
    id: 'C13',
    image: '/images/corsets/bov-straps/1.png',
    price: 1050,
    description: 'Birth of Venus with straps full bust',
    images: corsetGallery.find(item => item.id === 'C13').images,
  },
  {
    id: 'C14',
    image: '/images/corsets/prim-fb/1.png',
    price: 1050,
    description: 'Primavera full bust',
    images: corsetGallery.find(item => item.id === 'C14').images,
  },
];

export default corsetProducts;
