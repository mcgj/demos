//assertEquals(true,true);
//assertTrue(true);
//assertFalse(false);

TestCase("Basic Test", {
	"test isNull" : function() {
		assertTrue(Mjs.isNull("    "));
		assertTrue(Mjs.isNull(""));
		
		assertFalse(Mjs.isNull("a "));
		assertFalse(Mjs.isNull(" a "));
		assertFalse(Mjs.isNull("a a"));
		assertFalse(Mjs.isNull("a *"));
	},
	"test isNumber" : function() {
		
		assertTrue(Mjs.isNumber("123"));
		
		assertFalse(Mjs.isNumber("-123"));
		assertFalse(Mjs.isNumber("00.123"));
		assertFalse(Mjs.isNumber("-00.123"));
	},
	"test isInteger" : function() {
		assertTrue(Mjs.isInteger("-123"));
		assertTrue(Mjs.isInteger("123"));
		
		assertFalse(Mjs.isInteger("0.123"));
		assertFalse(Mjs.isInteger("-0.123"));
		assertFalse(Mjs.isInteger("aaa"));
	},
	"test isMobile" : function() {
		assertTrue(Mjs.isMobile("13388888888"));
		
		assertFalse(Mjs.isMobile("133888888888"));
		assertFalse(Mjs.isMobile("1338888888"));
		assertFalse(Mjs.isMobile("12388888880"));
		assertFalse(Mjs.isMobile("-aaaa"));
		assertFalse(Mjs.isMobile("aaaa"));
	},
	"test isDecimal" : function() {
		assertTrue(Mjs.isDecimal(13388.888888));
		assertTrue(Mjs.isDecimal(-13388.888888));
		assertTrue(Mjs.isDecimal("13388.888888"));
		assertTrue(Mjs.isDecimal("-13388.888888"));
		assertTrue(Mjs.isDecimal("-13388888888"));
		
		assertFalse(Mjs.isDecimal("-aaaa"));
	},
	"test isPort" : function() {
		assertTrue(Mjs.isPort("0"));
		assertTrue(Mjs.isPort("5896"));
		
		assertFalse(Mjs.isPort("-5896"));
		assertFalse(Mjs.isPort("65536"));
	},
	"test isEmail" : function() {
		assertTrue(Mjs.isEmail("aaa@123.com"));
		assertTrue(Mjs.isEmail("aaa@123.cn"));
		assertTrue(Mjs.isEmail("-aaa@123.cf"));
		assertTrue(Mjs.isEmail("-aaa@12.3.cf"));
		
		assertFalse(Mjs.isEmail("-aaa.@123.cf"));
		assertFalse(Mjs.isEmail("-aaa@123 .cf"));
		assertFalse(Mjs.isEmail(" -aaa@123.cf "));
	},
	"test isMoney" : function() {
		assertTrue(Mjs.isMoney("1.1"));
		assertTrue(Mjs.isMoney("1.11"));
		assertTrue(Mjs.isMoney("1.111"));
		
		assertFalse(Mjs.isMoney("1.1111"));
		assertFalse(Mjs.isMoney("-1.1"));
		assertFalse(Mjs.isMoney("aaa"));
		assertFalse(Mjs.isMoney("\u6C49\u5B57"));
	},
	"test isNumberOr_Letter" : function() {
		assertTrue(Mjs.isNumberOr_Letter("aaa"));
		assertTrue(Mjs.isNumberOr_Letter("123"));
		assertTrue(Mjs.isNumberOr_Letter("_"));
		assertTrue(Mjs.isNumberOr_Letter("aaa_"));
		assertTrue(Mjs.isNumberOr_Letter("123_"));
		assertTrue(Mjs.isNumberOr_Letter("aaa123"));
		assertTrue(Mjs.isNumberOr_Letter("_aaa_123_"));
		
		assertFalse(Mjs.isNumberOr_Letter("_aaa_12.3_"));
		assertFalse(Mjs.isNumberOr_Letter("_aaa_12 3_"));
		assertFalse(Mjs.isNumberOr_Letter("\u6C49\u5B57"));
	},
	"test isNumberOrLetter" : function() {
		assertTrue(Mjs.isNumberOrLetter("aaa"));
		assertTrue(Mjs.isNumberOrLetter("123"));
		assertTrue(Mjs.isNumberOrLetter("aaa123"));
		
		assertFalse(Mjs.isNumberOrLetter("_aaa_12.3_"));
		assertFalse(Mjs.isNumberOrLetter("_aaa_12 3_"));
		assertFalse(Mjs.isNumberOrLetter("&&"));
	},
	"test isChinaOrNumbOrLett" : function() {
		assertTrue(Mjs.isChinaOrNumbOrLett("aaa"));
		assertTrue(Mjs.isChinaOrNumbOrLett("123"));
		assertTrue(Mjs.isChinaOrNumbOrLett("aaa123"));
		assertTrue(Mjs.isChinaOrNumbOrLett("aaa"));
		assertTrue(Mjs.isChinaOrNumbOrLett("\u6C49\u5B57aaa123"));
		
		assertFalse(Mjs.isChinaOrNumbOrLett("_aaa_12.3_"));
		assertFalse(Mjs.isChinaOrNumbOrLett("_aaa_12 3_"));
	},
	"test isChina" : function() {
		assertTrue(Mjs.isChina("\u6C49\u5B57"));
		
		assertEquals(false,Mjs.isChina("123"));
		assertFalse(Mjs.isChina("aaa "));
		assertFalse(Mjs.isChina("*"));
	},
	"test isEndsWith" : function() {
		assertTrue(Mjs.isEndsWith("aaabbb","bbb"));
		assertTrue(Mjs.isEndsWith("aaa\u6C49\u5B57","\u6C49\u5B57"));
		
		assertFalse(Mjs.isEndsWith("aaa\u6C49\u5B57","bbbb"));
	},
	"test isStartsWith" : function() {
		assertTrue(Mjs.isStartsWith("aaabbb","aaa"));
		assertTrue(Mjs.isStartsWith("aaa\u6C49\u5B57","aaa"));
		
		assertFalse(Mjs.isStartsWith("aaa\u6C49\u5B57","bbb"));
	},
	"test isMatch" : function() {
		assertTrue(Mjs.isMatch("aaabbb","aaa"));
		assertTrue(Mjs.isMatch("aaa\u6C49\u5B57","aaa"));
		
		assertFalse(Mjs.isMatch("aaa\u6C49\u5B57","bbb"));
	},
	"test isPhone" : function() {
		assertTrue(Mjs.isPhone("0738-12345"));
		assertTrue(Mjs.isPhone("0738-123456"));
		assertTrue(Mjs.isPhone("0738-1234567"));
		assertTrue(Mjs.isPhone("0738-12345678"));
		assertTrue(Mjs.isPhone("0738-12345679"));
		assertTrue(Mjs.isPhone("0738-1234567910"));
		assertTrue(Mjs.isPhone("073-1234567910"));
		
		assertFalse(Mjs.isPhone("07-1234567910"));
		assertFalse(Mjs.isPhone("0738-12345679100"));
	},
	"test isLength" : function(){
		assertTrue(Mjs.isLength("123rrrrrr","6","20"));
		assertTrue(Mjs.isLength("1 fds   f","6","20"));
		
		assertFalse(Mjs.isLength("123adc&8$ieeeeeeeodddddfd","6","20"));
	},
	"test isEquals" : function(){
		assertTrue(Mjs.isEquals("1023adc&8$ io","1023adc&8$ io"));
		assertFalse(Mjs.isEquals("123ad","123adc&8$io"));
	},
	"test rmSymbols" : function(){
		assertEquals("1023adc", Mjs.rmSymbols("1023adc&"));
	},
	"test isSymbols" : function(){
		assertTrue(Mjs.isSymbols("1023adc&"));
		
		assertFalse(Mjs.isSymbols("1023adc"));
	},
	"test rmHtmlTag" : function(){
		assertEquals("helloo.", Mjs.rmHtmlTag("</div></center></body></html><td width=\"10%\" height=\"64\" style=\"text-align:right;\"><td width=\"7%\">&nbsp;helloo.</td><td width=\"93%\" background=\"images/news-title-bg.gif\" class=\"left_bt2\"></td>"));
	},
	"test testArrsSort" : function(){
		var arrDemo = new Array();
		 arrDemo[0] = 10;
		 arrDemo[1] = 50;
		 arrDemo[2] = 51;
		 arrDemo[3] = 100;
//		Mjs.testArrsSort(arrDemo);
	}
});