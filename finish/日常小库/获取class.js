function getByClass(oParent,classN){
	var aElm = oParent.getElementsByTagName('*');
	var aArr = [];
	for(var i =0;i<aElm.length;i++){
		if(aElm[i].className == classN){
			aArr.push(aElm[i]);
		}
	}
	return aArr;
}
