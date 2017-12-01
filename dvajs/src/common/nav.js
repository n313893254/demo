import dynamic from 'dva/dynamic'

const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
})

export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页',
    path: '/',
    children: [
      {
        name: '表单页',
        path: 'form',
        icon: 'form',
        children: [
          {
            name: '高级表单',
            path: 'advanced-form',
            component: dynamicWrapper(app, ['form'], () => import('../routes/Forms/AdvancedForm'))
          }
        ]
      }
    ]
  },
]
