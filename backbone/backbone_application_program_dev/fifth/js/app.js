var app = app || {};

$(function() {
    var books = [{
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        'releaseDate': '2008',
        keywords: 'JavaScript Programming'
    }, {
        title: 'Backbone 应用程序开发',
        author: '大卫',
        'releaseDate': '2016',
        keywords: 'JavaScript Backbone'
    }, {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        'releaseDate': '2008',
        keywords: 'JavaScript Programming'
    }, {
        title: 'Backbone 应用程序开发',
        author: '大卫',
        'releaseDate': '2016',
        keywords: 'JavaScript Backbone'
    }, ]

    new app.LibraryView(books);
});
