$(function(){	
	 var conTop = $(".head-nav-hd").outerHeight()+$(".head-logNav-hd").outerHeight();
	 // var conTop = $(".container").offset().top;
	 $("#outer").scroll(function(){
	 	leftMenuFn();
	 });
	 function leftMenuFn(){
	 	if($("#outer").scrollTop()<conTop){
	 		$(".au-left-menu").css("top","12px");
	 	}else if($("#outer").scrollTop()>=conTop && $("#outer").scrollTop()-conTop+$(".au-left-menu").height()<=$(".main-box").height()){
	 		$(".au-left-menu").css("top",$("#outer").scrollTop()-conTop);
	 	}else if($("#outer").scrollTop()-conTop+$(".au-left-menu").height()>$(".main-box").height()){
	 		$(".au-left-menu").css("top",$(".main-box").height()+conTop-$(".au-left-menu").height());
	 	}
	 }
})