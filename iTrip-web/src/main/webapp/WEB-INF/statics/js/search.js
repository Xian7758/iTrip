($(function sub(num) {
	if (num != "" && num != null) {
		if (num >= -1 && num <= 1) {
			$("#pageIndex").val(parseInt("${page.pageIndex}") + parseInt(num));
		} else {
			$("#pageIndex").val(num);
		}
	} else {
		$("#pageIndex").val("1");
	}
	$("form").submit();
}))(jQuery);