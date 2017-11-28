$.extend({
	myMaskShow:function(){  //显示遮罩层
		var maskStr = '<div class="shadow" style="display:block;"></div>';
		$("body").append(maskStr);
	},
	myMaskHide:function(){  //隐藏遮罩层
		$(".shadow").remove();
	},
	clearInput:function(elements){  //清空文本框
		$(elements).focus();
		$(elements).val('');
	},
	showInputText:function(eyesBtn,elements){  //显示隐藏文本框内容
		if($(eyesBtn).hasClass("eyes_icon_show")){
			$(elements).attr("type","password");
			$(eyesBtn).removeClass("eyes_icon_show");
		}else{
			$(elements).attr("type","text");
			$(eyesBtn).addClass("eyes_icon_show");
		}
	},
	showIconClear:function(elements){  //显示清空文本框按钮
		if($(elements).val()!==''){
            $(elements).parents(".weui_cell").find(".weui_icon_clear").show();
        }else{
            $(elements).parents(".weui_cell").find(".weui_icon_clear").hide();
        }
	}, 
	hideIconClear:function(elements){  //隐藏清空文本框按钮
		$(elements).parents(".weui_cell").find(".weui_icon_clear").hide();
	},
	onlyNumber:function(elements){  //限制只允许输入数字
		$(elements).on("keyup",function () {
			//如果输入非数字，则替换为''
			this.value=this.value.replace(/\D/g,'');
		}).on("paste",function(){
			this.value=this.value.replace(/\D/g,'');
		});
	},
	verifyPhone:function(elements){  //验证手机号
		var reg=/1[3|4|5|7|8|][0-9]{9}/;
		var phone=$(elements).val().trim();
		if(!reg.test(phone)){
			$("body").myAlert({text:"手机格式错误"});
			return;
		}
	},
	plusXing:function(str,frontLen,endLen) {  //隐藏数字，str：字符串，frontLen：前面保留位数，endLen：后面保留位数 
	    var len = str.length-frontLen-endLen;
	    var xing = '';
	    for (var i=0;i<len;i++) {
	        xing+='*';
	    }
	    return str.substr(0,frontLen)+xing+str.substr(str.length-endLen);
	}
});