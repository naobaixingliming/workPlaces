/**
 * 加载模块
 */

// require写法
require(['jquery', 'common'], function($, common) {
	console.log('enter-bindBank.js');
	common.test();
		
//	(function($, doc) {
//		$.init();
//		$.ready(function() {
//			var cityPicker = new $.PopPicker({
//				layer: 2
//			});
//			cityPicker.setData(cityData);
//			var showTimePickerButton = doc.getElementById('showTimePicker');
//			var timeResult = doc.getElementById('timeResult');
//			showTimePickerButton.addEventListener('tap', function(event) {
//				cityPicker.show(function(items) {
//					timeResult.innerText = items[1].text;
//				});
//			}, false);
//		});
//	})(mui, document);
	
//	$('#showTimePicker i:first-child').on('click', function() {
//		if(!$('#timeResult').text()) {
//			$(this).hide();
//		}
//	});
//	if($('#timeResult').text()) {
//		$('#showTimePicker i:first-child').hide();
//	}

})