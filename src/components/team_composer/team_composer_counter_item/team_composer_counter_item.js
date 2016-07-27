import React, {PropTypes} from 'react'
import styles from './team_composer_counter_item.scss'

const TeamComposerCounterItem = ({ counter, count }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={`/img/heroes/hex-${counter.alias}.png`} alt={counter.alias} />
      <span className={styles.name}>{counter.alias}: {count}</span>
    </div>
  )
}

TeamComposerCounterItem.propTypes = {
  counter: PropTypes.object,
  count: PropTypes.number
}

export default TeamComposerCounterItem
