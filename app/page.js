import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.comingSoonDisplay}>
          <img src='/images/home-display/collection.jpeg' />
          <p>
            Collection coming soon...
          </p>
        </div>
        <div className={styles.saleDisplay}>
          <div>
            SALE
          </div>
        </div>
        <div className={styles.workspaceDisplay}>
          <img src='/images/home-display/collection2.png' />
          <p>Workspace</p>
        </div>
        {/* <div className={styles.workspaceDisplay}>
          Placeholder
        </div> */}
      </div>
    </main>
  )
}
