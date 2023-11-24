const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  // set window properties (width, height)
  const win = new BrowserWindow({ show: false });
  win.maximize();


  // load the browser window
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  // Because windows cannot be created before the ready event,
  //you should only listen for activate events after your app is initialized.
  // Do this by only listening for activate events inside your existing whenReady() callback.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

//Quit the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})