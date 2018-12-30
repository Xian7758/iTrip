function SlyarErrors() {  
return true; 
 }  
window.onerror = SlyarErrors; 

//判断字符串的长度【中文算2个，英文或字母算一个】
function CheckStringLength(inputString) {
    var cArr = inputString.match(/[^x00-xff]/ig);
    return inputString.length + (cArr == null ? 0 : cArr.length);

}


//判断是否包含特殊字符
function CheckSpecChar(strValue,strChr)
{
    if( strValue.indexOf(strChr)>=0 )
    {
        return true;
    }  
    return false;
}

//检查注册昵称是否包含特殊字符
function CheckNickNameSpecChar(strValue)
{
    var array1 = new Array("!","！",".","。","#","＃","￥","……","-","－","*","（","）","(",")","http","HTTP"); //声明数组 
    for (var i=0; i<=array1.length; i++)
    {
        if( CheckSpecChar(strValue,array1[i]) ==  true )
        {
            return false;
        }
    }
    
    return true;
}

//检查是否由数字和字母组成
function CheckIsNoAndChar(strValue)
{
    if ( strValue.match(/\W/) == null && strValue.indexOf("_") < 0 ) 
    { 
        return true;
    }
    else
    {
        return false;
    }
}

//检查是否由数字组成
 function CheckIsNumber(oNum)
 {
    if(!oNum) return false;
    var strP=/^\d+(\.\d+)?$/;
    if(!strP.test(oNum)) return false;
    try{
        if(parseFloat(oNum)!=oNum) return false;
    }
    catch(ex)
    {
        return false;
    }
  return true;
}


//判断是否由整数组成
function CheckIsInt( str ){ 
if( str == "0" ) return false;
//var regu = /^[-]{0,1}[0-9]{1,}$/; 
var regu = /^[0-9]{1,}$/; 
return regu.test(str); 
} 


//判断是否是邮箱格式
//邮箱检验	
function IsEmail (theStr) 
{
        var atIndex = theStr.indexOf ('@');
        var dotIndex = theStr.indexOf ('.', atIndex);
        var flag = true;
        var theSub = theStr.substring (0, dotIndex + 1);
        if ((atIndex < 1) || (atIndex != theStr.lastIndexOf ('@')) || (dotIndex < atIndex + 2) || (theStr.length <= theSub.length))
        {
                flag = false;
        }
        else { flag = true; }
        return (flag);
}

//判断是否日期格式(如 2007-1-1);
function IsDate(str) 
{ 
  var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
  if(r==null)return false; 
  var d= new Date(r[1], r[3]-1, r[4]); 
  return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]); 
}


//检查是否Url
function IsUrl(url)
{
	var regex=/^(http:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- \.\/?%&=]*)?$/i;
	var result = regex.test(url);
	return result;
}




//判断是否select选中
/*
参数：
selectname:	selelct 的name
*/
function CheckIsSelect(selectname)
{
	var ckName = selectname;
	var el = document.getElementsByTagName('input');     
	var len = el.length;   
	var IsCheck = false; 
	for(var i=0; i<len; i++)     
	{          
		if( ( (el[i].type=="checkbox") || (el[i].type=="radio")) && (el[i].name==ckName))         
		{  
			if( el[i].checked == true )
			{
				IsCheck = true;
			}
		}
	}
	return IsCheck;
}


//全部选择
function CheckAll(TagName)
{
	//alert(document.getElementsByTagName('ck_check').checked);
	//document.getElementById("ck_clear").checked = false;
	
	var ckName = TagName;
	var el = document.getElementsByTagName("input");
	//alert( document.elements[TagName].length);
	
	var len = el.length;
	for(var i=0; i<len; i++)
	{
		if((el[i].type=="checkbox") && (el[i].name==ckName))
		{
			el[i].checked = true;
		}
	}
}
//全部取消
function CleanAll(TagName)
{
	//document.getElementById("ck_check").checked = false;
	//document.getElementsByTagName(ckCheckName).checked = false;
	var ckName = TagName;
	var el = document.getElementsByTagName('input');
	var len = el.length;
	for(var i=0; i<len; i++)
	{
		if((el[i].type=="checkbox") && (el[i].name==ckName))
		{
			el[i].checked = false;
		}
	}
}

//全部显示
function ShowAllCheck(TagName)
{
	//alert(document.getElementsByTagName('ck_check').checked);
	//document.getElementById("ck_clear").checked = false;
	
	var ckName = TagName;
	var el = document.getElementsByTagName("input");
	//alert( document.elements[TagName].length);
	
	var len = el.length;
	for(var i=0; i<len; i++)
	{
		if((el[i].type=="checkbox") && (el[i].name==ckName))
		{
			el[i].style.display = '';
		}
	}
}


//全部隐藏
function HideAllCheck(TagName)
{
	//alert(document.getElementsByTagName('ck_check').checked);
	//document.getElementById("ck_clear").checked = false;
	
	var ckName = TagName;
	var el = document.getElementsByTagName("input");
	//alert( document.elements[TagName].length);
	
	var len = el.length;
	for(var i=0; i<len; i++)
	{
		if((el[i].type=="checkbox") && (el[i].name==ckName))
		{
			el[i].style.display = 'none';
		}
	}
}

//获取radio选中的值
function GetRadioValue(radioname){
	var rd= document.getElementsByName(radioname);
	var key="";
	for(i=0;i<rd.length;i++)
	{
		if(rd[i].checked==true)
		{
			key=rd[i].value;
		}
	}
	return key;
}

//设置radio的值
function   SetRadioValue(radioname,value)
{
	var   objs=document.getElementsByName(radioname);
	for(var   i=0;i<objs.length;i++)
	{
		if(objs[i].value==value)
		{
			objs[i].checked=true
			break;
		}
	}
}

//设置radio为不可用
function disableObj(object)
{
	var obj = document.getElementsByName(object);
	for(var i = 0; i < obj.length; i++)
	{
		obj[i].disabled = true;
	}
}

//设置radio为可用
function enableObj(object)
{
	var obj = document.getElementsByName(object);
	for(var i = 0; i < obj.length; i++)
	{
		obj[i].disabled = false;
	}
}



//检查textarea字数是否超出范围
function CheckTextAreaLength(textAreaID,InfoAreaID,value,length){
	var l=strlength(value);
	if (l<=length) {
		if ( document.getElementById(InfoAreaID)) {
			document.getElementById(InfoAreaID).innerHTML=(length-l);
		}
	}
	else
	{
		//document.getElementById("byte1").innerText="输入字节数超出范围"
		document.getElementById(textAreaID).value = mSubstr(value,length); //value.substring(0, length);

	}
	return true

}
/* textarea字符限制函数(end) */

//粘贴到手写板
function Clip(text,msg){
	//str=eval("document." + text)
	//str.select()
	//str = document.selection.createRange();
	clipboardData.setData('text',(text));
	if( msg != ""){
		//ShowAlert(msg,"","");
		alert(msg);
	}
}

//自动消失的DIVMsg
function MyMsgDiv()
{
    this.msgDiv = null;
    //this.msgStyle = "FONT-SIZE:12px;LEFT:expression(this.offsetParent.scrollLeft+20);COLOR:#ffffff;LINE-HEIGHT:150%;POSITION:absolute;TOP:expression(this.offsetParent.scrollTop+10);BACKGROUND-COLOR:#7f1ef6;";
    //this.ffMsgStyle = "FONT-SIZE:12px;LEFT:20px;COLOR:#ffffff;LINE-HEIGHT:150%;POSITION:absolute;TOP:10px;BACKGROUND-COLOR:#7f1ef6;";
	this.msgStyle = "FONT-SIZE:18px;position:absolute;width:300px;height:60px;left:50%;top:50%;z-index:1;background-color:orange;;color:fff;margin-left:-150px;margin-top:-32px";
    this.createDiv = function()
    {
        this.msgDiv = document.createElement("div");
        if(window.XMLHttpRequest)
        {
            this.msgDiv.style.cssText = this.msgStyle;
			
        }
        else
        {
            this.msgDiv.style.cssText = this.msgStyle;
		   
        }
        document.body.insertBefore(this.msgDiv, document.body.childNodes[0]);
    }
    
    this.Show = function(msgstr)
    {
        this.msgDiv.innerHTML = "&nbsp;" + msgstr + "&nbsp;";
    }
    
    this.createDiv(); //放置此处是为了防止以下的md值为null 
    
    var closetime;
    var md = this.msgDiv;
    this.Show = function(msg,showtime)
    {
        md.innerHTML ="&nbsp;"+msg+"&nbsp;";
        md.style.visibility = "visible";
        if(closetime)window.clearTimeout(closetime);
        closetime=setTimeout(this.Hidden,showtime*1000);
    }

    this.Hidden = function()
    {
        md.innerHTML = "";
        md.style.visibility = "hidden";
    }
}

String.prototype.trim=function(){
        return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim=function(){
        return this.replace(/(^\s*)/g,"");
}
String.prototype.rtrim=function(){
        return this.replace(/(\s*$)/g,"");
}


//自动缩小图片
function DrawImage(ImgD,FitWidth,FitHeight){
var image=new Image();
image.src=ImgD.src;
if(image.width>0 && image.height>0){
if(image.width/image.height>= FitWidth/FitHeight){
if(image.width>FitWidth){
ImgD.width=FitWidth;
ImgD.height=(image.height*FitWidth)/image.width;
}else{
ImgD.width=image.width;
ImgD.height=image.height;
}
}
else{
if(image.height>FitHeight){
ImgD.height=FitHeight;
ImgD.width=(image.width*FitHeight)/image.height;
}else{
ImgD.width=image.width;
ImgD.height=image.height;
}
}
}
}

function addFavorites(title, url){
try{
	window.external.AddFavorite(url, title);
}
catch (e){
	try{
		window.sidebar.addPanel(title, url, "")
	   }
	catch (e) 
	{
		alert("收藏失败，请使用Ctrl+D进行添加!");
	}
}
}

