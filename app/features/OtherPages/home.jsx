import { Helmet } from 'react-helmet'
import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import styles from './styles/styles.scss'
const Home = () => (
  <div className={styles.container}>
    <Helmet>
      <title>Home Page</title>
      <meta name='description' content='Home page of the platform' />
    </Helmet>
    <p className={styles.text}>Take a look at the map</p>
  </div>
)
Home.contextTypes = {
  router: PropTypes.object.isRequired,
  insertCss: PropTypes.func
}

export default withStyles(styles)(Home)
