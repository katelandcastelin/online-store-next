'use client';
import React from 'react';
import ProductDetails from '../../components/ProductDetails';
import skirtsProducts from '../skirtsProducts-data/skirtsProducts';

export default function SkirtDetailPage({ params }) {
  let product = skirtsProducts.find((entry) => entry.id === String(params.id));

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}
