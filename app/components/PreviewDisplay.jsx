'use client';
import React from 'react';
import styled from 'styled-components';
import { Assistant } from 'next/font/google';

const assistant = Assistant({subsets: ['latin']});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  max-width: 100vw;
`;

const DisplayBlock = styled.a`
  margin: 10px;
  height: 300px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    z-index: 1;
    position: absolute;
    font-size: 55px;
    letter-spacing: 3px;
    font-weight: 200;
    color: #efefef;
    text-shadow: 2px 2px 8px #000;
    transition: color 0.3s ease-in-out, font-size 0.3s ease-in-out;
    text-transform: uppercase;

  }

  :hover p {
    font-size: 52px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.8);
    transition: filter 0.3s ease-in-out;
  }

  :hover img {
    filter: none;
  }
`;

const WideDisplay = styled(DisplayBlock)`
  width: 100vw;
`;

const SmallBlockContainer = styled.div`
  display: -webkit-inline-box;
  flex-flow: wrap;
  justify-content: center;
  width: 100vw;
  justify-content: space-around;

  img {
    border-radius: 5px;
  }
`;

const WideBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export default function PreviewDisplay() {
  return (
    <Container className={assistant.className}>
      <SmallBlockContainer>
        <DisplayBlock href='/corsets'>
          <p>Corsets</p>
          <img src='/images/home-display/toile.png' />
        </DisplayBlock>
        <DisplayBlock href="/skirts">
          <p>Skirts</p>
          <img src='/images/home-display/figure-skirt.png' />
        </DisplayBlock>
      </SmallBlockContainer>
      <WideBlockContainer>
        <WideDisplay href='/gallery'>
          <p>Gallery</p>
          <img src='/images/artworks/creation-of-adam.jpeg' />
        </WideDisplay>
      </WideBlockContainer>
      <WideBlockContainer>
        <WideDisplay>
          <p>Workspace</p>
          <img src='/images/home-display/work.png' />
        </WideDisplay>
      </WideBlockContainer>
    </Container>
  )
}
