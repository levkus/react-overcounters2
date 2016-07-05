import React from 'react'
import { Link } from 'react-router'
import styles from './header.scss'

import BattlenetSearchBar from '../../containers/battlenet_search_bar/battlenet_search_bar'
import LanguageSwitcher from '../../containers/language_switcher/language_switcher'

export const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <Link to='/' className={styles.logo} />
      <div className={styles.battle}>
        <BattlenetSearchBar />
      </div>
      <div className={styles.language}>
        <LanguageSwitcher />
      </div>  
    </div>
  )
}

export default Header
