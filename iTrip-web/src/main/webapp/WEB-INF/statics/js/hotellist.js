function createHtml(data) {
    var html = "";
    var idx = 0;
    var beginDate = $("#date").val();
    var endDate = $("#date2").val();
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        idx += 1;
        html += '<div class="hotel" id="' + item.Hotelid + '" x="' + item.Lng + '" y="' + item.Lat + '" hid="' + idx + '" hn="' + item.Hotelname+'">';
        html += '<input type="hidden" class="resourceid" value="' + item.Resourceid+'">';
        html += '<div class="info clearfix">';
        html += '<div class="w720">';
        html += '<div class="img">';
        html += '<a href="/hotel/detail?hotelid=' + item.Hotelid + '&b=' + beginDate + '&e=' + endDate+'" target="_blank">';
        html += '<img width="200" height="160" src="http://image.qmango.com/' + item.Hotellogo + '" title="' + item.Hotelname + '" alt="' + item.Hotelid+'" border=0>';
        html += '</a>';
        html += getHotelRankType(item.Hotelrank, item.Onlinedate, item.Ensure, item.Resourceid);
        html += showBossPhoto(item.PhotoShow1, item.HotelShowName);
        html += '</div>';
        html += '<div class="base">';
        html += '<span class="count">' + idx + '</span>';
        html += '<a href="/hotel/detail?hotelid=' + item.Hotelid + '&b=' + beginDate + '&e=' + endDate + '" class="name" target="_blank" title="' + item.Hotelname + '">' + item.Hotelname + '</a>';
        html += showHoteltags(item.Hotelclassid, item.IsYha, item.IsHui, item.Huicomment);
        html += '</div>';
        if (item.Hotelad != '' && item.Hotelad != null) {
            html += '<p class="til">' + item.Hotelad+'</p>';
        }
        html += showTags(item.TagProxys, item.TagDistance);
        html += '<p class="addr addrAdd">';
        html += '<span>地址：' + item.Address+'</span>';
        html += '<em><a href="javascript:void(0);" class="a_map" data2="' + item.Hotelid+'">地图</a></em>';
        html += '</p>';
        html += '<p class="newReservation">最新预订 ' + item.NewOrderTimes+'前</p>';
        html += '</div>';
        html += '<ul class="other">';
        html += '<li>';
        html += '&yen;<em class="price">' + item.Eprice+'</em>起';
        html += '</li>';
        html += showMobtips(item.Resourceid, item.Freecomm, item.Hotelid);
        html += '<li><em class="ft14 cg">' + item.AvgScore+'</em>分/10分</li>';
        html += '<li><em class="ft14 cg">' + item.CommentCount+'</em>条用户点评</li>';
        html += '<li>';
        html += '<a class="btn-booking" target="_blank" href="/hotel/detail?hotelid=' + item.Hotelid + '&b=' + beginDate + '&e=' + endDate+'"/>';
        html += '</li>';
        html += '</ul>';
        html += '</div>';
        html += '</div>';
    }

    return html;
}

function getHotelRankType(hotelrank, onlinedate, ensure, resourceid) {
    if (ensure == 1 || resourceid == 101) {
        if (hotelrank == 'A') {
            return '<span class="jinbao"></span>';
        }
        else if (hotelrank == 'B') {
            return '<span class="yinbao"></span>';
        }
        else {
            return '<span class="pngfix youbao">优保</span>';
        }
    }
    else if (hotelrank == 'A') {
        return '<span class="jing"></span>';
    }
    else if (hotelrank == 'B') {
        return '<span class="ying"></span>';
    }
    else if (DateHelper.DateDiff1(new Date(onlinedate), new Date()) < 30) {
        return '<span class="pngfix youbao">新</span>';
    }
    return "";
}

function showBossPhoto(photoshow1, hotelshowname) {
    if (photoshow1 != null && photoshow1 != '') {
        var html= ' <span class="bs">';
        html += '<img src="http://image.qmango.com' + photoshow1 + '" data-intro="老板：' + hotelshowname+'" />';
                html +='</span>';
    }
    return "";
}

function showHoteltags(hotelclassid, isYha, isHui, comment) {
    var html = "";
    if (hotelclassid == 16 || hotelclassid == 17) {
        html += '<div class="tit-tips" title="独具匠心设计，精美装饰、体贴服务，舒适享受！">';
        html += '<i class="pngfix jp"></i>';
        html += '<div class="ts"> 独具匠心设计，精美装饰、体贴服务，舒适享受！</div>';
        html += '</div>';
    }
    if (isYha) {
        html += '<div class="tit-tips" title="国际青年旅舍联盟（IYHF）公认会员">';
        html += '<i class="pngfix yha"></i>';
        html += '<div class="ts">国际青年旅舍联盟（IYHF）公认会员</div>';
        html += '</div>';
    }
    if (isHui) {
        html += '<div class="tit-tips" title="' + comment + '">';
        html += '<i class="pngfix hui"></i>';
        html += '<div class="ts">' + comment+'</div>';
        html += '</div>';
    }
    return html;
}

function showMobtips(resourceid, freecomm, hotelid) {
    if (resourceid != 101 && freecomm > 0) {
        var html = '<li>';
        html += '<div class="mob">';
        html += '<span class="tips">手机预订减&yen;' + freecomm+'</span>';
        html += '<div class="pop">';
        html += '<div class="scode" data-id="' + hotelid+'"></div>';
        html += '</div>';
        html += '</div>';
        html += '</li>';
    }

    return "";
}

function showTags(tags,distance) {
    if (tags != null && tags != undefined && tags.length > 0) {
        var html = '<p class="area"> 区域：';
        for (var i = 0; i < tags.length; i++) {
            var t = tags[i];
            if (t.TagName != null && t.TagName != '')
                html += '<a href="http://www.qmango.com/hotel_tag_' + t.TagId + '.html" title="' + t.TagName + '" target="_blank">' + t.TagName.FixedLenth(6) + '</a> &nbsp;';
        }

        html += distance;

        html += "</p>";

        return html;
    }
    return "";
}

function getHotels(pageIndex) {
    var pageCount = 0;


    $("#loading").show();
    $('#loading p').css({ 'margin-top': ($(window).height() - $('#loading p').outerHeight()) / 2 });
    var cityId = $("#city_id").val();
    var tagId = $("#tag_id").val();
    var keywords = $("#keywords").val();
    if ($.trim(keywords) == "关键词/酒店名/景点/位置") {
        keywords = "";
    }
    var startDate = $("#date").val();
    var endDate = $("#date2").val();

    //获取价格组合
    var priceArr = [];
    $("input[name='pircelimit']:checked").each(function () {
        priceArr.push($(this).attr("data-min") + "-" + $(this).attr("data-max"));
    });

    if (priceArr.length == 0) {
        //选择框没有数据则，判断自定义是否有值
        var priceMin = $("#price_min").val();
        var priceMax = $("#price_max").val();
        if (priceMin != '' || priceMax != '') {
            priceMin = priceMin == '' ? 0 : priceMin;
            priceMax = priceMax == '' ? 50000 : priceMax;
            priceArr.push(priceMin + "-" + priceMax);
        }
    }

    //获取酒店类型数组
    var classIdArr = [];
    $("input[name='qhtype']:checked").each(function () {
        classIdArr.push($(this).val());
    })

    //获取品牌数组
    var brandArr = [];
    $("input[name='qbrand']:checked").each(function () {
        brandArr.push($(this).val());
    })

    var orderBy = $("#hid_orderBy").val();

    var isEnsure = $("#yb-hotel").is(':checked');
    var isPromotion = $("#cx-hotel").is(':checked');
    var pageSize = 10;

    //清除地图
    map.clearOverlays();
    init_map();

    $.ajax({
        url: "/hotel/queryhotels",
        type: "post",
        async: true,
        data: { pageIndex: pageIndex, pageSize: pageSize, orderBy: orderBy, cityId: cityId, tagId: tagId, keywords: keywords, startDate: startDate, endDate: endDate, prices: priceArr, classIds: classIdArr, brands: brandArr, isEnsure: isEnsure, isPromotion: isPromotion },
        dataType: "json",
        success: function (res) {
            if (res.count > 0) {
                $("#pagination3").pagination("setPage", pageIndex, Math.ceil(res.count / pageSize));
                $("#hotelnum").html(res.count);
                var html = createHtml(res.data);
                $("#hotel-list").html(html);
                pageCount = res.count;
                if (pageIndex > 1) { window.scroll(0, $('#list-con').offset().top); }
                else {
                    //window.scrollTo(0, 180)
                }
            }
            else {
                //暂无数据
                var cityId = $("#city_id").val();
                var html = '<div class="mod_nohotel">';
                html += '<dl class="error_info" >';
                html += '<dt><s class="icon_error"></s></dt>';
                html += '<dd class="t_error">很抱歉，没有找到相关的酒店。</dd>';
                html += '<dd class="c_error">';
                html += '<p><span>您可以更换搜索条件或改订其他酒店</span><a href="/?cityId=' + cityId + '" class="">清除筛选条件</a></p>';
                html += '</dd>';
                html += '</dl >';
                html += '</div >';
                if (res.tjHotels.length > 0) {
                    html += '<div class="tj_title">';
                    html += '<strong>您可能对以下酒店感兴趣：</strong>';
                    html += '</div>';
                    html += createHtml(res.tjHotels);
                }

                $("#hotel-list").html(html);
            }

            $("#loading").hide();

            // 立减订单二维码
            bindscode();

            //绑定地图
            //addhotelmark($("div[hid='1']").attr("id"), $("div[hid='1']").attr("x"), $("div[hid='1']").attr("y"), $("div[hid='1']").attr("hid"), $("div[hid='1']").attr("hn"));

            $('.hotel').bind('inview', function (event, visible) {
                if (visible) {
                    addhotelmark($(this).attr("id"), $(this).attr("x"), $(this).attr("y"), $(this).attr("hid"), $(this).attr("hn"));
                } else {
                    clearhotelmark($(this).attr("id"));
                }
            });
            $(".a_map").click(function () {
                focus_img($("div[id='" + $(this).attr("data2") + "']").attr("x"), $("div[id='" + $(this).attr("data2") + "']").attr("y"))
            });
        }
    })
    return pageCount;
}

$('#keywords').on('click', function () {
    $('.keywords_pop').css("display", "block")
    $('.keywords_pop').mouseleave(function () {
        $(this).css("display", "none")
    })

    if ($(this).val() != '' && $("#suggest_city_keywords").html().indexOf('</a>') > -1) {
        $("#suggest_city_keywords").show();
    }
})

///关键字搜索
$('#keywords').keyup(function () {
    var keywords = $(this).val();
    var cityId = $("#city_id").val();
    if (keywords != '') {
        $.ajax({
            url: "/hotel/querykeywords",
            type: "get",
            data: { cityId: cityId, keywords: keywords },
            dataType: "json",
            success: function (data) {
                var html = '';
                if (data.length > 0) {
                    html += ' <div class="list_city_head">' + keywords + ',按拼音排序</div>';
                    html += '<div class="list_city_container">';
                    for (var i = 0; i < data.length; i++) {
                        var item = data[i];
                        var href = "javascript:void(0)";
                        if (item.tagTypeName == "hotel") {
                            href = "/hotel/detail?hotelid=" + item.tagId;//酒店详情页
                        }
                        else if (item.tagTypeName == "tag") {
                            href = "http://www.qmango.com/hotel_tag_" + item.tagId + ".html"; //标签页
                        }
                        html += '<a href="' + href + '" style="display: block;" target="_blank">';
                        html += '<span></span>';
                        html += '<b name="101669|hotel">' + item.tagName + '</b>';
                        html += '</a>';
                    }
                    html += '</div>'
                    $("#suggest_city_keywords").html(html).show();
                }
                else {
                    $("#suggest_city_keywords").html(html).hide();
                }
            }
        })
    }
    else {
        $("#suggest_city_keywords").html('').hide();
    }
});

$('#suggest_city_keywords').mouseleave(function () {
    $("#suggest_city_keywords").hide();
})


//关键字弹出框的点击事件
$('.keywords_pop a').click(function () {
    $("#keywords").val($(this).attr("title"));
    $("#tag_id").val($(this).attr("name"));
    $('.keywords_pop').hide();
    $("input[name='locationFilter']").removeAttr("checked");
    getHotels(1);
})

//热门位置的单选按钮事件
$("input[name='locationFilter']").click(function () {
    var type = $(this).attr("date-type");
    var id = $(this).val();
    if (type == 2) {
        //tags标签
        $("#tag_id").val(id);
        $("#district_id").val(0);
        getHotels(1);
    } else if (type == 1) {
        //区
        $("#tag_id").val(0);
        $("#district_id").val(id);
        getHotels(1);
    }

    //清空关键字搜索
    $("#keywords").val('');
})

//价格选择搜索，多选
$("input[name='pircelimit']").click(function () {
    //清空自定义价格
    $("#price_min").val('');
    $("#price_max").val('');

    //加载数据
    getHotels(1);
});

//点击自定义价格事件
$("#freesetprice").click(function () {
    var priceMin = $("#price_min").val();
    var priceMax = $("#price_max").val();

    if (priceMin != '' && !Validator.isInter(priceMin)) {
        alert("最小价格必须为正整数");
        return false;
    }

    if (priceMax != '' && !Validator.isInter(priceMax)) {
        alert("最大价格必须为正整数");
        return false;
    }

    if (priceMin != '' && priceMax != '') {
        if (parseInt(priceMin) >= parseInt(priceMax)) {
            alert("价格最小值应该小于最大值");
            return false;
        }
    }

    //清空价格选项
    $("input[name='pircelimit']").removeAttr('checked');

    //加载数据
    getHotels(1);
})

//酒店类别选择事件
$("input[name='qhtype']").click(function () {
    getHotels(1);
});

//酒店品牌选择事件
$("input[name='qbrand']").click(function () {
    getHotels(1);
});

//优保，促销
$("#yb-hotel,#cx-hotel").click(function () {
    getHotels(1);
})

// 热门位置tab栏切换
$('#rmwz .type-off').on('click', function () {
    $(this).addClass('type-on').siblings().removeClass('type-on')
    $('.types .type-con').hide()
    if ($(this).attr('id') == "t_1") {
        $('#at_1').show()
    } else if ($(this).attr('id') == "t_2") {
        $('#at_2').show()
    } else if ($(this).attr('id') == "t_3") {
        $('#at_3').show()
    } else if ($(this).attr('id') == "t_4") {
        $('#at_4').show()
    } else if ($(this).attr('id') == "t_5") {
        $('#at_5').show()
    } else if ($(this).attr('id') == "t_6") {
        $('#at_6').show()
    }
})

// 酒店类别tab栏切换
$('#hotel-type .type-off').on('click', function () {
    // console.log(this)

    if ($(this).attr('show') == "off") {
        $('.chk').show();
        $(this).attr('show', 'on').siblings().attr('show', 'off')
    } else {
        $('.chk').hide();
        $(this).attr('show', 'off').siblings().attr('show', 'off')
    }
    // $('.chk').show();
    $('.chk .hotel-lb').hide();
    if ($(this).attr('name') == "type-off1") {
        $('.hotel-lb1').show()
    } else if ($(this).attr('name') == "type-off2") {
        $('.hotel-lb2').show()
    } else if ($(this).attr('name') == "type-off3") {
        $('.hotel-lb3').show()
    } else if ($(this).attr('name') == "type-off4") {
        $('.hotel-lb4').show()
    } else if ($(this).attr('name') == "type-off5") {
        $('.hotel-lb5').show()
    } else if ($(this).attr('name') == "type-off6") {
        $('.hotel-lb6').show()
    }
})

//排序tab切换
$('#list-title span').click(function () {
    var curOrderId = $("#list-title span.types-on").attr("data-orderid");
    $('#list-title span').removeClass('types-on');
    $(this).addClass('types-on');
    var newOrderId = $(this).attr('data-orderid');
    if (curOrderId == newOrderId) {
        //当前tab，升序降序
        var orderType = $(this).attr("data-ordertype");
        if (orderType == "down") {
            $(this).attr("data-ordertype", "up");
            $(this).find('em').removeClass('down-off').addClass('up-off');
        }
        else {
            $(this).attr("data-ordertype", "down");
            $(this).find('em').removeClass('up-off').addClass('down-off');
        }
    }

    var orderBy = "recommand_desc";
    var newOrderType = $(this).attr("data-ordertype");
    if (newOrderId == 1) {
        orderBy = "recommand";
    }
    else if (newOrderId == 2) {
        orderBy = "price";
    }
    else if (newOrderId == 3) {
        orderBy = "comment";
    }
    else if (newOrderId == 4) {
        orderBy = "ddnums";
    }

    orderBy = orderBy + "_" + (newOrderType == "up" ? "asc" : "desc");

    $("#hid_orderBy").val(orderBy);

    getHotels(1);
})

// 分页器
$("#pagination3").pagination({
    currentPage: 1,
    totalPage: 1,
    isShow: true,
    count: 7,
    homePageText: "首页",
    //endPageText: "尾页",
    prevPageText: "上一页",
    nextPageText: "下一页",
    callback: function (current) {
        getHotels(current);
    }
});

$('.list_label_wrap a').on('click', function () {
    $(this).addClass('current').parent().siblings().children().removeClass('current')
    $('.pop_city_container ul').hide()
    if ($(this).text() == "热门") {
        $('#label_city1_container').show()
    } else if ($(this).text() == "ABCD") {
        $('#label_city2_container').show()
    } else if ($(this).text() == "EFGHJ") {
        $('#label_city3_container').show()
    } else if ($(this).text() == "KLMN") {
        $('#label_city4_container').show()
    } else if ($(this).text() == "PQRSTW") {
        $('#label_city5_container').show()
    } else if ($(this).text() == "XYZ") {
        $('#label_city6_container').show()
    }
})


//日历
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
            handler: t1,
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

    var theYear;
    var theMonth;
    var theDate;
    var chose_date;
    var chose_edate;
    var start_date;
    var end_date;
    var show_date;
    var show_edate;
    theYear = (new Date()).getFullYear();
    theMonth = (new Date()).getMonth();
    theDate = (new Date()).getDate();
    chose_date = (theMonth + 1) + "/" + (theDate + 1) + "/" + theYear;
    chose_edate = (theMonth + 1) + "/" + (theDate + 2) + "/" + theYear;
    start_date = new Date(theYear, theMonth, theDate + 1);
    end_date = new Date(theYear, theMonth, theDate + 2);
    show_date = start_date.getFullYear() + "-" + (start_date.getMonth() + 1) + "-" + start_date.getDate();
    show_edate = end_date.getFullYear() + "-" + (end_date.getMonth() + 1) + "-" + end_date.getDate();
    //$('#date').simple_Datepicker({chosendate:chose_date,startdate:theYear,enddate:theYear + 2});
    //$('#date2').simpleDatepicker({chosendate:chose_edate,startdate:theYear,enddate:theYear +2});
    if (sdate.length == 0 && sedate.length == 0) {
        $('#date').val(show_date);
        $('#date2').val(show_edate);
    }
    else {
        $('#date').val(sdate);
        $('#date2').val(sedate);
    }
}

function t1(d) {
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

//推荐的tab切换
$('#tabs .tab').on('click', function () {
    $(this).addClass('tab-act').siblings().removeClass('tab-act')
    $('.youh-tab').hide();
    var tabindex = $(this).attr("tabindex");
    $('.youh-tab[tabindex=' + tabindex + ']').show();
})

$('.closeHide').on('click', function () {
    //$('.youh-hotel').hide()
    $('#tabs,.youh-hotel').fadeOut(500);
})

//立减订单二维码,绑定二维码事件
function bindscode() {
    $('body').delegate('.mob', 'mouseover', function () {
        var str = 'http://m.qmango.com/hotel/detail?id=' + ($(this).find('.scode').attr('data-id'));
        if ($(this).find('.scode table').length < 1 && $(this).find('.scode canvas').length < 1) {
            $(this).find('.scode').qrcode({
                width: 110,
                height: 110,
                text: str
            });
        }
        $(this).find('.pop').show();
    });
    $('body').delegate('.mob', 'mouseout', function () {
        $(this).find('.pop').hide();
    });
}


var map_top, map_left;
map_top = $('#small-map').offset().top;
map_left = $('#small-map').offset().left;

var scroll_;
function initScroll() {
    scroll_ = new scrollHtml();
    scroll_.scrollContId = "scroll-youh";//内容容器ID
    scroll_.arrLeftId = "page-left";//左箭头ID
    scroll_.arrRightId = "page-right";//右箭头ID

    scroll_.frameWidth = $('#scroll-youh').width();//显示框宽度
    scroll_.pageWidth = $('#scroll-youh').width();//滚动宽度

    scroll_.speed = 1; //移动速度
    scroll_.space = 500; //每次移动像素
    scroll_.autoPlay = false; //自动播放
    //scroll_.autoPlayTime   = 3; //自动播放间隔时间(秒)

    scroll_.initialize();
}

initScroll();

window.onresize = winResize;

function winResize() {
    var w = 0;
    if ($(window).width() <= 1250) {
        w = 885;
    } else {
        w = 1095;
    }
    map_left = ($(window).width() - 1200) / 2 + 890;
    map_top = $('.list-left').offset().top;
    $('#small-map').css({ left: map_left });
    scroll_.resize(w);

}

$(document).ready(function () {
    $(window).scroll(function () {
        showGoTop();
    });
});

function showGoTop() {
    if ($(window).scrollTop() > 0) {
        $('#scroll_nav .r_top').parent().fadeIn(400);
    } else {
        $('#scroll_nav .r_top').parent().fadeOut(200);
    }

    if ($(".list-right").is(":visible")) {
        if ($(window).scrollTop() + 640 >= $('.foot15').offset().top - 130) {
            $('#small-map').addClass('scroll-map2').css({ top: $('.foot15').offset().top - 774 });
        } else {
            $('#small-map').removeClass('scroll-map2').css({ top: 0 });
        }

        if ($('#scrollByScreen').attr('checked')) {
            if ($(window).scrollTop() > map_top) {
                $('#small-map').addClass('scroll-map').css({ left: map_left });
            } else {
                $('#small-map').removeClass('scroll-map');
            }
        } else {
            $('#small-map').removeClass('scroll-map');
        }
    }
}

function scroll_map() {
    if (!$('#scrollByScreen').attr('checked')) {
        $('#small-map').removeClass('scroll-map');
    }
}
