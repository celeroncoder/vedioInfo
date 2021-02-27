const form = document.querySelector("form");
const fileSelector = document.querySelector("input");

// cannot implement in simple browser but in a electron app it can compile common js module system.
const electron = require("electron");

// this is the module of IPC that enables us to communicate between the web window(renderer process) and the main electron app.
const { ipcRenderer } = electron;

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const file = input.files[0];

	// TODO: Install ffmpeg via homebrew

	// debugger statement browser window will stop running the event at the debugger statement.
	// debugger;
});
