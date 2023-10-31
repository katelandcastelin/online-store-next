'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import ProductGallery from './ProductGallery';
import SizeSelectCorset from './SizeSelectCorset';
import corsetProducts from '../corsets/corsetsProducts-data/corsetsProducts';
import skirtProducts from '../skirts/skirtsProducts-data/skirtsProducts';
import AddToCart from './AddToCart';

const Container = styled.div`
  height: 100vh;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  padding: 0 3rem;

  @media (max-width: 1040px) {
    flex-direction: column;
    padding: 3rem;
    height: 100%;
  }
`;

const ImageGalleryContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  @media (max-width: 1040px) {
    display: flex;
    margin-bottom: 40px;
  }

  @media (max-width: 780px) {
    display: contents;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90%;
  width: 100%;
  width: 700px;
  margin: 0 10px;

  @media (max-width: 1290px) {
    width: 650px;
  }

  @media (max-width: 1190px) {
    width: 580px;
  }

  @media (max-width: 1140px) {
    width: 530px;
  }

  @media (max-width: 1095px) {
    width: 500px;
  }

  @media (max-width: 1040px) {
    width: 100%;
    height: 90vh;
  }

  @media (max-width: 780px) {
    height: 60vh;
    margin: 0 0 10px 0;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProductInfoContainer = styled.div`
  height: 90%;
  width: 30%;

  @media (max-width: 1040px) {
    width: 100%;
    padding: 0 10%;
  }

  @media (max-width: 780px) {
    margin-top: 30px;
  }
`;

const Description = styled.p`
  font-size: xx-large;
  margin-left: 10px;
`;

const Price = styled.p`
  font-size: larger;
  margin-left: 20px;
  color: #555;
`;

export default function ProductDetails({ product }) {

  const [selectedImage, setSelectedImage] = useState(product.image);

  useEffect(() => {
    window.scrollTo(0, 180);
    setSelectedImage(product.image);
  }, [product]);

  const productImages = corsetProducts.find(item => item.id === product.id)?.images || [];
  const productImages2 = skirtProducts.find(item => item.id === product.id)?.images || [];

  const allProductImages = productImages.concat(productImages2);

  return (
    <Container>
      <ImageGalleryContainer>
        <ImageContainer>
          <img src={selectedImage} />
        </ImageContainer>
        <ProductGallery images={allProductImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      </ImageGalleryContainer>
      <ProductInfoContainer>
        <Description>{product.description}</Description>
        <br />
        <Price>R {product.price}</Price>
        <br />
        <SizeSelectCorset />
        <AddToCart />
        <Accordion />
      </ProductInfoContainer>
    </Container>
  )
}
