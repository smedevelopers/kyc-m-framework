$(document).bind('mobileinit', function () {
	$.support.cors=true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.pushStateEnabled= false;
    $.mobile.zoom.enabled = false;
    $.mobile.ignoreContentEnabled= true;
    $.mobile.buttonMarkup.hoverDelay = 100; //defaults 200
    $.mobile.defaultDialogTransition = 'none';
    $.mobile.defaultPageTransition = 'slide';
    $.support.touchOverflow = true;
  	$.mobile.touchOverflowEnabled = true;
  	$.mobile.loader.prototype.options.text = "loading";
  	$.mobile.loader.prototype.options.textVisible = false;
  	$.mobile.loader.prototype.options.theme = "a";
  	$.mobile.loader.prototype.options.html = "";
});

$(document).on('pageinit', function(){
    $('[data-position=fixed]').fixedtoolbar({ tapToggle:false });
   // $('[data-role=header]').fixedtoolbar({ transition: "slide" });
   // $("#infoScreenPage [data-role=header]").fixedtoolbar({ updatePagePadding: false });
              // $(".info-tabs-container").fixedtoolbar().show();
});