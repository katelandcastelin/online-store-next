'use client';
import React from 'react';
import styled from 'styled-components';

const DisplayBlock = styled.div`
  height: 400px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    filter: grayscale(1);
    border-radius: 25px;

    :hover {
      filter: none;
    }
  }
`;

export default function PreviewDisplay() {
  return (
    <div>
      <DisplayBlock>
        <img src='/images/home-display/collection.jpeg' />
      </DisplayBlock>
      <DisplayBlock>
        <img src='/images/home-display/collection2.png' />
      </DisplayBlock>
    </div>
  )
}
