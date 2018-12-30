
<!DOCTYPE html>
<html>
<head>
<% String path = request.getContextPath(); %>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="image/x-icon" rel="Shortcut Icon" href="http://pod100.com/c/15/zhuyou.ico" />
<title>会员注册-住友酒店集团官网【原布丁酒店官网】</title>
<meta name="description" content="布丁连锁酒店是中国第一家时尚、新概念酒店连锁，酒店致力于为顾客创造快乐、自由、时尚的休息体验。酒店以时尚、自助乐活，文化交流为客房设计宗旨，兼顾时尚、温馨、个性和环保并重，为年轻白领、商务人士和个性化的人群提供时尚、环保、简洁、张扬个性的客房。" />
<meta name="Keywords" content="会员注册,布丁会员注册,布丁会员申请"/>
<!--[if lte IE 6]>
<script src="<%=path%>/statics/js/ddpng.min.js "></script>
<script type="text/javascript">
DD_belatedPNG.fix('.logo,.cont_c,div,.button')
</script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="<%=path%>/statics/css/2f10a67f8c8c4d60872ac05c12b7bddd.css" />
<script type="text/javascript" src="<%=path%>/statics/js/jquery.js"></script>
<script type="text/javascript" src="<%=path%>/statics/js/ddpng.min.js"></script>
<script type="text/javascript" src="<%=path%>/statics/js/jquery.min;framework;podinnval;jquery.js"></script>

</head>
<body>
<!--头部开始-->
<div class="toolbar_bg" >
<div id="toolbar"><p class="p_1 fl tl"><a href="/Account/LogOn">会员登录</a> | <a href="/Account/Register">免费注册</a> | <a href="http://www.podinns.com">住友首页</a> </p><p class="p_1 fr tr"><font class="fc_c">官网预订享最优惠价格保证</font></p>
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

    <div class="cont fixed">
<div class="cont_c fixed">

<div class="register_cont fl fixed" id="regf">

<div class="register_cont_left fl fixed">

<div class="register_cont_left_1 fl fixed">
<p class="p_1 fl">免费注册立享95折房价优惠</p>
<p class="p_2 fl">注册完成后激活手机和邮箱可获<font class="f_1">100积分</font></p>
</div>
<form id="regForm" name="regForm" method="post" action="${pageContext.request.contextPath}/Account/RegPost">
<div class="register_cont_left_2 fl fixed">
 <input type="hidden" name="money" value="0">
 <input type="hidden" name="usertypeId" value="1">
<div class="p_3 fl"><div class="f_2 fl"><span class="need">*</span>真实姓名</div><input type="text" id="Name" name="Name" placeholder="请输入真实姓名" class="input_1 fl"/><span id="tip_Name"></span></div>
<div class="p_3 fl"><div class="f_2 fl"><span class="need">*</span>登录密码</div><input type="password" id="Password2" name="Password2" placeholder="请输入登录密码" class="input_1 fl"/><span id="tip_Password2"></span></div>
  <div class="p_3 fl"><div class="f_2 fl"><span class="need">*</span>确认密码</div><input type="password" id="ConfirmPassword" name="ConfirmPassword" placeholder="请输入确认密码" class="input_1 fl"/><span id="tip_ConfirmPassword"></span></div>
 <div class="p_3 fl"><div class="f_2 fl"><span class="need">*</span>手机号码</div><input type="text" id="Mobile" name="Mobile" placeholder="请输入手机号码" class="input_1 fl"/><span id="tip_Mobile"></span></div> 

<div class="p_3 fl">
						<div class="input-icon"> 	
							<i class="fa fa-picture-o"></i> <input class="form-control"
								style="width: 150px;height:25px;position: absolute; left: 523px; top: 470px;" type="text" id="verifyCode"
								name="verifyCode" placeholder="验证码" maxlength="4"> <img
								style="position: absolute; right: 560px; top: 470px;"
								src="${pageContext.request.contextPath }/Account/getVerifyCode"
								width="110" height="34" id="verifyCodeImage"
								onclick="this.src=this.src+'?'+Math.random()" id="img"><a href="#" onclick="document.getElementById('img').onclick()"></a><br/>
						</div>
					</div>
  
     <!-- <div class="p_3 fl"><div class="f_2 fl"></div><input type="hidden" id="smsID" name="smsID" /><span id="btnResend"> <a href="javascript:void(0)" onclick="ResendMobile()" class="a_1 fl">发送手机验证码</a></span></div>
<div class="p_3 fl checkcodep"><div class="f_2 fl"><span class="need">*</span>短信验证码</div>
    <input type="text" id="eCode2" name="eCode2"  class="input_2 fl" maxlength="5" autocomplete="off" onkeyup="CheckVcodeMobile()"/><span class="checkcodepicon" id="code2"></span><span id="tip_eCode"></span></div>
</div> -->

<!-- <div class="register_cont_left_3 fl fixed" >
<a  class="a_2 fl" onclick="openex(this)"><span class="f_4 fl">填写完善信息（完善信息可享受更多会员特权）</span><span class="t_2 fl button"></span></a>
</div> -->

<!-- <div class="register_cont_left_4 fl fixed" id="divex">
<div class="p_3 fl"><div class="f_2 fl"><span class="need"></span>身份证</div><input type="text" id="Sfz" name="Sfz"  placeholder="可选" class="input_1 fl"/><span id="tip_Sfz"></span></div>
<div class="p_3 fl"><div class="f_2 fl"><span class="need"></span>邮箱</div><input type="text" id="Email" name="Email" placeholder="可选" class="input_1 fl"/><span id="tip_Email"></span></div>
</div> -->
<div id="divReg" style="position: absolute; left: 560px; top: 650px;"><input type="submit" value="同意以下协议并注册" onclick="ResendMobile()"></div>
</form>
<div class="register_cont_left_5 fl fixed">

<!-- <a href="#" onclick="$('#regForm').submit();return false" class="a_3 fl"></a> -->
<!-- <p class="p_3 fl"><span class="f_5 fl"><a href="#" onclick="$('#dovagreement').toggle();return false;" style="padding-left:110px;">《布丁酒店连锁服务协议》</a></span></p> -->
<p><br/><br/></p>
 <div id="dovagreement" style="width:580px; height:100px;color:#999; overflow: auto; float:left; margin:10px 0px 35px 15px;  clear:both; border:1px solid #cccccc">
      <p>1、服务条款的确认和接纳 </p>
      <p>布丁酒店连锁网络会员服务的所有权和运作权归布丁酒店连锁所有。所提供的服务必须按照其发布的公司章程，服务条款和操作规则严格执行。用户通过完成注册程序并点击一下“递交”的按钮，这表示用户与布丁酒店连锁达成协议并接受所有的服务条款。 </p>
      <p>2、服务简介 </p>
      <p> 布丁酒店连锁运用自己的操作系统通过国际互联网络为用户提供网络会员服务。用户必须： </p>
      <p>(1)提供设备，包括个人电脑一台、调制解调器一个及配备上网装置。 
        (2)个人上网和支付与此服务有关的电话费用。 
        考虑到布丁酒店连锁网络会员服务的重要性，用户同意： 
        (1)提供及时、详尽及准确的个人资料。 </p>
      <p>(2)不断更新注册资料，符合及时、详尽准确的要求。所有原始键入的资料将引用为注册资料。 
        如果用户提供的资料不准确，布丁酒店连锁保留结束用户使用布丁酒店连锁网络会员服务的权利。 
        用户在享用布丁酒店连锁网络会员服务的同时，同意接受布丁酒店连锁网络会员服务提供的各类信息服务。 </p>
      <p>3、服务条款的修改 
        布丁酒店连锁会在必要时修改服务条款，布丁酒店连锁网络会员服务条款一旦发生变动，公司将会在用户进入下一步使用前的页面提示修改内容。 
        用户要继续使用布丁酒店连锁网络会员服务需要两方面的确认： </p>
      <p>(1)首先确认布丁酒店连锁网络会员服务条款及其变动。 </p>
      <p>(2)同意接受所有的服务条款限制。 </p>
      <p>4、服务修订 </p>
      <p>布丁酒店连锁保留随时修改或中断服务而不需知照用户的权利。布丁酒店连锁行使修改或中断服务的权利，不需对用户或第三方负责。 </p>
      <p>5、用户隐私制度 </p>
      <p>5.1 当您注册为本公司（此处所指“公司”，包括住友酒店管理有限公司及其现有或将来成立或加入的子公司、分公司、关联公司及加盟酒店）的会员或使用本公司产品或服务时，您同意自愿向本公司提供姓名、身份证、电话号码及其他个人信息（以下简称“个人信息”）。本公司收集个人信息的目的是为您提供尽可能多的个人化服务，并且可以发送本公司认为合适的内容和广告。 
        尊重个人隐私是本公司的一项基本政策，所以，本公司不会向第三方公开您的个人信息，除非有下列情况： </p>
      <p>(1) 根据中国或其他司法管辖区域的法律、法规或监管规则的要求，公司需要进行披露的； </p>
      <p>(2) 法律规定或本公司合法服务程序规定可以规定公开的； </p>
      <p>(3) 在紧急情况下，为维护会员及公众的权利； </p>
      <p>(4) 为维护本公司的合法权利； </p>
      <p>(5) 其他依法需要向第三方公开个人信息的情况。 </p>
      <p>5.2 除非法律明令禁止，您明确认可、授权并同意本公司使用您的个人信息用于任何合法的商业用途，包括但不限于如下情形： </p>
      <p>(1) 一切与本公司服务和产品有关的目的，包括但不限于确认您的身份、为您提供您所要求的产品或服务、联络您、进行研究调查，及为本公司或本公司的合作伙伴提供报告； </p>
      <p>(2) 会与本公司的商业伙伴共享会员的个人信息，这些商业伙伴可能会用您的个人信息用于合法商业用途，通知您有关产品和服务信息；如果您不希望您的信息被用于这项用途，您应当明确告诉我们。 </p>
      <p>3) 将会员信息与第三方数据匹配。 </p>
      <p>(4) 本公司会通过透露会员统计数据，向合作伙伴、广告商及其他第三方以及为了其他合法目的而描述本公司的服务。 </p>
      <p>(5) 向会员发送关于本公司商业伙伴的产品和服务的信息或者酒店认为您会感兴趣的其他产品和服务。如果您不希望收到这样的邮件，您应当通过书面或口头方式明确告知我们。 </p>
      <p>5.3 如果本公司与其他公司合入或被其他公司收购，我们有权移交有关会员的个人资料。 </p>
      <p>5.4 我们会采取商业上合理的努力保护您的个人信息，但本公司不能确信或保证任何个人信息的绝对安全，会员须自己承担风险。如遇不可抗力或在第三方恶意攻击的情况下，个人信息遭到泄露，会员须自己承担风险。又如会员联机公布可被公众访问的个人信息时，会员有可能会收到未经会员同意的消息；本公司的合作伙伴或通过抽奖、促销等活动得知会员个人信息的其他第三方会进行独立的数据收集工作等活动，本公司对会员及其他任何第三方的上述行为，不负担任何责任。 </p>
      <p>6、用户的帐号，密码和安全性 
        你一旦注册成功成为用户，你将得到一个密码和帐号。如果你不保管好自己的帐号和密码安全，将负全部责任。另外，每个用户都要对其帐户中的所有活动和事件负全责。你可随时改变你的密码。用户若发现任何非法使用用户帐号或安全漏洞的情况，立即通告布丁酒店连锁。 </p>
      <p>7、拒绝提供担保 </p>
      <p>用户明确同意邮件服务的使用由用户个人承担风险。布丁酒店连锁明确表示不提供任何类型的担保，不论是明确的或隐含的，但是不对商业性的隐含担保，特定目的和不违反规定的适当担保作限制。布丁酒店连锁不担保服务一定能满足用户的要求，也不担保服务不会受中断，对服务的及时性，安全性，出错发生都不作担保。布丁酒店连锁拒绝提供任何担保，包括信息能否准确，及时，顺利的传送。用户理解并接受任何信息资料(下载或通过布丁酒店连锁网络会员服务取得)，取决于用户自己并由其承担系统受损或资料丢失的所有风险和责任。用户不会从布丁酒店连锁收到口头或书写的意见或信息，也不会在这里作明确担保。 </p>
      <p>8、有限责任 </p>
      <p>布丁酒店连锁对任何直接、间接、偶然、特殊及继起的损害不负责任，这些损害来自：不正当使用网络会员服务，非法使用服务或用户传送的信息有所变动。这些损害会导致布丁酒店连锁形象受损，所以布丁酒店连锁早已提出这种损害的可能性。 </p>
      <p>9、布丁酒店连锁网络会员服务信息的储存及限制 </p>
      <p>布丁酒店连锁不对用户所发布信息的删除或储存失败负责。布丁酒店连锁没有对信息的传输量规定上限，但是它有判定用户的行为是否符合布丁酒店连锁网络会员服务条款的要求和精神的保留权利，如果用户违背了服务条款的规定，则中断其网络会员服务的帐号。本网站所有的文章版权归原文作者和布丁酒店连锁共同所有，任何人需要转载网站内文章，必须征得原文作者或布丁酒店连锁授权。 </p>
      <p>10、用户管理 </p>
      <p>用户单独承担发布内容的责任。用户对服务的使用是根据所有适用于网站服务的地方法律、国家法律和国际法律标准的。用户必须遵循： </p>
      <p>(1)发布信息时必须符合中国有关法规。 </p>
      <p>(2)使用网络会员服务不作非法用途。 </p>
      <p>(3)不干扰或混乱网络服务。 </p>
      <p>(4)遵守所有使用网络会员服务的网络协议、规定和程序。 </p>
      <p>网络会员服务是利用因特网发送和收取信息。所以，用户的行为指引是根据国家有关因特网的法规，政策和程序的。用户须承诺不传输任何非法的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽等信息资料。另外，用户也不能传输任何教唆他人构成犯罪行为的资料；不能传输助长国内不利条件和涉及国家安全的资料；不能传输任何不符合当地法规、国家法律和国际法律的资料。未经许可而非法进入其它电脑系统是禁止的。若用户的行为不符合以上提到的服务条款，布丁酒店连锁将作出独立判断立即取消用户服务帐号。 
        用户需对自己在网络会员服务中的行为承担法律责任。用户若在网络会员服务中散布和传播反动、色情或其他违反国家法律的信息，网络会员服务的系统记录有可能作为用户违反法律的证据。 </p>
      <p>11、保障 </p>
      <p>用户同意保障和维护布丁酒店连锁全体成员的利益，负责支付由用户使用超出服务范围引起的律师费用，违反服务条款的损害补偿费用，其它人使用用户的电脑、帐号和其它知识产权的追索费。 </p>
      <p>12、结束服务 </p>
      <p>用户或布丁酒店连锁可随时根据实际情况中断网站服务。布丁酒店连锁不需对任何个人或第三方负责而随时中断服务。用户若反对任何服务条款的建议或对后来的条款修改有异议，或对布丁酒店连锁网络会员服务不满，用户只有以下的追索权： </p>
      <p>(1)不再使用布丁酒店连锁网络会员服务。 </p>
      <p>(2)结束用户使用布丁酒店连锁网络会员服务的资格。 </p>
      <p>(3)通告布丁酒店连锁停止该用户的服务。 
        结束用户服务后，用户使用布丁酒店连锁网络会员服务的权利马上中止。从那时起，布丁酒店连锁不再对用户承担任何义务。 </p>
      <p>13、通告 </p>
      <p>所有发给用户的通告都可通过电子邮件或常规的信件传送。布丁酒店连锁会通过邮件服务、网站公告发布消息给用户，告诉他们服务条款的修改、服务变更、或其它重要事情。 </p>
      <p>14、参与广告策划 </p>
      <p>用户如在他们发表的信息中加入宣传资料或参与广告策划，在布丁酒店连锁网络会员相关服务展示他们的产品，任何这类促销方法，包括运输货物、付款、服务、商业条件、担保及与广告有关的描述都只是在相应的用户和广告销售商之间发生。布丁酒店连锁不承担任何责任，布丁酒店连锁网络会员服务没有义务为这类广告销售负任何一部分的责任。。 </p>
      <p>15、邮件内容的所有权 </p>
      <p>用户定义的内容包括：文字、软件、声音、相片、录象、图表；在广告中全部内容；电子邮件的全部内容；布丁酒店连锁网络会员服务为用户提供的商业信息。所有这些内容均受版权、商标、标签和其它财产所有权法律的保护。所以，用户只能在布丁酒店连锁和广告商授权下才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。 </p>
      <p>16、法律 </p>
      <p>邮件服务条款要与该国的国家法律解析一致，包括法律条款中有争议抵触的内容。用户和布丁酒店连锁一致同意服从高等法院所有管辖。若有任何服务条款与法律相抵触，那这些条款将按尽可能接近的方法重新解析，而其它条款则保持对用户产生法律效力和影响。 </p>
    </div>
    
</div>

</div>

<div class="space_20 fl"></div>
</div>

<div class="register_cont fl fixed" id="regSuccess" style="display:none">


<div class="register_cont_left fl fixed">

<div class="register_cont_left_1 fl fixed">
<p class="p_1 fl">恭喜您！注册成功啦！</p>
<p class="p_2 fl" style="padding-top:30px;padding-bottom:100px">您可能还需要：<br /><br /><a href="/">返回首页</a><a class="sp">|</a><a href="/Hotel/HotelSearch">预定酒店</a><a class="sp">|</a><a href="/Member/PersonInfo">完善个人信息</a><a class="sp">|</a><a href="/Member/MyPod">手机激活送积分</a></p>
</div>


</div>
<div class="space_20 fl"></div>
</div>
</div>
</div>
</div>
<!--内容结束-->
<!--尾部开始-->
<div class="copyright_bg">
<div class="copyright tl">COPYRIGHT&nbsp;&nbsp;2007-2015&nbsp;&nbsp;&copy;&nbsp;&nbsp;住友酒店集团&nbsp;&nbsp;&nbsp;&nbsp;浙ICP备08106159号-1</div>
</div>
<!--尾部结束-->
<script>
    function openex(obj){
        if($("#divex").css("display") == "none"){
          $("#divex").show();
           $(obj).find(".t_2").addClass("t_1").removeClass("t_2");
        }
        else{
          $("#divex").hide();
         $(obj).find(".t_1").addClass("t_2").removeClass("t_1");
        }
    }
var oldHH = "";
function validate(formData, jqForm, options) {
    var result = $("#regForm").valid();
    if (result) {
        oldHH = $("#divReg").html();
        $("#divReg").html('<a  class="a_3 fl">注册中...</a>');
    }
    return result;
}
function processResult(html, idn,id,v) {
    var result;
    try {
        result = eval('(' + html + ')');
    }
    catch (ex) {
        result = html;
    }
    if (result.Error != undefined) {
        $("#eCode" + idn).val("");
        if (result.Text.indexOf("ERR_C") >= 0) {
            if (parseInt(result.Text.substr(5, 1)) >= 3) {
                time = 0;
                setSmsBtnUse();
                alert("验证码错误3次，请重新点击获取");
            }
            else {
                alert("手机验证码不正确");
            }
        }
        else
            alert(result.Text);
        $("#" + id).html(v);
    }
    else if (result.Href) {
            location.href = result.href;
    }
    else {
		location.href="/Account/RegisterSuccess";
       //$("#regSuccess").show();
       //  $("#regf").hide();
    }
}
function ajaxSubmitData() {
    var queryString = $("#regForm").formSerialize();
    var oldStr = ""
    $.ajax({
        type: "POST",
        url: $("#regForm").attr("Action"),
        data: queryString,
        beforeSend: function () {
            oldStr=$("#divReg").html();
            $("#divReg").html('<a  class="a_3 fl">注册中...</a>');
        },
        success: function (html) { processResult(html, "2", "divReg", oldStr) },
        error: function () { $("#divReg").html(oldStr); }
    });
}
$(document).ready(function () {
    
    var ajaxProjectImageListOptions = {
        beforeSubmit: validate,
        success: function (html) { processResult(html, "", "divLogin", oldHH);  },
        error: function () { $("divLogin").html(oldHH); }
    };
    $("#form1").ajaxForm(ajaxProjectImageListOptions);

});
function GetImageCode(num) {
    if ($("#seCode" + num).html() == "") {
        $("#seCode" + num).html('< style="cursor: pointer;" src="<%=path%>/statics/picture/fbef0e0aa4fb4cf489d79866ff0b0d3f.gif' + Math.random() + '" id="VerifyImage" title="看不清？点击换一个" align="absmiddle" onclick="javascript:this.src=\'/Util/VerifyImage?\'+Math.random();return false;" />');
    }
}
var lasCheckCode3 = "";
function CheckVcode() {
    var code = $("#eCode3").val();
    if (code.length == 4 && lasCheckCode3 != code) {
        $.post("/util/CheckVerify/" + code + "?" + Math.random(), function (result) {
            if (result == "1")
                $("#code3").attr("class", "checkcodepicon checkt");
            else if (result == "0")
                $("#code3").attr("class", "checkcodepicon checkf");
            else
                $("#code3").attr("class", "checkcodepicon");
        });
    }
    else if (lasCheckCode3 != code)
        $("#code3").attr("class", "checkcodepicon");
    lasCheckCode3 = code;
}
var lasCheckCode = "";
function CheckVcodeMobile() {
    var code = $("#eCode2").val();
    if (code.length == 5 && lasCheckCode != code) {
        $.post("/util/CheckVerifyMobile/" + code + "?" + Math.random(), function (result) {
            if (result == "1")
                $("#code2").attr("class", "checkcodepicon checkt");
            else if (result == "0")
                $("#code2").attr("class", "checkcodepicon checkf");
            else
                $("#code2").attr("class", "checkcodepicon");
        });
    }
    else if (lasCheckCode != code)
        $("#code2").attr("class", "checkcodepicon");
    lasCheckCode = code;
}
function ResendMobile() {
    if ($("#Mobile").val() == "" || $("#Mobile").val().length != 11) {
        alert("请输入正确手机号码");
        $("#Mobile").focus();
        return false;
    }
    if ($("#eCode3").val() == "") {
        alert("请输入图型验证码");
        $("#eCode3").focus();
        return false;
    }
    $.ajax({
        type: "POST",
        url: '/Account/ReSendMobile2?mobile=' + $("#Mobile").val() + "&vcode=" + $("#eCode3").val(),
        cache: false,
        success: function (result) {
            if (result.Error != undefined) {
                $("#eCode3").val("");
                $("#VerifyImage").click()
                alert(result.Text);
            }
            else {
                var text = result.Text;
                if (text.substr(0, 2) == "OK") {
                    $("#smsID").val(text.substr(2));
                    SetNewGo();
                    alert("短信已经发送");
                }
                else {
                    alert(text);
                }
            }

        }
    });
}
var time = 60;
function gotime() {
    time = time - 1;
    if (time <= 0) {
        setSmsBtnUse();
        geterrorMsg();
    }
    else {
        if (time == 30)
            geterrorMsg();
        setSmsBtn("重新发送验证码(" + time + ")");
        setTimeout("gotime()", 1000);
    }
}
function setSmsBtnUse(){
 $("#eCode3").val("");
 $("#VerifyImage").click();
 $("#btnResend").html('<a href="javascript:void(0)" onclick="ResendMobile()" class="a_1 fl">重新发送验证码</a>');
}
function setSmsBtn(msg){
 $("#btnResend").html('<span class="a_4 fl">'+msg+'</span>');
}
function geterrorMsg() {
    $.ajax({
        type: "POST",
        url: '/Member/GetSmsMessage/' + $("#smsID").val(),
        cache: false,
        success: function (html) {
            if (html != "")
                alert("短信发送失败：" + html);
        }
    });
}
function SetNewGo() {
    time = 60;
    gotime();
}
$(function () {

    $('#regForm').formValidator();
     $('#Name').initValidator({
        readyMsg: '',
        focusMsg: '请输入您的真实姓名',
        validMsg: '输入成功',
        msgTarget: 'tip_Name'
    }).addValidator('required', {
        errorMsg: '不可为空'
    });
    $('#Email').initValidator({
        readyMsg: '',
        focusMsg: '请输入电子邮件',
        validMsg: '输入成功',
        msgTarget: 'tip_Email'
    }).addValidator('regex', {
        regex: '^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$',
        errorMsg: 'E-mail格式错误'
    }).addValidator('ajax', {
        url: '/Account/EmailExist',
        isAsmx: false,
        errorMsg: 'E-mail已经注册'
    });
      $('#Sfz').initValidator({
            readyMsg: '',
            focusMsg: '请输入身份证',
            validMsg: '输入成功',
            msgTarget: 'tip_Sfz'
        }).addValidator('regex', {
            regex: '^((\\d{15})|(\\d{17}(?:\\d|x|X)))$',
            errorMsg: '身份证格式错误'
        }).addValidator('ajax', {
            url: '/Account/IdCardExist',
            isAsmx: false,
            errorMsg: '该证件已经申领'
        });
    $('#Mobile').initValidator({
        readyMsg: '',
        focusMsg: '请输入手机号码，需要短信验证手机号码',
        validMsg: '输入符合规则',
        msgTarget: 'tip_Mobile'
    }).addValidator('required', {
        errorMsg: '不可为空'
    }).addValidator('regex', {
        regex: '^(13|14|15|17|18)+[0-9]{9}$',
        errorMsg: '手机号码格式错误'
    }).addValidator('ajax', {
        url: '/Account/MobileExist',
        isAsmx: false,
        errorMsg: '手机已经注册'
    });

    $('#Password2').initValidator({
        readyMsg: '',
        focusMsg: '6-20位字符，建议由字母、数字与符号两种以上组合',
        validMsg: '输入成功',
        msgTarget: 'tip_Password2'
    }).addValidator('required', {
        errorMsg: '不可为空'
    }).addValidator('length', {
        min: 6,
        max: 20,
        errorMsg: '密码长度为6-20位字符'
    });
    $('#ConfirmPassword').initValidator({
        readyMsg: '',
        focusMsg: '请再次输入密码',
        validMsg: '输入成功',
        msgTarget: 'tip_ConfirmPassword'
    }).addValidator('required', {
        errorMsg: '不可为空'
    }).addValidator('length', {
        min: 6,
        max: 20,
        errorMsg: '密码长度为6-20位字符'
    }).addValidator('compare', {
        toID: 'Password2',
        errorMsg: '两次密码不一样'
    });
    $('#eCode2').initValidator({
        readyMsg: '',
        focusMsg: '请输入短信验证码',
        validMsg: '输入成功',
        msgTarget: 'tip_eCode'
    }).addValidator('required', {
        errorMsg: '不可为空'
    });
});
</script>
</body>
</html>

