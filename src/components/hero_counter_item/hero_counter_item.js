import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import styles from './hero_counter_item.scss'

class HeroCounterItem extends Component {
  render () {
    const { side, hero, topHeroes, names } = this.props
    let wrapperClass = styles.wrapper
    let avatarClass = styles.avatar
    let nameClass = styles.name

    if (topHeroes) {
      _.map(topHeroes, topHero => {
        if (topHero.name === hero.name && side === 'strongCounters') {
          avatarClass = styles.goodAvatar
          nameClass = styles.goodName
        } else if (topHero.name === hero.name && side === 'weakCounters') {
          avatarClass = styles.badAvatar
          nameClass = styles.badName
        }
      })
    }

    if (side === 'strongCounters') {
      wrapperClass = styles.wrapperStrong
    }

    return (
      <Link to={'/heroes/' + hero.alias} className={wrapperClass}>
        <div className={avatarClass}>
          <img className={styles.image}
            src={`/img/heroes/icon-${hero.alias}.png`}
            alt={_.find(names, { alias: hero.alias }).name}
          />
        </div>
        <span className={nameClass}>{_.find(names, { alias: hero.alias }).name}</span>
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

export default HeroCounterItem
