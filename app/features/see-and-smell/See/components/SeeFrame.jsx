import React from 'react'
import PropTypes from 'prop-types'

import withStyles from 'isomorphic-style-loader/lib/withStyles'
import styles from '../styles/styles.scss'
import {blue500} from 'material-ui/styles/colors'
import GoogleMapComponent from './GoogleMap'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

const SeeFrame = ({
                    start, onEnd, errors, onResult,ready }) => (
                      <section className={styles.container}>
                        <h4 className={styles.titleSection}> See your trip<CommunicationChatBubble color={blue500} /></h4>
                        <div>


                          <GoogleMapComponent isMarkerShown
                                              loadingElement={<div style={{ height: `100%` }} />}
                                              containerElement={<div style={{ height: `400px` }} />}
                                              mapElement={<div style={{ height: `100%` }} />}

                        />
                        </div>
                        <div />
                        <br />
                        {errors && !ready &&
                        <div>
                          <p className={styles.errors}>{errors}</p>
                        </div>}
                      </section>
  )
SeeFrame.contextTypes = {
  insertCss: PropTypes.func
}
SeeFrame.propTypes = {
  onResult: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired
}
export default withStyles(styles)(SeeFrame)
