import React from 'react'
import styles from './heroes_list_class.scss'

import InlineSVG from 'svg-inline-react'

const HeroesListClass = ({ role, icon, heroes }) => {
  return (
    <div className={styles.wrapper}>
      <InlineSVG src={icon} />
      <h3 className={styles.header}>{role}</h3>
      <div className={styles.list}>{heroes}</div>
    </div>
  )
}

export default HeroesListClass
