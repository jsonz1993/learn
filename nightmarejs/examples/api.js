//  nightmare(options)

// waitTimeout (default: 30s)
// this will throw an exception if the `.wait()` didn't return `true` within the set timeframe.
var nightmare = Nightmare({
	waitTimeout: 1000 // in ms
})

// gotoTimeout(default: 30s)
// This will throw an exception if the `goto()` didn't finish loading within the set timeframe. Note that, even though `goto` normally waits for all the resources on a page to load, a timeout exception is only raised if the DOM itself has not yet loaded.
var nightmare = Nightmare({
	gotoTimeout: 1000 // in ms
})

// loadTimeout(default: infinite)
// This will force Nightmare to move on if a page transition caused by an action(eg, .click()) didn't finish within the set timeframe. If `loadTimeout` is shorter that `gotoTimeout`, the exceptions thrown by `gotoTimeout` will be suppressed.
var nightmare = Nightmare({
	loadTimeout: 1000 // in ms
});