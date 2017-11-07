// JavaScript Document
function loadJs(url){
	var t=Math.random();
	url+="?t="+t;
	document.write('<script type="text/javascript" src="'+url+'"></script>');
	
}

loadJs("js/jq.mobi.min.js");
loadJs("js/m.js");
loadJs("js/jquery.flexslider-min.js");
loadJs("js/baiduTemplate.js");
loadJs("js/jquery.cookie.js");
loadJs("js/Math.uuid.js");
loadJs("js/myJs/myTool.js");
loadJs("js/welfare.js");

//引入插件

//自定义弹窗
loadJs("js/myJs/myDialog.js");
document.write('<link href="css/myDialog.css" rel="stylesheet" type="text/css"/>');//自定义弹窗样式


//载入配置
loadJs("js/myJs/apiAddress.js");
loadJs("js/myJs/weixinShare.js");

//系统组件和工具
loadJs("js/myJs/errorDeal.js");
//document.write('<link href="css/footer.css" rel="stylesheet" type="text/css"/>');//footer样式
//2015-08-31 更改footer 跳转样式
var css = document.createElement('link');
    css.href="css/footer.css";
    css.rel="stylesheet";
    css.type="text/css";
   document.getElementsByTagName('head')[0].appendChild(css);
   
var css2 = document.createElement('link');
   css2.href="css/footer.1.0.2.css";
   css2.rel="stylesheet";
   css2.type="text/css";
  document.getElementsByTagName('head')[0].appendChild(css2);

// <!-- Piwik -->
 var _paq = _paq || [];
 // tracker methods like "setCustomDimension" should be called before "trackPageView"
 _paq.push(['trackPageView']);
 _paq.push(['enableLinkTracking']);
 (function() {
   var u="https://statistics.newnewbank.com/";
   _paq.push(['setTrackerUrl', u+'piwik.php']);
   _paq.push(['setSiteId', '4']);
   var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
   g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
     })();
//   <!-- End Piwik Code -->
   
   
$.extend({
	isWeiXin:function (){
	    var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	        return true;
	    }else{
	        return false;
	    }
	},
	isDomain:function(){
		if(!$.cookie("weixin_domain")){
			$.apiPost("getWeixinDomain","",function(data){
				$.cookie("weixin_domain",JSON.stringify(data));
			},null,false);
		}
		var weixin_domain=JSON.parse($.cookie("weixin_domain"));
		var host = window.location.host;
		var isDomain=false;
		for(var i=0; i<weixin_domain.length;i++){
			if(host.indexOf(weixin_domain[i])>=0){
				isDomain=true;
				break;			
			}
		}
		return isDomain;
	},
	isIos:function(){
		 var ua = window.navigator.userAgent.toLowerCase();
		 if(ua.match(/AppIos/i) == 'appios'){
	        return true;
	    }else{
	        return false;
	    }
	},
	isAndroid:function(){
		var ua = window.navigator.userAgent.toLowerCase();
		 if(ua.match(/AppAndroid/i) == 'appandroid'){
	        return true;
	    }else{
	        return false;
	    }
	},
	isAPICloud:function(){
		var ua = window.navigator.userAgent.toLowerCase();
		 if(ua.match(/APICloud/i) == 'apicloud'){
	        return true;
	    }else{
	        return false;
	    }
	},
	isApp:function(){
		return $.isIos()||$.isAndroid()||$.isAPICloud();
	}
});

if($.isWeiXin()){
	document.write('<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>');
}

$(function(){
	if(!$.isWeiXin()&&!$.isApp()){
		$("body").append('<link href="css/showHead.css" rel="stylesheet" type="text/css"/>');
	}
	
	//如果是微信浏览器
	if($.isWeiXin()&&$.isDomain()){
		$(function(){
			if($.isWeiXin()){
					//获取微信 js接口的权限
					var t=Math.random();
					$.ajax({
						url:window.wxbase+"signJsConfig.shtml?t="+t,
						type:"POST", 
						cache: false,
						data:location.href,
						success:function(data){
							data['debug']=false;
							data['jsApiList']=["onMenuShareTimeline","onMenuShareAppMessage","imagePreview","hideToolbar","hideOptionMenu"];
							wx.config(data);
							//全局分享
							var _link=$.absolute_url("skipPage.html")+"?nnb_from=weixin-fxtqjgpy-direct";
							if($.cookie("referral")!=null){
								_link+="&in="+$.cookie("referral");
							}
							var shareInfo={
											title: "牛牛bank微信端", // 分享标题
										    desc: "快乐理财，安全投资。一个靠谱的理财平台！",
										    link:_link, // 分享链接
										    imgUrl: "https://images-nnb.newnewbank.com/20150512d6fc670352264928842f4046a9e41ed1.jpg", // 分享图标
										    success:function(){
										    	$.shareLog(shInfo);
										    	try{window.shareSuccess()}catch(e){};
										    },
										    cancel:function(){
										    	try{window.shareCancel()}catch(e){};
										    }
										};
							wx.ready(function(){
								wx.onMenuShareTimeline(shareInfo);
								wx.onMenuShareAppMessage(shareInfo);
								initShare();
							});
						}
					});
			}
		});
	}
});


$.extend({
	shareLog:function(_shareInfo){
		$.apiPost("weixinShareLog",{title:_shareInfo.title,desc:_shareInfo.desc,link:_shareInfo.link,imgUrl:_shareInfo.imgUrl},function(data){
			
		});
	}
})

//检查 设置实名和交易密码 通用方法

$.extend({
	checkRealName_PayPwd:function(){
		$.cookie("loginAfter",location.href);
		$.apiPost("userBalance","",function(data){
			if(!data.hasRealName){
				$.myAlert("请先实名认证",function(){location.href="newRealNameAuthentica.html";});
				return;
			}
			if(!data.hasPayPwd){
				$.myAlert("请设置交易密码",function(){location.href="newSetPayPwd.html";})
				return;
			}		
		});
		
	}
	
});


if(!$.isApp()){
	$(".menu").html('\
			<div class="fixedB">\
				<ul>\
					<li><a href="newHome.html"><div class="icon home"></div>首页</a></li>\
					<li><a href="newFinancialProducts.html"><div class="icon money"></div>投资理财</a></li>\
					<li><a href="newUserCenter.htm"><div class="icon fdj"></div>个人中心</a></li>\
					<li><a href="partnerIndex.htm"><div class="icon partnerBtImg"></div>合伙人</a></li>\
					<li><a href="kefu.html"><div class="icon kehu"></div>客服</a></li>\
				</ul>\
			</div>\
	');
	
	$(".foot-nav").html('\
			<div class="navbar">\
				<a href="newHome.html" class="navBar_item "><div class="navBar_icon nbi01"></div><p class="navBar_label">首页</p></a>\
				<a href="newFinancialProducts.html" class="navBar_item "><div class="navBar_icon nbi02"></div><p class="navBar_label">理财</p></a>\
			    <a href="newActivityCenter.html" class="navBar_item "><div class="navBar_icon_center nbi05"></div><p class="navBar_label">活动</p></a>\
				<a href="partnerIndex.html" class="navBar_item "><div class="navBar_icon nbi03"></div><p class="navBar_label">合伙人</p></a>\
				<a href="newUserCenter.html" class="navBar_item "><div class="navBar_icon nbi04"></div><p class="navBar_label">我的</p></a>\
			</div>\
	');
}

//2015.8.20修改
$('input[type=text],input[type=password],textarea,select').bind('focus',function(){
    $('.menu').hide();
}).bind('blur',function(){
    $('.menu').show();  
});

if(window.navIndex!=null){
	$("footer.menu li").eq(window.navIndex-1).addClass("currentf");
	$("footer.foot-nav a").eq(window.navIndex-1).addClass("navBar_item_on");
}

$.extend({
	getDId:function(){
			if($.getUrlParam("deviceId")){
				$.cookie("deviceId",$.getUrlParam("deviceId"));
				return $.getUrlParam("deviceId");
			}
			
			if($.cookie("deviceId")==null){//初始化 deviceId	
			$.cookie("deviceId",'wap_'+Math.uuid());
			}	
			return $.cookie("deviceId");
		}
	});
$.extend({
		getAccess:function(){
			if($.getUrlParam("access")){
				$.cookie("access",$.getUrlParam("access"));
				return $.getUrlParam("access");
			}
			if($.cookie("access")==null){
			return "";		
			}		
			return $.cookie("access");
		}
	});


$.extend({
	lockScreen:function(withAction){
		if(typeof(window.overQueen)=="undefined"||window.overQueen==0){
			window.overQueen=0;
			$("body").append("<div id='overlay'></div>");//添加遮罩层
			$("#overlay").height($(document).height()).css({//设置遮罩层
										'opacity':0.3,
										'position':'fixed',
										'top':0,
										'left':0,
										'background-color':'#D6D6D6',
										'width':'100%',
										'height':'100%',
										'z-index':99998
										});
			window.overQueen++;
			if(typeof(withAction)=="function"){
				withAction();
			}			
		}else{
			window.overQueen++;
		}	
	},	
	unlockScreen:function(withAction){
		window.overQueen--;
		if(window.overQueen==0){
			$("#overlay").remove();//删除遮罩层
				if(typeof(withAction)=="function"){
					withAction();
				}
			}
	},
	loadingLock:function(){
		$.lockScreen(function(){
			//添加转圈
			 $("body").append('<img class="loading123" src="images/loading.gif" width="50" height="50" style="position:fixed;left:50%;top:50%;margin-top:-25px;margin-left:-25px;z-index:99999;"/>');
		});
	},
	loadingUnlock:function(){
		$.unlockScreen(function(){
			$("img.loading123").remove();//删除转圈	
		});
	}
	
});

$.extend({  
  apiPost:function(_cmd,_body,callback,_lock,_async){
	  					  				
	  			  var _access=$.getAccess();
				  var _deviceId=$.getDId();
				  var _json={cmd:_cmd,access:_access,deviceId:_deviceId,body:_body};//准备数据
//				  alert(JSON.stringify(_json));
				  if(_lock!=false){//如果有锁
					  $.loadingLock();
				  }
				  $.ajax({
					  	//timeout : 10000,//超时10秒
					  	url:window.apiUrl,
					  	async:_async==false?false:true,
					  	cache: false,
						type:"POST",
						dataType:'json',
						data:JSON.stringify(_json),
						success:function(result){
								if(_lock!=false){//如果有锁
									$.loadingUnlock();
								}
								//alert(JSON.stringify(result));
								if(result.respCode!="000"){
									$.errorDeal(result);
								}else{
									callback(result.body);
								}
								progress();									
						}/*,
						error : function(XMLHttpRequest,status){ //请求完成后最终执行参数
							if(status=='timeout'){//超时,status还有success,error等值的情况
								console.log("请求超时");
								$.myConfirm("请求超时,是否刷新页面重试?",function(){window.location.reload()});
							}else if(status=='error'){//超时,status还有success,error等值的情况
								console.log("请求失败");
								$.myAlert("请求失败");
							}
						}*/
					  });				  
				  }
})

function clearCookie(){
			    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
			    if (keys) {
			        for (var i =  keys.length; i--;)
			            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
			    }    
			}

$.extend({
	logout:function(){		
			$.apiPost("logout","",function(data){
		//	$.cookie("access",null);
			clearCookie();
			location.href="newLogin.html";
			});	
		}	
	});

	  
$.extend({
	doGoPost:function(_cmd,_body){		
			$.apiPost(_cmd,_body,function(data){
					var URL=data.action;
					var PARAMS={};//准备数据
					for(var i=0;i<data.child.length;i++){
						PARAMS[data.child[i].txt]=data.child[i].val;		
					}//准备被数据end
					var temp = document.createElement("form");      
					temp.action = URL;      
					temp.method = "post";      
					temp.style.display = "none";      
					for (var x in PARAMS) {      
						var opt = document.createElement("input");      
						opt.name = x;      
						opt.value = PARAMS[x];      
						// alert(opt.name)      
						temp.appendChild(opt);      
					}    
					document.body.appendChild(temp);      
					temp.submit();							
				});		
		}	
	});


 
//为onBottomClick 添加触发事件
$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		//var scrollHeight = $(document).height();
		var scrollHeight = document.body.scrollHeight;
		var windowHeight = $(this).height();
		if(Math.abs(scrollTop + windowHeight - scrollHeight)<3){
			//被隐藏时不触发
			if($(".onBottomClick").is(":hidden")){
				return;
			}
			$(".onBottomClick").click();
		}
	});

