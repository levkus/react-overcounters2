import { connect } from 'react-redux'

import TeamComposer from 'components/team_composer/team_composer'

const mapStateToProps = state => {
  return {
    heroes: state.heroes.all,
    names: state.currentLanguage.names
  }
}

export default connect(mapStateToProps)(TeamComposer)
