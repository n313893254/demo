'use strict'
import electron, { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

  mainWindow = new BrowserWindow({
    // height: 675,
    // width: 1200,
    height,
    width,
    // useContentSize: true,
    frame: false
  })
  // WebFrame.setVisualZoomLevelLimits(1, 1)
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// var sqlite3 = require('sqlite3').verbose()
// var path = require('path').resolve(__dirname, 'datos_exportados(14-05-2015o).sqlite')
// var sipac = new sqlite3.Database(path, 'OPEN_READONLY')
// // sipac.serialize(function () {
// //   sipac.each('SELECT * FROM dat_actividades', function (err, row) {
// //     if (err) {
// //       console.log(err)
// //     } else {
// //       console.log(row)
// //     }
// //   })
// // })
// console.log(sipac)
// sipac.close()
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
