(function($){
	$.fn.extend({
		myAlert:function(options){  
			var defaults={
				title:'',  //标题
				text:'',   //内容，可添加标签
				btnText:'确定',  //按钮文字
				okCallBack:''   //按钮回调函数
			};
			var opts = $.extend(defaults, options);
			var str = '<div class="weui_dialog_alert" id="dialog2"">\
				        <div class="weui_mask"></div>\
				        <div class="weui_dialog">\
				            <div class="weui_dialog_hd"><strong class="weui_dialog_title">'+opts.title+'</strong></div>\
				            <div class="weui_dialog_bd">'+opts.text+'</div>\
				            <div class="weui_dialog_ft">\
				                <a href="javascript:;" id="alertOk" class="weui_btn_dialog primary">'+opts.btnText+'</a>\
				            </div>\
				        </div>\
				    </div>';
			$("body").append(str);
			$("#alertOk").on("click",function(){
				$("#dialog2").remove();
				if(opts.okCallBack && typeof(opts.okCallBack)=='function'){
					opts.okCallBack();
				}
			});
		},
		myConfirm:function(options){
			var defaults={
				title:'',  //标题
				text:'',   //内容
				okText:'确定',  //确定按钮文字
				cancelText:'取消',  //取消按钮文字
				cancelCallback:'',  //取消按钮回调函数
				okCallBack:''   //确定按钮回调函数
			};
			var opts = $.extend(defaults, options);
			var str = '<div class="weui_dialog_confirm" id="dialog1">\
				        <div class="weui_mask"></div>\
				        <div class="weui_dialog">\
				            <div class="weui_dialog_hd"><strong class="weui_dialog_title">'+opts.title+'</strong></div>\
				            <div class="weui_dialog_bd">'+opts.text+'</div>\
				            <div class="weui_dialog_ft">\
				                <a href="javascript:;" id="confirmOk" class="weui_btn_dialog primary">'+opts.okText+'</a>\
				                <a href="javascript:;" id="confirmCancel" class="weui_btn_dialog default">'+opts.cancelText+'</a>\
				            </div>\
				        </div>\
				    </div>';
			$("body").append(str);
			$("#confirmOk").on("click",function(){
				$("#dialog1").remove();
				if(opts.okCallBack && typeof(opts.okCallBack)=='function'){
					opts.okCallBack();
				}
			});
			$("#confirmCancel").on("click",function(){
				$("#dialog1").remove();
				if(opts.cancelCallback && typeof(opts.cancelCallback)=='function'){
					opts.cancelCallback();
				}
			});	
		},
		buyDialog:function(options){  //购买输入交易密码弹框
			var defaults={
				title:'请输入交易密码',  //标题
				text:'',   //内容，可添加标签
				tips:'交易密码错误',  //错误提示
				btnText:'确定',  //按钮文字
				okCallBack:''   //按钮回调函数
			};
			var opts = $.extend(defaults, options);
			var str = '<div class="weui_dialog_alert buy_dialog" id="dialog3">\
					      <div class="weui_mask"></div>\
					      <div class="weui_dialog">\
					          <div class="weui_dialog_hd buy_dialog_title"><strong class="weui_dialog_title">'+opts.title+'</strong><a class="buy_dialog_close" href="javascript:;"><span></span></a></div>\
					          <div class="weui_dialog_bd">\
					            <div class="tradeMoney">￥<strong>'+opts.text+'</strong></div>\
					            <div class="tradePassword">\
					              <input type="password" placeholder="密码" />\
					              <p class="tradeError">*'+opts.tips+'</p>\
					            </div>\
					          </div>\
					          <div class="buy_dialog_ft">\
					              <a href="javascript:;" id="buyOk" class="weui_btn_dialog">'+opts.btnText+'</a>\
					          </div>\
					      </div>\
					  </div>';
			$("body").append(str);
			$("#buyOk").on("click",function(){
				if(opts.okCallBack && typeof(opts.okCallBack)=='function'){
					opts.okCallBack();
					// $("#dialog3").remove();
				}
			});
			$(".buy_dialog_close").on("click",function(){
				$("#dialog3").remove();
			});
			var tipsObj = {
				showTips:function(tips){  //显示提示内容，tips为错误提示的内容
					$(".tradeError").text(tips).show();
				},
				closeTips:function(){  //隐藏提示内容
					$(".tradeError").text('').hide();
				}
			};
			return tipsObj;
		}
	})
})(jQuery);