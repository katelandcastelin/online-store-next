import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0 0 20px 10px;
  padding: 5px 10px;

  :hover {
    cursor: pointer;
  }
`;

export default function AddToCart() {
  return (
    <div>
      <Button>Add to cart</Button>
    </div>
  )
}