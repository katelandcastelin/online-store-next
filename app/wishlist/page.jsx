import React from 'react';
import styles from './wishlistPage.module.css';

export default function WishlistPage() {

  return (
    <div className={styles.main}>
      wishlist
      <div>
        {wishlistItems.map((wishlist) => (
          <div key={wishlist}>{wishlist}</div>
        ))}
      </div>
    </div>
  )
}
