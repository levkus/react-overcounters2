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

  getCounters (side) {
    return (
      _.map(this.props.activeHero[side], alias => {
        const counter = _.find(this.props.heroes, { alias })
        return <HeroCounterItem side={side} hero={counter} key={counter.id} />
      })
    )
  }

  render () {
    const { activeHero, lang } = this.props

    if (!activeHero || lang.names === []) {
      return <HeroCardBlank />
    }

    // Multilanguage support
    const langHero = _.find(lang.names, { alias: activeHero.alias })

    return (
      <div className={styles.heroDetail}>
        <div className={styles.card}>
          <HeroCardHeader
            alias={activeHero.alias}
            name={langHero.name}
            strongText={lang.ui.heroCard.strongAgainst}
            weakText={lang.ui.heroCard.weakAgainst}
          />
          <div className={styles.info}>
            <div className={styles.strong}>{this.getCounters('strongAgainst')}</div>
            <HeroCardScale />
            <div className={styles.weak}>{this.getCounters('weakAgainst')}</div>
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
  alias: PropTypes.string,
  lang: PropTypes.object
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes.all,
    activeHero: state.heroes.activeHero,
    lang: state.currentLanguage
  }
}

export default connect(mapStateToProps, { selectHero })(HeroCard)
