import React from 'react'
import { connect } from 'dva'
import DocumentTitle from 'react-document-title'
import classNames from 'classnames'
import { ContainerQuery } from 'react-container-query'
import { Layout, Menu, Icon, Button } from 'antd'
import { Switch, Route, Link } from 'dva/router'
import styles from './BasicLayout.less'
import logo from '../assets/logo.svg'

const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const MenuDivider = Menu.Divider

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
}

class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props)
    this.menus = props.navData.reduce((arr, current) => arr.concat(current.children), [])
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    }
  }

  getCurrentMenuSelectedKeys(props) {
    const { location: { pathname } } = props || this.props
    const keys = pathname.split('/').slice(1)
    if (keys.length === 1 && keys[0] === '') {
      return [this.menus[0].key]
    }
    return keys
  }

  getPageTitle() {
    const { location, getRouteData } = this.props
    const { pathname } = location
    let title = 'Ant Design Pro'
    getRouteData('BasicLayout').forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name} - Ant Design Pro`
      }
    })
    return title
  }

  getNavMenuItems(menusData, parentPath = '') {
    if (!menusData) {
      return []
    }
    return menusData.map((item) => {
      if (!item.name) {
        return null
      }
      let itemPath
      if (item.path.indexOf('http') === 0) {
        itemPath = item.path
      } else {
        itemPath = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/')
      }
      if (item.children && item.children.some(child => child.name)) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              ) : item.name
            }
            key={item.key || item.path}
          >
            {this.getNavMenuItems(item.children, itemPath)}
          </SubMenu>
        )
      }
      const icon = item.icon && <Icon type={item.icon} />
      return (
        <MenuItem key={item.key || item.path}>
          {
            /^https?:\/\//.test(itemPath) ? (
              <a href={itemPath} target={item.target}>
                {icon}<span>{item.name}</span>
              </a>
            ) : (
              <Link
                to={itemPath}
                target={item.target}
                replace={itemPath === this.props.location.pathname}
              >
                {icon}<span>{item.name}</span>
              </Link>
            )
          }
        </MenuItem>
      )
    })
  }

  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    })
  }

  getDefaultCollapsedSubMenus(props) {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys(props)]
    currentMenuSelectedKeys.splice(-1, 1)
    if (currentMenuSelectedKeys.length === 0) {
      return ['dashboard']
    }
    return currentMenuSelectedKeys
  }

  handleOpenChange = (openKeys) => {
    const lastOpenKey = openKeys[openKeys.length - 1]
    const isMainMenu = this.menus.some(
      item => lastOpenKey && (item.key === lastOpenKey || item.path === lastOpenKey)
    )
    this.setState({
      openKeys: isMainMenu ? [lastOpenKey] : [...openKeys],
    })
  }

  render() {
    const { getRouteData, collapsed } = this.props
    // const menu = (
    //   <Menu>
    //     <MenuItem>个人中心</MenuItem>
    //     <MenuItem>设置</MenuItem>
    //     <MenuDivider></MenuDivider>
    //     <MenuItem>退出登录</MenuItem>
    //   </Menu>
    // )

    const menuProps = collapsed ? {} : {
      openKeys: this.state.openKeys,
    }

    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="md"
          onCollapse={this.onCollapse}
          width={256}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="logo"/>
              <h1>Ant Design Pro</h1>
            </Link>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            style={{ margin: '16px 0', width: '100%' }}
            {...menuProps}
            onOpenChange={this.handleOpenChange}
            selectedKeys={this.getCurrentMenuSelectedKeys()}
          >
            {this.getNavMenuItems(this.menus)}
          </Menu>
        </Sider>
        <Layout>
          <Header />
          <Content>
            <div>
              <Switch>
                {
                  getRouteData('BasicLayout').map(item =>
                    (
                      <Route
                        exact={item.exact}
                        key={item.path}
                        path={item.path}
                        component={item.component}
                      />
                    ),
                  )
                }
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
    return (
      <div>
        <DocumentTitle title={this.getPageTitle()}>
          <ContainerQuery query={query}>
            {params => <div className={classNames(params)}>{layout}</div>}
          </ContainerQuery>
        </DocumentTitle>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: '',
  collapsed: state.global.collapsed,
}))(BasicLayout)
