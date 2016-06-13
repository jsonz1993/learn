(function(){
    //initialize app
    var myApp = new Framework7();

    // if we need to use custom dom library,let's save it to $$ variable;
    var $$ = Framework7.$;

    // add view
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