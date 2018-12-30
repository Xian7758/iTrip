(function ($) {
    var methods = {
        init: function (obj) {
            var html = '<div id="pop_city_city" class="pop_city" style="display: none;">';
            html += '<div class="c_title"><span>请选择城市或输入城市名称的拼音或英文</span></div>';
            html += '<div class="list_label_wrap">';
            html += '<ul class="list_label clearfix">';
            html += '<li><a data-type="1" id="label_city1" class="current" href="javascript:void(0)">热门</a></li>';
            html += '<li><a data-type="2" id="label_city2" href="javascript:void(0)">ABCD</a></li>';
            html += '<li><a data-type="3" id="label_city3" href="javascript:void(0)">EFGHJ</a></li>';
            html += '<li><a data-type="4" id="label_city4" href="javascript:void(0)">KLMN</a></li>';
            html += '<li><a data-type="5" id="label_city5" href="javascript:void(0)">PQRSTW</a></li>';
            html += '<li><a data-type="6" id="label_city6" href="javascript:void(0)">XYZ</a></li>';
            html += '</ul>';
            html += '</div>';
            html += '<div class="pop_city_container">';
            html += '<ul id="label_city1_container" class="current" data-type="热门">';
            html += '<li style="width:46px;color:#FF7000;">目的地</li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="3">天津</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="2">上海</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="1">北京</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="5">哈尔滨</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="4">重庆</a></li>';
            html += '<li style="width:46px; color:#FF7000;"></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="28">成都</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="6">大连</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="16">镇江</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="12">南京</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="14">苏州</a></li>';
            html += '<li style="width:46px; color:#FF7000;"></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="7">青岛</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="13">无锡</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" style="color:#0066CC;" value="18">香港</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="99">银川</a></li>';
            html += '<li style="margin-right:0;"><a href="javascript:void(0)" value="477">武汉</a></li>';
            html += '<li style="width:46px;color:#FF7000;">古镇</li>';
            html += '<li style="margin-right:0;"><a value="866" href="javascript:void(0)">凤凰</a></li>';
            html += '<li style="margin-right:0;"><a value="37" href="javascript:void(0)">丽江</a></li>';
            html += '<li style="margin-right:0;"><a value="36" href="javascript:void(0)">大理</a></li>';
            html += '<li style="margin-right:0;"><a value="871" href="javascript:void(0)" style="color:#0066CC;">阳朔</a></li>';
            html += '<li style="margin-right:0;"><a value="571" href="javascript:void(0)" >西塘</a></li>';
            html += '<br>';
            html += '<li style="width:46px; color:#FF7000;"></li>';
            html += '<li style="margin-right:0;"><a value="571" href="javascript:void(0)" >乌镇</a></li>';
            html += '<li style="margin-right:0;"><a value="660" href="javascript:void(0)">香格里拉</a></li>';
            html += '<li style="margin-right:0;"><a value="2132" href="javascript:void(0)" style="color:#0066CC;" >黄姚</a></li>';
            html += '<li style="margin-right:0;"><a value="22586" href="javascript:void(0)" style="color:#0066CC;">西江</a></li>';
            html += '<li style="margin-right:0;"><a value="22457" href="javascript:void(0)">束河</a></li>';
            html += '<br>';
            html += '<li style="width:46px; color:#FF7000;"></li>';
            html += '<li style="margin-right:0;"><a value="1161" href="javascript:void(0)">泸沽湖</a></li>';
            html += '<li style="margin-right:0;"><a value="23" href="javascript:void(0)" >宏村</a></li>';
            html += '<li style="margin-right:0;"><a value="986" href="javascript:void(0)" style="color:#0066CC;">镇远</a></li>';
            html += '<li style="margin-right:0;"><a value="104" href="javascript:void(0)">平遥</a></li>';
            html += '<li style="margin-right:0;"><a value="22602" href="javascript:void(0)">周庄</a></li>';
            html += '<br>';
            html += '<li style="width:46px;color:#FF7000;">景点</li>';
            html += '<li style="margin-right:0;"><a value="25" href="javascript:void(0)" >鼓浪屿</a></li>';
            html += '<li style="margin-right:0;"><a value="22564" href="javascript:void(0)">九寨沟</a></li>';
            html += '<li style="margin-right:0;"><a value="27" href="javascript:void(0)">张家界</a></li>';
            html += '<li style="margin-right:0;"><a value="23" href="javascript:void(0)">黄山</a></li>';
            html += '<li style="margin-right:0;"><a value="1161" href="javascript:void(0)">泸沽湖</a></li>';
            html += '<br>';
            html += '<li style="width:46px; color:#FF7000;"></li>';
            html += '<li style="margin-right:0;"><a value="187" href="javascript:void(0)">北戴河</a></li>';
            html += '<li style="margin-right:0;"><a value="10006" href="javascript:void(0)">西湖</a></li>';
            html += '<li style="margin-right:0;"><a value="20" href="javascript:void(0)">千岛湖</a></li>';
            html += '<li style="margin-right:0;"><a value="1" href="javascript:void(0)" >故宫</a></li>';
            html += '<li style="margin-right:0;"><a value="22535" href="javascript:void(0)">泰山</a></li>';
            html += '<br>';
            html += '<li style="width:46px; color:#FF7000;"></li>';
            html += '<li style="margin-right:0;"><a value="30" href="javascript:void(0)">较场尾</a></li>';
            html += '<li style="margin-right:0;"><a value="30" href="javascript:void(0)">欢乐谷</a></li>';
            html += '<li style="margin-right:0;"><a value="871" href="javascript:void(0)"  style="color:#0066CC;">西街</a></li>';
            html += '<li style="margin-right:0;"><a value="1526" href="javascript:void(0)" style="color:#0066CC;">龙脊梯田</a></li>';
            html += '<li style="margin-right:0;"><a value="179" href="javascript:void(0)" style="color:#0066CC;">黄果树</a></li>';
            html += '</ul>';
            html += this.loadCity();
            html += '</div>';
            html += '</div>';
            $(obj).parent().append(html);

            html = '<div id="suggest_city_city" class="list_city" style="top: 37px; left: 1px; display: none;z-index:999;"></div>';

            $(obj).parent().append(html);

            $(".list_label a").click(function () {
                var dateType = $(this).attr("data-type");
                $(".list_label a").removeClass("current");
                $(this).addClass("current");

                $(".pop_city_container ul").hide();
                $("#label_city" + dateType + "_container").show();
            });
        },
        loadCity: function () {
            var html = "";
            var index = 1;
            for (var item in labelFromcity) {
                index++;
                var cityIds = labelFromcity[item];
                html += '<ul style="display:none" id="label_city' + index + '_container" data-type="' + item + '">';
                var lastletter = "";
                var index1 = 1;

                for (var i = 0; i < cityIds.length; i++) {
                    var elm = cityIds[i];
                    var cityItem = citysFlight[elm];
                    var newletter = cityItem[3].substring(0, 1).toUpperCase();
                    if (lastletter == "" || lastletter != newletter) {
                        if (lastletter != "") {
                            html += '<br/>';
                        }
                        html += '<li style="width:20px; color:#FF7000;">' + newletter + '</li>';
                        index1 = 0;
                    }
                    if (index1 > 0 && index1 % 5 == 0) {
                        html += '<li style="width:20px; color:#FF7000;"></li>';
                    }
                    html += '<li><a href="javascript:void(0)" value="' + cityItem[0] + '">' + cityItem[1].split("，")[0] + '</a></li>';
                    lastletter = newletter;
                    index1++;
                }
                html += '</ul>';
            }

            return html;
        }
    }


    $.fn.citybox = function (optitons) {
        methods.init(this);
        var self = this;
        $(this).on("click", function () {
            $("#pop_city_city").show();
            $("#pop_city_city").mouseleave(function () {
                $("#pop_city_city").hide();
            })
        })
        $(".pop_city_container a").click(function () {
            var cityId = $(this).attr("value");
            var cityname = $(this).html();
            $(self).val(cityname);

            if ($.isFunction(optitons['callback'])) {
                optitons.callback(cityId, cityname);
            }
            $("#pop_city_city").hide();
        });

        //是否集成城市关键字搜索
        if (optitons.searchkey != undefined && optitons.searchkey != null && optitons.searchkey) {
            $(this).keyup(function () {
                var keywords = $(self).val();
                var html = "";
                if (keywords != '' && keywords.length > 1) {
                    var data = [];
                    for (var i in citysFlight) {
                        var cityItem = citysFlight[i];
                        if (cityItem[1].indexOf(keywords) > -1) {
                            data.push({
                                cityId: cityItem[0],
                                name: cityItem[1]
                            });
                        }
                    }
                    if (data.length > 0) {
                        html += '<div class="list_city_head">' + keywords + ',按拼音排序</div>';
                        html += '<div class="list_city_container">';
                        var index = 0;
                        for (var i in data) {
                            var item = data[i];
                            html += '<a href="/?cityId=' + item.cityId + '" style="display: block;"><span></span><b value="' + item.cityId + '">' + item.name + '</b></a>';
                            index++;
                            if (index == 10) break;
                        }
                        html += '</div>';
                    }
                }
                $("#suggest_city_city").html(html).show();
                $("#suggest_city_city").mouseleave(function () {
                    $("#suggest_city_city").hide();
                });
            });
        }
    }
})(jQuery);