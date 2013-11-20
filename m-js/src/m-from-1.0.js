function Mjf(){};
Mjf.prototype = new Object();

Mjf.XmlHttp = null;
/**
 * Ajax Post
 * @param {Object} options {rUrl:rUrl,rMethod:rMethod,rParams:rParams,callback:function}
 * @return {JsonString}
 */
Mjf.Ajax = function(options){
	if(null == Mjf.XmlHttp){
		Mjf.XmlHttp = Mjf.getXMLHttp();
	}
	Mjf.XmlHttp.open(options.rMethod, options.rUrl + options.rParams, true);
	Mjf.XmlHttp.onreadystatechange = options.callback;
	Mjf.XmlHttp.send(null);
};

/**
 * Create XMLHTTP
 * @returns {Object}
 */
Mjf.getXMLHttp = function(){
	var XMLHttpObject = null;
	try {
		XMLHttpObject = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (E) {
		try {
			XMLHttpObject = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			XMLHttpObject = new XMLHttpRequest();
		}
	}
	return XMLHttpObject;
};

/**
 * Build request params
 * 
 * @param {array}
 *            names
 * @param {array}
 *            values
 * @returns {String}
 */
Mjf.BuildParam = function(names,values){
	var params = "";
	for(var n = 0; n < names.length; n++){
		if(n == 0){
			if(n < names.length -1){
				params = names[n] + "=" + values[n] + "&";
			}else{
				params = names[n] + "=" + values[n];
			}
		}else if(n < names.length - 1){
			params += names[n] + "=" + values[n] + "&"; 
		}else{
			params += names[n] + "=" + values[n];
		}
	}
	return params;
};