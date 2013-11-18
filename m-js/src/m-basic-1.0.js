/** 自定义函数 */
function $(sId) {
	return document.getElementById(sId);
}

/** 检查输入字符串是否包含空格或全部由空格组成 */
function isNull(str) {
	if (str == "")
		return true;
	var regu = "^[ ]+$";
	var re = new RegExp(regu);
	return re.test(str);
}

/** 检查输入字符串是否符合正整数格式输入：s：字符串返回：如果通过验证返回true,否则返回false */
function isNumber(s) {
	var regu = "^[0-9]+$";
	var re = new RegExp(regu);
	if (s.search(re) != -1) {
		return true;
	} else {
		return false;
	}
}

/** 检查输入对象的值是否符合整数格式,输入：str 输入的字符串,返回：如果通过验证返回true,否则返回false */
function isInteger(str) {
	var regu = /^[-]{0,1}[0-9]{1,}$/;
	return regu.test(str);
}

/** 用途：检查输入手机号码是否正确输入：s：字符串返回：如果通过验证返回true,否则返回false */
function isMobile(s) {
	var regu = /^[1][3][0-9]{9}$/;
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

/** 用途：检查输入字符串是否是带小数的数字格式,可以是负数输入：s：字符串返回：如果通过验证返回true,否则返回false */
function isDecimal(str) {
	if (isInteger(str))
		return true;
	var re = /^[-]{0,1}(\d+)[\.]+(\d+)$/;
	if (re.test(str)) {
		if (RegExp.$1 == 0 && RegExp.$2 == 0)
			return false;
		return true;
	} else {
		return false;
	}
}

/** 用途：检查输入对象的值是否符合端口号格式输入：str 输入的字符串返回：如果通过验证返回true,否则返回false */
function isPort(str) {
	return (isNumber(str) && str < 65536);
}

/** 用途：检查输入对象的值是否符合E-Mail格式输入：str 输入的字符串返回：如果通过验证返回true,否则返回false */
function isEmail(str) {
	var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
	if (myReg.test(str))
		return true;
	return false;
}

/** 用途：检查输入字符串是否符合金额格式格式定义为带小数的正数，小数点后最多三位输入：s：字符串返回：如果通过验证返回true,否则返回false */
function isMoney(s) {
	var regu = "^[0-9]+[\.][0-9]{0,3}$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

/** 用途：检查输入字符串是否只由英文字母和数字和下划线组成输入：s：字符串返回：如果通过验证返回true,否则返回false */
function isNumberOr_Letter(s) {// 判断是否是数字或字母
	var regu = "^[0-9a-zA-Z\_]+$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

/** 用途：检查输入字符串是否只由英文字母和数字组成输入：s：字符串返回：如果通过验证返回true,否则返回false */
function isNumberOrLetter(s) {// 判断是否是数字或字母
	var regu = "^[0-9a-zA-Z]+$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

/** 用途：检查输入字符串是否只由汉字、字母、数字组成输入：value：字符串返回：如果通过验证返回true,否则返回false */
function isChinaOrNumbOrLett(s) {// 判断是否是汉字、字母、数字组成
	var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

/**检查输入字符串是否全汉字*/
function isChina(s){
	var regu = /^[\u4e00-\u9fa5]+$/i;
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	}else{
		return false;
	}
}

/** 用途：字符1是否以字符串2结束输入：str1：字符串；str2：被包含的字符串返回：如果通过验证返回true,否则返回false */
function isLastMatch(str1, str2) {
	var index = str1.lastIndexOf(str2);
	if (str1.length == index + str2.length){
		return true;
	}
	return false;
}

/** 用途：字符1是否以字符串2开始输入：str1：字符串；str2：被包含的字符串返回：如果通过验证返回true,否则返回false */
function isFirstMatch(str1, str2) {
	var index = str1.indexOf(str2);
	if (index == 0){
		return true;
	}
	return false;
}

/** 用途：字符1是包含字符串2输入：str1：字符串；str2：被包含的字符串返回：如果通过验证返回true,否则返回false */
function isMatch(str1, str2) {
	var index = str1.indexOf(str2);
	if (index == -1){
		return false;
	}
	return true;
}

/** 用途：检查输入的电话号码格式是否正确输入：strPhone：字符串返回：如果通过验证返回true,否则返回false */
function isPhone(strPhone) {
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
}

/** 不重复的随机数组 */
var randomArray = new Array();

/** 生成随机数 */
function getRandom(maxs, mins) {
	return Math.round(Math.random() * (maxs - mins)) + mins;
}

/** 生成不重复的随机数 */
function getRandomNum(maxs, mins) {
	var temp = getRandom(maxs, mins);
	if (!serch(randomArray, temp)) {
		randomArray.push(temp);
		return temp;
	}else{
		return getRandomNum(maxs, mins);	
	}
}

/**
 * 检查随机数是否在数组中已存在：存在则返回ture
 * @param randomArray
 * @param num
 * @returns {Boolean}
 */
function serch(randomArray, num) {
	for ( var i = 0; i < randomArray.length; i++) {
		if (randomArray[i] == num) {
			return true;
		}
	}
	return false;
}

/**
 * 验证数组中是否存在某个值：
 * @param str 值
 * @param arrs 数组
 * @returns {Number} 存在则返回该值下标,否则返回-1
 */
function isExistsArray(str,arrs) {
	for(var i=0;i<arrs.length;i++){
		if(arrs[i]==str){
		   return i;
		}
	}
	return -1;
}

/**
 * 根据值获取下标
 * @param value 值
 * @returns {Number} 下标
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
 * 输出数组值
 */
Array.prototype.println = function() {
	var me = this;
	var length = me.length;
	for ( var i = 0; i < length; i++) {
       alert("[" + i + "]=" + me[i]);
    }
};

/**
 * 添加值到数组
 * @param str 值
 * @returns 该值的下标
 */
Array.prototype.add = function(str) {
	var me = this;
	me.length = me.length + 1;
	var lel = me.length;
	me[lel-1] = str;
	return lel;
};

/**
 * 删除数组中指定的值
 * @param dx 删除的值
 * @returns 被删除的值的下标
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
 * 获取Cookie
 * @param sName Cookie名
 * @returns Cookie值
 */
function getCookieVal(sName) {
   var search = sName + "=";
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
}

/**
 * 设置Cookie
 * @param sName Cookie名
 * @param sValue Cookie值
 * @param sDomain 域名
 * @param isForever 是否永不过期：ture/false
 */
function setCookieVal(sName, sValue, sDomain, isForever) {
	document.cookie = sName + "=" + escape(sValue) + ";domain=" + sDomain  + (isForever?";expires="+  (new Date(2099,12,31)).toGMTString():"");
}

/**
 * 将前后空格用空字符串替代
 * @param str
 * @returns str
 */
function replaceFLTrim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 去除字符串两边空格trim
 * @param str
 * @returns str
 */
function clearFLTrim(str){
	return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');
}

/**
 * 取下拉框当前选中项的Text值
 * @param selectId 下拉框ID
 * @returns 选中项的Text值
 */
function getSelectText(selectId){
	var obj = document.getElementById(sid);
	var selectIndex = obj.selectedIndex;
	var selectHtml = obj[selectIndex].innerText;
	return selectHtml;
}

/**
 * 取下拉框当前选中项的HTML值
 * @param selectId 下拉框ID
 * @returns 选中项的HTML值
 */
function getSelectHtml(selectId){
	var obj = document.getElementById(sid);
	var selectIndex = obj.selectedIndex;
	var selectHtml = obj[selectIndex].innerHTML;
	return selectHtml;
}

/**
 * 取下拉框当前选中项的Value值
 * @param selectId 下拉框ID
 * @returns 选中项的Value值
 */
function getSelectVal(selectId){
	var obj = document.getElementById(sid);
	var selectIndex = obj.selectedIndex;
	var selectValue = obj[selectIndex].value;
	return selectValue;
}

/**
 * 从表中移除一行
 * @param tableId 表ID
 * @param trId 行ID
 */
function moveTr(tableId, trId) {
	var oTable = document.getElementById(tableId);
	var oTr = document.getElementById(trId);
	if (null != oTr) {
		oTable.deleteRow(oTr.rowIndex);
	}
}

/**
 * 从表中添加一行
 * @param tableId 表ID
 * @param trId 行ID
 * @param column 列数(td)
 * @param columnHtmls 数组:列的HTML文本(表示每个td要显示的文本)
 * @param insertIndex 插入的位置(表示在该表的哪一行插入新一行)
 */
function addTr(tableId,trId,column,columnHtmls,insertIndex){
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
}