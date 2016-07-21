import React from 'react'
import styles from './hero_card_scale.scss'

const HeroCardScale = () => {
  return (
    <div className={styles.scale}>
      <div className={styles.row}>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.empty}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.filled}></div>
        <div className={styles.filled}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.filled}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
      </div>
    </div>
  )
}

export default HeroCardScale
