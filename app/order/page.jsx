import styles from '../page.module.css';

export default function OrderPage() {
  return (
    <div className={styles.main}>
      Order Page
      <div className={styles.grid}>
      <a className={styles.card}>
        <div>
          Image
          Price
          Description
        </div>
        </a>
      </div>
    </div>
  )
}
