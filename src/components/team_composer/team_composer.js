import React, { Component, PropTypes } from 'react'
import styles from './team_composer.scss'

import _ from 'lodash'
import { getCounters } from './team_composer_utilities'

import Header from 'containers/header_container'
import TeamComposerItem from './team_composer_item/team_composer_item'
import TeamComposerCounterItem from './team_composer_counter_item/team_composer_counter_item'
import TeamComposerEnemyItem from './team_composer_enemy_item/team_composer_enemy_item'

class TeamComposer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      team: []
    }

    this.onHeroSelect = this.onHeroSelect.bind(this)
    this.removeTeamMember = this.removeTeamMember.bind(this)
  }

  onHeroSelect (hero) {
    if (this.state.team.length >= 6) {
      return false
    } else {
      const newHero = JSON.parse(JSON.stringify(hero))
      newHero.enemyId = _.uniqueId('enemyId_')
      this.setState({ team: _.concat(this.state.team, newHero) })
    }
  }

  renderCounters () {
    if (this.state.team.length === 0) {
      return false
    } else {
      const selectedHeroes = this.state.team
      const sortedCounters = getCounters(selectedHeroes, 'strongCounters', 3)
      return _.map(sortedCounters, counter => {
        return (
          <TeamComposerCounterItem key={counter.alias} counter={counter} count={counter.count} />
        )
      })
    }
  }

  renderHeroesList () {
    return _.map(this.props.heroes, hero => {
      return <TeamComposerItem key={hero.alias} hero={hero} onHeroSelect={this.onHeroSelect} />
    })
  }

  renderEnemyTeam () {
    return _.map(this.state.team, hero => {
      return (
        <TeamComposerEnemyItem key={hero.enemyId} hero={hero} removeTeamMember={this.removeTeamMember} />
      )
    })
  }

  removeTeamMember (hero) {
    this.setState({ team: _.pull(this.state.team, hero) })
  }

  render () {
    return (
      <div>
        <Header fullwidth />
        <div className={styles.heroesList}>
          {this.renderHeroesList()}
        </div>
        <div className={styles.teamComposer}>
          <div className={styles.enemyTeam}>
            <h2 className={styles.header}>Enemy team</h2>
            <div className={styles.enemyWrapper}>
              {this.renderEnemyTeam()}
            </div>
          </div>
          <div className={styles.topCounters}>
            <h2 className={styles.header}>Top counters</h2>
            <div className={styles.countersWrapper}>
              {this.renderCounters()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TeamComposer.propTypes = {
  heroes: PropTypes.array,
  names: PropTypes.array
}

export default TeamComposer
