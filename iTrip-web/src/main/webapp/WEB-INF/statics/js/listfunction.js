function Request(strName){  
 var strHref =location.href;  
 var intPos = strHref.indexOf("?");  
 var strRight = strHref.substr(intPos + 1);  
 var arrTmp = strRight.split("&");  
 for(var i = 0; i < arrTmp.length; i++) {  
 var arrTemp = arrTmp[i].split("=");  
 if(arrTemp[0].toUpperCase() ==strName.toUpperCase()) return arrTemp[1];  
 }  
 return "";  
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString()+";path=/")
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

//组装html
//obj:封装对象
//str:需拆分的内容
//obj:指定长度，到达指定长度另起一行
//flage:类别
function create_html(obj,str,flage)
{
	var temp_category="";
	var temp_more="";
	var temp_value="";
	var arrlist="";
	var icount=1;
	
	if(flage=="city")
	{
		temp_category="行政区";
		temp_more="更多区域";
		arrlist=arrlist+"<li class='radio_item'><label><input name='c_city' type='radio' value='' checked='CHECKED'>不限</label></li>";
	}
	else if(flage=="tag")
	{
		temp_category="热门位置";
		temp_more="车站/机场";
		arrlist=arrlist+"<li class='radio_item'><label><input name='c_hot' type='radio' value='' checked='CHECKED'>不限</label></li>";
	}
	//<ul class="cate_list fl">
	temp_value="<strong>"+temp_category+"</strong>";
	temp_value=temp_value+"<ul class='cate_list fl'>";
	
	var josn_data=eval('('+str+')');
	$(josn_data).each(function(){
		
		if(icount<=8)
		{
			arrlist=arrlist+"<li class='radio_item'><label><input name='c_city' type='radio' value='"+this.id+"'>"+unescape(this.name)+"</label></li>";
		}
		else
		{
			arrlist=arrlist+"<dd><a href='javascript:void(0)' onclick='ff("+this.id+")'>"+unescape(this.name)+"</a></dd>";
		}
		
		if(icount==4)
		{
			arrlist=arrlist+"</ul><ul class='cate_list fl'>";
		}
		else if(icount==8)
		{
			arrlist=arrlist+"<li class='pop_item'>";
			arrlist=arrlist+"<a href='javascript:void(0)' class='more_item popup'>"+temp_more+"<s class='i_more'></s></a>";
			arrlist=arrlist+"<div class='popup_box' style='display:none; width:300px;'>";
			arrlist=arrlist+"<div class='pop_area'>";
			arrlist=arrlist+"<div class='pop_title'><span>"+temp_category+"</span><s class='pop_close'>关闭</s></div>";
			arrlist=arrlist+"<dl>";
		}
		icount=icount+1;
	});
	 arrlist=arrlist+"</dl></div></div></li></ul>";
	 
	 obj.html(temp_value+arrlist);
	 fd();
}

function fd()
{
	$(".popup").click(function(){
		$(this).parent().parent().parent().siblings().find(".popup_box").hide();
		var x_position = $(this).position();
		$(this).next(".popup_box").css({ "left":x_position.left,"top": x_position.top+29});
		$(this).next(".popup_box").show();
		return false;
	})
	$(document).bind("click",function(e){
		var target  = $(e.target);
		if(target.closest(".popup_box").length == 0){
			$(".popup_box").hide();
		}
	})
	$(".pop_close").click(function(){
		$(this).parent().parent().parent().hide();
	})
	$(".popup_box").find("a").click(function(){
			$(this).parent().parent().parent().parent().hide();
	})//更多筛选弹出
}

//日期格式化 yy-MM-dd
function DateFormat(x,y) {
var z = {M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()};
y = y.replace(/(M+|d+|h+|m+|s+)/g,function(v) {return ((v.length>1?"0":"")+eval('z.'+v.slice(-1))).slice(-2)});
return y.replace(/(y+)/g,function(v) {return x.getFullYear().toString().slice(-v.length)});
}

function onchecksignupx(f)
{
	var	today = new Date();
	var	cmp_day
	cmp_day = today.getTime() + 1*43200000
	if (f.starttime.value.length==0){
		alert("请输入入住时间!!!");
		return false
	}	
	if(!isDate(f.starttime.value)){
		alert("入住时间不符合格式规范或无效的日期!");
		return false
	}
	if(parseDate(f.starttime.value,true).getTime()<cmp_day)
	{
		alert("目前本站旅馆必须提前1天预订，谢谢合作！!");
		return false	
	}
	return true 					
}

function GetResult(str)
{
/*
*--------------- GetResult(str) -----------------
* GetResult(str) 
* 功能:通过XMLHTTP发送请求,返回结果.
* 参数:str,字符串,发送条件.
* 实例:GetResult(document.all.userid.value);
* author:wanghr100(灰豆宝宝.net)
* update:2004-5-27 19:02
*--------------- GetResult(str) -----------------
*/
var oBao;

if(window.ActiveXObject)
{
	oBao=new ActiveXObject("Microsoft.XMLHTTP");
}
else if(window.XMLHttpRequest)
{
	oBao=new XMLHttpRequest();
}

oBao.open("POST","/ajax/ajax_inputkeylist.asp?cityid="+str,false);
oBao.send();
//服务器端处理返回的是经过escape编码的字符串.
//通过XMLHTTP返回数据,开始构建Select.
return unescape(oBao.responseText);
}

//根据搜索关键字查找
function GetResultNew(cityid,str)
{
/*
*--------------- GetResult(str) -----------------
* GetResult(str) 
* 功能:通过XMLHTTP发送请求,返回结果.
* 参数:str,字符串,发送条件.
* 实例:GetResult(document.all.userid.value);
* author:wanghr100(灰豆宝宝.net)
* update:2004-5-27 19:02
*--------------- GetResult(str) -----------------
*/
var oBao;

if(window.ActiveXObject)
{
	oBao=new ActiveXObject("Microsoft.XMLHTTP");
}
else if(window.XMLHttpRequest)
{
	oBao=new XMLHttpRequest();
}

oBao.open("POST","/ajax/ajax_inputkeylist.asp?cityid="+cityid+"&keyword="+str+"&_v="+ new Date().getTime(),false);
oBao.send();
//服务器端处理返回的是经过escape编码的字符串.
//通过XMLHTTP返回数据,开始构建Select.
return unescape(oBao.responseText);
}

//当城市改变时重新读取关键字里面的信息
function ChangeCityKeyList()
{
	$.ajax({url: '/ajax/ajax_changecitylist.asp',
		type: 'GET',
		contentType: 'text; charset=gb2312',
		data:{cityid:$.trim($("#city_id").attr("value"))},
		dataType: 'text',
		timeout: 30000,
		error: function(){
		},
		success: function(a){
			var josntxt=eval(''+a+'');
			var hot_locationlist=josntxt[0].hot_location;
			var hot_businesslist=josntxt[0].hot_business;
			var hot_trafficlist=josntxt[0].hot_traffic;
			
			
			if(josntxt.length>0)
			{
				//热门位置
				$("#hot_location").html('<dt>热门位置</dt>');
				if(hot_locationlist.length>0)
				{
					for(var l in hot_locationlist)
					{
						$("#hot_location").append('<dd><a href="javascript:void(0)" name="'+hot_locationlist[l].tagid+'|tag" title="'+unescape(hot_locationlist[l].tagname)+'">'+unescape(hot_locationlist[l].tagname).substring(0,5)+'</a></dd>');
					}
					$("#hot_location").css("display","block");
				}
				else
				{
					$("#hot_location").css("display","none");
				}
				
				//车站/机场
				$("#hot_traffic").html('<dt>车站/机场</dt>');
				if(hot_trafficlist.length>0)
				{
					for(var t in hot_trafficlist)
					{
						$("#hot_traffic").append('<dd><a href="javascript:void(0)" name="'+hot_trafficlist[t].tagid+'|tag" title="'+unescape(hot_trafficlist[t].tagname)+'">'+unescape(hot_trafficlist[t].tagname).substring(0,5)+'</a></dd>');
					}
					$("#hot_traffic").css("display","block");
				}
				else
				{
					$("#hot_traffic").css("display","none");
				}
				
				//地铁线路
				$("#hot_business").html('<dt>地铁线路</dt>');
				if(hot_businesslist.length>0)
				{
					for(var b in hot_businesslist)
					{
						$("#hot_business").append('<dd><a href="javascript:void(0)" name="'+hot_businesslist[b].tagid+'|tag" title="'+unescape(hot_businesslist[b].tagname)+'">'+unescape(hot_businesslist[b].tagname).substring(0,5)+'</a></dd>');
					}
					$("#hot_business").css("display","block");
				}
				else
				{
					$("#hot_business").css("display","none");
				}
				//alert(josntxt[0].hot_business.length);
			}
		}
	  })
}

function comptime(beginTime, endTime) {

    var beginTimes = beginTime.substring(0, 10).split('-');
    var endTimes = endTime.substring(0, 10).split('-');

    //parse方法要求短日期可以使用“/”或“-”作为分隔符，但是必须用月/日/年的格式来表示
    //使用"/"兼容IE和Firefox
    beginTime = beginTimes[1] + '/' + beginTimes[2] + '/' + beginTimes[0] + '/ ' + beginTime.substring(10, 19);
    endTime = endTimes[1] + '/' + endTimes[2] + '/' + endTimes[0] + '/ ' + endTime.substring(10, 19);

    var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;

    if (a <= 0) {
        alert("您的离店日期必须大于入住日期，请重新填写入住日期和离店日期");
        return - 1;
    }else {
        return 1;
    }
}

//比较两个日期（日期的格式会有格式不同的情况）
function getcomptime(beginTime, endTime) {

    var beginTimes = beginTime.substring(0, 10).split('-');
    var endTimes = endTime.substring(0, 10).split('-');

    //parse方法要求短日期可以使用“/”或“-”作为分隔符，但是必须用月/日/年的格式来表示
    //使用"/"兼容IE和Firefox
    beginTime = beginTimes[1] + '/' + beginTimes[2] + '/' + beginTimes[0] + '/ ' + beginTime.substring(10, 19);
    endTime = endTimes[1] + '/' + endTimes[2] + '/' + endTimes[0] + '/ ' + endTime.substring(10, 19);

    var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;

    return a;
}

function setDefaultDate(d){
  document.getElementById("date").value = d.format("%y-%M-%d");
  var temp_time=new Date();
  temp_time=d.dateAdd("d",1);
  document.getElementById("date2").value = temp_time.format("%y-%M-%d");
}

function GetDateDiff(startDate,endDate) 
{ 
	var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime(); 
	var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime(); 
	var dates = Math.abs((startTime - endTime))/(1000*60*60*24); 
	return dates; 
}

function check_city_existed(cityName, isbabel){
	var existed = false;
	var cityInfo = null;
	var labelarg = "0";

	if(isbabel == true){ labelarg = "1"; }
	$.ajax({async : false, type : "GET",
		url:"/ajax/ajax_getcityinfo.asp",
		data : "cityname=" + escape(cityName) + "&l=" + labelarg + "&tmp=" + (new Date()).valueOf(),
		success : function(data){
			try{
				var info = eval('(' + data + ')');				
				if(typeof(info.id) != "undefined" && info.id != "" && info.id != "0"){
					existed = true;
					cityInfo = info;
				}else{
					existed = false;
				}
			}catch(err){
				existed = false;	
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown){
			alert(textStatus);
		}
	});
	return {IsExisted : existed, CityInfo : cityInfo};
}

function gettagdata(v)
{
	$.ajax({url: '/ajax/ajax_tagdata.asp',
		type: 'GET',
		contentType: 'text; charset=gb2312',
		data:{cityid:$.trim($("#city_id").attr("value")),v:v},
		dataType: 'text',
		timeout: 30000,
		error: function(){
		},
		success: function(a){
			var josntxt=eval(''+a+'');
			
			'<dd><a href="#">罗湖车站</a></dd>';
		}
	})
}

//记录点击数
function inserttaghits(keywords)
{
	var cityid=$.trim($("#city_id").attr("value"));
	var cityname=$.trim($("#city").val());
	if(keywords.length>0 && (keywords!="关键词/酒店名/景点/位置" || keywords!="关键字"))
	{
		$.ajax({url: '/ajax/ajax_qmsearch_new.asp',
			type: 'GET',
			contentType: 'text; charset=gb2312',
			data:{cityid:cityid,cityname:escape(cityname),keywords:escape(keywords)},
			dataType: 'text',
			timeout: 30000,
			error: function(){
			},
			success: function(a){}
		})
	}
}

function clearkeyword()
{
	var inputval=$.trim($("#keywords").val());
	if(inputval!="关键词/酒店名/景点/位置")
	{
		$("#keywords").val('关键词/酒店名/景点/位置');
		$("#keywords").addClass('input_key');
	}
}

//切换城市查询
function search_hotel()
{
	var city_id=$.trim($("#city_id").attr("value"));
		var tag_id=$.trim($("#tag_id").attr("value"));
		var oldcity=$.trim($("#oldcity").attr("value"));
		var surl="";
		if(tag_id=="关键词/酒店名/景点/位置")
		{
			tag_id="0"
		}
		if(city_id.length==0)
		{
			city_id=1;
		}
		if(tag_id.length==0)
		{
			tag_id="0";
		}
		
		var s = $("#date").val();
		var e = $("#date2").val();
		
		var re_time_value=comptime(s,e);
		if(re_time_value==-1){
			return false;
		}
		
		if($("#city").val() != "香港"){
			var days = GetDateDiff(new Date().toDateString(),s);
			var days1 = GetDateDiff(new Date().toDateString(),e);
			var diffdate = GetDateDiff(new Date().toDateString(), new Date().dateAdd("n",2).toDateString());
			
			if(days>diffdate || days1>diffdate){
				var mydate = new Date().dateAdd("d",1);
				setDefaultDate(mydate);
				alert("内地酒店只能提前两个月预定！");	return false;
			}
		}
		
		var checkCityName = "";
		var checkLabelName = "";
		var inputCity = $("#city").val();
		var cityInfo;
		
		if(inputCity.indexOf('(') > -1){
			var infos = inputCity.split('(');
			checkLabelName = $.trim((infos[0]));	
		}else{
			checkCityName = inputCity;
		}

		cityInfo = check_city_existed(inputCity, false);	
		if(cityInfo.IsExisted == false && checkLabelName != ""){
			cityInfo = check_city_existed(checkLabelName, true);
		}
		
		if(cityInfo.IsExisted == false){
			alert("您输入目的地不存在！");
			return false;	
		}
		if($.trim($("#keywords").val())=="关键词/酒店名/景点/位置")
		{
			tag_id="0";
		}
		inserttaghits($.trim($("#keywords").val()));
		var reg=new RegExp("%","g"); //创建正则RegExp对象     
		var input_key;
		if($.trim($("#keywords").val())=="关键词/酒店名/景点/位置" && checkLabelName.length>0)
		{
			input_key=escape($.trim(checkLabelName));
		}
		else
		{
			input_key=$.trim($("#keywords").val())=="关键词/酒店名/景点/位置"?'0':escape($.trim($("#keywords").val()));
		}
		input_key=input_key.replace(reg,"QMG");
		setCookie("input_city",$("#city").attr("value"),1);
		setCookie("start_time",s,1);
		setCookie("end_time",e,1);
		if(tag_id=="0" && input_key=="0")
		{
			surl='/city_'+city_id+'.html';
		}
		else
		{
			if(tag_id == "0" || tag_id.length == 0){
				surl='/hotellist_'+city_id+'_'+tag_id+'_0_0_0_1_0_false_false_0_'+input_key+'.html';
			}else{surl='/hotellist_'+city_id+'_'+tag_id+'_0_0_0_1_distance_false_false_0.html';}
		}
		setTimeout(function(){window.location.href = surl;},"50")
}

function show_total()
{
	if($("#hotelnum").attr("value")>0)
	{
		var mfanrate=$("#roomful").attr("value")/$("#hotelnum").attr("value")*100;
		var mfstr="";
		mfanrate=mfanrate/100;

		var v = (Math.random()*2+1) + "";
		var icount = v.charAt(0);
		strlist = new Array
		strlist[1] = '立刻预订享受<b><a href="http://www.qmango.com/special/low2010/" target="_blank">红包+奖金</a></b>双重超值优惠！';
		strlist[2] = '立刻预订享受<b><a href="http://www.qmango.com/special/low2010/" target="_blank">酒店价格全网最低</a></b>双重超值优惠！';
		
		if(mfanrate>=60 || $("#hotelnum").attr("value")<10 ){mfstr='，房源紧张，提早预订享受<b><a href="http://www.qmango.com/special/low2010/" target="_blank">红包+奖金</a></b>双重超值优惠！';}else{mfstr='，'+strlist[icount];}
		$(".view_total").find("span").html("共找到<b class='red'>"+$("#hotelnum").attr("value")+"</b>家酒店"+mfstr);
	}
}