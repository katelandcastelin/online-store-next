import styles from './orderPage.module.css';
import orderProducts from '../orderProducts-data/orderProducts';

export default function OrderPage() {
  return (
    <div className={styles.main}>
      <h1>Order Page</h1>
      <div className={styles.grid}>
        {orderProducts.map((item) => (
          <a key={item.id} className={styles.card}>
            <div>
              <div className={styles.orderImage}>
                <img src={item.image} alt={item.description} />
              </div>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
