import React, { Component } from 'react'
import HeroesList from '../containers/heroes_list/heroes_list'
import styles from './app.scss'

import Header from './header/header'
import Footer from './footer/footer'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className={styles.overwatch}>
          <HeroesList />
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
