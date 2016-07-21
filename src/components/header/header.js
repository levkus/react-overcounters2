import React, { Component, PropTypes } from 'react'
import InlineSVG from 'svg-inline-react'
import styles from './header.scss'

import Logo from 'components/logo/logo'
import iconGear from 'static/icons/gear.svg'
import logo from 'static/img/logo.svg'

class Header extends Component {
  constructor (props) {
    super(props)

    this.onSettingsClick = this.onSettingsClick.bind(this)
  }

  onSettingsClick () {
    this.props.showSettings ? this.props.toggleSettings(false) : this.props.toggleSettings(true)
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <InlineSVG src={iconGear} raw className={styles.settingsIcon} onClick={this.onSettingsClick} />
        <Logo logo={logo} />
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
