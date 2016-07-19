import React from 'react'
import { withRouter } from 'react-router'

class TempRedirect extends React.Component {
  componentWillMount () {
    this.props.router.push('/heroes')
  }
  render () {
    return null
  }
}

export default withRouter(TempRedirect)
