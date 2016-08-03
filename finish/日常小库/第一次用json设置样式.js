function setStyle(obj,json){
	if (typeof obj === 'array') {
		for (var i = 0, len = obj.length; i < len; i++) {
			set(obj[i])
		}
	} else {
		set(obj);
	}

	function set(obj) {
		for(var attr in json){
			obj.style[attr] = json[attr];
		}	
	}

	return obj;
}