(function(){
	var bigWheel = {
		init: function(){
			this.eventsBind();
					
			/*
			 * 根据转盘旋转角度判断获得什么奖品
			 * @param deg
			 * @returns {*}
			 */
			var whichAward = function(deg) {
			
			    if ((deg > 330 && deg <= 360) || (deg > 0 && deg <= 30)) { 
			        	return "iPhone7";					//IPhone 7
				    } else if ((deg > 30 && deg <= 90)) { 
				        return "1G";							//1G流量
				    } else if (deg > 90 && deg <= 150) { 
				        return "10元";						//10元话费
				    } else if (deg > 150 && deg <= 210) { 
				        return "30元";						//30元话费
				    } else if (deg > 210 && deg <= 270) { 
				        return "100M";						//100M流量
				    } else if (deg > 270 && deg <= 330) { 
				        return "500M";						//500M流量
				}
			
			}
			
			
			this.KinerLottery = new KinerLottery({
		    rotateNum: 8, //转盘转动圈数
		    body: "#box", //大转盘整体的选择符或jquery对象
		    direction: 0, //0为顺时针转动,1为逆时针转动
		
		    disabledHandler: function(key) {
		
		        switch (key) {
		            case "noStart":
		                
		                break;
		            case "completed":
		                alert("明天再来试试吧");
		                break;
		        }
		
		    }, //禁止抽奖时回调
		
		    clickCallback: function() {
		
		        //此处访问接口获取奖品
		        function random() {
		            return Math.floor(Math.random() * 360);
		        }
		
		
		        this.goKinerLottery(random());
		
		    }, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面
		
		    KinerLotteryHandler: function(deg) {
					
					if($(".count").text() == "0"){
						$(".inner.KinerLotteryBtn").removeClass("start").addClass("completed");
					}
					
//		            alert("恭喜您获得:" + whichAward(deg));
					$("#alert").css("display","block");
					$(".change1").text(whichAward(deg));
					switch (whichAward(deg)){
						case "iPhone7": 
							
							break;
						case "1G": 
						
							break;
						case "10元": 
							$("#alertBg").attr("src","img/alert_02.png");
							break;
						case "30元": 
							
							break;
						case "100M": 
							$(".alertBg").attr("src","img/alert_02.png");
							break;
						case "500M": 
							$(".alertBg").attr("src","img/alert_02.png");
							break;
						default:
							break;
					}
					
		        } //抽奖结束回调
			});
			
			
			var phoneNum = "13077888330";
        	var mphone = phoneNum.substr(0, 3) + '****' + phoneNum.substr(7);
            var text = function() {
                $("#bo01").append("<div class='abox'><div class='iphone'>"+mphone+"</div><div class='flow'>抢到20M</div><div class='time'>8分钟前</div></div>");     //插入数据
            }
            setInterval(text,1000);         //多少秒请求一次
            //滚动效果
            var t=getid("bobao"),t1=getid("bo01"),t2=getid("bo02"),sh=getid("show"),timer;
            t2.innerHTML=t1.innerHTML;
            function mar(){
                if(t2.offsetTop<=t.scrollTop)
                    t.scrollTop-=t1.offsetHeight;
                else
                    t.scrollTop++;
            }
            timer=setInterval(mar,30);
            function getid(id){
                return document.getElementById(id);
            }
		},
		eventsBind: function(){
			$("#introduce").click(function(){
				$("#introducePage").css("display","block");
			});
			$("#introducePage").click(function(){
				$("#introducePage").css("display","none");
			});
			$("#alert").click(function(){
				$("#alert").css("display","none");
				if($(".count").text() == "0"){
					$("#share").css("display","block");
				}
			});	
			$("#share").click(function(){
				$("#share").css("display","none");
			});
			$(".inner.KinerLotteryBtn").click(function(){						
				var count = $(".count").text();
				var newCount = count - 1;			
				if($(".count").text() != "0"){
					$(".count").text(newCount);
				}
			});
			$(".audio").click(function(){
				var aud = document.getElementById("audio");
			    if(aud.paused){    
			        aud.play();    
			        $(".audio").attr("src","img/play.png");    
			    }else{    
			        aud.pause();    
			        $(".audio").attr("src","img/pause.png");    
			    }    
			})
		},
		ajax: function(){
			
		},
		render: function(){
			
		}
	}
	
	bigWheel.init();
})()
