const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor(file, isDev) {
    super({
      title: 'SysMon',
      width: isDev ? 800 : 355,
      height: 500,
      icon: './assets/icons/icon.png',
      show: false,
      opcaity: 0.9,
      resizable: isDev ? true : false,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    this.loadFile(file);
    if (isDev) {
      this.webContents.openDevTools();
    }
  }
}

module.exports = MainWindow;
