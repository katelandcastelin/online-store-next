'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import ProductGallery from './ProductGallery';
import corsetProducts from '../corsets/corsetsProducts-data/corsetsProducts';
import skirtProducts from '../skirts/skirtsProducts-data/skirtsProducts';

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

  const [selectedImage, setSelectedImage] = useState(product.image);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(product.image);
  }, [product]);

  const productImages = corsetProducts.find(item => item.id === product.id)?.images || [];
  const productImages2 = skirtProducts.find(item => item.id === product.id)?.images || [];

  const allProductImages = productImages.concat(productImages2);

  return (
    <Container>
      <ProductGallery images={allProductImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      <ImageContainer>
        <img src={selectedImage} />
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
