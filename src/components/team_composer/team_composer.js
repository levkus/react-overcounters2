import React, { Component, PropTypes } from 'react'

import _ from 'lodash'
import { getCounters } from './team_composer_utilities'

class TeamComposer extends Component {

  render () {
    const selectedHeroes = _.slice(this.props.heroes, 0, 6)
    const sortedCounters = getCounters(selectedHeroes, 'strongCounters', 3)
    const output = _.map(sortedCounters, counter => {
      return (
        <div key={counter.alias}>
          <img src={`/img/heroes/hex-${counter.alias}.png`} alt={counter.alias} />
          <span>{_.find(this.props.names, { alias: counter.alias }).name} is presented {counter.count} times</span>
        </div>
      )
    })
    return (
      <div>{output}</div>
    )
  }
}

TeamComposer.propTypes = {
  heroes: PropTypes.array,
  names: PropTypes.array
}

export default TeamComposer
