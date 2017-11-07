(function() {
	$(".common-red-border input").focus(function() {
		$(this).parents('.common-red-border').addClass('red-border');
	});
	$(".common-red-border input").blur(function() {
		$(this).parents('.common-red-border').removeClass('red-border');
	});

})();