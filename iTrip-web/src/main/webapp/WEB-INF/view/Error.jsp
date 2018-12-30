<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>页面出错提示-青芒果旅行网</title>
 <meta name="keywords" content="页面出错,青芒果旅行网" />

<meta name="description" content="抱歉，您访问的页面出错，请重新访问" />
</head>

<body>
<table width="700" height="215" border="0" align="center">
  <tr>
    <td align="center"><img src="picture/404.jpg" width="159" height="93" /></td>
  </tr>
  <tr>
    <td width="100%" align="center" style="font-weight:bold;">出错啦！请与网站管理员联系，通知他们此 URL 地址出现了该错误！<span id="urltime">3</span>秒钟后返回<a href="/index.asp">首页</a>。</td>
  </tr>
</table>
<script language="javascript" type="text/javascript">
 var i=3;
 function gettime()
 {
    i=i-1;
	document.getElementById("urltime").innerHTML=i;
	if(i==1){location.href="/index.asp";clearInterval(clr);}
 }
 var clr=setInterval("gettime()",1000);
</script>
</body>
</html>