import { Helmet } from 'react-helmet'
import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import styles from './styles/styles.scss'
const Help = () => (
  <div className={styles.container}>
    <Helmet>
      <title>Help</title>
      <meta name='description' content='page for helping users' />
    </Helmet>
    <div className={styles.text}>
      <p>This app is easy :
    </p>
      <ul>
        <li>Create markers for your trip</li>
        <li>Choose your travel mode</li>
        <li>Smell your gaz</li>
      </ul>
      <p><b>Well, wait for it</b></p>
    </div>
  </div>
)
Help.contextTypes = {
  router: PropTypes.object.isRequired,
  insertCss: PropTypes.func
}

export default withStyles(styles)(Help)
