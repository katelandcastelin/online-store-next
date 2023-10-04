'use client';
import React from 'react';
import styled from 'styled-components';

export default function GalleryPieces({ selectedArtwork }) {
  return (
    <div>
      Gallery pieces on display based of artwork id
      <h2>{selectedArtwork.title}</h2>
        {selectedArtwork.corsets.map((corset, index) => (
          <div key={index}>
            <img src={corset.image} alt={corset.description} />
            <p>{corset.description}</p>
          </div>
        ))}
    </div>
  )
}