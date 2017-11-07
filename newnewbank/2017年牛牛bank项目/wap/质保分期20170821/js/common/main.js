require(['config'],function(){
		
	var path=document.getElementById('requirePath').dataset.path;
	console.log(path);
	require([path]);	
	
})
