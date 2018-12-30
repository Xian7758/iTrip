(function($) {
	$.fn.tab = function(o) {
		o = $.extend({
			t: ".a_tit",
			c: ".a_con",
			s: "cur",
			v: false,
			e: "click"
		}, o);
		this.each(function() {
			var t = $(this).find(o.t);
			var c = $(this).find(o.c);
			t.bind(o.e, function() {
				var i = t.index($(this));
				t.removeClass(o.s);
				$(this).addClass(o.s);
				if(o.v){
				    c.css("visibility","hidden").eq(i).css("visibility","visible");
				}else{
				    c.hide().eq(i).show()
				}
			})
		})
	}
})(jQuery);