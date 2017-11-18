
import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Helmet } from 'react-helmet'
import styles from './styles/styles.scss'
import PropTypes from 'prop-types'

import See from './See/See'
import Stink from './Stink/Stink'

const TalkAndSeek = () => (
  <div className={styles.container}>
    <Helmet>
      <title>See and Stink</title>
      <meta name='description' content='Build your tour and smell how it stinks' />
    </Helmet>
    <See />
    <Stink />
  </div>
)
TalkAndSeek.contextTypes = {
  router: PropTypes.object.isRequired,
  insertCss: PropTypes.func
}

export default withStyles(styles)(TalkAndSeek)
