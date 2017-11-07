(function(){
	var bind = {
		init : function(){
			this.eventsBind();
		},
		eventsBind : function(){
			var self = this;
			
			$("#login").click(function(){
				var phoneNum = $("#phoneNumInput").val();
	            var phoneNumReg = /^1[23458]\d{9}$/;
	            var regCode = $("#regCodeInput").val();
	 			var regCodeReg = /^\d{6}$/;  
	 
	            if(!phoneNum){
	            	self.alert('手机号是空的 ԅ(･ω･｡ ԅ)');
	                return;
	            }
	            if(!phoneNumReg.test(phoneNum)){
	                self.alert("(ง •̀_•́)ง手机号出错啦...");
	                return;
	            }
	            if(!regCode){
	                self.alert("验证码是空的 ԅ(･ω･｡ ԅ)");
	                return;
	            }
	            if(!regCodeReg.test(regCode)){
	                self.alert("(ง •̀_•́)ง验证码出错啦...");
	                return;
	            }
	            
	            $.ajax({
	                data:{
	                    phoneNum: phoneNum,
	                    verifyCode: regCode
	                },
	                dataType:'json',
	                url:'',
	                type:'post',
	                success: function(res){
	                    if(res.resCode=='000'){
	                        location.href="order.html";
	                    }
	                },
	                error: function(){
	                    self.alert("(ง •̀_•́)ง网络出错啦...");
	                }
           		 });
	            
			});
			
			$("#getRegCode").click(function(){
				var phoneNum = $("#phoneNumInput").val();
	            var phoneNumReg = /^1[23458]\d{9}$/;
	            
	            if(!phoneNum){
	                self.alert('手机号是空的ԅ(･ω･｡ ԅ)');
	                return;
	            }
	            if(!phoneNumReg.test(phoneNum)){
	                self.alert("(ง •̀_•́)ง手机号出错啦...");
	                return;
	            }
	            
				self.alert("验证码帮你发到尾号为"+ phoneNum.substr(-4) +"的手机上了 (｡˘•ε•˘｡) ");
				
				$("#getRegCode").attr("src","img/huoBg.png");
				$("#counter").css("z-index","1000")
				
				var count = 61;
            	var inter = setInterval(function(){
               
                $('#getRegCode').attr("disabled",true);
        
                count = count - 1;
          	
                $('#counter').text(count);
                if(count<=-1){             
                    clearInterval(inter);
          				$("#getRegCode").attr("src","img/huo.png");
          				$("#counter").css("z-index","888");
          				$("#counter").text("");
						document.getElementById("getRegCode").disabled = false;
               		}
            	},1000);
			});
			
			
			
		},
		ajax : function(){
			
		},
		alert : function(text){
			$("#alert").css("display","block");
			var str = $("#alertText").text();
			$("#alertText").text(text);			
			var newStr = $("#alertText").text();
			
//			$("#alert").fadeOut(30000);			
//			if(str != newStr){
//				alert("不一样");
//				$("#alert").css("display","none").css("display","block");
//				
//			}				
		}
	}
	
	bind.init();
})()
