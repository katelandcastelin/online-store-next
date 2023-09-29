import React from 'react';
import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Container = styled.div`
  height: 90%;
  margin-right: 10px;
`;

export default function ProductGallery({ images }) {
  return (
    <Container>
      <ImageList sx={{ width: 150, height: '100%' }} cols={1} rowHeight={164}>
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={image}
              src={image}
              alt={index}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
