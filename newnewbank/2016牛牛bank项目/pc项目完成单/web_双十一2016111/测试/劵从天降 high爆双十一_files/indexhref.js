/**
 * 
 */

function getUrlParam() {
	var reg = new RegExp("(^|&)source=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

function getRequestForSource(url){
	var source = getUrlParam();
	if(source){
		if(url.indexOf("?") != -1){
			return url + "&source=" + source;
		}else{
			return url + "?source=" + source;
		}
	}
	return url;
}

function setRequestSoucre() {
	var source = getUrlParam("source");
	if(source){
		$("a").each(function() {
			try{
				var aVal = $(this).attr("href");
				if(aVal){
					var chk = '';
					if(aVal.indexOf("?") != -1){
						chk = aVal.substring(aVal.indexOf("?") + 1, aVal.length)
					}
					var reg = new RegExp("(^|&)source=([^&]*)(&|$)", "i");
					var r = chk.match(reg);
					if(r == null){
						resolve(aVal, $(this), source);		
					}
				}
			}catch(e){}
		});
		$("form").each(function() {
			try{
				var fromVal = $(this).attr("action");
				var fromAttr = $.trim($(this).attr("enctype"));
				if (fromAttr == '' && fromVal) {
					var chk = '';
					if(fromVal.indexOf("?") != -1){
						chk = fromVal.substring(fromVal.indexOf("?") + 1, fromVal.length)
					}
					var reg = new RegExp("(^|&)source=([^&]*)(&|$)", "i");
					var r = chk.match(reg);
					if(r == null){
						resolveUrlForm(fromVal, $(this), source);
					}
				} 
			}catch(e){}
		}); 
	}
}

function resolve(str, el, source) {
	try{
		if (getHttp(str)) {
			var paraString = str.substring(str.indexOf("?") + 1, str.length).split("&");
			if (paraString.length >= 2) {
				$(el).attr("href", str + "&source=" + source);
			} else {
				if (getHttp(paraString[0])) {
					$(el).attr("href", str + "?source=" + source);
				} else {
					$(el).attr("href", str + "&source=" + source);
				}
			}
		}
	}catch(e){}
}
function resolveUrlForm(str, el, source) {
	try{
		if(str){
			var paraString = str.substring(str.indexOf("?") + 1, str.length).split("&");
			if (paraString.length >= 2) {
				$(el).attr("action", str + "&source=" + source);
			} else {
				if (getHttp(paraString[0])) {
					$(el).attr("action", str + "?source=" + source);
				} else {
					$(el).attr("action", str + "&source=" + source);
				}
			}
		}
	}catch(e){}
}

function getHttp(str) {
	try{
		if(str){
			var httpStr = str.indexOf("http://");
			var httpsStr = str.indexOf("https://");
			var fromShtml = str.indexOf(".shtml");
			var fromhtml = str.indexOf(".html");
			if (httpStr != -1 || httpsStr != -1) {
				return true;
			} else if (fromShtml != -1 || fromhtml != -1) {
				return true;
			}
			return false;
		}
	}catch(e){
		return false;
	}
}

$(function(){
	setRequestSoucre();
});

if(window.location.host == 'www.newnewbank.com' ||
		window.location.host == 'newnewbank.com'){
	if(location.href.indexOf("http:")!=-1){
		window.location.href=getRequestForSource("https://www.newnewbank.com");
	}	
}