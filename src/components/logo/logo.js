import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import InlineSVG from 'svg-inline-react'

import styles from './logo.scss'

const Logo = ({ logo }) => {
  return (
    <Link to='/' className={styles.container}>
      <InlineSVG src={logo} raw />
    </Link>
  )
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired
}

export default Logo
