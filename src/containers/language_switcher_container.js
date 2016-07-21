import { connect } from 'react-redux'
import { switchLanguage } from 'actions/index'

import LanguageSwitcher from 'components/settings/language_switcher/language_switcher'

const mapStateToProps = state => {
  return {
    currentLanguage: state.currentLanguage.lang
  }
}

export default connect(mapStateToProps, { switchLanguage })(LanguageSwitcher)
