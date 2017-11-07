/**
 * Created by liming on 2017/8/23 .
 * 公共方法
 */
	
define(function(require, exports, module){
	var $ = require("jquery");
	
	var common = {
		test:function(){
			console.log(111);
		},
		init: function() {
			this.initPoint();
			this.eventBind();
		},
		initPoint: function() {
			if('addEventListener' in document) {
				document.addEventListener('DOMContentLoaded', function() {
					FastClick.attach(document.body);
				}, false);
			}
		},
		eventBind: function() {
//			$('select').on('change',function(){				
//				$('select').css('color','#333');				
//			});
//			$('.check-item').on('click', function() {
//				$(this).toggleClass('fa-check-square-o');
//			});
//			$('.subNav').on('click', function() {
//				$(this).parents('.item-p').siblings('.navContent').toggleClass('_block');
//				if($(this).hasClass('fa-minus')) {
//					$(this).removeClass('fa-minus').addClass('fa-plus');
//					$(this).find('.shrink').text('展开')
//				}else{
//					$(this).addClass('fa-minus').removeClass('fa-plus');
//					$(this).find('.shrink').text('收起')
//				}
//				$(this).parents('.project-one').siblings('.project-one').find('.navContent').removeClass('_block');
//				$(this).parents('.project-one').siblings('.project-one').find('.subNav').removeClass('fa-minus').addClass('fa-plus');
//				$(this).parents('.project-one').siblings('.project-one').find('.shrink').text('展开')	;							
//			})
			
		}
	}
	common.init();
	
	return common;	
});
	
	
