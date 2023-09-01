'use client';
import React from 'react';
import styled from 'styled-components';

const DisplayBlock = styled.div`
  margin: 10px;
  /* height: 400px;
  width: 600px; */
  height: 40%;
  width: 85%;
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
  width: 100%;
  border: 1px solid #000;
`;

export default function PreviewDisplay() {
  return (
    <div>
      <div>
        <DisplayBlock>
          <p>Collection coming soon...</p>
          <img src='/images/home-display/collection.jpeg' />
        </DisplayBlock>
        <DisplayBlock>
          <p>Workspace</p>
          <img src='/images/home-display/collection2.png' />
        </DisplayBlock>
      </div>
      <div>
        <WideDisplay>
          Wide display block
        </WideDisplay>
      </div>
    </div>
  )
}
