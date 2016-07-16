var auth = riot.observable();
auth.login = function(params){
	$.get('/api', params, function(json){
		auth.trigger('login', json);
	})
}