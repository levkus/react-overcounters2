import React from 'react'
import { Link } from 'react-router'
import styles from './hero_counter_item.scss'

const HeroCounterItem = ({ hero, side }) => {
  let left
  let right
  let wrapperClass = styles.wrapper
  const name = <span className={styles.name}>{hero.name}</span>

  if (side === 'left') {
    left = name
    right = undefined
    wrapperClass = styles.wrapperLeft
  } else if (side === 'right') {
    left = undefined
    right = name
  }

  return (
    <Link to={'/' + hero.alias} className={wrapperClass}>
      {left}
      <div className={styles.avatar}>
        <img className={styles.image} src={hero.icon} alt={hero.name} />
      </div>
      {right}
    </Link>
  )
}

export default HeroCounterItem
