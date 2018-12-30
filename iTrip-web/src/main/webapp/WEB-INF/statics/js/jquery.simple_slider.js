; (function($) {
    var totalCount = 0, selector, options, firstPos = 0, isRunning = false; $.fn.simple_slider = function(settings) {
        settings = $.extend({}, $.fn.simple_slider.defaults, settings); selector = this.selector; options = settings; totalCount = $(selector + " li").size(); _init(); function _init() { $(selector + " li").each(function(i) { if (i >= options.display) { this.style.display = "none"; } }); $("#" + options.leftID).click(function() { if (isRunning == false) { _goLeft(); } }); $("#" + options.leftID).hover(function() { $(this).addClass("simple_slider_hover"); }, function() { $(this).removeClass("simple_slider_hover"); }); $("#" + options.rightID).click(function() { if (isRunning == false) { _goRight(); } }); $("#" + options.rightID).hover(function() { $(this).addClass("simple_slider_hover"); }, function() { $(this).removeClass("simple_slider_hover"); }); $("#" + options.leftID).addClass("simple_slider_disabled"); _checkNavigation(); }
        function _goLeft() { isRunning = true; if (firstPos > 0) { $(selector + " li:eq(" + (firstPos + options.display - 1) + ")").fadeOut("slow", function() { firstPos--; $(selector + " li:eq(" + (firstPos) + ")").fadeIn("slow", function() { isRunning = false; _checkNavigation(); }); }); } else { isRunning = false; } }
        function _goRight() { isRunning = true; if (firstPos + options.display < totalCount) { $(selector + " li:eq(" + firstPos + ")").fadeOut("slow", function() { firstPos++; $(selector + " li:eq(" + (firstPos + options.display - 1) + ")").fadeIn("slow", function() { isRunning = false; _checkNavigation(); }); }); } else { isRunning = false; } }
        function _checkNavigation() {
            if (firstPos == 0) { $("#" + options.leftID).addClass("simple_slider_disabled"); } else { $("#" + options.leftID).removeClass("simple_slider_disabled"); }
            if ((firstPos + options.display) >= totalCount) { $("#" + options.rightID).addClass("simple_slider_disabled"); } else { $("#" + options.rightID).removeClass("simple_slider_disabled"); } 
        } 
    }
    $.fn.simple_slider.defaults = { display: 3, leftID: 'goleft', rightID: 'goright' };
})(jQuery);