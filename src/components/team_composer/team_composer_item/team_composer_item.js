import React, { PropTypes } from 'react'
import styles from './team_composer_item.scss'

const TeamComposerItem = ({ hero, onHeroSelect }) => {
  return (
    <div className={styles.normal} onClick={function () { onHeroSelect(hero) }}>
      <img className={styles.image} src={`/img/heroes/icon-${hero.alias}.png`} alt={hero.alias} />
    </div>
  )
}

TeamComposerItem.propTypes = {
  hero: PropTypes.object,
  onHeroSelect: PropTypes.func
}

export default TeamComposerItem
