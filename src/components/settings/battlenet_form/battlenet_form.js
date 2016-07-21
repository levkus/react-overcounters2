import React, { Component, PropTypes} from 'react'
import styles from './battlenet_form.scss'

class BattlenetForm extends Component {
  constructor (props) {
    super(props)

    this.onBattleTagChange = this.onBattleTagChange.bind(this)
    this.onPlatformChange = this.onPlatformChange.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
    this.onGameModeChange = this.onGameModeChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentWillMount () {
    if (localStorage.query) {
      const query = JSON.parse(localStorage.getItem('query'))
      const { battleTag, platform, region, mode } = query
      const { setTag, setPlatform, setRegion, setGameMode } = this.props
      setTag(battleTag)
      setPlatform(platform)
      setRegion(region)
      setGameMode(mode)
      this.props.fetchingToggle(true)
      this.props.fetchBattlenet(battleTag, platform, region, mode)
        .then(() => {
          this.props.fetchingToggle(false)
        })
    }
  }

  onBattleTagChange (event) {
    this.props.setTag(event.target.value)
  }
  onPlatformChange (event) {
    console.log(event.target.value)
    this.props.setPlatform(event.target.value)
  }
  onRegionChange (event) {
    this.props.setRegion(event.target.value)
  }
  onGameModeChange (event) {
    this.props.setGameMode(event.target.value)
  }

  onFormSubmit (event) {
    event.preventDefault()
    const { battleTag, platform, region, mode } = this.props
    this.props.fetchingToggle(true)
    this.props.fetchBattlenet(battleTag, platform, region, mode)
      .then(this.props.fetchingToggle(false))
    const query = { battleTag, platform, region, mode }
    localStorage.setItem('query', JSON.stringify(query))
  }

  render () {
    const lang = this.props.lang
    let buttonStyle = this.props.fetching ? styles.fetching : styles.submit
    return (
      <form onSubmit={this.onFormSubmit}>
        <label className={styles.label} htmlFor='battleTag'>{lang.battleTag}</label>
        <input id='battleTag' type='text' placeholder='Battle Tag'
          className={styles.battleTag}
          value={this.props.battleTag}
          onChange={this.onBattleTagChange}
          autoComplete='off'
          spellCheck='false'
        />
        <label className={styles.label} htmlFor='platform'>{lang.platform}</label>
        <select id='platform'
          className={styles.select}
          value={this.props.platform}
          onChange={this.onPlatformChange}
        >
          <option value='pc'>{lang.values.platform.pc}</option>
          <option value='xbl'>{lang.values.platform.xbox}</option>
          <option value='psn'>{lang.values.platform.ps}</option>
        </select>
        <label className={styles.label} htmlFor='region'>{lang.region}</label>
        <select id='region'
          className={styles.select}
          value={this.props.region}
          onChange={this.onRegionChange}
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
          onChange={this.onGameModeChange}
        >
          <option value='quick-play'>{lang.values.mode.quick}</option>
          <option value='competitive-play'>{lang.values.mode.competitive}</option>
        </select>
        <button className={buttonStyle} type='submit'>Save</button>
      </form>
    )
  }
}

BattlenetForm.propTypes = {
  setTag: PropTypes.func,
  setPlatform: PropTypes.func,
  setRegion: PropTypes.func,
  setGameMode: PropTypes.func,
  fetchBattlenet: PropTypes.func,
  fetchingToggle: PropTypes.func,
  fetching: PropTypes.bool,
  battleTag: PropTypes.string,
  platform: PropTypes.string,
  region: PropTypes.string,
  mode: PropTypes.string,
  lang: PropTypes.object
}

export default BattlenetForm
