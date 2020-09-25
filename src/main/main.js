const { app, BrowserWindow } = require('electron')
function createWindow () {   
  // 创建浏览器窗口
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
  // 并且为你的应用加载index.html
  win.loadURL(loadURL)
  // win.webContents.openDevTools()
}

app.on('ready', () => {
  createWindow()
})

// app.whenReady().then(createWindow)
