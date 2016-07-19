import { connect } from 'react-redux'
import { fetchHeroes } from 'actions/index'

import HeroesList from 'components/heroes_list/heroes_list'

const mapStateToProps = state => {
  return {
    heroes: state.heroes.all,
    activeHero: state.heroes.activeHero,
    ui: state.currentLanguage.ui
  }
}

export default connect(mapStateToProps, { fetchHeroes })(HeroesList)
