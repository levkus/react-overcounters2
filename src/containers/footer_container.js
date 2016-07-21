import { connect } from 'react-redux'

import Footer from 'components/footer/footer'

const mapStateToProps = state => {
  return {
    text: state.currentLanguage.ui.footer
  }
}

export default connect(mapStateToProps)(Footer)
