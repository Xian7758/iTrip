<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>${map.hotelName}预订网站</title>
<meta name="keywords">
<meta name="description">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<link rel="shortcut icon" type="image/x-icon"
	href="http://www.qmango.com/qmango.ico">
<link rel="stylesheet" type="text/css"
	href="<%=path%>/statics/css/normalize.css" />

<!--重置风格，必须引用-->
<link rel="stylesheet" type="text/css"
	href="<%=path%>/statics/css/main.css" />
<!--重置与复用模块，必须引用-->
<link rel="stylesheet" type="text/css"
	href="<%=path%>/statics/css/searchui.css" />
<link rel="stylesheet" type="text/css"
	href="<%=path%>/statics/css/foot15.css" />
<script src="<%=path%>/statics/js/jquery-1.9.0.min.js"></script>
<script src="<%=path%>/statics/js/jquery-migrate-1.1.1.js"></script>
<script src="<%=path%>/statics/js/util.js"></script>
<script type="text/javascript"
	src="http://api.map.baidu.com/api?v=3.0&ak=NtPcGhGNtBKmhfoHazSC1F2BGC4U2FPw"></script>
<script type="text/javascript"
	src="http://api.map.baidu.com/api?v=2.0&ak=NtPcGhGNtBKmhfoHazSC1F2BGC4U2FPw"></script>
<style>
.space15 {
	width: 15px;
	height: 12px;
	display: inline-block;
}
</style>
</head>
<body>
	<div class="header2013">
		<div class="topnav">
			<div class="inner clearfix">
				<div class="welcome">
					<ul class="w_text">
						<li class="w_t_li" id="loginInfo">嘿，你来了！</li>
						<li class="w_t_li login">
							<div class="dropdown">
								<a href="#" class="dropdown_hd">登录</a> <s class="i_dropdown"></s>
								<div class="dropdown_bd login_inner">
									<ul class="login_input">
										<li>登录名</li>
										<li class="li_placeholder"><span class="span_placeholder">手机/邮箱/用户名</span><input
											name="uid" id="uid" type="text" class="input_login"
											autocomplete="off"></li>
										<li>密码</li>
										<li><input name="upwd" id="upwd" type="password"
											class="input_login"></li>
										<li><input name="mdl" id="mdl" type="checkbox" value=""
											class="checkbox_login" autocomplete="off"><label
											for="mdl">十天免登录</label><a href="/users/passwordForget.asp"
											target="_blank" class="a_getpassword">忘记密码?</a></li>
										<li class="l_i_btn">
											<button type="button" id="btnLogin">登录</button>
										</li>
									</ul>
									<ul class="login_link">
										<li>使用以下帐号登录</li>
										<li><span class="btns qq"> <s></s><a
												href="http://www.qmango.com/ThirdPartLogin/qqconnect/redirect.asp">
													QQ </a>
										</span></li>
										<li><span class="btns mail139"> <s></s><a
												href="http://www.qmango.com/ThirdPartLogin/weixin/redirect.asp">
													微信 </a>
										</span></li>
										<li><span class="btns sina"><s></s><a
												href="http://www.qmango.com/xlapi/index.asp">新浪</a></span></li>
										<li><span class="btns alipay"> <s></s><a
												href="http://www.qmango.com/alipayauth/auth_authorize.asp">
													支付宝 </a>
										</span></li>
									</ul>
									<span class="close"
										onclick="$('.dropdown').removeClass('hover');"></span>
								</div>
							</div>
						</li>
						<li class="w_t_li reg"><a
							href="http://www.qmango.com/users/login.asp">注册</a></li>
					</ul>
				</div>
				<div class="topmenu">
					<ul class="">
						<li class="myorder">
							<div class="dropdown">
								<a href="javascript:void(0);" class="dropdown_hd">我的订单</a> <a
									class="i_order" href="#"> <span class="i_left"></span><span
									class="i_main" id="order_num">0</span> <span class="i_right">
								</span>
								</a>
								<div class="dropdown_bd order_inner" id="orderlist">
									<table cellpadding="0" cellspacing="0" class="order_list"></table>
								</div>
							</div>
						</li>
						<li><a target="_blank"
							href="http://chat.looyu.com/chat/chat/p.do?c=48339&amp;f=102300&amp;g=59523"
							rel="external nofollow">在线客服</a></li>
						<li><a target="_blank" href="http://www.qmango.com/help.asp">帮助中心</a></li>
						<li><a target="_blank" href="javascript:;" class="wx_link">
								关注微信，赢ipad <img src="picture/wx.gif" alt="关注微信，赢ipad"
								width="413" height="385" />
						</a></li>
						<li><a href="http://www.mangocity.com" target="_blank"
							class="go_mg">芒果网</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mainnav clearfix">
			<h2 class="logo">
				<a alt="青芒果旅行网" title="青芒果旅行网 领先的经济类酒店预订平台"
					href="<%=path%>/listHotel"></a>
			</h2>
			<ul class="nav2013">
				<li><a href="<%=path%>/listHotel" class="nav_index">首页</a></li>
				<li><strong></strong><a
					href="http://hotelinfo.qmango.com/hotel/list/?clsid=3,8,13,9,11">客栈青旅</a></li>
				<li><a href="http://hotelinfo.qmango.com/hotel/list/?clsid=1,2">经济酒店</a>
				</li>
				<li><a href="http://hotelinfo.qmango.com/hotel/list/?cityId=18">香港酒店</a></li>

				<li class="icon_oversea"><a
					href="http://hotelinfo.qmango.com/hotel/list/?clsid=16,17">精品频道</a></li>
				<!--<li class="icon_hot"><a href="http://ly.qmango.com/">国内旅游</a></li>-->
				<li class="icon_oversea"><a
					href="http://www.qmango.com/boutique.html">寻舍</a></li>
				<li class="icon_oversea"><a href="http://www.1yunsu.com/"
					target="_blank">云宿商城</a></li>
				<li class="icon_pms"><strong><a
						href="http://pms.qmango.com/" class="a_pms" title="PMS"
						target="_blank">PMS</a><a href="http://jiameng.qmango.com/"
						title="开店" target="_blank">开店</a></strong><a
					href="http://hotel.qmango.com/" target="_blank">酒店登录</a></li>

			</ul>
			<div class="topad">
				<a href="http://www.qmango.com/apk/index.html" target="_blank"
					title="青芒果手机端预订低至1元"> <img alt="青芒果酒店预订手机客户端免费下载" class="fl"
					src="<%=path%>/statics/picture/appdown2.gif" style="">
					<p class="tp">0元预订</p>
					<p>绝对低价</p>
				</a>
			</div>
			<div class="topslogan"></div>
		</div>
		<div class="colorline">
			<div class="inner clearfix">
				<span class="line01"></span><span class="line02"></span>
			</div>
		</div>
	</div>

	<link rel="stylesheet" type="text/css"
		href="<%=path%>/statics/css/tools.css" />
	<link rel="stylesheet" type="text/css"
		href="<%=path%>/statics/css/style.css" />
	<link rel="stylesheet" href="<%=path%>/statics/css/pagination.css" />
	<style>
.hotel_intro .name {
	display: inline-block;
	max-width: 400px;
	height: 100%;
	white-space: normal;
}
</style>
	<!--酒店介绍S-->
	<section>
		<div class="hotel_intro">
			<p class="title-nav">
				<a target="_blank" href="http://www.qmango.com/">青芒果·特色住宿预订平台</a> <span>&gt;</span>
				<a href="/?cityId=34">${map.hotelName}预订</a> <span>&gt;</span>${map.hotelName}
			</p>
			<div class="content clearfix">
				<div style="float: left; width: 100%;">
					<ul>
						<li><span class="name" title="昆明倾城国际青年旅舍">${map.hotelName}</span>
							<a href="http://www.qmango.com/baozhang.asp" target="_blank"><s
								class="bao" title="订单确认后，保证100%到店有房"></s></a> <s class="tui"
							title="入住前24小时取消可退还订金，节假日及全额预付订单除外"></s> <s class="yha"
							title="国际青年旅舍联盟（IYHF）公认会员"></s></li>
						<li><span class="addr" title="昆明市华山西路92号">${map.address}</span>
							<span class="dingw"><s></s><font>查看地图</font></span></li>
						<li class="area"><span>区域：</span> <a
							href="http://www.qmango.com/hotel_tag_20731.html"
							title="翠湖公园/小西门" target="_blank">翠湖公园/小西门</a> <a
							href="http://www.qmango.com/hotel_tag_41353.html" title="云南大学"
							target="_blank">云南大学</a> <a
							href="http://www.qmango.com/hotel_tag_20729.html" title="昆明圆通山"
							target="_blank">昆明圆通山</a></li>
						<li class="tiaoj"><span><s class="wifi"></s><font>提供wifi</font></span>
							<span><s class="yans"></s><font>24小时热水</font></span> <span
							class="no-sev"><s class="jies"></s><font>不提供接机</font></span></li>
					</ul>

					<div class="yuding">
						<p>
							<em class="ft24">￥</em> <em class="ft36">45</em>起
						</p>
						<div class="mobile">
							<font>手机预订减￥2</font>
							<div class="pop">
								<div class="scode" data-id="16736"></div>
							</div>
						</div>
					</div>

					<div class="reason">
						<div class="tuij clearfix">
							<p style="float: left; width: 25px; height: 21px;"></p>
							<div class="infol">
								<ul class="scroll-info">
									<li>33333在几分钟前预定了 <a class="co">杭州星旅太空舱酒店</a> 可获得 <em
										class="co">3</em>元现金
									</li>
									<li>13702469在几分钟前预定了 <a class="co">7天酒店北京学院路六道口地铁站店</a>
										可获得 <em class="co">5</em>元现金
									</li>
									<li>13702468在几分钟前预定了 <a class="co">上海浦东宾家国际青年旅舍</a> 可获得 <em
										class="co">3</em>元现金
									</li>
									<li>33333在几分钟前预定了 <a class="co">7天酒店上海徐家汇漕溪路地铁站店</a> 可获得 <em
										class="co">5</em>元现金
									</li>
									<li>33333在几分钟前预定了 <a class="co">海口阳光水岸青年旅舍</a> 可获得 <em
										class="co">3</em>元现金
									</li>
									<li>13702464在几分钟前预定了 <a class="co">三亚幸福花儿海景客栈</a> 可获得 <em
										class="co">4</em>元现金
									</li>
									<li>13702457在几分钟前预定了 <a class="co">苏州安在途青年旅舍</a> 可获得 <em
										class="co">6</em>元现金
									</li>
									<li>13702462在几分钟前预定了 <a class="co">成都瞿上酒店双流国际机场店</a> 可获得 <em
										class="co">6</em>元现金
									</li>
									<li>33333在几分钟前预定了 <a class="co">汉庭北京南苑机场酒店</a> 可获得 <em
										class="co">0</em>元现金
									</li>
									<li>33333在几分钟前预定了 <a class="co">成都画里民宿</a> 可获得 <em
										class="co">10</em>元现金
									</li>

								</ul>
							</div>
							<div class="fl" style="width: 100%; height: 23px;">
								<em class="tjr"></em>
							</div>
							<div>
								<span class="p30"> 用户满意度：<em class="co"> <i
										class="ft1">97.0</i><i class="ft2">%</i>
								</em>
								</span>
							</div>
							<div>
								<span class="p30">最近成交数：<em class="co"><i
										class="ft1">1443</i></em></span>
							</div>
						</div>

						<table>
							<tr>
								<td><span onClick="like('16736','1',this,this)"
									class="clearfix"><s class="like"></s><font>喜欢</font></span>
									<div class="total-like">1次喜欢！</div></td>
								<td><span onClick="addSc('16736','2',this,this)"><s
										class="sc"></s><font>收藏</font></span>
									<div class="sc-box">
										<p>收藏成功！</p>
										<p>
											您已收藏0家酒店， <a
												href="http://www.qmango.com/myrest/my_collection.asp">查看我的收藏</a>
										</p>
									</div></td>
								<td style="border: none;"><span onClick="showFx(this)"><s
										class="fx"></s><font>分享</font></span></td>
							</tr>
						</table>
					</div>

				</div>

				<!--图片显示及活动-begin-->



				<div class="pics">


					<div class="slide">
						<ul id="slide_box">
							<li><img width="625" height="370"
								src="<%=path %>/statics/picture/${map.img}" alt="酒店图片"
								data-index="0"></li>
						</ul>
					</div>
					<div class="plist">
						<img width="262" height="162"
							src="<%=path%>/statics/picture/20171117022104450.jpg" alt="活动图片"
							data-index="1"> <img width="262" height="205"
							src="<%=path%>/statics/picture/20171117021914388.jpg" alt="活动图片"
							data-index="2" class="h205">
					</div>
					<div class="plist">
						<img width="262" height="162"
							src="<%=path%>/statics/picture/20171117022101341.jpg" alt="活动图片"
							data-index="3"> <img width="262" height="205"
							src="<%=path%>/statics/picture/2017111702191460.jpg" alt="活动图片"
							data-index="3">
					</div>

				</div>


				<span class="pngfix jishi"><font>即时确认</font></span>
			</div>
		</div>
	</section>
	<!--酒店介绍E-->
	<!--酒店详情S-->
	<section>
		<div class="hotel_details">
			<div class="nav-container">
				<div class="content clearfix">
					<ul>
						<li data-scroll-nav="1"><span class="tu1"><i></i>房型预订</span>
						</li>
						<li data-scroll-nav="2"><span class="tu2"><i></i>旅舍概况</span>
						</li>
						<!-- <li data-scroll-nav="3">
                                                                    <span class="tu3"><i></i>老板专区</span>
                                                                </li>-->
						<li data-scroll-nav="4"><span class="tu4"><i></i>位置交通</span>
						</li>
						<li data-scroll-nav="5"><span class="tu5"><i></i>点评问答</span>
						</li>
						<li data-scroll-nav="6"><span class="tu6"><i></i>周边推荐</span>
						</li>
					</ul>
					<a href="javascript:;" class="yud">马上预订</a>
				</div>
			</div>



			<form action="http://www.qmango.com/booking.asp" method="post"
				name="search" id="search11" onSubmit="return onchecksignupx(this)">

				<div class="btn_popbaoxian" style="display: none;"></div>

				<!--纠错参数 S-->
				<input type="hidden" id="TP_Sdate" name="TP_Sdate"
					value="2018-12-06" /> <input type="hidden" id="TP_Edate"
					name="TP_Edate" value="2018-12-07" /> <input type="hidden"
					id="hd_TP_Sdate" name="hd_TP_Sdate" value="2018-12-06" /> <input
					type="hidden" id="hd_TP_Edate" name="hd_TP_Edate"
					value="2018-12-07" />
				<!--纠错参数 E-->

				<input type="hidden" id="hostel" name="hostel" value="16736">
				<input type="hidden" name="ac" value="1"> <input
					type="hidden" name="hdRestCard" value=""> <input
					type="hidden" name="hidden_actives" value="0" /> <input
					type="hidden" id="days" name="days" value="1"> <input
					type="hidden" id="hdnydtsxzs" value="" /> <input type="hidden"
					id="hdnydtsxze" value="" /> <input type="hidden"
					id="hdnydtsxzdays" value="" /> <input type="hidden"
					id="hide_resourceid" value="0" /> <input type="text"
					id="starttime" name="starttime" readonly="readonly"
					value="2018-12-06" style="display: none;"> <input
					type="text" id="endtime" name="endtime" readonly="readonly"
					value="2018-12-07" style="display: none;">


				<div class="content" id="room" data-scroll-index="1">
					<div class="date" id="date_select">
						<div class="til">选择您的房间</div>
						<div class="date_input" style="margin-left: 35px;">
							<span>入住日期</span> <input type="text" id="date" name="date"
								value="2018-12-06" class="time_input" readonly> <em></em>
						</div>
						<div class="date_input">
							<span>离店日期</span> <input type="text" id="date2" name="date2"
								value="2018-12-07" class="time_input" readonly> <em></em>
						</div>
						<span class="change" id="change" onclick="loadroom()"
							style="background-color: red">确定</span>
					</div>
					<div class="room_type">
						<span class="show act" title="list">列表展示</span>
					</div>
					<div style="display: block;" class="room_pics rooms-list clearfix"
						id="room_list">
						<div class="room_pics rooms-list clearfix" style="display: block;">
							<div class="list-title">
								<span class="t1">房间类型</span> <span class="t5">早餐</span> <span
									class="t1">房间设施</span> <span class="t3">会员价</span> <span
									class="t4">房间数</span>
							</div>
							<div class="list-ul">
								<ul class="clearfix">
									<c:forEach var="rm" items="${room}">
										<li>
											<div class="d1">
												<span class="name" style="color: #666;">${rm.rtype}</span> <span
													class="yf" title="全额预付订单，确认快，价格低，订单一经确认不可取消与更改">全额预付</span>
												<span class="yf" title="立即确认"
													style="border-radius: 10px; background: #fff; border: 1px solid #5ec7e8; color: #1d89e5;">即时确认</span>
											</div>
											<div class="d5">
												<c:if test="${rm.breakfast eq 10 }">
													<span>含早餐</span>
												</c:if>
												<c:if test="${rm.breakfast eq 11 }">
													<span>不早餐</span>
												</c:if>
											</div>
											<div style="" class="d2">
												<span class="s1-act" title="Wi-Fi">wifi</span> <span
													class="s2" title="电视">电视</span> <span class="s3" title="电话">电话</span>
												<span class="s4" title="空调">空调</span> <span class="s5"
													title="卫浴">卫浴</span> <span class="s6" title="早餐">早餐</span>
											</div>
											<div class="d3">
												<div class="price" id="3161052">
													<font style="padding-left: 30px">￥<em>${rm.price }</em></font>
													<div class="poptext_box">
														<s></s>
														<p class="popprice_p">以下是您预订日期内的每晚房价</p>
														<ul class="view_price"></ul>
													</div>
												</div>
												<span style="padding-left: 30px" class="pfan">
													${rm.price } <label>立减￥n</label>
												</span>
											</div>
											<div class="d4">

												<c:if test="${rm.room eq 0}">
													<font color="red" style="padding-left: 30px">满客</font>
												</c:if>
												<c:if test="${rm.room ne 0}">
													<div style="padding-left: 30px">
														<select><option>一间</option>
															<option>两间</option>
															<option>三间</option>
														</select>
													</div>
												</c:if>
											</div>
										</li>
									</c:forEach>
								</ul>
								<p class="list-more clearfix">
									<input style="background-color: #f8674A;" type="button"
										class="sub" value="预 订">
								</p>
							</div>
						</div>
					</div>
					<select style="display: none" id="hotelProduct_1"
						name="hotelProduct_1"><option value="0">0</option></select>
			</form>
			<script language="javascript">
                var showtype;
                function getbooking() {
                    availFormCheck1(document.forms['search'], 1);
                }
            </script>
			<div class="content">
				<div class="description clearfix" style="padding: 35px;">
					<div class="des_right des_con" style="margin-top: 0px;">
						<div>
							<ul class="liyou">



								<li title="国际青年旅舍联盟成员，翠湖之畔，昆明设施最好的青旅">国际青年旅舍联盟成员，翠湖之畔，昆明设施</li>

								<li>青芒果优保酒店，即时确认质量有保障</li>

								<li>1423个真实入住用户点评数据，真实可靠</li>



							</ul>
						</div>
						<div class="til">为什么选择 ${map.hotelName }</div>
					</div>
				</div>
			</div>
			<!--客栈介绍S-->
			<div class="content" data-scroll-index="2">
				<div class="description clearfix">
					<div class="fl">
						<div class="des_left">
							<div class="con" id="des_con">
								<div class="js-main" style="overflow-y: scroll">
									<p data-state="close">${map.details}</p>
								</div>

							</div>
							<div class="til">旅舍介绍</div>
						</div>

						<div class="des_right" style="height: 158px;">
							<div>
								<span><i></i><em>${map.facilities}</em></span>


							</div>
							<div class="til">旅舍设施</div>
						</div>

					</div>

				</div>
			</div>
			<!--客栈介绍E-->
			<!--老板专区S-->
			<!--老板专区E-->
			<div class="content clearfix">
				<div class="con-left">
					<!--交通位置S-->
					<div class="content2" data-scroll-index="4">
						<div class="address clearfix">
							<div class="map">
								<div id="container" style="height: 367px; width: 515px;">
								</div>
								<script type="text/javascript"> 
	                                var address = "${map.hotelName}";
									var map = new BMap.Map("container");   				// 创建地图实例  
									var point = new BMap.Point(116.404, 39.915);		// 创建点坐标  
								 
									map.addControl(new BMap.NavigationControl());
									map.addOverlay(new BMap.Marker(point));
									map.enableScrollWheelZoom(true);     				//开启鼠标滚轮缩放
									map.centerAndZoom(point, 15);						// 初始化地图，设置中心点坐标和地图级别
									map.addControl(new BMap.NavigationControl());    
									map.addControl(new BMap.ScaleControl());    
									map.addControl(new BMap.OverviewMapControl());    
									map.addControl(new BMap.MapTypeControl());  
									
									var local = new BMap.LocalSearch(map, {      
									    renderOptions:{map: map}      
									});      
									local.search(address);
									
									// 创建地址解析器实例
									var myGeo = new BMap.Geocoder();
									// 将地址解析结果显示在地图上,并调整地图视野
									myGeo.getPoint(address, function(point){
										if (point) {
											map.centerAndZoom(point, 16);
											map.addOverlay(new BMap.Marker(point));
										}else{
											alert("您选择地址没有解析到结果!");
										}
									});
								</script>
							</div>
							<div class="map_con">
								<div class="mtil">
									<span class="act">如何到达</span>
									<!-- <span>机场车站</span> -->
								</div>
								<div class="mcon">
									<div id="l-map" style="display: none"></div>
									<div class="daoda"
										style="overflow: scroll; width: 315px; height: 350px;"
										id="r-result"></div>

								</div>
							</div>
						</div>
					</div>
					<!--交通位置E-->
					<!--点评答问S-->
					<div class="content2" data-scroll-index="5">
						<div class="consultation clearfix">
							<div class="ctil dptil">
								<span onClick="loadComments(9,1)" class="act">用户点评</span>

							</div>
							<div class="ccon">
								<div class="zix clearfix" style="display: block;">
									<div class="pingf">
										<div class="fen">
											<div style="padding: 6px 0; float: left;">
												<span class="fb"> <em>9.7</em>分/10分
												</span>
												<ul>
													<li>共1423条真实点评</li>
													<li>1408人推荐，15人不推荐</li>
												</ul>
											</div>
											<p>
												气氛氛围：10分 <span class="space15"></span> 服务水平：10分 <span
													class="space15"></span> 房间设施：10分 <span class="space15"></span>
												交通位置：10分 <span class="space15"></span> 清洁卫生：10分 <span
													class="space15"></span> 安全出行：10分
											</p>
										</div>
										<a
											href="http://www.qmango.com/myrest/order.asp?st=myorder&orderstatus=1&procstatus=1"
											target="_blank">我要点评</a>
									</div>
									<div class="pingl">
										<div class="ltil">
											<a class="act" style="margin-left: 35px;"
												onClick="loadcomments(60048,1,0,1408)">全部（1423条）</a> <a
												onClick="loadcomments(60048,1,1,1408)">好评（1408条）</a> <a
												onClick="loadcomments(60048,1,2,15)" style="border: none;">差评（15条）</a>
										</div>

										<!--comments list begin-->
										<div class="pl" id="comments">
											<div id="comments-list" class="clearfix"></div>

											<div class="box PagingBox clearfix" style="margin-top: 20px;">
												<div id="pagination1" class="page fl"
													style="width: 100%; text-align: center;"></div>
											</div>
										</div>
										<!--comments list end-->

									</div>
								</div>
								<div class="zix clearfix" id="msg"></div>
							</div>
						</div>
					</div>
					<!--点评答问S-->
					<!--周边推荐S-->
					<!--周边推荐E-->
				</div>
				<div class="con-right">
					<div class="dibiao">
						<div class="title">周边地标</div>
						<div class="con">
							<ul>
								<li><span>1</span> <a target="_blank"
									href="http://www.qmango.com/hotel_tag_20731.html"
									title="翠湖公园/小西门">翠湖公园/小西门</a> <em><font>0.50</font>公里</em></li>
								<li><span>2</span> <a target="_blank"
									href="http://www.qmango.com/hotel_tag_41353.html" title="云南大学">云南大学</a>
									<em><font>0.70</font>公里</em></li>
								<li><span>3</span> <a target="_blank"
									href="http://www.qmango.com/hotel_tag_20729.html" title="昆明圆通山">昆明圆通山</a>
									<em><font>0.77</font>公里</em></li>
								<li><span>4</span> <a target="_blank"
									href="http://www.qmango.com/hotel_tag_20725.html"
									title="昆明云南省博物馆">昆明云南省博物馆</a> <em><font>1.22</font>公里</em></li>
								<li><span>5</span> <a target="_blank"
									href="http://www.qmango.com/hotel_tag_41355.html"
									title="云南民族大学">云南民族大学</a> <em><font>1.22</font>公里</em></li>
								<li><span>6</span> <a target="_blank"
									href="http://www.qmango.com/hotel_tag_20732.html" title="陆军讲武堂">陆军讲武堂</a>
									<em><font>0.67</font>公里</em></li>

							</ul>
						</div>
					</div>
				</div>

			</div>

		</div>
	</section>
	<!--酒店详情E-->
	<!--弹出大图S-->
	<div class="bigBack" id="bigBack"></div>
	<div class="bigPic" id="bigPic">
		<div class="win">
			<span class="pngfix close" onClick="closeHotel();"></span>
			<div class="img-nav" id="hotel-pic"></div>
			<div class="menu" id="pic-menu">
				<ul>
					<li><a hotel="16736" room="" data-type="1" class="act">全部图片<span
							class="num">52</span></a></li>
					<li><a hotel="16736" room="0" data-type="2">其它<span
							class="num">8</span></a></li>


					<li><a hotel="16736" data-type="3" room="all">客房<span
							class="num">44</span></a>
						<ul>
							<li><a hotel="" data-type="4" room='216383'>八人女生床位间<span
									class="num">3</span></a></li>
							<li><a hotel="" data-type="4" room='2246462'>混住16人间<span
									class="num">1</span></a></li>
							<li><a hotel="" data-type="4" room='3161052'>特惠八人间<span
									class="num">3</span></a></li>
							<li><a hotel="" data-type="4" room='54171'>单人房<span
									class="num">3</span></a></li>
							<li><a hotel="" data-type="4" room='4188073'>特价标准双人间<span
									class="num">5</span></a></li>
							<li><a hotel="" data-type="4" room='4223233'>男生八人间床位<span
									class="num">3</span></a></li>
							<li><a hotel="" data-type="4" room='1162304'>家庭房<span
									class="num">2</span></a></li>
							<li><a hotel="" data-type="4" room='54170'>标准双人间<span
									class="num">7</span></a></li>
							<li><a hotel="" data-type="4" room='1162305'>标准大床房<span
									class="num">5</span></a></li>
							<li><a hotel="" data-type="4" room='54168'>豪华大床间<span
									class="num">4</span></a></li>
							<li><a hotel="" data-type="4" room='4288013'>亲子家庭房<span
									class="num">2</span></a></li>
							<li><a hotel="" data-type="4" room='54173'>女生六人床位间<span
									class="num">3</span></a></li>
							<li><a hotel="" data-type="4" room='54169'>大床间<span
									class="num">3</span></a></li>
						</ul></li>

				</ul>
			</div>
			<div class="pictips" id="pictips">
				<!--<p>图片介绍1</p>
                    <p>图片介绍2</p>
                    <p>图片介绍3</p>
                    <p>图片介绍4</p>
                    <p>图片介绍5</p>-->
			</div>
		</div>
	</div>
	<!--弹出大图E-->
	<!--评论大图S-->
	<div class="comment-big-pic" id="comment-big-pic">
		<img src="" alt="评论大图" />
	</div>
	<!--房型大图S-->
	<div class="room-big-pic" id="room-big-pic">
		<img src="" alt="房型大图" />
	</div>
	<!-- 侧边 S-->
	<div id="scroll-nav" class="scroll-nav">
		<ul class="nav-ul">
			<li><a target="_blank" class="kf"
				href="http://chat.looyu.com/chat/chat/p.do?c=48339&amp;f=102300&amp;g=59523"></a>
			</li>
			<li>
				<div class="weixin jy">
					<div class="wei-pop">
						<img src="picture/ewm_phone.png" alt="免费下载青芒果酒店预订手机客户端">
						<ul>
							<li class="na">微信号：qmangocity</li>
							<li>随时随地查订单</li>
							<li>随时找微信客服</li>
							<li>优先推送特价酒店</li>
						</ul>
					</div>
				</div>
			</li>
			<li style="display: none;"><a href="javascript:void(0);"
				class="tp"></a></li>
		</ul>
	</div>
	<!--分享s-->
	<!--弹出登录S-->
	<div class="popWin" id="login">
		<div class="login">
			<span class="close"
				onClick="$('body,html').css('overflow','auto');$('#login').hide();"></span>
			<div class="l_left">
				<p>亲~~请登录后再操作哦！</p>
				<div class="in">
					<span>登录名</span> <input type="text" id="txtname" name="txtname"
						class="name" value="手机/邮箱/用户名" />
				</div>
				<div class="in">
					<span style="width: 39px;">密码</span> <input type="password"
						id="txtpassword" name="txtpassword" />
				</div>
				<p>
					<a href="javascript:;" class="login_btn"></a> <a
						href="javascript:;"
						onClick="$('body,html').css('overflow','auto');$('#login').hide();"
						class="cancel_btn"></a> <a
						href="http://www.qmango.com/users/login.asp" target="_blank"
						class="regedit">立即注册</a>
				</p>
			</div>
			<div class="l_right">
				<ul class="login_link">
					<li class="bor">使用以下帐号登录</li>
					<li><span class="btns qq"><s></s><a
							href="http://www.qmango.com/ThirdPartLogin/tencent/redirect.asp">QQ登录</a></span></li>
					<li><span class="btns mail139"><s></s><a
							href="http://www.qmango.com/ThirdPartLogin/weixin/redirect.asp">微信登录</a></span></li>
					<li><span class="btns sina"><s></s><a
							href="http://www.qmango.com/xlapi/index.asp">新浪微博登录</a></span></li>
					<li><span class="btns alipay"><s></s><a
							href="http://www.qmango.com/alipayauth/auth_authorize.asp">支付宝登录</a></span></li>
				</ul>
			</div>
		</div>
	</div>
	<!--弹出登录E-->
	<style>
.jiathis_style .jtico {
	background: none;
	padding-left: 0px !important;
	height: 24px !important;
	margin: 0px;
}
</style>
	<div class="fx-bg" id="fx-bg" style="display: none; height: 4877px;">
		<div class="fx-box jiathis_style"
			style="margin-top: 373px; margin-left: 930px;">
			<p>分享到：</p>
			<table>
				<tbody>
					<tr>
						<td><a class="jiathis_button_cqq" target="_blank"
							rel="nofollow"><em class="qq"></em><span>QQ好友</span></a></td>
						<td><a class="jiathis_button_weixin" target="_blank"
							rel="nofollow"><em class="weixhy"></em><span>微信好友</span></a></td>
					</tr>
					<tr>
						<td><a class="jiathis_button_tqq" target="_blank"><em
								class="tengxwb"></em><span>腾讯微博</span></a></td>
						<td><a class="jiathis_button_weixin" target="_blank"
							rel="nofollow"><em class="pengyq"></em><span>朋友圈</span></a></td>
					</tr>
					<tr>
						<td><a class="jiathis_button_qzone" target="_blank"
							rel="nofollow"><em class="qqzone"></em><span>QQ空间</span></a></td>
						<td><a class="jiathis_button_renren" target="_blank"
							rel="nofollow"><em class="renrenw"></em><span>人人网</span></a></td>
					</tr>
					<tr>
						<td><a class="jiathis_button_tsina" rel="nofollow"
							target="_blank"><em class="sinawb"></em><span>新浪微博</span></a></td>
						<td><a class="jiathis_button_douban" target="_blank"
							rel="nofollow"><em class="douban"></em><span>豆瓣</span></a></td>
					</tr>
				</tbody>
			</table>
			<span class="fx-close" onclick="$('#fx-bg').hide();"></span>
		</div>
	</div>
	<script type="text/javascript" src="js/jia.js" charset="utf-8"></script>
	<!--分享e-->
	<script src="js/scroll.min.js"></script>
	<script src="js/jquery.qrcode.min.js"></script>
	<script src="js/jquery.inview.js"></script>
	<script type="text/javascript"
		src="js/f955697f9a444d1789e77f5e6a211ac0.js"></script>
	<script type="text/javascript" src="js/jquery.lazyload.js"></script>
	<script type="text/javascript" src="js/tools.js"></script>
	<script src="js/galleria-1.4.2.js"></script>
	<script src="js/date.js"></script>
	<script src="js/js_availformcheck.js"></script>
	<script src="js/jquery.pagination.js"></script>
	<script src="js/calendar_min2.js"></script>
	<script src="js/calendar_min2.js"></script>
	<script src="js/hoteldetail.js"></script>
	<script>
            // 文字滚动
            function autoScroll(obj) {
                $(obj).animate({
                    marginTop: "-23px"
                }, 500, function () {
                    $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
                });
            }

            timeinit('2018-12-06', '2018-12-07')
            f_load();
            //-------默认所有图片弹出框读取S
            var data = [];
            $.ajax({
                url: "/hotel/queryhotelimg",
                type: "get",
                data: {hotelId:16736},
                dataType: "json",
                success: function (res) {
                    data = res.list;
                }
            });

            loadroom();

            loadcomments(60048,1,0,1423);


            function f_load() {
                var map = new BMap.Map("container");
                var point = new BMap.Point(102.71429, 25.053875);

                map.centerAndZoom(point, 15);

                // 定义自定义覆盖物的构造函数
                function SquareOverlay(center, length, color) {
                    this._center = center;
                    this._length = length;
                    this._color = color;
                }

                // 继承API的BMap.Overlay
                SquareOverlay.prototype = new BMap.Overlay();

                // 实现初始化方法
                SquareOverlay.prototype.initialize = function (map) {

                    // 保存map对象实例
                    this._map = map;

                    // 创建div元素，作为自定义覆盖物的容器
                    var div = document.createElement("div");
                    div.style.position = "absolute";

                    // 可以根据参数设置元素外观
                    div.style.width = this._length + "px";
                    div.style.height = "23px";
                    div.style.background = "#4e9f00";
                    //div.style.background="none";
                    div.style.padding = "0 0 0 4px";
                    div.style.border = "1px #3a7600 solid";
                    div.style.color = "#ffffff";
                    div.innerHTML = "<span style='font-size:12px;line-height:23px;height:23px;'>旅舍</span>";

                    // 将div添加到覆盖物容器中
                    map.getPanes().markerPane.appendChild(div);

                    // 保存div实例
                    this._div = div;

                    // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
                    // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
                    return div;
                }

                // 实现绘制方法
                SquareOverlay.prototype.draw = function () {

                    // 根据地理坐标转换为像素坐标，并设置给容器
                    var position = this._map.pointToOverlayPixel(this._center);
                    this._div.style.left = position.x - this._length / 2 + 86 + "px";
                    //85改成90
                    this._div.style.top = position.y - this._length / 2 + 63 + "px";
                }

                // 实现显示方法
                SquareOverlay.prototype.show = function () {
                    if (this._div) {
                        this._div.style.display = "";
                    }
                }

                // 实现隐藏方法
                SquareOverlay.prototype.hide = function () {
                    if (this._div) {
                        this._div.style.display = "none";
                    }
                }

                // 添加自定义方法
                SquareOverlay.prototype.toggle = function () {
                    if (this._div) {
                        if (this._div.style.display == "") {
                            this.hide();
                        }
                        else {
                            this.show();
                        }
                    }
                }

                // 初始化地图

                map.addControl(new BMap.NavigationControl());

                map.enableScrollWheelZoom();

                // 添加自定义覆盖物
                var mySquare = new SquareOverlay(map.getCenter(), 150, "#00CC33");
                map.addOverlay(mySquare);
                addMarker(point, 0);
                //添加自定义标注点
                // 编写自定义函数，创建标注
                function addMarker(point, index) {

                    // 创建图标对象
                    var myIcon = new BMap.Icon("http://img.qmango.com/nimages/map-icon.gif", new BMap.Size(30, 25), {  //改成30px
                        // 指定定位位置。
                        // 当标注显示在地图上时，其所指向的地理位置距离图标左上
                        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
                        // 图标中央下端的尖角位置。
                        offset: new BMap.Size(10, 25),
                        // 设置图片偏移。
                        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
                        // 需要指定大图的偏移位置，此做法与css sprites技术类似。
                        imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移
                    });


                    // 创建标注对象并添加到地图
                    var marker = new BMap.Marker(point, { icon: myIcon });
                    map.addOverlay(marker);

                }
            }
            function changeRoom(thisFormName, thisSelName, thisRealHotelID) {
                var ele = document.forms[thisFormName].elements;
                for (ii = 0; ii < ele.length; ii++) {
                    if (ele[ii].type == 'select-one' && ele[ii].name.indexOf('beds_') == 0 && ele[ii].name != thisSelName) {
                        ele[ii].selectedIndex = 0;
                    }

                    if (ele[ii].name == "hostel") {
                        ele[ii].value = thisRealHotelID;
                    }
                }
            }

            function loadroom() {
                ///验证数据
                var sDate = $("#date").val();
                if (sDate == '') {
                    aler('请输入入住时间!!!');
                    document.getElementById("date").focus();
                    return false
                }

                if (!isDate(sDate)) {
                    alert("入住时间不符合格式规范或无效的日期!");
                    document.getElementById("date").focus();
                    return false
                }

                var eDate = $("#date2").val();
                if (eDate == '') {
                    aler('请输入离店时间!!!');
                    document.getElementById("date2").focus();
                    return false
                }

                if (!isDate(eDate)) {
                    alert("离店时间不符合格式规范或无效的日期!");
                    document.getElementById("date2").focus();
                    return false
                }

                if (!DateHelper.DateCompare(sDate, eDate)) {
                    $("#room_list").html("<div style='padding:10px 20px 20px 5px; color:red;'>您的离店日期必须大于入住日期，请重新选择入住日期和离店日期</div>");
                    return false;
                }

                $("#starttime").val(sDate);
                $("#endtime").val(eDate);
                $("#days").val(DateDiff(eDate,sDate));

                setCookie("start_time", sDate, 1);
                setCookie("end_time", eDate, 1);

                $("#room_list").html("<div style='padding:20px;text-align:center;'><img src='picture/loading.gif' alt='正在加载数据中…' /></div>");

                $.ajax({
                    url: "/hotel/hotelroom",
                    type: "get",
                    data: { hpId:60048,hotelId:16736,sDate: sDate, eDate: eDate, isShowone: false,cityId:34 },
                    dataType: "html",
                    success: function (res) {
                        $("#room_list").html(res);
                        bindroomdetailevent();
                    },
                    error: function () {
                     
                    }
                })
            }

            function bindroomdetailevent() {
                // 房型列表介绍图片大图展示
                $('.list-ul .hide img').hover(function () {
                    $('#room-big-pic').css({ 'top': $(this).offset().top + 50, 'left': $(this).offset().left }).show();
                    $('#room-big-pic img').attr('src', $(this).attr('_src'));
                }, function () {
                    $('#room-big-pic').hide();
                });

                // 房型列表名称单击事件
                $('.list-ul .name').click(function () {
                    $(this).parents('li').next().removeClass('hd');
                });

                // 房型列表收起
                $('.list-ul .hide .sq').click(function () {
                    $(this).parents('li').addClass('hd');
                });
                $(".sub").click(function () {
                    getbooking();
                })
            }

            function DateDiff(sDate1, sDate2) { //sDate1和sDate2是20021218格式
                //sDate1和sDate2是2002-12-18格式
                var aDate, oDate1, oDate2, iDays;
                aDate = sDate1.split("-");
                oDate1 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
                aDate = sDate2.split("-");
                oDate2 = new Date(aDate[0], aDate[1] - 1, aDate[2]);

                iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
                if ((oDate1 - oDate2) < 0) {
                    return -iDays;
                }
                return iDays
            }

                                                                                                    </script>

	<section>
		<div class="foot15">
			<div class="foot-content">
				<div class="inner clearfix">
					<div class="in-box">
						<ul>
							<li class="til">关于我们</li>
							<li><a target="_blank"
								href="http://www.qmango.com/about/index.asp">关于青芒果</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/about/contact.asp">联系我们</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/about/hr.asp">诚聘英才</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/about/news.asp">媒体报道</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/about/cooperate.asp">广告合作</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/help/sitemap.html">网站地图</a></li>
						</ul>
					</div>
					<div class="in-box">
						<ul>
							<li class="til">帮助手册</li>
							<li><a target="_blank"
								href="http://www.qmango.com/help.asp#c_a_01">预订常见问题</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/help2.asp#c_b_01">旅店常见问题</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/help6.asp#c_e_01">旅游产品常见问题</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/help3.asp#c_c_01">订金支付常见问题</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/help4.asp#c_d_01">订金退款政策</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/help5.asp#c_e_01">青芒果账户</a></li>
						</ul>
					</div>
					<div class="in-box">
						<ul>
							<li class="til">加盟及合作</li>
							<li><a target="_blank" href="http://jiameng.qmango.com/">旅店加盟</a></li>
							<li><a target="_blank" href="http://hotel.qmango.com/">旅店后台管理</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/hotel_new.html">新加盟酒店</a></li>
							<li><a target="_blank"
								href="http://ly.qmango.com/supplieradmin/register/">旅游产品合作</a></li>
							<li><a target="_blank" href="http://open.qmango.com/">开放平台</a></li>
							<li><a target="_blank" href="http://union.qmango.com/">分销联盟</a></li>
						</ul>
					</div>
					<div class="in-box">
						<ul>
							<li class="til">代理业务</li>
							<li><a target="_blank"
								href="http://www.qmango.com/agent/index.asp">代理介绍</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/agent/dl_app.asp">代理申请</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/agent/dl_ad.asp">广告元素</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/agent/dl_hz.asp">网络合作</a></li>
							<li><a target="_blank" href="http://qtools.qmango.com/dl/">淘宝分销平台</a></li>
						</ul>
					</div>
					<div class="in-box br">
						<ul>
							<li class="til">地标目录</li>
							<li><a target="_blank"
								href="http://www.qmango.com/landmarkhtml/hostelindex.html">城市地标</a></li>
							<li><a target="_blank"
								href="http://www.qmango.com/province_index.html">酒店目录</a></li>
						</ul>
					</div>
					<p class="code">
						<img src="picture/qmgwx.gif" alt="青芒果微信号" /> <span>青芒果微信号</span>
					</p>
					<p class="code">
						<img src="picture/sjapp.gif" alt="手机APP下载" /> <span>手机APP下载</span>
					</p>
				</div>
			</div>
			<div class="other">
				<div class="inner clearfix">
					<p>
						<a href="http://www.mangocity.com" target="_blank" title="芒果网">
							<img src="picture/mango.gif" alt="芒果网" />
						</a> <a
							href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202006041400011"
							target="_blank" title="经营性网站备案信息" rel="nofollow"> <img
							src="picture/baxx.gif" alt="经营性网站备案信息" />
						</a> <a href="http://www.sznet110.gov.cn/netalarm/index.jsp"
							target="_blank" title="网络110报警服务" rel="nofollow"> <img
							src="picture/bjfw.gif" alt="网络110报警服务" />
						</a> <a
							href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403101920902"
							target="_blank" title="深圳市安网备案" rel="nofollow"> <img
							src="picture/awba.gif" alt="深圳市安网备案" />
						</a> <a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1618815109"
							target="_blank" title="AAA级信用企业" rel="nofollow"> <img
							src="picture/xyqy.gif" alt="AAA级信用企业" />
						</a> <a
							href="http://cert.ebs.org.cn/529511f5-b6cf-4b48-8705-4abd13563c92.html"
							target="_blank" title="众信验证" style="margin-right: 0px;"
							rel="nofollow"> <img src="picture/zxyz.gif" alt="众信验证" />
						</a> <a><script id="ebsgovicon" src="js/govicon.js"
								type="text/javascript" charset="utf-8"></script></a>
					</p>
					<p>
						版权所有 &copy; <a href="http://www.qmango.com" target="_blank"
							style="margin: 0px;">青芒果旅行网 www.qmango.com</a> Copyright
						1999-2013 All Rights Reserved&nbsp;&nbsp;粤ICP备13017802号-2
					</p>
				</div>
			</div>
		</div>
	</section>
	<script src="js/public.js"></script>
	<script type="text/javascript">
		
		// 百度地图API功能
		var map = new BMap.Map("l-map"); 
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 10);
		map.enableScrollWheelZoom();
	
		var transit = new BMap.TransitRoute(map, {renderOptions: {map: map},onSearchComplete: function(result){       
			if (transit.getStatus() == BMAP_STATUS_SUCCESS){
				var firstPlan = result.getPlan(0);
				// 绘制步行线路
				for (var i = 0; i < firstPlan.getNumRoutes(); i++){
					var walk = firstPlan.getRoute(i);
					if (walk.getDistance(false) > 0){
						// 步行线路有可能为0
						map.addOverlay(new BMap.Polyline(walk.getPath(), {lineColor: "green"}));
					}
				}
				// 绘制公交线路
				for (i = 0; i < firstPlan.getNumLines(); i++){
					var line = firstPlan.getLine(i);
					map.addOverlay(new BMap.Polyline(line.getPath()));
				}
				// 输出方案信息
				var s = [];
				s.push("【火车站出发路线】");
				for (i = 0; i < result.getNumPlans(); i++){
					s.push((i + 1) + ". " + result.getPlan(i).getDescription(false));
				}
				document.getElementById("r-result").innerHTML = s.join("<br/>");
			}
		}
		});
		transit.search("${map.city}火车站","${map.hotelName}" );
	</script>
</body>
</html>


