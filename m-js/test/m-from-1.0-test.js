//assertEquals(true,true);
//assertTrue(true);
//assertFalse(false);

TestCase("From Test", {
	"test BuildParam" : function() {
		var names = new Array();
		names[0] = "u";
		names[1] = "p";
		names[2] = "a";
		var values = new Array();
		values[0] = "jack";
		values[1] = "123";
		values[2] = "china";
		Mjf.BuildParam(names,values);
	}
});