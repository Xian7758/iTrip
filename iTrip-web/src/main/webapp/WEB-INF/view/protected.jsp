<%@ page language="java" contentType="text/html; utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<HTML xmlns="http://www.w3.org/1999/xhtml" sizcache="16" sizset="0">
<HEAD>
<TITLE>在线预订页面_会员中心_青芒果首创订金预付模式,价格更低_青芒果旅行网</TITLE>
<META content="text/html; charset=gb2312" http-equiv=Content-Type>
<META content=IE=EmulateIE7 http-equiv=X-UA-Compatible>
<META name=keywords content=在线预订,会员中心,青芒果旅行网>
<META name=description
	content=国内领先的旅游服务品牌,国内第一家即时旅行预订网络+国内最早和最大的在线预订网络。特价提供全国1000个城市,超过20,000家青年旅舍、经济型酒店、宾馆、客栈、家庭旅馆、招待所的预订、查询和点评!>
<LINK rel=stylesheet href="http://css.qmango.com/css2013/normalize.css">
<LINK rel=stylesheet href="http://css.qmango.com/css2013/main.css">
<LINK rel=stylesheet href="http://css.qmango.com/css2013/booking.css">
<LINK rel=stylesheet href="http://css.qmango.com/openwin710.css">
<SCRIPT src="//hm.baidu.com/hm.js?ce75e06d724fd33b2614a008ec776b54"></SCRIPT>

<SCRIPT language=JavaScript type=text/javascript
	src="http://js.qmango.com/njs/jquery-1.4.1.min.js"></SCRIPT>

<SCRIPT language=JavaScript type=text/javascript
	src="http://js.qmango.com/njs/jquery.tools.min.js"></SCRIPT>

<SCRIPT language=JavaScript type=text/javascript
	src="../js/njs/jq_main_yh.js"></SCRIPT>

<SCRIPT language=JavaScript type=text/javascript src="../js/checkData.js"></SCRIPT>

<SCRIPT language=JavaScript type=text/javascript
	src="../js/js_availFormCheck.js"></SCRIPT>
<!--<script src="http://js.qmango.com/js2013/yibodsp.js"></script>-->
<STYLE type=text/css>
DIV.floats {
	RIGHT: 0px;
	POSITION: absolute
}

DIV#qmg_online {
	MARGIN: 0px;
	TOP: 200px
}

.paybox {
	BORDER-TOP: #339933 1px solid;
	BORDER-RIGHT: #339933 1px solid;
	WIDTH: 560px;
	BORDER-BOTTOM: #339933 1px solid;
	BORDER-LEFT: #339933 1px solid
}

.paybhead {
	HEIGHT: 40px;
	WIDTH: 560px;
	POSITION: relative
}

.paytit {
	FONT-SIZE: 14px;
	HEIGHT: 30px;
	WIDTH: 545px;
	BORDER-BOTTOM: #ccc 1px solid;
	FONT-WEIGHT: bold;
	COLOR: #339933;
	TEXT-ALIGN: left;
	MARGIN-LEFT: 10px;
	LINE-HEIGHT: 30px
}

.payclose {
	CURSOR: pointer;
	HEIGHT: 22px;
	WIDTH: 21px;
	BACKGROUND: url(http://img.qmango.com/nimages/close.jpg);
	POSITION: absolute;
	LEFT: 535px;
	TOP: 5px
}

.zfbox1 A {
	CURSOR: pointer;
	TEXT-DECORATION: none
}

.zfbox1 A:hover {
	CURSOR: pointer;
	TEXT-DECORATION: underline
}

.zfbox1 A:link {
	COLOR: #06f
}

.zfbox1 A:visited {
	COLOR: #06f
}

.zfbox1 {
	BORDER-TOP: #339933 1px solid;
	BORDER-RIGHT: #339933 1px solid;
	WIDTH: 560px;
	BORDER-BOTTOM: #339933 1px solid;
	BORDER-LEFT: #339933 1px solid
}

.zfbhead {
	HEIGHT: 32px;
	WIDTH: 560px;
	BACKGROUND: #ddecd1;
	BORDER-BOTTOM: #add38e 1px solid;
	POSITION: relative
}

.zftit {
	FONT-SIZE: 14px;
	HEIGHT: 30px;
	FONT-WEIGHT: bold;
	COLOR: #339933;
	TEXT-ALIGN: left;
	MARGIN-LEFT: 10px;
	LINE-HEIGHT: 30px
}

.zfclose {
	CURSOR: pointer;
	HEIGHT: 20px;
	WIDTH: 20px;
	BACKGROUND: url(http://img.qmango.com/nimages/close.jpg) no-repeat -1px
		50%;
	POSITION: absolute;
	LEFT: 535px;
	TOP: 5px
}

.zfbmain {
	
}

.zfbmain .zfbml {
	MARGIN-BOTTOM: 20px;
	WIDTH: 430px;
	MARGIN-TOP: 15px;
	COLOR: #666;
	MARGIN-LEFT: 80px;
	LINE-HEIGHT: 20px
}

.zfbml .bmltx1 {
	BACKGROUND: url(http://img.qmango.com/nimages/ic2.jpg) no-repeat;
	TEXT-ALIGN: left;
	PADDING-LEFT: 20px
}

.zfbml .lbox {
	MARGIN-TOP: 15px;
	MARGIN-LEFT: 100px
}

.zfbml .sub3 {
	BORDER-LEFT-WIDTH: 0px;
	CURSOR: pointer;
	HEIGHT: 32px;
	BORDER-RIGHT-WIDTH: 0px;
	WIDTH: 82px;
	BACKGROUND: url(http://img.qmango.com/nimages/bg_btn.png) no-repeat 0px
		-150px;
	BORDER-BOTTOM-WIDTH: 0px;
	FLOAT: left;
	COLOR: #fff;
	TEXT-ALIGN: center;
	LINE-HEIGHT: 32px;
	BORDER-TOP-WIDTH: 0px
}

.zfbml .sub4 {
	BORDER-LEFT-WIDTH: 0px;
	CURSOR: pointer;
	HEIGHT: 32px;
	BORDER-RIGHT-WIDTH: 0px;
	WIDTH: 98px;
	BACKGROUND: url(http://img.qmango.com/nimages/bg_btn.png) no-repeat
		-454px -150px;
	BORDER-BOTTOM-WIDTH: 0px;
	FLOAT: left;
	COLOR: #fff;
	TEXT-ALIGN: center;
	MARGIN-LEFT: 10px;
	LINE-HEIGHT: 32px;
	BORDER-TOP-WIDTH: 0px
}

.zff {
	FONT-SIZE: 12px;
	FLOAT: left;
	TEXT-ALIGN: left;
	MARGIN-LEFT: 25px
}

.title {
	FONT-SIZE: 14px;
	OVERFLOW: hidden;
	HEIGHT: 60px;
	WIDTH: 509px;
	BACKGROUND: url(http://img.qmango.com/qmango101201.png) #ffffff
		no-repeat 0px -52px;
	COLOR: #ffffff;
	PADDING-LEFT: 10px;
	LINE-HEIGHT: 40px
}

.title H3 {
	FLOAT: left
}

.title SPAN {
	FONT-SIZE: 1px;
	OVERFLOW: hidden;
	CURSOR: pointer;
	HEIGHT: 19px;
	WIDTH: 20px;
	BACKGROUND: url(http://img.qmango.com/qmango101201.png) no-repeat 0px
		-180px;
	MARGIN-TOP: 8px;
	FLOAT: right;
	MARGIN-RIGHT: 10px;
	TEXT-INDENT: 999em
}

.subbtnA {
	CURSOR: pointer;
	BORDER-TOP: medium none;
	HEIGHT: 24px;
	BORDER-RIGHT: medium none;
	WIDTH: 58px;
	BACKGROUND: url(http://img.qmango.com/qmango101201.png) no-repeat -58px
		-270px;
	BORDER-BOTTOM: medium none;
	BORDER-LEFT: medium none;
	LINE-HEIGHT: 24px
}

.fm_cont {
	WIDTH: 500px;
	TEXT-ALIGN: left;
	MARGIN-LEFT: 40px
}

.inputWrap {
	MARGIN-TOP: 10px
}

.bo-cont .bk-c UL LI {
	HEIGHT: auto;
	LINE-HEIGHT: 30px
}

.bk-c .i_tip {
	BACKGROUND: url(http://img.qmango.com/nimages/bg_icon.png) no-repeat 0px
		-260px;
	PADDING-LEFT: 14px;
	MARGIN-LEFT: 95px;
	DISPLAY: block
}

.pay_error {
	BORDER-TOP: #ccc 1px dashed;
	COLOR: #555;
	TEXT-ALIGN: left;
	PADDING-TOP: 10px;
	CLEAR: both;
	MARGIN: 0px 20px 20px
}

.pe_list {
	MARGIN-BOTTOM: 10px;
	LINE-HEIGHT: 21px
}
</STYLE>

<SCRIPT type=text/javascript>
var D=new Function('obj','return document.getElementById(obj);')
function htmlbody(){
return (
   document.documentElement.clientHeight<=document.body.clientHeight
   &&document.documentElement.clientHeight!=0
)
?document.documentElement:document.body;
}
//浏览器滚动条位置
function scrollLeft(){return (!window.pageYOffset)?htmlbody().scrollLeft:window.pageXOffset;}
function scrollTop(){return (!window.innerHeight)?htmlbody().scrollTop:window.pageYOffset;}

function moveTips(strobj,theTop){
var old,nowobj = D(strobj);
var re_theTop = theTop;
if (!openweb){old = re_theTop;var openweb;}/*这是默认高度*/;
var pos,tt=50;
pos = scrollTop()*1-nowobj.offsetTop*1+re_theTop*1;
pos = nowobj.offsetTop+pos/10;//纵向开始递增
if (pos < re_theTop) pos = re_theTop;
if (pos != old) {nowobj.style.top = pos+"px";tt=5;}
old = pos;
setTimeout("moveTips('"+strobj+"','"+theTop+"')",tt);
}
</SCRIPT>
</HEAD>
<BODY sizcache="16" sizset="0">
	<NOSCRIPT></NOSCRIPT>
	<!--<div id="tongzhi" style="background-color: #FFF9E9;border-bottom: 1px solid #FABE78;color: #F59045;display: block;height: 30px;line-height: 30px; margin-left: auto;margin-right: auto;text-align: center;"><span onclick="hid()" style="float:right; padding-right:10px; cursor:pointer;">关闭</span>青芒果网站支付全部采用银行网关和支付宝、财付通第三方支付平台，安全可靠，不保存客户任何银行卡信息，请放心使用。</div>-->
	<!--header begin-->
	<!--<div id="tongzhi" style="background-color: #FFF9E9;border-bottom: 1px solid #FABE78;color: #F59045;display: block;height: 30px;line-height: 30px; margin-left: auto;margin-right: auto;text-align: center;"><span onClick="hid()" style="float:right; padding-right:10px; cursor:pointer;">关闭</span>青芒果系统将于2016-04-21日凌晨00:00到07:00进行升级维护，由此带来的不便敬请谅解！</div>-->
	<DIV class=header2013 sizcache="16" sizset="0">
		<DIV class=topnav style="DISPLAY: none" jQuery1543974263808="10"
			sizcache="16" sizset="0">
			<DIV class="inner clearfix" sizcache="16" sizset="0">
				<DIV class=welcome sizcache="16" sizset="0">
					<UL class=w_text sizcache="16" sizset="0">
						<LI id=loginInfo class=w_t_li>嘿，你来了！</LI>
						<LI class="w_t_li login" sizcache="16" sizset="0">
							<DIV class=dropdown jQuery1543974263808="84" sizcache="14"
								sizset="0">
								<A class=dropdown_hd href="#" onFocus="undefined">登录</A> <S
									class=i_dropdown></S>
								<DIV class="dropdown_bd login_inner" sizcache="14" sizset="0">
									<UL class=login_input sizcache="14" sizset="0">
										<LI>登录名
										<LI class=li_placeholder><SPAN class=span_placeholder
											jQuery1543974263808="90">手机/邮箱/用户名</SPAN><INPUT id=uid
											class=input_login name=uid AUTOCOMPLETE="off"
											jQuery1543974263808="88">
										<LI>密码
										<LI><INPUT id=upwd class=input_login type=password
											value="" name=upwd jQuery1543974263808="82">
										<LI sizcache="13" sizset="0"><INPUT id=mdl
											class=checkbox_login type=checkbox value="" name=mdl
											AUTOCOMPLETE="off"><LABEL for=mdl>十天免登录</LABEL><A
											class=a_getpassword href="/users/passwordForget.asp"
											target=_blank onFocus="undefined">忘记密码?</A>
										<LI class=l_i_btn><BUTTON id=btnLogin
												jQuery1543974263808="80">登录</BUTTON></LI>
									</UL>
									<UL class=login_link sizcache="5" sizset="2">
										<LI>使用以下帐号登录
										<LI sizcache="4" sizset="2"><SPAN class="btns qq"
											sizcache="4" sizset="2"><S></S><A
												href="http://www.qmango.com/ThirdPartLogin/qqconnect/redirect.asp"
												onFocus="undefined">QQ</A></SPAN>
										<LI sizcache="4" sizset="3"><SPAN class="btns mail139"
											sizcache="4" sizset="3"><S></S><A
												href="http://www.qmango.com/ThirdPartLogin/weixin/redirect.asp"
												onFocus="undefined">微信</A></SPAN>
										<LI sizcache="4" sizset="4"><SPAN class="btns sina"
											sizcache="4" sizset="4"><S></S><A
												href="http://www.qmango.com/xlapi/index.asp"
												onFocus="undefined">新浪</A></SPAN>
										<LI sizcache="4" sizset="5"><SPAN class="btns alipay"
											sizcache="4" sizset="5"><S></S><A
												href="http://www.qmango.com/alipayauth/auth_authorize.asp"
												onFocus="undefined">支付宝</A></SPAN></LI>
									</UL>
									<SPAN onclick="$('.dropdown').removeClass('hover');"
										class=close></SPAN>
								</DIV>
							</DIV>
						</LI>
						<LI class="w_t_li reg" sizcache="4" sizset="6"><A
							href="/users/login.asp" onFocus="undefined">注册</A> <!--<li class="w_t_li hotbag"><a href="http://www.qmango.com/redbag.asp" target="_blank">邀请好友&nbsp;<img src="http://img.qmango.com/images2013/hotbag.gif" style="vertical-align:middle;"></a></li>--></LI>
					</UL>
				</DIV>
				<DIV class=topmenu sizcache="15" sizset="1">
					<UL sizcache="15" sizset="1">
						<LI class=myorder sizcache="16" sizset="1">
							<DIV class=dropdown jQuery1543974263808="86" sizcache="4"
								sizset="7">
								<A class=dropdown_hd href="javascript:void(0);"
									onFocus="undefined">我的订单</A> <A class=i_order href="#"
									onFocus="undefined"><SPAN class=i_left></SPAN><SPAN
									id=order_num class=i_main>0</SPAN> <SPAN class=i_right></SPAN></A>
								<DIV id=orderlist class="dropdown_bd order_inner">
									你好，请先<A style="COLOR: #7fbe25"
										href="http://www.qmango.com/users/login.asp"
										onFocus="undefined">登录</A>后再查看订单
								</DIV>
							</DIV>
						</LI>
						<LI sizcache="4" sizset="9"><A
							href="http://chat.looyu.com/chat/chat/p.do?c=48339&amp;f=102300&amp;g=59523"
							rel="external nofollow" target=_blank onFocus="undefined">在线客服</A>
						</LI>
						<LI sizcache="4" sizset="10"><A
							href="http://www.qmango.com/about/contact.asp" target=_blank
							onFocus="undefined">联系我们</A></LI>
						<LI sizcache="4" sizset="11"><A
							href="http://www.qmango.com/help.asp" target=_blank
							onFocus="undefined">帮助中心</A></LI>
						<LI sizcache="4" sizset="12"><A class=wx_link
							href="javascript:;" target=_blank onFocus="undefined">关注微信，赢ipad
								<IMG alt=关注微信，赢ipad src="/images/xuyang/wx.gif" width=413
								height=385>
						</A></LI>
						<LI sizcache="4" sizset="13"><A class=go_mg
							href="http://www.mangocity.com" target=_blank onFocus="undefined">芒果网</A>
						</LI>
					</UL>
				</DIV>
			</DIV>
		</DIV>
		<!--topnav e
  <script type="text/javascript" async="async" charset="utf-8" src="http://gate.looyu.com/48339/113120.js"></script>-->
		<DIV class="mainnav clearfix" sizcache="5" sizset="15">
			<H2 class=logo sizcache="4" sizset="14">
				<A title="青芒果旅行网 领先的经济类酒店预订平台" href="index.jsp"
					alt="青芒果旅行网" onFocus="undefined"></A>
			</H2>
			<UL class=nav2013 sizcache="5" sizset="15">
				<LI sizcache="4" sizset="15"><A class=nav_index
					href="index.jsp" onFocus="undefined">首页</A></LI>
				<LI sizcache="4" sizset="16"><STRONG></STRONG><A
					href="http://hotelinfo.qmango.com/hotel/list/?clsid=3,8,13,9,11"
					onFocus="undefined">客栈青旅</A></LI>
				<LI sizcache="4" sizset="17"><A
					href="http://hotelinfo.qmango.com/hotel/list/?clsid=1,2"
					onFocus="undefined">经济酒店</A></LI>
				<LI sizcache="4" sizset="18"><A
					href="http://hotelinfo.qmango.com/hotel/list/?cityId=18"
					onFocus="undefined">香港酒店</A></LI>
				<LI class=icon_oversea sizcache="4" sizset="19"><A
					href="http://hotelinfo.qmango.com/hotel/list/?clsid=16,17"
					onFocus="undefined">精品频道</A> <!--<li class="icon_hot"><a href="http://ly.qmango.com/">国内旅游</a></li>--></LI>
				<LI class=icon_oversea sizcache="4" sizset="20"><A
					href="http://www.qmango.com/boutique.html" onFocus="undefined">寻舍</A>
				</LI>
				<LI class=icon_oversea sizcache="4" sizset="21"><A
					href="http://www.1yunsu.com/" target=_blank onFocus="undefined">云宿商城</A>
				</LI>
				<LI class=icon_pms sizcache="4" sizset="22"><STRONG
					sizcache="4" sizset="22"><A title=PMS class=a_pms
						href="http://pms.qmango.com/" target=_blank onFocus="undefined">PMS</A><A
						title=开店 href="http://jiameng.qmango.com/" target=_blank
						onFocus="undefined">开店</A></STRONG><A href="http://hotel.qmango.com/"
					target=_blank onFocus="undefined">酒店登录</A></LI>
			</UL>
			<DIV class=topad sizcache="4" sizset="25">
				<A title=青芒果手机端预订低至1元 href="http://www.qmango.com/apk/index.html"
					target=_blank onFocus="undefined"><IMG class=fl
					alt=青芒果酒店预订手机客户端免费下载
					src="http://img.qmango.com/images2013/appdown2.gif">
					<P class=tp>0元预订</P>
					<P>全网低价</P></A>
			</DIV>
			<DIV class=topslogan></DIV>
		</DIV>
		<DIV class=colorline>
			<DIV class="inner clearfix">
				<SPAN class=line01></SPAN><SPAN class=line02></SPAN>
			</DIV>
		</DIV>
	</DIV>
	<!--header end-->
	<!--<link href="/css/main1.css" rel="stylesheet">-->
	<SCRIPT language=JavaScript src="http://js.qmango.com/js_openWin.js"></SCRIPT>

	<SCRIPT language=JavaScript src="http://js.qmango.com/mobile.js"></SCRIPT>
	<!-- Google Code for &#38738;&#33426;&#26524;&#39044;&#35746;&#21333; Conversion Page -->
	<SCRIPT type=text/javascript>
/* <![CDATA[ */
var google_conversion_id = 1066327035;
var google_conversion_language = "zh_CN";
var google_conversion_format = "2";
var google_conversion_color = "ffffff";
var google_conversion_label = "NjGgCP3A7QEQ-7e7_AM";
var google_conversion_value = 0;
/* ]]> */
</SCRIPT>

	<DIV class=crumbs style="DISPLAY: none">
		<DIV class="hotel_step mb10">
			<DIV class=fl></DIV>
			<DIV class="fr liucheng lc03"></DIV>
		</DIV>
	</DIV>
	<SCRIPT language=javascript>
<!--//
var qm_ckeckcard
qm_ckeckcard=0
var chk_scorepwd;
chk_scorepwd=0;
var chk_scorepwd2;
chk_scorepwd2=0;
function cc_card()
{
	var xyk_lb=$("#xyk_lb").val();
	var xyk_four=$("#xyk_four").val();
	if(xyk_lb=="0")
	{
		$("#check_pp").html("<font color=red>&nbsp;×&nbsp;请选择历史信用卡</font>");
		qm_ckeckcard=3
	}
	if(xyk_four.length==0)
	{
		$("#check_pp").html("<font color=red>&nbsp;×&nbsp;请输入信用卡后四位</font>");
		qm_ckeckcard=4
	}

	$.ajax({url: '/check_card.asp',
				type: 'GET',
				data:"xyk_lb="+xyk_lb+"&xyk_four="+xyk_four+"&qm_restcard="+0,	
				dataType: 'HTML',
				timeout: 6000,	
				error: function(){
					//alert("请求超时！请重试");
					//qm_ckeckcard=1;
				},
				success: function(result){
					//alert(result);
					if(result=="T")
					{
						qm_ckeckcard=2;
						$("#check_pp").html("&nbsp;<img src='http://img.qmango.com/right.jpg' border='0' alt='进行选择' />");
					}
					else if(result=="F")
					{
						qm_ckeckcard=1;
						if(xyk_four.length>0 && xyk_lb!="0")
						{
							$("#check_pp").html("<font color=red>&nbsp;×&nbsp;历史信用卡验证失败</font>");
						}
					}
				}
		});

}

function fx_card()
{
	//var xp_newcardtype=$("#newcardtype").val();//卡种
//	var xp_newcardno=$("#newcardno").val();//卡号
//	var xp_holder=$("#holder").val();//持卡人姓名
//	var xp_certfct=$("#certfct").val();//持卡人有效证件种类
//	var xp_certno=$("#certno").val();//持卡人有效证件号
//	var xp_validatecode=$("#validatecode").val();//验证码
//	
//	if(xp_newcardtype.length==0 || xp_newcardtype==null || xp_newcardtype=="-1")
//	{
//		alert('请选择银行卡种！');
//		return false;
//	}
//	else if(xp_newcardno.length==0 || xp_newcardno==null || xp_newcardno=="-1")
//	{
//		alert('信用卡卡号不能为空！');
//		return false;
//	}
//	else if(xp_holder.length==0 || xp_holder==null || xp_holder=="-1")
//	{
//		alert('持卡人不能为空！');
//		return false;
//	}
//	else if(xp_certfct.length==0 || xp_certfct==null || xp_certfct=="-1")
//	{
//		alert('请选择持卡人有效证件！');
//		return false;
//	}
//	else if(xp_certno.length==0 || xp_certno==null || xp_certno=="-1")
//	{
//		alert('持卡人有效证件号码不能为空！');
//		return false;
//	}
//	else if(xp_validatecode.length==0 || xp_validatecode==null || xp_validatecode=="-1")
//	{
//		alert('验证码不能为空！');
//		return false;
//	}
}

/*function displayOrderpay()
{	
	
	alert(document.frm1.c_contactor.value)
	$(".bk-orderpay").show();
	$(".confirm").hide();
	return false;
}*/


$(document).keyup(function(event){ 
	if((parseInt(event.keyCode)>=48 && parseInt(event.keyCode)<=57) || (parseInt(event.keyCode)>=96 && parseInt(event.keyCode)<=105)){
		if($("#c_mobile").val().length>10){
			CheckExists('m',$("#c_mobile").val())
		}
	}
}); 


function showOrderPay(){
	if(oncheckOrder(document.frm1,0) == true){
		$(".bk-orderpay").show();
		$("body,html").scrollTop($(".bk-orderpay").offset().top-60);
		$(".confirm").hide();
		$("#confirmdiv").show();	
	}
}
function oncheckOrder(f,obj)
{
	var s,i,j,bePrepay;
	s=" +=|'#&<>%*`^/\\\;.";
	str=f.c_contactor;
	str1=str.value.toString();
	bePrepay = "True"

	
	
   
   if($("#hdrourceid").val() == "100" && $("#hdProvince").val() != "23" && $("#hdProvince").val() != "31"){
	   
	   	if((/[\u4e00-\u9fa5]+/).test(f.c_contactor.value)){     
			$("#fname_promit").html("<font color='red'>特别提示：因星级酒店要求，入住人必须填写汉语拼音(以身份证为准)，否则无法入住</font>").show();
			$("#fname_promit").css("display","block");	
			return false;     
		}
	   
	    if (f.c_contactor.value.length<2 )
		{
			$("#fname_promit").html("<font color='red'>&nbsp;请输入入住人姓名的汉语拼音，不能包含特殊字符，且用逗号分隔多个入住人真实姓名拼音，例如：张三丰即填写zhangsanfeng，请注意拼音的准确性</font>").show();
			eval("f.c_contactor.focus()")
			$("body,html").scrollTop($(".bkheader").offset().top);
			$("#fname_promit").css("display","block");
			return false;
		}
		
		var reg = new RegExp("^[a-zA-Z|,|，]*$");
		for (i=0; i<f.c_contactor.value.length; i++) {
			for(j=0;j<s.length;j++) {
				if (f.c_contactor.value.charAt(i) == s.charAt(j) || !reg.test(f.c_contactor.value.charAt(i))) {
					$("#fname_promit").html("<font color='red'>特别提示：因星级酒店要求，汉语拼音中不能包含特殊字符，且用逗号分隔多个入住人真实姓名拼音，例如：张三丰即填写zhangsanfeng，请注意拼音的准确性</font>").show();
					$("#fname_promit").css("display","block");
					eval("f.c_contactor.focus()")
					$("body,html").scrollTop($(".bkheader").offset().top);
					return false;
				}
			}
		}
		
		var ydroomnum = $("#hdydroomnum").val();
		var zuiduoydroomnum = ydroomnum*2;
		var rzusername = f.c_contactor.value.replace(/\，/g, ",");
		var users = rzusername.split(",");
		if(users.length < ydroomnum){
			if(ydroomnum == 1){
				$("#fname_promit").html("<font color='red'>特别提示：因星级酒店要求，并保证您能顺利预定，您预定的"+ydroomnum+"间房，应填入最少"+ydroomnum+"个，不超过"+zuiduoydroomnum+"个入住人真实姓名的汉语拼音(以身份证为准)，例如：张三丰即填写zhangsanfeng，请注意拼音的准确性</font>").show();
			}else{
				$("#fname_promit").html("<font color='red'>特别提示：因星级酒店要求，并保证您能顺利预定，您预定的"+ydroomnum+"间房，应填入最少"+ydroomnum+"个，不超过"+zuiduoydroomnum+"个入住人真实姓名的汉语拼音(以身份证为准)，且用逗号分隔，例如：张三丰即填写zhangsanfeng，请注意拼音的准确性</font>").show();
			}
			
			$("#fname_promit").css("display","block");
			return false;
		}
		
		if(users.length > zuiduoydroomnum){
			$("#fname_promit").html("<font color='red'>特别提示：因星级酒店要求，并保证您能顺利预定，您预定的"+ydroomnum+"间房，应填入最少"+ydroomnum+"个，不超过"+zuiduoydroomnum+"个入住人真实姓名的汉语拼音(以身份证为准)，且用逗号分隔，例如：张三丰即填写zhangsanfeng，请注意拼音的准确性</font>").show();	
			$("#fname_promit").css("display","block");
			return false;
		}
		
		for(var i=0;i<users.length;i++){
			if(users[i].length<1){
				$("#fname_promit").html("<font color='red'>特别提示：单个姓名汉语拼音长度不够，请正确填入</font>").show();
				$("#fname_promit").css("display","block");	
				return false;
			}
		}
		
	}else{ 
	
		if ($.trim(f.c_contactor.value).length<2 )
		{
			$("#fname_promit").html("<font color='red'>&nbsp;请输入入住人姓名</font>").show();
			eval("f.c_contactor.focus()")
			$("body,html").scrollTop($(".bkheader").offset().top);
			return false;
		}
	}
	
	if ($.trim($('input:radio[name="c_gender"]:checked').val())!="M" && $.trim($('input:radio[name="c_gender"]:checked').val())!="F")
	{
		alert("请选择您的性别");
		//eval("f.c_gender.focus()")
		$("body,html").scrollTop($(".bkheader").offset().top);
		return false;
	}
	if(f.c_mobile.value.length>0) 
	  {
		if ( !isMobile (f.c_mobile.value) && (f.c_mobile.value.length > 0) )
		{
			//$("#c_mobile_promit").html("<font color='red'>&nbsp;请输入正确的手机号码</font>").show();
			//eval("f.c_mobile.focus()");
			//$("body,html").scrollTop($(".bkheader").offset().top);
			//return false;
		}
		
		 
		 CheckExists('m',f.c_mobile.value)
		 
	}
	else 
	{
		$("#c_mobile_promit").html("<font color='red'>&nbsp;请输入您的手机号</font>").show();
		eval("f.c_mobile.focus()");
		$("body,html").scrollTop($(".bkheader").offset().top);
		return false;
	}
  	if(f.c_email.value.length<6) 
	  {
	    	/*$("#c_email_promit").html("<b style='color:red;font-size:14px;'>×&nbsp;</b><font color='red'>请输入您的email</font>");
	    	eval("f.c_email.focus()");
		return false;*/
	  }
	 if(f.c_email.value.length!=0)
  	{
    		if (f.c_email.value.charAt(0)=="." ||f.c_email.value.charAt(0)=="@"||f.c_email.value.indexOf('@', 0) == -1 ||f.c_email.value.indexOf('.', 0) == -1 ||f.c_email.value.lastIndexOf("@")==f.c_email.value.length-1 ||f.c_email.value.lastIndexOf(".")==f.c_email.value.length-1)
     		{
      			$("#c_email_promit").html("<font color='red'>&nbsp;请输入正确的E-mail</font>").show();
      			f.c_email.focus();
				$("body,html").scrollTop($(".bkheader").offset().top);
      			return false;
      		}
			 
			 //CheckExists('e',f.c_email.value)
			 
   	}
 	else
  	{
   		/*$("#c_email_promit").html("<b style='color:red;font-size:14px;'>×&nbsp;</b><font color='red'>请输入您的email</font>")
   		f.c_email.focus();
   		return false;*/
   	}
	
	
	if (!mobile_flag)
	{
		  $("#c_mobile_promit").html("<font color='red'>&nbsp;您的手机已注册,<a  href=javascript:void(0) onclick=javascript:showLogin1('"+$("#c_mobile").val()+"')><font class='b_login'>点击登录</font></a>享受会员优惠</font>").show();
		  //eval("f.c_mobile.focus()");
		  $("body,html").scrollTop($(".bkheader").offset().top);
		  return false;
	}else{
		$("#isRegMobile").val("1");	
	}
	
	/*if (!email_flag)
	{
		  $("#c_email_promit").html("<b style='color:red;font-size:14px;'>×&nbsp;</b><font color='red'>此邮箱已注册请<a  href=javascript:void(0) onclick=javascript:showLogin1('"+$("#c_email").val()+"')><font class='b_login'>登录</font></a></font>");
		  eval("f.c_email.focus()");
		  return false;
	}*/
	
	
   	if (f.lastarrtime.selectedIndex<1)
	{
		alert("请选择您最晚到达的时间！！");
		eval("f.lastarrtime.focus()")
		$("body,html").scrollTop($(".bkheader").offset().top);
		return false;
	}
	

	if(f.hotelDescription.value.length>100) 
	{
	    $("#J_Hobby_promit").html("<font color='red'>其他需求不得多于100个字</font>").show();
	    eval("f.hotelDescription.focus()");
		$("body,html").scrollTop($(".bkheader").offset().top);

		return false;
	}

	


	//太平保险
	
	
	//显示支付信息
	//$(".bk-orderpay").show();
	//$("body,html").scrollTop($(".footer").offset().top);
	//$(".confirm").hide();
	
	//验证信用卡信息
	var newcardtype=$("#newcardtype").val();//卡种
	var newcardno=$("#newcardno").val();//卡号
	var yxq=$("#year").val()+$("#month").val();//有效期  1105
	var holder=$("#holder").val();//持卡人姓名
	var certfct=$("#certfct").val();//持卡人有效证件种类
	var certno=$("#certno").val();//持卡人有效证件号
	var validatecode=$("#validatecode").val();//验证码
	var bzflage=$("#bzflage").attr("value");
	//var xpo=$(":radio[name='xpay']:checked").val(); 

	if(window.XMLHttpRequest){ //Mozilla, Safari, IE7
		if(!window.ActiveXObject){ // Mozilla, Safari,
			var xpo=$(":radio[name='xpay']:checked").val(); 
		}
	}
	else
	{
	var xpo=$("input[name='xpay']:checked").val();
	}
	
	if(xpo=="xyk")
	{
		if(qm_ckeckcard==3 || qm_ckeckcard==0 || qm_ckeckcard==4 || qm_ckeckcard==1)
		{
			//$("#check_pp").html("<font color=red>请选择历史信用卡</font>");
			return false;
		}
	}
	//if(flage_card==0)
	var c = document.getElementsByName("xpay");
	var wg_xykflage="";
	var wgp;
	for(wgp=0;wgp<c.length;wgp++)
	{
		//alert(c[wgp].value);
		if(c[wgp].checked)
		{
			wg_xykflage=c[wgp].value;
		}
	}

	if(wg_xykflage=='xyk1')
	{
		if(newcardtype=="-1"||newcardtype==null||newcardtype.length==0)
		{
			$("#card_show_hide").css("display", "block");
			alert('请选择卡种！');
			return false;
		}
		
		if(!isNum(newcardno))


		{
			alert("信用卡卡号必须为数字，请重新输入！");
			return false;
		}
		else if(!validate4Num(newcardno))
		{
			alert('信用卡卡号输入有误，请重新输入！');
			return false;
		}
		
		if($("#year").val()==null||$("#year").val().length==0)
		{
			alert('请选择有效期月份！');
			return false;
		}
		if($("#month").val()==null||$("#month").val().length==0)
		{
			alert('请选择有效期年份！');
			return false;
		}
		
		if(holder==null||holder.length==0)
		{
			alert('请输入持卡人姓名！');
			return false;
		}
		
		if(certno==null||certno.length==0)
		{
			alert('请输入持卡人有效证件号');
			return false;
		}
		
		if(certfct=="1")
		{
			if(certno.length<=15)
			{
				if(!checkIDCard1(certno))
				{
					alert('身份证号码输入有误，请重新输入！');
					return false;
				}
			}
			else
			{
				if(!checkIDCard(certno))
				{
					alert('身份证号码输入有误，请重新输入！');
					return false;
				}	
			}
		}
		
		if(validatecode==null||validatecode.length==0)
		{
			alert('请输入验证码！');
			return false;
		}
		else if(!isNum(validatecode))
		{
			alert("验证码必须为数字，请重新输入！");
			return false;
		}
	}
	
	
	if (obj==1)
	
	{
		if(bePrepay=="True")

		{
			 //if(confirm("此订单为全额预付订单，酒店确认后不能修改或取消")){
				 showPayinfo();
				 return true;
			 //}
			 //else 
		     //{
			//	return false;
			 //}
			 
		}
		showPayinfo();
	}
	
	
	//验证信用卡信息

	return true 					
}

//信用卡信息
$("#paylist :input:radio").live('click', function() {
	if($(this).val() != "xyk1"){
		if($("#card_show_hide").css("display") != 'none'){
			$("#card_show_hide").css("display", "none");
			return;
		}
	}
});

//完成支付
function overPay(orderId,hotelId){
	$.ajax({url: 'ajax/ajax_getOrderStatus.asp',
		   type: 'GET',
		   data:{orderId:orderId},
		   dataType: 'json',
		   timeout: 5000,
		   cache:false,
		   success: function(result){
		       if (result == 1){
					window.location="/showorder.asp?orderid="+orderId+"&hotelid="+hotelId;
			   }else{
					CloseDiv();
					//$(".bkokw-right li label a").removeClass("sel");
					//setdefualtBank();
					window.alert("此笔订单未支付成功,请重新支付");
			   }
			}
	}); 
}

//支付完成确认
//function showPayinfo()
//{
//	var orderId = ;
//	var hotelId = ;
//	var alertmsg = "<div class=\"zfbox1\">"
//	+"<div class=\"zfbhead\"><div class=\"zftit\">提示</div><div class=\"zfclose\" onclick=\"javascript:CloseDiv();\"></div></div>"
//	+"<div class=\"zfbmain\"><div class=\"zfbml\">"
//	+"<div class=\"bmltx1\">请在新打开的支付页面进行支付，支付完成后点击\"付款完成\"</div>"
//	+"<div class=\"lbox\"> <input name=\"\" type=\"submit\" class=\"sub3\" value=\"\" onclick=\"overPay("+orderId+","+hotelId+");\" /><div class=\"zff\"><div>付款遇到问题？你可以</div> <div><a href=\"javascript:CloseDiv();\">"+"选择其他支付方式</a> 或者 <a href=\"http://sighttp.qq.com/authd?IDKEY=bcd3543281a7d0308de1d812dc7fc72d54e74e8e1f667ee6\" target=\"_blank\"> 查看在线帮助</a></div></div></div></div></div></div>";
//	alertWin('支付返回',alertmsg,561,201);
//}

function showPayinfo()
{
	var orderId = 2060500;
	var hotelId = 16736;
	var alertmsg = "<div class=\"zfbox1\">"
	+"<div class=\"zfbhead\"><div class=\"zftit\">提示</div><div class=\"zfclose\" onclick=\"javascript:CloseDiv();\"></div></div>"
	+"<div class=\"zfbmain\"><div class=\"zfbml\">"
	+"<div class=\"bmltx1\">请在新打开的支付页面进行支付，支付完成后点击\"付款完成\"</div>"
	+"<div class=\"lbox clearfix\"> <button name=\"\" type=\"submit\" class=\"sub3\" value=\"\" onclick=\"overPay("+orderId+","+hotelId+");\">付款完成</button><button onclick=\"_gaq.push(['_trackEvent', '付款遇到问题','booking']);\" class=\"sub4\" type=\"button\">付款遇到问题</button></div></div>"
	  +"<div class=\"pay_error\" style=\"display:none\">"
	  +"<div class=\"pe_list\">"
	  +"<strong>1.没有开通网上银行？</strong>"
	  +"<p>您可以选择信用卡或者借记卡进行支付，信用卡和借记卡（储蓄卡）不需要开通网银，但须在银行预留手机号。</p>"
	  +"</div>"
	  +"<div class=\"pe_list\">"
	  +"<strong>2.我的银行卡有支付限额？无法进行支付？</strong>"
	  +"<p>建议您登录网上银行提高支付限额，或者分若干次充值到青芒果资金账户，然后使用资金账户进行支付。您也可以选择信用卡或者借记卡（储蓄卡）进行支付，青芒果支持信用卡、借记卡（储蓄卡）大额支付。</p>"
	  +"</div>"
	  +"<div class=\"pe_list\">"
	  +"<strong>3.付款时提示支付参数金额不一致？</strong>"
	  +"<p>有时因酒店变价或优惠力度调整导致前后支付金额变更，为确保安全银行不接受这种变更付款。如遇这种情况只需重新下单即可，如还不能支付请<a href=\"http://chat.looyu.com/chat/chat/p.do?c=48339&f=102300&g=59523\" target=\"_blank\">联系我们客服</a>。</p>"
	  +"</div>"
	  +"</div>"
	+"</div></div>";
	alertWin('支付返回',alertmsg,561,0);
	$("body,html").scrollTop($(".th1").offset().top);
}

function isNum(s)
{
	var pattern = /^\d+(\.\d+)?$/;
	if(pattern.test(s))
	{
		return true;
	}
	return false;
}
function checkIDCard1(str)  
{
	//身份证正则表达式(15位)  
	isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	//身份证正则表达式(18位)
	//isIDCard2=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
	//验证身份证，返回结果  
	return (isIDCard1.test(str));
}

 function checkIDCard(num)    
 {   
     var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);   
     var error;   
     var varArray = new Array();   
     var intValue;   
     var lngProduct = 0;   
     var intCheckDigit;   
     var intStrLen = num.length;   
     var idNumber = num;       
     // initialize   
     if ((intStrLen != 15) && (intStrLen != 18)) {   
         //error = "输入身份证号码长度不对！";   
         //alert(error);   
         //frmAddUser.txtIDCard.focus();   
         return false;   
     }       
     // check and set value   
     for(i=0;i<intStrLen;i++) {   
         varArray[i] = idNumber.charAt(i);   
         if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {   
             //error = " 错误的身份证号码！.";   
             //alert(error);   
             //frmAddUser.txtIDCard.focus();   
             return false;   
         } else if (i < 17) {   
             varArray[i] = varArray[i]*factorArr[i];   
         }   
     }   
     if (intStrLen == 18) {   
         //check date   
         var date8 = idNumber.substring(6,14);   
         if (checkDate(date8) == false) {   
             //error = " 身份证中日期信息不正确！.";   
             //alert(error);   
             return false;   
         }           
         // calculate the sum of the products   
         for(i=0;i<17;i++) {   
             lngProduct = lngProduct + varArray[i];   
         }           
         // calculate the check digit   
         intCheckDigit = 12 - lngProduct % 11;   
         switch (intCheckDigit) {   
             case 10:   
                 intCheckDigit = 'X';   
                 break;   
             case 11:   
                 intCheckDigit = 0;   
                 break;   
             case 12:   
                 intCheckDigit = 1;   
                 break;   
         }           
         // check last digit   
         if (varArray[17].toUpperCase() != intCheckDigit) {   
             //error = " 身份证效验位错误!...正确为： " + intCheckDigit + ".";   
             //alert(error);   
             return false;   
         }   
     }    
     else{        //length is 15   
         //check date   
         var date6 = idNumber.substring(6,12);   
         if (checkDate(date6) == false) {   
             //alert(" 身份证日期信息有误！.");   
             return false;   
         }   
     }   
     //alert ("Correct.");   
     return true;   
 }   
   
 function checkDate(date)   
 {   
     return true;   
 }   

//验证信用卡卡号
function validate4Num(cardNumber) {
	var sum = 0;
		var digit = 0;
		var addend = 0;
		var timesTwo = false;
			//alert("cardNumber=" + cardNumber);
		for (var i = cardNumber.length - 1; i >= 0; i--) {
			digit = cardNumber.substring(i, i + 1);
		      //alert("digit=" + digit);
			if (timesTwo) {

				addend = digit * 2;
				if (addend > 9) {
					addend -= 9;
				}
			} else {
				addend = digit;
			}
			sum = parseInt(sum) + parseInt(addend);
			timesTwo = !timesTwo;
		}
			//alert("sum=" + sum);
		var modulus = sum % 10;
		return modulus == 0;
	}
//验证信用卡卡号

$(document).ready(function(){
	$(".sub4").live('click', function() {
	$(".pay_error").show();
	})
})

//-->
</SCRIPT>

	<FORM id=frm1 onsubmit="return oncheckOrder(this,'1')" method=post
		name=frm1 action=?adosi=1&amp;bePrepay=1&amp;sFee=45&amp;hostel=16736
		target=_blank sizcache="14" sizset="1">
		<INPUT type=hidden value=2060500 name=orderid> <INPUT
			type=hidden value=3 name=islijian> <INPUT type=hidden
			value=false name=isSecondPay> <INPUT type=hidden
			value=2018-12-06 name=starttime> <INPUT type=hidden
			value=2018-12-07 name=endtime> <INPUT type=hidden value=42
			name=payAmount>
		<!--芒果网共享会员3-->
		<INPUT id=sjifeng type=hidden value=0 name=sjifeng> <INPUT
			type=hidden value=0 name=rpAmount> <INPUT class=amount_ys
			type=hidden name=sFee_TravelProduct autocomplete="off" amount="0">
		<!--太平保险-->
		<INPUT type=hidden value=2018-12-06 name=TP_Sdate> <INPUT
			type=hidden value=2018-12-07 name=TP_Edate> <INPUT
			id=TP_Persons type=hidden value=0 name=TP_Persons autocomplete="off">
		<INPUT id=DisBaoXianAmount type=hidden value=0 name=DisBaoXianAmount
			autocomplete="off"> <INPUT id=hotelProduct_1 type=hidden
			value=0 name=hotelProduct_1 autocomplete="off">
		<DIV class=crumbs sizcache="14" sizset="1">
			<H2 class=bk-top sizcache="4" sizset="26">
				<DIV class="account-no clearfix" style="DISPLAY: block" sizcache="4"
					sizset="26">
					<P class=money sizcache="4" sizset="26">
						亲，该酒店为低价承诺酒店，<A onclick=showregister(); class=red
							href="javascript:void(0)" onFocus="undefined">注册</A>青芒果会员更优惠！
						<!--，入住后点评即可获得-->
						<!--即可获得<span id="redbag" class="red">20</span>元红包，红包可以抵扣房费成为青芒果会员，入住后点评即可获得-->
						<!--<span  style="color:#FF5300">点评奖金</span>，双重优惠！-->
					</P>
				</DIV>
			</H2>
			<DIV class="bk_con bkheader" sizcache="14" sizset="1">
				<H3 class=bk_h>填写入住人信息</H3>
				<UL class=bk_info sizcache="14" sizset="1">
					<LI sizcache="13" sizset="1"><LABEL><EM class=red>*</EM>姓名：</LABEL>
						<INPUT onblur=javascript:CheckName(this.value); id=fname
						class="bk-f-t w160" name=c_contactor> <SPAN
						id=fname_promit class=i_tip></SPAN></LI>
					<LI sizcache="13" sizset="2"><LABEL><EM class=red>*</EM>性别：</LABEL>
						<DIV class=fl sizcache="13" sizset="3">
							<LABEL class=except for=J_gender1><INPUT id=J_gender1
								type=radio value=M name=c_gender>男</LABEL> <LABEL class=except
								for=J_gender2><INPUT id=J_gender2 type=radio value=F
								name=c_gender>女</LABEL>
						</DIV></LI>
					<LI sizcache="13" sizset="5"><LABEL><EM class=red>*</EM>手机：</LABEL>
						<INPUT onblur="javascript:CheckMobile('m',this.value,'1');"
						id=c_mobile class="bk-f-t w160" name=c_mobile AUTOCOMPLETE="OFF">
						<SPAN id=c_mobile_promit class=i_tip></SPAN><INPUT id=isRegMobile
						type=hidden value=0 name=isRegMobile></LI>
					<LI sizcache="13" sizset="6"><LABEL>电子邮箱：</LABEL> <INPUT
						onblur="javascript:CheckEmail('e',this.value,'1');" id=c_email
						class="bk-f-t w160" name=c_email> <SPAN id=c_email_promit
						class=i_tip></SPAN></LI>
					<LI class=clearfix sizcache="13" sizset="7"><LABEL><EM
							class=red>*</EM>到店时间：</LABEL>
						<DIV class=fl>
							<SELECT id=lastarrtime class=f-select name=lastarrtime
								jQuery1543974263808="78">
								<OPTION value="">-请选择-
								<OPTION value=7>07:00</OPTION>
								<OPTION value=8>08:00</OPTION>
								<OPTION value=9>09:00</OPTION>
								<OPTION value=10>10:00</OPTION>
								<OPTION value=11>11:00</OPTION>
								<OPTION value=12>12:00</OPTION>
								<OPTION value=13>13:00</OPTION>
								<OPTION value=14>14:00</OPTION>
								<OPTION value=15>15:00</OPTION>
								<OPTION value=16>16:00</OPTION>
								<OPTION value=17>17:00</OPTION>
								<OPTION selected value=18>18:00</OPTION>
								<OPTION value=19>19:00</OPTION>
								<OPTION value=20>20:00</OPTION>
								<OPTION value=21>21:00</OPTION>
								<OPTION value=22>22:00</OPTION>
								<OPTION value=23>23:00</OPTION>
								<OPTION value=24>24:00</OPTION>
							</SELECT>
							<DIV class=jd_tip>
								如<B>18：00</B>前无法到达，请于当天提前联系酒店
							</DIV>
							<SPAN id=lastarrtimestr class="jd_tip2 fl">超过最晚到店时间请于入住当天联系酒店
							</SPAN>
							<DIV id=notice class="fl notice" jQuery1543974263808="6">
								<SPAN class=tips>更多预订须知</SPAN>
								<DIV class=more_win style="HEIGHT: 50px">
									<IMG class=more_down src="http://img.qmango.com/10.jpg"
										jQuery1543974263808="8">
									<DIV id=more_info style="PADDING-RIGHT: 10px">1.为环保旅舍不提供一次性洗漱用品，但可在前台成本价购买可重复使用并带走2.青旅不是经济型酒店，我们提倡环保、自助、交流、平等；3.入住需提供身份证等有效证件;4.旅舍24小时营业；5.入住时间：14：00以后（旅舍退房时间为中午12点之前，客人退房后我们会清扫房间，正常情况下将于下午14点以后为您提供清洁客房。）6.退房时间：中午12点之前7.八人间为男女混住8.所有房间均没有配备空调8.旅舍不接受带宠物入住，多谢理解。特别提醒：
										1、标准间和大床房最多只能入住2人，不提供加床服务。如需多人入住，旅舍将加收床位费，50元/人，但不提供加床服务。敬请谅解，多谢合作！
										2、该网站预定价格已是旅舍最优惠价格，不能再享受YHA会员卡优惠。多谢理解。</DIV>
								</DIV>
							</DIV>
							<SCRIPT>
                    $(function(){
						  var h;
						  $('#notice').hover(function(){
							  $(this).find('.more_win').show();
							  h = $('#more_info').height();
						  },function(){
							  $(this).find('.more_win').hide();
						  });
						  
						  $('.more_down').toggle(function(){
							  var e = this;
							  $(this).parent().animate({height:h},function(){
								  $(e).attr('src','http://img.qmango.com/11.jpg');
							  });
						  },function(){
							  var e = this;
							  $(this).parent().animate({height:50},function(){
								  $(e).attr('src','http://img.qmango.com/10.jpg');
							  });
						  });
					  });
                </SCRIPT>
						</DIV></LI>
					<LI class=clearfix sizcache="13" sizset="8"><LABEL>特殊要求：</LABEL>
						<TEXTAREA id=J_Hobby onpropertychange=TextUtil.NotMax(this)
							class=bk-f-t style="HEIGHT: auto; WIDTH: auto" rows=4 cols=73
							name=hotelDescription maxlength="100" data:txt="您最多可输入100个汉字"></TEXTAREA>
						<SPAN id=J_Hobby_promit class=i_tip></SPAN></LI>
				</UL>
			</DIV>
			<DIV class=bk_con sizcache="13" sizset="9">
				<H3 class=bk_h>
					核对订单 <SPAN style="FONT-SIZE: 14px; MARGIN-LEFT: 30px">（酒店名称：昆明倾城国际青年旅舍</SPAN>
					<SPAN style="FONT-SIZE: 14px; MARGIN-LEFT: 15px">地址：昆明昆明市华山西路92号）</SPAN>
					<SPAN style="DISPLAY: none">订单号：<SPAN class=orange>2060500</SPAN><SPAN>昆明.昆明倾城国际青年旅舍
							&nbsp;&nbsp;住宿时间：<SPAN class=orange
							style="FONT-SIZE: 14px; VERTICAL-ALIGN: middle; FONT-WEIGHT: bold">2018/12/6</SPAN>
							至 <SPAN class=orange
							style="FONT-SIZE: 14px; VERTICAL-ALIGN: middle; FONT-WEIGHT: bold">2018/12/7</SPAN>（共
							1 晚）
					</SPAN>
					</SPAN>
				</H3>
				<TABLE class=bk_tab cellSpacing=0 cellPadding=0 sizcache="4"
					sizset="27">
					<TBODY sizcache="4" sizset="27">
						<TR>
							<TH class=th1>商品名称</TH>
							<TH>单价</TH>
							<TH>数量</TH>
							<TH>天数</TH>
							<TH>总价</TH>
						</TR>
						<TR sizcache="4" sizset="27">
							<TD class=td1 sizcache="4" sizset="27">八人女生床位间（<SPAN
								class=bk_date>2018/12/6</SPAN>入住<SPAN class=bk_date>2018/12/7</SPAN>退房，共1晚）<A
								class=blue
								href="/showhostel.asp?hostel=16736&amp;starttime=2018/12/6&amp;endtime=2018/12/7"
								onFocus="undefined">修改</A>
							</TD>
							<TD class=td2>￥ 45</TD>
							<TD class=td3>1床</TD>
							<TD class=td4>1天</TD>
							<!--<td class="td5">&yen; 45<span style="font-size:12px;">&nbsp;&nbsp;返 &yen;0</span></td>-->
							<TD class=td5>￥ 45<SPAN style="FONT-SIZE: 12px">&nbsp;&nbsp;
									<!--返 &yen;0-->立减 ￥3
							</SPAN></TD>
						</TR>
						<INPUT id=hdnroomnum type=hidden value=1>
						<INPUT id=hdnidays type=hidden value=1>
						<INPUT id=hdnst type=hidden value=2018-12-06>
						<INPUT id=hdnet type=hidden value=2018-12-07>
						<INPUT id=hdnhotelid type=hidden value=16736>
						<INPUT id=hdydroomnum type=hidden value=1>
						<INPUT id=hdrourceid type=hidden value=0>
						<INPUT id=hdProvince type=hidden value=25>
						<!--旅游产品平台显示相关订单数据(begin)-->
						<!--旅游产品平台显示相关订单数据(end)-->
					</TBODY>
				</TABLE>
				<DIV class=bk_tip sizcache="13" sizset="9">
					<P class=pay_h2 style="MARGIN-BOTTOM: 25px; DISPLAY: none"
						sizcache="13" sizset="9">
						<LABEL style="FONT-WEIGHT: bold">优惠预订</LABEL>&nbsp;&nbsp;&nbsp;&nbsp;<LABEL
							style="COLOR: red">入住后点评，可返￥0元现金。</LABEL>
					</P>
					<A class=res_yd href="/hotel_16736.html" onFocus="undefined">&lt;&lt;重新预订</A>
					<SPAN class=clear></SPAN>
					<DIV class=tips-model>
						<DIV class=icon_kt></DIV>
						<DIV class=tm-text>
							<H4>预订提示</H4>
							<P>
								青芒果首创订金预付模式，价格更低，确保到店有房<BR>因房源紧张，本单需全额预付，订单一经确认不可更改或取消
							</P>
						</DIV>
					</DIV>
				</DIV>
				<DIV class=bk_js sizcache="13" sizset="11">
					<P class=pay_h1 sizcache="13" sizset="11">
						应付款总额：<SPAN class=color1 sizcache="13" sizset="11">￥ <LABEL
							class=amount_ys amount="45">45</LABEL>.00
						</SPAN>
					</P>
					<P id=mianshoubao_txt class=pay_h2 style="DISPLAY: none">
						<SPAN>免首日保险费：</SPAN>- ￥ <EM id=mianshoubao_val class=price>0</EM>.00
					</P>
					<P class=pay_h2 style="DISPLAY: none">资金账户支付：￥ 0.00</P>
					<P class=pay_h2 sizcache="13" sizset="12">
						<SPAN class="font16 font-h">本单实际费用：</SPAN><EM
							class="price font18 red" sizcache="13" sizset="12">￥<LABEL
							class=amount_ss amount="42">42</LABEL>.00
						</EM>
					</P>
					<P class=pay_h2 style="DISPLAY: none">到酒店前台支付：￥ 0.00</P>
					<P class=pay_h1 sizcache="13" sizset="13">
						现需支付：<SPAN class=color2 sizcache="13" sizset="13">￥ <LABEL
							id=xuzhifu_price class=amount_ss amount="42">42</LABEL>.00
						</SPAN><BR>
						<!--返0-->
						(立减3元,最终费用为42元)
					</P>
					<DIV class=confirm>
						<BUTTON onclick=javascript:showOrderPay(); id=zf_confirm
							class=btn-confirm>支付订金</BUTTON>
					</DIV>
					<SPAN style="LINE-HEIGHT: 30px">该酒店为优保酒店，订单即时确认</SPAN>
				</DIV>
				<SPAN class=clear></SPAN>
			</DIV>
			<INPUT id=user_Ubk type=hidden value=0>
			<DIV id=paylist class="bk_con bk-orderpay" style="DISPLAY: none"
				sizcache="13" sizset="14">
				<H3 class=bk_h>在线支付</H3>
				<DIV class=bko-c sizcache="13" sizset="14">
					<DIV class="bkoc-wrap clearfix" sizcache="13" sizset="14">
						<DIV class=bkokw-right sizcache="13" sizset="14">
							<SPAN class=f14>青芒果资金账户支付：</SPAN> <SPAN class="red font14"
								sizcache="13" sizset="14">0.00 元，还需支付 <LABEL
								class=amount_ss amount="42">42</LABEL>.00 元，请选择以下支付方式
							</SPAN>
						</DIV>
					</DIV>
					<!--信用卡支付-->
					<DIV id=pay_lists style="DISPLAY: block" sizcache="5" sizset="29">
						<DIV class="bkoc-wrap clearfix" sizcache="5" sizset="29">
							<DIV class=bkokw-left>
								<SPAN class=f14><STRONG>支付平台</STRONG></SPAN>
							</DIV>
							<UL class=bkokw-right style="MARGIN-LEFT: 20px" sizcache="14"
								sizset="15">
								<LI jQuery1543974263808="12" sizcache="13" sizset="15"><LABEL
									sizcache="4" sizset="29"><A class=sel
										href="javascript:void(0)" onFocus="undefined"><SPAN
											class=bk-radio-box><INPUT CHECKED type=radio
												value=wxpayPC name=xpay></SPAN> <IMG alt=微信支付
											src="http://img.qmango.com/nimages/bank-wx.jpg"></A> </LABEL></LI>
								<LI jQuery1543974263808="14" sizcache="13" sizset="16"><LABEL
									sizcache="4" sizset="30"><A href="javascript:void(0)"
										onFocus="undefined">
											<!--<span class="bk-radio-box"><input type="radio" name="xpay"  value="102" checked /></span>-->
											<SPAN class=bk-radio-box><INPUT type=radio value=102
												name=xpay></SPAN> <IMG alt=支付宝
											src="http://img.qmango.com/nimages/bank-alipay.jpg">
									</A> </LABEL></LI>
								<LI jQuery1543974263808="16" sizcache="13" sizset="17"><LABEL
									sizcache="4" sizset="31"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=401 name=xpay></SPAN> <IMG alt=财付通
											src="http://img.qmango.com/nimages/bank-cft.jpg"></A> </LABEL></LI>
								<LI jQuery1543974263808="18" sizcache="13" sizset="18"><LABEL
									sizcache="4" sizset="32"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=unionpay name=xpay></SPAN> <IMG alt=银联支付
											src="http://img.qmango.com/nimages/union.jpg"></A> </LABEL>
								<!--<li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="alipayscan" /></span>
                  <img src="http://img.qmango.com/nimages/bank-alipayscan.jpg" alt="支付宝扫描" /></a>
                  </label>
                </li>
                
                <li style="margin:0 0 0 -20px;">
                  <label><a href="http://action.tenpay.com/2013/wx_qmg/" style="border:none;" target="_blank">
                  <img height="39" src="http://img.qmango.com/nimages/tenpay_500.gif" alt="1分钱赢香港酒店" /></a>
                  </label>
                </li>-->
									<!--<li>
                  <label><a href="javascript:void(0)"> <span class="bk-radio-box">
                  <input type="radio" name="xpay"  value="ce" />
                  </span> <img src="http://img.qmango.com/nimages/bank-ask.jpg" alt="神州运通" width="120" height="30" /></a> </label>
                </li>-->
									<!--智慧卡支付-->
									<!--<li>
                  <label><a href="javascript:void(0)"> <span class="bk-radio-box">
                  <input type="radio" name="xpay"  value="ainong" />
                  </span> <img src="http://img.qmango.com/nimages/bank-zh.jpg" alt="智慧卡" width="120" height="30" /></a> </label>
                </li>-->
									<!--智慧卡支付--></LI>
							</UL>
						</DIV>
						<!--财付通网银银行直连 start-->
						<!--<div class="bkoc-wrap clearfix">
            <div class="bkokw-left"><span class="f14"><strong>网上银行</strong><font style="font-size:12px;">（需开通网银）</font></span></div>
            <ul class="bkokw-right" style="width:820px;margin-left:20px">
                <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="6001" /></span>
                  <img src="http://img.qmango.com/nimages/bank-js.jpg" alt="中国建行银行" /></a>
                  </label>
                </li>
                <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="6002" /></span>
                  <img src="http://img.qmango.com/nimages/bank-gs.jpg" alt="中国工商银行" /></a>
                  </label>
                </li>
                <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="6003" /></span>
                  <img src="http://img.qmango.com/nimages/bank-zs.jpg" alt="中国招商银行" /></a>
                  </label>
                </li>
                <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="6004" /></span>
                  <img src="http://img.qmango.com/nimages/bank-zg.jpg" alt="中国银行" /></a>
                  </label>
                </li>
                <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="6005" /></span>
                  <img src="http://img.qmango.com/nimages/bank-ny.jpg" alt="中国农业银行" /></a>
                  </label>
                </li>
                <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="6006" /></span>
                  <img src="http://img.qmango.com/nimages/bank-pa.jpg" alt="平安银行" /></a>
                  </label>
                </li>
                <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="6007" /></span>
                  <img src="http://img.qmango.com/nimages/bank-yzcx.gif" alt="中国邮政储蓄银行" /></a>
                  </label>
                </li>
                <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="6008" /></span>
                  <img src="http://img.qmango.com/nimages/bank-shpf.jpg" alt="浦发银行" /></a>
                  </label>
                </li>
                <li><span id="btn_yhk" class="btn_search">选择其他银行卡</span></li>
            </ul>
            </div>-->
						<!--财付通网银银行直连 end-->
						<!--支付宝网银银行直连 start-->
						<DIV class="bkoc-wrap clearfix" sizcache="5" sizset="33">
							<DIV class=bkokw-left>
								<SPAN class=f14><STRONG>网上银行</STRONG><FONT
									style="FONT-SIZE: 12px">（需开通网银）</FONT></SPAN>
							</DIV>
							<UL id=yhk class=bkokw-right
								style="WIDTH: 820px; MARGIN-LEFT: 20px" sizcache="14"
								sizset="19">
								<!--支付宝维护期间采用快钱支付网关-->
								<!--否则采用支付宝银行网关-->
								<LI jQuery1543974263808="20" sizcache="13" sizset="19"><LABEL
									sizcache="4" sizset="33"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=2004 name=xpay></SPAN> <IMG alt=中国建设银行
											src="http://img.qmango.com/nimages/bank-js.jpg"></A> </LABEL></LI>
								<LI jQuery1543974263808="22" sizcache="13" sizset="20"><LABEL
									sizcache="4" sizset="34"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												id=gs type=radio value=2014 name=xpay></SPAN> <IMG
											alt=中国工商银行 src="http://img.qmango.com/nimages/bank-gs.jpg"></A>
								</LABEL></LI>
								<LI jQuery1543974263808="24" sizcache="13" sizset="21"><LABEL
									sizcache="4" sizset="35"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=2007 name=xpay></SPAN> <IMG alt=招商银行
											src="http://img.qmango.com/nimages/bank-zs.jpg"></A> </LABEL></LI>
								<LI jQuery1543974263808="26" sizcache="13" sizset="22"><LABEL
									sizcache="4" sizset="36"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=2022 name=xpay></SPAN> <IMG alt=中国银行
											src="http://img.qmango.com/nimages/bank-zg.jpg"></A> </LABEL></LI>
								<LI jQuery1543974263808="28" sizcache="13" sizset="23"><LABEL
									sizcache="4" sizset="37"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=2001 name=xpay></SPAN> <IMG alt=中国农业银行
											src="http://img.qmango.com/nimages/bank-ny.jpg"></A> </LABEL></LI>
								<LI jQuery1543974263808="30" sizcache="13" sizset="24"><LABEL
									sizcache="4" sizset="38"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=2026 name=xpay></SPAN> <IMG alt=平安银行
											src="http://img.qmango.com/nimages/bank-pa.jpg"></A> </LABEL></LI>
								<LI jQuery1543974263808="32" sizcache="13" sizset="25"><LABEL
									sizcache="4" sizset="39"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=2025 name=xpay></SPAN> <IMG alt=中国邮政储蓄银行
											src="http://img.qmango.com/nimages/bank-yzcx.gif"></A> </LABEL></LI>
								<LI jQuery1543974263808="34" sizcache="13" sizset="26"><LABEL
									sizcache="4" sizset="40"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=2017 name=xpay></SPAN> <IMG alt=中国浦发银行
											src="http://img.qmango.com/nimages/bank-shpf.jpg"></A> </LABEL></LI>
								<LI jQuery1543974263808="36"><SPAN id=btn_yhk
									class=btn_search>选择其他银行卡</SPAN></LI>
							</UL>
						</DIV>
						<!--支付宝网银银行直连 end-->
						<!--支付宝快捷支付信用卡直连 20151013关闭信用卡支付-->
						<!--<div class="bkoc-wrap clearfix" style="vertical-align:middle">
              <div class="bkokw-left"><span class="f14"><strong>信用卡</strong><font style="font-size:12px;">（无需开通网银，无支付额度限制）</font></span></div>

              <ul id="yhk" class="bkokw-right" style="width:820px;margin-left:20px">
				 
                
                	<div class="tips-box"><span>对不起，信用卡快捷支付正在维护中，请选择其他支付方式，为您带来的不便深表歉意，维护时间（<s class="red plr4">2012-4-27 01:30:00</s>至<s class="red plr4">2012-4-27 06:30:00</s>）</span></div>
                  
                
              	  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="3001" /></span>
                  <img src="http://img.qmango.com/nimages/bank-gs.jpg" alt="中国工商银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>           
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="3002" /></span>
                  <img src="http://img.qmango.com/nimages/bank-ny.jpg" alt="中国农业银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="3003" /></span>
                  <img src="http://img.qmango.com/nimages/bank-zs.jpg" alt="招商银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="3004" /></span>
                  <img src="http://img.qmango.com/nimages/bank-js.jpg" alt="中国建设银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <li><span class="btn_search" id="btn_xyk">选择其他信用卡</span></li>
                
                
              </ul>
           </div>-->
						<!--支付宝快捷支付信用卡直连-->
						<!--财付通快捷支付信用卡直连-->
						<!--<div class="bkoc-wrap clearfix" style="vertical-align:middle">
              <div class="bkokw-left"><span class="f14"><strong>信用卡</strong><font style="font-size:12px;">（无需开通网银，无支付额度限制）</font></span></div>

              <ul id="yhk" class="bkokw-right" style="width:820px;margin-left:20px">
				 
                
                	<div class="tips-box"><span>对不起，信用卡快捷支付正在维护中，请选择其他支付方式，为您带来的不便深表歉意，维护时间（<s class="red plr4">2012-4-27 01:30:00</s>至<s class="red plr4">2012-4-27 06:30:00</s>）</span></div>
                  
                
              	  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="8001" /></span>
                  <img src="http://img.qmango.com/nimages/bank-gs.jpg" alt="中国工商银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>           
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="8002" /></span>
                  <img src="http://img.qmango.com/nimages/bank-ny.jpg" alt="中国农业银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="3003" /></span>
                  <img src="http://img.qmango.com/nimages/bank-zs.jpg" alt="招商银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <!-<li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="8003" /></span>
                  <img src="http://img.qmango.com/nimages/bank-zs.jpg" alt="招商银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>->
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="8004" /></span>
                  <img src="http://img.qmango.com/nimages/bank-js.jpg" alt="中国建设银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <li><span class="btn_search" id="btn_xyk">选择其他信用卡</span></li>
                
                
              </ul>
           </div>-->
						<!--财付通快捷支付信用卡直连-->
						<!--支付宝快捷支付借记卡直连-->
						<DIV class="bkoc-wrap clearfix" sizcache="5" sizset="41">
							<DIV class=bkokw-left>
								<SPAN class=f14><STRONG>借记卡快捷支付</STRONG><FONT
									style="FONT-SIZE: 12px">（无需开通网银，无支付额度限制，需在银行预留手机号）</FONT></SPAN>
							</DIV>
							<UL id=yhk class=bkokw-right
								style="WIDTH: 820px; MARGIN-LEFT: 20px" sizcache="14"
								sizset="27">
								<LI jQuery1543974263808="38" sizcache="13" sizset="27"><LABEL
									sizcache="4" sizset="41"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=4001 name=xpay></SPAN> <IMG alt=中国工商银行
											src="http://img.qmango.com/nimages/bank-gs.jpg"></A> <S
										class=icon_k></S></LABEL></LI>
								<LI jQuery1543974263808="40" sizcache="13" sizset="28"><LABEL
									sizcache="4" sizset="42"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=4002 name=xpay></SPAN> <IMG alt=中国农业银行
											src="http://img.qmango.com/nimages/bank-ny.jpg"></A> <S
										class=icon_k></S></LABEL></LI>
								<LI jQuery1543974263808="42" sizcache="13" sizset="29"><LABEL
									sizcache="4" sizset="43"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=4003 name=xpay></SPAN> <IMG alt=中国建设银行
											src="http://img.qmango.com/nimages/bank-js.jpg"></A> <S
										class=icon_k></S></LABEL></LI>
								<LI jQuery1543974263808="44" sizcache="13" sizset="30"><LABEL
									sizcache="4" sizset="44"><A href="javascript:void(0)"
										onFocus="undefined"><SPAN class=bk-radio-box><INPUT
												type=radio value=4004 name=xpay></SPAN> <IMG alt=中国银行
											src="http://img.qmango.com/nimages/bank-zg.jpg"></A> <S
										class=icon_k></S></LABEL></LI>
								<LI jQuery1543974263808="46"><SPAN id=btn_jjk
									class=btn_search>选择其他借记卡</SPAN></LI>
							</UL>
						</DIV>
						<!--支付宝快捷支付借记卡直连-->
						<!--财付通快捷支付借记卡直连-->
						<!--<div class="bkoc-wrap clearfix">
                <div class="bkokw-left"><span class="f14"><strong>储蓄卡快捷支付</strong><font style="font-size:12px;">（无需开通网银，无支付额度限制，需在银行预留手机号）</font></span></div>
                <ul id="yhk" class="bkokw-right" style="width:820px;margin-left:20px">                    
                 
                
                	<div class="tips-box"><span>对不起，储蓄卡快捷支付正在维护中，请选择其他支付方式，为您带来的不便深表歉意，维护时间（<s class="red plr4">2012-4-27 01:30:00</s>至<s class="red plr4">2012-4-27 06:30:00</s>）</span></div>
                  
                
              	  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="4001" /></span>
                  <img src="http://img.qmango.com/nimages/bank-gs.jpg" alt="中国工商银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>           
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="9002" /></span>
                  <img src="http://img.qmango.com/nimages/bank-ny.jpg" alt="中国农业银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="9003" /></span>
                  <img src="http://img.qmango.com/nimages/bank-js.jpg" alt="中国建设银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <li>
                  <label><a href="javascript:void(0)">
                  <span class="bk-radio-box"><input type="radio" name="xpay"  value="4004" /></span>
                  <img src="http://img.qmango.com/nimages/bank-zg.jpg" alt="中国银行" /></a>
                  <s class="icon_k"></s>
                  </label>
                  </li>
                  <li><span class="btn_search" id="btn_jjk">选择其他储蓄卡</span></li>
                
                </ul>
              </div>-->
						<!--财付通快捷支付借记卡直连-->
					</DIV>
					<INPUT type=hidden value=2060500 name=orderNo> <INPUT
						type=hidden value=16736 name=ihostelID>
					<DIV class="bkoc-wrap clearfix">
						<DIV class=bkokw-left>&nbsp;</DIV>
						<DIV class=bkokw-right>
							<BUTTON class=btn-pay type=submit>马上支付</BUTTON>
						</DIV>
					</DIV>
				</DIV>
				<DIV class=mb10></DIV>
			</DIV>
			<!--<div class="bk-footer mb10"></div>-->
			<DIV id=xmoney class=tipbox style="WIDTH: 200px">
				<I></I>
				<P></P>
			</DIV>
			<!--更多银行卡弹出层开始-->
			<DIV id=bank_box class=mybox style="WIDTH: 750px; DISPLAY: none"
				sizcache="5" sizset="45">
				<DIV class="mt clearfix">
					<STRONG id=sel_bank>选择其他银行</STRONG><SPAN class=b_close>关闭</SPAN>
				</DIV>
				<DIV class=mc
					style="PADDING-BOTTOM: 0px; PADDING-TOP: 20px; PADDING-LEFT: 20px; DISPLAY: inline-block; PADDING-RIGHT: 0px"
					sizcache="5" sizset="45">
					<DIV id=xxmoney class=tipbox style="WIDTH: 200px">
						<I></I>
						<P></P>
					</DIV>
					<!--支付宝网银直连-->
					<UL id=yhk_more class=bkokw-right style="POSITION: relative"
						sizcache="14" sizset="31">
						<LI jQuery1543974263808="48" sizcache="13" sizset="31"><LABEL
							sizcache="4" sizset="45"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=2027 name=xpay></SPAN> <IMG alt=广东发展银行
									src="http://img.qmango.com/nimages/bank-gfz.jpg"></A> </LABEL></LI>
						<LI jQuery1543974263808="50" sizcache="13" sizset="32"><LABEL
							sizcache="4" sizset="46"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=2028 name=xpay></SPAN> <IMG alt=中国光大银行
									src="http://img.qmango.com/nimages/bank-gd.jpg"></A> </LABEL></LI>
						<LI jQuery1543974263808="52" sizcache="13" sizset="33"><LABEL
							sizcache="4" sizset="47"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=2029 name=xpay></SPAN> <IMG alt=交通银行
									src="http://img.qmango.com/nimages/bank-jiaotong.gif"></A> </LABEL></LI>
						<LI jQuery1543974263808="54" sizcache="13" sizset="34"><LABEL
							sizcache="4" sizset="48"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=2030 name=xpay></SPAN> <IMG alt=中国民生银行
									src="http://img.qmango.com/nimages/bank-minsheng.gif"></A> </LABEL>
						<!--   <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="2031"/></span>
      <img src="http://img.qmango.com/nimages/bank-sfz.jpg" alt="深圳发展银行" /></a>
      </label>
      </li> --></LI>
						<LI jQuery1543974263808="56" sizcache="13" sizset="35"><LABEL
							sizcache="4" sizset="49"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=2032 name=xpay></SPAN> <IMG alt=中信银行
									src="http://img.qmango.com/nimages/bank-zhongxin.gif"></A> </LABEL></LI>
						<LI jQuery1543974263808="58" sizcache="13" sizset="36"><LABEL
							sizcache="4" sizset="50"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=2006 name=xpay></SPAN> <IMG alt=兴业银行
									src="http://img.qmango.com/nimages/bank-xy.jpg"></A> </LABEL></LI>
						<LI jQuery1543974263808="60">
							<DIV style="WIDTH: 330px; FLOAT: left; LINE-HEIGHT: 40px">（温馨提示：若无持卡银行，请选择支付宝或财付通支付）
							</DIV>
						</LI>
						<LI class=clear jQuery1543974263808="62"></LI>
					</UL>
					<!--支付宝网银直连-->
					<!--财付通网银直连-->
					<!--<ul class="bkokw-right" id="yhk_more" style=" position:relative;">
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6009"/></span>
      <img src="http://img.qmango.com/nimages/bank-gfz.jpg" alt="广东发展银行" /></a>
      </label>
      </li> 
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6010"/></span>
      <img src="http://img.qmango.com/nimages/bank-gd.jpg" alt="中国光大银行" /></a>
      </label>
      </li> 
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6011"/></span>
      <img src="http://img.qmango.com/nimages/bank-jiaotong.gif" alt="交通银行" /></a>
      </label>
      </li> 
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6012"/></span>
      <img src="http://img.qmango.com/nimages/bank-minsheng.gif" alt="中国民生银行" /></a>
      </label>
      </li> 
   <!-   <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="2031"/></span>
      <img src="http://img.qmango.com/nimages/bank-sfz.jpg" alt="深圳发展银行" /></a>
      </label>
      </li> ->
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6013"/></span>
      <img src="http://img.qmango.com/nimages/bank-zhongxin.gif" alt="中信银行" /></a>
      </label>
      </li> 
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6014" /></span>
      <img src="http://img.qmango.com/nimages/bank-xy.jpg" alt="兴业银行" /></a>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6015" /></span>
      <img src="http://img.qmango.com/nimages/bank-szfz.jpg" alt="深圳发展银行" /></a>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6016" /></span>
      <img src="http://img.qmango.com/nimages/bank-bj.jpg" alt="北京银行" /></a>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6017" /></span>
      <img src="http://img.qmango.com/nimages/bank-nb.jpg" alt="宁波银行" /></a>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6018" /></span>
      <img src="http://img.qmango.com/nimages/bank-dy.jpg" alt="东亚银行" /></a>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6019" /></span>
      <img src="http://img.qmango.com/nimages/bank-nj.jpg" alt="南京银行" /></a>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="6020" /></span>
      <img src="http://img.qmango.com/nimages/bank-ns.jpg" alt="上海农商银行" /></a>
      </label>
      </li>
      <li class="clear"></li>
  </ul>-->
					<!--财付通网银直连-->
					<!--支付宝快捷支付信用卡直连-->
					<UL id=xyk_more class=bkokw-right style="POSITION: relative"
						sizcache="14" sizset="37">
						<LI jQuery1543974263808="64" sizcache="13" sizset="37"><LABEL
							sizcache="4" sizset="51"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=3005 name=xpay></SPAN> <IMG alt=中国银行
									src="http://img.qmango.com/nimages/bank-zg.jpg"></A> <S
								class=icon_k></S></LABEL></LI>
						<LI jQuery1543974263808="66" sizcache="13" sizset="38"><LABEL
							sizcache="4" sizset="52"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=3007 name=xpay></SPAN> <IMG alt=中国光大银行
									src="http://img.qmango.com/nimages/bank-gd.jpg"></A> <S
								class=icon_k></S></LABEL></LI>
						<LI jQuery1543974263808="68">
							<DIV style="WIDTH: 330px; FLOAT: left; LINE-HEIGHT: 40px">（温馨提示：若无持卡银行，请选择支付宝或财付通支付）
							</DIV>
						</LI>
						<LI class=clear jQuery1543974263808="70"></LI>
					</UL>
					<!--支付宝快捷支付信用卡直连-->
					<!--财付通快捷支付信用卡直连-->
					<!--<ul class="bkokw-right" id="xyk_more" style=" position:relative;">
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="8005" /></span>
      <img src="http://img.qmango.com/nimages/bank-zg.jpg" alt="中国银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
  <!-    <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="3006" /></span>
      <img src="http://img.qmango.com/nimages/bank-sfz.jpg" alt="深圳发展银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>->
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="8007" /></span>
      <img src="http://img.qmango.com/nimages/bank-pa.jpg" alt="平安银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="8006" /></span>
      <img src="http://img.qmango.com/nimages/bank-gd.jpg" alt="中国光大银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="8008" /></span>
      <img src="http://img.qmango.com/nimages/bank-nb.jpg" alt="宁波银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="8009" /></span>
      <img src="http://img.qmango.com/nimages/bank-xy.jpg" alt="兴业银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="8010" /></span>
      <img src="http://img.qmango.com/nimages/bank-zhongxin.gif" alt="中信银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="8011" /></span>
      <img src="http://img.qmango.com/nimages/bank-minsheng.gif" alt="民生银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="8012" /></span>
      <img src="http://img.qmango.com/nimages/bank-gfz.jpg" alt="广发银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <!-<li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="3008" /></span>
      <img src="http://img.qmango.com/nimages/bank-pa.jpg" alt="平安银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>->
      <li class="clear"></li>
  </ul>-->
					<!--财付通快捷支付信用卡直连-->
					<!--支付宝快捷支付借记卡直连-->
					<UL id=jjk_more class=bkokw-right style="POSITION: relative"
						sizcache="14" sizset="39">
						<LI jQuery1543974263808="72" sizcache="13" sizset="39"><LABEL
							sizcache="4" sizset="53"><A href="javascript:void(0)"
								onFocus="undefined"><SPAN class=bk-radio-box><INPUT
										type=radio value=4006 name=xpay></SPAN> <IMG alt=中国光大银行
									src="http://img.qmango.com/nimages/bank-gd.jpg"></A> <S
								class=icon_k></S></LABEL></LI>
						<LI jQuery1543974263808="74">
							<DIV style="WIDTH: 330px; FLOAT: left; LINE-HEIGHT: 40px">（温馨提示：若无持卡银行，请选择支付宝或财付通支付）
							</DIV>
						</LI>
						<LI class=clear jQuery1543974263808="76"></LI>
					</UL>
					<!--支付宝快捷支付借记卡直连-->
					<!--财付通快捷支付借记卡直连-->
					<!--<ul class="bkokw-right" id="jjk_more" style=" position:relative;">
  <!-    <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="4005" /></span>
      <img src="http://img.qmango.com/nimages/bank-sfz.jpg" alt="深圳发展银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>->
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="9006" /></span>
      <img src="http://img.qmango.com/nimages/bank-pa.jpg" alt="平安银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="9005" /></span>
      <img src="http://img.qmango.com/nimages/bank-gd.jpg" alt="中国光大银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="9007" /></span>
      <img src="http://img.qmango.com/nimages/bank-zs.jpg" alt="招商银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="9008" /></span>
      <img src="http://img.qmango.com/nimages/bank-zhongxin.gif" alt="中信银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="9009" /></span>
      <img src="http://img.qmango.com/nimages/bank-minsheng.gif" alt="民生银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="9010" /></span>
      <img src="http://img.qmango.com/nimages/bank-gfz.jpg" alt="广发银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li>
      <label><a href="javascript:void(0)">
      <span class="bk-radio-box"><input type="radio" name="xpay"  value="9011" /></span>
      <img src="http://img.qmango.com/nimages/bank-hr.jpg" alt="华润银行" /></a>
      <s class="icon_k"></s>
      </label>
      </li>
      <li class="clear"></li>
  </ul>-->
					<!--财付通快捷支付借记卡直连-->
					<DIV id=btn_mszf class=bkokw-right style="CLEAR: both">
						<BUTTON id=push_bank class=btn-pay type=submit>马上支付</BUTTON>
					</DIV>
				</DIV>
			</DIV>
			<!--<iframe class="ifr" src="#" scrolling="no" frameborder="0"  style="display:none;"></iframe>-->
			<IFRAME class=ifr style="DISPLAY: none"
				src="http://css.qmango.com/ncss/ifr.html" frameBorder=0 scrolling=no></IFRAME>
			<!--更多银行卡弹出层结束-->
	</FORM>
	<NOSCRIPT></NOSCRIPT>
	<SCRIPT type=text/javascript>

$(document).ready(function(){	
	$(".topnav").hide();
	setdefualtBank();
	 $(".bkokw-right li label").find("a").live('click', function() {
		$(".bkokw-right li label a").removeClass("sel");
		$(this).addClass("sel");
		$(".bkokw-right li a").find("input").attr("checked","");
		$(this).find("input").attr("checked","checked");
	 })//选择银行操作

	$("#btn_yhk,#btn_xyk,#btn_jjk").live('click', function() {
	  var xScroll=(document.documentElement.scrollWidth>document.documentElement.clientWidth) ? document.documentElement.scrollWidth : document.documentElement.scrollWidth;
	  var yScroll=(document.documentElement.scrollHeight>document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.scrollHeight;
	  var box_width=$(".mybox").width();
	  var pop_x = $(this).position().left;
	  var pop_y = $(this).position().top;
	  var dTop= $(document).scrollTop();
	  $(".ifr").height(yScroll).width(xScroll);
	  $(".ifr").find("iframe").height(yScroll).width(xScroll);
	  $(".ifr").show();
	  $(".mybox").css("top",dTop+100);
	  $(".mybox").css("left",(xScroll-box_width)/2);
	  $(".mybox").show();
	  
	  if(this.id == "btn_yhk"){ 
	  	$("#sel_bank").text("选择其他银行");
		$("#yhk_more").show();
		$("#xyk_more").hide();
		$("#jjk_more").hide();
	  }
	  if(this.id == "btn_xyk"){ 
	    $("#sel_bank").text("选择其他信用卡");
		$("#yhk_more").hide();
		$("#xyk_more").show();
		$("#jjk_more").hide();
	  }
	  if(this.id == "btn_jjk"){ 
	    $("#sel_bank").text("选择其他储蓄卡");
		$("#yhk_more").hide();
		$("#xyk_more").hide();
		$("#jjk_more").show();
	  }
	  
    })//弹窗定义
	
	//金额限制
	$("#paylist .bkokw-right").find("li").hover(function () {
	  var islabel=$(this).children().is("label");
	  var bankno=$(this).find("input").val();
	  if(islabel==true){
	    if(Get_BankMoney(bankno)>0)
		{
			var x_position = $(this).position();
			$("#xmoney").css({ "left":x_position.left-0,"top": x_position.top-90});
			$("#xmoney").find("p").html("<span class='red'>"+$(this).find("img").attr("alt")+"</span>部分卡种每笔限额<span class='red'>"+Get_BankMoney(bankno)+"元</span>有可能会导致支付失败，建议您选择信用卡、借记卡快捷支付，快捷支付无金额限制。")
			//
			$("#xmoney").fadeIn("fast");
		}
	}},
	function () {
	  $("#xmoney").hide();
	});//外部-金额限定提示框
	
	$("#bank_box .bkokw-right").find("li").hover(function () {
	  var islabel=$(this).children().is("label");
	  var bankno1=$(this).find("input").val();
	  if(islabel==true){
		if(Get_BankMoney(bankno1)>0)
		{
			var x_position = $(this).position();
			$("#xxmoney").css({ "left":x_position.left+20,"top": x_position.top-30});
			if (navigator.userAgent.indexOf("MSIE 7.0")>0){
				$("#xxmoney").css({ "left":x_position.left+20,"top": x_position.top+50});
				}
			$("#xxmoney").find("p").html("<span class='red'>"+$(this).find("img").attr("alt")+"</span>部分卡种每笔限额<span class='red'>"+Get_BankMoney(bankno1)+"元</span>有可能会导致支付失败，建议您选择信用卡、借记卡快捷支付，快捷支付无金额限制。")
			//
			$("#xxmoney").fadeIn("fast");
		}
	}},
	function () {
	  $("#xxmoney").hide();
	});//弹窗-金额限定提示框
	//金额限制
	
	//对应银行的限额
	function Get_BankMoney(v)
	{
		var ipayamount=42
		if(v==2004 || v==2025 || v==2028 || v==2029 || v==6001 || v==6007 || v==6010 || v==6011)  //建行、邮政、光大银行、交行
		{
			if(ipayamount>5000)
			{
				return 5000;
			}
			else{return 0;}
		}
		else if(v==2001 || v==2032 || v==2006 || v==6005 || v==6013 || v==6014)  //农行、中信银行、兴业银行
		{
			if(ipayamount>1000)
			{
				return 1000;
			}
			else{return 0;}
			return 1000;
		}
		else if(v==2007 || v==2027 || v==2014 || v==6003 || v==6009 || v==6002)  //招行、广发、工行
		{
			if(ipayamount>500)
			{
				return 500;
			}
			else{return 0;}
			return 500;
		}
		else
		{
			return 0;
		}
	}
	//对应银行的限额
	
	$(".mybox").find(".b_close").live('click', function() {
		$(".mybox").hide();
		$(".ifr").hide();
		
		//关闭时默认选中支付宝
		var k_item =$(".mybox").find("input:checked");
		var len=k_item.length;
		if(len>0){
			$(".bkokw-right li label a").removeClass("sel");
			setdefualtBank();
		}
	})//弹窗关闭
	
	$(".mybox").find("#push_bank").live('click', function() {
		var k_item =$(".mybox").find("input:checked");
		var len=k_item.length; 
		if(len>0){
			$(".mybox").hide();
			$(".ifr").hide();
			return true;
		}else{
			alert("您还没有选择银行");
			return false;
		}
    })//银行卡操作
	
	//最晚到点时间操作
	$("#lastarrtime").change(function(){
		if(parseInt($(this).val())<14){
			$("#lastarrtimestr").html("通常酒店14点办理入住，早到可能需要等待");
		}else{
			$("#lastarrtimestr").html("超过最晚到店时间请于入住当天联系酒店 ");
		}
	});
})

function setdefualtBank(){
	if($("#pay_lists").css("display") == "none" || $("#paylist").find("input").eq(0).val() != "000"){
		$("#paylist").find("input").eq(0).attr("checked","true");
		$("#paylist").find("input").eq(0).parent().parent().addClass("sel");
	}else{
		$("#paylist").find("input").eq(1).attr("checked","true");
		$("#paylist").find("input").eq(1).parent().parent().addClass("sel");
	}
}
</SCRIPT>

	<SCRIPT type=text/javascript>
var TextUtil = new Object(); 
TextUtil.NotMax = function(oTextArea){ 
	var maxText = oTextArea.getAttribute("maxlength"); 
	if(oTextArea.value.length > maxText){ 
			oTextArea.value = oTextArea.value.substring(0,maxText); 
	} 
} 


function show_card(value)
{
	var v=$("#card_show_hide");
	if(value=='1')
	{
		v.show();
	}
	else
	{
		v.hide();
	}	
}

//有效身份证验证
function isIdCardNo(code)
{
	code = code.toUpperCase();
	var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
	var tip = "";
	var pass= true;

	if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
		pass = false;
	}

	else if(!city[code.substr(0,2)]){
		pass = false;
	}
	else{
		//18位身份证需要验证最后一位校验位
		if(code.length == 18){
			code = code.split('');
			var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
			var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for (var i = 0; i < 17; i++)
			{
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if(parity[sum % 11] != code[17]){
				pass =false;
			}
		}
	}
	return pass;
        
}

/*************************保险业务 S**************************/
$("#btn_baoxian").click(function(){
	var isBaoxian = $(this).attr("checked");
	
	if(isBaoxian){
		$(".baoxian_td").show();
		$("#mianshoubao_txt").show();
	}else{
		$(".baoxian_td").hide();
		$("#mianshoubao_txt").hide();
	}
	
	computeAmount();
});

//减去天数
function setMinus(){
	if(parseInt($("#baoxian_renshu").val()) > 1){
		$("#baoxian_renshu").val(parseInt($("#baoxian_renshu").val())-1);
		computeAmount();
	}
}

//增加天数
function setPlus(){
	if(parseInt($("#baoxian_renshu").val()) < 100){
		$("#baoxian_renshu").val(parseInt($("#baoxian_renshu").val())+1);
		computeAmount();
	}
}

//计算保险总额
function computeAmount(){
	var days = 2;
	var price = 3;
	var userNum = parseInt($("#baoxian_renshu").val());
	var mianshoubao = price*userNum; //首日免保金额
	var yinshoubaoxian = (days*price*userNum);  //应收保险金额
	var shishoubaoxian = (days-1)*price*userNum;  //减去首日免保,实收保险金额

	var isBaoxian = $("#btn_baoxian").attr("checked");
	if(!isBaoxian){
		mianshoubao = 0; yinshoubaoxian = 0; shishoubaoxian = 0; userNum = 0;
	}
	
	$("#baoxian_Amount").html(yinshoubaoxian);  //保险应收总额
	$("#mianshoubao_val").html(mianshoubao);    //免首保金额
	
	$("#hotelProduct_1").val(userNum);  //产品数，hide
	$("#TP_Persons").val(userNum);     //人数，hide
	$("#DisBaoXianAmount").val(mianshoubao);  //首日免保金额，hide

	$(".amount_ys").each(function(index){
		if(index == 0){
			$(this).val(parseInt($(this).attr("amount")) + yinshoubaoxian);
		}else{
			$(this).html(parseInt($(this).attr("amount")) + yinshoubaoxian);
		}
	});
	
	$(".amount_ss").each(function(){
		$(this).html(parseInt($(this).attr("amount")) + shishoubaoxian);
		$(this).val(parseInt($(this).attr("amount")) + shishoubaoxian);
	});
	
	//判断是否显示更多支付方式
	var userUbk = parseInt($("#user_Ubk").val());
	var xushifuPirce = parseInt($("#xuzhifu_price").html());
	
	if($("#paylist").find("input").eq(0).val() == "000"){ //事先为资金账户支付才实现切换
		if(userUbk < xushifuPirce){  //资金账户余额小于需支付金额才切换为支付宝
			$("#pay_lists").show();	
			$("#ubk_show").html(userUbk + ".00 元，还需支付 "+(xushifuPirce-userUbk)+".00 元，请选择以下支付方式"); //更改支付提示为混合支付宝支付
			$("#yenDiv").hide();
			
			if($("#paylist").find("input").eq(0).attr("checked")){  //如果默认为选中资金账户支付，则更改为支付宝
				$(".bkokw-right li label a").removeClass("sel");
				$("#paylist").find("input").eq(1).attr("checked","true");  //设置为支付宝支付
				$("#paylist").find("input").eq(1).parent().parent().addClass("sel");
			}
		}else{
			$("#pay_lists").hide();	
			$("#paylist").find("input").eq(0).attr("checked","true");  //设置为资金账户支付
			$("#yenDiv").show();
		}
	}
}
/*************************保险业务 E**************************/

</SCRIPT>

	<DIV id=qmg_online class=floats sizcache="4" sizset="54">
		<A
			href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4008899408&amp;cref=&amp;ref=&amp;pt=&amp;f=1&amp;ty=1&amp;ap=&amp;as="
			target=_blank onFocus="undefined"><IMG border=0 alt=在线小二
			src="http://img.qmango.com/r8.gif"></A>
	</DIV>
	<!--bottom begin-->
	<DIV class=footer sizcache="4" sizset="55">
		<P sizcache="4" sizset="55">
			<!-- <a title="芒果网" target="_blank" href="http://www.mangocity.com/">
            <img align="absmiddle" src="./支付_files/mangocity.jpg" alt="芒果网"></a>-->
			<A title=经营性网站备案信息
				href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202006041400011"
				target=_blank onFocus="undefined"><IMG border=0 alt=经营性网站备案信息
				src="http://img.qmango.com/rz/2012_beian.jpg"> </A><A
				title=网络110报警服务 href="http://szgabm.qq.com/cgi-bin/wj/jump.cgi"
				target=_blank onFocus="undefined"><IMG border=0 alt=网络110报警服务
				src="http://img.qmango.com/rz/2012_110.jpg"> </A><A title=深圳市安网备案
				href="http://www.sznet110.gov.cn/webrecord/innernet/Welcome.jsp?bano=4403101920902"
				target=_blank onFocus="undefined"><IMG border=0 alt=深圳市安网备案
				src="http://img.qmango.com/rz/2012_anwang.jpg"> </A><A
				title=AAA级信用企业
				href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1618815109"
				target=_blank onFocus="undefined"><IMG border=0 alt=AAA级信用企业
				src="http://img.qmango.com/rz/2012_xinyong.jpg"> </A><A title=众信验证
				href="http://cert.ebs.org.cn/529511f5-b6cf-4b48-8705-4abd13563c92.html"
				rel=nofollow target=_blank onFocus="undefined"><IMG alt=众信验证
				src="http://img.qmango.com/images2013/xin_05.png"></A>&nbsp;&nbsp;
			<!--<script src="http://www.anquan.org/static/outer/js/anquan_authen_83x30.js"></script>-->
		</P>
		<P style="HEIGHT: 45px; LINE-HEIGHT: 45px" sizcache="4" sizset="60">
			<A href="http://www.qmango.com/" target=_blank onFocus="undefined">青芒果旅行网</A>&nbsp;&nbsp;&nbsp;
			<A href="http://www.qmango.com/" target=_blank onFocus="undefined">www.qmango.com</A>&nbsp;&nbsp;&nbsp;
			<A class=mnufoot href="http://www.miibeian.gov.cn/" target=_blank
				onFocus="undefined">粤ICP备13017802号-2</A>
		</P>
	</DIV>
	<!--baidu统计 -->
	<SCRIPT> 
var _hmt = _hmt || []; 
(function() { 
var hm = document.createElement("script"); 
hm.src = "//hm.baidu.com/hm.js?ce75e06d724fd33b2614a008ec776b54"; 
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s); 
})(); 
</SCRIPT>

	<SCRIPT type=text/javascript>
  try 
  {
      var pageTracker = _gat._getTracker("UA-11296128-2");
      pageTracker._trackPageview();
  } 
  catch(err) 
  {}
</SCRIPT>

	<DIV style="DISPLAY: none" sizcache="4" sizset="63">
		<SCRIPT language=JavaScript
			src="http://s85.cnzz.com/stat.php?id=2119979&amp;web_id=2119979"></SCRIPT>

		<SCRIPT type=text/javascript charset=utf-8
			src="http://c.cnzz.com/core.php?web_id=2119979&amp;t=z"></SCRIPT>
		<A title=站长统计
			href="http://www.cnzz.com/stat/website.php?web_id=2119979"
			target=_blank onFocus="undefined">站长统计</A>
	</DIV>
	<!--99click -->
	<SCRIPT language=javascript src="http://js.qmango.com/o_code.js"></SCRIPT>

	<SCRIPT src="http://js.qmango.com/js2013/public.js"></SCRIPT>
	<!--头部部分专用JS-->
	<SCRIPT type=text/javascript>
moveTips('qmg_online','200',"1");
</SCRIPT>
	<!--bottom end 100-->
	</DIV>
</BODY>
</HTML>