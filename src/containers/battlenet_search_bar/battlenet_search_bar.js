import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBattlenet } from '../../actions/index'
import styles from './battlenet_search_bar.scss'

class BattlenetSearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }
  }

  componentWillMount () {
    if (localStorage.tag) {
      this.setState({ term: localStorage.tag })
      this.props.fetchBattlenet(localStorage.tag)
    }
  }

  onInputChange (term) {
    this.setState({ term })
  }

  onFormSubmit (e) {
    e.preventDefault()
    this.props.fetchBattlenet(this.state.term)
    localStorage.setItem('tag', this.state.term)
  }

  render () {
    return (
      <form onSubmit={e => this.onFormSubmit(e)}>
        <input type='text' placeholder='Battle Tag' spellCheck='false'
          className={styles.searchbar}
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    topHeroes: state.battlenet.topHeroes
  }
}

export default connect(mapStateToProps, { fetchBattlenet })(BattlenetSearchBar)
