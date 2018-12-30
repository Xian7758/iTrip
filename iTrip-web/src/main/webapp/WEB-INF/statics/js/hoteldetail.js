
var right_top;

var cal = new Calendar();

function timeinit(sdate, sedate) {
    cal.init({
        id: 0,
        size: 2,
        rows: 1,
        cols: 2,
        range: { start: null, end: null, disabled: false },
        namespace: 'cal',
        bind: [{
            ref: 'date',
            input: 'date',
            handler: t,
            args: []
        }, {
            ref: 'date2',
            input: 'date2',
            handler: t2,
            args: []
        }],
        offsetX: 0,
        offsetY: 29,
        bindNext: false,
        showToday: false
    });
}
function t(d) {
    var isQueryRealTimePrice = "true";
    document.getElementById("date").value = d.format("%y-%M-%d");
    var temp_time = new Date();
    temp_time = d.dateAdd("d", 1);
    document.getElementById("date2").value = temp_time.format("%y-%M-%d");
}
function t2(d) {
    //alert(d.format("%y-%M-%d %h:%m:%s"));
    document.getElementById("date2").value = d.format("%y-%M-%d");
}

var cal2 = new Calendar();
function timeinit2(sdate, sedate) {
    cal2.init({
        id: 0,
        size: 2,
        rows: 1,
        cols: 2,
        range: { start: null, end: null, disabled: false },
        namespace: 'cal2',
        bind: [{
            ref: 'date12',
            span: 'date12',
            handler: t12,
            args: []
        }, {
            ref: 'date22',
            span: 'date22',
            handler: t22,
            args: []
        }],
        offsetX: 0,
        offsetY: 29,
        bindNext: false,
        showToday: false
    });
}
function t12(d) {
    var isQueryRealTimePrice = "true";
    document.getElementById("date12").innerHTML = d.format("%y-%M-%d");
    var temp_time = new Date();
    temp_time = d.dateAdd("d", 1);
    document.getElementById("date22").innerHTML = temp_time.format("%y-%M-%d");
}
function t22(d) {
    //alert(d.format("%y-%M-%d %h:%m:%s"));
    document.getElementById("date22").innerHTML = d.format("%y-%M-%d");
}


////add by rasion.liu begin 
function update_event_bind() {

    $('.sub').click(function () { getbooking(); });

    // 房型列表名称单击事件
    $('.list .name').click(function () {
        $(this).parents('tr').next().find('.hide').removeClass('hd');
    });

    // 房型列表收起
    $('.list .hide .sq').click(function () {
        $(this).parents('.hide').addClass('hd');
    });
}
////end


$(function () {
    // 大图切换
    $("#slide_box").bxSlider({
        auto: false,
        controls: false
    });

    //js滚动条
    $('#daoda').mCustomScrollbar({
        scrollInertia: 150
    });

    //固定导航
    $.scrollIt({ topHeight: 786, topOffset: -70 });
    // 初始化日历
    //timeinit('', '');

    //---
    $('.dingw').click(function () {
        $('body,html').animate({ scrollTop: $('.address').offset().top - 120 });
    });
    $('.tuij .pf').click(function () {
        $('body,html').animate({ scrollTop: $('.consultation').offset().top - 125 });
    });
    // 修改/保存日期
    //$('#change').click(function () {
    //    updateRoomList();
    //});
    // 马上预订
    $('.yud,.yuding a').click(function () {
        $('body,html').animate({ scrollTop: $('.hotel_details').offset().top });
    });

    /*	// 收起房间详情
        $('.room .m').click(function(){
            if($(this).parents('.info').find('.con').css('display') == 'block'){
                $(this).parents('.info').find('.con').css('display','none');
                $(this).find('i').addClass('down');
            }else{
                $(this).parents('.info').find('.con').css('display','block');
                $(this).find('i').removeClass('down');
            }
        });*/
    // 显示更多房型
    /*	$('#show_more').click(function(){
            if($('#more').css('display') == 'block'){
                $('#more').slideUp('fast',function(){
                    $('#show_more').text('查看更多房型图片');
                });
            }else{
                $('#more').slideDown('fast',function(){
                    $('#show_more').text('收起更多房型图片');
                });
            }
        });*/
    // 显示更多旅游产品
    $('#lycp').click(function () {
        if ($('#pro_more').css('display') == 'none') {
            $('#pro_more').slideDown('fast', function () {
                $('#lycp').html('收起推荐旅游产品<i class="down up"></i>');
            });
        } else {
            $('#pro_more').slideUp('fast', function () {
                $('#lycp').html('更多推荐旅游产品<i class="down"></i>');
            });
        }
    });

    // 老板专区类型展示
    var old = 3;
    $('.zhe .ztil').click(function () {
        var i = 0;
        if ($(this).index() == 1) {
            i = 0;
        } else if ($(this).index() == 3) {
            i = 1;
        } else if ($(this).index() == 5) {
            i = 2;
        } else {
            i = 3;
        }
        if (old == i) {
            return;
        }
        $('.zhe .ztil').each(function (index, element) {
            if (index == 0) {
                $(element).find('span').removeClass('jian-act');
            } else if (index == 1) {
                $(element).find('span').removeClass('hua-act');
            } else if (index == 2) {
                $(element).find('span').removeClass('tu-act');
            } else {
                $(element).find('span').removeClass('jie-act');
            }
        });
        if (old == 2) {
            $('#imgnav').hide();
            $('.zhe .zcon').eq(old).animate({ width: 0 }, 300);
        } else {
            $('.zhe .zcon').eq(old).animate({ width: 0 }, 300);
        }
        old = i;
        if (i == 0) {
            $('.zhe .ztil').eq(i).find('span').addClass('jian-act');
        } else if (i == 1) {
            $('.zhe .ztil').eq(i).find('span').addClass('hua-act');
        } else if (i == 2) {
            $('.zhe .ztil').eq(i).find('span').addClass('tu-act');
        } else {
            $('.zhe .ztil').eq(i).find('span').addClass('jie-act');
        }
        $('.zhe .zcon').eq(i).animate({ width: 486 }, 300, function () {
            if (i == 2) {
                $('#imgnav').show();
            }
        });
    });

    // 老板转图 图片播放
    initTu();

    // 房型图片/列表展示
    $('.room_type .show').click(function () {
        $('.room_type .show').each(function (index, element) {
            $(element).removeClass('act');
            $('#room .room_pics').eq(index).hide();
        });
        $(this).addClass('act');
        $('#room .room_pics').eq($(this).index()).show();
    });

    // 交通位置切换
    $('.mtil span').click(function () {
        $('.mtil span').each(function (index, element) {
            $(element).removeClass('act');
            $('.mcon .daoda').eq(index).hide();
        });
        $(this).addClass('act');
        $('.mcon .daoda').eq($(this).index()).show();
    });

    // 评论切换
    $('.dptil span').click(function () {
        $('.dptil span').each(function (index, element) {
            $(element).removeClass('act');
            $('.ccon .zix').eq(index).hide();
        });
        $(this).addClass('act');
        $('.ccon .zix').eq($(this).index()).show();
    });

    // 周边推荐切换
    $('.zbtil span').click(function () {
        $('.zbtil span').each(function (index, element) {
            $(element).removeClass('act');
            $('#zhoubian .zhoubian').eq(index).hide();
        });
        $(this).addClass('act');
        $('#zhoubian .zhoubian').eq($(this).index()).show();
		/*if($(this).index() == 2){
			$("#zbdb").bxSlider({
				auto : false,
				pager : false
			});
		}*/
    });

    // 房型列表名称单击事件
    $('.list-ul .name').click(function () {
        $(this).parents('li').next().removeClass('hd');
    });

    // 房型列表收起
    $('.list-ul .hide .sq').click(function () {
        $(this).parents('li').addClass('hd');
    });

    // 房型列表介绍图片大图展示
    $('.list-ul .hide img').hover(function () {
        $('#room-big-pic').css({ 'top': $(this).offset().top + 50, 'left': $(this).offset().left }).show();
        $('#room-big-pic img').attr('src', $(this).attr('_src'));
    }, function () {
        $('#room-big-pic').hide();
    });

    $('#scroll-nav .tp').click(function () {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    });

    $("img.lazy").lazyload({ placeholder: "http://img.qmango.com/images15/logo.gif", effect: "fadeIn" });

    scrollTips('.scroll-info');

    $('#slide_box img,.plist img,.pmore,.huod2 img').click(function () {
        var index = $(this).attr('data-index');
        index = (typeof index === 'undefined') ? 0 : index;
        showHotel(index);
    });

    $('div.huod .title').hover(function () {
        var h = $(this).find('.tc ul').height() + 25;
        $(this).animate({ height: h }, 200);
    }, function () {
        $(this).animate({ height: 92 }, 200);
    });

    $('#ydWin').click(function (e) {
        var dropdown = $("#ydWin .win"),
            dpele = $("#ydWin .win")[0],
            target = e.target;
        if (dpele !== target && !$.contains(dpele, target)) {
            $('#ydWin').hide();
            $('body,html').css('overflow', 'auto');
        }
    });
    $('#bigPic').click(function (e) {
        var dropdown = $("#bigPic .win"),
            dpele = $("#bigPic .win")[0],
            target = e.target;
        if (dpele !== target && !$.contains(dpele, target)) {
            closeHotel();
        }
    });



    $('#login input[class="name"]').focus(function () {
        if ($(this).val() == '手机/邮箱/用户名') {
            $(this).val('');
        }
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val('手机/邮箱/用户名');
        }
    });

    $('.room_type li').click(function () {
        var type = $(this).attr('data-type');
        var html = '';
        var add = false;
        if (typeof type != 'undefined') {
            var target = $('.room[name="type' + type + '"]');
            $('body,html').animate({ scrollTop: target.offset().top - 140 }, function () {
                if (!add) {
                    var div = window.document.createElement('div');
                    div.style.cssText = 'position:absolute;display:block;border:0px solid #80bf28;top:0px;bottom:0px;right:0px;left:0px;opacity:0;';
                    div.id = 'inset';
                    target.append(div);
                    add = true;

                    $(div).animate({
                        "border-width": 4 + "px",
                        "opacity": "1"
                    }, {
                            "duration": 150,
                            "queue": false,
                            complete: function () {
                                window.setTimeout(function () {
                                    $(div).animate({
                                        "border-width": 0 + "px",
                                        "opacity": "0"
                                    }, {
                                            "duration": 150,
                                            "queue": false,
                                            complete: function () {
                                                $('#inset').remove();
                                            }
                                        });
                                    add = false;
                                }, 1000);
                            }
                        });

                }
            });
        }
    });

    $('.type_down').click(function () {
        if ($(this).hasClass('type_up')) {
            $(this).removeClass('type_up');
            $(this).parent().css({ height: 55 });
        } else {
            $(this).addClass('type_up');
            $(this).parent().css({ height: $(this).prev().height() });
        }
    });

    $('.room .img').each(function (index, element) {
        if ($(element).find('img').height() > 242) {
            $(element).find('img').css('margin-top', -($(element).find('img').height() - 242) / 2);
        } else {
            $(element).find('img').css('height', 242);
        }
    });


    pingEvent();

    window.setTimeout("pageMain()", 2000);

    if ($(".dibiao").is(":visible")) {
        right_top = $('.dibiao').offset().top;
    }

    if ($('#des_con .js-main p').height() <= 120) {
        $('#des_con .js-more').hide();
        $('#des_con .js-main').css('height', '138px');
        $('#des_con').css('padding-bottom', '18px');
    } else {
        $('#des_con .js-more').click(function () {
            if ($(this).attr('data-state') != "open") {
                var h = $('#des_con .js-main p').height();
                $(this).prev().animate({ 'height': h + 'px' });
                $(this).find('span').text('收起更多介绍');
                $(this).attr('data-state', 'open');
            } else {
                $(this).prev().animate({ 'height': 120 + 'px' });
                $(this).find('span').text('查看更多介绍');
                $(this).attr('data-state', 'close');
            }
        });
    }

});


function pingEvent() {
    $('.plcon').each(function (index, element) {
        if ($(element).height() <= 67) {
            $(element).parent().next().hide();
        }
    });

    $('.pl-p span').unbind().click(function () {
        if ($(this).text() != "收起") {
            var h = $(this).parent().prev().find('.plcon').height();
            $(this).parent().prev().animate({ 'max-height': h + 'px' });
            $(this).text('收起');
        } else {
            $(this).parent().prev().animate({ 'max-height': 65 + 'px' });
            $(this).text('展开剩余评论');
        }
    });

    $('.return .pl-p span').unbind().click(function () {
        if ($(this).text() != "收起") {
            var h = $(this).parent().prev().find('.plcon').height();
            $(this).parent().prev().animate({ 'max-height': h + 'px' });
            $(this).text('收起');
        } else {
            $(this).parent().prev().animate({ 'max-height': 65 + 'px' });
            $(this).text('展开剩余回复');
        }
    });
}

function pageMain() {
    $('body,html').animate({ scrollTop: 121 });
}

function scrollTips(target) {
    var at = setInterval('autoScroll("' + target + '")', 3000);
    $(target).hover(function () {
        window.clearInterval(at);
    }, function () {
        at = setInterval('autoScroll("' + target + '")', 3000);
    });
}

function closeHotel() {
    $('body,html').css('overflow', 'auto');
    $('#bigPic,#bigBack').hide();

    //--
    $('#pic-menu a').each(function (index, element) {
        $(element).removeClass('act');
    });
    $('#pic-menu a').eq(0).addClass('act');
    //--
}

function showHotel(index) {
    $('body,html').css('overflow', 'hidden');
    $('#bigPic,#bigBack').show();
    $('#bigPic .win').css({ height: $(window).height() - 200 });

	/*
		加载右侧菜单
	*/

    Galleria.loadTheme('http://js.qmango.com/js15/galleria.classic.min.js');

    Galleria.run('#hotel-pic', {
        dataSource: data,
        show: index,
        isShowTips: true,
        tipsDom: $('#pictips'),
        extend: function (options) {
            var g = this;
            window.onresize = function () {
                var h = $(window).height() - 200;
                $('#bigPic .win').height(h);
                g.resize({ width: 800, height: h });
            }

            $('#pic-menu a').click(function () {
                $('#pic-menu a').each(function (index, element) {
                    $(element).removeClass('act');
                });
                $(this).addClass('act');
                var type = $(this).attr('data-type');
                type = (typeof type === 'undefined') ? 1 : type;
                g._options.updateData = true;

                //////AJAX获取图片数据--begin
                var room = $(this).attr('room');
                var hotel = $(this).attr('hotel');
                if (type == 1) {
                    ///显示全部
                    g.load(data);
                } else if (type == 2) {
                    ///显示酒店
                    var hotelImgs = [];
                    for (var i = 0; i < data.length; i++) {
                        var t = data[i];
                        if (t.classid == room) {
                            hotelImgs.push(t);
                        }
                    }
                    g.load(hotelImgs);
                }
                else if (type == 3) {
                    var roomImgs = [];
                    for (var i = 0; i < data.length; i++) {
                        var t = data[i];
                        if (t.roomid > 0) {
                            roomImgs.push(t);
                        }
                    }
                    g.load(roomImgs);
                }
                else if (type == 4) {
                    var roomImgs = [];
                    for (var i = 0; i < data.length; i++) {
                        var t = data[i];
                        if (t.roomid == room) {
                            roomImgs.push(t);
                        }
                    }
                    g.load(roomImgs);
                }
                /////////	AJAX获取图片数据--end

            });

        }
    });

}







function showRoom(roomid) {

	/*if(!isIE6){
		$('#ydWin').show().css('height',$(window).height());
	}else{
		$('#ydWin').show().css('height',$(window).height()).css('top',$(window).scrollTop());
	}*/
    $.ajax({
        url: '/room.asp',
        type: 'GET',
        contentType: 'text; charset=gb2312',
        data: { roomid: roomid, hotelid: $('#hostel').val(), sdate: $('#starttime').val(), edate: $('#endtime').val() },
        dataType: 'text',
        timeout: 5000,
        error: function () {
        },
        success: function (a) {
            // alert(a);
            $('#container_photo').html(a);

            $('#ydWin').show().css('height', $(window).height());
            $('body,html').css('overflow', 'hidden');
            $('#ydWin .win').css('margin-top', ($(window).height() - $('#ydWin .win').height()) / 2 - 34);

            Galleria.loadTheme('http://js.qmango.com/js15/galleria.classic.min.js');
            var galleria = Galleria.run('#room-pic', {
                show: 0
            });

            timeinit3();
            jQuery.ajaxSetup({ cache: false });
        }
    });





}

function initTu() {

    var index = 0;
    var length = $("#scroll-img li").length;
    var i = 1;

    //关键函数：通过控制i ，来显示图片
    function showImg(i) {
        $("#scroll-img li").eq(i).stop(true, true).fadeIn(800).siblings("li").hide();
        $("#cbtn li").eq(i).addClass("hov").siblings().removeClass("hov");
    }

    function slideNext() {
        if (index >= 0 && index < length - 1) {
            ++index;
            showImg(index);
        } else {
            if (confirm("已经是最后一张！")) {
				/*showImg(0);
				index=0;
				aniPx=(length-5)*97+'px'; //所有图片数 - 可见图片数 * 每张的距离 = 最后一张滚动到第一张的距离
				$("#cSlideUl ul").animate({ "top": "+="+aniPx },200);
				i=1;*/
            }
            return false;
        }
        if (i < 0 || i > length - 4) {
            return false;
        }
        $("#cSlideUl ul").animate({ "top": "-=55px" }, 200)
        i++;
    }

    function slideFront() {
        if (index >= 1) {
            --index;
            showImg(index);
        }
        if (i < 2 || i > length + 4) {
            return false;
        }
        $("#cSlideUl ul").animate({ "top": "+=55px" }, 200)
        i--;
    }

    $("#scroll-img li").eq(0).show();
    $("#cbtn li").eq(0).addClass("hov");

    $("#cbtn li").click(function () {
        index = $("#cbtn li").index(this);
        showImg(index);
    });
    $(".picSildeRight,#next").click(function () {
        slideNext();
    });

    $(".picSildeLeft,#front").click(function () {
        slideFront();
    });

    $("#next,#front").hover(function () {
        $(this).children("a").fadeIn();
    }, function () {
        $(this).children("a").fadeOut();
    });
}
function autoResizeImage(maxWidth, maxHeight, objImg) {
    var img = new Image();
    img.src = objImg.src;
    var hRatio;
    var wRatio;
    var Ratio = 1;
    var w = img.width;
    var h = img.height;
    wRatio = maxWidth / w;
    hRatio = maxHeight / h;

    if (maxWidth == 0 && maxHeight == 0) {
        Ratio = 1;
    } else if (maxWidth == 0) { //
        if (hRatio < 1) Ratio = hRatio;
    } else if (maxHeight == 0) {
        if (wRatio < 1) Ratio = wRatio;
    } else if (wRatio < 1 || hRatio < 1) {
        Ratio = (wRatio <= hRatio ? wRatio : hRatio);
    }
    if (Ratio < 1) {
        w = w * Ratio;
        h = h * Ratio;
    }
    objImg.height = h;
    objImg.width = w;
    if (h < maxHeight) {
        objImg.style.marginTop = (maxHeight - h) / 2 + 'px';
    }
}



function like(hotelid, ttype, o, e) {

    var ss = o;
    $.ajax({
        url: 'http://www.qmango.com/ajax/ajax_favorite.asp',
        type: 'GET',
        contentType: 'text; charset=gb2312',
        data: { hotelid: hotelid, ttype: ttype },
        dataType: 'text',
        timeout: 5000,
        xhrFields: {
            withCredentials: true
        },
       
        success: function (a) {
            if (a == "-1") {
                $('body,html').css('overflow', 'hidden');
                $('#login').show();
                $('#login .login').css({ 'margin-top': ($(window).height() - 280) / 2 });
            }
            if (a == "0") {//alert('操作成功!');
                if ($(e).find('s').hasClass('like-act')) {
                    $(e).find('s').removeClass('like-act');
                    $(e).find('font').text('喜欢');
                } else {
                    $(e).find('s').addClass('like-act');
                    $(e).find('font').text('已喜欢');

                    var c = parseInt($('.total-like').text()) + 1;
                    $('.total-like').text(c + '次喜欢！').show();
                    $('.total-like').animate({ bottom: 15, opacity: 0 }, 1000, function () {
                        $('.total-like').hide().css({ 'opacity': 1, 'bottom': -4 });
                    });
                }
            }
            if (a == "1")
            { alert('操作未成功，请重试!'); }
            jQuery.ajaxSetup({ cache: false });
        }
    });
}
function addSc(hotelid, ttype, o, e) {

    var ss = o;
    $.ajax({
        url: 'http://www.qmango.com/ajax/ajax_favorite.asp',
        type: 'GET',
        contentType: 'text; charset=gb2312',
        data: { hotelid: hotelid, ttype: ttype },
        dataType: 'text',
        timeout: 5000,
        xhrFields: {
            withCredentials: true
        },
        error: function () {
            alert('请求超时了1！');
        },
        success: function (a) {
            if (a == "-1") {
                $('body,html').css('overflow', 'hidden');
                $('#login').show();
                $('#login .login').css({ 'margin-top': ($(window).height() - 280) / 2 });
            }
            if (a == "0") {//alert('操作成功!');
                if ($(e).find('s').hasClass('sc-act')) {
                    //$(e).find('s').removeClass('sc-act');
                    //$(e).find('font').text('收藏');
                    window.location.href = "http://www.qmango.com/myrest/my_collection.asp";
                } else {
                    $(e).find('s').addClass('sc-act');
                    $(e).find('font').text('已收藏');

                    $('.sc-box').show();
                    $('.sc-box').fadeOut(4000);
                }
            }
            if (a == "1")
            { alert('操作未成功，请重试!'); }
            jQuery.ajaxSetup({ cache: false });
        }
    });

}



//-- 右侧导航滚动
var isIE6 = false;

$(document).ready(function () {
    $(window).scroll(function () {
        showGoTop();
    });
});

function showGoTop() {
    if ($(window).scrollTop() > 0) {
        if (isIE6) {
            if ($('#ydWin').css('display') == 'block') {
                //$('#ydWin').css('top',$(window).scrollTop());
            }
        }
        $('#scroll-nav .tp').parent().fadeIn(400);
    } else {
        $('#scroll-nav .tp').parent().fadeOut(200);
    }

    if ($(".dibiao").is(":visible")) {
        if ($(window).scrollTop() > right_top) {
            $('.dibiao').addClass('scroll-fixer');
        } else {
            $('.dibiao').removeClass('scroll-fixer');
        }

        if ($(window).scrollTop() + $('.dibiao').height() >= $('.foot15').offset().top - 72) {
            $('.dibiao').addClass('scroll-fixer2').css({ top: $('.foot15').offset().top - $('.dibiao').height() - $('.con-right').offset().top - 80 });
        } else {
            $('.dibiao').removeClass('scroll-fixer2').css({ top: 70 });
        }
    }
}

window.onresize = function () {
    if ($(".dibiao").is(":visible")) {
        right_top = $('.dibiao').offset().top;
    }
}

function setTop() {
    var t = calenderTop + parseInt($(window).scrollTop());
    $('#CALENDAR_panel_0').css('top', t);
}

function showTalk() {
    if ($('.zix').eq(1).css('display') == 'block') {
        $('body,html').animate({ scrollTop: $('.zix').eq(1).find('div.tw').offset().top });
    } else {
        $('.zix').eq(0).hide();
        $('.zix').eq(1).show();
        $('.dptil span').eq(0).removeClass('act');
        $('.dptil span').eq(1).addClass('act');
        $('body,html').animate({ scrollTop: $('.zix').eq(1).find('div.tw').offset().top });
    }
}
function showFx(e) {
    $('#fx-bg').show().height($(document).height() - 65);
    $('#fx-bg').find('.fx-box').css({ 'margin-top': $(e).offset().top + 60, 'margin-left': $(e).offset().left - 120 });
}


// 分页器
$("#pagination1").pagination({
    currentPage: 1,
    totalPage: 1,
    isShow: true,
    count: 7,
    homePageText: "首页",
    //endPageText: "尾页",
    prevPageText: "上一页",
    nextPageText: "下一页",
    callback: function (current) {
        getComments(current);
    }
});

var cm_hpId;
var cm_page;
var cm_type;
var cm_count;
var cm_limit = 5;

//加载评论
/**
 * @param {any} hpId 父酒店id
 * @param {any} page 当前页码
 * @param {any} type 类型0：全部；1：好评；2：差评
 * @param {any} count 总数
 */
function loadcomments(hpId, page, type, count) {
    cm_hpId = hpId;
    cm_page = page;
    cm_type = type;
    cm_count = count;
    $(".ltil a").removeClass("act");
    var curObj = $(".ltil a").get(type);
    $(curObj).addClass("act");
    getComments(cm_page);

}

function getComments(current) {
    var m_img = "<div style='text-align:center; padding:10px;'><img src='http://img.qmango.com/loading.gif' alt='正在加载数据中…' /></div>";
    $("#loadDiv").html(m_img);
    cm_page = current;
    $.ajax({
        url: "/hotel/hotelcomment",
        type: "get",
        data: { hpId: cm_hpId, page: cm_page, limit: cm_limit, type: cm_type },
        dataType: "html",
        success: function (res) {
            $("#pagination1").pagination("setPage", cm_page, Math.ceil(cm_count / cm_limit));
            $("#comments-list").html(res);
            $("#loadDiv").html("");

            $('.commentpic img').hover(function () {
                $('#comment-big-pic').css({ 'top': $(this).offset().top + 50, 'left': $(this).offset().left }).show();
                $('#comment-big-pic img').attr('src', $(this).attr('_src'));
            }, function () {
                $('#comment-big-pic').hide();
            });
        }
    })
}


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}
function checkCookie() {
    username = getCookie('username')
    if (username != null && username != "")
    { alert('Welcome again ' + username + '!') }
    else {
        username = prompt('Please enter your name:', "")
        if (username != null && username != "") {
            setCookie('username', username, 365)
        }
    }
}