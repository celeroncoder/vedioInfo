// es6 destructuring
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
	const win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
		},
	});

	win.loadFile("public/index.html");
}

app.whenReady().then(createWindow);
