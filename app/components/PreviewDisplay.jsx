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
          <p>e.g 1</p>
          <img />
        </DisplayBlock>
        <DisplayBlock href="/skirts">
          <p>e.g 2</p>
          <img />
        </DisplayBlock>
      </SmallBlockContainer>
      <WideBlockContainer>
        <WideDisplay href='/gallery'>
          <p>e.g 3</p>
          <img />
        </WideDisplay>
      </WideBlockContainer>
      <WideBlockContainer>
        <WideDisplay>
          <p>e.g 4</p>
          <img />
        </WideDisplay>
      </WideBlockContainer>
    </Container>
  )
}
