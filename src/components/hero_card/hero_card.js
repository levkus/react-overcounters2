import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import styles from './hero_card.scss'

import HeroCardHeader from './hero_card_header/hero_card_header'
import HeroCardScale from './hero_card_scale/hero_card_scale'
import HeroCounterItem from 'containers/hero_counter_item_container'
import HeroCardBlank from 'components/hero_card_blank/hero_card_blank'

class HeroCard extends Component {
  componentWillMount () {
    this.props.selectHero(this.props.params.alias)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.params !== this.props.params) {
      this.props.selectHero(newProps.params.alias)
    }
  }

  getCounters (side) {
    return (
      _.map(this.props.activeHero[side], alias => {
        const counter = _.find(this.props.heroes, { alias })
        return <HeroCounterItem side={side} hero={counter} key={counter.id} />
      })
    )
  }

  renderCounters () {
    if (this.props.activeHero.weakCounters.length === 0) {
      return (
        <div className={styles.info}>
          <div className={styles.newHero}>{this.props.lang.ui.newHeroText}</div>
        </div>
      )
    } else {
      return (
        <div className={styles.info}>
          <div className={styles.strong}>{this.getCounters('weakCounters')}</div>
          <HeroCardScale />
          <div className={styles.weak}>{this.getCounters('strongCounters')}</div>
        </div>
      )
    }
  }

  render () {
    const { activeHero, lang } = this.props

    if (!activeHero || lang.names === []) {
      return <HeroCardBlank />
    }

    return (
      <div className={styles.heroDetail}>
        <div className={styles.card}>
          <HeroCardHeader
            alias={activeHero.alias}
            name={_.find(lang.names, { alias: activeHero.alias }).name}
            strongText={lang.ui.heroCard.weakCounters}
            weakText={lang.ui.heroCard.strongCounters}
          />
          {this.renderCounters()}
        </div>
      </div>
    )
  }
}

HeroCard.propTypes = {
  selectHero: PropTypes.func,
  heroes: PropTypes.array,
  activeHero: PropTypes.object,
  params: PropTypes.object,
  alias: PropTypes.string,
  lang: PropTypes.object
}

export default HeroCard
