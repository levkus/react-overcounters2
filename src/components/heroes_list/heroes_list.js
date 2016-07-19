import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import HeroesListItem from 'components/heroes_list_item/heroes_list_item'
import HeroesListClass from 'components/heroes_list_class/heroes_list_class'
import styles from './heroes_list.scss'

import iconBullets from 'static/icons/bullets.svg'
import iconCross from 'static/icons/cross.svg'
import iconShield from 'static/icons/shield.svg'
import iconTower from 'static/icons/tower.svg'

class HeroesList extends Component {
  componentWillMount () {
    this.props.fetchHeroes()
  }

  getHeroes (role, lang) {
    const heroClass = _.filter(this.props.heroes, { role })
    return _.map(heroClass, hero => {
      return <HeroesListItem hero={hero} key={hero.id} />
    })
  }

  render () {
    // Multilanguage support
    const { ui } = this.props
    if (!ui.heroesList) {
      return null
    }

    return (
      <div className={styles.heroesList}>
        <HeroesListClass role={ui.heroesList.offense} icon={iconBullets} heroes={this.getHeroes('offense')} />
        <HeroesListClass role={ui.heroesList.defense} icon={iconTower} heroes={this.getHeroes('defense')} />
        <HeroesListClass role={ui.heroesList.tank} icon={iconShield} heroes={this.getHeroes('tank')} />
        <HeroesListClass role={ui.heroesList.support} icon={iconCross} heroes={this.getHeroes('support')} />
      </div>
    )
  }
}

HeroesList.propTypes = {
  fetchHeroes: PropTypes.func,
  switchLanguage: PropTypes.func,
  heroes: PropTypes.array,
  ui: PropTypes.object
}

export default HeroesList
