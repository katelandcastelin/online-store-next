import Image from 'next/image'
import styles from './page.module.css'
import PreviewDisplay from './components/PreviewDisplay';

export default function Home() {
  return (
    <div>
      {/* <img
        className={styles.left} 
        src='/images/background-images/open-sign.png'
      /> */}
      {/* <img
        className={styles.right} 
        src='/images/background-images/corner1.png'
      /> */}
      <PreviewDisplay />
    </div>
  )
}
