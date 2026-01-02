const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1080,
        height: 1060,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile(path.join(__dirname, 'index.html'))
        .catch(error => console.error('Error loading file:', error));
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});