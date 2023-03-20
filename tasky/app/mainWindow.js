const electron = require("electron");

const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(loadUrl) {
    super({
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
      skipTaskbar: true,
      autoHideMenuBar: true,
      webPreferences: { backgroundThrottling: false },
    });

    /*
     webPreferences:{backgroundThrottling:false} mean that the computer 
     donot slow the program down when it is at background
    
    */
    this.loadURL(loadUrl);
    this.on("blur", this.onBlur.bind(this));
  }

  onBlur() {
    this.hide();
  }
}

module.exports = MainWindow;
