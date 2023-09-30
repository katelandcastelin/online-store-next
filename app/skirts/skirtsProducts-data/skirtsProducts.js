import skirtGallery from "../skirtGallery-data/skirtGallery";

const skirtProducts = [
  {
    id: 'S1',
    image: '/images/skirts/black-brocade/1.png',
    price: 880,
    description: 'Black brocade',
    images: skirtGallery.find(item => item.id === 'S1').images,
  },
  {
    id: 'S2',
    image: '/images/skirts/bov/1.png',
    price: 880,
    description: 'Birth of Venus',
    images: skirtGallery.find(item => item.id === 'S2').images,
  },
  {
    id: 'S3',
    image: '/images/skirts/sn/1.png',
    price: 880,
    description: 'Starry Night',
    images: skirtGallery.find(item => item.id === 'S3').images,
  },
  {
    id: 'S4',
    image: '/images/skirts/ab/1.png',
    price: 880,
    description: 'Almond Blossoms',
    images: skirtGallery.find(item => item.id === 'S4').images,
  },
];

export default skirtProducts;
