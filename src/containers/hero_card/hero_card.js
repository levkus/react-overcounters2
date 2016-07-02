import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { selectHero } from '../../actions/index'
import HeroCardHeader from '../../components/hero_card_header/hero_card_header'
import HeroCardScale from '../../components/hero_card_scale/hero_card_scale'
import HeroCounterItem from '../../containers/hero_counter_item/hero_counter_item'
import HeroCardBlank from '../../components/hero_card_blank/hero_card_blank'
import styles from './hero_card.scss'

class HeroCard extends Component {
  componentWillMount () {
    this.props.selectHero(this.props.params.alias)
  }

  componentDidUpdate () {
    this.props.selectHero(this.props.params.alias)
  }

  render () {
    const { heroes, activeHero } = this.props

    if (!activeHero) {
      return <HeroCardBlank />
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

HeroCard.propTypes = {
  selectHero: PropTypes.func,
  heroes: PropTypes.array,
  activeHero: PropTypes.object,
  params: PropTypes.object,
  alias: PropTypes.string
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes.all,
    activeHero: state.heroes.activeHero
  }
}

export default connect(mapStateToProps, { selectHero })(HeroCard)
