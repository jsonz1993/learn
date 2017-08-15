// 页面加载
console.log('hello')
var page = require('webpage').create();
page.open('http://example.com', (status)=> {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});