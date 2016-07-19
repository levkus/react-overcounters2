import { connect } from 'react-redux'
import { selectHero } from '../actions/index'
import HeroCard from '../components/hero_card/hero_card'

const mapStateToProps = state => {
  return {
    heroes: state.heroes.all,
    activeHero: state.heroes.activeHero,
    lang: state.currentLanguage
  }
}

export default connect(mapStateToProps, { selectHero })(HeroCard)
