import skirtGallery from "../skirtGallery-data/skirtGallery";

const skirtProducts = [
  {
    id: 1,
    image: '/images/skirts/black-brocade/1.png',
    price: 880,
    description: 'Black brocade',
    images: skirtGallery.find(item => item.id === 1).images,
  },
  {
    id: 2,
    image: '/images/skirts/bov/1.png',
    price: 880,
    description: 'Birth of Venus',
    images: skirtGallery.find(item => item.id === 2).images,
  },
];

export default skirtProducts;
