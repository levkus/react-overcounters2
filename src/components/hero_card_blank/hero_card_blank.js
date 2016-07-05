import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './hero_card_blank.scss'

class HeroCardBlank extends Component {
  render () {
    if (!this.props.welcome) {
      return <div className={styles.welcome}>Select a hero to start.</div>
    }
    return <div className={styles.welcome}>{this.props.welcome}</div>
  }
}

const mapStateToProps = state => {
  return {
    welcome: state.currentLanguage.ui.welcomeMessage
  }
}

HeroCardBlank.propTypes = {
  welcome: PropTypes.string
}

export default connect(mapStateToProps)(HeroCardBlank)
