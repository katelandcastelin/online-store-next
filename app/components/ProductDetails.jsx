'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #000;
  height: 400px;
  width: 400px;
`;

export default function ProductDetails({ product }) {
  return (
    <div>
      <div>
        <img />
      </div>
      <Container>Hello</Container>
      <p>R {product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}
