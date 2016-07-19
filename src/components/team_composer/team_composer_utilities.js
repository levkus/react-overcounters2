import _ from 'lodash'

export const getCounters = (heroes, strength, number) => {
  // Get counters of all selected heroes
  let allCounters = []
  _.map(heroes, hero => {
    const heroCounters = _.slice(hero[strength], 0, number)
    allCounters = _.concat(allCounters, heroCounters)
  })

  // Store all counters and number of appearences in an array of objects:
  // [{alias: 'alias', count: count}, {alias: 'alias2', count: count}, ...]
  let countedCounters = []
  _.map(allCounters, counter => {
    const currentCounter = _.find(countedCounters, { alias: counter })
    if (!currentCounter) {
      countedCounters = _.concat(countedCounters, { alias: counter, count: 1 })
    } else {
      currentCounter.count++
    }
  })

  // Sort counters by times they appear
  const sortedCounters = _.orderBy(countedCounters, 'count', 'desc')

  console.log(sortedCounters)
  return sortedCounters
}
