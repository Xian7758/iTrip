<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
	.pradio:nth-child(1){margin-left: 9px}
</style>
<% String path = request.getContextPath(); %>
<title>北京特色客栈酒店_特色客栈北京青旅客栈_北京旅店住宿地图-青芒果特色客栈北京预订房网</title>
<meta name="keywords"
	content="北京特色客栈预订,预订北京特色客栈,北京特色客栈价格,北京特色客栈查询, 北京特色客栈点评, 北京特色客栈图片,北京住宿,青芒果旅行网">
<meta name="description"
	content="北京特色客栈预订,青芒果旅行网为您提供北京特色客栈查询、价格、点评、图片等详细信息，帮您解决北京住宿问题.2-7折在线预订北京特色客栈.经济又实惠的北京特色客栈尽在青芒果旅行网!">
<link rel="shortcut icon" type="image/x-icon"
	href="http://www.qmango.com/qmango.ico">
<link rel="stylesheet" href="<%=path %>/statics/css/normalize.css" />
<!--重置风格，必须引用-->
<link rel="stylesheet" href="<%=path %>/statics/css/main.css" />
<!--重置与复用模块，必须引用-->
<link rel="stylesheet" href="<%=path %>/statics/css/searchui.css" />
<link rel="stylesheet" href="<%=path %>/statics/css/foot15.css" />
<link rel="stylesheet" href="<%=path %>/statics/css/hotellistseo.css" />
<link rel="stylesheet" href="<%=path %>/statics/css/hotelist.css" />
<link rel="stylesheet" href="<%=path %>/statics/css/pagination.css" />
<link rel="stylesheet" href="<%=path %>/statics/css/hotellist.css" />
<script src="<%=path %>/statics/js/jquery-1.9.0.min.js"></script>
<script src="<%=path %>/statics/js/jquery-migrate-1.1.1.js"></script>
<script src="<%=path %>/statics/js/util.js"></script>
<script type="text/javascript">

	function sub(num) {
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
	};
	
	$(function() {
		$("input[name='pircelimit'][value=${pirce_checked}]").attr("checked",
				"checked");
		$("#pirce_checked").val("${pirce_checked}");
		$('input[type=radio][name=pircelimit]').change(function() {
			var pircelimit = $('input[name="pircelimit"]:checked').val();
			$("#pirce_checked").val(pircelimit);
			$("input[name='pircelimit'][value=pircelimit]").attr("checked",
					"checked");
		});
	
		$("#other input[type='text']").focus(function() {
			$("input[name='pircelimit']").attr("checked", false);
			$("#pirce_checked").val(0);
		});
	
		$("input[name='locationFilter'][value=${tempCityId}]").attr("checked",
				"checked");
		$("#cityId").val("${tempCityId}");
		$('input[type=radio][name=locationFilter]').change(function() {
			var locationFilter = $('input[name="locationFilter"]:checked')
					.val();
			$("#cityId").val(locationFilter);
			$("input[name='locationFilter'][value=locationFilter]").attr(
					"checked", "checked");
		});
	
		$("input[name='qhtype'][value=${tempqhtypename}]").attr("checked",
				"checked");
		$("#qhtypeid").val("${tempqhtypename}");
		$('input[type=radio][name=qhtype]').change(function() {
			var locationFilter = $('input[name="qhtype"]:checked').val();
			$("#qhtypeid").val(locationFilter);
			$("input[name='qhtype'][value=locationFilter]").attr("checked",
					"checked");
		});
	
		$("#city_all").click(function() {
			$('input[type=radio][name=locationFilter]').attr("checked", false);
			$("#cityId").val(0);
		});
		$("#price_all").click(function() {
			$('input[type=radio][name=pircelimit]').attr("checked", false);
			$("#pirce_checked").val(0);
			$('input[type=text][class=pi]').val("");
		});
		$("#qhtype_all").click(function() {
			$('input[type=radio][name=qhtype]').attr("checked", false);
			$("#qhtypeid").val(0);
		});
		
		$("#types1").click(function(){
			var types = $("#types").val();
			if(types != "types types-on1" && types != "types1"){
				$("#types").val("types types-on1");
			}
			if($("#types").val() == "types1" ){
				$("#types").val("types types-on1");
			}else if($("#types").val() == "types types-on1"){
				$("#types").val("types1");
			}
			$("form").submit();
		});
		$("#types2").click(function(){
			var types = $("#types").val();
			if(types != "types types-on2" && types != "types2"){
				$("#types").val("types types-on2");
			}
			if($("#types").val() == "types2" ){
				$("#types").val("types types-on2");
			}else if($("#types").val() == "types types-on2"){
				$("#types").val("types2");
			}
			$("form").submit();
		});
		$("#types3").click(function(){
			var types = $("#types").val();
			if(types != "types types-on3" && types != "types3"){
				$("#types").val("types types-on3");
			}
			if($("#types").val() == "types3" ){
				$("#types").val("types types-on3");
			}else if($("#types").val() == "types types-on3"){
				$("#types").val("types3");
			}
			$("form").submit();
		});
		$("#types4").click(function(){
			var types = $("#types").val();
			if(types != "types types-on4" && types != "types4"){
				$("#types").val("types types-on4");
			}
			if($("#types").val() == "types4" ){
				$("#types").val("types types-on4");
			}else if($("#types").val() == "types types-on4"){
				$("#types").val("types4");
			}
			$("form").submit();
		});
		
		<%-- $(".types").click(function(){
			$.ajax({
	             type:"POST",
	             url:"listSearch2",
	             contentType:'application/x-www-form-urlencoded;charset=utf-8',
	             data:{query:$("#query").val(),pageIndex:$("#pageIndex").val(),price_min:$("#price_min").val(),
				 price_max:$("#price_max").val(),pirce_checked:$("#pirce_checked").val(),qhtypename:$("#qhtypename").val(),
				 cityId:$("#cityId").val(),typesval:$("#typesval").val()},
	             dataType: "json",
	             success: function(data){
					var result = data;
					  $.each(result, function (index,value) {
						var html = "<div class=\"hotel\" id=\""+value.id+"\" x=\"117.224556\" y=\"40.482994\"hid=\""+value.id+"\" hn=\""+value.hotelName+"\"><input type=\"hidden\" class=\"resourceid\" value=\"0\"><div class=\"info clearfix\"><div class=\"w720\"><div class=\"img\">";
							html +=	"<a  href=\""+<%=path %>+"/Account/hlist?id="+value.id+"\" target=\"_blank\"><img width=\"200\" height=\"160\" src=\""+<%=path %>+"/statics/picture/"+value.img+"\" title=\""+value.hotelName+"\" alt=\""+value.img+"\" border=\"0\"></a></div><div class=\"base\">";
							html +=	"<span class=\"count\">"+index+"</span><a href=\""+<%=path %>+"/Account/hlist?id="+value.id+"\" class=\"name\" target=\"_blank\" title=\""+value.hotelName+"\">"+value.hotelName+"</a></div>";
							html +=	"<p class=\"til\">类型：<c:if test=\""+value.hotelType+" == 1\">客栈</c:if><c:if test=\""+value.hotelType+" == 2\">青年旅社</c:if><c:if test=\""+value.hotelType+" == 3\">公寓</c:if><c:if test=\""+value.hotelType+" == 4\">酒店</c:if><c:if test=\""+value.hotelType+" == 5\">经济型酒店</c:if><c:if test=\""+value.hotelType+" == 6\">精品酒店</c:if></p>";	
							html +=	"<p class=\"addr addrAdd\"> <span>地址："+value.address+"</span><em><a href=\"javascript:void(0);\" class=\"a_map\">地图</a></em></p>";
							html +=	"<p class=\"newReservation\">最新预订 2小时前</p></div><ul class=\"other\">";
							html +=	"<li>¥<em class=\"price\">"+value.price+"</em>起</li><li><em class=\"ft14 cg\">9.5</em>分/10分</li><li><em class=\"ft14 cg\">132</em>条用户点评</li>";
							html +=	"<li><a class=\"btn-booking\" target=\"_blank\" href=\""+<%=path %>+"/Account/hlist?id="+value.id+"\"></a></li></ul></div></div>";
		              		alert(html); 
					  });
		         }
	    	}); 
		});--%>
	});
	</script>
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
								<a href="#" class="dropdown_hd">登录</a>
								<div class="dropdown_bd login_inner">
									<ul class="login_input">
										<li>登录名</li>
										<li class="li_placeholder"><span class="span_placeholder">手机/邮箱/用户名</span><input
											name="uid" id="uid" type="text" class="input_login"
											autocomplete="off"></li>
										<li>密码</li>
										<li><input name="upwd" id="upwd" type="password"
											class="input_login"></li>
										<li><input name="mdl" id="mdl" type="radio" value=""
											class="radio_login" autocomplete="off"><label
											for="mdl">十天免登录</label><a href="/users/passwordForget.asp"
											target="_blank" class="a_getpassword">忘记密码?</a></li>
										<li class="l_i_btn">
											<button type="button" id="btnLogin">登录</button>
										</li>
									</ul>
									<ul class="login_link">
										<li>使用以下帐号登录</li>
										<li><span class="btns qq"><a
												href="http://www.qmango.com/ThirdPartLogin/qqconnect/redirect.asp">
													QQ </a>
										</span></li>
										<li><span class="btns mail139"> <a
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
								关注微信，赢ipad <img src="<%=path %>/statics/picture/wx.gif"
								alt="关注微信，赢ipad" width="413" height="385" />
						</a></li>
						<li><a href="http://www.mangocity.com" target="_blank"
							class="go_mg">芒果网</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mainnav clearfix">
			<h2 class="logo">
				<a alt="青芒果旅行网" title="青芒果旅行网 领先的经济类酒店预订平台" href="listHotel"></a>
			</h2>
			<ul class="nav2013">
				<li><a href="listHotel" class="nav_index">首页</a></li>
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
					src="<%=path %>/statics/picture/appdown2.gif" style="">
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


	<!-- 搜索条件 -->
	<form action="listSearch" >
	<section>
		<div class="content clearfix">
				<div class="i-city">
					<label>搜索</label>
					<div class="input-wrap">
						<input type="text" value="${query}" id="query" name="query" class="input_key"
							id="keywords" placeholder="关键词/酒店名/位置" autocomplete="off" />
						<div id="suggest_city_keywords" class="list_city"
							style="top: 37px; left: 10px; display: none; z-index: 999;">
						</div>
					</div>
					<label>入住</label>
					<div class="input-wrap">
						<input type="text" value="${date}" name=date class="input-date" placeholder="yyyy-mm-dd" id="date" readonly="readonly" />
					</div>
					<label>离店</label>
					<div class="input-wrap">
						<input type="text" value="${date2}" name="date2"class="input-date" placeholder="yyyy-mm-dd" id="date2" readonly="readonly" />
					</div>
					<input type="submit" id="btn_search" class="list-search" value="" />
				</div>
			<div class="i-jq">
				<ul>
					<li style="padding-bottom: 10px;">
						<div class="tabs">
							<span class="name">热门位置：</span>
							<div class="type-one clearfix">
								<input type="hidden" value="1" id="cityId" name="cityId"> 
								<a class="all" href="javascript:;" id="city_all">不限</a>
								
								<c:forEach items="${listDictionaryCityType}" var="cityType">
								
								
								</c:forEach>
								
								
								<p style="margin-left: 9px;">
									<input type="radio" name="locationFilter" value="1"/> 
										<label>北京</label>
								</p>
								<p>
									<input type="radio" name="locationFilter" value="2" /> 
									 	<label>上海</label>
								</p>
								<p>
									<input type="radio" name="locationFilter" value="3" /> 
									 	<label>郴州</label>
								</p>
								<p>
									<input type="radio" name="locationFilter" value="4" /> 
									 	<label>长沙</label>
								</p>
								<p>
									<input type="radio" name="locationFilter" value="5" /> 
									 	<label>天津</label>
								</p>
								<p>
									<input type="radio" name="locationFilter" value="6" /> 
									 	<label>三亚</label>
								</p>
								<p>
									<input type="radio" name="locationFilter" value="7" /> 
									 	<label>香港</label>
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="tabs">
							<span class="name">酒店价格：</span>
							<div class="type-one clearfix">
								<input type="hidden" value="1" id="pirce_checked" name="pirce_checked"> 
								<a class="all" href="javascript:;" id="price_all">不限</a>
								<p style="margin-left: 9px;">
									<input type="radio" name="pircelimit" value="1"/><label>50元以下</label>
								</p>
								<p>
									<input type="radio" name="pircelimit" value="2"/><label>50-100元</label>
								</p>
								<p>
									<input type="radio" name="pircelimit" value="3"/><label>100-200元</label>
								</p>
								<p>
									<input type="radio" name="pircelimit" value="4"/><label>200元以上</label>
								</p>
								<div class="other" id="other">
									<span>自定义</span>	
									<input type="text" id="price_min" name="price_min" class="pi" value="${price_min}" /> 
									<span style="margin: 4px 5px;">-</span> 
									<input type="text" id="price_max" name="price_max" class="pi" value="${price_max}" />
								</div>
							</div>
						</div>
					</li>
					<li style="padding-bottom: 10px;">
						<div class="tabs">
							<span class="name">酒店类别：</span>
							<div class="type-one clearfix">
								<input type="hidden" value="1" id="qhtypeid" name="qhtypename"> 
								<a class="all" href="javascript:;" id="qhtype_all">不限</a>
								<div>
									<c:forEach items="${listDictionaryHotelType}" var="hotelType">
										<p class="pradio">
											<input type="radio" name="qhtype" value="${hotelType.parentId}" /> 
											 	<label>${hotelType.typeName}</label>
										</p>
									</c:forEach>
								</div>								
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!--列表区域-->
	<section>
		<div class="content-list clearfix">
			<div class="list-tabs">
				<div class="tab-off tab-on">
					<em class="pngfix model-list"></em><span>列表查看</span>
				</div>
				<p>
					共找到<em id="hotelnum">${listsize}</em>家酒店
				</p>
			</div>
			
			<div class="list-con" id="list-con">
				<input type="hidden" id="types" name="types" value="${types}" />
				<div class="list-left">
					<div class="title" id="list-title">
						
						<span class="types" id="types1">
						<i class="is1">推荐
						<c:if test="${types== 'types1'}">↑</c:if>
						<c:if test="${types== 'types types-on1'}">↓</c:if>
						</i></span>
						<span class="types" id="types2">
						<i class="is2">价格
						<c:if test="${types == 'types2'}">↑</c:if>
						<c:if test="${types == 'types types-on2'}">↓</c:if>
						</i></span>
						<span class="types" id="types3">
						<i class="is3">好评
						<c:if test="${types=='types3'}">↑</c:if>
						<c:if test="${types=='types types-on3'}">↓</c:if>
						</i></span>
						<span class="types" id="types4">
						<i class="is4">销量
						<c:if test="${types=='types4'}">↑</c:if>
						<c:if test="${types=='types types-on4'}">↓</c:if>
						</i></span>
						
					</div>
					<!-- 列表 -->
					<%int i=1;%>
					<div class="hotel-list" id="hotel-list">
						<c:forEach items="${listHotel}" var="list"> 
							<div class="hotel" id="${list.id}" x="117.224556" y="40.482994" 
								hid="${list.id}" hn="${list.hotelName}">
								<input type="hidden" class="resourceid" value="0">
								<div class="info clearfix">
									<div class="w720">
										<div class="img">
											<a  href="<%=path %>/Account/hlist?id=${list.id}"
												target="_blank"><img width="200" height="160"
												src="<%=path %>/statics/picture/${list.img}"
												title="${list.hotelName}" alt="${list.img}" border="0"></a>
										</div>
										<div class="base">
											<span class="count"><%=i++ %></span><a
												href="<%=path %>/Account/hlist?id=${list.id}"
												class="name" target="_blank" title="${list.hotelName}">${list.hotelName}</a>
										</div>
										<p class="til">类型：
											<c:if test="${list.hotelType == 1}">客栈</c:if> 
											<c:if test="${list.hotelType == 2}">青年旅社</c:if> 
											<c:if test="${list.hotelType == 3}">公寓</c:if> 
											<c:if test="${list.hotelType == 4}">酒店</c:if> 
											<c:if test="${list.hotelType == 5}">经济型酒店</c:if> 
											<c:if test="${list.hotelType == 6}">精品酒店</c:if> 
										</p>
										<p class="addr addrAdd">
											<span>地址：${list.address}</span><em><a
												href="javascript:void(0);" class="a_map">地图</a></em>
										</p>
										<p class="newReservation">最新预订 2小时前</p>
									</div>
									<ul class="other">
										<li>¥<em class="price">${list.price}</em>起</li>
										<li><em class="ft14 cg">9.5</em>分/10分</li>
										<li><em class="ft14 cg">132</em>条用户点评</li>
										<li><a class="btn-booking" target="_blank"
											href="<%=path %>/Account/hlist?id=${list.id}"></a></li>
									</ul>
								</div>
						 	</div>
						</c:forEach>
					</div>
					<div class="ui-pagination-container" align="center">
						 <input type="hidden" name="pageIndex" id="pageIndex" value="1"/>
						 	<c:if test="${requestScope.page.pageIndex > 1}">
						 		<a href="javascript:void(0);" class="ui-pagination-page-item" 
							 	 onclick="sub()" >首页</a>
							</c:if>
							<c:if test="${requestScope.page.pageIndex > 1}">
								<a href="javascript:void(0);" class="ui-pagination-page-item" 
							 	 onclick="sub(-1)">上一页</a>
							</c:if>
						 	<c:if test="${requestScope.page.pageIndex < requestScope.page.pageAll}">
						 	 	<a href="javascript:void(0);" class="ui-pagination-page-item" 
						 	 onclick="sub(+1)">下一页</a>
						 	 </c:if>
						 	<c:if test="${requestScope.page.pageIndex < requestScope.page.pageAll}">
						 		<a href="javascript:void(0);" class="ui-pagination-page-item" 
								 onclick="sub(${page.pageAll})">尾页</a>
						 	</c:if>
        			</div>
				</div>
				<div class="list-right">
                <div class="fl" id="small-map">
                    <div class="map">
                        <div class="til">
                            <a href="javascript:void();">
                                <span class="v_map">看大地图&gt;&gt;</span>
                            </a>
                            <p>
                                <input type="checkbox" id="scrollByScreen" checked onClick="scroll_map()" />
                                <label for="scrollByScreen">随屏幕滚动</label>
                            </p>
                        </div>
                        <div class="map-main" id="allmap"></div>
                    </div>
                    <div class="reason">
                        <div class="til"></div>
                        <ul>
                            <li class="pei">
                                <p><span>赔</span><em>赔付保证</em></p>
                                <p>到店无房 赔付房费</p>
                            </li>
                            <li class="sheng">
                                <p><span>省</span><em>低价保证</em></p>
                                <p>高于其他网站售价赔付差额</p>
                            </li>
                            <li class="xin">
                                <p><span>信</span><em>品牌保证</em></p>
                                <p>芒果网旗下品牌,服务有保障</p>
                            </li>
                            <li class="te" style="padding:0;">
                                <p><span>特</span><em>特色保证</em></p>
                                <p>特色青旅、客栈，深受年轻人喜爱</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
	</div>
</section>
</form>

	<!-- 侧边 S-->
	<div id="scroll_nav" class="scroll_nav" style="position: fixed;">
		<ul class="snav_list">
			<!-- 客户 -->
			<li><a target="_blank" class="r_call"
				href="http://chat.looyu.com/chat/chat/p.do?c=48339&amp;f=102300&amp;g=59523"></a>
			</li>
			<!-- 微信栏 -->
			<li>
				<div class="weixin r_kf">
					<div class="wei-pop">
						<img src="<%=path%>/statics/picture/ewm_phone.png"
							alt="免费下载青芒果酒店预订手机客户端">
						<ul>
							<li class="na">微信号：qmangocity</li>
							<li>随时随地查订单</li>
							<li>随时找微信客服</li>
							<li>优先推送特价酒店</li>
						</ul>
					</div>
				</div>
			</li>
			<!-- 返回顶部 -->
			<li style="display: none;"><a href="javascript:void(0);"
				class="r_top"></a></li>
		</ul>
	</div>
	<script src="<%=path%>/statics/js/scroll.min.js"></script>
	<script src="<%=path%>/statics/js/jquery.qrcode.min.js"></script>
	<script src="<%=path%>/statics/js/jquery.inview.js"></script>
	<script src="<%=path%>/statics/js/f955697f9a444d1789e77f5e6a211ac0.js"></script>
	<script src="<%=path%>/statics/js/calendar_min2.js"></script>
	<script src="<%=path%>/statics/js/jquery.pagination.js"></script>
	<script src="<%=path%>/statics/js/scroll.min.js"></script>
	<script src="<%=path%>/statics/js/hotelmap.js"></script>
	<script src="<%=path%>/statics/js/hotellist.js"></script>
	<script src="<%=path%>/statics/js/citylist.js"></script>
	<script src="<%=path%>/statics/js/citybox.js"></script>
	
	<script type="text/javascript">
		$(document).ready(function() {
			$(document).keydown(function(event) {
				if (parseInt(event.keyCode) == 13) {
					//高度不超过搜索框
					if ($(document).scrollTop() > 220) {
						return false;
					}
					//如果登陆框为显示状态
					if ($(".dropdown").eq(0)
							.attr("class")
							.indexOf("hover") > -1
							&& $(".login").css(
									"display") != "none") {
						return false;
					}

					if ($("#suggest_city_city")
							.css("display") == "none") {
						$("#btn_search")
								.click();
					}
				}
			});

			$("#city").citybox({
				"callback" : function(cityId, cityName) {
					$("#city_id").val(cityId);
					$("#btn_search").click();
				},
				searchkey : true
				
			});
		})
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
						<img src="<%=path%>/statics/picture/qmgwx.gif" alt="青芒果微信号" /> <span>青芒果微信号</span>
					</p>
					<p class="code">
						<img src="<%=path%>/statics/picture/sjapp.gif" alt="手机APP下载" /> <span>手机APP下载</span>
					</p>
				</div>
			</div>
			<div class="other">
				<div class="inner clearfix">
					<p>
						<a href="http://www.mangocity.com" target="_blank" title="芒果网">
							<img src="<%=path%>/statics/picture/mango.gif" alt="芒果网" />
						</a> <a
							href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202006041400011"
							target="_blank" title="经营性网站备案信息" rel="nofollow"> <img
							src="<%=path%>/statics/picture/baxx.gif" alt="经营性网站备案信息" />
						</a> <a href="http://www.sznet110.gov.cn/netalarm/index.jsp"
							target="_blank" title="网络110报警服务" rel="nofollow"> <img
							src="<%=path%>/statics/picture/bjfw.gif" alt="网络110报警服务" />
						</a> <a
							href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403101920902"
							target="_blank" title="深圳市安网备案" rel="nofollow"> <img
							src="<%=path%>/statics/picture/awba.gif" alt="深圳市安网备案" />
						</a> <a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1618815109"
							target="_blank" title="AAA级信用企业" rel="nofollow"> <img
							src="<%=path%>/statics/picture/xyqy.gif" alt="AAA级信用企业" />
						</a> <a
							href="http://cert.ebs.org.cn/529511f5-b6cf-4b48-8705-4abd13563c92.html"
							target="_blank" title="众信验证" style="margin-right: 0px;"
							rel="nofollow"> <img src="<%=path%>/statics/picture/zxyz.gif"
							alt="众信验证" />
						</a> <a><script id="ebsgovicon"
								src="<%=path%>/statics/js/govicon.js" type="text/javascript"
								charset="utf-8"></script></a>
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
	<script src="<%=path%>/statics/js/public.js"></script>

</body>
</html>
