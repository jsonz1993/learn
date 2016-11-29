//  nightmare(options)

// waitTimeout (default: 30s)
// this will throw an exception if the `.wait()` didn't return `true` within the set timeframe.
var nightmare = Nightmare({
	waitTimeout: 1000 // in ms
});

// gotoTimeout(default: 30s)
// This will throw an exception if the `goto()` didn't finish loading within the set timeframe. Note that, even though `goto` normally waits for all the resources on a page to load, a timeout exception is only raised if the DOM itself has not yet loaded.
var nightmare = Nightmare({
	gotoTimeout: 1000 // in ms
});

// loadTimeout(default: infinite)
// This will force Nightmare to move on if a page transition caused by an action(eg, .click()) didn't finish within the set timeframe. If `loadTimeout` is shorter that `gotoTimeout`, the exceptions thrown by `gotoTimeout` will be suppressed.
var nightmare = Nightmare({
	loadTimeout: 1000 // in ms
});

// executionTimeout (default: 30s)
// The maxiumum amount of time to wait for an `.evaluate()` statement to complete.
var nightmare = Nightmare({
	executionTimeout: 1000 // in ms
});

// paths
// The default system paths that Electron knows about. Here's a list of available paths:
// [https://github.com/atom/electron/blob/master/docs/api/app.md#appgetpathname]
// You can overwrite them in Nightmare by doing the following.
var nightmare = Nightmare({
	paths: {
		userData: '/user/data'
	}
});

// switches
// The command line switches used by the Chrome browser that are also supported by Electron. Here's a list of supported Chrome command line switches: 
// [https://github.com/atom/electron/blob/master/docs/api/chrome-command-line-switches.md]
var nightmare = Nightmare({
	switches: {
		'proxy-server': '1.2.3.4:5678',
		'ignore-certificate-errors': true
	}
});

// electronPath
// The path to prebuilt Electron binary. This is useful for testing on different version Electron.
// Note that Nightmare only supports the version this package depending on.
// Please use this option at your own risk.
var nightmare = Nightmare({
	electronPath: require('electron')
});

// dock
// A boolean to optionally show the Electron icon in the dock(default: `false`).
// This is useful for testing purposes.
var nightmare = Nightmare({
	dock: true
});

// openDevTools
// Optionally show the DevTools in the Electron window using `true`, or use an object hash containing `mode: 'detach'` to show in a separate window.
// The hash gets passed to `contents.openDevTools()
var nightmare = Nightmare({
	openDevTools: {
		mode: 'detach'
	},
	show: true
});

// typeInterval(default: 100ms)
// How long to wait between keystrokes when using `.type()`
var nightmare = Nightmare({
	typeInterval: 20
});

// pollInterval
// How long to wait between checks for the `.wait()` condition to be successful.
var nightmare = Nightmare({
	pollInterval: 50
});

// maxAuthRetries(default: 3)
// Defines the number of times to retry an authentication when set up with `.authenticate()`
var nightmare = Nightmare({
	maxAuthRetries: 3
});

// `.engineVersions()`
// Gets the versions for Electron and Chromium.

// `.useragent(useragent)`
// Set the `useragent` used by electron.

// `authentication(user, password)`
// Set the `user` and `password` for accessing a web page using basic authentication.
// Be sure to set it before calling `goto(url)`.

// .end()
// Complete any queue operations,  disconnect and close the electron process. Note that if you're using promises, `then()` must be called after `.end()` to run the `.end()` task.

// .halt(error, done)
// clears all queued operations, kills the electron process, and passes error message or 'Nightmare Halted' to an unresolved promise. Done will be called after te process has exited.

// 未完待续 (https://github.com/segmentio/nightmare#interact-with-the-page)[https://github.com/segmentio/nightmare#interact-with-the-page]





















