import React, { Component, PropTypes } from 'react'
import styles from './settings.scss'
import onClickOutside from 'react-onclickoutside'
import InlineSVG from 'svg-inline-react'

import BattlenetForm from 'containers/battlenet_form_container'
import LanguageSwitcher from 'containers/language_switcher_container'

import iconClose from 'static/icons/close.svg'

class Settings extends Component {
  constructor (props) {
    super(props)

    this.onCloseButtonClick = this.onCloseButtonClick.bind(this)
  }

  handleClickOutside (e) {
    this.props.toggleSettings(false)
  }

  onCloseButtonClick () {
    this.props.toggleSettings(false)
  }

  render () {
    let style = this.props.showSettings ? styles.visible : styles.hidden
    return (
      <div className={style}>
        <div className={styles.header}>
          <h2>{this.props.lang.settingsHeader}</h2>
          <InlineSVG src={iconClose} onClick={this.onCloseButtonClick} />
        </div>
        <h3 className={styles.sectionHeader}>{this.props.lang.language}</h3>
        <LanguageSwitcher />
        <h3 className={styles.sectionHeader}>{this.props.lang.battlenet}</h3>
        <BattlenetForm />
      </div>
    )
  }
}

Settings.propTypes = {
  ui: PropTypes.object,
  toggleSettings: PropTypes.func,
  showSettings: PropTypes.bool,
  lang: PropTypes.object
}

export default onClickOutside(Settings)
