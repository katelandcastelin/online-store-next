import React from 'react';
import Link from 'next/link';
import styles from './skirtsPage.module.css';
import skirtProducts from './skirtsProducts-data/skirtsProducts';
import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({ subsets: ['latin'], weight: ['700'] });

export default function SkirtsPage() {
  return (
    <div className={styles.main}>
      <h1 className={tangerine.className}>Shop Skirts</h1>
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
