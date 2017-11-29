import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import { getNavData } from './common/nav'

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
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={props => <BasicLayout {...props}/>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
