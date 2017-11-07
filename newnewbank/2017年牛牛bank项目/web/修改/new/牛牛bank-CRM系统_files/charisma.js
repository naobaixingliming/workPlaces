$(document).ready(function(){
	//themes, change CSS with JS
	//default theme(CSS) is cerulean, change it if needed
	var current_theme = $.cookie('current_theme')==null ? 'cerulean' :$.cookie('current_theme');
	switch_theme(current_theme);
	
	$('#themes a[data-value="'+current_theme+'"]').find('i').addClass('icon-ok');
				 
	$('#themes a').click(function(e){
		e.preventDefault();
		current_theme=$(this).attr('data-value');
		$.cookie('current_theme',current_theme,{expires:365});
		switch_theme(current_theme);
		$('#themes i').removeClass('icon-ok');
		$(this).find('i').addClass('icon-ok');
	});
	
	
	function switch_theme(theme_name)
	{
		$('#bs-css').attr('href',web_context + 'css/bootstrap-'+theme_name+'.css');
	}
	
	//highlight current / active link
	$('ul.main-menu li a').each(function(){
		if($($(this))[0].href==String(window.location))
			$(this).parent().addClass('active');
	});
	
	$('.ajax-link').click(function(e){
		var str=$(this).attr("href");
		var index=str.indexOf("javascript:");
		if(index>0){
			var script=str.substring(index);
			eval(script);
			return false;
		}else{			
			return loadContent($(this),true);
		}
	});
	
	$(".pageLink").click(function(e){
		return loadContent($(this),false);
	});
	
});
		
function loadContent($clink,showMenu){
	$('#loading').remove();
	$('#content').data("clink",$clink);
	$('#content').data("showMenu",showMenu);
	$('#content').fadeOut().parent().append('<div id="loading" class="center">Loading...<div class="center"></div></div>');
	if(showMenu){
		$('ul.main-menu li.active').removeClass('active');
		$clink.parent('li').addClass('active');	
	}
	
	$("#content").load($clink.attr('href'),{rn:new Date().getTime()},function(){
		$('#loading').remove();
		$(".pageLink").click(function(e){
			return loadContent($(this),false);
		});
		try{
			var newTitle = $(msg).filter('title').text();
			$('title').text(newTitle);
		}catch(e){}
	}).fadeIn();
	
	return false;
}

function loadContentByBtn(url,data){
	if($('#loading')){
		$('#loading').remove();	
	}
	$('#content').fadeOut().parent().append('<div id="loading" class="center">Loading...<div class="center"></div></div>');
	$("#content").load(url,data,function(){
		if($('#loading')){
			$('#loading').remove();	
		}
		$(".pageLink").click(function(e){
			return loadContent($(this),false);
		});
		try{
			var newTitle = $(msg).filter('title').text();
			$('title').text(newTitle);
		}catch(e){}
	}).fadeIn();
	return false;
}

function loadContentBySrch(url,data){
	if($('#loading')){
		$('#loading').remove();	
	}
	$('#content').fadeOut().parent().append('<div id="loading" class="center">Loading...<div class="center"></div></div>');
	$("#content").load(url,data,function(){
		if($('#loading')){
			$('#loading').remove();	
		}
		try{
			var newTitle = $(msg).filter('title').text();
			$('title').text(newTitle);
		}catch(e){}
	}).fadeIn();
	return false;
}

function loadModel(inputUrl,inputwidth){
	$.ajax({
		url:inputUrl+"?fresh=" + Math.random(),
		data:{rn:new Date().getTime()},
		success:function(msg){
			$("#myModal").html($(msg));
			if(inputwidth){
				$('#myModal').width(inputwidth);
			}
			$('#myModal').modal('show');
			return false;
		}
	});
}


function loadModelUpdate(inputUrl,inputwidth,id){
	$.ajax({
		url:inputUrl+"?fresh=" + Math.random(),
		data:{id:id,rn:new Date().getTime()},
		success:function(msg){
			$("#myModal").html($(msg));
			if(inputwidth){
				$('#myModal').width(inputwidth);
			}
			$('#myModal').modal('show');
			return false;
		}
	});
}



