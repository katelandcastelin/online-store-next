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
  margin-bottom: 10px;
`;

const SizeBlock = styled.div`
  height: 47px;
  width: 49px;
  border: 2px solid #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  cursor: pointer;
  background-color: #000000;
  color: #ffffff;

  :hover {
    color: #000;
    background-color: #ffffff;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SizeInput = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
`;

const Input = styled.input`
  width: 80px;
  display: flex;
  padding: 5px;
  background-color: transparent;
  border: solid #ffffff;
  font-size: medium;
  color: #ffffff;
  border-radius: 3px;
`;

const Label = styled.label`
  margin-right: 5px;
  color: #ffffff;
`;

export default function SizeSelectCorset() {

  return (
    <Container>
      <SizeOptions>
        {sizes.map((size) => (
          <SizeBlock key={size}>{size}</SizeBlock>
        ))}
      </SizeOptions>
      <InputContainer>
        <SizeInput>
          <Label>Chest:</Label>
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