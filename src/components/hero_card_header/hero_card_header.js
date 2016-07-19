import React, { PropTypes } from 'react'
import styles from './hero_card_header.scss'
import magic from './hero_card_magic.scss' // Some responsive sorcery

const HeroCardHeader = ({ alias, name, strongText, weakText }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={`/img/heroes/hex-${alias}.png`} alt={name} />
      <div className={magic.magic}>

        <div className={magic.leftCol}>
          <div className={magic.strong}>{strongText}</div>
          <div className={magic.sideBottom}>
            <div className={magic.farLeft}></div>
            <div className={magic.bottomBlank}></div>
          </div>
        </div>

        <div className={magic.centerCol}>
          <div className={magic.topBlank}></div>
          <div className={magic.centerBottom}>
            <div className={magic.diagLeft}></div>
            <div className={magic.bottomName}>
              <div className={magic.name}>{name}</div>
            </div>
            <div className={magic.diagRight}></div>
          </div>
        </div>

        <div className={magic.rightCol}>
          <div className={magic.weak}>{weakText}</div>
          <div className={magic.sideBottom}>
            <div className={magic.bottomBlank}></div>
            <div className={magic.farRight}></div>
          </div>
        </div>

      </div>
    </div>
  )
}

HeroCardHeader.propTypes = {
  alias: PropTypes.string,
  name: PropTypes.string,
  strongText: PropTypes.string,
  weakText: PropTypes.string
}

export default HeroCardHeader
