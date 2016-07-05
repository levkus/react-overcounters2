import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchBattlenet, fetchingOn, fetchingOff } from '../../actions/index'
import styles from './battlenet_search_bar.scss'

class BattlenetSearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      term: '',
      loading: false
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.selectText = this.selectText.bind(this)
  }

  componentWillMount () {
    if (localStorage.tag) {
      this.props.fetchingOn()
      this.setState({ term: localStorage.tag, loading: true })
      this.props.fetchBattlenet(localStorage.tag)
        .then(() => {
          this.props.fetchingOff()
          this.setState({ loading: false })
        })
    }
  }

  onInputChange (e) {
    this.setState({ term: e.target.value })
  }

  onFormSubmit (e) {
    e.preventDefault()
    this.props.fetchingOn()
    this.setState({ loading: true })
    this.props.fetchBattlenet(this.state.term)
      .then(() => {
        this.props.fetchingOff()
        this.setState({ loading: false })
      })
    localStorage.setItem('tag', this.state.term)
    this.refs.input.blur()
  }

  selectText (e) {
    e.target.select()
  }

  render () {
    let style = styles.searchbar
    if (this.state.loading) {
      style = styles.fetching
    }

    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' placeholder='Battle Tag' spellCheck='false'
          ref='input'
          className={style}
          value={this.state.term}
          onChange={this.onInputChange}
          onFocus={this.selectText}
        />
      </form>
    )
  }
}

BattlenetSearchBar.propTypes = {
  fetchBattlenet: PropTypes.func,
  fetchingOn: PropTypes.func,
  fetchingOff: PropTypes.func,
  fetching: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    topHeroes: state.battlenet.topHeroes,
    fetching: state.battlenet.fetching
  }
}

export default connect(mapStateToProps, { fetchBattlenet, fetchingOn, fetchingOff })(BattlenetSearchBar)
