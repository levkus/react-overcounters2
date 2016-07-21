import { connect } from 'react-redux'
import { toggleSettings } from 'actions/index'
import Settings from 'components/settings/settings'

const mapStateToProps = state => {
  return {
    showSettings: state.ui.showSettings,
    lang: state.currentLanguage.ui.settings
  }
}

export default connect(mapStateToProps, { toggleSettings })(Settings)
