import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Monitor from '../pages/monitor/index'

export default () => [
  <Route path='/' render={() => <Redirect to='/monitor' />} exact key='/' />,
  <Route path='/monitor' component={ Monitor } key='monitor' />,
]
