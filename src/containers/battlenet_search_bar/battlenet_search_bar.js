import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchBattlenet } from '../../actions/index'
import styles from './battlenet_search_bar.scss'

class BattlenetSearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentWillMount () {
    if (localStorage.tag) {
      this.setState({ term: localStorage.tag })
      this.props.fetchBattlenet(localStorage.tag)
    }
  }

  onInputChange (e) {
    this.setState({ term: e.target.value })
  }

  onFormSubmit (e) {
    e.preventDefault()
    this.props.fetchBattlenet(this.state.term)
    localStorage.setItem('tag', this.state.term)
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' placeholder='Battle Tag' spellCheck='false'
          className={styles.searchbar}
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    )
  }
}

BattlenetSearchBar.propTypes = {
  fetchBattlenet: PropTypes.func
}

const mapStateToProps = state => {
  return {
    topHeroes: state.battlenet.topHeroes
  }
}

export default connect(mapStateToProps, { fetchBattlenet })(BattlenetSearchBar)
