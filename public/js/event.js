/*页面中的效果*/	
/*导航设置*/
	function getFirst(){$('html,body').animate({'scrollTop':0},600)}
	function getChar(){$('html,body').animate({'scrollTop':totalheight},600)}
	function getAdva(){$('html,body').animate({'scrollTop':totalheight*Number(2)},600)}
	function getPro(){$('html,body').animate({'scrollTop':totalheight*Number(3)},600)}
	function getIntro(){$('html,body').animate({'scrollTop':totalheight*Number(4)},600)}
	function getData(){$('html,body').animate({'scrollTop':totalheight*Number(5)},600)}
	function getPart(){$('html,body').animate({'scrollTop':totalheight*Number(6)},600)}
	function getAbout(){$('html,body').animate({'scrollTop':totalheight*Number(7)},600)}
	function getConnect(){$('html,body').animate({'scrollTop':totalheight*Number(8)},600)}
	function goTop(){
		$('html,body').animate({'scrollTop':0},600);
	}


/*合作机构 start*/
$(".partner-ins dl dt img").mouseenter(function(){
	$(this).removeClass('gray');
});
$(".partner-ins dl dt img").mouseout(function(){
	$(this).addClass('gray');
});
$("#insurance").click(function(){
	$(this).removeClass('part-btn');
	$(this).addClass('part-btn-active');
	
	$("#hospital").addClass('part-btn');
	$("#hospital").removeClass('part-btn-active');
	
	$(".partner-ins").removeClass('div-hidden');
	$(".partner-ins").addClass('div-show');
	$(".partner-hos").addClass('div-hidden');
	$(".partner-hos").removeClass('div-show');
});
$("#hospital").click(function(){
	$(this).removeClass('part-btn');
	$(this).addClass('part-btn-active');
	
	$('#insurance').addClass('part-btn');
	$("#insurance").removeClass('part-btn-active');
	
	$(".partner-ins").removeClass('div-show');
	$(".partner-ins").addClass('div-hidden');
	$(".partner-hos").removeClass('div-hidden');
	$(".partner-hos").addClass('div-show');	
});
/*合作机构 end*/

/*特色医疗模块特效 start*/
	$(".char-content dl").mouseenter(function(){
		var bg = $(this).children('dd.char-con-bg');
		var dd_img = $(this).children('dt.char-con-img');
		var img = dd_img.children('img');
		var text = $(this).children('dd');
		$(this).children('dd.char-con-bg').animate({
			'height':'99%',
		},100);
		text.css({'color':'#ffffff'});
		imgsrc = img.attr('src');
		imgchange = img.attr('change');
		img.attr({'src':imgchange});
		img.attr({'change':imgsrc});
	})
	$(".char-content dl").mouseleave(function(){
		var bg = $(this).children('dd.char-con-bg');
		var dd_img = $(this).children('dt.char-con-img');
		var img = dd_img.children('img');
		var text = $(this).children('dd');
		$(this).children('dd.char-con-bg').animate({
			'height':'1%'
		},100);
		text.css({'color':'#000000'});
		imgsrc = img.attr('src');
		imgchange = img.attr('change');
		img.attr({'src':imgchange});
		img.attr({'change':imgsrc});
	})
/*特色医疗模块特效 end*/
	

		/*合作伙伴机构特效 start*/
		$(".partner-hos dl").mouseenter(function(){
			var bg = $(this).children('dd.partner-title-bg');
			var topbg = $(this).children('dd.partner-search');
			var text = $(this).children('dd.partner-con-title');
			text.css({'color':'#ffffff'});
			bg.animate({
				'height':'15%',
				'top':'85%',
			},800);
			topbg.animate({
				'height':'85%',
			},500);
		})
		$(".partner-hos dl").mouseleave(function(){
			var bg = $(this).children('dd.partner-title-bg');
			var topbg = $(this).children('dd.partner-search');
			var text = $(this).children('dd.partner-con-title');
			text.css({'color':'#000000'});
			bg.animate({
				'height':'1%',
				'top':'99%',
			},800);
			topbg.animate({
				'height':'0%',
			},500);
		})
		/*合作伙伴机构特效 end*/	
	
	
//	<!--百度地图start-->
//		var map = new BMap.Map("baidu-map-shagnyuan");
//		map.centerAndZoom(new BMap.Point(116.32004,39.945247), 11);
//		var local = new BMap.LocalSearch(map, {
//			renderOptions: {map: map}
//	  	});
//		local.search("海淀区西三环北路50号(紫竹桥东南角)");
		var map_nanjia = new BMap.Map("baidu-map-nanjia");
		map_nanjia.centerAndZoom(new BMap.Point(116.276992,39.947328), 11);
		var local = new BMap.LocalSearch(map_nanjia, {
			renderOptions: {map: map_nanjia}
	  	});
		local.search("北京南加门诊");
//	<!--百度地图end-->

//	<!--导航颜色start-->
	$(window).scroll(function(){
		var sTop = $(this).scrollTop();
		var f = $("#char")[0].offsetTop;
		var c = sTop-f;
		if(sTop>0 || c>0){
			$(".navbar").css({'background':"#ffffff"});
		}else{
			$(".navbar").css({'background':"rgba(0,0,0,0)"});
		}
	});
//	<!--导航颜色end-->



//		<!--项目介绍start-->
			$(".pro-content div").mouseenter(function(){
				$(this).css({"background":'#fb9861'});
				var pro_dl = $(this).children('dl');
				var dt_img = pro_dl.children('dt.pro-con-img');
				var img = dt_img.children('img');
				var change_img = img.attr('pro-change');
				var src_img = img.attr('src');
				pro_dl.children('.pro-con-content').css({'color':'#ffffff'});
				img.attr({'src':change_img});
				img.attr({'pro-change':src_img});
				
			})
			$(".pro-content div").mouseleave(function(){
				$(this).css({"background":'#ffffff'});
				var pro_dl = $(this).children('dl');
				var dt_img = pro_dl.children('dt.pro-con-img');
				var img = dt_img.children('img');
				var change_img = img.attr('pro-change');
				var src_img = img.attr('src');
				pro_dl.children('.pro-con-content').css({'color':'#000000'});
				img.attr({'src':change_img});
				img.attr({'pro-change':src_img});
			})
//		<!--项目介绍end-->
			
			
		/*数据库管理start*/
		$(window).scroll(function(){
			var sTop = $(this).scrollTop();
			var data =  $("#data")[0].offsetTop;
			var next = $("#part")[0].offsetTop;
			if(sTop >= data && sTop<next){
				$(".data-content-text").addClass('animated lightSpeedIn');
			}else{
				$(".data-content-text").removeClass('animated lightSpeedIn');
			}
		})
		/*数据库管理end*/
		
		/*标题特效 start*/
		$(window).scroll(function(){
			var sTop = $(this).scrollTop();
			var char_height = $("#char")[0].offsetTop;
			var adva_height = $("#adva")[0].offsetTop;
			var pro_height = $("#project")[0].offsetTop;
			var intro_height = $("#intro")[0].offsetTop;
			var data_height = $("#data")[0].offsetTop;
			var part_height = $('#part')[0].offsetTop;
			var about_height = $('#about')[0].offsetTop;
			var connect_height = $('#connect')[0].offsetTop;
//			var body_height = document.documentElement.clientHeight;
//			导航变成相应的样式
			if(sTop>=0 && sTop<char_height){
				$(".nav-ul1 a").removeClass("navbar-nav-former");
				$(".nav-ul1 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul1 a").removeClass("navbar-nav-active");
				$(".nav-ul1 a").addClass("navbar-nav-former");
			}
			if(sTop>=char_height && sTop<adva_height){
				$(".nav-ul2 a").removeClass("navbar-nav-former");
				$(".nav-ul2 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul2 a").removeClass("navbar-nav-active");
				$(".nav-ul2 a").addClass("navbar-nav-former");
			}
			if(sTop>=adva_height && sTop<pro_height){
				$(".nav-ul3 a").removeClass("navbar-nav-former");
				$(".nav-ul3 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul3 a").removeClass("navbar-nav-active");
				$(".nav-ul3 a").addClass("navbar-nav-former");
			}
			if(sTop>=pro_height && sTop<intro_height){
				$(".nav-ul4 a").removeClass("navbar-nav-former");
				$(".nav-ul4 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul4 a").removeClass("navbar-nav-active");
				$(".nav-ul4 a").addClass("navbar-nav-former");
			}
			if(sTop>=intro_height && sTop<data_height){
				$(".nav-ul5 a").removeClass("navbar-nav-former");
				$(".nav-ul5 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul5 a").removeClass("navbar-nav-active");
				$(".nav-ul5 a").addClass("navbar-nav-former");
			}
			if(sTop>=data_height && sTop<part_height){
				$(".nav-ul6 a").removeClass("navbar-nav-former");
				$(".nav-ul6 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul6 a").removeClass("navbar-nav-active");
				$(".nav-ul6 a").addClass("navbar-nav-former");
			}
			if(sTop>=part_height && sTop<about_height){
				$(".nav-ul7 a").removeClass("navbar-nav-former");
				$(".nav-ul7 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul7 a").removeClass("navbar-nav-active");
				$(".nav-ul7 a").addClass("navbar-nav-former");
			}
			if(sTop>=about_height && sTop<connect_height){
				$(".nav-ul8 a").removeClass("navbar-nav-former");
				$(".nav-ul8 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul8 a").removeClass("navbar-nav-active");
				$(".nav-ul8 a").addClass("navbar-nav-former");
			}
			if(sTop>=connect_height){
				$(".nav-ul9 a").removeClass("navbar-nav-former");
				$(".nav-ul9 a").addClass("navbar-nav-active");
			}else{
				$(".nav-ul9 a").removeClass("navbar-nav-active");
				$(".nav-ul9 a").addClass("navbar-nav-former");
			}
			var height_pre = totalheight*Number(0.5);
			var height_next = totalheight*Number(0.3);
			//标题特效
			if(sTop>char_height-height_pre && sTop<char_height+height_next){
				$(".character .title").addClass('animated bounceInDown');
			}else{
				$(".character .title").removeClass('animated bounceInDown');
			}
			if(sTop>adva_height-height_pre && sTop<adva_height+height_next){
				$(".adv-center-content h1").addClass('animated rollIn');
			}else{
				$(".adv-center-content h1").removeClass('animated rollIn');
			}
			if(sTop>pro_height-height_pre && sTop<pro_height+height_next){
				$(".project .title").addClass("animated bounce");
			}else{
				$(".project .title").removeClass("animated bounce");
			}
			if(sTop>intro_height-height_pre && sTop<intro_height+height_next){
				$(".introduction .title").addClass("animated fadeInDown");
			}else{
				$(".introduction .title").removeClass("animated fadeInDown");
			}
			if(sTop>data_height-height_pre && sTop<data_height+height_next){
				$(".databases .title").addClass("animated fadeInLeft");
			}else{
				$(".databases .title").removeClass("animated fadeInLeft");
			}
			if(sTop>part_height-height_pre && sTop<part_height+height_next){
				$(".partner .title").addClass("animated fadeInUp");
			}else{
				$(".partner .title").removeClass("animated fadeInUp");
			}
			if(sTop>about_height-height_pre && sTop<about_height+height_next){
				$(".about .title").addClass("animated zoomInUp");
			}else{
				$(".about .title").removeClass("animated zoomInUp");
			}
			if(sTop>connect_height-height_pre && sTop<connect_height+height_next){
				$(".connect .title").addClass("animated zoomIn");
			}else{
				$(".connect .title").removeClass("animated zoomIn");
			}
		})
		/*标题特效 end*/
