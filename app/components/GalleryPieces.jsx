'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  overflow: scroll;
`;

const ListBlock = styled.div`
  width: 80%;
  height: 100%;
  padding: 20px;
  margin-top: 40px;
  background-color: #ffffff;
`;

const ImagesContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 20px;
  margin-top: 40px;
  background-color: #ffffff;
`;

const Title = styled.h2`
  font-size: xx-large;
  display: flex;
  justify-content: center;
  letter-spacing: 0.1em;
  margin: 20px 0 40px 0;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  margin: 50px;
`;

const CorsetImage = styled.img`
  width: 30%;
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
`;

export default function GalleryPieces({ selectedArtwork }) {
  return (
    <Container>
      <ListBlock>
        <Title>{selectedArtwork.title}</Title>
        <ImagesContainer>
          {selectedArtwork.corsets.map((corset, index) => (
            <Layout key={index}>
              <CorsetImage src={corset.image} alt={corset.description} />
              <p>{corset.description}</p>
            </Layout>
          ))}
        </ImagesContainer>
      </ListBlock>
    </Container>
  )
}
