 
$(function() {

	var sendcount = 0;
	var completecount = 0;
	// 添加ajax全局事件处理。
	$(document).ajaxStart(function(a, b, c) {
		 
	}).ajaxSend(function(e, xhr, opts) {
		
	}).ajaxError(function(e, xhr, opts) {
		getLogin(xhr); 
		
	}).ajaxSuccess(function(e, xhr, opts) {
		
	}).ajaxComplete(function(e, xhr, opts) {
		
	}).ajaxStop(function() {
	
	});
function getLogin(xhr) {
	var resp= xhr.responseText;
	var t= resp.indexOf("DOCTYPE html");
	if(t>-1) {
		window.parent.location="logout.shtml";
	}
}
});