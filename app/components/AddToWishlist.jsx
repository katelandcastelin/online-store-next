import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  padding: 10px 15px;
  color: #555;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 3rem;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;

  img {
    margin-right: 4px;
    height: 16px;
    width: 16px;
  }

  :hover {
    cursor: pointer;
    color: #6b6b6b;
  }

  :active {
    color: #525252;
    transform: translateY(1px);
  }
`;

export default function AddToWishlist() {
  return (
    <div>
      <P>
        <img src='/heart.png' />
        Add to wishlist
      </P>
    </div>
  )
}