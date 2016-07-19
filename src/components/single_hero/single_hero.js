import React, { Component, PropTypes } from 'react'
import styles from './single_hero.scss'
import HeroesList from 'containers/heroes_list_container'

class SingleHero extends Component {
  render () {
    return (
      <div className={styles.overwatch}>
        <HeroesList />
        {this.props.children}
      </div>
    )
  }
}

SingleHero.propTypes = {
  children: PropTypes.object
}

export default SingleHero
