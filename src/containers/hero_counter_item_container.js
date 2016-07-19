import { connect } from 'react-redux'
import HeroCounterItem from 'components/hero_counter_item/hero_counter_item'

const mapStateToProps = state => {
  return {
    topHeroes: state.battlenet.topHeroes,
    names: state.currentLanguage.names
  }
}

export default connect(mapStateToProps)(HeroCounterItem)
