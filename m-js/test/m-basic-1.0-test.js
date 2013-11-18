//assertEquals(true,true);
//assertTrue(true);
//assertFalse(false);

TestCase("Basic Test", {
	"test isNull" : function() {
		assertTrue(isNull("    "));
		assertTrue(isNull(""));
		
		assertFalse(isNull("a "));
		assertFalse(isNull(" a "));
		assertFalse(isNull("a a"));
		assertFalse(isNull("a *"));
	},
	"test isNumber" : function() {
		
		assertTrue(isNumber("123"));
		
		assertFalse(isNumber("-123"));
		assertFalse(isNumber("00.123"));
		assertFalse(isNumber("-00.123"));
	},
	"test isInteger" : function() {
		assertTrue(isInteger("-123"));
		assertTrue(isInteger("123"));
		
		assertFalse(isInteger("0.123"));
		assertFalse(isInteger("-0.123"));
		assertFalse(isInteger("aaa"));
	},
	"test isMobile" : function() {
		assertTrue(isMobile("13388888888"));
		
		assertFalse(isMobile("133888888888"));
		assertFalse(isMobile("1338888888"));
		assertFalse(isMobile("12388888880"));
		assertFalse(isMobile("-aaaa"));
		assertFalse(isMobile("aaaa"));
	},
	"test isDecimal" : function() {
		assertTrue(isDecimal(13388.888888));
		assertTrue(isDecimal(-13388.888888));
		assertTrue(isDecimal("13388.888888"));
		assertTrue(isDecimal("-13388.888888"));
		assertTrue(isDecimal("-13388888888"));
		
		assertFalse(isDecimal("-aaaa"));
	},
	"test isPort" : function() {
		assertTrue(isPort("0"));
		assertTrue(isPort("5896"));
		
		assertFalse(isPort("-5896"));
		assertFalse(isPort("65536"));
	},
	"test isEmail" : function() {
		assertTrue(isEmail("aaa@123.com"));
		assertTrue(isEmail("aaa@123.cn"));
		assertTrue(isEmail("-aaa@123.cf"));
		assertTrue(isEmail("-aaa@12.3.cf"));
		
		assertFalse(isEmail("-aaa.@123.cf"));
		assertFalse(isEmail("-aaa@123 .cf"));
		assertFalse(isEmail(" -aaa@123.cf "));
	},
	"test isMoney" : function() {
		assertTrue(isMoney("1.1"));
		assertTrue(isMoney("1.11"));
		assertTrue(isMoney("1.111"));
		
		assertFalse(isMoney("1.1111"));
		assertFalse(isMoney("-1.1"));
		assertFalse(isMoney("aaa"));
		assertFalse(isMoney("\u6C49\u5B57"));
	},
	"test isNumberOr_Letter" : function() {
		assertTrue(isNumberOr_Letter("aaa"));
		assertTrue(isNumberOr_Letter("123"));
		assertTrue(isNumberOr_Letter("_"));
		assertTrue(isNumberOr_Letter("aaa_"));
		assertTrue(isNumberOr_Letter("123_"));
		assertTrue(isNumberOr_Letter("aaa123"));
		assertTrue(isNumberOr_Letter("_aaa_123_"));
		
		assertFalse(isNumberOr_Letter("_aaa_12.3_"));
		assertFalse(isNumberOr_Letter("_aaa_12 3_"));
		assertFalse(isNumberOr_Letter("\u6C49\u5B57"));
	},
	"test isNumberOrLetter" : function() {
		assertTrue(isNumberOrLetter("aaa"));
		assertTrue(isNumberOrLetter("123"));
		assertTrue(isNumberOrLetter("aaa123"));
		
		assertFalse(isNumberOrLetter("_aaa_12.3_"));
		assertFalse(isNumberOrLetter("_aaa_12 3_"));
		assertFalse(isNumberOrLetter("&&"));
	},
	"test isChinaOrNumbOrLett" : function() {
		assertTrue(isChinaOrNumbOrLett("aaa"));
		assertTrue(isChinaOrNumbOrLett("123"));
		assertTrue(isChinaOrNumbOrLett("aaa123"));
		assertTrue(isChinaOrNumbOrLett("aaa"));
		assertTrue(isChinaOrNumbOrLett("\u6C49\u5B57aaa123"));
		
		assertFalse(isChinaOrNumbOrLett("_aaa_12.3_"));
		assertFalse(isChinaOrNumbOrLett("_aaa_12 3_"));
	},
	"test isChina" : function() {
		assertTrue(isChina("\u6C49\u5B57"));
		
		assertEquals(false,isChina("123"));
		assertFalse(isChina("aaa "));
		assertFalse(isChina("*"));
	},
	"test isLastMatch" : function() {
		assertTrue(isLastMatch("aaabbb","bbb"));
		assertTrue(isLastMatch("aaa\u6C49\u5B57","\u6C49\u5B57"));
		
		assertFalse(isLastMatch("aaa\u6C49\u5B57","bbbb"));
	},
	"test isFirstMatch" : function() {
		assertTrue(isFirstMatch("aaabbb","aaa"));
		assertTrue(isFirstMatch("aaa\u6C49\u5B57","aaa"));
		
		assertFalse(isFirstMatch("aaa\u6C49\u5B57","bbb"));
	},
	"test isMatch" : function() {
		assertTrue(isMatch("aaabbb","aaa"));
		assertTrue(isMatch("aaa\u6C49\u5B57","aaa"));
		
		assertFalse(isMatch("aaa\u6C49\u5B57","bbb"));
	},
	"test isPhone" : function() {
		assertTrue(isPhone("0738-12345"));
		assertTrue(isPhone("0738-123456"));
		assertTrue(isPhone("0738-1234567"));
		assertTrue(isPhone("0738-12345678"));
		assertTrue(isPhone("0738-12345679"));
		assertTrue(isPhone("0738-1234567910"));
		assertTrue(isPhone("073-1234567910"));
		
		assertFalse(isPhone("07-1234567910"));
		assertFalse(isPhone("0738-12345679100"));
	}
});