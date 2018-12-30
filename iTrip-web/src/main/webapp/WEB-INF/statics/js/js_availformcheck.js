// validation functions for /booking/dsp_hosteldetails.cfm; dsp_packages.cfm
// relies on 'today' (the current server date) being set by a script section earlier in the page

/*
new_element=document.createElement("script"); 
new_element.setAttribute("type","text/javascript"); 
new_element.setAttribute("src","divlogin.js");// 在这里引入了divlogin.js
document.body.appendChild(new_element); 
*/

function addDays(dDate,days) {
    return new Date(dDate.getTime() + days*24*60*60*1000);
}

function availFormCheck(form,mlos,days,tqydts,tqydts1) {
	var	today = new Date();
	var	cmp_day
	cmp_day = today.getTime()+ tqydts*43200000
	if (form.starttime.value.length==0){
		alert("请输入入住时间!!!");
		form.starttime.focus();
		return false
	}	
	if(!isDate(form.starttime.value)){
		alert("入住时间不符合格式规范或无效的日期!");
		form.starttime.focus();
		return false
	}
	if(parseDate(form.starttime.value,true).getTime()<cmp_day)
	{
		alert("目前本站旅馆必须提前"+tqydts+"天预订，谢谢合作！!");
		form.starttime.focus();
		return false	
	}
	var ele = form.elements;
		// check the arrival date
	
	//var dVal = ele['days'].options[ele['days'].selectedIndex].value;
	//
	//if (dVal != days)
	//	days = dVal	
	//	
	//if (!isValidDate(ele['startday'].options[ele['startday'].selectedIndex].value,
	//		ele['startmonth'].options[ele['startmonth'].selectedIndex].value,
	//		ele['startyear'].options[ele['startyear'].selectedIndex].value)) {
	//	alert('Please select a valid arrival date.\n\nYou can book this hostel for arrivals between '+formatDate(today)+' and '+formatDate(maxdate));		
	//	return;
	//	}	
	//
	// check mlos against dates....
	//var date=new Date(ele['startyear'].options[ele['startyear'].selectedIndex].value,
	//		ele['startmonth'].options[ele['startmonth'].selectedIndex].value-1,
	//		ele['startday'].options[ele['startday'].selectedIndex].value);
	//var days=dVal;
	//for(ii=0;ii<days;ii++){
	//		if(ii>0)
	//			date=new Date(date.getTime()+24*60*60*1000);// up by 1 day
	//		if(aMlos[date] && aMlos[date]>days){
	//			alert('Sorry....\n\nThe minimum length of stay you can book over these dates is '+aMlos[date]+' nights.\n\nPlease check the \'bed availability\' section to see which days carry the minimum nights.');
	//			return false;
	//		}
	//	}
	// loop over the bed DDLs to see if any selects above 0
	// assumes options[0] is the 0 option	
	var ele = form.elements;
	for(ii=0;ii<ele.length;ii++)
		if (ele[ii].type == 'select-one' && ele[ii].name.indexOf('beds_') == 0 && ele[ii].selectedIndex > 0) {
			form.submit();
			return;
			}			
		alert ('请选择房间类型和人数');
	
}
function availFormCheck1Actives(form,tqydts) {
	if (form.starttime.value.length==0){
		alert("请输入入住时间!!!");
		form.starttime.focus();
		return false
	}	
	if(!isDate(form.starttime.value)){
		alert("入住时间不符合格式规范或无效的日期!");
		form.starttime.focus();
		return false
	}
	
	if (form.endtime.value.length==0){
		alert("请输入离店时间!!!");
		showCalendar('imageCalendar2',false,'endtime',null,'setCheckOutDate');
		return false
	}	
	if(!isDate(form.starttime.value)){
		alert("离店时间不符合格式规范或无效的日期!");
		showCalendar('imageCalendar2',false,'endtime',null,'setCheckOutDate');
		return false
	}
	
	
	
	
	var	today = new Date();
	var	cmp_day = new Date(today.getYear(),today.getMonth(),today.getDate()+tqydts);
	
	var activeDay= new Date(today.getYear(),today.getMonth(),today.getDate()+30);
	var activeDay1= new Date(today.getYear(),today.getMonth(),today.getDate()+31);
	
	
	
	/*if(parseDate(form.starttime.value,true).getTime()<cmp_day.getTime())
	{
		alert("目前本旅馆必须提前"+tqydts+"天预订，谢谢合作！!");
		form.starttime.focus();
		return false	
	}
	
	if(parseDate(form.starttime.value,true).getTime()>activeDay.getTime())
	{
		//alert(form.starttime.value)
		alert("5折狂欢活动只可预订一个月内入住的酒店，请重新选择入住日期！!");
		form.starttime.focus();
		return false;	
	}
	
	
	if(parseDate(form.endtime.value,true).getTime()>activeDay1.getTime())
	{
		alert("5折狂欢活动只可预订一个月内入住的酒店，请重新选择离店日期！!");
		form.endtime.focus();
		return false	
	}
	*/

	var ele = form.elements;

	var isSel = "false";
	for(ii=0;ii<ele.length;ii++)
		if (ele[ii].type == 'select-one' && ele[ii].name.indexOf('beds_') == 0 && ele[ii].selectedIndex > 0) {
				isSel = "true";
			}	
			
	if( isSel == "false" )
	{
		alert ('请选择房间类型和人数');
		return false;
	}
	else
	{
		showLogin(form.name);
		form.submit();
		return true;
	}

}


function availFormCheck1(form,tqydts) {
	
	if (form.starttime.value.length==0){
		alert("请输入入住时间!!!");
		form.starttime.focus();
		return false
	}	
	if(!isDate(form.starttime.value)){
		alert("入住时间不符合格式规范或无效的日期!");
		form.starttime.focus();
		return false
	}
	
	if (form.endtime.value.length==0){
		alert("请输入离店时间!!!");
		showCalendar('imageCalendar2',false,'endtime',null,'setCheckOutDate');
		return false
	}	
	if(!isDate(form.starttime.value)){
		alert("离店时间不符合格式规范或无效的日期!");
		showCalendar('imageCalendar2',false,'endtime',null,'setCheckOutDate');
		return false
	}
	

	var	today = new Date();
	var	cmp_day = new Date(today.getYear(),today.getMonth(),today.getDate()+tqydts);
	if(parseDate(form.starttime.value,true).getTime()<cmp_day.getTime())
	{
		alert("目前本旅馆必须提前"+tqydts+"天预订，谢谢合作！!");
		form.starttime.focus();
		return false	
	}

	var ele = form.elements;
	var isSel = "false";
	var roomTypeNum = 0;
	var roomNumber = 0;
	for(ii=0;ii<ele.length;ii++)
		if (ele[ii].type == 'select-one' && ele[ii].name.indexOf('beds_') == 0 && ele[ii].selectedIndex > 0) {
				isSel = "true";
				roomTypeNum++;
				roomNumber = roomNumber+(parseInt(ele[ii].value) / 2);
			}	
			
	if( isSel == "false" && showtype != "true" )
	{
		alert ('请选择房间类型和人数');
		return false;
	}
	else
	{
		if($("#hide_resourceid").val() == "100"){
			//if(roomTypeNum>1){
				//alert ('对不起，该酒店一次只能预定一个房型，如需预定多个房型，请预定成功后再次选择预定！');
				//return false;	
			//}
			
			if(roomNumber>6){
				alert ('对不起，该酒店一次只能预定不超过6间房，如需预定更多间，请预定成功后再次选择预定！');
				return false;	
			}
		}

		if($("#hide_resourceid").val() == "110"){
			if(roomTypeNum>1){
				alert ('对不起，该酒店一次只能预定一个房型，如需预定多个房型，请预定成功后再次选择预定！');
				return false;	
			}
		}
		
		//预订天数限制 begin
		var ydtsxzs = $("#hdnydtsxzs").val();
		var ydtsxze = $("#hdnydtsxze").val();
		var ydtsxzdays = $("#hdnydtsxzdays").val();
		var sjsdate = $("#starttime").val();
		var sjedate = $("#endtime").val();
		
		if(ydtsxzdays != "" && ydtsxzdays>$("#days").val()){
			if(ydtsxzs !="" && ydtsxze != "")
			{
				if((dateCompare(sjsdate,ydtsxzs) && dateCompare(ydtsxze,sjsdate)) || (dateCompare(sjedate,ydtsxzs) && dateCompare(ydtsxze,sjedate))){
					alert("在"+ ydtsxzs + "至" + ydtsxze + "时间段，最少需入住" + ydtsxzdays + "天");
					return false;
				}
			}else if(ydtsxzs != ""){
				if(dateCompare(sjedate,ydtsxzs)){
					alert("在"+ ydtsxzs + "之后，最少需入住" + ydtsxzdays + "天");
					return false;
				}
			}else{
				alert("最少需入住" + ydtsxzdays + "天");
				return false;
			}			
		}
		//预订天数限制 end
		
		//判断有没有选择保险,设置为0表示没有选择保险
		if ($(".btn_popbaoxian").html()!=null && $(".btn_popbaoxian").html()!="" && $(".btn_popbaoxian").html()!="undefined")
		{
			if ($(".btn_popbaoxian").html().indexOf("选择人数")>0 )
			{
				$("#hotelProduct_1").val("0");
			}
		}
		else
		{
			$("#hotelProduct_1").val("0");
		}
		
		var sid = document.search.hdRestCard.value;
		if( sid == "" )
		{
			showLogin(form.name);
			channelCheck(form);
		} 
		else
		{
			
			channelCheck(form);
		}
	}
}


function channelCheck(form){
	
	if($("#hide_resourceid").val() == "101"){
		var hotelid = $("input[name='hostel']").eq(0).val();
		var starttime = $("#starttime").val();
		var endtime = $("#endtime").val();
		var room = ""
		var roomnum = "";
		var roomOrNums = "";
		var ele = form.elements;
		
		for(var i=0;i<ele.length;i++){
			if (ele[i].type == 'select-one' && ele[i].name.indexOf('beds_') == 0 && ele[i].selectedIndex > 0) {
				room = room + "," + ele[i].name.replace("beds_r_","");
				roomnum = roomnum + "," + ele[i].value;
			}
		}
		
		if(room.length > 0){
			room = room.substring(1);
			roomnum = roomnum.substring(1);
			roomOrNums = room + "|" + roomnum;
		}
		
		if (parseInt($('#maxnum').val())>0)
		{
		     roomOrNums = $('#maxnum').attr("name").replace("beds_r_","") + "|" + $('#maxnum').val();	
		}
		
		//starttime = "2012-11-10";
		
		var alertmsg = "<div id=\"alertDiv\" style=\"border:1px solid #499202; background:none repeat scroll 0 0 #FFFAEB;  width:500px;\"><div style=\"margin:30px 0 30px 0; width:250px; margin-left:140px; color:#D34D24; font-size:12px;\"><img src='http://img.qmango.com/nimages/channel-ajax-loader.gif' alt='正在加载数据中…' /><br/>请稍后，正在为您核实配额和房价，如果长时间无响应请尝试关闭后重新点击预定。<a href=\"javascript:CloseDiv();\" style='color:red;'>[关闭]</a></div></div>";
		alertWin('支付返回',alertmsg,500,0);
         //alert(hotelid+"--"+starttime+"--"+endtime+"--"+roomOrNums);
		$.ajax({url: '/share/channelsync.asp',
		   type: 'POST',
		   data:{ hotelid:hotelid,startdate:starttime,enddate:endtime,roomOrNums:roomOrNums },
		   dataType: 'text',
		   timeout: 600000,
		   async:true,
		   cache:false,
		   success: function(result){
			  // alert(result);
				if(result.indexOf("SUCCESS") != -1){
					form.submit();
					return true;
				}else{
					var closeHtml = "<a style='color:#D34D24;' href=\"javascript:CloseDiv();loadRoomlist('"+starttime+"','"+endtime+"');\">[关闭]</a>";
					var resultHtml = "<div style=\"margin:30px 0 30px 100px; width:300px; color:#D34D24; font-size:12px;\">";
					resultHtml = resultHtml + "非常抱歉，经核实您预定的以下日期房型暂时满房：";
					
					var dayRooms = result.split(",");
					
					resultHtml = resultHtml + "<ul style='border:1px solid #499202; margin-top:8px;'>";
					
					for(var i = 0; i < dayRooms.length; i++){
						if(dayRooms[i].length>0){
							resultHtml = resultHtml + "  <li " + (i==0 ? "" : "style='border-top:1px solid #499202;'") + " ><span style='width:80px; dispaly:block; float:left;'>"+dayRooms[i].split("|")[0]+"</span><span style='width:170px;dispaly:block; float:left;border-left:1px solid #499202;'>"+dayRooms[i].split("|")[1]+"</span><span style='width:50px; color:red;'>满房</span></li>";
						}
					}

					resultHtml = resultHtml + "</ul>";
					resultHtml = resultHtml + "<div style='text-align:right; margin-top:10px;'>"+closeHtml+"</div>";
					resultHtml = resultHtml + "</div>";
					
					$("#alertDiv").html(resultHtml);
					return false;
				}
		   }
		}); 
	
	}else{
	
		form.submit();
		return true;
	
	}	
}



//两步预订
function availFormCheckq(form,tqydts) {
	if (form.starttime.value.length==0){
		alert("请输入入住时间!!!");
		form.starttime.focus();
		return false
	}	
	if(!isDate(form.starttime.value)){
		alert("入住时间不符合格式规范或无效的日期!");
		form.starttime.focus();
		return false
	}
	
	if (form.endtime.value.length==0){
		alert("请输入离店时间!!!");
		showCalendar('imageCalendar2',false,'endtime',null,'setCheckOutDate');
		return false
	}	
	if(!isDate(form.starttime.value)){
		alert("离店时间不符合格式规范或无效的日期!");
		showCalendar('imageCalendar2',false,'endtime',null,'setCheckOutDate');
		return false
	}
	

	var	today = new Date();
	var	cmp_day = new Date(today.getYear(),today.getMonth(),today.getDate()+tqydts);
	if(parseDate(form.starttime.value,true).getTime()<cmp_day.getTime())
	{
		alert("目前本旅馆必须提前"+tqydts+"天预订，谢谢合作！!");
		form.starttime.focus();
		return false	
	}

	var ele = form.elements;
	var isSel = "false";
	var roomTypeNum = 0;
	var roomNumber = 0;
	for(ii=0;ii<ele.length;ii++)
		if (ele[ii].type == 'select-one' && ele[ii].name.indexOf('beds_') == 0 && ele[ii].selectedIndex > 0) {
				isSel = "true";
				roomTypeNum++;
				roomNumber = roomNumber+(parseInt(ele[ii].value) / 2);
			}	
			
	if( isSel == "false" )
	{
		alert ('请选择房间类型和人数');
		return false;
	}
	else
	{
		if($("#hide_resourceid").val() == "100"){
			//if(roomTypeNum>1){
				//alert ('对不起，该酒店一次只能预定一个房型，如需预定多个房型，请预定成功后再次选择预定！');
				//return false;	
			//}
			
			if(roomNumber>6){
				alert ('对不起，该酒店一次只能预定不超过6间房，如需预定更多间，请预定成功后再次选择预定！');
				return false;	
			}
		}
		
		//预订天数限制 begin
		var ydtsxzs = $("#hdnydtsxzs").val();
		var ydtsxze = $("#hdnydtsxze").val();
		var ydtsxzdays = $("#hdnydtsxzdays").val();
		var sjsdate = $("#starttime").val();
		var sjedate = $("#endtime").val();
		
		if(ydtsxzdays != "" && ydtsxzdays>$("#days").val()){
			if(ydtsxzs !="" && ydtsxze != "")
			{
				if((dateCompare(sjsdate,ydtsxzs) && dateCompare(ydtsxze,sjsdate)) || (dateCompare(sjedate,ydtsxzs) && dateCompare(ydtsxze,sjedate))){
					alert("在"+ ydtsxzs + "至" + ydtsxze + "时间段，最少需入住" + ydtsxzdays + "天");
					return false;
				}
			}else if(ydtsxzs != ""){
				if(dateCompare(sjedate,ydtsxzs)){
					alert("在"+ ydtsxzs + "之后，最少需入住" + ydtsxzdays + "天");
					return false;
				}
			}else{
				alert("最少需入住" + ydtsxzdays + "天");
				return false;
			}						
		}
		//预订天数限制 end 
		
		var sid = form.hdRestCard.value;
		if( sid == "" )
		{
			//alert('dddddd')
			return showLogin(form.name);
			//return alertWin('青芒果快速登录',"kldsflsjflsjf",600,400);
		} 
		else
		{
			
			form.submit();
			return true;
		}
	}
}
//两步预订

function formatDate(date) {
	var monthNames = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
	var str = date.getDate()+' '+monthNames[date.getMonth()]+' '+date.getFullYear();
	return str;
}


function isValidDate(dd,mm,yy) {
	// take numeric day, month, year and see if it's a valid date
	if (mm == 2 && (yy % 4 == 0 && dd > 29 || yy % 4 > 0 && dd > 28))	
		return false; // days in February
	else if ((mm == 4 || mm == 6 || mm == 9 || mm == 11) && dd == 31)
		return false; // months with 30 days
		
	var date =  new Date(yy,mm-1,dd); // -1 cos Jan == 0
	
	if (Date.parse(date) < Date.parse(today) || Date.parse(date) > Date.parse(maxdate))
	// date in the past or too far in the future?
		return false;
	
	return true;
}


function getPageScroll(){
var yScroll;
if (self.pageYOffset) {
yScroll = self.pageYOffset;
} else if (document.documentElement && document.documentElement.scrollTop){
yScroll = document.documentElement.scrollTop;
} else if (document.body) {
yScroll = document.body.scrollTop;
}
arrayPageScroll = new Array('',yScroll)
return arrayPageScroll;
}

function alertWin(title, msg, w, h){ 
var arrayPageScroll = getPageScroll();//调用getPageScroll()函数\
var titleheight = "1px"; // 提示窗口标题高度 
var bordercolor = "#666699"; // 提示窗口的边框颜色 
var titlecolor = "#FFFFFF"; // 提示窗口的标题颜色 
var titlebgcolor = "#666699"; // 提示窗口的标题背景色
var bgcolor = "#FFFFFF"; // 提示内容的背景色

var iWidth = document.documentElement.clientWidth; 
var iHeight = document.documentElement.clientHeight; 
var bgObj = document.createElement("div"); 
bgObj.id="show_login";
bgObj.style.cssText = "position:absolute;left:0px;top:0px;width:"+iWidth+"px;height:"+Math.max(document.body.clientHeight, iHeight+parseInt(arrayPageScroll[1]))+"px;filter:Alpha(Opacity=30);opacity:0.3;background-color:#000000;z-index:101;";
document.body.appendChild(bgObj); 


var iframeObj = document.createElement("iframe");
iframeObj.id="show_login1";
iframeObj.style.cssText = "position:absolute; visibility:inherit; top:0px; left:0px; width:"+iWidth+"px; height:"+Math.max(document.body.clientHeight, iHeight)+"px;filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';z-index:-1;";
document.body.appendChild(iframeObj); 

if(h==0){
	var msgObj=document.createElement("div");
	msgObj.id="show_login2";
	msgObj.style.cssText = "position:absolute;font:11px '宋体';top:"+700+"px;left:"+(iWidth-w)/2+"px;width:"+w+"px; text-align:center;border:0px solid "+bordercolor+";background-color:"+bgcolor+";padding:0px;line-height:22px;z-index:102;";
	document.body.appendChild(msgObj);
}else{
	var msgObj=document.createElement("div");
msgObj.id="show_login2";
msgObj.style.cssText = "position:absolute;font:11px '宋体';top:"+(parseInt(document.documentElement.clientHeight+h)+parseInt(arrayPageScroll[1])-3*h)+"px;left:"+(iWidth-w)/2+"px;width:"+w+"px;height:"+h+"px;text-align:center;border:0px solid "+bordercolor+";background-color:"+bgcolor+";padding:0px;line-height:22px;z-index:102;";
document.body.appendChild(msgObj);
	}

var table = document.createElement("table");
msgObj.appendChild(table);
table.style.cssText = "margin:0px;border:0px;padding:0px;";
table.cellSpacing = 0;


var tr = table.insertRow(-1);
/*
var titleBar = tr.insertCell(-1);
titleBar.style.cssText = "width:100%;height:"+titleheight+"px;text-align:left;padding:3px;margin:0px;font:bold 13px '宋体';color:"+titlecolor+";border:1px solid " + bordercolor + ";cursor:move;background-color:" + titlebgcolor;
titleBar.style.paddingLeft = "10px";
titleBar.innerHTML = title;
var moveX = 0;
var moveY = 0;
var moveTop = 0;
var moveLeft = 0;
var moveable = false;
var docMouseMoveEvent = document.onmousemove;
var docMouseUpEvent = document.onmouseup;
titleBar.onmousedown = function() {
   var evt = getEvent();
   moveable = true; 
   moveX = evt.clientX;
   moveY = evt.clientY;
   moveTop = parseInt(msgObj.style.top);
   moveLeft = parseInt(msgObj.style.left);
  
   document.onmousemove = function() {
    if (moveable) {
     var evt = getEvent();
     var x = moveLeft + evt.clientX - moveX;
     var y = moveTop + evt.clientY - moveY;
     if ( x > 0 &&( x + w < iWidth) && y > 0 && (y + h < iHeight) ) {
      msgObj.style.left = x + "px";
      msgObj.style.top = y + "px";
     }
    } 
   };
   document.onmouseup = function () { 
    if (moveable) { 
     document.onmousemove = docMouseMoveEvent;
     document.onmouseup = docMouseUpEvent;
     moveable = false; 
     moveX = 0;
     moveY = 0;
     moveTop = 0;
     moveLeft = 0;
    } 
   };
}
*/
var closeBtn = tr.insertCell(-1);
//closeBtn.style.cssText = "cursor:pointer; padding:2px;background-color:" + titlebgcolor;
closeBtn.innerHTML = "<span id='spanClose' style='color:"+titlecolor+";'></span>";
closeBtn.onclick = function(){ 
   document.body.removeChild(bgObj); 
   document.body.removeChild(msgObj); 
   document.body.removeChild(iframeObj); 
} 



var msgBox = table.insertRow(-1).insertCell(-1);
msgBox.style.cssText = "font:10pt '宋体';";
msgBox.colSpan = 2;
msgBox.innerHTML = msg;
return false;

    // 获得事件Event对象，用于兼容IE和FireFox
    function getEvent() {
     return window.event || arguments.callee.caller.arguments[0];
    }
} 

function CloseDiv()
{
//document.getElementById("spanClose").click();
document.body.removeChild(document.getElementById("show_login"));
document.body.removeChild(document.getElementById("show_login1"));
document.body.removeChild(document.getElementById("show_login2"));

}

function ChangeLoginTypeText(loginType)
{
	if( loginType == "restcard" )
	{
		document.getElementById("logintext").innerHTML = "会籍卡号";
	}
	else if( loginType == "userid" )
	{
		document.getElementById("logintext").innerHTML = "用户名";
	}
	else if( loginType == "mobile" )
	{
		document.getElementById("logintext").innerHTML = "手机";
	}
	else if( loginType == "email" )
	{
		document.getElementById("logintext").innerHTML = "电子邮箱";
	}
}

function showLogin(formName)
{
	/*
	var loginArea;
	loginArea = "<form name='frmLogin' method='post' onSubmit=\"return oncheckDivLogin('" + formName + "')\"><table border='1' width='100%'><tr><td width='50%'> "
	loginArea += "<table cellpadding='5' width='250'><tr><td><select name=rtype><option value='restcard'>青芒果会员卡号</option><option value='userid' selected>用户名</option> "
    loginArea += "<option value='mobile'>手机</option><option value='email'>邮件</option></select></td><td><input name='rlogins' type='text' size='20'></td></tr> "
    loginArea += "<tr><td>密　码：</td><td><input name='pwd' type='password' size='20' autocomplete='off'></td></tr><tr><td colspan='2'><input type='submit' name='Submit' value='登陆进站'>&nbsp;&nbsp;<input type='submit' name='Submit' value='取消'></form></td><tr>"
    loginArea += "<tr><td></td></tr></table></td><td width='50%' align='center'><a href=\"javascript:void(0)\" onclick=\"javascript:return BookWithOutLogin('" + formName + "')\">直接预订</a></td></tr></table>";
	*/
	//alert(document.forms[formName].hostel.value)
	var m=document.getElementsByTagName("select");
	var select_room="";
	
	for(ii=0;ii<m.length;ii++)
	{	
		select_room=m[ii].value+","+select_room;
		//alert(m[ii].value)
	}
	
	
	
	select_room=select_room.substr(0,select_room.length-1);
	var tp_days1=DateDiff($("#TP_Edate").val(),$("#TP_Sdate").val())+1;
	//alert(select_room)
	//alert(document.forms[formName].hostel.value)
    //addCookie("do_hotelId",document.forms[formName].hostel.value,"www.qmango.com",0);
	//addCookie("do_sdate",document.forms[formName].starttime.value,"www.qmango.com",0);
	//addCookie("do_edate",document.forms[formName].endtime.value,"www.qmango.com",0);
	//addCookie("do_days",document.forms[formName].days.value,"www.qmango.com",0);
	//addCookie("do_select_room",select_room,"www.qmango.com",0)
 	var selinfo=select_room+"||"+document.forms[formName].hostel.value+"||"+document.forms[formName].starttime.value+"||"+document.forms[formName].endtime.value+"||"+document.forms[formName].days.value+"||"+$("#TP_Sdate").val()+"||"+$("#TP_Edate").val()+"||"+tp_days1;
    if (!document.getElementById("maxnum"))
	{
    	selinfo=selinfo+"||0,beds_r_0";
	}
	else
	{
		selinfo=selinfo+"||"+document.getElementById("count").innerHTML+","+document.getElementById("maxnum").name;
	}
	
	
	//alert("open::::"+selinfo);
	//var thisUrl=document.URL;
	
	addCookie("selinfo",selinfo,"www.qmango.com",0);
	//BookWithOutLogin(formName);
	/*var thisUrl="http://www.qmango.com/ThirdPartLogin/Redirect/do.asp";
	
	
	var msg = ""; 
	
	msg+="<div class='box1'>";
	msg+="<form name='frmLogin' method='post' onSubmit=\"return oncheckDivLogin('" + formName + "')\">";
	msg+="<div class='bhead'><div class='tit'><div class='ticon'></div><div class='tw'>快登录啦</div></div><a  title='关闭' href='javascript:CloseDiv()'><div class='close'></div></a></div>";
	msg+="<div class='bmain'>";
	msg+="<div class='bml'><div class='lbox1'><label  style=' padding-right:18px; color:#666666;'>帐户:</label>";
	msg+="<input type='text' name='rlogins' id='rlogins'  value='手机号/邮箱/用户名/会员卡号' onclick='hiddenMes(this.id);' onblur='showMes(this.id);'  class='tx'  /></div>";
	msg+="<div class='lbox2'><label  style=' padding-right:18px; color:#666666;'>密码:</label><input type='password'   name='pwd' id='pwd' class='tx' value='' />";
	msg+="<label  style='padding-left:10px; color:#666666;'><a href='/users/passwordForget.asp' target='_blank'>忘记密码了</a></label> </div>";
	msg+="<div class='lbox3'><input type='image' src='/images/divLogin/denglu_btn.gif' width='60' height='25' border='0' align='absmiddle' /></div>";
	msg+=" <div class='lbox4'><div class='b4'><div class='icon1'></div><div style='margin-left:2px;'><a onmouseout='onOut()' onMouseOver='onOver()' href=/ThirdPartLogin/Redirect/s.asp?act=qq&selinfo="+encodeURI(selinfo) +">QQ</a></div></div><div class='mod_cb_jr_pop mod_cb_jr_pop1' id='caibei' style='display:none'><div class='pop_title'>QQ彩贝联盟商户</div><div class='pop_tips'>使用QQ无需注册，购物还可额外获得彩贝积分返还。<a class='pop_close' href='#'>我知道了</a></div><div class='pop_flag'></div></div><div class='b4'><div class='icon2'></div>";
	msg+="<div style='margin-left:2px;'><a href=/ThirdPartLogin/Redirect/s.asp?act=weibo&selinfo="+encodeURI(selinfo) +">新浪</a></div> </div><div class='b4'><div class='icon4'></div><div style='margin-left:0px;'><a href=/ThirdPartLogin/Redirect/s.asp?act=mango&selinfo="+encodeURI(selinfo) +">芒果网</a></div></div></div><div class='b4'><div class='icon3' style='margin-left:8px;'></div><div style='margin-left:2px;'><a href=/ThirdPartLogin/Redirect/s.asp?act=139&selinfo="+encodeURI(selinfo) +">139邮箱</a></div></div> </div>";
	msg+="<div class='bmr'>";
	msg+="<div class='rbox2'><input name='' type='submit' class='sub2' value=''  href='javascript:void(0)' onclick=\"javascript:return BookWithOutLogin('" + formName + "')\" /></div>";
	msg+="<div class='rbox3'> 您可以通过此通道进行快速预订</div></div></div></form></div>";
	
 
	return alertWin('青芒果快速登录',msg,691,291);*/
}


function showLogin1(obj)
{
	
	
	/*
	var loginArea;
	loginArea = "<form name='frmLogin' method='post' onSubmit=\"return oncheckDivLogin('" + formName + "')\"><table border='1' width='100%'><tr><td width='50%'> "
	loginArea += "<table cellpadding='5' width='250'><tr><td><select name=rtype><option value='restcard'>青芒果会员卡号</option><option value='userid' selected>用户名</option> "
    loginArea += "<option value='mobile'>手机</option><option value='email'>邮件</option></select></td><td><input name='rlogins' type='text' size='20'></td></tr> "
    loginArea += "<tr><td>密　码：</td><td><input name='pwd' type='password' size='20' autocomplete='off'></td></tr><tr><td colspan='2'><input type='submit' name='Submit' value='登陆进站'>&nbsp;&nbsp;<input type='submit' name='Submit' value='取消'></form></td><tr>"
    loginArea += "<tr><td></td></tr></table></td><td width='50%' align='center'><a href=\"javascript:void(0)\" onclick=\"javascript:return BookWithOutLogin('" + formName + "')\">直接预订</a></td></tr></table>";
	*/
	var selinfo="";//$("#hdnroomnum").val()+"||"+$("#hdnhotelid").val()+"||"+$("#hdnst").val()+"||"+$("#hdnet").val()+"||"+$("#hdnidays").val();
	


	



	var formName="1";
	
	var msg = ""; 
	
	
	msg+="<div class='box1' style='border:3px solid #555;'>";
	msg+="<div class='title'><h3>快速登录</h3><span id='msgShut' onclick='CloseDiv();' class='close'>关闭</span></div>";
	msg+="<div class='bmain'>";
	msg+="<form name='frmLogin' method='post' onSubmit=\"return oncheckDivLogin('" + formName + "')\">";
	msg+="<div class='bml' style='width:280px;'><div class='lbox1'><label  style=' padding-right:18px; color:#666666;'>登录名:</label>";
	msg+="<input type='text' name='rlogins' id='rlogins'  value='"+obj+"' onclick='hiddenMes(this.id);' onblur='showMes(this.id);'  class='tx'  /></div>";
	msg+="<div class='lbox2'><label style='padding-right:18px;color:#666666;'>密&nbsp;&nbsp;码:</label><input type='password' name='pwd' id='pwd' class='tx' value='' />";
	msg+="</div><div class='lbox3'><input type='submit' class='sub2' value='' /><label style='padding-left:10px; color:#666666;'>";
	msg+="<a href='/users/passwordForget.asp' target='_blank'>忘记密码了</a></label></div></div>";
	msg+="<div class='bmr'><div class='rbox1'>通过合作网站账号登录</div><div class='rbox2'>";
	
//	msg+="<div class='b4'><div class='icon1'></div><div style='margin-left:2px;'><a onmouseout='onOut()' onMouseOver='onOver()' href='/ThirdPartLogin/Redirect/s.asp?act=qq&selinfo="+getCookie("selinfo");
//	msg+="'>QQ</a></div></div><div class='mod_cb_jr_pop mod_cb_jr_pop1' id='caibei' style='display:none'><div class='pop_title'>QQ彩贝联盟商户</div><div class='pop_tips'>使用QQ无需注册，购物还可额外获得彩贝积分返还。<a class='pop_close' href='#'>我知道了</a></div><div class='pop_flag'></div></div>";
//	//msg+="<div class='b4'><div class='icon4'></div><div style='margin-left:2px;'><a href=/ThirdPartLogin/Redirect2/s.asp?act=mango&selinfo="+getCookie("selinfo");
//	//msg+=">芒果网</a></div></div>";
//	msg+="<div class='b4'><div class='icon2'></div><div style='margin-left:2px;'><a href=/ThirdPartLogin/Redirect/s.asp?act=weibo&selinfo="+getCookie("selinfo");
//	msg+=">新浪</a></div></div>";
	//msg+="<div class='b4'><div class='icon5'></div><div style='margin-left:2px;'><a href='https://www.alipay.com/cooperate/gateway.do?_input_charset=gb2312&amp;partner=2088201875076343&amp;return_url=http://www.qmango.com/users/return_url.asp&amp;service=user_authentication&amp;sign=0adf9837ffa45cdf51e3359159edbc03&amp;sign_type=MD5'>支付宝</a></div></div>";
	
	msg+="<ul class='login_link'><li><span class='btns qq'><s></s><a href='http://www.qmango.com/ThirdPartLogin/tencent/redirect.asp'>QQ</a></span></li><li><span class='btns mail139'><s></s><a href='http://www.qmango.com/ThirdPartLogin/weixin/redirect.asp'>微信</a></span></li><li><span class='btns sina'><s></s><a href='http://www.qmango.com/xlapi/index.asp'>新浪</a></span></li><li><span class='btns alipay'><s></s><a href='http://www.qmango.com/alipayauth/auth_authorize.asp'>支付宝</a></span></li></ul>";
	
	msg+="</div></div>";
	msg+="</form></div></div></div>";
	
 	
	return alertWin('青芒果快速登录',msg,523,254);
}

function showLogin_el(obj)
{
	
	
	/*
	var loginArea;
	loginArea = "<form name='frmLogin' method='post' onSubmit=\"return oncheckDivLogin('" + formName + "')\"><table border='1' width='100%'><tr><td width='50%'> "
	loginArea += "<table cellpadding='5' width='250'><tr><td><select name=rtype><option value='restcard'>青芒果会员卡号</option><option value='userid' selected>用户名</option> "
    loginArea += "<option value='mobile'>手机</option><option value='email'>邮件</option></select></td><td><input name='rlogins' type='text' size='20'></td></tr> "
    loginArea += "<tr><td>密　码：</td><td><input name='pwd' type='password' size='20' autocomplete='off'></td></tr><tr><td colspan='2'><input type='submit' name='Submit' value='登陆进站'>&nbsp;&nbsp;<input type='submit' name='Submit' value='取消'></form></td><tr>"
    loginArea += "<tr><td></td></tr></table></td><td width='50%' align='center'><a href=\"javascript:void(0)\" onclick=\"javascript:return BookWithOutLogin('" + formName + "')\">直接预订</a></td></tr></table>";
	*/
	var selinfo="";//$("#hdnroomnum").val()+"||"+$("#hdnhotelid").val()+"||"+$("#hdnst").val()+"||"+$("#hdnet").val()+"||"+$("#hdnidays").val();
	


	



	var formName="1";
	
	var msg = ""; 
	
	
	msg+="<div class='box1' style='border:3px solid #555;'>";
	msg+="<div class='title'><h3>快速登录</h3><span id='msgShut' onclick='CloseDiv();' class='close'>关闭</span></div>";
	msg+="<div class='bmain'>";
	msg+="<form name='frmLogin' method='post' onSubmit=\"return oncheckDivLogin_el('" + formName + "')\">";
	msg+="<div class='bml' style='width:280px;'><div class='lbox1'><label  style=' padding-right:18px; color:#666666;'>登录名:</label>";
	msg+="<input type='text' name='rlogins' id='rlogins'  value='"+obj+"' onclick='hiddenMes(this.id);' onblur='showMes(this.id);'  class='tx'  /></div>";
	msg+="<div class='lbox2'><label style='padding-right:18px;color:#666666;'>密&nbsp;&nbsp;码:</label><input type='password' name='pwd' id='pwd' class='tx' value='' />";
	msg+="</div><div class='lbox3'><input type='submit' class='sub2' value='' /><label style='padding-left:10px; color:#666666;'>";
	msg+="<a href='/users/passwordForget.asp' target='_blank'>忘记密码了</a></label></div></div>";
	msg+="<div class='bmr'><div class='rbox1'>通过合作网站账号登录</div><div class='rbox2'>";
	
//	msg+="<div class='b4'><div class='icon1'></div><div style='margin-left:2px;'><a onmouseout='onOut()' onMouseOver='onOver()' href='/ThirdPartLogin/Redirect/s.asp?act=qq&selinfo="+getCookie("selinfo");
//	msg+="'>QQ</a></div></div><div class='mod_cb_jr_pop mod_cb_jr_pop1' id='caibei' style='display:none'><div class='pop_title'>QQ彩贝联盟商户</div><div class='pop_tips'>使用QQ无需注册，购物还可额外获得彩贝积分返还。<a class='pop_close' href='#'>我知道了</a></div><div class='pop_flag'></div></div>";
//	//msg+="<div class='b4'><div class='icon4'></div><div style='margin-left:2px;'><a href=/ThirdPartLogin/Redirect2/s.asp?act=mango&selinfo="+getCookie("selinfo");
//	//msg+=">芒果网</a></div></div>";
//	msg+="<div class='b4'><div class='icon2'></div><div style='margin-left:2px;'><a href=/ThirdPartLogin/Redirect/s.asp?act=weibo&selinfo="+getCookie("selinfo");
//	msg+=">新浪</a></div></div>";
	//msg+="<div class='b4'><div class='icon5'></div><div style='margin-left:2px;'><a href='https://www.alipay.com/cooperate/gateway.do?_input_charset=gb2312&amp;partner=2088201875076343&amp;return_url=http://www.qmango.com/users/return_url.asp&amp;service=user_authentication&amp;sign=0adf9837ffa45cdf51e3359159edbc03&amp;sign_type=MD5'>支付宝</a></div></div>";
	
	msg+="<ul class='login_link'><li><span class='btns qq'><s></s><a href='http://www.qmango.com/ThirdPartLogin/tencent/redirect.asp'>QQ</a></span></li><li><span class='btns mail139'><s></s><a href='http://www.qmango.com/ThirdPartLogin/weixin/redirect.asp'>微信</a></span></li><li><span class='btns sina'><s></s><a href='http://www.qmango.com/xlapi/index.asp'>新浪</a></span></li><li><span class='btns alipay'><s></s><a href='http://www.qmango.com/alipayauth/auth_authorize.asp'>支付宝</a></span></li></ul>";
	
	msg+="</div></div>";
	msg+="</form></div></div></div>";
	
 	
	return alertWin('青芒果快速登录',msg,523,254);
}


function showMes(id,message){
	var obj = document.getElementById(id);
	 message=(message==null?obj.defaultValue:message);
	if(obj.value.trim()==""){
	    obj.value=message;
	    $("#"+id).removeClass("tx2");
		$("#"+id).addClass("tx");
	}
}

function hiddenMes(id,message){
    var obj = document.getElementById(id);
    message=(message==null?obj.defaultValue:message);
	if(obj.value==message){
	    obj.value="";
		$("#"+id).removeClass("tx");
	    $("#"+id).addClass("tx2");
	}
}

function oncheckDivLogin(formName)
{
	var rlogins=document.frmLogin.rlogins.value;
	var pwd = document.frmLogin.pwd.value; 
	if( rlogins == ""  || rlogins=="手机号/邮箱/用户名/会员卡号")
	{
		alert("请输入手机号/邮箱/用户名/会员卡号");
		document.frmLogin.rlogins.focus();
		return false;
	}
	if( pwd == "" )
	{
		alert("请输入密码");
		document.frmLogin.pwd.focus();
		return false;
	}
	var rtype; //document.frmLogin.rtype.value;GetRadioValue("rtype")
	//alert(username.length)
	//如果输入的是手机格式则是手机登录，如果是邮箱则是邮箱登录，如果是数字的且长度为8位的为卡号，否则为用户名,然后给rlogins传值去调用存储过程和以前一样的登录判断
	if (isMobile(rlogins))
	{	
		rtype="mobile";
	}else if (isEmail(rlogins))
	{
		rtype="email";
	}else if (isNumber(rlogins))
	{
		if (rlogins.length==8)
		{
			rtype="restcard";
		}
		else
		{
			rtype="userid";
		}
	}else
	{
		rtype="userid";
	}
	
	
	
	//alert(rtype)
	//return false;
	/*var rlogins = document.frmLogin.rlogins.value;
	var pwd = document.frmLogin.pwd.value;
	
	var promit=document.getElementById("logintext").innerHTML;
	
	if( rlogins == "" )
	{
		alert("请输入"+promit);
		return false;
	}*/

	//alert("formName:"+formName+";rlogins:"+rlogins+";rtype:"+rtype+";pwd:"+pwd)
	//return false;
	return DoLogin(formName,rlogins,rtype,pwd);
}

function getxmlhttp()
 {
   var xmlHttp=null;
   try
    {
     // Firefox, Opera 8.0+, Safari
     xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
     // Internet Explorer
     try
    {
     xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
     catch (e)
    {
     xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    }
   return xmlHttp;
 }

function oncheckDivLogin_el(formName)
{
	var rlogins=document.frmLogin.rlogins.value;
	var pwd = document.frmLogin.pwd.value; 
	if( rlogins == ""  || rlogins=="手机号/邮箱/用户名/会员卡号")
	{
		alert("请输入手机号/邮箱/用户名/会员卡号");
		document.frmLogin.rlogins.focus();
		return false;
	}
	if( pwd == "" )
	{
		alert("请输入密码");
		document.frmLogin.pwd.focus();
		return false;
	}
	var rtype; //document.frmLogin.rtype.value;GetRadioValue("rtype")
	//alert(username.length)
	//如果输入的是手机格式则是手机登录，如果是邮箱则是邮箱登录，如果是数字的且长度为8位的为卡号，否则为用户名,然后给rlogins传值去调用存储过程和以前一样的登录判断
	if (isMobile(rlogins))
	{	
		rtype="mobile";
	}else if (isEmail(rlogins))
	{
		rtype="email";
	}else if (isNumber(rlogins))
	{
		if (rlogins.length==8)
		{
			rtype="restcard";
		}
		else
		{
			rtype="userid";
		}
	}else
	{
		rtype="userid";
	}
	
	
	
	//alert(rtype)
	//return false;
	/*var rlogins = document.frmLogin.rlogins.value;
	var pwd = document.frmLogin.pwd.value;
	
	var promit=document.getElementById("logintext").innerHTML;
	
	if( rlogins == "" )
	{
		alert("请输入"+promit);
		return false;
	}*/

	//alert("formName:"+formName+";rlogins:"+rlogins+";rtype:"+rtype+";pwd:"+pwd)
	//return false;
	return DoLogin_el(formName,rlogins,rtype,pwd);
}

function DoLogin_el(formName,rlogins,rtype,pwd)
{

/*
*--------------- GetResultc(str) -----------------
* GetResult(str) 
* 功能:通过XMLHTTP发送请求,返回结果.
* 参数:str,字符串,发送条件.
* 实例:GetResult(document.all.userid.value);
* author:wanghr100(灰豆宝宝.net)
* update:2004-5-27 19:02
*--------------- GetResult(str) -----------------
*/

str="/ajax/iCheckLogin.asp?rlogins="+escape(rlogins)+"&rtype="+rtype+"&pwd="+pwd+"&isactvis=0";

//alert(str)

var oBao = getxmlhttp();
oBao.open("POST",str,false);
oBao.send();

//服务器端处理返回的是经过escape编码的字符串.
//通过XMLHTTP返回数据,开始构建Select.

return DealResult_el(formName,unescape(oBao.responseText));
}

function DoLogin(formName,rlogins,rtype,pwd)
{

/*
*--------------- GetResultc(str) -----------------
* GetResult(str) 
* 功能:通过XMLHTTP发送请求,返回结果.
* 参数:str,字符串,发送条件.
* 实例:GetResult(document.all.userid.value);
* author:wanghr100(灰豆宝宝.net)
* update:2004-5-27 19:02
*--------------- GetResult(str) -----------------
*/

str="/ajax/iCheckLogin.asp?rlogins="+escape(rlogins)+"&rtype="+rtype+"&pwd="+pwd+"&isactvis=0";

//alert(str)

var oBao = getxmlhttp();
oBao.open("POST",str,false);
oBao.send();

//服务器端处理返回的是经过escape编码的字符串.
//通过XMLHTTP返回数据,开始构建Select.

return DealResult(formName,unescape(oBao.responseText));
}


function DealResult_el(formName,returnText)
{
	//return false;
	if( returnText == "T" )
	{
		//alert("登录成功");
		//alert(document.forms[formName].action);
		//document.forms[formName].action= "/booking.asp"; 
		//alert(formName)
		if (formName==1)
		{
			//alert('booking刷新');
			//location.reload();
			location.href='/ThirdPartLogin/Redirect/s.asp?act=bookinglogin_el&selinfo='+getCookie("selinfo");
		}
		else
		{
		document.forms[formName].submit();
		}
		
		return false;
	}
	else if(returnText == "A")
	{
		alert('代理及代理名下会员不享受5折优惠活动，请返回重新选择');
		CloseDiv();
		window.location.reload();
		return false;
	}
	else if (returnText == "M")
	{
		alert('您是芒果网会员，请在芒果网登录');
		window.location.href='http://www.mangocity.com/mbrweb/thirdpartlogin/init.action?redirectUrl=http://www.mangocity.com/ThirdPartyLogin/qmango/qverify.action&tpId=1';
		return false;
	}
	else if (returnText == "H")
	{
		alert('帐户与密码不匹配/帐户不存在/登录身份不对');
		return false;
	}
	else
	{
		alert("帐户和密码不符");
		return false;
	}

}



function DealResult(formName,returnText)
{
	//return false;
	if( returnText == "T" )
	{
		//alert("登录成功");
		//alert(document.forms[formName].action);
		//document.forms[formName].action= "/booking.asp"; 
		//alert(formName)
		if (formName==1)
		{
			//alert('booking刷新');
			//location.reload();
			location.href='/ThirdPartLogin/Redirect/s.asp?act=bookinglogin&selinfo='+getCookie("selinfo");
		}
		else
		{
		document.forms[formName].submit();
		}
		
		return false;
	}
	else if(returnText == "A")
	{
		alert('代理及代理名下会员不享受5折优惠活动，请返回重新选择');
		CloseDiv();
		window.location.reload();
		return false;
	}
	else if (returnText == "M")
	{
		alert('您是芒果网会员，请在芒果网登录');
		window.location.href='http://www.mangocity.com/mbrweb/thirdpartlogin/init.action?redirectUrl=http://www.mangocity.com/ThirdPartyLogin/qmango/qverify.action&tpId=1';
		return false;
	}
	else if (returnText == "H")
	{
		alert('帐户与密码不匹配/帐户不存在/登录身份不对');
		return false;
	}
	else
	{
		alert("帐户和密码不符");
		return false;
	}

}

function BookWithOutLogin(formName)
{
	//alert(getCookie("selinfo"))
	//return false;
	document.forms[formName].submit();
	return false;
}

function getCookie(c_name)
	{
	if (document.cookie.length>0)
	  {
	  c_start=document.cookie.indexOf(c_name + "=")
	  if (c_start!=-1)
		{ 
		c_start=c_start + c_name.length+1 
		c_end=document.cookie.indexOf(";",c_start)
		if (c_end==-1) c_end=document.cookie.length
		return unescape(document.cookie.substring(c_start,c_end))
		} 
	  }
	return ""
	}

function addCookie(objName,objValue,domain,objHours){//添加cookie
   var str = objName + "=" + escape(objValue);
   if(objHours > 0){//为0时不设定过期时间，浏览器关闭时cookie自动消失
    var date = new Date();
    var ms = objHours*3600*1000;
    date.setTime(date.getTime() + ms);
    str += "; expires=" + date.toGMTString();
	str += "; domain=" + domain;
   }
   document.cookie = str;
   //alert("添加cookie成功"+str);
}
function isMobile(obj)
{
	var reg = new RegExp('^1[34578][0123456789][0-9]{8}$','');
	if (obj.search(reg)==-1)
	{
		var regHK = new RegExp('^[96][0-9]{7}$','');
		if (obj.search(regHK)==-1)
		{
			//alert("2");
			return false;
		}
		else
		{
			//alert("1");
			return true;
		}
	}
	else
	{
		//alert("3");
		return true;
	}
}

function isEmail(obj) {   
    var strEmail=obj;   
    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)   
    {              
            return true;   
    }else{   
            return false;   
    }   
}
function isNumber(obj){
 	var reg;
	reg=/^\d+$/;
	if (reg.test(obj))
	{
		return true;
	}
	else
	{
		return true;
	}
}
function onOver(){
//alert('ddd');
	document.getElementById("caibei").style.display="";
}
	
function onOut(){
//alert('ddxxxd');
	document.getElementById("caibei").style.display="none";
}

function showregister()
{
	var msg = ""; 
	msg+="<div class='box1' style='border:3px solid #555;'>";
	msg+="<div class='title'><h3>快速注册</h3><span id='msgShut' onclick='CloseDiv();' class='close'>关闭</span></div>";
	msg+="<div style='margin-left:40px; text-align:left;'><form method='post' onsubmit='return onregistersubmit(this)' name='f11'>";
    msg+="<div class='inputWrap'><label style='margin-left:12px;'>手机号：</label><input type='text' onblur=\"javascript:CheckInfo('m',this.value);\" id='mobile' name='mobile' class='txtin w115'><span id='font_mobile'><span class='red'>*</span><span class='gray'>用于接收订单信息</span></span></div>";
	msg+="<div class='inputWrap'><label style='margin-left:12px;'>邮&nbsp;&nbsp;箱：</label><input type='text' onblur=\"javascript:CheckInfo('e',this.value);\" id='email' name='email' class='txtin w115'><span id='font_email'><span class='red'>*</span><span class='gray'>用于接收订单信息</span></span></div>";
    msg+="<div class='inputWrap'><label>登陆密码：</label><input type='password' onblur='javascript:check_pwd();' id='input_pwd' name='pwd' class='txtin w115'><span id='font_pwd'><span class='red'>*</span><span class='gray'>设置登录密码</span></span></div>";
	msg+="<div class='inputWrap'><label>确认密码：</label><input type='password' onblur='javascript:check_confirm();' id='input_confirm' name='pwd1' class='txtin w115'><span id='font_confirm'><span id='font_confirm' class='red'>*</span><span class='gray'>设置确认密码</span></span></div>";
    msg+="<div class='inputWrap'><input type='submit' name='' value='' class='subbtnA'><span class='red' style=' margin-left:20px;'>注册即送"+$("#redbag").html()+"元红包，红包可以抵扣订金！</span></div>";  
	msg+="</form></div></div>";
	return alertWin('青芒果快速注册',msg,522,252);
}
// JS函数功能：ajax方式处理会员注册邮箱，手机等的信息重复和有效判断 
function CheckInfo(type,value)
{
	if(!isMobile(value) && type == "m"){
   		$("#font_mobile").html("<b style='color:red;font-size:14px;'>×&nbsp;</b>请填写正确的手机号");
		return false;
	}
	if(!isEmail(value) && type == "e"){
		$("#font_email").html("<b style='color:red;font-size:14px;'>×&nbsp;</b>请填写正确的联系email");
		return false;
	}
	$.ajax({url: 'users/ajax/checkInfo.asp',
		type: 'GET',
		data:{t:type,v:value},
		dataType: 'html',
		timeout: 10000,
		error: function(){
			return false;
		},
		success: function(result){
			if(result == "1"){
				switch(type){
					case "e":
						$("#font_email").html("<b style='color:red;font-size:14px;'>×&nbsp;</b><font color='red'>邮箱已经存在，请重新输入</font>");
						return false;
						break;
					case "m":
						$("#font_mobile").html("<b style='color:red;font-size:14px;'>×&nbsp;</b><font color='red'>此手机已经注册使用，请<a onclick=\"javascript:registerLog('15919442661')\" href='javascript:void(0)'><font class='b_login'>登录</font></a></font>");
						return false;
						break;
				}
			}else if (result == "0"){
				return false;
			}
			switch(type){
				case "e":
					$("#font_email").html("<img src='http://img.qmango.com/right.jpg' border='0' />");
					break;
				case "m":
					$("#font_mobile").html("<img src='http://img.qmango.com/right.jpg' border='0' />");
					break;
			}
		}
	});
}
function registerLog(mobile)
{
	CloseDiv();
	showLogin1(mobile);	
}
//JS函数功能：检查输入的密码是否一致
function check_pwd(){
    if ($("#input_pwd").val().length !== 0){
	    if ($("#input_pwd").val().length <6){
			 $("#font_pwd").html("<b style='color:red;font-size:14px;'>×&nbsp;</b>请输入您的登陆密码，密码长度至少6位");
			return false;
		}
	    $("#font_pwd").html("<img src='http://img.qmango.com/right.jpg' border='0' />");
		if ($("#input_confirm").val().length !== 0){
		    if ($("#input_pwd").val() ==  $("#input_confirm").val()){
			    $("#font_confirm").html("<img src='http://img.qmango.com/right.jpg' border='0' />");
			}else{
			    $("#font_confirm").html("<b style='color:red;font-size:14px;'>×&nbsp;</b><font color='red'>确认密码和输入密码不一致，请重新输入</font>");
			}
		}
	}else{
	    $("#font_pwd").html("<b style='color:red;font-size:14px;'>×&nbsp;</b>请输入您的登陆密码，密码长度至少6位");
		if ($("#input_confirm").val().length == 0){
		    $("#font_confirm").html("<b style='color:#FF6600'>*</b>");
		}
	}
}
function check_confirm(){
    if ($("#input_pwd").val().length !== 0){
	    if ($("#input_pwd").val().length <6){
			 $("#font_pwd").html("<b style='color:red;font-size:14px;'>×&nbsp;</b>请输入您的登陆密码，密码长度至少6位");
			return false;
		}
	    $("#font_pwd").html("<img src='http://img.qmango.com/right.jpg' border='0' />");
		if ($("#input_confirm").val().length !== 0){
		    if ($("#input_pwd").val() ==  $("#input_confirm").val()){
			    $("#font_confirm").html("<img src='http://img.qmango.com/right.jpg' border='0' />");
			}else{
			    $("#font_confirm").html("<b style='color:red;font-size:14px;'>×&nbsp;</b><font color='red'>确认密码和输入密码不一致，请重新输入</font>");
			}
		}
	}else{
	    $("#font_pwd").html("<b style='color:red;font-size:14px;'>×&nbsp;</b>请输入您的登陆密码，密码长度至少6位");
		if ($("#input_confirm").val().length == 0){
		    $("#font_confirm").html("<b style='color:#FF6600'>*</b>");
		}
	}
}
function onregistersubmit(){
	var mobile = $("#mobile").val();
	var pwd = $("#input_pwd").val();
	if(!isMobile($("#mobile").val())){
   		alert("请填写正确的手机号");
		return false;
	}
	if(!isEmail($("#email").val())){
		alert("请填写正确的联系email");
		return false;
	}
	if($("#input_pwd").val().length < 6 || $("#input_confirm").val().length < 6 || $("#input_pwd").val() !=  $("#input_confirm").val()){
		alert("确认密码和输入密码须一致，且长度至少6位！");
		return false;
	}
	//ajax注册用户
	var str = "mobile=" + escape(mobile) + "&email=" + escape($("#email").val()) + "&pwd=" + escape(pwd) + "&redbag=" + escape($("#redbag").html());
	$.ajax({        
		url : "users/ajax/register.asp",
		data:str,	
		dataType: 'HTML',
		type : 'POST',
		error: function(){
			return false;
		},
		success : function(data){
			if(data > 0){
				CloseDiv();
				DoLogin(1,mobile,"mobile",pwd);
			}else if(data == "-1"){
				alert("邮箱已经存在，请重新输入！");
				return false;
			}else if(data == "-2"){
				alert("此手机已经注册使用，请重新输入！");
				return false;
			}
		}
	});	
	return false;
}


function dateCompare(startdate,enddate){   
	var aDate, oDate1, oDate2, iDays;   
	aDate = startdate.split("-");   
	oDate1 = new Date(aDate[0],aDate[1]-1,aDate[2]);   
	aDate = enddate.split("-");   
	oDate2 = new Date(aDate[0],aDate[1]-1,aDate[2]);   
	       
	iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 /24);     
	if((oDate1 - oDate2)<0){   
		return false;   
	 }else{   
	    return true;  
	 }
}