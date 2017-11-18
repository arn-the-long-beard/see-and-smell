import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import SeekResultsList from './components/SeekSection'

class Stink extends Component {
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
      <SeekResultsList results={this.props.stink.items}
        update={this.props.stink.lastUpdated}
        message={this.props.stink.message}
        isRequesting={this.props.stink.isRequesting}
        maxResults={this.props.stink.maxResults}
        onChange={this.onChange}
      />)
  }
}

Stink.contextTypes = {
  router: PropTypes.object.isRequired
}

Stink.propTypes = {
  stink: PropTypes.object.isRequired
}
function mapStateToProps (state) {
  const { stink } = state.seeAndStink

  return {
    stink
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Stink)
