import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { switchLanguage } from 'actions/index'

import styles from './language_switcher.scss'

class LanguageSwitcher extends Component {
  componentWillMount () {
    if (localStorage.language) {
      this.props.switchLanguage(localStorage.language)
    } else {
      this.props.switchLanguage('en')
    }
  }

  renderSelector (lang) {
    let style = styles.off
    if (this.props.currentLanguage === lang) {
      style = styles.on
    }
    return (
      <span className={style} onClick={() => this.onLanguageChange(lang)}>{lang}</span>
    )
  }

  onLanguageChange (lang) {
    this.props.switchLanguage(lang)
    localStorage.setItem('language', lang)
  }

  render () {
    return (
      <div>
        {this.renderSelector('en')}
        <span className={styles.separator}>|</span>
        {this.renderSelector('ru')}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentLanguage: state.currentLanguage.lang
  }
}

LanguageSwitcher.propTypes = {
  currentLanguage: PropTypes.string,
  switchLanguage: PropTypes.func
}

export default connect(mapStateToProps, { switchLanguage })(LanguageSwitcher)
