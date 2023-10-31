'use client';
import React from 'react';
import styled from 'styled-components';

const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL"
];

const Container = styled.div`
  width: 100%;
  margin-left: 10px;
`;

const SizeOptions = styled.div`
  display: flex;
`;

const SizeBlock = styled.div`
  height: 47px;
  width: 49px;
  border: 2px solid #dcd2d2;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px;
  cursor: pointer;
  background-color: #e2dbdb;
  color: #555;

  :hover {
    color: #000;
    background-color: #dacbcb;
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const SizeInput = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 10px 0;
`;

const Input = styled.input`
  width: 80px;
  display: flex;
  padding: 5px;
  background-color: transparent;
  border: solid #c4c4c4;
  font-size: medium;
  color: #555;
  border-radius: 3px;
`;

const Label = styled.label`
  margin-right: 5px;
  color: #303030;
`;

export default function SizeSelect() {

  return (
    <Container>
      <SizeOptions>
        {sizes.map((size) => (
          <SizeBlock>{size}</SizeBlock>
        ))}
      </SizeOptions>
      <InputContainer>
        <SizeInput>
          <Label>Bust:</Label>
          <Input type='number' />
        </SizeInput>
        <SizeInput>
          <Label>Waist:</Label>
          <Input type='number' />
        </SizeInput>
      </InputContainer>
    </Container>
  )
}