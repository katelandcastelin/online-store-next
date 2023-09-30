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
];

export default skirtProducts;
