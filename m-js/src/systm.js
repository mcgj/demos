/** 屏幕高度 */
var wsHeight = window.screen.height;

/** 屏幕宽度 */
var wsWidth = window.screen.width;

/** 添加搜藏夹 */
function AddFavorite(sURL, sTitle){
	sURL = encodeURI(sURL);
	try{
		window.external.addFavorite(sURL, sTitle);
	}catch (e){
		try{
		  window.sidebar.addPanel(sTitle, sURL, "");
		}catch (e){
		  alert("\u52A0\u5165\u6536\u85CF\u5931\u8D25,\u8BF7\u4F7F\u7528Ctrl+D\u8FDB\u884C\u6DFB\u52A0");
		}
	}
}

/** 设置首页 */
function SetHome(obj,vrl){
	try{
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
	}catch(e){
		if(window.netscape){
				try{
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				}catch (e){
					alert("\u6B64\u64CD\u4F5C\u88AB\u6D4F\u89C8\u5668\u62D2\u7EDD\!\\n\u8BF7\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165about\:config\u5E76\u56DE\u8F66\\n\u7136\u540E\u5C06[signed.applets.codebase_principal_support]\u7684\u503C\u8BBE\u7F6E\u4E3A'true',\u53CC\u51FB\u5373\u53EF");
				}
				var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
				prefs.setCharPref('browser.startup.homepage',vrl);
		 }else{
			 alert("\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301,\u8BF7\u6309\u7167\u4E0B\u9762\u6B65\u9AA4\u64CD\u4F5C\uFF1A1.\u6253\u5F00\u6D4F\u89C8\u5668\u8BBE\u7F6E,2.\u70B9\u51FB\u8BBE\u7F6E\u7F51\u9875,3.\u8F93\u5165\uFF1A"+vrl+"\u70B9\u51FB\u786E\u5B9A"); 
		 }              
	}
}
/** 搜藏 */
function shoucang(sTitle,sURL){       
   try{
		window.external.addFavorite(sURL, sTitle);
	}catch (e){
		try{
			window.sidebar.addPanel(sTitle, sURL, "");
		}catch (e){
			alert("\u52A0\u5165\u6536\u85CF\u5931\u8D25,\u8BF7\u4F7F\u7528Ctrl+D\u8FDB\u884C\u6DFB\u52A0");
		}
	}
}

function useDate(){
	var date = new Date();
	alert("new Date(): " + date);
	
	//get
	alert("new Date().getDate(): " + date.getDate());
	alert("new Date().getDay(): " + date.getDay());
	alert("new Date().getFullYear(): " + date.getFullYear());
	alert("new Date().getHours(): " + date.getHours());
	alert("new Date().getMilliseconds(): " + date.getMilliseconds());
	alert("new Date().getMinutes(): " + date.getMinutes());
	alert("new Date().getMonth(): " + date.getMonth());
	alert("new Date().getSeconds(): " + date.getSeconds());
	alert("new Date().getTime(): " + date.getTime());
	alert("new Date().getTimezoneOffset(): " + date.getTimezoneOffset());
	alert("new Date().getUTCDate(): " + date.getUTCDate());
	alert("new Date().getUTCDay(): " + date.getUTCDay());
	alert("new Date().getUTCFullYear(): " + date.getUTCFullYear());
	alert("new Date().getUTCHours(): " + date.getUTCHours());
	alert("new Date().getUTCMilliseconds(): " + date.getUTCMilliseconds());
	alert("new Date().getUTCMinutes(): " + date.getUTCMinutes());
	alert("new Date().getUTCMonth(): " + date.getUTCMonth());
	alert("new Date().getUTCSeconds(): " + date.getUTCSeconds());
	alert("new Date().toDateString(): " + date.toDateString());
	alert("new Date().toLocaleDateString(): " + date.toLocaleDateString());
	alert("new Date().toLocaleString():" + date.toLocaleString());
	alert("new Date().toLocaleTimeString(): " + date.toLocaleTimeString());
	alert("new Date().toString(): " + date.toString());
	alert("new Date().toTimeString(): " + date.toTimeString());
	alert("new Date().toUTCString(): " + date.toUTCString());
	alert("new Date().valueOf(): " + date.valueOf());
	
	//set
	alert("new Date().setDate(): " + date.setDate(20180808));
	alert("new Date().setFullYear(): " + date.setFullYear(2019, 09, 09));
	alert("new Date().setHours(): " + date.setHours(18, 17, 16, 15));
	alert("new Date().setMilliseconds(): " + date.setMilliseconds(28));
	alert("new Date().setMinutes(): " + date.setMinutes(18, 28, 38));
	alert("new Date().setMonth(): " + date.setMonth(06, 25)());
	alert("new Date().setSeconds(): " + date.setSeconds(12, 18));
	alert("new Date().setTime(): " + date.setTime(1234567896));
	alert("new Date().setUTCDate(): " + date.setUTCDate(20151211));
	alert("new Date().setUTCFullYear(): " + date.setUTCFullYear(2088, 08, 13)());
	alert("new Date().setUTCHours(): " + date.setUTCHours(12, 12, 12, 12)());
	alert("new Date().setUTCMilliseconds(): " + date.setUTCMilliseconds(18)());
	alert("new Date().setUTCMinute(): " + date.setUTCMinute(8, 8, 8));
	alert("new Date().setUTCMonth(): " + date.setUTCMonth(10, 23)());
	alert("new Date().setUTCSeconds(): " + date.setUTCSeconds(35, 32));
	
	//static
	alert("Date.parse(\"2018-08-08\"): " + Date.parse("2018-08-08"));
	alert("Date.UTC(22, 21, 20, 19): " + Date.UTC(22, 21, 20, 19));
}

function useError(){
	var error = new Error("my is error.");
	alert("error.name: " + error.name);
	alert("error.message: " + error.message);
	alert("error.constructor: " + error.constructor);
	alert("error.prototype: " + error.prototype);
	alert("error.hasOwnProperty(\"is\"): " + error.hasOwnProperty("is"));
	alert("error.isPrototypeOf(error.message): " + error.isPrototypeOf(error.message));
	alert("error.toLocaleString(): " + error.toLocaleString());
	alert("error.toString(): " + error.toString());
	alert("error.valueOf(): " + error.valueOf());
	alert("error.constructor.length: " + error.constructor.length);
	alert("error.constructor.propertyIsEnumerable(error.message): " + error.constructor.propertyIsEnumerable(error.message));
	alert("error.constructor.call(error, \"my is call error.\"): " + error.constructor.call(error, "my is call error."));
	alert("error.message: " + error.message);
}

