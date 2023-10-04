'use client';
import { React, useState } from 'react';
import styles from './galleryPage.module.css';
import ArtworkImages from './galleryArtworks-data/galleryArtworks';
import CloseIcon from '@mui/icons-material/Close';
import GalleryPieces from '../components/GalleryPieces';

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleImageClick = (artworkId) => {
    setSelectedArtwork(artworkId);
  }

  const handleCloseClick = () => {
    setSelectedArtwork(null);
  }

  const artworks = ArtworkImages.map((artwork) => (
    <div key={artwork.id} onClick={() => handleImageClick(artwork)}> 
      <div className={styles.frame}>
        <img className={styles.artwork} src={artwork.id} />
        <div className={styles.labelContainer}>
          <div className={styles.labelContents}>
            <div className={styles.title}>{artwork.title}</div>
            <div className={styles.artist}>{artwork.artist}</div>
            <div className={styles.year}>{artwork.year}</div>
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div className={styles.main}>
      <h1>Browse by artwork</h1>
      <div className={styles.galleryContainer}>
        {artworks}

        {selectedArtwork && (
          <div className={styles.fullScreenContainer}>
            <button className={styles.closeButton} onClick={handleCloseClick}>
              <CloseIcon />
            </button>
            <GalleryPieces selectedArtwork={selectedArtwork} />
          </div>
        )}
      </div>
    </div>
  );
}
