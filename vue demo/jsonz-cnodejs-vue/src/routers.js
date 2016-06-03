export default (router) => router.map({
    '/': {
        name: 'index',
        component: require('./views/page'),
    },
    '/login': {
        name: 'login',
        component: require('./views/page'),
    },
    '/messages': {
    	name: 'messages',
    	component: require('./views/page')
    }

});
