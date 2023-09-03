'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  max-width: 100vw;
`;

const DisplayBlock = styled.div`
  margin: 10px;
  height: 300px;
  width: 500px;
  /* height: 40%;
  width: 85%; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    z-index: 1;
    position: absolute;
    font-size: x-large;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    filter: grayscale(1);
    border-radius: 25px;
  }

  :hover img {
    filter: none;
  }
`;

const WideDisplay = styled(DisplayBlock)`
  width: 80%;
  border: 1px solid #000;
`;

const SmallBlockContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const WideBlockContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export default function PreviewDisplay() {
  return (
    <Container>
      <SmallBlockContainer>
        <DisplayBlock>
          <p>Collection coming soon...</p>
          <img src='/images/home-display/collection.jpeg' />
        </DisplayBlock>
        <DisplayBlock>
          <p>Workspace</p>
          <img src='/images/home-display/collection2.png' />
        </DisplayBlock>
        <DisplayBlock>
          <p>Test</p>
          <img src='/images/home-display/collection2.png' />
        </DisplayBlock>
      </SmallBlockContainer>
      <WideBlockContainer>
        <WideDisplay>
          Wide display block
        </WideDisplay>
      </WideBlockContainer>
    </Container>
  )
}
