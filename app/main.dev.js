import electron, { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

let mainWindow = null; //声明要打开的窗口

app.on('ready',()=>{
  mainWindow = new  BrowserWindow()
  mainWindow.loadFile(path.join(__dirname, 'app.html'))//加载html页面
  mainWindow.on('closed',()=>{
    mainWindow = null
  }) 
})