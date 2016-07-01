import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBattlenet } from '../../actions/index'
import styles from './battlenet_search_bar.scss'

class BattlenetSearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange (term) {
    this.setState({ term })
  }

  onFormSubmit (e) {
    e.preventDefault()
    const modifiedTerm = this.state.term.replace('#', '-')
    this.props.fetchBattlenet(modifiedTerm)
  }

  onInputClick () {
    if (this.props.topHeroes[0]) {
      this.setState({ term: '' })
    }
  }

  render () {
    return (
      <form onSubmit={e => this.onFormSubmit(e)}>
        <input
          className={styles.searchbar}
          type='text'
          placeholder='Battle Tag'
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
          onClick={() => this.onInputClick()}
          spellCheck='false'
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
