test("getEmById",function() {
	var result = Mjs.getEmById("petName").value;
	equal(result == "Jack",true,"result: " + result);
		
	notEqual(result != "Jack",true,"result: " + result);
});

test("getEmByName",function() {
	var result = Mjs.getEmByName("sex");
	var length = result.length;
	equal(length > 0,true,"result: " + length);
});

test("getEmByTagName",function() {
	var result = Mjs.getEmByTagName("input");
	var length = result.length;
	var ids = new Array();
	for(var i = 0; i < length; i++){
		ids[i] = result[i].id;
	}
	equal(length > 0,true,"result: " + ids);
});

test("getEmVal",function() {
	var petNameVal = Mjs.getEmVal("petName","");
	equal(petNameVal == "Jack",true,"result: " + petNameVal);
	
	var sexVal = Mjs.getEmVal("sex","sex");
	var sexValLength = sexVal.length;
	equal(sexValLength > 0,true,"result: " + sexVal);
	
	var aihaoVal = Mjs.getEmVal("aihao","aihao");
	var aihaoValLength = aihaoVal.length;
	equal(aihaoValLength > 0,true,"result: " + aihaoVal);
	
	var countryVal = Mjs.getEmVal("country","country");
	var countryValLength = countryVal.length;
	equal(countryValLength > 0,true,"result: " + countryVal);
	
	var weaponVal = Mjs.getEmVal("weapon","weapon");
	var weaponValLength = weaponVal.length;
	equal(weaponValLength > 0,true,"result: " + weaponVal);
	
});

test("isNull",function() {
	equal(Mjs.isNull("    "),true,"Passed!");
	equal(Mjs.isNull(""),true,"Passed!");
		
	notEqual(Mjs.isNull("a "),true,"Passed!");
	notEqual(Mjs.isNull(" a "),true,"Passed!");
	notEqual(Mjs.isNull("a a"),true,"Passed!");
	notEqual(Mjs.isNull("a *"),true,"Passed!");
});

test("isNumber",function() {
	
	equal(Mjs.isNumber("123"),true,"Passed!");
	
	notEqual(Mjs.isNumber("-123"),true,"Passed!");
	notEqual(Mjs.isNumber("00.123"),true,"Passed!");
	notEqual(Mjs.isNumber("-00.123"),true,"Passed!");
});

test("isInteger",function() {
	equal(Mjs.isInteger("-123"),true,"Passed!");
	equal(Mjs.isInteger("123"),true,"Passed!");
	
	notEqual(Mjs.isInteger("0.123"),true,"Passed!");
	notEqual(Mjs.isInteger("-0.123"),true,"Passed!");
	notEqual(Mjs.isInteger("aaa"),true,"Passed!");
});

test("isMobile",function() {
	equal(Mjs.isMobile("13388888888"),true,"Passed!");
	
	notEqual(Mjs.isMobile("133888888888"),true,"Passed!");
	notEqual(Mjs.isMobile("1338888888"),true,"Passed!");
	notEqual(Mjs.isMobile("12388888880"),true,"Passed!");
	notEqual(Mjs.isMobile("-aaaa"),true,"Passed!");
	notEqual(Mjs.isMobile("aaaa"),true,"Passed!");
});

test("isDecimal",function() {
	equal(Mjs.isDecimal(13388.888888),true,"Passed!");
	equal(Mjs.isDecimal(-13388.888888),true,"Passed!");
	equal(Mjs.isDecimal("13388.888888"),true,"Passed!");
	equal(Mjs.isDecimal("-13388.888888"),true,"Passed!");
	equal(Mjs.isDecimal("-13388888888"),true,"Passed!");
	
	notEqual(Mjs.isDecimal("-aaaa"),true,"Passed!");
});

test("isPort",function() {
	equal(Mjs.isPort("0"),true,"Passed!");
	equal(Mjs.isPort("5896"),true,"Passed!");
	
	notEqual(Mjs.isPort("-5896"),true,"Passed!");
	notEqual(Mjs.isPort("65536"),true,"Passed!");
});

test("isEmail",function() {
	equal(Mjs.isEmail("aaa@123.com"),true,"Passed!");
	equal(Mjs.isEmail("aaa@123.cn"),true,"Passed!");
	equal(Mjs.isEmail("-aaa@123.cf"),true,"Passed!");
	equal(Mjs.isEmail("-aaa@12.3.cf"),true,"Passed!");
	
	notEqual(Mjs.isEmail("-aaa.@123.cf"),true,"Passed!");
	notEqual(Mjs.isEmail("-aaa@123 .cf"),true,"Passed!");
	notEqual(Mjs.isEmail(" -aaa@123.cf "),true,"Passed!");
});

test("isMoney",function() {
	equal(Mjs.isMoney("1.1"),true,"Passed!");
	equal(Mjs.isMoney("1.11"),true,"Passed!");
	equal(Mjs.isMoney("1.111"),true,"Passed!");
	
	notEqual(Mjs.isMoney("1.1111"),true,"Passed!");
	notEqual(Mjs.isMoney("-1.1"),true,"Passed!");
	notEqual(Mjs.isMoney("aaa"),true,"Passed!");
	notEqual(Mjs.isMoney("\u6C49\u5B57"),true,"Passed!");
});

test("isNumberOr_Letter",function() {
	equal(Mjs.isNumberOr_Letter("aaa"),true,"Passed!");
	equal(Mjs.isNumberOr_Letter("123"),true,"Passed!");
	equal(Mjs.isNumberOr_Letter("_"),true,"Passed!");
	equal(Mjs.isNumberOr_Letter("aaa_"),true,"Passed!");
	equal(Mjs.isNumberOr_Letter("123_"),true,"Passed!");
	equal(Mjs.isNumberOr_Letter("aaa123"),true,"Passed!");
	equal(Mjs.isNumberOr_Letter("_aaa_123_"),true,"Passed!");
	
	notEqual(Mjs.isNumberOr_Letter("_aaa_12.3_"),true,"Passed!");
	notEqual(Mjs.isNumberOr_Letter("_aaa_12 3_"),true,"Passed!");
	notEqual(Mjs.isNumberOr_Letter("\u6C49\u5B57"),true,"Passed!");
});

test("isNumberOrLetter",function() {
	equal(Mjs.isNumberOrLetter("aaa"),true,"Passed!");
	equal(Mjs.isNumberOrLetter("123"),true,"Passed!");
	equal(Mjs.isNumberOrLetter("aaa123"),true,"Passed!");
	
	notEqual(Mjs.isNumberOrLetter("_aaa_12.3_"),true,"Passed!");
	notEqual(Mjs.isNumberOrLetter("_aaa_12 3_"),true,"Passed!");
	notEqual(Mjs.isNumberOrLetter("&&"),true,"Passed!");
});

test("isChinaOrNumbOrLett",function() {
	equal(Mjs.isChinaOrNumbOrLett("aaa"),true,"Passed!");
	equal(Mjs.isChinaOrNumbOrLett("123"),true,"Passed!");
	equal(Mjs.isChinaOrNumbOrLett("aaa123"),true,"Passed!");
	equal(Mjs.isChinaOrNumbOrLett("aaa"),true,"Passed!");
	equal(Mjs.isChinaOrNumbOrLett("\u6C49\u5B57aaa123"),true,"Passed!");
	
	notEqual(Mjs.isChinaOrNumbOrLett("_aaa_12.3_"),true,"Passed!");
	notEqual(Mjs.isChinaOrNumbOrLett("_aaa_12 3_"),true,"Passed!");
});

test("isChina",function() {
	equal(Mjs.isChina("\u6C49\u5B57"),true,"Passed!");
	
	notEqual(Mjs.isChina("123"),true,"Passed!");
	notEqual(Mjs.isChina("aaa "),true,"Passed!");
	notEqual(Mjs.isChina("*"),true,"Passed!");
});

test("isEndsWith",function() {
	equal(Mjs.isEndsWith("aaabbb","bbb"),true,"Passed!");
	equal(Mjs.isEndsWith("aaa\u6C49\u5B57","\u6C49\u5B57"),true,"Passed!");
	
	notEqual(Mjs.isEndsWith("aaa\u6C49\u5B57","bbbb"),true,"Passed!");
});

test("isStartsWith",function() {
	equal(Mjs.isStartsWith("aaabbb","aaa"),true,"Passed!");
	equal(Mjs.isStartsWith("aaa\u6C49\u5B57","aaa"),true,"Passed!");
	
	notEqual(Mjs.isStartsWith("aaa\u6C49\u5B57","bbb"),true,"Passed!");
});

test("isMatch",function() {
	equal(Mjs.isMatch("aaabbb","aaa"),true,"Passed!");
	equal(Mjs.isMatch("aaa\u6C49\u5B57","aaa"),true,"Passed!");
	
	notEqual(Mjs.isMatch("aaa\u6C49\u5B57","bbb"),true,"Passed!");
});

test("isPhone",function() {
	equal(Mjs.isPhone("0738-12345"),true,"Passed!");
	equal(Mjs.isPhone("0738-123456"),true,"Passed!");
	equal(Mjs.isPhone("0738-1234567"),true,"Passed!");
	equal(Mjs.isPhone("0738-12345678"),true,"Passed!");
	equal(Mjs.isPhone("0738-12345679"),true,"Passed!");
	equal(Mjs.isPhone("0738-1234567910"),true,"Passed!");
	equal(Mjs.isPhone("073-1234567910"),true,"Passed!");
	
	notEqual(Mjs.isPhone("07-1234567910"),true,"Passed!");
	notEqual(Mjs.isPhone("0738-12345679100"),true,"Passed!");
});

test("isLength",function(){
	equal(Mjs.isLength("123rrrrrr","6","20"),true,"Passed!");
	equal(Mjs.isLength("1 fds   f","6","20"),true,"Passed!");
	
	notEqual(Mjs.isLength("123adc&8$ieeeeeeeodddddfd","6","20"),true,"Passed!");
});

test("isEquals",function(){
	equal(Mjs.isEquals("1023adc&8$ io","1023adc&8$ io"),true,"Passed!");
	notEqual(Mjs.isEquals("123ad","123adc&8$io"),true,"Passed!");
});

test("rmSymbols",function(){
	equal("1023adc", Mjs.rmSymbols("1023adc&"),true,"Passed!");
});

test("isSymbols",function(){
	equal(Mjs.isSymbols("1023adc&"),true,"Passed!");
	
	notEqual(Mjs.isSymbols("1023adc"),true,"Passed!");
});

test("rmHtmlTag",function(){
	var result = Mjs.rmHtmlTag("</div></center></body></html><td width=\"10%\" height=\"64\" style=\"text-align:right;\"><td width=\"7%\">&nbsp;helloo.</td><td width=\"93%\" background=\"images/news-title-bg.gif\" class=\"left_bt2\"></td>"); 
	equal(result,"helloo.",result);
});

test("testArrsSort",function(){
	var arrDemo = new Array();
	 arrDemo[0] = 10;
	 arrDemo[1] = 50;
	 arrDemo[2] = 51;
	 arrDemo[3] = 100;
//	 Mjs.testArrsSort(arrDemo,"Passed!");
	 equal(true,true,"Passed!");
});

test("strToJsonObj",function(){
	var str = "{\"id\":0,\"name\":\"fack\"}";
	var jsonObj = Mjs.strToJsonObj(str);
	var result = "id: " + jsonObj.id + " name: " + jsonObj.name;
//	alert(result);
	equal(null!=jsonObj,true,result);
});

test("strToJsonArrs",function(){
	var strs = "[{\"id\":1,\"name\":\"jack\"},{\"id\":2,\"name\":\"mack\"},{\"id\":3,\"name\":\"dack\"}]";
	var jsonObjs = Mjs.strToJsonArrs(strs);
	var result = "";
	for(var i = 0; i < jsonObjs.length; i++){
		result += i + "=[id: " + jsonObjs[i].id + " name: " + jsonObjs[i].name + "] ";
	}
	//alert(result);
	equal(null!=jsonObjs,true,result);
});

test("strToJsonArrs2",function(){
	var strs = "[{\"id\":1,\"name\":\"jack\",\"list\":[{\"pic\":10,\"add\":\"US\"},{\"pic\":8,\"add\":\"CH\"}]},{\"id\":2,\"name\":\"tack\",\"list\":[{\"pic\":11,\"add\":\"US1\"},{\"pic\":81,\"add\":\"CH1\"}]}]";
	var jsonObjs = Mjs.strToJsonArrs(strs);
	var result = "";
	for(var i = 0; i < jsonObjs.length; i++){
		result += "[{id: " + jsonObjs[i].id + ",name: " + jsonObjs[i].name + ",list[";
		var list = jsonObjs[i].list;
		for(var l = 0; l < list.length; l++){
			result += "{pic: " + list[l].pic + " add: " + list[l].add + "} ";
		}
		result += "]}]";
	}
	//alert(result);
	equal(null!=jsonObjs,true,result);
});

test("BuildParam",function(){
	var names = new Array();
	names[0] = "a";
	names[1] = "b";
	names[2] = "c";
	var values = new Array();
	values[0] = "1";
	values[1] = "2";
	values[2] = "3";
	var rParams = Mjs.BuildParam(names,values);
	equal(rParams=="a=1&b=2&c=3",true,rParams);
});