import { connect } from 'react-redux'
import { toggleSettings } from 'actions/index'
import Header from 'components/header/header'

const mapStateToProps = state => ({
  showSettings: state.ui.showSettings
})

export default connect(mapStateToProps, { toggleSettings })(Header)
