import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHeroes } from 'actions/index'
import _ from 'lodash'

import HeroesListItem from 'components/heroes_list_item/heroes_list_item'
import HeroesListClass from 'components/heroes_list_class/heroes_list_class'
import styles from './heroes_list.scss'

import iconBullets from './svg/bullets.svg'
import iconCross from './svg/cross.svg'
import iconShield from './svg/shield.svg'
import iconTower from './svg/tower.svg'

class HeroesList extends Component {
  componentWillMount () {
    this.props.fetchHeroes()
  }

  renderList () {
    const offense = _.map(_.filter(this.props.heroes, {role: 'offense'}), hero => {
      return <HeroesListItem hero={hero} key={hero.id} />
    })
    const defense = _.map(_.filter(this.props.heroes, {role: 'defense'}), hero => {
      return <HeroesListItem hero={hero} key={hero.id} />
    })
    const tank = _.map(_.filter(this.props.heroes, {role: 'tank'}), hero => {
      return <HeroesListItem hero={hero} key={hero.id} />
    })
    const support = _.map(_.filter(this.props.heroes, {role: 'support'}), hero => {
      return <HeroesListItem hero={hero} key={hero.id} />
    })

    return (
      <div>
        <HeroesListClass role='Offense' icon={iconBullets} heroes={offense} />
        <HeroesListClass role='Defense' icon={iconTower} heroes={defense} />
        <HeroesListClass role='Tank' icon={iconShield} heroes={tank} />
        <HeroesListClass role='Support' icon={iconCross} heroes={support} />
      </div>
    )
  }

  render () {
    return (
      <div className={styles.heroesList}>
        {this.renderList()}
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

export default connect(mapStateToProps, { fetchHeroes })(HeroesList)
