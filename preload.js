const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveMnemonic: (mnemonic, password) => window.electronAPI.saveMnemonic(mnemonic, password),
    loadMnemonic: (password) => window.electronAPI.loadMnemonic(password)
});