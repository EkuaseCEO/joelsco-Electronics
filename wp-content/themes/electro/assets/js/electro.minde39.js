!function(a,b){"use strict";a.fn.resizeselect=function(b){return this.each(function(){a(this).change(function(){var b=a(this),c=b.find("option:selected").text(),d=a("<span>").html(c);d.appendTo("body");var e=d.width();d.remove(),b.width(e+16)}).change()})},a.fn.arrangeObjects=function(b,c){this.each(function(){a(this).parent(b).length&&a(this).unwrap()}),this.parent().each(function(){function b(b,c){return a(b).height()>a(c).height()?0:1}for(var d=a(this).children(),e=!0,f=[],g=0;g<c;g++)f.push(a("<ul></ul>")),f[g].appendTo(a(this));d=d.sort(b);var g=0;d.each(function(){(g<0||g===c)&&(e=!e,e?g++:g--),f[g].append(a(this)),e?g++:g--})})}}(jQuery,window),function(a){"use strict";function b(){a(window).width()>992&&a(".columns-1:not(.exclude-auto-height) .product-outer").each(function(){var b=a(this);0!=b.height()&&b.height(b.height())})}function c(){a(window).width()>992&&a("li.product.first:last-child .product-outer").each(function(){var b=a(this),c="",d=b.parents('[data-toggle="shop-products"]'),e=b.parents('[data-toggle="regular-products"]');d.length>0&&!d.parents(".exclude-auto-height").length>0?c=d:e.length>0&&!e.parents(".exclude-auto-height").length>0&&(c=e),c.length>0&&(b.height("auto"),"grid"!=c.attr("data-view")&&"grid-extended"!=c.attr("data-view")||0!=b.height()&&b.height(b.height()))})}void 0!==a.blockUI&&(a.blockUI.defaults.message=null,a.blockUI.defaults.overlayCSS.background="#fff url("+electro_options.ajax_loader_url+") no-repeat center",a.blockUI.defaults.overlayCSS.backgroundSize="16px 16px",a.blockUI.defaults.overlayCSS.opacity=.6),a('[data-toggle="tooltip"]').tooltip(),a(document).on("wc_cart_button_updated",function(b,c){a(c).siblings(".added_to_cart").tooltip(),a(c).parents(".add-to-cart-wrap").addClass("added").tooltip("hide").tooltip("dispose")});var d=a("body,html").hasClass("rtl");d&&(window.vc_rowBehaviour=function(){var a=window.jQuery,b=function(){var b=a('[data-vc-full-width="true"]');a.each(b,function(b,c){var e=a(this),f=e.next(".vc_row-full-width"),g=a("#page"),h=parseInt(e.css("margin-left"),10),i=parseInt(e.css("margin-right"),10),j=0-f.offset().left-h+g.offset().left,k=g.width();if(d?e.css({position:"relative",right:j,"box-sizing":"border-box",width:g.width()}):e.css({position:"relative",left:j,"box-sizing":"border-box",width:g.width()}),!e.data("vcStretchContent")){var l=-1*j;l<0&&(l=0);var m=k-l-f.width()+h+i;m<0&&(m=0),e.css({"padding-left":l+"px","padding-right":m+"px"})}e.attr("data-vc-full-width-init","true")})};a(window).unbind("resize.vcRowBehaviour").bind("resize.vcRowBehaviour",b),b(),function(){var b,c=!1;vcParallaxSkroll&&vcParallaxSkroll.destroy(),a(".vc_parallax-inner").remove(),a("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),a("[data-vc-parallax]").each(function(){var b,d,e,f,g,h;c=!0,"on"==a(this).data("vcParallaxOFade")&&a(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),d=100*a(this).data("vcParallax"),g=a("<div />").addClass("vc_parallax-inner").appendTo(a(this)),g.height(d+"%"),h=a(this).data("vcParallaxImage"),void 0!==h&&g.css("background-image","url("+h+")"),b=d-100,e=-b,f=0,g.attr("data-bottom-top","top: "+e+"%;").attr("data-top-bottom","top: "+f+"%;")}),!(!c||!window.skrollr)&&(b={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},vcParallaxSkroll=skrollr.init(b),vcParallaxSkroll)}()});new Array;a(window).on("resize",function(){b(),c()}),a(".ec-tabs > li > a").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);b=b.length?b:a("[name="+this.hash.slice(1)+"]"),b.length&&(scrollTo=b.offset().top,a(".sticky-wrapper > .stuck").length>0&&(scrollTo-=40),a("html, body").animate({scrollTop:scrollTo},1e3))}}),a('a[data-toggle="tab"]').on("shown.bs.tab",function(a){"#grid"!=a.target&&"#grid-extended"!=a.target||b()}),a(window).load(function(){b(),c(),a(window).width()>1200&&a(".off-canvas-navigation").mCustomScrollbar(electro_options.offcanvas_mcs_options)}),a("li.dropdown-submenu > a").on("click",function(b){b.preventDefault(),b.stopPropagation();var c=a(this),d=c.closest("li.dropdown-submenu");d.hasClass("open")?d.removeClass("open").find("li.dropdown-submenu.open").removeClass("open"):(d.removeClass("open"),d.siblings("li.dropdown-submenu.open").removeClass("open").find("li.dropdown-submenu.open").removeClass("open"),d.addClass("open"))}),a(document).on("hidden.bs.dropdown",function(b){a(this).find("li.dropdown-submenu.open").removeClass("open")}),a(document).ready(function(){if(a(".woocommerce-store-notice__dismiss-link").on("click",function(){a("body").addClass("woocommerce-store-notice-dismissed")}),"undefined"!=typeof Cookies){var b=Object.keys(Cookies.getJSON()).filter(function(a){return 0===a.indexOf("store_notice")});b.length>0&&"hidden"===Cookies.get(b[0])?a("body").addClass("woocommerce-store-notice-dismissed"):a("body").removeClass("woocommerce-store-notice-dismissed")}a("select.resizeselect").resizeselect(),a(".add_to_wishlist").on("click",function(){a(this).closest(".images-and-summary").block(),a(this).closest(".product-inner").block(),a(this).closest(".product-list-view-inner").block(),a(this).closest(".product-item-inner").block()}),a(".yith-wcwl-wishlistaddedbrowse > .feedback").on("click",function(){var b=a(this).next().attr("href");window.location.href=b})}),a(document).on("added_to_wishlist",function(){a(".images-and-summary").unblock(),a(".product-inner").unblock(),a(".product-list-view-inner").unblock(),a(".product-item-inner").unblock()}),a(document).on("click",".add-to-compare-link:not(.added)",function(b){b.preventDefault();var c=a(this),d={_yitnonce_ajax:yith_woocompare.nonceadd,action:yith_woocompare.actionadd,id:c.data("product_id"),context:"frontend"},e=a(".yith-woocompare-widget ul.products-list");"undefined"!=typeof woocommerce_params&&(c.closest(".images-and-summary").block(),c.closest(".product-inner").block(),c.closest(".product-list-view-inner").block(),c.closest(".product-item-inner").block(),e.block()),a.ajax({type:"post",url:yith_woocompare.ajaxurl.toString().replace("%%endpoint%%",yith_woocompare.actionadd),data:d,dataType:"json",success:function(b){"undefined"!=typeof woocommerce_params&&(a(".images-and-summary").unblock(),a(".product-inner").unblock(),a(".product-list-view-inner").unblock(),a(".product-item-inner").unblock(),e.unblock()),c.addClass("added").attr("href",electro_options.compare_page_url).text(yith_woocompare.added_label),e.html(b.widget_table)}})}),a("body").on("adding_to_cart",function(a,b,c){b.closest(".product").block()}),a("body").on("added_to_cart",function(){a(".product").unblock()}),a(".bg-yamm-extend-outside").closest("ul.dropdown-menu").addClass("bg-yamm-extend"),a("body").on("added_to_cart",function(){a(".off-canvas-cart").toggleClass("active"),a(".electro-overlay").toggleClass("electro-close-off-canvas")}),a(".header-icon__cart a").on("click",function(){a(".off-canvas-cart").toggleClass("active"),a(".electro-overlay").toggleClass("electro-close-off-canvas")}),a(".handheld-header-links .cart a").on("click",function(){a(".off-canvas-cart").toggleClass("active"),a(".electro-overlay").toggleClass("electro-close-off-canvas")}),a(".electro-close-icon").on("click",function(){a(this).closest(".off-canvas-cart").removeClass("active"),a(".electro-overlay").removeClass("electro-close-off-canvas")}),a("body").on("click",".electro-close-off-canvas",function(b){a(".electro-overlay").removeClass("electro-close-off-canvas"),a(".off-canvas-cart").removeClass("active")}),a(".mini-cart-toggle a").on("click",function(){a(".off-canvas-cart").toggleClass("active"),a(".electro-overlay").toggleClass("electro-close-off-canvas")}),a("body").on("woocommerce_variation_has_changed",function(b){var c=a("form.variations_form").find(".single_variation_wrap"),d=c.find(".woocommerce-variation-availability").html();void 0!==d&&!1!==d&&a(".electro-stock-availability").html(d)}),a(".deal-countdown-timer").each(function(){var b,c,d,e,f=electro_options.deal_countdown_text,g=a(this).children(".deal-time-diff").text(),h=a(this).children(".deal-countdown"),i=(new Date).getTime()+1e3*g;setInterval(function(){var a=(new Date).getTime(),g=(i-a)/1e3;b=parseInt(g/86400),g%=86400,c=parseInt(g/3600),g%=3600,d=parseInt(g/60),e=parseInt(g%60),h.html('<span data-value="'+b+'" class="days"><span class="value">'+b+"</span><b>"+f.days_text+'</b></span><span class="hours"><span class="value">'+c+"</span><b>"+f.hours_text+'</b></span><span class="minutes"><span class="value">'+d+"</span><b>"+f.mins_text+'</b></span><span class="seconds"><span class="value">'+e+"</span><b>"+f.secs_text+"</b></span>")},1e3)}),a(document).ready(function(){var b;b="1"==electro_options.rtl;var d=window.location.hash;switch(d){case"#grid-extended":case"#list-view":case"#list-view-small":case"#grid":a('.shop-view-switcher a[href="'+d+'"]').tab("show");break;case"#tab-accessories":case"#tab-description":case"#tab-specification":case"#tab-reviews":a('.wc-tabs a[href="'+d+'"]').trigger("click")}var e=a(".page-template-template-homepage-v2 .departments-menu > .dropdown > ul.dropdown-menu").height(),f=a(".page-template-template-homepage-v2 .home-v2-slider").height(),g=0;if(g=e>f?e+24:f,g+=35,a(".price-add-to-cart > .price").each(function(){var c=a(this);c[0].scrollWidth>c.innerWidth()&&(c.find(".electro-price").css("position","relative"),b?c.find("del").attr("style","position:absolute;right:0;top:-14px;"):c.find("del").attr("style","position:absolute;left:0;top:-14px;"))}),a(".shop-view-switcher").on("click",".nav-link",function(){a('[data-toggle="shop-products"]').attr("data-view",a(this).data("archiveClass")),c()}),a(window).width()>768){var h=a(".vertical-menu"),i=h.height(),j=i-52.25;h.find(".dropdown > .dropdown-menu, .dropdown-submenu > .dropdown-menu").each(function(){a(this).css("min-height",j),a(this).find(".menu-item-object-static_block").css("min-height",j)});var k=a(".vertical-menu > .list-group-item > .dropdown-menu"),l=k.attr("style"),m=0;k.css({visibility:"hidden",display:"none"}),m=k.height()+15,k.attr("style",l||""),k.find(".dropdown-menu").each(function(){a(this).css("min-height",m),a(this).find(".menu-item-object-static_block").css("min-height",m)});var n=a(".departments-menu-dropdown"),o=n.height();n.find(".dropdown-submenu > .dropdown-menu").each(function(){a(this).find(".menu-item-object-static_block").css("min-height",o+24),a(this).css("min-height",o+28)}),a(".vertical-menu, .departments-menu-dropdown").on("mouseleave",function(){a(this).removeClass("animated-dropdown")}),a(".vertical-menu .menu-item-has-children, .departments-menu-dropdown .menu-item-has-children").on({mouseenter:function(){var b=a(this),c=b.find("> .dropdown-menu"),d=b.parents(".vertical-menu"),e=b.parents(".departments-menu-dropdown"),f={width:540,opacity:1},g="";d.length>0?g=d:e.length>0&&(g=e),b.hasClass("yamm-tfw")?(f.width=540,e.length>0&&(f.width=600)):b.hasClass("yamm-fw")?f.width=900:b.hasClass("yamm-hw")?f.width=450:f.width=277,c.css({visibility:"visible",display:"block"}),g.hasClass("animated-dropdown")?c.css(f):c.animate(f,300,function(){g.addClass("animated-dropdown")})},mouseleave:function(){a(this).find("> .dropdown-menu").css({visibility:"hidden",opacity:0,width:0,display:"none"})}}),a(".electro-animate-dropdown, .departments-menu-v2").on("mouseleave",function(){a(this).removeClass("animated-dropdown")}),a(".electro-animate-dropdown .menu-item, .departments-menu-v2 .menu-item").on("mouseenter",function(){var b=a(this),c=b.parents(".departments-menu-v2"),d=b.parents(".electro-animate-dropdown");if(c.length>0&&(d=c),b.hasClass("menu-item-has-children"))d.hasClass("animated-dropdown")||setTimeout(function(){d.addClass("animated-dropdown")},200);else if(d.hasClass("animated-dropdown")){var e=b.parents(".menu-item-has-children");e.length<=0&&d.removeClass("animated-dropdown")}})}if(a(".handheld-footer.v1 .handheld-widget-menu .widget-title").on("click",function(){a(this).siblings("div,ul").collapse("toggle")}),a(".handheld-footer.v1 .handheld-widget-menu .widget-title").each(function(){a(this).siblings("div,ul").addClass("collapse")}),a(".handheld-sidebar-toggle .sidebar-toggler").on("click",function(){a(this).closest(".site-content").toggleClass("active-hh-sidebar")}),a(".tmhh-sidebar-close").on("click",function(){a(this).closest(".site-content").toggleClass("active-hh-sidebar")}),a(document).on("click",function(b){a(".site-content").hasClass("active-hh-sidebar")&&(a(".handheld-sidebar-toggle").is(b.target)||0!==a(".handheld-sidebar-toggle").has(b.target).length||a("#sidebar").is(b.target)||0!==a("#sidebar").has(b.target).length||a(".select2-container").is(b.target)||0!==a(".select2-container").has(b.target).length||a(".site-content").toggleClass("active-hh-sidebar"))}),a(".electro-handheld-footer-bar .search > a").on("click",function(b){a(this).parent().toggleClass("active"),b.preventDefault()}),a(".handheld-header-links .search > a").on("click",function(b){a(this).closest(".search").toggleClass("active"),a("body").toggleClass("disableScroll"),b.preventDefault()}),a(document).on("click",function(b){a(".handheld-header-links .search").hasClass("active")&&(a(".handheld-header-links .search").is(b.target)||0!==a(".handheld-header-links .search").has(b.target).length||(a("body").removeClass("disableScroll"),a(".handheld-header-links .search").removeClass("active")))}),a(".handheld-navigation-wrapper .navbar-toggler").on("click",function(){a(this).closest(".handheld-navigation-wrapper").toggleClass("toggled")}),a(".ehm-close").on("click",function(){a(this).closest(".handheld-navigation-wrapper").toggleClass("toggled")}),a(document).on("click",function(b){a(".handheld-navigation-wrapper").hasClass("toggled")&&(a(".handheld-navigation-wrapper").is(b.target)||0!==a(".handheld-navigation-wrapper").has(b.target).length||a(".handheld-navigation-wrapper").toggleClass("toggled"))}),a(".off-canvas-navigation-wrapper .navbar-toggle-hamburger").on("click",function(){var c={transform:"translateX(250px)",transition:"all .5s"};b&&(c.transform="translateX(-250px)"),a(this).parents(".stuck").length>0&&a("html, body").animate({scrollTop:a("body")},0),a(this).closest(".off-canvas-navigation-wrapper").toggleClass("toggled"),a("#page").toggleClass("off-canvas-bg-opacity").css(c),a("body").toggleClass("off-canvas-active")}),a(".off-canvas-navigation-wrapper .navbar-toggle-close").on("click",function(){a(this).closest(".off-canvas-navigation-wrapper").removeClass("toggled"),a("#page").css({transform:"none",transition:"all .5s"}).removeClass("off-canvas-bg-opacity"),a("body").removeClass("off-canvas-active")}),a(document).on("click",function(b){a(".off-canvas-navigation-wrapper").hasClass("toggled")&&(a(".off-canvas-navigation-wrapper").is(b.target)||0!==a(".off-canvas-navigation-wrapper").has(b.target).length||(a(".off-canvas-navigation-wrapper").removeClass("toggled"),a("#page").css({transform:"none",transition:"all .5s"}).removeClass("off-canvas-bg-opacity"),a("body").removeClass("off-canvas-active")))}),a(".animate-in-view").each(function(){var b=a(this);b.data("animation"),new Waypoint({element:b,handler:function(a){b.addClass(b.data("animation")+" animated")},offset:"90%"})}),a(window).width()>=1200&&"1"==electro_options.enable_sticky_header&&a("#page").find(".stick-this").length>0){new Waypoint.Sticky({element:a(".stick-this")[0],stuckClass:"stuck animated fadeInDown faster",offset:function(){return-this.element.clientHeight}})}if(a(window).width()<1200){if("1"==electro_options.enable_sticky_header&&a("#page").find(".handheld-navbar-toggle-buttons").length>0){new Waypoint.Sticky({element:a(".handheld-navbar-toggle-buttons")[0],stuckClass:"stuck animated fadeInDown faster"})}if("1"==electro_options.enable_hh_sticky_header&&a("#page").find(".handheld-stick-this").length>0){new Waypoint.Sticky({element:a(".handheld-stick-this")[0],stuckClass:"stuck animated fadeInDown faster",offset:function(){return-this.element.clientHeight}})}}if(a(".slider-next").on("click",function(){return a(a(this).data("target")+" .owl-carousel").trigger("next.owl.carousel"),!1}),a(".slider-prev").on("click",function(){return a(a(this).data("target")+" .owl-carousel").trigger("prev.owl.carousel"),!1}),a("body").on("woocommerce_variation_has_changed",function(b){var c=(a(this).find(".product div.electro-gallery img:eq(0)"),a(this).find(".product div.electro-gallery a.zoom:eq(0)")),d=c.attr("href");"undefined"!=typeof variation&&variation?a(this).wc_variations_image_update(variation):a(this).wc_variations_image_update(!1),a(".single-product .electro-gallery > .thumbnails-single .owl-item").each(function(){a(this).find("a").attr("href")==d&&a(".single-product .electro-gallery .thumbnails-single").trigger("to.owl.carousel",[a(this).index(),300,!0])})}),a('[data-ride="owl-carousel"]').each(function(){var b,c=a(this),d=c.data("carouselSelector"),e=c.data("carouselOptions"),f=c.data("replaceActiveClass");b="self"===d?c.owlCarousel(e):c.find(d),!0===f&&b.on("initialized.owl.carousel translated.owl.carousel",function(){a(this).find(".owl-item.last-active").each(function(){a(this).removeClass("last-active")}),a(this).find(".owl-item.active").last().addClass("last-active")}),b.owlCarousel(e)}),a(".single-product .electro-gallery").each(function(){var c=a(this).children(".thumbnails-single"),d=a(this).children(".thumbnails-all"),e=!1;c.owlCarousel({items:1,margin:0,dots:!1,nav:!1,rtl:b,responsive:{0:{items:1},480:{items:1},768:{items:1}}}),c.on("changed.owl.carousel",function(a){e||(e=!0,d.trigger("to.owl.carousel",[a.item.index,300,!0]),e=!1),d.find(".owl-item").removeClass("synced").eq(a.item.index).addClass("synced")}),d.on("initialized.owl.carousel",function(a){d.find(".owl-item").eq(0).addClass("synced")});var f=d.attr("class"),g=4;void 0!==f&&(g=parseInt(f.replace("thumbnails-all columns-",""))),d.owlCarousel({items:g,margin:8,dots:!0,nav:!1,rtl:b,responsive:{0:{items:1},480:{items:3},768:{items:g}}}),d.on("click","a",function(a){a.preventDefault()}),d.on("click",".owl-item",function(){c.trigger("to.owl.carousel",[a(this).index(),300,!0])}),d.on("changed.owl.carousel",function(a){e||(e=!0,c.trigger("to.owl.carousel",[a.item.index,300,!0]),e=!1)})}),a(".electro-store-directory .product-categories > li").arrangeObjects("ul",4),"1"==electro_options.enable_live_search){if(electro_options.ajax_url.indexOf("?")>1)var p=electro_options.ajax_url+"&action=products_live_search&fn=get_ajax_search",q=electro_options.ajax_url+"&action=products_live_search&fn=get_ajax_search&terms=%QUERY";else var p=electro_options.ajax_url+"?action=products_live_search&fn=get_ajax_search",q=electro_options.ajax_url+"?action=products_live_search&fn=get_ajax_search&terms=%QUERY";var r=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("value"),queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:p,remote:{url:q,wildcard:"%QUERY"},identify:function(a){return a.id}});r.initialize(),a(".navbar-search .product-search-field, .handheld-header-v2 .woocommerce-product-search .search-field, .mobile-header-v1 .woocommerce-product-search .search-field, .mobile-header-v2 .woocommerce-product-search .search-field").typeahead(electro_options.typeahead_options,{name:"search",source:r.ttAdapter(),displayKey:"value",limit:electro_options.live_search_limit,templates:{empty:['<div class="empty-message">',electro_options.live_search_empty_msg,"</div>"].join("\n"),suggestion:Handlebars.compile(electro_options.live_search_template)}})}a(".product-categories .show-all-cat-dropdown").each(function(){if(a(this).siblings("ul").length>0){var b=a('<span class="child-indicator"><i class="fa fa-angle-right"></i></span>');a(this).siblings("ul").hide(),a(this).siblings("ul").is(":visible")&&(b.addClass("open"),b.html('<i class="fa fa-angle-up"></i>')),a(this).on("click",function(){return a(this).siblings("ul").toggle("fast",function(){a(this).is(":visible")?(b.addClass("open"),b.html('<i class="fa fa-angle-up"></i>')):(b.removeClass("open"),b.html('<i class="fa fa-angle-right"></i>'))}),!1}),a(this).append(b)}}),a(".product-categories .cat-item > a").each(function(){if(a(this).siblings("ul.children").length>0){var b=a('<span class="child-indicator"><i class="fa fa-angle-right"></i></span>');a(this).siblings(".children").hide(),a(".current-cat > .children").show(),a(".current-cat-parent > .children").show(),a(this).siblings(".children").is(":visible")&&(b.addClass("open"),b.html('<i class="fa fa-angle-up"></i>')),b.on("click",function(){return a(this).parent().siblings(".children").toggle("fast",function(){a(this).is(":visible")?(b.addClass("open"),b.html('<i class="fa fa-angle-up"></i>')):(b.removeClass("open"),b.html('<i class="fa fa-angle-right"></i>'))}),!1}),a(this).prepend(b)}else a(this).prepend('<span class="no-child"></span>')})}),a(".dokan-store #vendor-biography").length>0?a(".dokan-store-tabs ul li.vendor_biography").addClass("active"):a(".dokan-store #store-toc-wrapper").length>0?a(".dokan-store-tabs ul li.terms_and_conditions").addClass("active"):a(".dokan-store #reviews").length>0?a(".dokan-store-tabs ul li.reviews").addClass("active"):a(".dokan-store #dokan-content").hasClass("store-page-wrap")&&a(".dokan-store-tabs ul li.products").addClass("active")}(jQuery);

(function($, window){
	'use strict';
	
    if ($("#archive-readmore-btn").length > 0) {	
		$('#archive-readmore-btn').click(function() {
			$('.archive-readmore-less').toggleClass('archive-readmore-more');
			if ($(this).text() == 'Read More') $(this).text('Read Less');
			else $(this).text('Read More');
		});
	}
	
})(jQuery);