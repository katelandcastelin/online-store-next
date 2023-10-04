'use client';
import React from 'react';
import styled from 'styled-components';
import { Assistant } from 'next/font/google';

const assistant = Assistant({subsets: ['latin']});

const Container = styled.div`
  max-height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  overflow: scroll;
`;

const ListBlock = styled.div`
  background-color: #fff;
  min-height: 93vh;
  width: 80%;
  height: 100%;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-bottom: 19px;
  letter-spacing: 0.1em;
  z-index: 1;
  font-size: 55px;
  letter-spacing: 3px;
  font-weight: 200;
  color: #000;
  text-transform: uppercase;
`;

const CorsetImage = styled.img`
  width: 30%;
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
`;

const Description = styled.p`
  text-align: left;
  font-size: large;
  margin-left: 40px;
  font-weight: 300;
`;

export default function GalleryPieces({ selectedArtwork }) {
  return (
    <Container>
      <ListBlock>
        <Title className={assistant.className}>{selectedArtwork.title}</Title>
        <div>
          {selectedArtwork.corsets.map((corset, index) => (
            <div key={index}>
              <CorsetImage src={corset.image} alt={corset.description} />
              {/* <Description  className={assistant.className}>{corset.description}</Description> */}
            </div>
          ))}
        </div>
      </ListBlock>
    </Container>
  )
}
