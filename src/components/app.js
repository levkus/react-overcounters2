import React, { Component } from 'react'
import HeroesList from '../containers/heroes_list/heroes_list'
import styles from './app.scss'

export default class App extends Component {
  render () {
    return (
      <div className={styles.overwatch}>
        <HeroesList />
        {this.props.children}
      </div>
    )
  }
}
