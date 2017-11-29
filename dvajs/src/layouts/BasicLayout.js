import React from 'react'
import { connect } from 'dva'

class BasicLayout extends React.PureComponent {
  render() {
    return (
      <p>poi</p>
    )
  }
}

export default connect(state => ({
  currentUser: '',
}))(BasicLayout)
