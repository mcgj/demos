function Mjf(){};
Mjf.prototype = new Object();

/**
 * Ajax Post
 * @param {String} type
 * @param {String} url
 * @param {String} data
 * @param {String} async
 * @param {String} dataType
 * @param {String} params
 * @returns {String}
 */
Mjf.Post = function(type,url,data,async,dataType,params){
	var result = "";
	return result;
};

/**
 * Build request params
 * @param {array} names
 * @param {array} values
 * @returns {String}
 */
Mjf.BuildParam = function(names,values){
	var params = "";
	if(names.length == 1){
		params = names[0] + "=" + values[0];
	}else{
		for(var n = 0; n < names.length; n++){
			if(n < names.length - 1){
				params += names[n] + "=" + values[n] + "&"; 
			}else{
				params += names[n] + "=" + values[n];
			}
		}
	}
	return params;
};