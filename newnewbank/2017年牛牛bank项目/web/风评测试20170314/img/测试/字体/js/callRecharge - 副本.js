(function(){
	var callRecharge = {
		init: function(){
			this.eventsBind();
//			this.initRender();
			this.initVm();
			this.flag = "true";
		},
		initVm: function(){
			var self = this;
			self.app = new Vue({
				el: '#vueVm',		
				data: {
					isShow: false,
					isTrue: false,
					dataList: []
				}
			});
			self.getInitData();
		},
		eventsBind: function(){
			var self = this;
			
			$("#typeIn").keydown(function a (e) {
				var obj = e;
                if(obj.keyCode != 8){//判断是否为Backspace键，若不是执行函数；
	                   var b = document.getElementById("typeIn").value;      //定义变量input  value值；
	                   var maxValue = 13;                                    //限制输入框的最大值；
	                   b = b.replace(/[^\d\s]/g,"");       //正则表达式：如果输入框中输入的不是数字或者空格，将不会显示；
	                   document.getElementById("typeIn").value = b;          //把新得到得value值赋值给输入框；
                                                         
                       if(b.length == 3 || b.length == 8){                   //判断是否是该加空格的时候，若不会，还是原来的值；
                           b = b + " "; 
                           document.getElementById("typeIn").value = b; 
                       }                      
                };               
//          	退格键
                if(obj.keyCode == 8){
           		
					var str = $("#typeIn").val();
					if(str.length == 11 || str.length == 10){			
						var newStr = str.substring(0,9);
						document.getElementById("typeIn").value = newStr;
					}
					if(str.length == 5 || str.length == 4){
						var newStr = str.substring(0,4);
						document.getElementById("typeIn").value = newStr;
					}	
					
					$(".alertInfo").css("display","none");
					$(".span2").css("display","none");
					$("#ibody ul li").removeClass("color");
					callRecharge.flag = "true";
                }
			});
						
//			++,   ?13'true':'false'
			
			$("#typeIn").keyup(function () {	
				$("#state img").css("display","none");
				$("#state span").css("display","block");
				
				if($("#typeIn").val().length == 0){
					$("#state span").css("display","none");
					$("#state img").css("display","block");					
				}
				
				if($("#typeIn").val().length == 13  && callRecharge.flag == "true"){
					callRecharge.flag = "false";
					var str = $("#typeIn").val();
					var item = str.split(" ");
					var typeIn = item.join("");
					var phoneNumReg = /^1[23458]\d{9}$/;
					
					if(phoneNumReg.test(typeIn)){
//						alert("手机号码正确")
						$(".alertInfo").css("display","block");	
						$("#ibody ul:last-child li").addClass("color");
						
						$.ajax({
							data: typeIn,
							type: "GET",
							url: "json/callRecharge.json",
							async:true,
							dataType: "JSON",
							success: function(res){
								console.log(res);			
								if(res.status.toString() == "true"){
//									console.log("success");
									callRecharge.render(res);
									callRecharge.app.isShow = "true";
									callRecharge.app.isTrue = "true";
								}						
							},
							error: function(XMLHttpRequest, textStatus, errorThrown){
								console.log(XMLHttpRequest);
								console.log(textStatus);
								console.log(errorThrown);
							}
						});
					}
				}
				
			});
			$("#state span").click(function(){
				$("#typeIn").val("");
				callRecharge.flag = "true";
				$("#state span").css("display","none");
				$("#state img").css("display","block");
				$(".alertInfo").css("display","none");
				$(".span2").css("display","none");
				$("#ibody ul li").removeClass("color");
			})
			
			$("#ibody ul").delegate("li","click",function(){
//				var num= s.replace(/[^\d.]/g,'');				
				var str = $("#typeIn").val();
				var item = str.split(" ");
				var typeIn = item.join("");
				var phoneNumReg = /^1[23458]\d{9}$/;
				var faceValue = $(this).find(".span1").text().replace(/[^\d.]/g,'');
				var price = $(this).find(".span2").text().replace(/[^\d.]/g,'');
				console.log(faceValue);console.log(price);
				if(phoneNumReg.test(typeIn)){
					callRecharge.submitOrder(typeIn,faceValue,price);
				}
				
			});
			
			$("#typeIn").focus(function(){
				
			});		
			$(document).not($("#header")).click(function(){

    		});
    		/*防止事件冒泡*/
  		    $("#header").click(function(event){	
        		event.stopPropagation();
   			});
   			
		},
		getInitData : function(){
			var self = this;
			$.ajax({
				type: "get",
				url: "json/initData.json",
				dataType: 'json',
				data: {},
				success: function(severData) {
					console.log(severData);								
					if(severData.status == true) {
						self.render(severData);									
					}
				},
				error: function() {
					alert('加载失败...');
				}
			});
		},
		submitOrder: function(typeIn,faceValue,price){
			$.ajax({
				data:{
					typeIn: typeIn,            //用户提交的手机号
					faceValue: faceValue,      //用户选择的颗粒度
					price: price			   //用户选的面值的售价
				},
				type: "GET",
				url:"",						   //充值接口
				async:true,
				dataType: "JSON",
				success: function(res){
//					console.log(res);
//					alert("success")
				},
				error: function(){
					alert("请求失败");
				}
			});
		},
		render : function(data){
			console.log(data.data);
			var self = this;
			self.app.dataList = data.data;
			$(".alertInfo").html(data.mobile);
		},
		initRender : function(){
			$("#ibody ul li").each(function(){			
				//$(this).index()
				for (i=0,len = $("#ibody ul li").length - 1; i < len; i++) {
					if($($("#ibody ul li")[i]).index() % 3 == 0){
						$($("#ibody ul li")[i]).css("margin-left","0px");
					}
				}		
			});
		},
		pay : function(){
				
		}
	}
	callRecharge.init();
})()