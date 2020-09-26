const { app, BrowserWindow } = require('electron')

function createMessageWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      
    },
  })

  const loadURL = `http://127.0.0.1:8095/#/message/` 
  win.loadURL(loadURL)


}

function openMessageWindow(){
  app.on('ready', () => {
    createMessageWindow()
  })
  
}
module.exports = {
  openMessageWindow
} 