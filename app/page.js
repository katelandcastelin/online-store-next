import Image from 'next/image'
import styles from './page.module.css'
import PreviewDisplay from './components/PreviewDisplay';

export default function Home() {
  return (
    <div>
      <img
        className={styles.img} 
        src='/border1.png'
      />
      <img
        className={styles.img2} 
        src='/border1.png'
      />
      <PreviewDisplay />
      <div className={styles.bottomBorderContainer}>
        <img className={styles.bottomBorder} src='/bottom-border.png' />
      </div>
    </div>
  )
}
