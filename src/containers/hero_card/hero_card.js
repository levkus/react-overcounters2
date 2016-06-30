import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectHero } from '../../actions/index'
import HeroCardHeader from '../../components/hero_card_header/hero_card_header'
import HeroCardScale from '../../components/hero_card_scale/hero_card_scale'
import HeroCounterItem from '../../components/hero_counter_item/hero_counter_item'
import styles from './hero_card.scss'

class HeroCard extends Component {
  componentWillMount () {
    this.props.selectHero(this.props.params.alias)
  }

  componentDidUpdate () {
    this.props.selectHero(this.props.params.alias)
  }

  render () {
    const activeHero = this.props.activeHero
    const heroes = this.props.heroes

    if (!activeHero) {
      return <div className='hero-detail'>Loading...</div>
    }

    const strongAgainst = _.map(activeHero.strongAgainst, alias => {
      const counter = _.find(heroes, { alias })
      return (
        <HeroCounterItem
          side='right'
          hero={counter}
          key={counter.id}
        />
      )
    })

    const weakAgainst = _.map(activeHero.weakAgainst, alias => {
      const counter = _.find(heroes, { alias })
      return (
        <HeroCounterItem
          side='left'
          hero={counter}
          key={counter.id}
        />
      )
    })

    return (
      <div className={styles.heroDetail}>
        <div className={styles.card}>
          <HeroCardHeader image={activeHero.hex} name={activeHero.name} />
          <div className={styles.info}>
            <div className={styles.strong}>{strongAgainst}</div>
            <HeroCardScale />
            <div className={styles.weak}>{weakAgainst}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes.all,
    activeHero: state.heroes.activeHero
  }
}

export default connect(mapStateToProps, { selectHero })(HeroCard)
