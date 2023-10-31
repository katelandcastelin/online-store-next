import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0 0 20px 10px;
  padding: 10px 23px;
  background-color: #757575;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  letter-spacing: 0.9px;

  :hover {
    cursor: pointer;
    background-color: #6b6b6b;
  }

  :active {
    background-color: #525252;
  }
`;

export default function AddToCart() {
  return (
    <div>
      <Button>Add to cart</Button>
    </div>
  )
}