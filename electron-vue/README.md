# electron-vue

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


# lint all JS/Vue component files in `src/`
npm run lint

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[9c9bf75](https://github.com/SimulatedGREG/electron-vue/tree/9c9bf75630add075bfa58f52e391e82fb1b9f44a) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

# 文件结构说明
├── .electron-vue                npm执行脚本目录
│   ├── build.js
│   ├── dev-client.js
│   ├── dev-runner.js
│   ├── webpack.main.config.js
│   ├── webpack.renderer.config.js
│   └── webpack.web.config.js
├── :memory
├── README.md
├── appveyor.yml
├── build
├── dist
├── node_modules
├── package.json                  包依赖文件
├── src
│   ├── index.ejs
│   ├── main                       主进程目录
│   │   ├── index.dev.js
│   │   └── index.js
│   └── renderer                   渲染进程目录
│       ├── App.vue
│       ├── assets                 静态资源文件，用于请求次数多的
│       │   ├── animate.less       动画文件
│       │   ├── bg
│       │   ├── logo.png
│       │   ├── menu
│       │   ├── src
│       │   └── theme.less         全局主题文件
│       ├── components 组件目录
│       │   ├── ArticleDetail.vue   文章详情组件
│       │   ├── MenuBar.vue         菜单组件
│       │   ├── PaintingDisplay.vue 画作放大组件
│       │   ├── Photo.vue           照片组件
│       │   ├── PoetryList.vue      诗词列表组件
│       │   ├── ResearchList.vue    研究列表组件
│       │   ├── Searchlist.vue      搜索列表组件
│       │   ├── TransisionLayer.vue 泼墨组件
│       │   ├── Video.vue           视频播放器组件
│       │   └── WritingList.vue     文章列表组件
│       ├── ignore_lib
│       │   ├── GSY.db              数据库
│       │   ├── GsyDB.js            数据库接口文件
│       │   └── turn.min.js         turn.js 5th
│       ├── main.js
│       ├── router                  路由目录
│       │   └── index.js
│       ├── store                   控制层目录
│       │   ├── index.js            兄弟组件，非父子组件间的通信需通过这里进行
│       │   └── modules             测试用，无意义
│       │       ├── Counter.js
│       │       └── index.js
│       └── views
│           ├── Chronological.vue  年表页面
│           ├── History.vue        史料页面
│           ├── Painting.vue       画作页面
│           ├── Research.vue       研究页面
│           ├── Search.vue         搜索页面
│           ├── Start.vue          开始页面
│           └── VideoList.vue      视频列表页面
├── static                         静态资源，该目录下webpack不压缩
│   ├── pics
│   │   ├── beditor_upload
│   │   └── works
│   └── video
└── webpack.config.js             webpack配置文件
