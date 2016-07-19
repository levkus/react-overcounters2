import { connect } from 'react-redux'
import { setBattlenet, fetchBattlenet, fetchingToggle } from 'actions/index'
import BattlenetForm from 'components/battlenet_form/battlenet_form'

const mapStateToProps = state => ({
  battleTag: state.battlenet.battleTag,
  platform: state.battlenet.platform,
  region: state.battlenet.region,
  mode: state.battlenet.mode,
  lang: state.currentLanguage.ui.battlenetForm
})

export default connect(mapStateToProps, { setBattlenet, fetchBattlenet, fetchingToggle })(BattlenetForm)
