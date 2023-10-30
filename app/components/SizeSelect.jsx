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
`;

const SizeOptions = styled.div`
  display: flex;
  justify-content: center;
`;

const SizeBlock = styled.div`
  height: 50px;
  width: 60px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const SizeInput = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 80px;
  display: flex;
  padding: 5px;
  margin-right: 10px;
  background-color: transparent;
  border: solid #c4c4c4;
  font-size: medium;
  color: #555;
`;

const Label = styled.label`
  margin-right: 5px;
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