import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchHeroes, switchLanguage } from 'actions/index'
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
    this.props.switchLanguage('ru')
  }

  getHeroesOfClass (role) {
    const heroClass = _.filter(this.props.heroes, { role })
    return _.map(heroClass, hero => {
      return <HeroesListItem hero={hero} key={hero.id} />
    })
  }

  render () {
    return (
      <div className={styles.heroesList}>
        <HeroesListClass role='Offense' icon={iconBullets} heroes={this.getHeroesOfClass('offense')} />
        <HeroesListClass role='Defense' icon={iconTower} heroes={this.getHeroesOfClass('defense')} />
        <HeroesListClass role='Tank' icon={iconShield} heroes={this.getHeroesOfClass('tank')} />
        <HeroesListClass role='Support' icon={iconCross} heroes={this.getHeroesOfClass('support')} />
      </div>
    )
  }
}

HeroesList.propTypes = {
  fetchHeroes: PropTypes.func,
  switchLanguage: PropTypes.func,
  heroes: PropTypes.array
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes.all,
    activeHero: state.heroes.activeHero
  }
}

export default connect(mapStateToProps, { fetchHeroes, switchLanguage })(HeroesList)
