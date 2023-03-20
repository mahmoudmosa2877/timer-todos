const electron = require("electron");

const { Tray, Menu, app } = electron;

class Timer_Tray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath);
    this.mainWindow = mainWindow;
    this.setToolTip("Timer app");
    this.on("click", this.onClick.bind(this));
    this.on("right-click", this.onRightClick.bind(this));
  }

  onClick(event, bounds) {
    // click event bounds
    const { x, y } = bounds;
    // window height and width
    const { height, width } = this.mainWindow.getBounds();
    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      this.mainWindow.show();
      this.mainWindow.setBounds({
        x: x - width / 2,
        y: y - height,
        width: width,
        height: height,
      });
    }
  }
  onRightClick() {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: "Quit",
        click: () => app.quit(),
      },
    ]);
    this.popUpContextMenu(menuConfig);
  }
}

module.exports = Timer_Tray;
