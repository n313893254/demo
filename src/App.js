/* eslint-disable */
import { hot } from 'react-hot-loader/root'
import React, { PureComponent } from 'react'
import intl from 'react-intl-universal'
import Routes from './routes'

class App extends PureComponent {
  render() {
    return (
      <Routes />
    )
  }
}

export default hot(App)
