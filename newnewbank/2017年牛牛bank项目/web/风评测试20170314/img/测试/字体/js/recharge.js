(function(){

	var reCharge = {
		init : function(){
			this.eventsBind();
			this.initRender();
		},
		eventsBind : function(){
			
			var self = this;
			
			$(".tap3").removeClass("color");
			
			$("#typeIn").keydown(function a (e) {
				var obj = e;
                if(obj.keyCode != 8){//判断是否为Backspace键，若不是执行函数；
	                   var b = document.getElementById("typeIn").value;      //定义变量input  value值；
	                   var maxValue = 15;                                    //限制输入框的最大值；
	                   b = b.replace(/[^\d\s]/g,"");       //正则表达式：如果输入框中输入的不是数字或者空格，将不会显示；
	                   document.getElementById("typeIn").value = b;          //把新得到得value值赋值给输入框；
                                                         
                       if(b.length == 3 || b.length == 9){                   //判断是否是该加空格的时候，若不会，还是原来的值；
                           b = b + "  "; 
                           document.getElementById("typeIn").value = b; 
                       }                      
                };               
//          	退格键
                if(obj.keyCode == 8){
                		$("#nav").css("display","none");
						$("#ibody").css("margin-top","2rem");	
						$("#lists li div").css("color","#AAAAAA");
						$("#lists li .price").css("color","#AAAAAA").css("border-color","#DADADA");
						
						var str = $("#typeIn").val();
						if($("#typeIn").val().length == 12 || $("#typeIn").val().length == 11){			
							var newStr = str.substring(0,10);
							document.getElementById("typeIn").value = newStr;
						}
						if($("#typeIn").val().length == 6 || $("#typeIn").val().length == 5){
							var newStr = str.substring(0,4);
							document.getElementById("typeIn").value = newStr;
						}					
                }
			});
			$("#typeIn").keyup(function () {					
				if($("#typeIn").val().length == 15){
					var str = $("#typeIn").val();
					var item = str.split("  ");
					var typeIn = item.join("");
					var phoneNumReg = /^1[34578]\d{9}$/;
					
					if(phoneNumReg.test(typeIn)){
//						alert("手机号码正确")
						$("#nav").css("display","block");
						$("#ibody").css("margin-top","1rem");
						$("#lists li div").css("color","#000");
						$("#lists li .price").css("color","#4BB56A").css("border-color","#4BB56A");	
						self.ajax(typeIn);
					}
				}
			});
			
			$("#typeIn").focus(function(){
				$("#header span").css("display","block");
			});		
			$(document).not($("#header")).click(function(){
				$("#header span").css("display","none");	
    		});
    		/*防止事件冒泡*/
  		    $("#header").click(function(event){	
        		event.stopPropagation();
   			});
   			
   			$("#top").delegate("span","click",function(){
   				if($(".tap2").hasClass("color")){
   					$("#nav ul li").eq(2).hide();
   					$("#nav ul li").eq(3).hide();	
   				}else{
   					$("#nav ul li").eq(2).show();
   					$("#nav ul li").eq(3).show();
   				}
   			})
   			
			$(".tap1").click(function(){
				$(".tap1").addClass("color");
				$(".tap2").removeClass("color");
				$(".tap3").removeClass("color");
				//2016.12.12
				$(".type").text("全国漫游");
				$(".alertInfo").css("display","none");
				$("#lists li div:first-child>div").css("height","6rem");            //2016.12.19
				$("#lists li div:first-child>div").css("line-height","6rem");		//2016.12.19
			});
			$(".tap2").click(function(){
				$(".tap2").addClass("color");
				$(".tap1").removeClass("color");
				$(".tap3").removeClass("color");
				//2016.12.12
				$(".type").text("省内漫游");
				$(".alertInfo").css("display","inline");
				$(".alertInfo").text("当日有效，全国漫游");	
				$("#lists li div:first-child>div").css("height","6rem");			//2016.12.19
				$("#lists li div:first-child>div").css("line-height","4.5rem");		//2016.12.19
			});	
			$(".tap3").click(function(){
				$(".tap3").addClass("color");
				$(".tap1").removeClass("color");
				$(".tap2").removeClass("color");
				//2016.12.12
				$(".type").text("省内漫游");
				$(".alertInfo").css("display","inline");
				$(".alertInfo").text("省内流量包，仅限本省内使用");	
				$("#lists li div:first-child>div").css("height","6rem");			//2016.12.19
				$("#lists li div:first-child>div").css("line-height","4.5rem");		//2016.12.19
			});		
			$("#header").delegate("div","click",function(){
				document.getElementById("typeIn").value = "";
				$("#lists li .price").css("color","#AAAAAA").css("border-color","#DADADA");
				$("#header span").css("display","none");
				//2016.12.19
				$("#nav").css("display","none");
				$("#ibody").css("margin-top","2rem");
				$("#lists li div").css("color","#AAAAAA");
			});
			
			
		},
		ajax : function(num){
			if($(".tap1").hasClass("color")){
//				alert(num+"直充包");
			}
			if($(".tap3").hasClass("color")){
//				alert(num+"个性包");
			}
		},
		render : function(){
			
		},
		initRender : function(){
	
		},
		pay : function(){
			
		}
	}
	reCharge.init();
})()