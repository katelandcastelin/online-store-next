import Image from 'next/image'
import styles from './page.module.css'
import PreviewDisplay from './components/PreviewDisplay';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <PreviewDisplay />
        
        {/* <div className={styles.comingSoonDisplay}>
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
        </div> */}
      </div>
    </main>
  )
}
