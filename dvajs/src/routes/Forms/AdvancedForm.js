import React, { PureComponent } from 'react'
import { connect } from 'dva'

class AdvancedForm extends PureComponent {
  render() {
    return <p>yamato</p>
  }
}

export default connect(state => ({
  currentUser: '',
}))(AdvancedForm)
