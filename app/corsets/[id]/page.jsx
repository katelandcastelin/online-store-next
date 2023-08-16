import React from 'react';
import { useRouter } from 'next/navigation';
import ProductDetails from '../components/ProductDetails';
import corsetProducts from '../corsetsProducts-data/corsetsProducts';

export default function CorsetDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // return <p>Post: {router.query.id}</p>

  const selectedProduct = corsetProducts.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Product not found.</div>
  }

  return <ProductDetails product={selectedProduct} />
}
