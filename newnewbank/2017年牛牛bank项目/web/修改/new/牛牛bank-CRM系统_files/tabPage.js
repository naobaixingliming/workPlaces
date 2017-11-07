
//页面tab切换函数
$(function(){
    var num = 0;
	//左侧菜单点击打开窗口
    $("body").on("click","[pageName]",function(){
    	var pageName;
        var that = $(this);
        var getUrl;
        var navName;
    	if($(this).attr("openMultiplePage")){
    		getUrl = $(this).attr("href"); //获取需要跳转的页面链接
            if(getUrl){
        		num++;
                pageName = that.attr("pageName")+num;  //获取pageName设置子页面id
            }
            navName = $(this).text();  //生成新开窗口菜单名字
            openMultiPage(pageName,getUrl,navName);
    		return false;
    	}else{
            getUrl = $(this).attr("href"); //获取需要跳转的页面链接
            if(getUrl){
                pageName = that.attr("pageName");  //获取pageName设置子页面id
            }
            navName = $(this).text();  //生成新开窗口菜单名字
            openOnePage(pageName,getUrl,navName);
            return false;
    	}
    }); 
    
    //子页面点击打开窗口
    $("body").on("click","[childPageName]",function(){
    	var pageName;
        var that = $(this);
        var getUrl;
        var navName;
        if($(this).attr("openMultiplePage")){
        	getUrl = $(this).attr("href");  //获取需要跳转的页面链接
            if(getUrl){
            	num++;
                pageName = that.attr("childPageName")+num; //获取pageName设置子页面id
            }
            navName = $(this).text();  //生成新开窗口菜单名字      
            iframeOpenMultiPage(pageName,getUrl,navName);
            return false;
        }else{
        	getUrl = $(this).attr("href");  //获取需要跳转的页面链接
            if(getUrl){
                pageName = that.attr("childPageName"); //获取pageName设置子页面id
            }
            navName = $(this).text();  //生成新开窗口菜单名字
            iframeOpenOnePage(pageName,getUrl,navName);
            return false;
        }
    });
    
    //打开单个页面
    function openOnePage(pageName,getUrl,navName){
        //判断是否已经打开这个页面
        if($("#"+pageName).size()>0){
            $(".nav-tabs li").removeClass("active");
            $(".nav-tabs li [href=#"+pageName+"]").parent("li").addClass("active");
            $(".tab-pane").removeClass("active");
            $("#"+pageName).addClass("active");
            return false;
        }else{ //生成新的窗口页面
            $(".nav-tabs li").removeClass("active");
            var newTabNav = '<li class="active"><a data-toggle="tab" href="#'+pageName+'">'+navName+'</a><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button></li>';
            $(".nav-tabs").append(newTabNav);
            $(".tab-pane").removeClass("active");
            var loadBox = $('<div id="'+pageName+'" class="tab-pane active"><div class="panel-body"><iframe name="'+pageName+'" frameborder="0" width="100%" style="min-height:828px;"></iframe></div></div>');
            loadBox.find(".panel-body iframe").attr("src",getUrl);
            $(".tab-content").append(loadBox);
        }       
        return false;
    }
    
    //打开多个页面
    function openMultiPage(pageName,getUrl,navName){
        //生成新的窗口页面
        $(".nav-tabs li").removeClass("active");
        var newTabNav = '<li class="active"><a data-toggle="tab" href="#'+pageName+'">'+navName+'</a><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button></li>';
        $(".nav-tabs").append(newTabNav);
        $(".tab-pane").removeClass("active");
        var loadBox = $('<div id="'+pageName+'" class="tab-pane active"><div class="panel-body"><iframe name="'+pageName+'" frameborder="0" width="100%" style="min-height:828px;"></iframe></div></div>');
        loadBox.find(".panel-body iframe").attr("src",getUrl);
        $(".tab-content").append(loadBox);
             
        return false;
    }
    
    //子页面按钮打开单个页面
    function iframeOpenOnePage(pageName,getUrl,navName){
    	//判断是否已经打开这个页面
        if($("#"+pageName,parent.document).size()>0){
            $(".nav-tabs li",parent.document).removeClass("active");
            $(".nav-tabs li [href=#"+pageName+"]",parent.document).parent("li").addClass("active");
            $(".tab-pane",parent.document).removeClass("active");
            $("#"+pageName,parent.document).addClass("active");
            return false;
        }else{ //生成新的窗口页面
            $(".nav-tabs li",parent.document).removeClass("active");
            var newTabNav = '<li class="active"><a data-toggle="tab" href="#'+pageName+'">'+navName+'</a><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button></li>';
            $(".nav-tabs",parent.document).append(newTabNav);
            $(".tab-pane",parent.document).removeClass("active");
            var loadBox = $('<div id="'+pageName+'" class="tab-pane active"><div class="panel-body"><iframe name="'+pageName+'" frameborder="0" width="100%" style="min-height:828px;"></iframe></div></div>');
            loadBox.find(".panel-body iframe").attr("src",getUrl);
            $(".tab-content",parent.document).append(loadBox);
        }       
        return false;
    }
    
    //子页面按钮打开多个页面
    function iframeOpenMultiPage(pageName,getUrl,navName){
    	//生成新的窗口页面
        $(".nav-tabs li",parent.document).removeClass("active");
        var newTabNav = '<li class="active"><a data-toggle="tab" href="#'+pageName+'">'+navName+'</a><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button></li>';
        $(".nav-tabs",parent.document).append(newTabNav);
        $(".tab-pane",parent.document).removeClass("active");
        var loadBox = $('<div id="'+pageName+'" class="tab-pane active"><div class="panel-body"><iframe name="'+pageName+'" frameborder="0" width="100%" style="min-height:828px;"></iframe></div></div>');
        loadBox.find(".panel-body iframe").attr("src",getUrl);
        $(".tab-content",parent.document).append(loadBox);
              
        return false;
    }

    //页面切换按钮点击事件
    $(".nav-tabs").on("click","li",function(){
        var hf = $(this).find("a").attr("href");
        var hfStr = hf.substring(1,hf.length);
        $("body [pageName]").removeClass("active");
    });

    //页面切换按钮双击事件
    $(".nav-tabs").on("dblclick","li",function(){
        var hf = $(this).find("a").attr("href");
        var hfStr = hf.substring(1,hf.length);
        $("body [pageName]").removeClass("active");
        $("[name='"+hfStr+"']")[0].contentWindow.location.reload(true);
    });
    
    //关闭按钮点击事件
    $(".nav-tabs").on("click",".close",function(){
        var removeNav = $(this).parents("li");    //获取需要删除的tab菜单
        var removeHref = $(this).prev().attr("href");   //获取当前点击菜单的href属性，跟内容盒子同名
        var removeId = removeHref.substring(1,removeHref.length);  //获取需要移除的内容盒子的id
        $(".nav-tabs li").removeClass("active");
        if(removeNav.index()>=$(".nav-tabs li").length-1){
            removeNav.prev().addClass("active");
            $("#"+removeId).prev().addClass("active");  //显示上一个内容盒子
        }else{
            removeNav.next().addClass("active");  //给下一个切换菜单添加样式
            $("#"+removeId).next().addClass("active");  //显示上一个内容盒子
        }
        $("body [pageName]").removeClass("active");
        removeNav.remove();    //删除切换菜单
        $("#"+removeId).remove();  //删除内容盒子
        return false;
    });

});