import React, { Component } from 'react'
import styles from './hero_card_scale.scss'

export default class HeroDetailScale extends Component {
  render () {
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
}
