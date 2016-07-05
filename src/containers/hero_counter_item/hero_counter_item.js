import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import styles from './hero_counter_item.scss'

class HeroCounterItem extends Component {
  render () {
    const { side, hero, topHeroes, names } = this.props
    let left
    let right
    let wrapperClass = styles.wrapper
    let avatarClass = styles.avatar
    let nameClass = styles.name

    if (topHeroes) {
      _.map(topHeroes, topHero => {
        if (topHero.name === hero.name && side === 'weakAgainst') {
          avatarClass = styles.goodAvatar
          nameClass = styles.goodName
        } else if (topHero.name === hero.name && side === 'strongAgainst') {
          avatarClass = styles.badAvatar
          nameClass = styles.badName
        }
      })
    }

    const langHero = _.find(names, { alias: hero.alias })

    const name = <span className={nameClass}>{langHero.name}</span>

    if (side === 'weakAgainst') {
      left = name
      right = undefined
      wrapperClass = styles.wrapperLeft
    } else if (side === 'strongAgainst') {
      left = undefined
      right = name
    }

    return (
      <Link to={'/' + hero.alias} className={wrapperClass}>
        {left}
        <div className={avatarClass}>
          <img className={styles.image} src={hero.icon} alt={langHero.name} />
        </div>
        {right}
      </Link>
    )
  }
}

HeroCounterItem.propTypes = {
  side: PropTypes.string,
  hero: PropTypes.object,
  topHeroes: PropTypes.array,
  names: PropTypes.array
}

const mapStateToProps = state => {
  return {
    topHeroes: state.battlenet.topHeroes,
    names: state.currentLanguage.names
  }
}

export default connect(mapStateToProps)(HeroCounterItem)
