$(function(){
	var getTimestamp=new Date().getTime();
	//填充banner
	$.ajax({
		type:"GET",
		url:"json/indexBanner.json?"+getTimestamp,
		dataType:"json",
		success:function(data){
			var bannerStr;
			for(var i in data){
				bannerStr+='<div class="swiper-slide"><a href="'+data[i].pageName+'"><img src="'+data[i].src+'" /></a></div>';
			}
			$(".banner_box .swiper-wrapper").append(bannerStr);
			tabBanner();
		}
	});

	//填充热卖产品
	$.ajax({
		type:"GET",
		url:"json/indexSellingPro.json?"+getTimestamp,
		dataType:"json",
		success:function(data){
			var sellingProStr,proTypeNum,iconClassName;
			for(var i in data){
				proTypeNum = parseInt(data[i].proType);  
				switch(proTypeNum){
					case 1:
						iconClassName="yi";
						break;
					case 2:
						iconClassName="shi";
						break;
					case 3:
						iconClassName="zhu";
						break;
					case 4:
						iconClassName="xing";
						break;
					case 5:
						iconClassName="edc";
						break;
					case 6:
						iconClassName="medical";
						break;
					case 7:
						iconClassName="yu";
						break;
					case 8:
						iconClassName="shou";
						break;
					case 9:
						iconClassName="yinpiao";
						break;
					case 10:
						iconClassName="baoli";
						break;
					case 11:
						iconClassName="zunin";
						break;
				}
				sellingProStr+='<div class="swiper-slide">\
			                      <a href="javascript:;">\
			                          <div class="selling_inner">\
			                              <h2><span class="'+iconClassName+'">&nbsp;</span>'+data[i].proName+'</h2>\
			                              <ul>\
			                                 <li>\
			                                     <span class="mainTextColor"><strong>'+data[i].interestRate+'</strong>%</span>\
			                                     <p>年化收益率</p>\
			                                 </li>\
			                                 <li>\
			                                     <span>'+data[i].investmentCycle+'天</span>\
			                                     <p>投资周期</p>\
			                                 </li>\
			                                 <li>\
			                                     <span>'+data[i].proAmount+'万元</span>\
			                                     <p>融资金额</p>\
			                                 </li>\
			                              </ul>\
			                          </div>\
			                          <div class="selling-bottom">\
			                              <div class="trait"><img src="images/highYield_icon_20160524.png" /></div>\
			                              <div class="trait"><img src="images/safety_icon_20160524.png" /></div>\
			                              <div class="selling_buy btn_mainColor">立即抢购</div>\
			                          </div>\
			                      </a>\
			                  </div>';
			}
			$(".selling_box .swiper-wrapper").append(sellingProStr);
  			tabSelling();
		}
	});

  //banner切换
  function tabBanner(){
    var bannerSwiper = new Swiper('.banner_container', {
        autoplay: 5000,//可选选项，自动滑动
        loop:true,
        pagination : '.swiper-pagination'
    });
  }
  
  //热卖产品切换
  function tabSelling(){
    var sellingSwiper = new Swiper('.selling_container', {
        slidesPerView: "auto",  //设置slider容器能够同时显示的slides数量
        centeredSlides:true,   //设定为true时，活动块会居中，而不是默认状态下的居左
        watchSlidesProgress:true,  //开启这个参数来计算每个slide的progress(进度)，Swiper的progress无需设置即开启
        roundLengths : true,    //设定为true将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字或边界(border)模糊
        initialSlide :1,   //默认显示第二个
        loop:true,    //开启循环模式
        onProgress: function(swiper,progress){   //回调函数，当Swiper的progress被改变时执行。接受Swiper实例和progress作为参数（可选）
          var b,c,d;
          for(b=0;b<swiper.slides.length;b++){
            c=swiper.slides[b],d=c.progress.toFixed(0),scale=1-Math.min(Math.abs(.2*d),1),
            es=c.style,
            es.opacity=1-Math.min(Math.abs(d/2),1),
            es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="translate3d(0px,0,0px)";
          }
        },
        onSetTransition: function(swiper,transiton){  //回调函数，每次当Swiper开始过渡动画时持续执行。transtion获取到的是Swiper的speed值
          for(var c=0;c<swiper.slides.length;c++){
            es=swiper.slides[c].style,
            es.webkitTransitionDuration=es.MsTransitionDuration=es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=transiton+"ms";
          }
        }
    })
  }
});
