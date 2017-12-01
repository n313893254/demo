import React from 'react'
import { connect } from 'dva'
import DocumentTitle from 'react-document-title'
import { ContainerQuery } from 'react-container-query'
import { Layout, Menu } from 'antd'
import { Switch, Route, Link } from 'dva/router'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
const MenuItem = Menu.Item
const MenuDivider = Menu.Divider

class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log(this.props.location.pathname)
    this.menus = props.navData.reduce((arr, current) => arr.concat(current.children), [])
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
    return menusData.map((item) => {
      let itemPath
      itemPath = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/')
      if (item.children && item.children.some(child => child.name)) {
        return (
          <SubMenu title={item.name}
            key={item.key || item.path}>
            {this.getNavMenuItems(item.children, itemPath)}
          </SubMenu>
        )
      }
      return (
        <MenuItem key={item.key || item.path}>
          {
            <Link
              to={itemPath}
              target={item.target}
              // replace={itemPath === this.props.location.pathname}
            >
              <span>{item.name}</span>
            </Link>
            // <a href={itemPath} target={item.target}><span>{item.name}</span></a>
          }
        </MenuItem>
      )
    })
  }

  render() {
    const { getRouteData } = this.props
    // const menu = (
    //   <Menu>
    //     <MenuItem>个人中心</MenuItem>
    //     <MenuItem>设置</MenuItem>
    //     <MenuDivider></MenuDivider>
    //     <MenuItem>退出登录</MenuItem>
    //   </Menu>
    // )

    const layout = (
      <Layout>
        <Sider>
          <Menu>
            {this.getNavMenuItems(this.menus)}
          </Menu>
        </Sider>
        <Layout>
          <Header></Header>
          <Content>
            <div>
              <Switch>
                {
                  getRouteData('BasicLayout').map(item =>
                    (
                      <Route
                        key={item.path}
                        path={item.path}
                        component={item.component}
                      />
                    )
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
          <ContainerQuery>
            {params => <div>{layout}</div>}
          </ContainerQuery>
        </DocumentTitle>
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: '',
}))(BasicLayout)
