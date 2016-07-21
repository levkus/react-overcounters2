import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchHeroes } from '../actions/index'
import styles from './app.scss'
import 'style/core.scss'

import Header from 'containers/header_container'
import Footer from 'containers/footer_container'
import Settings from 'containers/settings_container'

class App extends Component {
  componentWillMount () {
    this.props.fetchHeroes()
  }

  render () {
    return (
      <div className={styles.overwrapper}>
        <Settings />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object,
  fetchHeroes: PropTypes.func
}

export default connect(null, { fetchHeroes })(App)
