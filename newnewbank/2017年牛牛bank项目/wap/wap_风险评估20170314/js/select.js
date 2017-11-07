(function(){
	$('.choiceQuestion').on('click',function(){
		$(this).children('i').addClass('select-yes');
		$(this).siblings('.choiceQuestion').children('i').removeClass('select-yes');
	})				
})()