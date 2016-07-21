import React, { Component, PropTypes} from 'react'
import styles from './language_switcher.scss'

class LanguageSwitcher extends Component {
  componentWillMount () {
    if (localStorage.language) {
      this.props.switchLanguage(localStorage.language)
    } else {
      this.props.switchLanguage('en')
    }
  }

  renderSelector (lang, string) {
    let style = styles.off
    if (this.props.currentLanguage === lang) {
      style = styles.on
    }
    return (
      <span className={style} onClick={() => this.onLanguageChange(lang)}>{string}</span>
    )
  }

  onLanguageChange (lang) {
    this.props.switchLanguage(lang)
    localStorage.setItem('language', lang)
  }

  render () {
    return (
      <div>
        {this.renderSelector('en', 'English')}
        <span className={styles.separator}>|</span>
        {this.renderSelector('ru', 'Русский')}
      </div>
    )
  }
}

LanguageSwitcher.propTypes = {
  currentLanguage: PropTypes.string,
  switchLanguage: PropTypes.func
}

export default LanguageSwitcher
