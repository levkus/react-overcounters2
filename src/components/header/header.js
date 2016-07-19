import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import InlineSVG from 'svg-inline-react'
import styles from './header.scss'

import Settings from 'containers/settings_container'
import iconGear from 'static/icons/gear.svg'

class Header extends Component {
  constructor (props) {
    super(props)

    this.onSettingsClick = this.onSettingsClick.bind(this)
  }
  onSettingsClick () {
    if (!this.props.showSettings) {
      this.props.toggleSettings(true)
    } else {
      this.props.toggleSettings(false)
    }
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <InlineSVG src={iconGear} className={styles.icon} onClick={this.onSettingsClick} />
        <Link to='/' className={styles.logo} />
        <Settings />
      </div>
    )
  }
}

Header.propTypes = {
  ui: PropTypes.object,
  toggleSettings: PropTypes.func,
  showSettings: PropTypes.bool
}

export default Header
