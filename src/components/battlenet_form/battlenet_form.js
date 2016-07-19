import React, { Component, PropTypes} from 'react'
import styles from './battlenet_form.scss'

class BattlenetForm extends Component {
  constructor () {
    super()

    this.onFormElementChange = this.onFormElementChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormElementChange (event) {
    this.props.setBattlenet({ [event.target.id]: event.target.value })
  }

  onFormSubmit (event) {
    event.preventDefault()
    event.target.blur()
    const { battleTag, platform, region, mode } = this.props
    this.props.fetchingToggle(true)
    this.props.fetchBattlenet(battleTag, platform, region, mode)
      .then(this.props.fetchingToggle(false))
  }

  render () {
    const lang = this.props.lang
    return (
      <form onSubmit={this.onFormSubmit}>
        <label className={styles.label} htmlFor='battleTag'>{lang.battleTag}</label>
        <input id='battleTag' type='text' placeholder='Battle Tag'
          className={styles.battleTag}
          value={this.props.battleTag}
          onChange={this.onFormElementChange}
          autoComplete='off'
          spellCheck='false'
        />
        <label className={styles.label} htmlFor='platform'>{lang.platform}</label>
        <select id='platform'
          className={styles.select}
          value={this.props.platform}
          onChange={this.onFormElementChange}
        >
          <option value='pc'>{lang.values.platform.pc}</option>
          <option value='xbl'>{lang.values.platform.xbox}</option>
          <option value='psn'>{lang.values.platform.ps}</option>
        </select>
        <label className={styles.label} htmlFor='region'>{lang.region}</label>
        <select id='region'
          className={styles.select}
          value={this.props.region}
          onChange={this.onFormElementChange}
        >
          <option value='eu'>{lang.values.region.eu}</option>
          <option value='na'>{lang.values.region.na}</option>
          <option value='kr'>{lang.values.region.kr}</option>
          <option value='cn'>{lang.values.region.cn}</option>
        </select>
        <label className={styles.label} htmlFor='mode'>{lang.gameMode}</label>
        <select id='mode'
          className={styles.select}
          value={this.props.mode}
          onChange={this.onFormElementChange}
        >
          <option value='quick-play'>{lang.values.mode.quick}</option>
          <option value='competitive-play'>{lang.values.mode.competitive}</option>
        </select>
        <button className={styles.submit} type='submit'>Submit</button>
      </form>
    )
  }
}

BattlenetForm.propTypes = {
  setBattlenet: PropTypes.func,
  fetchBattlenet: PropTypes.func,
  fetchingToggle: PropTypes.func,
  battleTag: PropTypes.string,
  platform: PropTypes.string,
  region: PropTypes.string,
  mode: PropTypes.string,
  lang: PropTypes.object
}

export default BattlenetForm
