import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import { getNavData } from './common/nav'
import cloneDeep from 'lodash/cloneDeep'
import { getPlainNode } from './utils/utils'

function getRouteData(navData, path) {
  if (!navData.some(item => item.layout === path) ||
    !(navData.filter(item => item.layout === path)[0].children)) {
    return null
  }
  const route = cloneDeep(navData.filter(item => item.layout === path)[0])
  const nodeList = getPlainNode(route.children)
  return nodeList
}

function getLayout(navData, path) {
  const route = navData.filter(item => item.layout === path)[0]
  return {
    component: route.component,
  }
}

function RouterConfig({ history, app }) {
  const navData = getNavData(app)
  const BasicLayout = getLayout(navData, 'BasicLayout').component

  const passProps = {
    app,
    navData,
    getRouteData: (path) => {
      return getRouteData(navData, path)
    }
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={props => <BasicLayout {...props} {...passProps} />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
