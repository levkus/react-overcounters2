import { connect } from 'react-redux'
import { fetchBattlenet, fetchingToggle } from '../actions/index'
import BattlenetSearchBar from '../components/battlenet_search_bar/battlenet_search_bar'

const mapStateToProps = state => {
  return {
    topHeroes: state.battlenet.topHeroes,
    fetching: state.battlenet.fetching
  }
}

export default connect(mapStateToProps, { fetchBattlenet, fetchingToggle })(BattlenetSearchBar)
