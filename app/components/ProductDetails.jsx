'use client';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const Container = styled.div`
  height: 100vh;
  margin-top: 5%;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90%;
  width: 50%;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfoContainer = styled.div`
  height: 90%;
  width: 30%;
  margin-left: 3%;
`;

const Description = styled.p`
  font-size: xx-large;
`;

const Price = styled.p`
  font-size: larger;
`;

export default function ProductDetails({ product }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Container>
      <ImageContainer>
        <img src={product.image} />
      </ImageContainer>
      <ProductInfoContainer>
        <Description>{product.description}</Description>
        <br />
        <Price>R {product.price}</Price>
        <br />
        <Accordion />
      </ProductInfoContainer>
    </Container>
  )
}
