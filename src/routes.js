import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import HeroCardBlank from './components/hero_card_blank/hero_card_blank'
import HeroCard from './containers/hero_card/hero_card'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HeroCardBlank} />
    <Route path='/:alias' component={HeroCard} />
  </Route>
)
