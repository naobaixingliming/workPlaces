<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<#include "/common/meta.ftl">

		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<title>
				<@spring.message "web.user.title.message" />
			</title>

			<!--<link rel="stylesheet" type="text/css" href="${webpath}css/newWeb1.1.1/product-head-1.1.1.css">-->
			<!--<link rel="stylesheet" type="text/css" href="${webpath}css/newWeb1.1.1/product-list-1.1.1.css">
	<link rel="stylesheet" type="text/css" href="${webpath}css/guide/investmentok.css">
	<link rel="stylesheet" type="text/css" href="${webpath}css/base.css" />
	<link rel="stylesheet" type="text/css" href="${webpath}css/PersonCenter.css" />
	<link rel="stylesheet" type="text/css" href="${webpath}css/newWeb1.1.1/product-head-1.1.1.css" />
	<link rel="stylesheet" type="text/css" href="${webpath}css/bank/investProjectDetail.css" />-->

			<!--	<link rel="shortcut icon" href="https://www.newnewbank.com/logo.ico" type="image/x-icon">-->

			<link rel="stylesheet" type="text/css" href="https://www.newnewbank.com/css/newWeb1.1.1/product-head-1.1.1.css">
			<link rel="stylesheet" type="text/css" href="https://www.newnewbank.com/css/newWeb1.1.1/product-list-1.1.1.css">
			<link rel="stylesheet" type="text/css" href="https://www.newnewbank.com/css/guide/investmentok.css">
			<link rel="stylesheet" type="text/css" href="https://www.newnewbank.com/css/base.css" />
			<link rel="stylesheet" type="text/css" href="http://www.newnewbank.com/css/PersonCenter.css" />
			<link rel="stylesheet" type="text/css" href="https://www.newnewbank.com/css/v2/homeIndex/index-1.1.1.css" />
			<link rel="stylesheet" type="text/css" href="css/investProjectDetail.css" />

		</head>

		<body class="page-bg">
			<#assign headIndex=5>
				<#include "/common/head.ftl">
					<#assign accountIndex=1>
						<!--  投资理财列表内容start  -->
						<div class="product-wrap">
							<div class="pro-top-img" id="bannerImg" style="width: 100%;height: 301px; margin: 0 auto;background: url(https://images-web.oss-cn-hangzhou.aliyuncs.com/web_comproduct_topImg_20161114.jpg) no-repeat center top;"></div>
							<div class="pro-con-box">
								<div id="menuList">
									<#if dataView.userPayAccountVo??>
										<!--  投资理财列表导航菜单start  -->
										<div class="proMenuWrap" id="menu-else">
											<div class="userCenter bgf9 mb12" style="background-color:#fff ;">
												<div class="usertext" style=" border-right: dashed 2px #e6e5e5;   margin-left: 30px;width:35% ;display: inline-block;">
													<ul>
														<li class="c6 c7">欢迎您
															<#if dataView.UserCenterVo.displayName??>,${dataView.UserCenterVo.displayName}</#if>
														</li>
														<li class="userVoteLi">
															<div class="ico_wrap">
																<div class="poptip-ico ico1-o">
																	<div class="poptip">
																		<span class="poptip-arrow poptip-arrow-bottom" style="left:50%;">
											<em>◆</em>
											<i>◆</i>
										</span>
																		<p>您已通过第三方实名认证</p>
																		<a href="http://tp.newnewbank.com/myAccount/accountSet.shtml">查看详情</a>
																	</div>
																</div>
																<div class="poptip-ico ico2-o">
																	<div class="poptip">
																		<span class="poptip-arrow poptip-arrow-bottom" style="left:50%;">
											<em>◆</em>
											<i>◆</i>
										</span>
																		<p>您已绑定手机 151****0321</p>
																		<a href="http://tp.newnewbank.com/myAccount/accountSet.shtml">管理</a>
																	</div>
																</div>

																<div class="poptip-ico ico3">
																	<div class="poptip">
																		<span class="poptip-arrow poptip-arrow-bottom" style="left:50%;">
										<em>◆</em>
										<i>◆</i>
									</span>

																		<p>您还未绑定邮箱</p>
																		<a href="http://tp.newnewbank.com/myAccount/accountSet.shtml">去认证</a>
																	</div>
																</div>

																<div class="poptip-ico ico4-o">
																	<div class="poptip">
																		<span class="poptip-arrow poptip-arrow-bottom" style="left:50%;">
											<em>◆</em>
											<i>◆</i>
										</span>
																		<p>您已绑定银行卡</p>
																		<a href="http://tp.newnewbank.com/myAccount/accountSet.shtml">查看详情</a>
																	</div>
																</div>

															</div>
														</li>
														<li>
															<strong style="font-size:16px; font-weight:normal; color:#666;">安全等级：</strong>
															<span class="c9" style="left: 130px;bottom: 26px;">
								<b class="c10 c12"></b>
								<b class="c10 c12"></b>
								<b class="c10 c12"></b>
								<b class="c10 c14"></b>
							</span>
															<p class="c14" style="left: 290px;bottom: 26px;">中</p>
														</li>
													</ul>
												</div>

												<!--投资金额  2016-11-14 start -->
												<div class="incomeCalculation" style="float: right;margin-right:460px ;color: #b2aeae;font-size: 16px;">
													<p>
														<a>可用余额：</a>
														<a style="font-size: 24px;color:#F44975;">${dataView.userPayAccountVo.availableFund?string('###,###,###.00')} </a>元</p>
													<p>
														<a>待收本金：</a>
														<a style="font-size: 24px;color:#F44975;">${dataView.userPayAccountVo.lendCapital?string('###,###,###.00')} </a>元</p>
													<p>
														<a>待收收益：</a>
														<a style="font-size: 24px;color:#F44975;">${dataView.userPayAccountVo.lendIncome?string('###,###,###.00')}</a>元</p>
												</div>

												<!--投资金额  2016-11-14 end -->
												<div class="userBtn" style="right:50px ;">
													<!--<div class="comnonbtn btn5"><a href="http://tp.newnewbank.com/autoInvest/toView.shtml">自动投标</a></div>-->
													<div class="comnonbtn btn2">
														<a href="http://tp.newnewbank.com/newRecahrge/toView.shtml">充值</a>
													</div>
													<div class="comnonbtn btn3">
														<a href="http://tp.newnewbank.com/newCash/toView.shtml">提现</a>
													</div>
													<a href="#" style="color:#b8b8b8;text-decoration: underline;margin-top:15px ;font-size: 14px;">进入新浪支付个人中心 ></a>
												</div>
											</div>

											<div class="f9f9f9" style="background-color:#f9f9f9 ;margin:0 5px;padding: 4px;position: relative;">
												<div class="" style="color: #999999;margin: 20px;">
													广东华兴银行是经国务院有关部委批准，依法创新设立的一家混合所有制商业银行，注册资本50亿。2016年11月，牛牛bank与华兴银行签署合作协议， 双方将在账户管理体系、资金结算体系等领域展开深度合作。牛牛bank负责平台系统对接，华兴银行负责用户账户监管和资金存管功能。今后，牛牛 bank选择在广东华兴银行开立个人账户的用户，从账户资金流到资金结算环节均由华兴银行全程监管。
												</div>
												<img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/huaxinBank20161115.png" style="position: absolute;top:90px;right: 25px;zoom:0.8 ;" />
											</div>

										</div>
										<!--  投资理财列表导航菜单end  -->
										<#else>
											<!-- 未登录  投资理财列表导航菜单 satrt  -->
											<div class="notLog" style="width: 1198px;height: 262px;border: 1px solid #dfdfdf;border-radius: 5px;background: #FFFFFF;">
												<div class="leftDiv" style="position: relative;width:45% ;height: 92%; background-color:#f9f9f9 ;margin:10px 0 10px 5px ;display: inline-block;">
													<img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/huaxinBank20161115.png" style="position: absolute;top:20px;left: 40px;zoom:0.8 ;" />
													<p style="color: #c9c9c9;line-height: 23px;position: absolute;top: 20px; padding: 40px;">广东华兴银行是经国务院有关部委批准，依法创新设立的一家混合所有制商业银行， 注册资本50亿。2016年11月，牛牛bank与华兴银行签署合作协议，双方将在账户 管理体系、资金结算体系等领域展开深度合作。牛牛bank负责平台系统对接，华兴银 行负责用户账户监管和资金存管功能。今后，牛牛bank选择在广东华兴银行开立个人账 户的用户，从账户资金流到资金结算环节均由华兴银行全程监管。
													</p>
												</div>
												<div class="RirhtDiv" style="float: right;width:50% ;">
													<div class="oneLine">
														<div class="lineIcon">
															<p class="iconSprit"></p>
															<a style="font-size: 12px;">监管合规</a>
														</div>
														<div class="lineIcon">
															<p class="iconSprit2"></p>
															<a style="font-size: 12px;">资金透明</a>
														</div>
														<div class="lineIcon">
															<p class="iconSprit3"></p>
															<a style="font-size: 12px;">特别推荐</a>
														</div>
													</div>
													<p class="text22">开通银行资金托管账户，再为您的资金安全加把锁！</p>
													<p class="openingButton">我要开户</p>
												</div>
											</div>
											<!-- 未登录  投资理财列表导航菜单 end  -->
									</#if>

								</div>
								<!--  产品列表主体内容start  -->
								<div class="pro-main-box clearfix">

									<h4 style="color: #222;font-size: 18px;font-family: 'microsoft yahei';font-weight: lighter;margin: 40px 0 20px 20px;">银行托管理财</h4>
									<!--  增加 2016-11-14 start 银行产品 -->
									<div class="w908 fl" style="border:1px solid #DFDFDf ;  border-top:2px solid #ed97ad!important; position:relative;height: 280px;width:920px ;">
										<div class="area-right-top">
											<p><i class="area-icon03" style="background-image: url(http://images-web.oss-cn-hangzhou.aliyuncs.com/web_icon20161114.png)"></i>全程银行监管，资金流向更透明</p>
										</div>

										<#if dataView.bankRecList??&&dataView.bankRecList?size&gt;0>
											<#list dataView.bankRecList as proDetail>
												<div class="w458 fl" style="position:relative;height:195px ;">
													<!--<div class="news-line"></div>-->
													<!-- 1 -->
													<div class="pr-index-x clearfix" style="cursor:pointer;width:408px ;padding: 25px 30px 15px 20px;border-right: 2px dashed #DFDFDf;" onclick="forward('${webpath}myMoney/${proDetail.detailId}/investProjectDetail.shtml')">
														<h3 class="fl">
	                <i class="xing"></i>                
	                <a class="title-text-s" style="font-size: 18px;" href="${webpath}myMoney/${proDetail.detailId}/investProjectDetail.shtml">
	                    	${proDetail.title}
	                </a>
	                </h3>
														<div class="fr obj-time">项目期限：${proDetail.investmentCycle}天</div>
														<div class="clear"></div>
														<div class="news-year fl">年化收益率：<span>${proDetail.interestRate}<i>%</i></span></div>
														<div class="fr news-now-btn all-btns">
															<a href="${webpath}myMoney/${proDetail.detailId}/investProjectDetail.shtml" btn-triggle="expandUp" style="background:#f44975">
																立即购买 </a>
														</div>
													</div>
												</div>
											</#list>
										</#if>
									</div>
								</div>
								<!--  增加 2016-11-14 end   银行产品-->

								<div class="rightIcon" style="width: 278px;float: right;"><img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/web_iconRight20161115.jpg" style="height: 284px;" /></div>

								<!--  左侧盒子start 新浪产品 -->
								<div class="pro-left-box fl" id="productList">

									<!--  产品列表start  -->
									<div class="pro-list-box">
										<h4 style="color: #222;font-size: 18px;font-family: 'microsoft yahei';font-weight: lighter;margin-left:20px ;">新浪推荐理财</h4>
										<ul class="pro-list">
											<#if dataView.sinaRecList??&&dataView.sinaRecList?size&gt;0>
												<#list dataView.sinaRecList as proDetail>
													<li>
														<a href='${webpath}myMoney/${proDetail.detailId}/investProjectDetail.shtml'>
															<div class='pro-box-top'>
																<h4>${proDetail.title}</h4><span>${proDetail.advertise}</span>
																<div class='coupon-tips'>
																	<#if proDetail.isCoupon==1>
																		<span>现金券</span>
																	</#if>
																	<#if proDetail.isInterest==1>
																		<span>加息券</span>
																	</#if>
																</div>
															</div>
															<div class='pro-info clearfix'>
																<div class='column01 fl'>
																	<p>${proDetail.interestRate}%</p><span>年化收益率</span></div>
																<div class='column02 fl'>
																	<p>${proDetail.investmentCycle}天</p><span>投资周期</span></div>
																<div class='column03 fl'>
																	<p> ${proDetail.amount/10000}万元</p><span>融资金额</span></div>
																<div class='column04 fl'>
																	<div class='progress-wrap clearfix'>
																		<div class='line-progress fl'>
																			<div class='progress-finished' style='width:${proDetail.schedule}%'><i></i></div>
																		</div>
																		<span class='fl'>${proDetail.schedule?string('##.##')}%</span>
																	</div>
																	<p>剩余可投金额：<span>${proDetail.amount-proDetail.sellAmount}</span>元</p>
																</div>
																<div class='column05 fl timeDowns'>
																	<span class='pro-btn pro-buy-now'><a href='${webpath}myMoney/${proDetail.detailId}/investProjectDetail.shtml'>立即购买</a></span> </div>
															</div>
														</a>
													</li>
												</#list>
											</#if>
										</ul>
									</div>
									<!--  产品列表end   新浪产品-->

								</div>
								<!--  左侧盒子end  -->
								<!--  右侧盒子start  -->
								<div class="pro-right-box fl">
									<!--  推荐产品start  -->
									<div id="recommend">
										<!--  推荐产品end  -->
										<!--  回款公告start  -->
										<div id="notice">
											<div class='r-con-wrap'>
												<h4>回款公告</h4>
												<div class='r-con-box notice-box'>
													<table cellspacing='0' cellpadding='0'>
														<thead>
															<tr>
																<th>项目名称</th>
																<th>回款时间</th>
															</tr>
														</thead>
														<tbody>
															<#if dataView.noticeList??&&dataView.noticeList?size&gt;0>
																<#list dataView.noticeList as notice>
																	<#if notice_index%2!=0>
																		<tr class="even">
																			<td>
																				<a href="${webpath}myMoney/${notice.detailId}/investProjectDetail.shtml">${notice.detailName}</a>
																			</td>
																			<td>${notice.lastRepaymentDate?string('yyyy/MM/dd')}</td>
																		</tr>
																		<#else>
																			<tr class="odd">
																				<td>
																					<a href="${webpath}myMoney/${notice.detailId}/investProjectDetail.shtml">${notice.detailName}</a>
																				</td>
																				<td>${notice.lastRepaymentDate?string('yyyy/MM/dd')}</td>
																			</tr>
																	</#if>
																</#list>
																<#else>
																	<tr class="odd">
																		<td colspan="2">暂无数据</td>
																	</tr>
															</#if>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<!--  回款公告end  -->
									</div>
									<!--  右侧盒子end  -->
								</div>
								<!--  产品列表主体内容end  -->
							</div>

							<!--增加20161025  项目合同  start  -->
							<h4 style="color: #222;font-size: 18px;font-family: 'microsoft yahei';font-weight: lighter;margin: 40px 0 20px 20px;">银行委托协议书</h4>
							<div class="common-box" id="ids3">
								<span id="productContract">
									<div class="c-sm-box01 clearfix" style="width: 1198px;border: 1px solid #dddddd;border-radius: 4px;">	
										<div class="myht">
											<div class="ht">
												<div class="r-big-box">										
													<div class="r-box">
														<div class="contract-wrap">
															<div class="contract-box">
																<ul id="ulsmall" class="clearfix" style="width: 300%; left: 0px;">
																	<li><img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/web_icon20161115_01.jpg"></li>
																	<li><img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/web_icon20161115_02.jpg"></li>
																	<li><img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/web_icon20161115_03.jpg"></li>
																</ul>
															</div>
															<div class="page-icon">
																
															</div>
														</div>
														<!--<a class="prev-contract" href="javascript:;" style="display: block;"></a>
														<a class="next-contract" href="javascript:;"></a>-->
													</div>
												</div>
												<!--  显示放大合同start-->
												<div class="shadow"></div>
												<div class="show-big-contract">
													<h4 class="sbc-tit">保理合同</h4>
													<div class="sbc-img-box">
														<ul class="clearfix" id="ulBig" style="width: 300%;">
															<!--http://images-web.oss-cn-hangzhou.aliyuncs.com/huaxinBank20161115.png-->
															<li><img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/web_icon20161115_01.jpg"></li>
															<li><img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/web_icon20161115_02.jpg"></li>
															<li><img src="http://images-web.oss-cn-hangzhou.aliyuncs.com/web_icon20161115_03.jpg"></li>
														</ul>
													</div>
													<a class="sbc-prev" href="javascript:;" style="display: none;"></a>
													<a class="sbc-next" href="javascript:;"></a>
													<a class="sbc-close" href="javascript:;"></a>
												</div>
											</div>
											<!--  显示放大合同end  -->
										</div>
										<!--  合同文件end  -->
									</div>
								</span>
							</div>
					</div>
							<#include "common/htmlFooter.ftl">
							<#include "common/common.ftl">
							<script type="text/javascript" src="https://www.newnewbank.com/js/newWeb/jquery.public.js"></script>
							<script>
								$(function() {
									for(var i = 0; i < $(".myht").find(".ht").length; i++) {
										hetong($(".myht").find(".ht").eq(i)); //循环调用合同
									}
								})
							</script>
		</body>

</html>
<!--统计-->
<div style="display:none;">
	<script type="text/javascript">
		try {
			var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " https://");
			document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fd2e2acd3dca23a5a68c9fdfbcaac24c1' type='text/javascript'%3E%3C/script%3E"));
		} catch(err) {

		}
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

		try {
			ga('create', 'UA-71441885-1', 'auto');
			ga('send', 'pageview');
		} catch(e) {}
	</script>
</div>
<!--统计 end-->