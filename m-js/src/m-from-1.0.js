function Mjf(){};
Mjf.prototype = new Object();

/**
 * Ajax Post
 * @param {String} rUrl
 * @param {String} rParams
 * @param {String} callback
 * @returns {String}
 */
Mjf.Post = function(options){
	$.ajax( {
		type : "post",
		url : options.rUrl,
		data : options.rParams,
		async : true,
		dataType : "json",
		success : options.callback(status)
	});
};

/**
 * Build request params
 * @param {array} names
 * @param {array} values
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