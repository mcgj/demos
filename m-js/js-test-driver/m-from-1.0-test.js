//assertEquals(true,true);
//assertTrue(true);
//assertFalse(false);

TestCase("From Test", {
	"test BuildParam And Post" : function() {
		var names = new Array();
		names[0] = "rscLevel";
//		names[1] = "platform";
//		names[2] = "lastUpdateTime";
		var values = new Array();
		values[0] = "1";
//		values[1] = "Android";
//		values[2] = "0";
		var rUrl = "http://localhost:8610/pxzf/jo/ckSLevel.do";
		var rParams = Mjf.BuildParam(names,values);
		var callback = function(){
			alert("----------------");
		};
		var options = {rUrl:rUrl,rParams:rParams,callback:callback};
		Mjf.Post(options);
	}
});