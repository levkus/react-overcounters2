import { connect } from 'react-redux'
import { setTag, setPlatform, setRegion, setGameMode, fetchBattlenet, fetchingToggle } from 'actions/index'
import BattlenetForm from 'components/settings/battlenet_form/battlenet_form'

const mapStateToProps = state => ({
  battleTag: state.battlenet.battleTag,
  platform: state.battlenet.platform,
  region: state.battlenet.region,
  mode: state.battlenet.mode,
  fetching: state.battlenet.fetching,
  lang: state.currentLanguage.ui.battlenetForm
})

export default connect(mapStateToProps, { setTag, setPlatform, setRegion, setGameMode, fetchBattlenet, fetchingToggle })(BattlenetForm)
