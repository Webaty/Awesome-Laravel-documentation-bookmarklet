var WebatyLaravelDocumentation = {
	'lastUrl': false,
	'fire': function(){
		var Webaty = this;
		Webaty.lastUrl = Webaty.getCleanUrl(window.location.href);
		$('<style type="text/css">@media (max-width:900px){.webaty-sidebar{display:none}nav.main a.brand{display:block!important}}nav.main a.brand{display:none}.webaty-sidebar ul li a{display:block}.webaty-sidebar ul li a:hover{color:#666}.webaty-current{background-color:#f4645f}.webaty-sidebar ul li.webaty-current a,.webaty-sidebar ul li.webaty-current a:visited,.webaty-sidebar ul li.webaty-current a:hover,.webaty-sidebar ul li.webaty-current a:active{color:#FFF}.webaty-loader{position:fixed;left:50%;top:50px;z-index:9999999;font-size:90px;text-indent:-9999em;overflow:hidden;width:1em;height:1em;border-radius:50%;margin:.8em auto;-webkit-animation:load6 1.7s infinite ease;animation:load6 1.7s infinite ease}@-webkit-keyframes load6{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);box-shadow:-.11em -.83em 0 -.4em #F4645F,-.11em -.83em 0 -.42em #F4645F,-.11em -.83em 0 -.44em #F4645F,-.11em -.83em 0 -.46em #F4645F,-.11em -.83em 0 -.477em #fff}5%,95%{box-shadow:-.11em -.83em 0 -.4em #F4645F,-.11em -.83em 0 -.42em #F4645F,-.11em -.83em 0 -.44em #F4645F,-.11em -.83em 0 -.46em #F4645F,-.11em -.83em 0 -.477em #fff}30%{box-shadow:-.11em -.83em 0 -.4em #F4645F,-.51em -.66em 0 -.42em #F4645F,-.75em -.36em 0 -.44em #F4645F,-.83em -.03em 0 -.46em #F4645F,-.81em .21em 0 -.477em #fff}55%{box-shadow:-.11em -.83em 0 -.4em #F4645F,-.29em -.78em 0 -.42em #F4645F,-.43em -.72em 0 -.44em #F4645F,-.52em -.65em 0 -.46em #F4645F,-.57em -.61em 0 -.477em #fff}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);box-shadow:-.11em -.83em 0 -.4em #F4645F,-.11em -.83em 0 -.42em #F4645F,-.11em -.83em 0 -.44em #F4645F,-.11em -.83em 0 -.46em #F4645F,-.11em -.83em 0 -.477em #fff}}@keyframes load6{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);box-shadow:-.11em -.83em 0 -.4em #F4645F,-.11em -.83em 0 -.42em #F4645F,-.11em -.83em 0 -.44em #F4645F,-.11em -.83em 0 -.46em #F4645F,-.11em -.83em 0 -.477em #fff}5%,95%{box-shadow:-.11em -.83em 0 -.4em #F4645F,-.11em -.83em 0 -.42em #F4645F,-.11em -.83em 0 -.44em #F4645F,-.11em -.83em 0 -.46em #F4645F,-.11em -.83em 0 -.477em #fff}30%{box-shadow:-.11em -.83em 0 -.4em #F4645F,-.51em -.66em 0 -.42em #F4645F,-.75em -.36em 0 -.44em #F4645F,-.83em -.03em 0 -.46em #F4645F,-.81em .21em 0 -.477em #fff}55%{box-shadow:-.11em -.83em 0 -.4em #F4645F,-.29em -.78em 0 -.42em #F4645F,-.43em -.72em 0 -.44em #F4645F,-.52em -.65em 0 -.46em #F4645F,-.57em -.61em 0 -.477em #fff}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);box-shadow:-.11em -.83em 0 -.4em #F4645F,-.11em -.83em 0 -.42em #F4645F,-.11em -.83em 0 -.44em #F4645F,-.11em -.83em 0 -.46em #F4645F,-.11em -.83em 0 -.477em #fff}}</style>').appendTo($('head'));
		$('body').prepend($('.container .sidebar').clone().css({'position':'fixed', 'background-color':'#FFFFFF', 'z-index':'9999999', 'left':'0', 'top':'0', 'overflow-y':'scroll', 'height':$(window).height() + 'px'}).addClass('webaty-sidebar').prepend($('nav.main a.brand').clone()));
		$('.container .sidebar').remove();
		$(window).resize(function(){
			Webaty.sideBar().css('height', $(window).height() + 'px');
		});
		Webaty.sideBar().find('ul li a').click(function(){
			Webaty.loadPage(this);
			return false;
		});
		Webaty.articleLinks();
		Webaty.sideBar().bind( 'mousewheel DOMMouseScroll', function ( e ) {
			var e0 = e.originalEvent,
				delta = e0.wheelDelta || -e0.detail;
			this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
			e.preventDefault();
		});
		window.onpopstate = function(e) {
			if(e.state){
				if(Webaty.getCleanUrl(Webaty.getQualifyURL(e.state.url)) != Webaty.lastUrl){
					Webaty.setCurrentPage(e.state.url);
				}
			}else{
				if(Webaty.getCleanUrl(window.location.href) != Webaty.lastUrl){
					Webaty.setCurrentPage(window.location.href);
				}
			}
		};
	},
	'getQualifyURL': function(url){
		var link = $('<a />').attr('href', url);
		url = link.prop('href');
		link.remove();
		return url;
	},
	'sideBar': function(){
		return $('.webaty-sidebar');
	},
	'siderBarURLs': function(){
		var Webaty = this;
		return $.makeArray(Webaty.sideBar().find('ul li a').map(function(i,el) { return $(el).attr('href'); }));
	},
	'isDocUrl': function(url){
		var Webaty = this;
		if($.inArray(url, Webaty.siderBarURLs()) !== -1){
			return true;
		}else if(url.match("^/docs/")){
			return true;
		}else{
			return false;
		}
	},
	'getCleanUrl': function(url){
		if(url){
			url = url.split("#");
			return url[0];
		}else{
			return false;
		}
	},
	'articleLinks': function(){
		var Webaty = this;
		$('.docs article a').each(function(){
			if($('<a>').prop('href', $(this).prop('href')).prop('hostname') != 'laravel.com') {
				$(this).attr('target', '_blank');
			}
		});
		$('.docs article a').on('click', function(){
			var WebatyCurrentLinkUrl = Webaty.getCleanUrl($(this).attr('href'));
			if(WebatyCurrentLinkUrl && Webaty.getCleanUrl(window.location.href) != WebatyCurrentLinkUrl){
				if(Webaty.isDocUrl(WebatyCurrentLinkUrl)){
					Webaty.loadPage(this);
					return false;
				}
			}
		});
	},
	'loadPage': function(el){
		var Webaty = this;
		history.pushState({url: $(el).attr('href')}, '', $(el).attr('href'));
		Webaty.setCurrentPage($(el).attr('href'));
	},
	'startLoader': function(){
		$('body').prepend($('<div />').addClass('webaty-loader'));
	},
	'stopLoader': function(){
		$('.webaty-loader').hide(1200, function(){ $(this).remove()});
	},
	'afterAjaxComplete': function(){
		Prism.highlightAll();
		$('.docs article').find('a[name]').each(function() {
			var anchor = $('<a href="#' + this.name + '">');
			$(this).parent().next('h2').wrapInner(anchor);
		});
		$('.docs article a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	},
	'setCurrentPage': function(url){
		var Webaty = this;
		if(Webaty.getCleanUrl(url)){
			Webaty.startLoader();
			Webaty.sideBar().find('ul li').removeClass('webaty-current');
			Webaty.sideBar().find('ul li a[href="'+Webaty.getCleanUrl(url)+'"]').parent('li').addClass('webaty-current');
			$.ajax({
				url: url,
				type: 'GET',
				dataType:'html', 
				success:function(data){
					Webaty.stopLoader();
					$('.docs article').html($(data).find('article').html());
					Webaty.afterAjaxComplete();
					Webaty.articleLinks();
					if(window.location.hash){
						if($(window.location.hash).length > 0){
							$('html, body').animate({
							   'scrollTop': $(window.location.hash).offset().top
							 }, 0);
						}
					}else{
						$('html,body').animate({
						  scrollTop: $('.docs article').offset().top
						}, 200);
					}
					Webaty.lastUrl = Webaty.getCleanUrl(window.location.href);
				}, 
				error: function (xhr, ajaxOptions, thrownError) {
					Webaty.stopLoader();
					alert('The requested content cannot be loaded. Please try again later.');
				}
			});
		}
	}
};
if (history.pushState) {
	WebatyLaravelDocumentation.fire();
} else {
	alert('Your Browser is out of Date!');
}