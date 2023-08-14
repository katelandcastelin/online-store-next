import styles from './corsetsPage.module.css';
import corsetProducts from '../corsetsProducts-data/corsetsProducts';

export default function CorsetsPage() {
  return (
    <div className={styles.main}>
      <h1>Shop Corsets</h1>
      <div className={styles.grid}>
        {corsetProducts.map((item) => (
          <a key={item.id} className={styles.card}>
            <div>
              <div className={styles.corsetImage}>
                <img src={item.image} alt={item.description} />
              </div>
              <p>R {item.price}</p>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
