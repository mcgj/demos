test("BuildParam",function(){
	var names = new Array();
	names[0] = "a";
	names[1] = "b";
	names[2] = "c";
	var values = new Array();
	values[0] = "1";
	values[1] = "2";
	values[2] = "3";
	var rParams = Mjf.BuildParam(names,values);
	equal(rParams=="a=1&b=2&c=3",true,rParams);
});

test("Ajax",function(){
	var names = new Array();
	names[0] = "a";
	names[1] = "b";
	names[2] = "c";
	var values = new Array();
	values[0] = "1";
	values[1] = "2";
	values[2] = "3";
	var rParams = Mjf.BuildParam(names,values);
	var rUrl = "http://localhost:8610/pxzf/jo/ckSLevel.do?";
	var rMethod = "post";
	var callback = function(){
		if (Mjf.XmlHttp.readyState == 4) {
	        if (Mjf.XmlHttp.status == 200) {
	            var text = Mjf.XmlHttp.responseText;
	            text = window.decodeURI(text);
	            alert("result: " + text);
	        }
	    }
	};
	var options = {rUrl:rUrl,rParams:"",rMethod:rMethod,callback:callback};
	var result = Mjf.Ajax(options);
	equal(true,true,result);
});
