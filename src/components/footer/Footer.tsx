import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  
  return (
    <footer className={styles.container}>
        <span>©2023 olayidecodes. All rights reserved.</span>
        <div className={styles.socials}>
          <Image src="/twitter.png" className={styles.icon} width={17} height={17} alt='Twitter' />
          <Image src="/instagram.png" className={styles.icon} width={17} height={17} alt='Instagram' />
          <Image src="/tiktok.png" className={styles.icon} width={17} height={17} alt='Tiktok' />
        </div>
    </footer>
  )
}

export default Footer