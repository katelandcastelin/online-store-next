'use client';
import React from 'react';
import styled from 'styled-components';

const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL"
]

const Container = styled.div`
  border: 1px solid #000;
  height: 20%;
`;

const SizeOptions = styled.div`
  display: flex;
`;

const SizeBlock = styled.div`
  height: 50px;
  width: 60px;
  border: 1px solid #000;
`;

export default function SizeSelect() {

  return (
    <Container>
      <SizeOptions>
      {sizes.map((size) => (
          <SizeBlock>{size}</SizeBlock>
      ))}
      </SizeOptions>
    </Container>
  )
}