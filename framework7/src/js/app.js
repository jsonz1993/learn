(function(){
    // if we need to use custom dom library,let's save it to $$ variable;
    var $$ = Framework7.$;

    //judge device
    var isAndroid = Framework7.prototype.device.android === true,
        isIos = Framework7.prototype.device.ios === true;

    //We also need to use this conditions in our Template7 templates, so we may assigin it to Template7 global context
    Template7.global = {
        android: isAndroid,
        ios: isIos
    };

    // Dynamically add style
    if (isAndroid) {
        $$('head').append('<meta name="android">');
    } else {
        $$('head').append('<meta name="ios">');
    }

    // and the final part before app initialization,we need to change Througe type navbar layout to fixed in material theme for Android
    if (isAndroid) {
        // change class
        $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');

        // and move navbar init page
        $$('.view .navbar').prependTo('.view .page');
    }

    //initialize app
    var myApp = new Framework7({
        // Enable material theme for Android device only
        material: !!isAndroid,
        // enable template7 pages
        template7Pages: true
    });

    // init view
    var mainView = myApp.addView('.view-main', {
        // because we want to use dynamic navbar,we need to enable it for this view
        dynamicNavbar: true
    });

    $$(document).on('pageInit', function(e){
        // get page data from event data
        var page = e.detail.page;

        if (page.name === 'about') {
            // following code will be executed for page with data-page attribute equal to 'about'
            myApp.alert('here comes about page');
        }
    });

    // using live pageInit event handlers for each page
    $$(document).on('pageInit', '.page[data-page="about"', function(e){
        myApp.alert('here comes about page too');
    });
})();