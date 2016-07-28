import React, {PropTypes} from 'react'
import InlineSVG from 'svg-inline-react'
import styles from './team_composer_enemy_item.scss'

import iconClose from 'static/icons/close.svg'

const TeamComposerEnemyItem = ({ hero, removeTeamMember }) => {
  return (
    <div className={styles.wrapper} onClick={function () { removeTeamMember(hero) }}>
      <img className={styles.avatar} src={`/img/heroes/hex-${hero.alias}.png`} alt={hero.alias} />
      <span className={styles.name}>{hero.alias}</span>
      <div className={styles.close}>
        <InlineSVG src={iconClose} raw className={styles.closeIcon} />
      </div>
    </div>
  )
}

TeamComposerEnemyItem.propTypes = {
  hero: PropTypes.object.isRequired,
  removeTeamMember: PropTypes.func
}

export default TeamComposerEnemyItem
