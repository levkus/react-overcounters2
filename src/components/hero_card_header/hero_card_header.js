import React, { PropTypes } from 'react'
import styles from './hero_card_header.scss'
import magic from './hero_card_magic.scss' // Some responsive sorcery

const HeroCardHeader = ({ image, name }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt={name} />
      <div className={magic.magic}>

        <div className={magic.leftCol}>
          <div className={magic.strong}>Strong against</div>
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
          <div className={magic.weak}>Weak against</div>
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
  image: PropTypes.string,
  name: PropTypes.string
}

export default HeroCardHeader
