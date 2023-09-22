import React from 'react';
import Link from 'next/link';
import styles from './skirtsPage.module.css';
import corsetProducts from '../corsets/corsetsProducts-data/corsetsProducts';
import skirtProducts from './skirtsProducts-data/skirtsProducts';

export default function SkirtsPage() {
  return (
    <div className={styles.main}>
      <h1>Shop Skirts</h1>
      <h2>Coming Soon..</h2>
      <div className={styles.grid}>
        {skirtProducts.map((item) => (
          <Link key={item.id} href={`/skirts/${item.id}`} className={styles.card}>
            <div>
              <div className={styles.skirtImage}>
                <img src={item.image} alt={item.description} />
              </div>
              <p>R {item.price}</p>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
