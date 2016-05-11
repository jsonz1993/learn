var img = ['test3.jpg', 'test2.jpg', 'test1.jpg', 'test4.jpg', 'test5.jpg', 'test6.jpg', 'test7.jpg', 'test8.jpg', 'test9.jpg', 'test10.jpg', 'test11.jpg', 'test12.jpg'],

	key = 'jsonz',

	menu = [];

if (!window.localStorage.getItem(key)) {
	window.localStorage.setItem(key, JSON.stringify(menu))
}


export default {
    fetch : function(){
    	return {
    		img : img,
    		menu : JSON.parse(window.localStorage.getItem(key))
    	}
    },

    save : function(data){
    	window.localStorage.setItem(key, JSON.stringify(data))
    }
}
