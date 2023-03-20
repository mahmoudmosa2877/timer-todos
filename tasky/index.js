const electron = require("electron");
const path = require("path");

const { app, BrowserWindow, Tray, ipcMain } = electron;
const Timer_Tray = require("./app/timer_Tray");
const MainWindow = require("./app/mainWindow");

let mainWindow;
let tray;

app.on("ready", () => {
  // app.dock.hide();
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);

  const iconPath = path.join(__dirname, "./src/assets/windows-icon@2x.png");

  tray = new Timer_Tray(iconPath, mainWindow);
  // tray.setTitle("11:11:2011");
});

// ipcMain.on("update-timer", (event, timeLeft) => {
//   tray.setTitle(timeLeft);
// });
