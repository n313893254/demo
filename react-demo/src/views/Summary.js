import React, { Component } from 'react'

import SummaryStore from '../stores/SummaryStore.js'

class Summary extends Component {

  constructor (props) {
    super(props)

    this.onUpdate = this.onUpdate.bind(this)

    this.state = {
      sum: SummaryStore.getSummary()
    }
  }

  render () {
    return (
      <div>Total Count: {this.state.sum}</div>
    )
  }
}
