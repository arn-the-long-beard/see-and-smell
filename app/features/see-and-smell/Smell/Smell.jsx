import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import SeekResultsList from './components/SeekSection'

class Smell extends Component {
  /**
   * Class constructor.
   */
  constructor (props, context) {
    super(props, context)
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.props.actions.checkIfNeedToAskWikipedia()
  }

  componentDidMount () {
    this.props.actions.checkIfNeedToAskWikipedia()
  }

  onChange (event) {
    event.preventDefault()
    this.props.actions.updateMaxResults(event.target.value)
  }

  /**
   * Render the component.
   */
  render () {
    return (
      <SeekResultsList results={this.props.smell.items}
        update={this.props.smell.lastUpdated}
        message={this.props.smell.message}
        isRequesting={this.props.smell.isRequesting}
        maxResults={this.props.smell.maxResults}
        onChange={this.onChange}
      />)
  }
}

Smell.contextTypes = {
  router: PropTypes.object.isRequired
}

Smell.propTypes = {
  smell: PropTypes.object.isRequired
}
function mapStateToProps (state) {
  const { smell } = state.seeAndSmell

  return {
    smell
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Smell)
