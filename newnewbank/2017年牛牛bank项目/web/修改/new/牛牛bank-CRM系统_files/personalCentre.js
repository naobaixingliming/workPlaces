$("body").on('click','#addresUp',function(){
	var sheng=$("#address").attr("sheng");
	var shi=$("#address").attr("shi");
	var qu=$("#address").attr("qu");
	$("#sheng").empty();
	$("<option value=\"0\">请选择省/市</option>").appendTo($("#sheng"));
	$.each(GP,function(n,ele){
			if(sheng==ele){
				$("<option value="+sheng+" selected>"+sheng+"</option>").appendTo($("#sheng"));
			}else{
				$("<option value="+ele+">"+ele+"</option>").appendTo($("#sheng"));
			}
		}
	);
	
	//清空地区下拉列表
	if(shi!=""){
		$("#shi").empty();
		$("<option value=\"0\">请选择市/地区</option>").appendTo($("#shi"));
		$.each(GC1[$("#sheng option:selected").html()],function(n,ele){
			if(shi==ele){
				$("<option value="+shi+" selected>"+shi+"</option>").appendTo($("#shi"));
			}else{
				$("<option value="+ele+">"+ele+"</option>").appendTo($("#shi"));
			}
		});
	}else {
		$("#shi").empty();
		$("<option value=\"0\">请选择市/地区</option>").appendTo($("#shi"));
		
	}
	
	if(qu!=""){
		//清空市县下拉列表
		$("#qu").empty();
		$("<option value=\"0\">请选择县/市</option>").appendTo($("#qu"));
		$.each(GC2[$("#sheng option:selected").html()][$("#shi option:selected").html()],function(n,ele){
			if(qu==ele){
				$("<option value="+qu+" selected>"+qu+"</option>").appendTo($("#qu"));
			}else{
				$("<option value="+ele+">"+ele+"</option>").appendTo($("#qu"));
			}
		});
	} else {
		$("#qu").empty();
		$("<option value=\"0\">请选择县/市</option>").appendTo($("#qu"));
	}
	
	
	
});

//用户地址设置
$(function(){
	//省、地区、市县、街道四级联动下拉列表，初始只有前3个，只有当前3个都选中，并且存在街道列表的时候才显示第4级下拉列表
	init();sel();
	function init(){
		//初始化 省份下拉列表里面列出所有可选省份，地区下拉列表清空，市县下拉列表清空
		$("#sheng").empty();
		$("<option value=\"0\">请选择省/市</option>").appendTo($("#sheng"));

		 
		//清空地区下拉列表
		$("#shi").empty();
		$("<option value=\"0\">请选择市/地区</option>").appendTo($("#shi"));

		
	
		//清空市县下拉列表
		$("#qu").empty();
		$("<option value=\"0\">请选择县/市</option>").appendTo($("#qu"));
	
		//如果有街道列表则删除，因为此时还没有必要显示街道列表
		if($("#zhen").length > 0){
			$("#zhen").remove();
		}
	}
	function sel(){
			//省份下拉列表改变的时候调用的方法，此时联动把地区内容显示到地区下拉列表中
		$("#sheng").change(
			function(){
				
				//把数组中的地区数据显示到地区列表中
				$("#shi").empty();
				$("<option value=\"0\">请选择市/地区</option>").appendTo($("#shi"));
				$.each(GC1[$("#sheng option:selected").html()],function(n,ele){
						$("<option value="+ele+">"+ele+"</option>").appendTo($("#shi"));
					}
				);
	
				//清空县市下拉列表
				$("#qu").empty();
				$("<option value=\"0\">请选择县/市</option>").appendTo($("#qu"));
	
				//如果有街道列表则删除，因为此时还没有必要显示街道列表
				if($("#zhen").length > 0)
						$("#zhen").remove();
			}
		);
	}
	//地区下拉列表改变的时候调用的方法，此时联动把县市内容显示到下拉列表中
	$("#shi").change(
		function(){
			//把数组中的县市数据追加到列表中
			$("#qu").empty();
			$("<option value=\"0\">请选择县/市</option>").appendTo($("#qu"));
			$.each(GC2[$("#sheng option:selected").html()][$("#shi option:selected").html()],function(n,ele){
					$("<option value="+ele+">"+ele+"</option>").appendTo($("#qu"));
				}
			);
			
			//如果有街道列表则删除，因为此时还没有必要显示街道列表
			if($("#zhen").length > 0)
					$("#zhen").remove();
		}
	);
});
 
 


 

		
		

			











