import React from 'react'
import styles from './header.scss'

import BattlenetSearchBar from '../../containers/battlenet_search_bar/battlenet_search_bar'

export const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Overcounters</div>
      <div className={styles.battle}>
        <BattlenetSearchBar />
      </div>
    </div>
  )
}

export default Header
