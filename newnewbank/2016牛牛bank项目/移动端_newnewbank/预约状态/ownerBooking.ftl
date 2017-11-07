<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta content="yes" name="apple-mobile-web-app-capable">
		<meta content="black" name="apple-mobile-web-app-status-bar-style">
		<meta content="telephone=no" name="format-detection">
		<meta http-equiv="Expires" content="-1">
		<meta http-equiv="Cache-Control" content="no-cache">
		<meta http-equiv="Pragma" content="no-cache">
		<meta name="wap-font-scale" content="no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="renderer" content="webkit|ie-comp|ie-stand">
		<meta name="keywords" content="">
		<meta name="description" content="">
		<script src="js/flexible.0.3.4.js" type="text/javascript" charset="utf-8"></script>
		<title>我的预约状态</title>
		<link rel="stylesheet" type="text/css" href="css/passengerBooking.css" />
		<link href="./css/libs/mui.picker.css" rel="stylesheet" />
		<link href="./css/libs/mui.poppicker.css" rel="stylesheet" />
	</head>

	<body>
		<div id="root">
			<!--覆盖层  start-->
			<div id="cover"></div>
			<!--覆盖层  end-->
			<!--弹框  1  start-->
			<div class="popup bombBox" id="bombBox">
				<p class="notice">您的一起回家申请已通知乘客</p>
				<p class="forConfirmation">正在等待乘客确认</p>
				<p class="wait">请耐心等候</p>
			</div>
			<!--弹框  1  end-->
			<!--弹框  2  start-->
			<div class="popup bombBox2">
				<span class="carPhoto marLeft personPhoto"></span>
				<div class="rightBoxNot bombRight">
					<div class="personInfo">
						<div class="sex male">
							<span class="fL" id="pName"></span>
							<span class="maleIcon invitation" id="pSex"></span>
						</div>
						<div class="phoneNumber">电 话：<span id="pMobilePhone"></span></div>
						<div class="licenseNumber">乘   客：<span id="pPersonNum"></span>名</div>
					</div>
					<div class="rightTel">
						<img src="https://images-wap.oss-cn-hangzhou.aliyuncs.com/telphone20161214.png" />
					</div>
				</div>

				<div class="lineTop">
					<div class="nullSeat">
						<div class="sex male"><span class="goDate" id="goDate">  </span></div>
						<div class="placeBlack"><span id="goArea"> </span><span class="horizontalLine"></span> <span id="endArea"></span></div>
					</div>
				</div>
				<div class="lastLine" style="display:none"><span>正在寻找一起回家车主</span><span class="peer">邀TA同行</span></div>
			</div>
			<!--弹框  2  end-->
			<!--弹框  3  start-->
			<!--<div class="popup bombBox3">
				<p class="noticeArgee">您好，您已同意车主刘生的邀请</p>
				<div class="forConfirmation fs_22">
					<p class="">为了保障安全出行，确保您的行程成功匹配，</p>
					<p class="">如24小时内未完成实名认证</p>
					<p class="">则行程取消或错过最佳匹配时间</p>
				</div>
				<p class="realNameAuthenticate">实名认证</p>
			</div>-->
			<!--弹框  3  end-->
			<!--弹框  4  start-->
			<div class="popup bombBox" id="toSure" style="top: 33%;">
				<p class="forConfirmation" style="padding-top: 40px;">确定邀请<span id="oname"></span>一起回家吗？</p>
				<p class="realNameAuthenticate" id="sure">确定</p>
			</div>
			<!--弹框  4  end-->
			<!--弹框  5  start-->
			<div class="popup bombBox" id="toSure1" style="top: 33%;">
				<p class="forConfirmation" style="padding-top: 40px;">确定接受<span id="oname1"></span>的邀请，一起回家吗？</p>
				<p class="realNameAuthenticate" id="sure1">确定</p>
			</div>
			<!--弹框  5  end-->
			<!--弹框  6  start-->
			<div class="popup bombBox" id="toSure2" style="top: 33%;">
				<p class="forConfirmation" style="padding-top: 40px;">已与乘客匹配完成？</p>
				<p class="realNameAuthenticate" id="sure2">是</p>
			</div>
			<!--弹框  6  end-->
			<!--弹框  7  start-->
			<div class="popup bombBox" id="toSure3" style="top: 33%;">
				<p class="forConfirmation" style="padding-top: 40px;">行程已确认，请耐心等待出发日！</p>
				<p class="realNameAuthenticate" id="sure3">确定</p>
			</div>
			<!--弹框  7  end-->
			<!--1 start -->
			<div class="header">
				<div class="headerText">
					<p>您好，${owner.name} ${owner.mobilePhone}</p>
					
					<span class="editIcon"></span>
					<span style="color: #999;font-size: .375rem;float: right;">（修改信息）</span>
				</div>
				<div class="headRed">
					<p class="fontS_24">您已申请的行程如下</p>
					<div class="trip">
						<span></span>
						<div class="date">
							<p>${owner.startDate?string("yyyy/MM/dd")}-${owner.endDate?string("dd")}日</p>
							<p class="rectangularLine"></p>
							<p>行程待确定</p>
						</div>
						<span></span>
					</div>
					<div class="place">
						<div class="placeText placeText1">
							<p>广东省深圳市</p>
							<p>${owner.departureArea}</p>
						</div>
						<div class="placeText placeText2">
							<p>${owner.endProvince}${owner.endCity}</p>
							<p>${owner.endDistrict}</p>
						</div>
					</div>
				</div>
			</div>
			<!--1 end -->
			<!--onePage start -->
			<#if confirmList??&&confirmList?size&gt;0>
				<div class="onePage">
					<p class="tieleLine">
						<span class="fs24_c9">已完成的匹配</span>
						<!--<span class="fs18_cf6a84e">1/2名</span>-->
						<span class="arrow arrowUp"></span>
					</p>
					<div class="toggle">
						<#list confirmList as passenger>
							<div class="lineOfInfo">
								<#if passenger.passengerStatus==1>
									<span class="passenger passenger1">乘客</span>
								<#else>
									<span class="passenger passenger2">乘客</span>
								</#if>
								<span class="passInfo">
									<#assign name=passenger.name>
									<#assign name=name?replace(name?substring(1,name?length),"**")>
									${name}&nbsp;&nbsp;&nbsp;${passenger.mobilePhone}
								</span>
								<span class="certified">（${passenger.personNum}人）</span>
								<#if passenger.passengerStatus==1>
									<div class="already uploadedName alreadyOwner">已确认<span class="alreadyUploaded"></span></div>
								<#else>
									<span class="whether toBeSure">联系TA确认</span>
								</#if>
							</div>
						</#list>
					</div>
				</div>
			</#if>
			<!--onePage end -->
			
			<!--twoPage start -->
			<span id="passInvite"></span>
			<!--twoPage end -->
			<#if owner.isAuth==0>
				<div class="newAdded" style="">
					实名认证
				</div>
			</#if>
			
			
			<!--threePage start -->
			<#if passengerList??&&passengerList?size&gt;0>
				<div class="threePage">
					<div class="tieleLine">
						<span class="fs24_c9">与您匹配的乘客</span>
					</div>
					<#list passengerList as passInfo>
						<div class="line" id="together${passInfo.tgmId}">
							<div class="nullSeat">
								<div class="sex male">
									<span class="goDate">
										乘客
										<#if passInfo.sex==1>
											<#assign sex="先生">
										<#else>
											<#assign sex="女士">
										</#if>
										<#assign name=passInfo.name>
										<#assign name=name?replace(name?substring(1,name?length),"")>
										${name}${sex}
									</span>
									<span class="gray">${passInfo.startDate?string("yyyy/MM/dd")}-${passInfo.endDate?string("dd")}日出发  </span> 
									<span class="seek">  ${passInfo.personNum}名乘客</span></div>
								<div class="placeBlack place_gray"><span>（深圳 ${passInfo.departureArea}  </span><span class="horizontalLine"></span> <span>${passInfo.endProince}${passInfo.endCity}${passInfo.endDistrict}）</span></div>
							</div>
							<div class="goToeach" tmad="${passInfo.tgmId}">邀请一起回家</div>
						</div>
					</#list>
				</div>
			</#if>
			<!--threePage end -->
			<!--<#include "/common/footer.ftl">-->
			<#if confirmList??&&confirmList?size&gt;0>
				<div class="twoPageD commonPageD">
					<p class="tieleLine">
						<span class="fs24_c9">最终行程确认（所有匹配完成后进行行程确认）</span>
						<!--<span class="fs18_cf6a84e">1/2名</span>-->
						<span class="arrow arrowUp"></span>
					</p>
					<div class="toggle">
						<div class="lineD tieleLine">
								<p class="fontS_24D arrLineD">最终出发时间：</p>
								<p class="hiddenD">2017年1月   <span class="regionD" id="userResult"></span></p>
								<div class="inBlockD bombCoverD" id="showUserPicker">
									<p class="color999D notUploadedStartD"><span class="choose">请选择</span><span class="arrowD"></span></p>
								</div>
						</div>
						<div class="lineD ">
							<div class="agree commomBox center" id="center" tmad="40">确定</div>
						</div>	
					</div>
				</div>
			</#if>
			<input type="hidden" value="${isDrops}" id="isDrops"/>
		</div>
		<script src="js/jquery-1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
		<#include "/common/bombBox.ftl">
		<#include "/common/wechat.ftl">
		<script src="./js/mui.min.js"></script>	
		<script src="./js/mui.picker.js"></script>
		<script src="./js/mui.poppicker.js"></script>
		<script type="text/javascript">
			var time = "";
			var isAuth = ${owner.isAuth}
			$(function() {
				//$("#cover_different").show();
			    //$(".popup_different").show();
				//$("#content").text("预约成功，正在匹配乘客，匹配后会有短信通知！认证信息稍后开放，匹配后需要进行实名认证操作！");
			
				//编辑
				$(".editIcon").on('click',function(){
					window.location.href="toOwnerView.shtml?flag=1";
				});
				var mad = 0;
				$("#center").on('click',function(){
					if(time==""){
						$("#cover_different").show();
					    $(".popup_different").show();
						$("#content").text("请选择实际出发时间");
						return false;
					}
					$('#cover, #toSure2').css('display','block');
				});
				
				//行程确认
				$("#sure2").on('click',function(){
					$.ajax({  
		                url: "trip/confirmDeparture.shtml",  
		                type: "post",  
		                dataType: "json",  
		                data: {  
		                    "ownerId": ${owner.id},  
		                    "sureStartDate":time,
		                },  
		                async: false,  
		                success: function (data) { 
		                	$('#cover, #toSure2').hide();
		                	if(data.result){
								$('#cover,#toSure3').css('display','block');
		                	}else{
		                	 	$("#cover_different").show();
							    $(".popup_different").show();
								$("#content").text(data.msg);
		                	}
		                }
		            });
				});
				
				
				//一起回家--弹框
				$('.goToeach').on('click', function() {
					if(isAuth==0){
						$('#cover, #toSure').hide();
                	 	$("#cover_different").show();
					    $(".popup_different").show();
						$("#content").text("您尚未实名，请先实名！");
						return;
					}
					var ownerName = $(this).siblings('.nullSeat').find('.goDate').text();
					$("#oname").text(ownerName);
					mad = $(this).attr("tmad");
					$('#cover, #toSure').css('display','block');
				});
				
				//确认一起回家
				$("#sure").on("click",function(){
					$.ajax({  
		                url: "goTogether.shtml",  
		                type: "post",  
		                dataType: "json",  
		                data: {  
		                    "matchId": mad,  
		                    "type":1,
		                },  
		                async: false,  
		                success: function (data) { 
		                	if(data.result){
		                		$("#together"+mad).hide();
		                		$('#cover, #toSure').hide();
								$('#cover,#bombBox').css('display','block');
		                	}else{
		                		$('#cover, #toSure').hide();
		                	 	$("#cover_different").show();
							    $(".popup_different").show();
								$("#content").text(data.msg);
		                	}
		                }
		            });
				});
			
			 $("#sure3").on("click",function(){
			 	window.location.href = "trip/toOwnerDeparture.shtml?ownerId="+${owner.id};
			 });
				
				//点击覆盖层--弹框消失
				$('#cover').on('click', function() {
					$('#cover,.popup').css('display', 'none');
				});
				//箭头--显示与隐藏事件
				$('.arrow').on('click', function() {
					$(this).toggleClass('arrowLeft');
					$(this).toggleClass('arrowUp');
					$(this).parents('.tieleLine').siblings('.toggle').slideToggle(300);
					//$('.toggle').slideToggle(300);
				});

				
				$("#passInvite").load("getPassInviteList/1.shtml",{ownerId:${owner.id}});
				
				//车主实名
				$(".newAdded").on('click',function(){
					var isDrops = $("#isDrops").val();
					if(isDrops!=null&&isDrops==1){
						window.location.href = "toDDOwnerAuth.shtml?ownerId="+${owner.id};
					}else{
						window.location.href = "toOwnerAuth.shtml?ownerId="+${owner.id};
					}
				});
			});
			
			
		<#if confirmList??&&confirmList?size&gt;0>
			
			(function($, doc) {
				$.init();			
				$.ready(function() {
					//--------------------一级联动---------------------
					var userPicker = new $.PopPicker();
					var jsons = [];
					for(var i=30;i>0;i--){
						var json={};
						json["text"] = i;
						jsons.push(json);
					}
					userPicker.setData(jsons);
					var showUserPickerButton = doc.getElementById('showUserPicker');
					var userResult = doc.getElementById('userResult');
					showUserPickerButton.addEventListener('tap', function(event) {
						userPicker.show(function(items) {
//							userResult.innerText = JSON.stringify(items[0]);
							userResult.innerText =''+(items[0] || {}).text;
							time = "2017-1-"+(items[0] || {}).text;
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);

				});				
			})(mui, document);
		</#if>
		
			Date.prototype.format = function(format) {
		       var date = {
		              "M+": this.getMonth() + 1,
		              "d+": this.getDate(),
		              "h+": this.getHours(),
		              "m+": this.getMinutes(),
		              "s+": this.getSeconds(),
		              "q+": Math.floor((this.getMonth() + 3) / 3),
		              "S+": this.getMilliseconds()
		       };
		       if (/(y+)/i.test(format)) {
		              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
		       }
		       for (var k in date) {
		              if (new RegExp("(" + k + ")").test(format)) {
		                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
		                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		              }
		       }
		       return format;
			}
		</script>
	</body>

</html>