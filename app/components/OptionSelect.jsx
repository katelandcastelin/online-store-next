import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #000;
  height: 20%;
`;

const Sizes = styled.div`
  border: 1px solid #000;
`

export default function OptionSelect() {
  return (
    <Container>
      <Sizes>
        Select size
      </Sizes>
    </Container>
  )
}