// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/doublesheep/git/tutorial-part-four/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/doublesheep/git/tutorial-part-four/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/doublesheep/git/tutorial-part-four/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/doublesheep/git/tutorial-part-four/src/pages/my-files.js"))
}

exports.json = {
  "layout-index.json": require("/Users/doublesheep/git/tutorial-part-four/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/doublesheep/git/tutorial-part-four/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/doublesheep/git/tutorial-part-four/.cache/json/layout-index.json"),
  "about.json": require("/Users/doublesheep/git/tutorial-part-four/.cache/json/about.json"),
  "layout-index.json": require("/Users/doublesheep/git/tutorial-part-four/.cache/json/layout-index.json"),
  "index.json": require("/Users/doublesheep/git/tutorial-part-four/.cache/json/index.json"),
  "layout-index.json": require("/Users/doublesheep/git/tutorial-part-four/.cache/json/layout-index.json"),
  "my-files.json": require("/Users/doublesheep/git/tutorial-part-four/.cache/json/my-files.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/doublesheep/git/tutorial-part-four/.cache/layouts/index.js"))
}