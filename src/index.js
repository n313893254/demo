import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Switch } from 'react-router-dom'
import App from './App'
import './styles/index.less'

const root = document.getElementById('app')
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const render = (Component) => {
  renderMethod(
    <Provider>
      <HashRouter>
        <Switch>
          <Component />
        </Switch>
      </HashRouter>
    </Provider>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default // eslint-disable-line
    render(NextApp)
  })
}
