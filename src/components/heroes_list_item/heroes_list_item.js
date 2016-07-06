import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './heroes_list_item.scss'

const HeroesListItem = ({ hero }) => {
  return (
    <Link to={'/' + hero.alias} className={styles.normal} activeClassName={styles.selected}>
      <img className={styles.image} src={`./img/heroes/icon-${hero.alias}.png`} alt={hero.alias} />
    </Link>
  )
}

HeroesListItem.propTypes = {
  hero: PropTypes.object
}

export default HeroesListItem
