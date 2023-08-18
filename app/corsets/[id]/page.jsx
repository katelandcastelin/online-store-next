'use client';
import React from 'react';
import ProductDetails from '../../components/ProductDetails';
import corsetProducts from '../../corsetsProducts-data/corsetsProducts';

export default function CorsetDetailPage({ params }) {
  let product = corsetProducts.find((entry) => entry.id === Number(params.id));

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}
