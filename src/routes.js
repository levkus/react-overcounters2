import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import HeroCardBlank from './components/hero_card_blank/hero_card_blank'
import HeroCard from 'containers/hero_card_container'
import TeamComposer from 'containers/team_composer_container'
import SingleHero from './components/single_hero/single_hero'
import TempRedirect from './components/temp_redirect'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={TempRedirect} />
    <Route path='/team' component={TeamComposer} />
    <Route path='/heroes' component={SingleHero} >
      <IndexRoute component={HeroCardBlank} />
      <Route path='/heroes/:alias' component={HeroCard} />
    </Route>
    <Route path='*' component={TempRedirect} />
  </Route>
)
