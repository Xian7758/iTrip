$(document).ready(function () {

    getLoginStatus(); //初始获取用户登陆及订单处理信息

    $(".s_o_close").click(function () {
        $(this).parent().parent().hide();
    });

    $("#btnLogin").click(function () {
        if ($("#uid").val() == "") {
            alert("请输入手机/邮箱/用户名");
            return false;
        }
        if ($("#upwd").val() == "") {
            alert("请输入登录密码");
            return false;
        }
        userLogin($("#uid").val(), $("#upwd").val(), "", $("#mdl").attr('checked', true));
    });

    //好青旅，好客栈，好掌柜登录 add by 赵轻盈 2014-11-28
    $(".login_btn").click(function () {
        if ($("#txtname").val() == "") {
            alert("请输入手机/邮箱/用户名");
            return false;
        }
        if ($("#txtpassword").val() == "") {
            alert("请输入登录密码");
            return false;
        }

        voteLogin($("#txtname").val(), $("#txtpassword").val());
    });

    //好青旅，好客栈，好掌柜 开始登录
    function voteLogin(username, password) {
        $("#orderlist").html("正在获取订单信息...");
        $.ajax({
            url: '/hostelsofchina/votelogin.asp',
            type: 'POST',
            data: { rlogins: escape(username), pwd: password },
            dataType: 'html',
            timeout: 60000,
            cache: false,
            success: function (result) {
                if (result == "1") {
                    location.reload();
                } else if (result == "-1") {
                    alert('用户名或密码错误');
                    return false;
                }
            }
        });
    }

    $("#upwd").keydown(function (event) {
        event = window.event || event;
        var keyCode = event.keyCode || event.which || event.charCode;
        if (keyCode == 13) {
            $("#btnLogin").click();
        }
    });

    //点评
    $('.btn_dianping').live('click', function (event) {
        if (event.type == 'click') {
            window.open("/myrest/default.asp?ac=1");
        }
    });



    //用户登陆
    function userLogin(username, password, checkcode, ismdl) {
        $("#btnLogin").text("登录中...");
        //$('#btnLogin').attr('disabled',"true");
        $("#orderlist").html("正在获取订单信息...");
        if (ismdl == true) { ismdl = 1; } else { ismdl = 0; }
        $.ajax({ url: '/users/login_ajax/login.asp',
            type: 'POST',
            data: { ac: "1", rlogins: escape(username), pwd: password, code: checkcode, mdl: ismdl },
            dataType: 'html',
            timeout: 60000,
            cache: false,
           
            success: function (result) {
                if (result == "1") {
                    getLoginStatus();
		    loginHide();
                } else if (result == "0") {
                    $("#btnLogin").text("登录");
                    getLoginStatus();
                    //$('#btnLogin').removeAttr("disabled");
                    alert('验证码错误');
                    return false;
                } else if (result == "-1") {
                    $("#btnLogin").text("登录");
                    getLoginStatus();
                    //$('#btnLogin').removeAttr("disabled");
                    alert('用户名或密码错误');
                    return false;
                }
            }
        });
    }

    //获取用户登陆状态
    function getLoginStatus() {
        $.ajax({ url: '/users/login_ajax/loginstatus.asp',
            type: 'GET',
            data: {},
            dataType: 'html',
            timeout: 60000,
            cache: false,
            success: function (result) {
                if (result != "nologin") {
                    $("#loginInfo").html(result).siblings().hide();
					$("#loginInfo2").html(result).siblings().hide();
                    $(".hotbag").show();
                    getOrderList();
                } else {
                    $("#orderlist").html("你好，请先<a href='/users/login.asp' style='color:#7FBE25;'>登录</a>后再查看订单");
                }
            }
        });
    }

    //获取订单信息
    function getOrderList() {
        $("#orderlist").html("正在获取订单信息...");

        //获取订单数量
        $.ajax({ url: '/users/login_ajax/orderlist.asp',
            type: 'GET',
            data: { ac: 2 },
            dataType: 'html',
            timeout: 60000,
            cache: false,
            success: function (result) {
                if (result != "nologin") {
                    if (parseInt(result) > 0) {
                        $("#order_num").html(result);
                        getOrderDetail();
                    } else {
                        $("#order_num").html("0");
                        $("#orderlist").html("亲，暂无可处理的订单哦...");
                    }
                }
            }
        });
    }

    function getOrderDetail() {
        //获取订单列表
        $.ajax({ url: '/users/login_ajax/orderlist.asp',
            type: 'GET',
            data: { ac: 1 },
            dataType: 'html',
            timeout: 60000,
            cache: false,
            success: function (result) {
                if (result != "nologin") {
                    //if(parseInt($("#order_num").text()) > 0){
                    var orderhtml = "<table cellpadding='0' cellspacing='0' class='order_list'>"
                    orderhtml += "<thead><tr><th>订单号</th><th>产品名称</th><th>状态</th></tr></thead>";
                    orderhtml += "<tbody id='tb_orders'>";
                    orderhtml += result;
                    orderhtml += "</tbody>";
                    if (parseInt($("#order_num").text()) > 5) { //如果超过5条显示更多
                        orderhtml += "<tfoot><tr><td colspan='3'><a href='/myrest/default.asp'>查看更多>></a></td></tr></tfoot>";
                    }
                    orderhtml += "</table>";
                    $("#orderlist").html(orderhtml);
                    // }
                } else {
                    $("#order_num").html("0");
                    $("#orderlist").html("你好，请先<a href='/users/login.asp' style='color:#7FBE25;'>登录</a>");
                }
            }
        });
    }
});

String.prototype.trim=function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

$(document).ready(function(){
	$("li.login .dropdown").hover(function() {
		$(this).addClass("hover");
	}, function() {
		var i = 0;
		$('li.login .dropdown .input_login').each(function(index, element) {
            if($(element).val().trim() == ''){
				i++;
			}
        });
		if(i==2){
			$(this).removeClass('hover');
		}
	});
	
	$(".myorder .dropdown").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass('hover');
	});
	/*$(document).click(function (e) {
		var dropdown = $(".dropdown"),
			dpele = $(".dropdown")[0],
			target = e.target;
		if (dpele !== target && !$.contains(dpele, target)) {
			dropdown.removeClass('hover');
		}
	});*/
	
	$("#hotel_more").toggle(
	function () {
	  $(this).parent().parent().find(".city_bd .c_b_list").css({ height:"140px"});
	  $(this).parent().removeClass("more_down").addClass("more_up");
		return false;
	},
	function () {
	  $(this).parent().parent().find(".city_bd .c_b_list").removeAttr("style");
	  $(this).parent().removeClass("more_up").addClass("more_down");
		return false;
	});
	
	$(".li_placeholder").find("input").focus(function(){
	$(".span_placeholder").hide();
	}).focusout(function(){
		if($(this).val().length==0){
		$(".span_placeholder").show();
		}
	})
	$(".span_placeholder").click(function(){
		$(this).parent().find("input").focus();
	})
});

$(document).ready(function(){ 
  var nav = $(".scroll_nav");
  var isIE=!!window.ActiveXObject;
  var isversion=parseInt($.browser.version)===6;
  var isIE6=isIE&&isversion;
  var nav_top=$(".r_top");
  function navCheck() {
	  var t = document.documentElement.scrollTop || document.body.scrollTop;
	  var wScroll=(document.documentElement.scrollWidth>document.documentElement.clientWidth) ? document.documentElement.scrollWidth : document.documentElement.scrollWidth;

//	  if(wScroll<1050){
//		nav.hide();
//		}
		if (t >= 100) {
			if (!isIE6) {
				nav_top.fadeIn(400);
				nav.css({ "position": "fixed" });
			} else {
				nav_top.fadeIn(400);
			}
		} else {
			if (!isIE6) {
				nav.css({ "position": "fixed" });
				nav_top.fadeOut(200); 
			} else {
				nav_top.fadeOut(200);
			}
		}
	  
  }

  navCheck();
  $('.r_top').click(function(){
	  $('html,body').animate({scrollTop: '0px'}, 800);
  });
  window.onscroll = function () {
	  navCheck();
	  
  }
});//gotop

//二次支付

function gopay(orderid,webfrom){
	window.open("/booking.asp?oid="+orderid);
}

function loginHide() {
    $('#login_bg').hide();
    $('body,html').css('overflow','auto');
}