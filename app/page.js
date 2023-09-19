import Image from 'next/image'
import styles from './page.module.css'
import PreviewDisplay from './components/PreviewDisplay';

export default function Home() {
  return (
    <div>
      <img
        className={styles.img} 
        src='/images/background-images/open-sign.png'
      />
      {/* <img
        className={styles.img2} 
        src='/images/background-images/corner-rose.png'
      /> */}
      <PreviewDisplay />
    </div>
  )
}
