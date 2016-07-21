import React, { Component, PropTypes } from 'react'
import styles from './footer.scss'

class Footer extends Component {
  render () {
    return (
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <h3>©{new Date().getFullYear()} Overcounters.info</h3>
          <ul>
            <li>{this.props.text.development}: <a href='mailto:levkus@gmail.com'>levkus@gmail.com</a></li>
            <li>{this.props.text.design}: <a href='mailto:info@noch212.me'>info@noch212.me</a></li>
          </ul>
        </div>
        <div className={styles.disclaimer}>
          <h3>{this.props.text.disclaimer}:</h3>
          <p>{this.props.text.disclaimerText}</p>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  text: PropTypes.object
}

export default Footer
