/**
 * 自定义基础库
 * 功能: 常用操作
 * author: vic
 * update: 2013
 * email: hn_mcgj@163.com
 */

function Mjs(){};
Mjs.prototype = new Object();

/////////////////////////////获取元素/////////////////////////////////////

/**
 * 用元素ID获取元素
 * @param {String} eId
 * @returns {Element}
 */
Mjs.getEmById = function(eId){return document.getElementById(eId);};

/**
 * 用元素名称获取一个或一组元素
 * @param {String} eName
 * @returns {NodeList}
 */
Mjs.getEmByName = function(eName){
	return document.getElementsByName(eName);
};

/**
 * 用元素标签名获取一个或一组元素对象
 * @param {String} tagName
 * @returns {NodeList}
 */
Mjs.getEmByTagName = function(tagName){
	return document.getElementsByTagName(tagName);
};

/**
 * 用元素标签名获取指定命名路径一个或一组元素对象
 * function getElementsByTagNameNS(namespaceURI, localName)
 * http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @param {String} namespaceURI
 * @param {String} localName
 * @returns {NodeList}      
 */
Mjs.getEmByTagNameNS = function(namespaceURI, localName){
	return document.getElementsByTagNameNS(namespaceURI, localName);
};

/////////////////////////////获取元素结束/////////////////////////////////////

/////////////////////////////常量/////////////////////////////////////

/**文本框类型*/
Mjs.TYPE_TEXT = "text";

/**单选类型*/
Mjs.TYPE_RADIO = "radio";

/**多项类型*/
Mjs.TYPE_CHECKBOX = "checkbox";

/**单选下拉框类型*/
Mjs.TYPE_SELECT_ONE = "select-one";

/**多选下拉框类型*/
Mjs.TYPE_SELECT_MULTIPLE = "select-multiple";

/**符号*/
Mjs.SYMBOLS = "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]";

/////////////////////////////常量结束/////////////////////////////////////

/////////////////////////////获取元素值/////////////////////////////////////

/**
 * 用元素ID或元素Name获取元素的value,如无需eName可取值的，eName可传""或null
 * 包含元素类型：text,hidden,password,file,textarea,checkbox,radio,select-one,select-multiple
 * @param {String} eId
 * @param {String} eName
 * @returns {String}
 */
Mjs.getEmVal = function(eId,eName){
	var eml = Mjs.getEmById(eId);
	var emlType = eml.type;
	switch(emlType){
        case "text":
        case "hidden":
        case "password":
        case "file":
        case "textarea": return eml.value;
        case "checkbox":
        case "radio": return Mjs.getRadioCheckboxVal(eName);
        case "select-one":
        case "select-multiple": return Mjs.getSelVal(eml);
    }
};

/**
 * 获取单选或多项下拉框value
 * @param {Element} eml
 * @returns {Array}
 */
Mjs.getSelVal = function(eml){
	var length = eml.options.length;
	var results = new Array();
	var index = 0;
	for(var i = 0; i < length; i++){
		if(eml.options[i].selected && eml.options[i].value != ""){
			results[index] = eml.options[i].value;
			index++;
		}
	}
	return results;
};

/**
 * 获取单选按钮或多选项value
 * @param {String} eName
 * @returns {Array}
 */
Mjs.getRadioCheckboxVal = function(eName){
	var emls = Mjs.getEmByName(eName);
	var length = emls.length;
	var results = new Array();
	var index = 0;
	for(var i = 0; i < length; i++){
		if(emls[i].type == Mjs.TYPE_RADIO || emls[i].type == Mjs.TYPE_CHECKBOX){
			if(emls[i].checked){
				results[index] = emls[i].value;
				index++;
			}
		}
	}
	return results;
};

/**
 * 获取文本框的value,非文本框类型返回null
 * @param {String} eId
 * @returns value/null
 */
Mjs.getTextVal = function(eId){
	var obj = Mjs.getEmById(eId);
	return Mjs.isObjType(obj, Mjs.TYPE_TEXT) ? obj.value : null;
};

/**
 * 获取单选下拉框当前选中项的value,非单选下拉框类型返回null
 * @param {String} eId
 * @returns value/null
 */
Mjs.getSelOneVal = function(eId){
	var obj = Mjs.getEmById(eId);
	return Mjs.isObjType(obj, Mjs.TYPE_SELECT_ONE) ? obj[obj.selectedIndex].value : null;
};

/**
 * 获取单选下拉框当前选中项的HTML,非单选下拉框类型返回null
 * @param {String} eId
 * @returns html/null
 */
Mjs.getSelOneHtml = function(eId){
	var obj = Mjs.getEmById(eId);
	return Mjs.isObjType(obj, Mjs.TYPE_SELECT_ONE) ? obj[obj.selectedIndex].innerHTML : null;
};

/**
 * 获取单选下拉框当前选中项的Text,非单选下拉框类型返回null
 * @param {String} eId
 * @returns text/null
 */
Mjs.getSelOneText = function(eId){
	var obj = Mjs.getEmById(eId);
	return Mjs.isObjType(obj, Mjs.TYPE_SELECT_ONE) ? obj[obj.selectedIndex].innerText : null;
};

/////////////////////////////获取元素值结束/////////////////////////////////////


/////////////////////////////验证元素值///////////////////////////////////////

/**
 * 验证元素类型
 * @param {String} eId
 * @param {String} emType
 * @returns {Boolean}
 */
Mjs.isEmType = function(eId,emType){
	var obj = Mjs.getEmById(eId);
	return obj.type == emType ? true : false;
};

/**
 * 验证元素类型
 * @param {Element} obj
 * @param {String} emType
 * @returns {Boolean}
 */
Mjs.isObjType = function(obj,emType){
	return obj.type == emType ? true : false;
};

/**
 * 验证字符串是否包含空格或全部由空格组成
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isNull = function(str){
	if (str == ""){return true;}
	var regu = "^[ ]+$";
	return new RegExp(regu).test(str);
};

/**
 * 验证字符串是否符合正整数格式输入
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isNumber = function(str){
	var regu = "^[0-9]+$";
	var re = new RegExp(regu);
	if (str.search(re) != -1) {
		return true;
	} else {
		return false;
	}
};

/**
 * 验证字符串是否符合整数格式
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isInteger = function(str){
	var regu = /^[-]{0,1}[0-9]{1,}$/;
	return regu.test(str);
};

/**
 * 验证手机号码是否正确输入
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isMobile = function(str){
	var regu = /^[1][3][0-9]{9}$/;
	return new RegExp(regu).test(str);
};

/**
 * 验证字符串是否是带小数的数字格式,可以是负数
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isDecimal = function(str){
	if (Mjs.isInteger(str)){return true;}
	var re = /^[-]{0,1}(\d+)[\.]+(\d+)$/;
	if (re.test(str)) {
		if (RegExp.$1 == 0 && RegExp.$2 == 0){
			return false;
		}
		return true;
	} else {
		return false;
	}
};

/**
 * 验证字符串是否符合端口号格式输入
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isPort = function(str){
	return (Mjs.isNumber(str) && str < 65536);
};

/**
 * 验证字符串是否符合E-Mail格式
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isEmail = function(str){
	var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
	return myReg.test(str);
};

/**
 * 验证字符串是否符合金额格式格式定义为带小数的正数，小数点后最多三位
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isMoney = function(str){
	var regu = "^[0-9]+[\.][0-9]{0,3}$";
	return new RegExp(regu).test(str);
};

/**
 * 验证字符串是否只由英文字母和数字和下划线组成
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isNumberOr_Letter = function(str){
	var regu = "^[0-9a-zA-Z\_]+$";
	return new RegExp(regu).test(str);
};

/**
 * 验证字符串是否只由英文字母和数字组成
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isNumberOrLetter = function(str){
	var regu = "^[0-9a-zA-Z]+$";
	return new RegExp(regu).test(str);
};

/**
 * 验证字符串是否只由汉字、字母、数字组成
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isChinaOrNumbOrLett = function(str){
	var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
	return new RegExp(regu).test(str);
};

/**
 * 验证字符串是否全汉字(注：输入字符串需要中文编码)
 * @param {String} str
 * @returns {Boolean}
 */
Mjs.isChina = function(str){
	var regu = /^[\u4e00-\u9fa5]+$/i;
	return new RegExp(regu).test(str);
};

/**
 * 验证字符串是否以指定后缀结束
 * @param {String} str
 * @param {String} suffix
 * @returns {Boolean}
 */
Mjs.isEndsWith = function(str,suffix){
	var index = str.lastIndexOf(suffix);
	if (str.length == index + suffix.length){
		return true;
	}
	return false;
};

/**
 * 验证字符串是否以指定前缀开始
 * @param {String} str
 * @param {String} prefix
 * @returns {Boolean}
 */
Mjs.isStartsWith = function(str,prefix){
	var index = str.indexOf(prefix);
	if (index == 0){
		return true;
	}
	return false;
};

/**
 * 验证字符1是包含字符串2
 * @param {String} str1
 * @param {String} str2
 * @returns {Boolean}
 */
Mjs.isMatch = function(str1, str2){
	var index = str1.indexOf(str2);
	if (index == -1){
		return false;
	}
	return true;
};

/**
 * 验证电话号码格式是否正确
 * @param {String} strPhone
 * @returns {Boolean}
 */
Mjs.isPhone = function(strPhone){
	var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
	var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
	if (strPhone.length > 9) {
		if (phoneRegWithArea.test(strPhone)) {
			return true;
		} else {
			return false;
		}
	} else {
		if (phoneRegNoArea.test(strPhone)) {
			return true;
		} else {
			return false;
		}
	}
};

/**
 * 验证数组中是否存在某个值
 * @param {String} str
 * @param {Array} arrs
 * @returns {Number} 存在则返回该值下标,否则返回-1
 */
Mjs.isExistsArray = function(str,arrs){
	for(var i=0;i<arrs.length;i++){
		if(arrs[i]==str){
		   return i;
		}
	}
	return -1;
};

/**
 * 验证字符串是否包含符号
 * @param str
 * @returns {Boolean}
 */
Mjs.isSymbols = function(str){
	return new RegExp(Mjs.SYMBOLS).test(str);
};

/**
 * 比较两个字符串是否一致
 * @param src
 * @param target
 * @returns {Boolean}
 */
Mjs.isEquals = function(src,target){
	if(src != target){
		return false;
	}else{
		return true;
	}
};

/**
 * 验证输入字符串长度
 * @param {String} str
 * @param {Number} min
 * @param {Number} max
 * @returns {Boolean}
 */
Mjs.isLength = function(str,min,max){
	if(!Mjs.isNumber(min) || !Mjs.isNumber(max)){
		return false;
	}
	var tMin = parseInt(min),tMax = parseInt(max);
	if(str.length < tMin || str.length > tMax){
		return false;
	}else{
		return true;
	}
};

/////////////////////////////验证元素值结束///////////////////////////////////////

//////////////////////////////////字符处理/////////////////////////////////////////////

/**
 * 将前后空格用空字符串替代
 * @param str
 * @returns {String} 前后空格用空字符串替代的字符串
 */
Mjs.replaceFLTrim = function(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * 去除字符串两边空格
 * @param str
 * @returns {String} 去除字符串两边空格的字符串
 */
Mjs.replaceFLTrim = function(str){
	return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');
};

/**
 * 删除字符串中所有符号
 * @param str
 * @returns {String}
 */
Mjs.rmSymbols = function(str){
	var rege = new RegExp(Mjs.SYMBOLS);
	var newStr = "";
	for (var i = 0; i < str.length; i++) {
		newStr = newStr + str.substr(i, 1).replace(rege, '');
	}
	return newStr;
};

/**
 * 删除字符串中的HTML标签
 * @param str
 * @returns {String}
 */
Mjs.rmHtmlTag = function(str){
	str = str.replace(/<\/?[^>]*>/g,'');
    str = str.replace(/[ | ]*\n/g,'\n');
    str = str.replace(/\n[\s| | ]*\r/g,'\n');
    str = str.replace(/&nbsp;/ig,'');
    return str;
};

//////////////////////////////////字符处理结束/////////////////////////////////////////////


/**
 * 生成随机数
 * @param maxs
 * @param mins
 * @returns {Number}
 */
Mjs.generatesRN = function(maxs, mins){
	return Math.round(Math.random() * (maxs - mins)) + mins;
};

/**
 * 设置Cookie
 * @param {String} cName
 * @param {String} cValue
 * @param {String} cDomain 域名
 * @param {Boolean} isForever 是否永不过期
 */
Mjs.setCookie = function(cName, cValue, cDomain, isForever){
	document.cookie = cName + "=" + escape(cValue) + ";domain=" + cDomain  + (isForever?";expires="+  (new Date(2099,12,31)).toGMTString():"");
};

/**
 * 获取Cookie
 * @param {String} cName
 * @returns cValue/""
 */
Mjs.getCookie = function(cName){
	 var search = cName + "=";
	   if(document.cookie.length > 0) {
		  offset = document.cookie.indexOf(search);
		  if(offset != -1) {
			 offset += search.length;
			 end = document.cookie.indexOf(";", offset);
			 if(end == -1) end = document.cookie.length;
			 return unescape(document.cookie.substring(offset, end));
		  }
		  else return "";
	   }
};

/**
 * 从表中删除一行
 * @param tableId 表ID
 * @param trId 行ID
 */
Mjs.rmTr = function(tableId, trId){
	var oTable = document.getElementById(tableId);
	var oTr = document.getElementById(trId);
	if (null != oTr) {
		oTable.deleteRow(oTr.rowIndex);
	}
};

/**
 * 从表中添加一行
 * @param tableId 表ID
 * @param trId 行ID
 * @param column 列数(td)
 * @param columnHtmls 数组:列的HTML文本(表示每个td要显示的文本)
 * @param insertIndex 插入的位置(表示在该表的哪一行插入新一行)
 */
Mjs.addTr = function(tableId, trId){
	var oTable = document.getElementById(tableId);
	if(null != oTable){
		var oTr = document.getElementById(trId);
		if(null == oTr){
			var newTr = oTable.insertRow(insertIndex);
			newTr.id = trId;
			for(var i = 0; i < column; i++){
				var newTd = newTr.insertCell();
				newTd.innerHTML = columnHtmls[i];
			}
		}
	}
};

/**
 * 使用值获取该值在数组中的索引
 * @param {Object} value
 * @returns {Number}
 */
Array.prototype.getIndexByValue = function(value) {
    var index = -1;
    for ( var i = 0; i < this.length; i++) {
        if (this[i] == value) {
            index = i;
            break;
        }
    }
    return index;
};

/**
 * 输出数组所有元素值
 */
Array.prototype.println = function() {
	var me = this;
	var length = me.length;
	for ( var i = 0; i < length; i++) {
       alert("[" + i + "]=" + me[i]);
    }
};

/**
 * 添加元素值到数组,返回该元素的索引
 * @param {Object} str
 * @returns {Number}
 */
Array.prototype.add = function(str) {
	var me = this;
	me.length = me.length + 1;
	var lel = me.length;
	me[lel-1] = str;
	return lel;
};

/**
 * 根据元素值删除数组中指定的元素
 * @param dx 删除元素
 * @returns 被删除元素的索引
 */
Array.prototype.remove = function(dx) {
    var me = this, removed = null;
    if (dx > me.length - 1) {
        return false;
    }
    if (isNaN(dx)) {
        removed = me.remove(me.getIndexByValue(dx));
    }
    for ( var i = 0, n = 0; i < me.length; i++) {
        if (me[i] != me[dx]) {
            me[n++] = me[i];
        } else {
            removed = me[i];
        }
    }
    if (removed){
        me.length = me.length - 1;
	}
    return removed;
};

/**
 * Json格式字符串转Json对象
 * @param {String} str
 * @returns {Object}
 */
Mjs.strToJsonObj = function(str){
	var jsonObj = null != str ? eval("("+ str +")") : null;
	return null != jsonObj ? jsonObj : null;
};

/**
 * Json格式字符串转Json数组(支持多层JSON嵌套)
 * @param {String} strs
 * @returns {Arrays}
 */
Mjs.strToJsonArrs = function(strs){
	return null != strs ? eval(strs) : null;
};

/**
 * 数组升序：示例：arrs.sortAsc(arrs);
 * @param arrs
 */
Array.prototype.sortAsc = function(arrs){
	arrs.sort(function(s,t){return s > t ? 1 : -1;});
};

/**
 * 数组降序：示例：arrs.sortDesc(arrs);
 * @param arrs
 */
Array.prototype.sortDesc = function(arrs){
	arrs.sort(function(s,t){return s < t ? 1 : -1;});
};

/**
 * 测试数组排序
 * @param arrs
 */
//Mjs.testArrsSort = function(arrs){
//	arrs.sortAsc(arrs);
//	alert("Asc: " + arrs);
//	arrs.sortDesc(arrs);
//	alert("Desc: " + arrs);
//};

var date = new Date();
/**
 * 年
 * @returns {Number}
 */
Mjs.getYear = function(){
	return date.getFullYear();
};

/**
 * 月
 * @returns {Number}
 */
Mjs.getMonth = function(){
	return date.getMonth() + 1;
};

/**
 * 日
 * @returns {Number}
 */
Mjs.getDay = function(){
	return date.getDay();
};

/**
 * 时
 * @returns {Number}
 */
Mjs.getHours = function(){
	return date.getHours();
};

/**
 * 分
 * @returns {Number}
 */
Mjs.getMinutes = function(){
	return date.getMinutes();
};

/**
 * 秒
 * @returns {Number}
 */
Mjs.getSeconds = function(){
	return date.getSeconds();
};

/**
 * 毫秒
 * @returns {Number}
 */
Mjs.getMilliseconds = function(){
	return date.getMilliseconds();
};

/**
 * 本地化日期
 * @fromat yyyy年MM月dd日
 * @returns {String} 
 */
Mjs.getLocaleDateString = function(){
	return date.toLocaleDateString();
};

/**
 * 本地化日期
 * @fromat yyyy年MM月dd日 下午00:00:00
 * @returns {String} 
 */
Mjs.getLocaleString = function(){
	return date.toLocaleString();
};

/**
 * 日期毫秒
 * @returns {Number}
 */
Mjs.getTime = function(){
	return date.getTime();
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
Mjs.BuildParam = function(names,values){
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