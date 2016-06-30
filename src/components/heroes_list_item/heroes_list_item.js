import React from 'react'
import { Link } from 'react-router'
import styles from './heroes_list_item.scss'

const HeroesListItem = ({ hero }) => {
  return (
    <Link to={'/' + hero.alias} className={styles.normal} activeClassName={styles.selected}>
      <img className={styles.image} src={hero.icon} alt={hero.name} />
    </Link>
  )
}

export default HeroesListItem
