import React, { Component, PropTypes } from 'react'
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
      this.props.fetchingToggle(true)
      this.setState({ term: localStorage.tag, loading: true })
      this.props.fetchBattlenet(localStorage.tag)
        .then(() => {
          this.props.fetchingToggle(false)
          this.setState({ loading: false })
        })
    }
  }

  onInputChange (e) {
    this.setState({ term: e.target.value })
  }

  onFormSubmit (e) {
    e.preventDefault()
    this.props.fetchingToggle(true)
    this.setState({ loading: true })
    this.props.fetchBattlenet(this.state.term)
      .then(() => {
        this.props.fetchingToggle(false)
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
  fetching: PropTypes.bool,
  fetchingToggle: PropTypes.func
}

export default BattlenetSearchBar
