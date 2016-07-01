import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import styles from './hero_counter_item.scss'

class HeroCounterItem extends Component {
  render () {
    const { side, hero, topHeroes } = this.props
    let left
    let right
    let wrapperClass = styles.wrapper
    let avatarClass = styles.avatar
    const name = <span className={styles.name}>{hero.name}</span>

    if (topHeroes) {
      _.map(topHeroes, topHero => {
        if (topHero.name === hero.name) {
          avatarClass = styles.topHero
        }
      })
    }

    if (side === 'left') {
      left = name
      right = undefined
      wrapperClass = styles.wrapperLeft
    } else if (side === 'right') {
      left = undefined
      right = name
    }

    return (
      <Link to={'/' + hero.alias} className={wrapperClass}>
        {left}
        <div className={avatarClass}>
          <img className={styles.image} src={hero.icon} alt={hero.name} />
        </div>
        {right}
      </Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    topHeroes: state.battlenet.topHeroes
  }
}

export default connect(mapStateToProps)(HeroCounterItem)
