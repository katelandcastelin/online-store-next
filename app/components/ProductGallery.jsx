import React from 'react';
import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Container = styled.div`
  height: 90%;

  @media (max-width: 1040px) {
    height: 90vh;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

const ThumbnailList = styled(ImageList)`
  max-height: 100%;
  height: auto;
  width: 150px;
`;

const ImageThumbnail = styled(ImageListItem)`
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const HorizontalThumbnailList = styled.div`
  @media (max-width: 780px) {
    border: 1px solid #000;
    height: 150px;
    width: 150px;
  }
`;

export default function ProductGallery({ images, setSelectedImage }) {
  return (
    <div>
      <Container>
        <ThumbnailList cols={1} rowHeight={164}>
          {images.map((image, index) => (
            <ImageThumbnail key={index} onClick={() => setSelectedImage(image)}>
              <img
                srcSet={image}
                src={image}
                alt={index}
                loading="lazy"
              />
            </ImageThumbnail>
          ))}
        </ThumbnailList>
      </Container>
      <HorizontalThumbnailList>

      </HorizontalThumbnailList>
    </div>
  )
}
