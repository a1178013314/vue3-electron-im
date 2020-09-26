const { app, BrowserWindow } = require('electron')
//创建登录页窗口
function createWindow () {   
  const win = new BrowserWindow({
    width: 320,
    height: 460,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      
    },
  })
  const loadURL = `http://127.0.0.1:8095` 
  win.loadURL(loadURL)
}

//创建消息窗口
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
}

app.on('ready', () => {
  createWindow()
})

// app.whenReady().then(createWindow)
