import Image from 'next/image'
import styles from './page.module.css'
import PreviewDisplay from './components/PreviewDisplay';

export default function Home() {
  return (
    <div>
      <img
        className={styles.img} 
        src='/home-page-corner.png'
      />
      <PreviewDisplay />
    </div>
  )
}
