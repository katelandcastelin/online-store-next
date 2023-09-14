import React from 'react';
import Link from 'next/link';
import styles from './corsetsPage.module.css';
import corsetProducts from '../corsetsProducts-data/corsetsProducts';

export default function CorsetsPage() {
  const corsets = corsetProducts.reverse();
  return (
    <div className={styles.main}>
      <h1>Shop Corsets</h1>
      <div className={styles.grid}>
        {corsets.map((item) => (
          <Link key={item.id} href={`/corsets/${item.id}`} className={styles.card}>
            <div>
              <div className={styles.corsetImage}>
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
