import React, { Component, PropTypes } from 'react'
import styles from './team_composer.scss'

import _ from 'lodash'
import { getCounters } from './team_composer_utilities'

import Header from 'containers/header_container'
import TeamComposerCounterItem from './team_composer_counter_item/team_composer_counter_item'

class TeamComposer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      first: this.props.heroes[0],
      second: this.props.heroes[1],
      third: this.props.heroes[2],
      fourth: this.props.heroes[3],
      fifth: this.props.heroes[4],
      sixth: this.props.heroes[5]
    }

    this.onHeroSelect = this.onHeroSelect.bind(this)
  }

  onHeroSelect (event) {
    const hero = _.find(this.props.heroes, {alias: event.target.value})
    console.log(hero)
    console.log(event.target.id)
    this.setState({
      [event.target.id]: hero
    })
  }

  renderCounters () {
    const selectedHeroes = this.state
    const sortedCounters = getCounters(selectedHeroes, 'strongCounters', 3)
    return _.map(sortedCounters, counter => {
      return (
        <TeamComposerCounterItem key={counter.alias} counter={counter} count={counter.count} />
      )
    })
  }

  renderOptions () {
    return _.map(this.props.heroes, hero => {
      return <option value={hero.alias} key={hero.alias}>{hero.alias}</option>
    })
  }

  render () {
    return (
      <div>
        <Header fullwidth />
        <div className={styles.enemies}>
          <select className={styles.select} id='first' onChange={this.onHeroSelect} value={this.state.first.alias}>
            {this.renderOptions()}
          </select>
          <select className={styles.select} id='second' onChange={this.onHeroSelect} value={this.state.second.alias}>
            {this.renderOptions()}
          </select>
          <select className={styles.select} id='third' onChange={this.onHeroSelect} value={this.state.third.alias}>
            {this.renderOptions()}
          </select>
          <select className={styles.select} id='fourth' onChange={this.onHeroSelect} value={this.state.fourth.alias}>
            {this.renderOptions()}
          </select>
          <select className={styles.select} id='fifth' onChange={this.onHeroSelect} value={this.state.fifth.alias}>
            {this.renderOptions()}
          </select>
          <select className={styles.select} id='sixth' onChange={this.onHeroSelect} value={this.state.sixth.alias}>
            {this.renderOptions()}
          </select>
        </div>
        <h2 className={styles.header}>Top counters</h2>
        <div className={styles.countersWrapper}>{this.renderCounters()}</div>
      </div>
    )
  }
}

TeamComposer.propTypes = {
  heroes: PropTypes.array,
  names: PropTypes.array
}

export default TeamComposer
