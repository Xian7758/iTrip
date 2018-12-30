<!DOCTYPE html>
<html>
<head>
<% String path = request.getContextPath(); %>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="image/x-icon" rel="Shortcut Icon" href="http://pod100.com/c/15/zhuyou.ico" />
<title>会员登录-住友酒店集团官网【原布丁酒店官网】</title>
<meta name="description" content="布丁连锁酒店是中国第一家时尚、新概念酒店连锁，酒店致力于为顾客创造快乐、自由、时尚的休息体验。酒店以时尚、自助乐活，文化交流为客房设计宗旨，兼顾时尚、温馨、个性和环保并重，为年轻白领、商务人士和个性化的人群提供时尚、环保、简洁、张扬个性的客房。" />
<meta name="Keywords" content="会员登录,布丁会员登录"/>
<link rel="stylesheet" type="text/css" href="<%=path %>/statics/css/login.css" />
<script type="text/javascript" src="<%=path %>/statics/js/ddpng.min.js"></script>
<script type="text/javascript" src="<%=path %>/statics/js/jquery.js"></script>
</head>
<style>
.login_box_btn{
	margin-left: 120px;
}
#ys{
	background-color: w;
}
</style>
<body>
<div class="toolbar_bg">
<div id="toolbar"><p class="p_1 fl tl"><a href="/Account/LogOn">会员登录</a> | <a href="/Account/Register">免费注册</a>  | <a href="http://www.podinns.com">住友首页</a> </p><p class="p_1 fr tr"><font class="fc_c">官网预订享最优惠价格保证</font></p>
  </div>
</div>
<div class="top_bg">
<div id="top">
<div class="doc fl">
<a href="http://www.podinns.com" class="logo fl button"></a>
</div>
</div>
</div>
<!--头部结束-->
<!--内容开始-->
<div class="cont fixed">
<div class="cont_c fixed">

<div class="login_box">
<form id="form1" action="${pageContext.request.contextPath}/Account/LogOn" method="post">
<input autocomplete="off" data-val="true" data-val-number="字段 isTravel 必须是一个数字。" id="isTravel" name="isTravel" type="hidden" value="0" />
<div class="login_box_t" id="typeS"><a data-v="0" class="a_1_h">会员登录</a></div>
<c:if test="${message ne null}"><div class="login_box_2" style="color:red">${message}</div></c:if>
<div class="login_box_2 login_box_2_m_20"><span class="b_1 button"></span>
    <input class="input_1" data-val="true" data-val-required="用户名 字段是必需的。" id="UserName" name="UserName" placeholder="用户名" type="text" value="" />
</div>
<div class="login_box_2"><span class="b_2 button"></span><input type="Password" id="Password" name="Password" class="input_1" placeholder="请输入您的密码" ></div>
 <%--  <div class="login_box_2 checkcodep">
<input type="text" id="ImgeCode" name="ImgeCode" class="input_2" maxlength="4" autocomplete="off" onkeyup="CheckVcode()" placeholder="验证码" />
     <span class="checkcodepicon"></span>
     <span id="sImgeCode" class="p_1"><img style="cursor: pointer;" src="<%=path%>/statics/picture/49c5905c5b73491db47365790a95f4b3.gif" id="VerifyImage" title="看不清？点击换一个" onclick="javascript:this.src='/Util/VerifyImage?'+Math.random();return false;" /></span>
</div>   --%>

<div class="login_box_2 checkcodep">
	<div class="input-icon"> 	
		<i class="fa fa-picture-o"></i> <input class="form-control"
			style="width: 150px;height:30px" type="text" id="verifyCode"
			name="verifyCode" placeholder="验证码" maxlength="4"> <img
			style="position: absolute; right: -10px; top: 6px;"
			src="${pageContext.request.contextPath }/Account/getVerifyCode"
			width="110" height="34" id="verifyCodeImage"
			onclick="this.src=this.src+'?'+Math.random()" id="img"><a href="#" onclick="document.getElementById('img').onclick()"></a><br/>
	</div>
</div>
<div class="login_box_error" id="msg"></div>
<div class="login_box_btn" id="divLogin"><input type="submit" id="ys" value="登录" style="width: 110px;height: 30px;"></div>
<!-- <input type="submit" value="登　录"> -->
<div class="login_box_3"><a href="/Account/GetPassword" class="a_1 fl">忘记密码？</a><a href="${pageContext.request.contextPath}/Account/Register" class="a_2 fr">免费注册</a></div>
</form>
</div>

<div class="third_party">
<div class="third_party_1">使用合作网站账号登录布丁：</div>
 <div class="third_party_2">
<a href="/Account/alilogin3" class="a_alipay fl"></a>
<a href="/Account/qqLogin2" class="a_qq fl"></a>
<a href="/Account/SinaLogin2" class="a_weibo fl"></a>
<a href="/Account/renrenLogin" class="a_renren fl"></a>
</div> 
</div>
</div>
</div>
<!--内容结束-->
<!--尾部开始-->
<div class="copyright_bg">
<div class="copyright tl">COPYRIGHT&nbsp;&nbsp;2007-2015&nbsp;&nbsp;&copy;&nbsp;&nbsp;青芒果网&nbsp;&nbsp;&nbsp;&nbsp;浙ICP备08106159号-1</div>
</div>
<!--尾部结束-->
<script>
var lasCheckCode = "";
function CheckVcode() {
    var code = $("#ImgeCode").val();
    if (code.length == 4 && lasCheckCode != code) {
        $.post("/util/CheckVerify/" + code + "?" + Math.random(), function (result) {
            if (result == "1")
                $(".checkcodepicon").attr("class", "checkcodepicon checkt");
            else if (result == "0")
                 $(".checkcodepicon").attr("class", "checkcodepicon checkf");
            else
                $(".checkcodepicon").attr("class", "checkcodepicon");
        });
    }
    else if(lasCheckCode != code)
        $(".checkcodepicon").attr("class", "checkcodepicon");
    lasCheckCode = code;
}
function error(msg){
    $("#msg").html(msg).show();
}

$(function(){
    $("#ImgeCode").keydown(function(e){if(e.which == 13){ Login(); return false;}});
    $("#typeS a").click(function(a){
        var v = $(this).attr("data-v");
        if(v == 0){
            $("#typeS .a_2_h").removeClass("a_2_h").addClass("a_2");
            $("#typeS .a_1").addClass("a_1_h").removeClass("a_1");
            $("#isTravel").val(0);
        }
        else{
            $("#typeS .a_2").addClass("a_2_h").removeClass("a_2");
            $("#typeS .a_1_h").removeClass("a_1_h").addClass("a_1");
             $("#isTravel").val(1);
        }
    });
})
</script>
</body>
</html>

