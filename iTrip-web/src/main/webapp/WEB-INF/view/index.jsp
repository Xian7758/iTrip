<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html class="no-js">
<!--<![endif]-->
<head>
<% String path = request.getContextPath(); %>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
<meta property="qc:admins" content="104057543761516776375" />
<meta property="qc:admins" content="214247772761516776375" />
<title>青芒果旅行网_酒店预订,青年旅舍，客栈，家庭旅馆，短租，门票周边游预订</title>
<meta name="keywords" content="酒店预订,青年旅舍,客栈,家庭旅馆,短租,门票,周边游,青芒果旅行网" />
<meta name="description"
	content="青芒果旅行网提供酒店预订,青年旅舍,客栈,家庭旅馆,短租,门票,周边游等在线预订服务，产品覆盖国内、港澳台、海外等80000家酒店和50000个旅游目的地，选择青芒果、预订有保障，多年保持客栈青旅预订第一。" />
<meta name="author" content="qmango@mangocity.com" />
<meta name="copyright"
	content="本页版权归www.qmango.com所有。All Rights Reserved">
<meta name="baidu-site-verification" content="xL5ZfIINTb" />
<meta name="360-site-verification"
	content="d89360b97388e3fe08200720c72fb30b" />
<meta baidu-gxt-verify-token="475d34573d3ff0d6c06b9ee1e9126e2b">
<meta property="qc:admins" content="2016310122615167763757103" />
<link rel="stylesheet" href="<%=path %>/statics/css/normalize.css">
<!--重置风格，必须引用-->
<link rel="stylesheet" href="<%=path %>/statics/css/main.css">
<!--重置与复用模块，必须引用-->
<link rel="stylesheet" href="<%=path %>/statics/css/searchui.css">
<!--搜索模块，需要时引用-->
<link rel="stylesheet" href="<%=path %>/statics/css/animate.min.css">
<!--css3动画,需要时引用-->
<link rel="stylesheet" href="<%=path %>/statics/css/index.css">
<!--具体页面风格,index单独引用-->
<link rel="stylesheet" href="<%=path %>/statics/css/foot15.css">
<link rel="shortcut icon" type="image/x-icon" href="qmango.ico" />

<script src="<%=path %>/statics/js/modernizr-2.6.2.min.js"></script>
<!--<script src="<%=path %>/statics/js/yibodsp.js"></script>-->
<script type="text/javascript" src="<%=path %>/statics/js/jquery.js"></script>
<script type="text/javascript"
	src="<%=path %>/statics/js/jquery.lazyload.js"></script>
</head>
<body class="index">
	<!--<div id="tongzhi" style="background-color: #FFF9E9;border-bottom: 1px solid #FABE78;color: #F59045;display: block;height: 30px;line-height: 30px; margin-left: auto;margin-right: auto;text-align: center;"><span onClick="hid()" style="float:right; padding-right:10px; cursor:pointer;">关闭</span>青芒果系统将于2013-12-21日凌晨00:00到06:00进行升级维护，由此带来的不便敬请谅解！</div>-->
	<!--header2013 S-->
	<div class="header2013">
		<div class="topnav">
			<div class="inner clearfix">
				<div class="welcome">
					<ul class="w_text">
						<li class="w_t_li" id="loginInfo">${sessionScope.user}您来了</li>
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
										<li><span class="btns qq"><s></s><a
												href="http://www.qmango.com/ThirdPartLogin/qqconnect/redirect.asp">
													QQ</a></span></li>
										<li><span class="btns mail139"><s></s><a
												href="http://www.qmango.com/ThirdPartLogin/weixin/redirect.asp">
													微信</a></span></li>
										<li><span class="btns sina"><s></s><a
												href="http://www.qmango.com/xlapi/index.asp">新浪</a></span></li>
										<!--<li><span class="btns alipay"><s></s><a href="http://www.qmango.com/alipayauth/auth_authorize.asp">
                                            支付宝</a></span></li>-->
									</ul>
									<span class="close"
										onClick="$('.dropdown').removeClass('hover');"></span>
								</div>
							</div>
						</li>
						<li class="w_t_li reg"><a href="/users/login.asp">注册</a></li>
					</ul>
				</div>
				<div class="topmenu">
					<ul class="">
						<li class="myorder">
							<div class="dropdown">
								<a href="javascript:void(0);" class="dropdown_hd">我的订单</a> <a
									class="i_order" href="#"> <span class="i_left"></span><span
									class="i_main" id="order_num">0</span> <span class="i_right">
								</span></a>
								<div class="dropdown_bd order_inner" id="orderlist">
									<table cellpadding="0" cellspacing="0" class="order_list">
									</table>
								</div>
							</div>
						</li>
						<li><a target="_blank"
							href="http://chat.looyu.com/chat/chat/p.do?c=48339&amp;f=102300&amp;g=59523"
							rel="external nofollow">在线客服</a></li>
						<li><a target="_blank"
							href="http://www.qmango.com/about/contact.asp">联系我们</a></li>
						<li><a target="_blank" href="http://www.qmango.com/help.asp">帮助中心</a></li>
						<li><a target="_blank" href="javascript:;" class="wx_link">关注微信，赢ipad
								<img src="<%=path %>/statics/picture/wx.gif" alt="关注微信，赢ipad"
								width="413" height="385" />
						</a></li>
						<li><a href="http://www.mangocity.com" target="_blank"
							class="go_mg">芒果网</a></li>
					</ul>
				</div>
			</div>
		</div>
		<!--topnav e-->
		<div class="mainnav clearfix">
			<h2 class="logo">
				<a alt="青芒果旅行网" title="青芒果旅行网 领先的经济类酒店预订平台"
					href="#"></a>
			</h2>
			<ul class="nav2013">
				<li><a href="#" class="nav_index">首页</a></li>
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




			<!-- <img src="<%=path %>/statics/picture/manian.gif" style="position:absolute; top:-9px; left:1192px" onMouseMove='$("#smewm").show();' onMouseOut='$("#smewm").hide();'/>
    <img src="<%=path %>/statics/picture/erweima.jpg" style="position:absolute; top:90px; left:1169px; display:none;" id="smewm"/>-->
			<div class="topad">
				<a href="http://www.qmango.com/apk/index.html" target="_blank"
					title="青芒果手机端预订低至1元"> <img alt="青芒果酒店预订手机客户端免费下载" class="fl"
					src="<%=path %>/statics/picture/appdown2.gif" style="">
					<p class="tp">0元预订</p>
					<p>全网低价</p>
				</a>
			</div>
		</div>
		<div class="colorline">
			<div class="inner clearfix">
				<span class="line01"></span><span class="line02"></span>
			</div>
		</div>
	</div>
	<!--header2013 E-->
	<div class="banner">
		<div class="i_soso">
			<div class="inner png24" id="s_box">
				<form action="listSearch">
					<ul class="soso_title">
						<li class="a_tit cur" id="hotel_soso">酒店搜索</li>
					</ul>
					<span class="clear"></span> <input id="city_id" type="hidden"
						value="1" name="city_id"> <input id="city_id2"
						type="hidden" value="1" name="city_id2"> <input
						id="tag_id" type="hidden" value="0" name="tag_id">
					<ul class="search_fields a_con visible">
						<li><label for="date"> 入住</label>
							<div class="input-wrap">
								<input type="text" name="date" value="" class="input_date" placeholder="yyyy-mm-dd" id="date"> <s class="i_date"></s>
							</div></li>
						<li><label for="date2"> 离店</label>
							<div class="input-wrap">
								<input type="text" name="date2" value="" class="input_date" placeholder="yyyy-mm-dd" id="date2"> <s class="i_date"></s>
							</div></li>
						<li>
							<div class="input-wrap">
								<input type="text" name="query" placeholder="关键词/酒店名/景点/位置"> 
							</div>
						</li>
						<li>
							<button type="submit" class="btn_search png24" id="btn_search" >搜索</button>
						</li>
					</ul>
				</form>
				<div class="a_app">
					<a href="http://www.qmango.com/apk/index.html" target="_blank"
						title="暑假促销，手机APP一元抢订"> 酒店热卖，手机APP一元抢订</a>
				</div>
			</div>
			<div class="inner_bg"></div>
		</div>

		<div class="lubo">
			<ul class="lubo_box">
				<li
					style="opacity: 1; filter: alpha(opacity = 100); display: block;">
					<a
					href="http://www.xunshelife.com/boutiquelist_30_189545%7Ctag_0_0_0_0_0_0_0.html"
					style="background: url(<%=path %>/statics/images/banner20180822.jpg) no-repeat center center;"></a>
				</li>

				<li><a
					href="http://www.qmango.com/partner.asp?partnerID=2018xiamen&url=http://hotelinfo.qmango.com/?cityId=25"
					style="background: url(<%=path %>/statics/images/banner20180918.jpg) no-repeat center center;"></a>
				</li>

				<li><a
					href="http://www.qmango.com/pid.asp?qmpid=2018yha&partnerID=brand&url=http://www.qmango.com/special/yha/"
					style="background: url(<%=path %>/statics/images/banner20180212.jpg) no-repeat center center;"></a>
				</li>

				<li><a
					href="http://www.qmango.com/pid.asp?qmpid=2018dongcheng4&url=http://www.qmango.com/speclist157"
					target="_blank"
					style="background: url(<%=path %>/statics/images/banner20180928.jpg) no-repeat center center;"></a>
				</li>

				<li><a href="http://huashangtravel.cn/uclan_la.html"
					target="_blank"
					style="background: url(<%=path %>/statics/images/banner20181127.jpg) no-repeat center center;"></a>
				</li>

				<li><a href="http://www.minsuexpo.com/" target="_blank"
					style="background: url(<%=path %>/statics/images/banner201811093.jpg) no-repeat center center;"></a>
				</li>

				<li><a href="http://www.qmango.com/about/product.asp"
					target="_blank"
					style="background: url(<%=path %>/statics/images/160616.jpg) no-repeat center center;"></a>
				</li>

				<li><a onClick="_gaq.push(['_trackEvent', 'Banner','PMS']);"
					href="http://pms.qmango.com" target="_blank"
					style="background: url(<%=path %>/statics/images/banner_pms_20131025.jpg) no-repeat center center;"></a>
				</li>

			</ul>
		</div>
	</div>
	<!--banner E-->
	<div class="slogan shipin">

		<div class="inner"></div>
	</div>
	<!--slogan E-->
	<div class="main">
		<div class="mod_box icon_db">
			<div class="mb_hd clearfix">
				<strong class="font_db">地标搜索</strong>
				<div class="select_list">
					<a href="javascript:void(0);" class="selected_city"><em
						id="sel_city">北京</em><s class="i_citydown"></s></a>
					<div class="list_item" style="display: none;">
						<div class="i_up"></div>
						<div class="db_nav_wrap">
							<ul class="db_nav">
								<li><a href="javascript:void(0)" class="current">热门目的地</a></li>
								<li><a href="javascript:void(0)">热门古镇</a></li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
			<div style="clear: both"></div>
			<div class="mb_bd" id="dibiaolist">
				<input type="hidden" id="h_cityid" value="1" />
				<ul class="db_item">
					<li class="i_jccz">
						<div class="item_icon" id="i_jccz"
							onClick="_gaq.push(['_trackEvent', '地标搜索','机场车站']);">
							<span t="1">机场车站</span>
						</div>
					</li>
					<li class="i_jdzb">
						<div class="item_icon" id="i_jdzb"
							onClick="_gaq.push(['_trackEvent', '地标搜索','景点周边']);">
							<span t="2">景点周边</span>
						</div>
					</li>
					<li class="i_dxfj">
						<div class="item_icon" id="i_dxfj"
							onClick="_gaq.push(['_trackEvent', '地标搜索','大学附近']);">
							<span t="3">大学附近</span>
						</div>
					</li>
					<li class="i_sqzb">
						<div class="item_icon" id="i_sqzb"
							onClick="_gaq.push(['_trackEvent', '地标搜索','商圈周边']);">
							<span t="4">商圈周边</span>
						</div>
					</li>
					<li class="i_xzqy">
						<div class="item_icon" id="i_xzqy"
							onClick="_gaq.push(['_trackEvent', '地标搜索','行政区域']);">
							<span t="5">行政区域</span>
						</div>
					</li>
					<li class="i_zghc">
						<div class="item_icon" id="i_zghc"
							onClick="_gaq.push(['_trackEvent', '地标搜索','展馆会场']);">
							<span t="6">展馆会场</span>
						</div>
					</li>
					<li class="i_dtzb">
						<div class="item_icon" id="i_dtzb"
							onClick="_gaq.push(['_trackEvent', '地标搜索','地铁周边']);">
							<span t="7">地铁周边</span>
						</div>
					</li>
					<li class="i_yyzb">
						<div class="item_icon" id="i_yyzb"
							onClick="_gaq.push(['_trackEvent', '地标搜索','医院周边']);">
							<span t="8">医院周边</span>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="mod_box hotel_th">
			<div class="mb_hd bor_bot clearfix">
				<strong class="font_th">精选推荐</strong>
				<div class="city_list">
					<ul class="clearfix">
						<li class="current"><a value="18" href="javascript:void(0)">热门推荐</a></li>
						<li><a value="18" href="javascript:void(0)">北京</a></li>
						<li><a value="18" href="javascript:void(0)">香港</a></li>
						<li><a value="18" href="javascript:void(0)">郴州</a></li>
						<li><a value="18" href="javascript:void(0)">长沙</a></li>
						<li><a value="18" href="javascript:void(0)">天津</a></li>
						<li><a value="18" href="javascript:void(0)">成都</a></li>
					</ul>
				</div>
			</div>
			<div class="mb_bd">
				<!--为您推荐开始-->
				<!--初夏推荐-->		
				<div class="picwrap clearfix" >
		            	<c:forEach items="${listHotel0}" var="listHotel" begin="0" end="4" varStatus="status">
							<div class="picinner pic${status.index}">
			               	  <a href="<%=path %>/Account/hlist?id=${listHotel.id}" 
			               	  	 onClick="_gaq.push(['_trackEvAent', '精选推荐','10-A']);" target="_blank"> 
			                     <img src="<%=path %>/statics/picture/${listHotel.img}" alt="${listHotel.img}"/>
			                    <div class="picover">
			                      <p class="hotelname"> <strong>${listHotel.hotelName}</strong></p>
			                      <p class="hotelprice"> <i class="pricermb">&yen;</i><em class="pricenum">${listHotel.price}</em></p>
			                      <p class="hotelcom" style="display: none;"> 
			                      <span class="i_zan" title="123人推荐"><s class="png24"></s><b>123</b></span>
			                      <span class="i_com" title="132条点评"><s class="png24"></s><b>132</b></span></p>
			                    </div>
			                    <span class="textbg"></span></a> </div>
		               </c:forEach>
             	</div>
				<div class="picwrap clearfix" style="display: none;">
		            	<c:forEach items="${listHotel1}" var="listHotel" begin="0" end="4" varStatus="status">
							<div class="picinner pic${status.index}">
			               	  <a href="<%=path %>/Account/hlist?id=${listHotel.id}" 
			               	  	 onClick="_gaq.push(['_trackEvAent', '精选推荐','10-A']);" target="_blank"> 
			                     <img src="<%=path %>/statics/picture/${listHotel.img}" alt="${listHotel.img}"/>
			                    <div class="picover">
			                      <p class="hotelname"> <strong>${listHotel.hotelName}</strong></p>
			                      <p class="hotelprice"> <i class="pricermb">&yen;</i><em class="pricenum">${listHotel.price}</em></p>
			                      <p class="hotelcom" style="display: none;"> 
			                      <span class="i_zan" title="123人推荐"><s class="png24"></s><b>123</b></span>
			                      <span class="i_com" title="132条点评"><s class="png24"></s><b>132</b></span></p>
			                    </div>
			                    <span class="textbg"></span></a> </div>
		               </c:forEach>
             	</div>
				<div class="picwrap clearfix" style="display: none;">
		            	<c:forEach items="${listHotel7}" var="listHotel" begin="0" end="4" varStatus="status">
							<div class="picinner pic${status.index}">
			               	  <a href="<%=path %>/Account/hlist?id=${listHotel.id}" 
			               	  	 onClick="_gaq.push(['_trackEvAent', '精选推荐','10-A']);" target="_blank"> 
			                     <img src="<%=path %>/statics/picture/${listHotel.img}" alt="${listHotel.img}"/>
			                    <div class="picover">
			                      <p class="hotelname"> <strong>${listHotel.hotelName}</strong></p>
			                      <p class="hotelprice"> <i class="pricermb">&yen;</i><em class="pricenum">${listHotel.price}</em></p>
			                      <p class="hotelcom" style="display: none;"> 
			                      <span class="i_zan" title="123人推荐"><s class="png24"></s><b>123</b></span>
			                      <span class="i_com" title="132条点评"><s class="png24"></s><b>132</b></span></p>
			                    </div>
			                    <span class="textbg"></span></a> </div>
		               </c:forEach>
             	</div>
				<div class="picwrap clearfix" style="display: none;">
		            	<c:forEach items="${listHotel3}" var="listHotel" begin="0" end="4" varStatus="status">
							<div class="picinner pic${status.index}">
			               	  <a href="<%=path %>/Account/hlist?id=${listHotel.id}" 
			               	  	 onClick="_gaq.push(['_trackEvAent', '精选推荐','10-A']);" target="_blank"> 
			                     <img src="<%=path %>/statics/picture/${listHotel.img}" alt="${listHotel.img}"/>
			                    <div class="picover">
			                      <p class="hotelname"> <strong>${listHotel.hotelName}</strong></p>
			                      <p class="hotelprice"> <i class="pricermb">&yen;</i><em class="pricenum">${listHotel.price}</em></p>
			                      <p class="hotelcom" style="display: none;"> 
			                      <span class="i_zan" title="123人推荐"><s class="png24"></s><b>123</b></span>
			                      <span class="i_com" title="132条点评"><s class="png24"></s><b>132</b></span></p>
			                    </div>
			                    <span class="textbg"></span></a> </div>
		               </c:forEach>
             	</div>
				<div class="picwrap clearfix" style="display: none;">
		            	<c:forEach items="${listHotel4}" var="listHotel" begin="0" end="4" varStatus="status">
							<div class="picinner pic${status.index}">
			               	  <a href="<%=path %>/Account/hlist?id=${listHotel.id}" 
			               	  	 onClick="_gaq.push(['_trackEvAent', '精选推荐','10-A']);" target="_blank"> 
			                     <img src="<%=path %>/statics/picture/${listHotel.img}" alt="${listHotel.img}"/>
			                    <div class="picover">
			                      <p class="hotelname"> <strong>${listHotel.hotelName}</strong></p>
			                      <p class="hotelprice"> <i class="pricermb">&yen;</i><em class="pricenum">${listHotel.price}</em></p>
			                      <p class="hotelcom" style="display: none;"> 
			                      <span class="i_zan" title="123人推荐"><s class="png24"></s><b>123</b></span>
			                      <span class="i_com" title="132条点评"><s class="png24"></s><b>132</b></span></p>
			                    </div>
			                    <span class="textbg"></span></a> </div>
		               </c:forEach>
             	</div>
				<div class="picwrap clearfix" style="display: none;">
		            	<c:forEach items="${listHotel5}" var="listHotel" begin="0" end="4" varStatus="status">
							<div class="picinner pic${status.index}">
			               	  <a href="<%=path %>/Account/hlist?id=${listHotel.id}" 
			               	  	 onClick="_gaq.push(['_trackEvAent', '精选推荐','10-A']);" target="_blank"> 
			                     <img src="<%=path %>/statics/picture/${listHotel.img}" alt="${listHotel.img}"/>
			                    <div class="picover">
			                      <p class="hotelname"> <strong>${listHotel.hotelName}</strong></p>
			                      <p class="hotelprice"> <i class="pricermb">&yen;</i><em class="pricenum">${listHotel.price}</em></p>
			                      <p class="hotelcom" style="display: none;"> 
			                      <span class="i_zan" title="123人推荐"><s class="png24"></s><b>123</b></span>
			                      <span class="i_com" title="132条点评"><s class="png24"></s><b>132</b></span></p>
			                    </div>
			                    <span class="textbg"></span></a> </div>
		               </c:forEach>
             	</div>
				<div class="picwrap clearfix" style="display: none;">
		            	<c:forEach items="${listHotel6}" var="listHotel" begin="0" end="4" varStatus="status">
							<div class="picinner pic${status.index}">
			               	  <a href="<%=path %>/Account/hlist?id=${listHotel.id}" 
			               	  	 onClick="_gaq.push(['_trackEvAent', '精选推荐','10-A']);" target="_blank"> 
			                     <img src="<%=path %>/statics/picture/${listHotel.img}" alt="${listHotel.img}"/>
			                    <div class="picover">
			                      <p class="hotelname"> <strong>${listHotel.hotelName}</strong></p>
			                      <p class="hotelprice"> <i class="pricermb">&yen;</i><em class="pricenum">${listHotel.price}</em></p>
			                      <p class="hotelcom" style="display: none;"> 
			                      <span class="i_zan" title="123人推荐"><s class="png24"></s><b>123</b></span>
			                      <span class="i_com" title="132条点评"><s class="png24"></s><b>132</b></span></p>
			                    </div>
			                    <span class="textbg"></span></a> </div>
		               </c:forEach>
             	</div>
				<div class="picwrap clearfix" style="display: none;">
		            	<c:forEach items="${listHotel7}" var="listHotel" begin="0" end="4" varStatus="status">
							<div class="picinner pic${status.index}">
			               	  <a href="<%=path %>/Account/hlist?id=${listHotel.id}" 
			               	  	 onClick="_gaq.push(['_trackEvAent', '精选推荐','10-A']);" target="_blank"> 
			                     <img src="<%=path %>/statics/picture/${listHotel.img}" alt="${listHotel.img}"/>
			                    <div class="picover">
			                      <p class="hotelname"> <strong>${listHotel.hotelName}</strong></p>
			                      <p class="hotelprice"> <i class="pricermb">&yen;</i><em class="pricenum">${listHotel.price}</em></p>
			                      <p class="hotelcom" style="display: none;"> 
			                      <span class="i_zan" title="123人推荐"><s class="png24"></s><b>123</b></span>
			                      <span class="i_com" title="132条点评"><s class="png24"></s><b>132</b></span></p>
			                    </div>
			                    <span class="textbg"></span></a> </div>
		               </c:forEach>
             	</div>
			</div>
		</div>
		<!--mb_bd E-->

		
	</div>
	<!--mod_box E-->

	<div class="mod_box hotel_ts">
		<div class="mb_hd bor_bot clearfix">
			<strong>精品住宿</strong> <a class="more" href="/hotHotelList.asp"
				target="_blank">更多&gt;&gt;</a>
			<div class="city_list">
				<ul class="clearfix">
					<li class="current"><a value="18" href="javascript:void(0)">精品客栈</a></li>
					<li><a value="18" href="javascript:void(0)">精品酒店</a></li>

				</ul>
			</div>
		</div>

		<div class="mb_bd">

			<div class="picwrap clearfix" style="display: block">

				<ul class="ht_list">
					<li class="box0"><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"> <strong>【深圳】青芒果客栈较场尾猫头鹰店</strong></a>
						<p class="ht_tit2">产品经理推荐：海边民宿、清新时尚、舒适安逸、KTV烧烤</p>
						<p class="ht_con">
							客栈距离海边仅两分钟脚程，意式咖啡卡布奇诺色的外观醒目而有格调，开阔的庭院给人一种惬意的自在感，花花草草的点缀更增添了一份清新和亮丽。一共8间客房，色调温暖，白天阳光从落地玻璃门一点点漫进来，闲适而安逸。住在海边的猫头鹰，会在这里迎接每一个狂欢的到来。</p>
					</li>
					<li class="box1"><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"> <img
							src="<%=path %>/statics/picture/295111_1.jpg" alt="青芒果客栈较场尾猫头鹰店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"
						class="tag_a"> 客栈外观</a></li>
					<li class="box2"><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"> <img
							src="<%=path %>/statics/picture/295111_2.jpg" alt="青芒果客栈较场尾猫头鹰店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"
						class="tag_a"> 观景天台</a></li>
					<li class="box3"><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"> <img
							src="<%=path %>/statics/picture/295111_3.jpg" alt="青芒果客栈较场尾猫头鹰店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"
						class="tag_a"> 客厅</a></li>
					<li class="box4"><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"> <img
							src="<%=path %>/statics/picture/295111_4.jpg" alt="青芒果客栈较场尾猫头鹰店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"
						class="tag_a"> 大床房</a></li>
					<li class="box5"><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"> <img
							src="<%=path %>/statics/picture/295111_5.jpg" alt="青芒果客栈较场尾猫头鹰店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_295111.html"
						class="tag_a"> 双床房</a></li>
				</ul>

				<span class="clear"></span>
			</div>

			<div class="picwrap clearfix" style="display: none">

				<ul class="ht_list">
					<li class="box0"><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html"> <strong>【青岛】青岛涵碧楼酒店</strong></a>
						<p class="ht_tit2">产品经理推荐：一座饱含儒家隐居理想的滨海胜地</p>
						<p class="ht_con">
							青岛涵碧楼坐落于青岛凤凰山麓的半岛，伸入海洋腹地，三面环海一面靠山，是一座饱含儒家隐居理想的滨海胜地。目前房间全部为海景套房，房型面积为100平米，拥有极致的亲海性，每间客房的180度美景自是不用说，细软的沙滩、巨大的岩盘和原生态的鲍鱼池更有原汁原味的“海味”。</p>
					</li>
					<li class="box1"><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html"> <img
							src="<%=path %>/statics/picture/88511_1.jpg" alt="青岛涵碧楼酒店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html" class="tag_a">
							酒店外景</a></li>
					<li class="box2"><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html"> <img
							src="<%=path %>/statics/picture/88511_2.jpg" alt="青岛涵碧楼酒店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html" class="tag_a">
							SPA芳疗</a></li>
					<li class="box3"><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html"> <img
							src="<%=path %>/statics/picture/88511_3.jpg" alt="青岛涵碧楼酒店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html" class="tag_a">
							大厅</a></li>
					<li class="box4"><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html"> <img
							src="<%=path %>/statics/picture/88511_4.jpg" alt="青岛涵碧楼酒店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html" class="tag_a">
							餐厅</a></li>
					<li class="box5"><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html"> <img
							src="<%=path %>/statics/picture/88511_5.jpg" alt="青岛涵碧楼酒店" />
					</a><span class="tag_bg"></span><a target="_blank"
						href="http://www.xunshelife.com/boutique_88511.html" class="tag_a">
							房间</a></li>
				</ul>

				<span class="clear"></span>
			</div>

		</div>

	</div>

	<div class="mod_box">
		<div class="hotel_jm">
			<div class="mb_hd ht_tit clearfix">
				<strong>最新加盟</strong><a target="_blank" href="/hotel_new.html"
					class="more">更多>></a>
			</div>
			<div class="mb_bd">
				<span class="go_l" title="上个客栈" id="goleft">上个客栈</span>
				<ul class="jm_list" id="slider">
					<li>

						<div>
							<a target="_blank" href="/hotel_439170.html" title="成都凹凸酒店">
								<img src="<%=path %>/statics/picture/t20181204093332676.jpg"
								alt="成都凹凸酒店" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439170.html" class="jm_a" title="成都凹凸酒店">
								成都凹凸酒店</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_439169.html"
								title="雅居公寓(重庆南坪协信城店)"> <img
								src="<%=path %>/statics/picture/t20181204091037833.jpg"
								alt="雅居公寓(重庆南坪协信城店)" /></a> <span class="jm_a_bg"></span><a
								target="_blank" href="/hotel_439169.html" class="jm_a"
								title="雅居公寓(重庆南坪协信城店)"> 雅居公寓(重庆南坪协信城店)</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_439168.html" title="重庆富生源宾馆">
								<img src="<%=path %>/statics/picture/t20181204090955754.jpg"
								alt="重庆富生源宾馆" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439168.html" class="jm_a" title="重庆富生源宾馆">
								重庆富生源宾馆</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_439167.html"
								title="面包树氧吧公寓(重庆南滨路店)"> <img
								src="<%=path %>/statics/picture/t20181204084801754.jpg"
								alt="面包树氧吧公寓(重庆南滨路店)" /></a> <span class="jm_a_bg"></span><a
								target="_blank" href="/hotel_439167.html" class="jm_a"
								title="面包树氧吧公寓(重庆南滨路店)"> 面包树氧吧公寓(重庆南滨路店)</a>
						</div>
					</li>
					<li>

						<div>
							<a target="_blank" href="/hotel_439166.html" title="张家界旅家客栈">
								<img src="<%=path %>/statics/picture/t20181204081807504.jpg"
								alt="张家界旅家客栈" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439166.html" class="jm_a" title="张家界旅家客栈">
								张家界旅家客栈</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_439165.html" title="德州万达鑫忆主题酒店公寓">
								<img src="<%=path %>/statics/picture/t20181204071349364.png"
								alt="德州万达鑫忆主题酒店公寓" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439165.html" class="jm_a" title="德州万达鑫忆主题酒店公寓">
								德州万达鑫忆主题酒店公寓</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_439161.html" title="烟台花柒公寓酒店">
								<img src="<%=path %>/statics/picture/t20181204055134676.png"
								alt="烟台花柒公寓酒店" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439161.html" class="jm_a" title="烟台花柒公寓酒店">
								烟台花柒公寓酒店</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_439159.html" title="大理何夕客栈">
								<img src="<%=path %>/statics/picture/t20181204052822942.jpg"
								alt="大理何夕客栈" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439159.html" class="jm_a" title="大理何夕客栈">
								大理何夕客栈</a>
						</div>
					</li>
					<li>

						<div>
							<a target="_blank" href="/hotel_439152.html" title="昆明铂尔曼酒店">
								<img src="<%=path %>/statics/picture/t20181204044216958.jpg"
								alt="昆明铂尔曼酒店" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439152.html" class="jm_a" title="昆明铂尔曼酒店">
								昆明铂尔曼酒店</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_439151.html" title="张家界田家小院客栈">
								<img src="<%=path %>/statics/picture/t20181204044753629.jpg"
								alt="张家界田家小院客栈" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439151.html" class="jm_a" title="张家界田家小院客栈">
								张家界田家小院客栈</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_439150.html" title="漳州尊享居公寓">
								<img src="<%=path %>/statics/picture/t20181204051005192.jpg"
								alt="漳州尊享居公寓" />
							</a> <span class="jm_a_bg"></span><a target="_blank"
								href="/hotel_439150.html" class="jm_a" title="漳州尊享居公寓">
								漳州尊享居公寓</a>
						</div>

						<div>
							<a target="_blank" href="/hotel_438993.html"
								title="格林豪泰快捷酒店上海北桥地铁站店"> <img
								src="<%=path %>/statics/picture/1551af998abb4724b027f8ad0b485ea8.gif"
								alt="格林豪泰快捷酒店上海北桥地铁站店" /></a> <span class="jm_a_bg"></span><a
								target="_blank" href="/hotel_438993.html" class="jm_a"
								title="格林豪泰快捷酒店上海北桥地铁站店"> 格林豪泰快捷酒店上海北桥地铁站店</a>
						</div>

					</li>
				</ul>
				<span class="go_r" title="下个客栈" id="goright">下个客栈</span>
			</div>
			<span class="clear"></span>
		</div>
		<div class="btn_jm">
			<h2 class="hide-text">免费加盟，免佣金</h2>
			<p class="p1">
				只收服务费<br /> 100%真实订单，无NOSHOW<br /> 大平台，销量有保障
			</p>
			<a target="_blank" href="http://jiameng.qmango.com/"
				class="hide-text">马上加盟</a>
			<p class="p2">
				已有<b>200,000</b> 家酒店加盟了青芒果
			</p>
		</div>
	</div>
	<span class="clear"></span>
	<!--content E-->
	<!--footer 区域 S-->
	<div class="clearfix" id="footer">
		<div class="footer2013" id="footer">
			

		</div>
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
						<img src="<%=path %>/statics/picture/qmgwx.gif" alt="青芒果微信号" /> <span>青芒果微信号</span>
					</p>
					<p class="code">
						<img src="<%=path %>/statics/picture/sjapp.gif" alt="手机APP下载" />
						<span>手机APP下载</span>
					</p>
				</div>
			</div>
			<div class="other">
				<div class="inner clearfix">
					<p>
						<!--<a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202006041400011" target="_blank" title="经营性网站备案信息" rel="nofollow">
                            <img src="<%=path %>/statics/picture/baxx.gif" alt="经营性网站备案信息"/>
                        </a>-->
						<a href="http://www.sznet110.gov.cn/netalarm/index.jsp"
							target="_blank" title="网络110报警服务" rel="nofollow"> <img
							src="<%=path %>/statics/picture/bjfw.gif" alt="网络110报警服务" />
						</a> <a
							href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403101920902"
							target="_blank" title="深圳市安网备案" rel="nofollow"> <img
							src="<%=path %>/statics/picture/awba.gif" alt="深圳市安网备案" />
						</a> <a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1618815109"
							target="_blank" title="AAA级信用企业" rel="nofollow"> <img
							src="<%=path %>/statics/picture/xyqy.gif" alt="AAA级信用企业" />
						</a> <a
							href="http://cert.ebs.org.cn/529511f5-b6cf-4b48-8705-4abd13563c92.html"
							target="_blank" title="众信验证" rel="nofollow"> <img
							src="<%=path %>/statics/picture/zxyz.gif" alt="众信验证" />
						</a> <a href="http://www.12377.cn/" target="_blank" title=""
							style="margin-right: 0px;" rel="nofollow"> <img
							src="<%=path %>/statics/picture/jbzx.jpg" alt="" />
						</a> <a><script id="ebsgovicon"
								src="<%=path %>/statics/js/govicon.js" type="text/javascript"
								charset="utf-8"></script></a>
					</p>
					<p>
						版权所有 &copy; <a href="http://www.qmango.com" target="_blank"
							style="margin: 0px;">青芒果旅行网 www.qmango.com</a> Copyright
						1999-2013 All Rights Reserved&nbsp;&nbsp;<a target="_blank"
							href="http://www.miitbeian.gov.cn">粤ICP备13017802号-2</a>
						&nbsp;违法和不良信息举报电话：0755-36883033
					</p>
				</div>
			</div>
		</div>
	</div>
	<!--footer 区域 E-->

	<!--弹窗 S-->
	<div class="mybox" style="display: none;" id="popmap">
		<div class="inner">
			<div class="mt clearfix">
				<strong></strong><a class="closebox close">×</a>
			</div>
			<div class="mc">ddd</div>
		</div>
	</div>
	<!--
    <div class="ifr" style="display: none;">
        <iframe src="http://css.qmango.com/n<%=path %>/statics/css/ifr.html" frameborder="0" scrolling="no">
        </iframe>
    </div>
    -->
	<!--弹窗 E-->
	<!--引导 S-->
	<div class="step png24" id="step01" style="display: none;">
		<a href="javascript:void(0);" class="step_close">关闭</a> <a
			href="javascript:void(0);" class="step_next">继续</a>
	</div>
	<div class="step png24" id="step02" style="display: none;">
		<a href="javascript:void(0);" class="step_close">关闭</a> <a
			href="javascript:void(0);" class="step_next">继续</a>
	</div>
	<div class="step png24" id="step03" style="display: none;">
		<a href="javascript:void(0);" class="step_close">关闭</a> <a
			href="javascript:void(0);" class="step_next">继续</a>
	</div>
	<div class="step png24" id="step04" style="display: none;">
		<a href="javascript:void(0);" class="step_close">关闭</a> <a
			href="javascript:void(0);" class="step_next">继续</a>
	</div>
	<div class="step png24" id="step05" style="display: none;">
		<a href="javascript:void(0);" class="step_close">关闭</a> <a
			href="javascript:void(0);" class="step_next">继续</a>
	</div>
	<div class="step png24" id="step06" style="display: none;">
		<a href="javascript:void(0);" class="step_next">完成</a>
	</div>
	<div class="maskbg" style="display: none;"></div>
	<!--引导 E-->
	<!-- 侧边 S-->
	<div id="scroll_nav" class="scroll_nav">
		<s></s>
		<ul class="snav_list">
			<li><a
				href="http://chat.looyu.com/chat/chat/p.do?c=48339&amp;f=102300&amp;g=59523"
				class="r_call" target="_blank"></a></li>
			<li>
				<div class="weixin r_kf">
					<div class="wei-pop">
						<img src="<%=path %>/statics/picture/ewm_phone.png"
							alt="免费下载青芒果酒店预订手机客户端">
						<ul>
							<li class="na">微信号：qmangocity</li>
							<li>随时随地查订单</li>
							<li>随时找	信客服</li>
							<li>优先推送特价酒店</li>
						</ul>
					</div>
				</div>
			</li>
			<li><a href="javascript:void(0);" class="r_top"></a></li>
		</ul>
	</div>
	<script src="<%=path %>/statics/js/jquery-1.9.0.min.js"></script>
	<script src="<%=path %>/statics/js/jquery-migrate-1.1.1.js"></script>
	<!--jquery版本兼容-->
	<script src="<%=path %>/statics/js/plugins.js"></script>
	<!--html5 标签兼容-->
	<script src="<%=path %>/statics/js/index.js"></script>
	<!--视觉JS-->
	<script src="<%=path %>/statics/js/citylist.js"></script>
	<!--城市city库-->
	<script src="<%=path %>/statics/js/pinyin.js"></script>
	<!--转化拼音插件-->
	<script src="<%=path %>/statics/js/querycity_index.js"></script>
	<!--城市选择JS插件-->
	<script src="<%=path %>/statics/js/querykey_index.js"></script>
	<script src="<%=path %>/statics/js/querycity_mall.js"
		type="text/javascript"></script>
	<!--城市选择JS插件-->
	<script src="<%=path %>/statics/js/calendar_min2.js"></script>
	<script src="<%=path %>/statics/js/searchui_index.js"></script>
	<!--酒店搜索区域代码-->
	<!--<script src="<%=path %>/statics/js/common.js"></script>-->
	<!--页面初始化-->
	<script src="<%=path %>/statics/js/common.js"></script>
	<!--页面初始化-->
	<script src="<%=path %>/statics/js/listfunction.js"></script>
	<!--公用方法-->
	<script src="<%=path %>/statics/js/public.js"></script>
	<!--头部部分专用JS-->
	<script src="<%=path %>/statics/js/notice.js"></script>
	<!--公告显示JS-->
	<script src="<%=path %>/statics/js/jquery.simple_slider.js"></script>
	<!--最新加盟酒店展示JS-->
	<script src="<%=path %>/statics/js/jquery.flexslider-min.js"></script>
	<script type="text/javascript" async="async" charset="utf-8"
		src="<%=path %>/statics/js/113120.js"></script>
	<!--乐语JS-->

	<!--旅游产品搜索 S-->
	<script src="<%=path %>/statics/js/jq.tab.js" type="text/javascript">//切换</script>
	<script type="text/javascript">
	$(function(){
		$(".lubo").lubo({

        });
		//图片轮播 
		$('#slider').simple_slider({display: 1});
		
		$('#mod-silder').flexslider({
			animation : 'slide',
			controlNav : false,
			directionNav : false,
			animationLoop : false,
			slideshow : false,
			prevText : "",
        	nextText : ""
		});
			  
		//透明背景
		$(".jm_a_bg,.tag_bg").css("opacity",.5);
		$(".ht_list li").hover(function(){$(this).find(".tag_bg,.tag_a").show();},function(){$(this).find(".tag_bg,.tag_a").hide();});
		
		//搜索切换
		$("#s_box").tab({v:true,e:"mouseover"});
		
		//回车搜索
		$(document).keydown(function(event){ 
			if(parseInt(event.keyCode) == 13){
				//高度不超过搜索框
				if($(document).scrollTop()>500){ return false; }
				//如果登陆框为显示状态
				if($(".dropdown").eq(0).attr("class").indexOf("hover")>-1 && $(".login").css("display") != "none"){ return false; }
				
				if($("#suggest_city_city").css("display") == "none" && $("#suggest_city2_city2").css("display") == "none"){
					if($("#hotel_soso").attr("class").indexOf("cur")>-1){
						$("#btn_search").click();
					}else{
						$("#btn_product_search").click();
					}
				}
			}
		}); 
	});
	
	//旅游产品搜索
	function LYSreach(){
		window.location.href="search.jsp";
		var city = $("#city_id2").val()?$("#city_id2").val():1;
		var productType = $("#type2").val();
		var keyword = $("#keywords2").val();
		var productTypeId = 0;

		if(productType =="门票"){
			productTypeId = 1;	
		}else if(productType =="租车"){
			productTypeId = 2;
		}else if(productType =="周边游"){
			productTypeId = 3;
		}else if(productType =="保险"){
			productTypeId = 4;
		}else if(productType =="餐饮"){
			productTypeId = 5;
		}else if(productType =="旅游纪念品"){
			productTypeId = 6;
		}else if(productType =="导游"){
			productTypeId = 7;
		}else if(productType =="娱乐活动"){
			productTypeId = 8;
		}else if(productType =="套票"){
			productTypeId = 9;
		}else if(productType =="特殊商品"){
			productTypeId = 10;
		}
		
		if($("#city2").val() == "所在城市"){ city = "0"; } //默认为全国
		if(keyword == "景点或门票名称" || keyword == "") { keyword = "0"; } //默认keyword为0
		
		var reg = new RegExp("%", "g"); //创建正则RegExp对象     
		if(productTypeId == 0 && keyword == "0"){
			top.location.href = "http://ly.qmango.com/citys_"+city+".html";
		}else if(productTypeId == 0){
            keyword = escape(keyword).replace(reg, "QMG");
			top.location.href = "http://ly.qmango.com/productlist_"+city+"_0_0_0_"+keyword+".html";
		}else{
            keyword = escape(keyword).replace(reg, "QMG");
			top.location.href = "http://ly.qmango.com/productlist_"+city+"_"+productTypeId+"_0_1_"+keyword+".html";	
		}
	}
    </script>

	<script> 
	var _hmt = _hmt || []; 
	(function() { 
	var hm = document.createElement("script"); 
	hm.src = "//hm.baidu.com/hm.js?ce75e06d724fd33b2614a008ec776b54"; 
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s); 
	})(); 
	</script>

	<div style="display: none">
		<script src="<%=path %>/statics/js/stat.js" language="JavaScript"></script>
	</div>
	<script language="javascript" src="<%=path %>/statics/js/o_code.js"></script>
</body>
</html>
