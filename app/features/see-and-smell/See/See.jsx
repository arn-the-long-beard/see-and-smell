
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'

import SeeFrame from './components/SeeFrame'

class See extends Component {
  constructor (props, context) {
    super(props, context)
    this.start = this.start.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.onResult = this.onResult.bind(this)
  }

  onEnd () {
    this.props.actions.stopRecording()
  }

  onResult ({ finalTranscript }) {
    const result = finalTranscript
    console.log(finalTranscript)
    this.props.actions.validateData(result)
  }
  start (e) {
    e.preventDefault()
    this.props.actions.startRecording()
  }

  componentDidMount () {
    this.props.actions.checkCompatibility()
  }

  render () {
    return (
      <SeeFrame
        record={this.props.see.record}
        start={this.start}
        onEnd={this.onEnd}
        errors={this.props.see.errors}
        onResult={this.onResult}
        result={this.props.see.data}
        compatibility={this.props.see.isCompatible}
          />
    )
  }
}
See.contextTypes = {
  router: PropTypes.object.isRequired
}
See.propTypes = {
  see: PropTypes.object.isRequired
}
function mapStateToProps (state) {
  const { see } = state.seeAndSmell
  return {
    see
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(See)
