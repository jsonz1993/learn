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

// Interact with the page
// `.goto(url[, headers])
// Load the page at `url`. Optional, a `headers` hash can be supplied to set headers on the `goto` request.
// When a page load is successful, `goto` returns an object with metadata about the page load, including:
// `url`: The URL that was loaded.
// `code`: The HTTP status code(e.g. 200, 404, 500)
// `method`: The HTTP method used(e.g. 'GET', "POST")
// `referrer`: The page that the window was displaying prior to theis load or an empty string if this is the first page load.
// `headers`: An object representing the response headers for the request as in `{header`-name: header1-value, header2-name: header2-value}`

// if the page load fails, the error will be an object with the following properties:
// `message`: A string describing the type of error
// `code`: The underlying error code describing what went wrong. Note this is NOT the HTTP status code. For possible values, see  https://code.google.com/p/chromium/codesearch#chromium/src/net/base/net_error_list.h
// `details`: A string with additional details about the error. This may be null or an empty string.
// Note that any valid response form a server is considered "successful".  That means things like 404 "not found" errors are successful results for `goto`. Only things that would cause no page to appear in the brower window, such as no server responding at the given address, the server hanging up in the middle of a response, or invalid URLs, are errors.
// You can also adjust how long `goto` will wait before timing out by setting the `gotoTimeout` option on the Nightmare constructor.

// `.back()`
// Go back to the previous page.

// .forward()
// Go forward to the next page.

// .refresh()
// Refresh the current page.

// .click(selector)
// Clicks the `selector` element once.

// .mousedocn(select)
// Mousedown the `selector` element once.

// .mouseover(selector)
// Mouseover the `selector` element once.

// .type(seletor[, text])
// Enters the `text` provided into the `selector`. Empty or falsey values provided for `text` will clear the selecor's value.
// `.type()` mimics a user typing in a textbox and will emit the proper keyboard events
//  Key presses can also be fired using Unicode values with `.type()`. For example, if you wanted to fire an enter key press, you would write `.type('document', '\u000d')`.
// if you don't need the keyboard events, consider using `.insert()` instead as it will be faster and more robust.

// .insert(selector[, text])
// Similar to `.type()`. `.insert()` enters the `text` provided into the `selector` element. Empty or falsey values provided for `text` will clear the selector's value.
// `.insert()` is faster that `.type()` but does not trigger the keyboard events.

// .check(selector)
// checks the `selector` checkbox element.

// .uncheck(selector)
// unchecks the `selector` checkbox element.

// .select(selector, option)
// Changes the `selector` dropdown element to the option with attribute [value = `option`]

// scrollTo(top, left)
// Scrolls the page to desired position. `top` and `left` are always relative to the top let corner of the document.

// .viewport(width, height)
// set the viewport size.

// .inject(type, file)
// inject a local `file` onto the current page. The file `type` must be either `js` or `css`.

// .evalute(fn[, arg1, arg2])
// Invokes `fn` on the page with `arg1, arg2,...`. All the `args` are optional. On completion it returns the return value of `fn`. Useful for extracting information form the page. Here's an example:
var selector = 'h1';
nightmare
	.evaluate(function(selector) {
		// now we're executing inside the browser scope.
		return document.querySelector(selector).innerText;
	}, selector)// <-- that's how you pass parameters form Node scope to browser scope
	.then(function(text) {
		// ...
	});

// Callbacks are supported as a part of evaluate. If the arguments  passed are one fewer than the arguments expected for the evaluated function, the evaluation will be passed a callback as the last paramteter to the function. For example: 
nightmare
	.evaluate(function(selector, done) {
		setTimeout( () => done(null, document.querySelector(selector).innerText), 2000);
	}, selector)
	.then( function(text) {

	})

// Note that callbacks support only one value arguments. Ultimately, the callback will get wrapped in a native Promise and only be able to resolve a single value.
// Promises are also supported as a part of evaluate. If the return value of the function hash a `then` member, `.evaluate()` assumes it is waiting for a promise. For example:
nightmare
	.evaluate(function(selector, done) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(document.querySelector(selector).innerText), 2000);
		}, selector);
	})
	.then(function(text) {
		// ...
	})

// wait(selector)
// Wait until the element `selector` is present e.g. `wait('#pay-button')`

// wait(fn[, arg1, arg2, ...])
// Wait until the `fn` evaluated on the page with `arg1, arg2, ...` returns `true`. All the `args` are optional. See `.evaluate()` for usage.

// .header([header, value])
// Add a header override for all HTTP requests. If `header` is undefined, the header overrides will be reset.


// Extract from the Page

// .exists(selector)
// Returns whether the selector exists or not on the page.

// .visible(selector)
// Returns whether the selector is visible or not

// .on(event, callback)
// Capture page events with the callback. You have to call `.on()` before calling `.goto()`. Supported events are [http://electron.atom.io/docs/v0.30.0/api/browser-window/#class-webcontents]
// Additional "page" events
// `.on('page', function(type = 'error', message, stack))
// This event is triggered if any javascript exception is thrown on the page. But this event is not triggered if the injected javascript code (e.g. via `.evaluate()`) is throwing an exception.
// "page" events
// Listen for `window.addEventListener('error'), alert(...), prompt(...) & confirm(...)`.
// .on('page', function(type="error", message, stack))
// Listen for top-level page errors. This will get triggered when an error is throw on the page.
// .on('page', function(type="alert", message))
// Nightmare disables `window.alert` from popping up by default, but you can still listen for the contents of the alert dialog.
// .on('page', function(type="prompt", message, response));
// Nightmare disables `window.prompt` from popping up by default, but you can still listen for the message to come up. If you need to handle the confirmation differently, you'll need to use your own preload script.
// confirm 同理
// Additional "console" events
// .on('console', function(type[, arguments, ...]))
// `type` will be either `log`, `warn` or `error` and `arguments` are what gets passed form the console.

// .once(event, callback)
// Similar to `.on()`, but captures page events with the callback one time.

// .removeListener(event, callback)
// Removes a given listener callback for an event.

// .screenshot([path][, clip]);
// Taske a screenshot of the current page. Useful for debugging. The output is always a `png`. Both arguments are optional. If `path` is provided, it saves the image to the disk. Otherwise it returns a `Buffer` of the image data. If `clip` is provided , the image will be clipped to the rectangle.

// .html(path, saveType);
// Save the current page as html as files to disk at the given path.
// Sve type options are [https://github.com/atom/electron/blob/master/docs/api/web-contents.md#webcontentssavepagefullpath-savetype-callback]

// pdf(path, options)
// Sves a PDF to the specified `path`. Options are [https://github.com/atom/electron/blob/v0.35.2/docs/api/web-contents.md#webcontentsprinttopdfoptions-callback]

// .title()
// Returns the title of the current page.

// url() 
// Returns the url of the current page.



// Cookies 
// cookies.get(name)
// Get a cookie by it's `name`. The url will be the current url.

// .cookies.get(query)
// Query multiple cookies with the `query` object. If a `query.name` is set, it will return the first cookie it finds with that name, otherwise it will query for an array of cookies. If no `query.url` is set , it will use the current url. Here's an example:

nightmare
	.goto('https://www.baidu.com')
	.cookies.get({
		path: '/query',
		secure: true
	})
	.then(function(cookies) {
		// do something with the cookies
	})

// .cookies.get()
// Get all the cookies for the current url. If you'd like get all cookies for all urls,use: `.get({url: null})`

// .cookies.set(name, value)
// Set a cookie's `name` and `value`. Most basic form, the url will be the current url.

// .cookies.set(cookie)
// Set a `cookie`. If `cookie.url` is not set, it will set the cookie on the current url. Here's an example:
nightmare
	.goto('http://www.baidu.com')
	.cookies.set({
		name: 'token',
		value: 'some token',
		path: '/query',
		secure: true
	})
	.then(function() {
		// ...
	})

// .cookies.set(cookies)
// Set multiple cookies at once. `cookies` is an array of `cookie` objects. Take a look at the `.cookies.set(cookie)` dcoumentation above for a better idea of what `cookie` should look like.

//cookies.clear([name])
// Clear a cookie for the current domain. If `name` is not spaceified, all cookies for the current domain will be cleared.
nightmare
	.goto('http://www.baidu.com')
	.cookies.clear('SomeCookieName')
	.then(function() {
		// ...
	});

// .cookies.clearAll()
// Clears all cookies for all domains.
nightmare
	.goto('https://www.baidu.com')
	.cookies.clearAll()
	// ... other actions ...
	.then(function() {
		// ...
	});

// Proxies
// 代理。应该很少会用到。忽略掉

// Extending Nightmare
// 扩展Nightmare
// Nightmare.action(name, [electronAction|electronNamespace], action| namespace)

Nightmare.action('size', function(done) {
	this.evaluate_now(function() {
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		return {
			height: h,
			width: w
		}
	}, done)
});

Nightmare()
	.goto('http://cnn.com')
	.size()
	.then(function(size) {
		// ... do someting with the size information
	});

// Remember, this is attached to the static class `Nightmare`, not the instance.
// Your'll notice we used an internal function `evaluate_now`.This function is different than `nightmare.evaluate` because it runs it immediately, whereas `nightmare.evaluate` is queued.
// An easy way to remember: when in doubt, use `evaluate`.If you're creating custom actions, use `evaluate_now`. The technical reson is that since our action has already been queued and we're running it now, we shouldn't re-queue the evaluate function.
// We can also create custom namespaces. We do this internally for nightmare.cookies.get and nightmare.cookies.set. These are useful if you have a bundle of actions you want to expose, but it will clutter up the main nightmare object. Here's an example of that:
Nightmare.action('stype', {
	background: function(done) {
		this.evaluate_now(function() {
			return window.getComputedStyle(document.body, null).backgroundColor
		}, done)
	}
});

nightmare()
	.goto('https:www.baidu.com')
	.style.background()
	.then(function(background) {
		// background
	});

// You can also add custom Electron actions. The additional Electron action or nimespace actions task `name`, `options`, `parent`, `win`, `renderer` and `done`. Note the Electron action comes first, mirroring how `.evaluate()` works.Fof Example:
Nightmare.action('clearCache', function(name, options, parent, win, renderer, done) {
	parent.respondTo('clearCache', function(done) {
		win.webContents.session.clearCache(done);
	});
	done();
}, function(message, done) {
	this.child.call('clearCache', done);
});

Nightmare()
	.clearCache()
	.goto('http://www.baicu.com')
	then(function() {

	});
//... would clear the browser's cache before navigation to `baidu.com`.

// .use(plugin)
// `nightmare.use` is useful for reusing a set of tasks on an instance. Check out  [https://github.com/segmentio/nightmare-swiftly]


// Custom preload script
// If you need to do something custom when you first load the window environment, you can sapecify a custom preload script. Here's how you do that:
const path = requre('path');
var nightmare = Nightmare({
	webPreferences: {
		preload: path.resolve('custom-script.js');
		// alternative: preload: 'absoulte/path/to/custom-script.js'
	}
});

// The only requirement for that script is that you'll need the following prelude:
window.__nightmare = {};
__nightmare.ipc = require('electron').ipcRenderer;

// To benefit of all of nightmare's feedback from the browser, you can instead copy the contents of nightmare's preload.[https://github.com/segmentio/nightmare/blob/master/lib/preload.js]




// Usage
// Installation
// Nightmare is a Node.js module, so you'll need to have Node.js installed.Then you just need to `npm install` the module: `npm install --save nightmare`

// Execution
// Nightmare is a node module that can be used in a Node.js script or module. Here's a simple script to open a web page:
var Nightmare = require('nightmare'),
	nightmare = Nightmare();

nightmare.goto('https://www.baidu.com')
	.evaluate(function() {
		return document.title;
	})
	.end()
	.then(function(title) {
		console.log(title);
	});

// If you save this as `cnn.js`, you can run it on the command line like this:
// npm install nightmare
// node cnn.js



// Debugging
// There are three good ways to get more information about what's happening inside the headless browser: 
// 1. Use the `DEBUG=*` flag described below.
// 2. Pass `{show: true }` to the nightmare constructor to have it create a visible,rendered window that you can watch what's happening.
// 3. Listen for specifi events.[https://github.com/segmentio/nightmare#onevent-callback]
// To run the same file with debugging output, run it like this `DEBUG=ngngmare node cnn.js`(on window use `set DEBUG=nigthmare & node cnn.js`).
// This will print out some additional information about what's going on:
//  nightmare queueing action "goto" +0ms
//  nightmare queueing action "evaluate" +4ms
//  Breaking News, U.S., World, Weather, Entertainment & Video News - CNN.com

// Debug Flags
// All nightmare messages
// `DEBUG=nightmare*`
// only actions
// `DEBUG=nightmare:actions*`
// Only logs
// `DEBUG=nightmare:log*`


// TESTS .......



























