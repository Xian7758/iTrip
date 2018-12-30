$(document).ready(function(){
	timeinit('','');
	var labelFromcity = new Array();
	labelFromcity ['热门'] = new Array();
	labelFromcity ['ABCD'] = new Array(70,73,71,77,845,0,81,84,79,62,17,86,3,75,201,87,371,89,91,82,568,221,770,5,58,94,92,238);
	labelFromcity ['EFGHJ'] = new Array(99,104,100,316,21,20,26,116,342,13,4,33,30,107,117,123,319,3553,48,260,203,292,63,34,121,124,119,76,118);
	labelFromcity ['KLMN'] = new Array(22,140,141,299,25,29,128,131,134,46,50,130,142,135,66,138,137,8,147,220,143,144,145,38,146);
	labelFromcity ['PQRSTW'] = new Array(6,64,154,317,3925,258,40,1,31,18,10,32,156,164,158,165,157,171,166,2,49,350,27,175,177,9,246,179,174,180);
	labelFromcity ['XYZ'] = new Array(14,35,7,23,56,3916,53,233,181,11,193,187,45,322,228,52,188,195,16,19,199,15,200,12,210,211,214,208,217);
	//labelFromcity ['海外'] = new Array(4853,4854,4855,4856,4857,4858,4859);	
    //labelFromcity ['X-Z'] = new Array(2,19,20,21,26,27,39);
    //labelFromcity ['国际城市'] = new Array(41,42,43,44,45,46,47,48,49);
	//var hotList = new Array(14,15,16,17,18,19);
	//$('#fromcity').querycity({'data':citysFlight,'tabs':labelFromcity,'hotList':hotList});
	
	//2016-9-19 hezhongquan
    var labelFromcity2 = new Array();
    labelFromcity2 ['目的地'] = new Array(2,1,0,4,3,17,5,12,8,10,6,9,14,45,175);
	//labelFromcity2 ['目的地'] = new Array(0,1,8,2,4,5,53,12,26,61,128,11,10,98,4602);
	$('#city').querycity({'data':citysFlight,'tabs':labelFromcity,'tabs2':labelFromcity2});
	
	$('#keywords').querykey({'data':keybiao,'tabs':labelFromcity});
	
	//首页旅游产品所有区域 
	$("#city2").querycity_mall({'data':citysFlight,'tabs':labelFromcity,'tabs2':labelFromcity2});
	
	//首页旅游产品全部分类
	$("#type2").focus(function(){
	    $("#mall_type").show();
	});
	$(".mt_list a").click(function(){
	    $("#type2").val($(this).text());
	    $("#mall_type").hide();
	});
	$("#mall_s").click(function(e){
        e.stopPropagation();
        ("#mall_type").show();
    });
    $("body").click(function(){
        if($("#mall_type").is(":visible")){
            $("#mall_type").hide();
        }
    });	
	

	
	
	$("#keywords").click(function(){
	//var resultstr=GetResult($.trim($("#city_id").attr("value")));
    //		resultstr=eval(''+resultstr+'');
    //		if(resultstr.length>0)
    //		{
    //			for(var ikey=0; ikey<resultstr.length; ikey++)
    //			{
    //				keybiao[ikey]=new Array(''+resultstr[ikey].hid+'|'+resultstr[ikey].datatype+'',''+resultstr[ikey].hname+'','','');
    //			}
    //			$('#keywords').querykey({'data':keybiao,'tabs':labelFromcity});
    //		}
		    //$('#keywords').val('');
    })
	
	
	//根据城市ID查询城市名称
	//if($.trim($("#city_id").attr("value")).length>0)
//	{
//	$.ajax({url: '/ajax/ajax_inputkeylist.asp',
//		type: 'GET',
//		contentType: 'text; charset=gb2312',
//		data:{cityid:$.trim($("#city_id").attr("value"))},
//		dataType: 'text',
//		timeout: 30000,
//		error: function(){
//		},
//		success: function(a){
//		//var keybiao=new Array();
//		
//	})
//	}
	//var x_position = $(".input_city").offset();
	//$(".pop_city").css({ "left":x_position.left,"top": x_position.top+29});
	//$(".list_city").css({ "left":x_position.left,"top": x_position.top+29});
	
	
	// 2015-06-24
	$('.mod-box-tabs span').hover(function(){
		$(this).addClass('span-active').siblings().removeClass('span-active');
		$('#mod-box-tabs .mod-box-content').hide().eq($(this).index()).show();
	},function(){
		//$(this).removeClass('span-active');
	});
	
});//城市选择



function t(d){
    //alert(d.format("%y-%M-%d %h:%m:%s"));
    document.getElementById("date").value = d.format("%y-%M-%d");
    var temp_time=new Date();
    temp_time=d.dateAdd("d",1);
    document.getElementById("date2").value = temp_time.format("%y-%M-%d");
}
function t2(d){
    //alert(d.format("%y-%M-%d %h:%m:%s"));
    document.getElementById("date2").value = d.format("%y-%M-%d");
}

	var cal = new Calendar();
	
function timeinit(sdate,sedate)
{
    cal.init({
    id:0,
    size:2,
    rows:1,
    cols:2,
    range:{start:null, end:null, disabled:false},
    namespace:'cal',
    bind : [{
    ref:'date',
    input:'date',
    handler : t,
    args : []
    },{
    ref:'date2',
    input:'date2',
    handler : t2,
    args : []
    }],
    offsetX:0,
    offsetY:39,
    bindNext:false,
    showToday:false
    });
    var theYear;
    var theMonth;
    var theDate;
    var chose_date;
    var chose_edate;
    var start_date;
    var end_date;
    var show_date;
    var show_edate;
    theYear = (new Date()).getFullYear();
    theMonth = (new Date()).getMonth();
    theDate = (new Date()).getDate();
    chose_date = (theMonth +1) + "/" + (theDate + 1) + "/" + theYear;
    chose_edate = (theMonth +1) + "/" + (theDate + 2) + "/" + theYear;
    start_date = new Date(theYear,theMonth,theDate + 1);
    end_date = new Date(theYear,theMonth,theDate + 2);
    show_date = start_date.getFullYear() + "-" + (start_date.getMonth() + 1) + "-" + start_date.getDate();
    show_edate = end_date.getFullYear() + "-" + (end_date.getMonth() + 1) + "-" + end_date.getDate();
    //$('#date').simple_Datepicker({chosendate:chose_date,startdate:theYear,enddate:theYear + 2});
    //$('#date2').simpleDatepicker({chosendate:chose_edate,startdate:theYear,enddate:theYear +2});
    if(sdate.length==0 && sedate.length==0)
	{
		$('#date').val(show_date);
		$('#date2').val(show_edate);
	}
	else
	{
		$('#date').val(sdate);
		$('#date2').val(sedate);
	}
}

$(document).ready(function(){
  var k_pop_focus = false;
  var k_suggest_focus = false;
  var k_suggest_page_click = false;
  var popKey = $(".keywords_pop")
  var inputkey=$(".input_key");
  var x_height = $(".input_key").innerHeight()+2;
 
  $(".input_key").focus(function(){
	  if(k_suggest_page_click){
		  k_suggest_page_click = false;
		  return true;
	  }
	  
	  if($.trim(this.value)=='' || $.trim(this.value)=="关键词/酒店名/景点/位置"){
	  var x_position = $(".input_key").offset();
	  
	  $(".keywords_pop").css({ "left":x_position.left,"top": x_position.top+x_height});
	  var reg_cityid = new RegExp("^[0-9]*$");
	  if($("#city_id").attr("value")>=0 && $("#city_id").attr("value").length>0 && reg_cityid.test($("#city_id").attr("value")))
	  {
	  $(".keywords_pop").show();
	  }
	  }else{
	      var x_position = $(".input_key").offset();

	  $(".keywords_pop").css({ "left":x_position.left,"top": x_position.top+x_height});
		  this.select();
		  $(".keywords_pop").show();
		  return;
		  }
  }).live('click',function(){		
	  if(k_suggest_page_click){
		  k_suggest_page_click = false;
		  return true;
	  }
	  if($.trim(this.value)=='' || $.trim(this.value)=="关键词/酒店名/景点/位置"){
	  var x_position = $(".input_key").offset();

	  $(".keywords_pop").css({ "left":x_position.left,"top": x_position.top+x_height});
	  //加载关键字信息
	  $(".keywords_pop").show();
	  }else{
		  	  var x_position = $(".input_key").offset();

	  $(".keywords_pop").css({ "left":x_position.left,"top": x_position.top+x_height});
		  this.select();
		  $(".keywords_pop").show();
		  return;
		  }	
  }).live('blur',function(){			
	  if(k_pop_focus == false){
		  $(".keywords_pop").hide();			
	  }
  }).keydown(function(event){
            popKey.hide();
  });
  
  $(".keywords_list").find('a').live('click',function(){
	  $("#tag_id").attr("value",$(this).attr("name"));
	  $(".input_key").val($(this).attr("title"));
	  t_pop_focus = true;
	  popKey.hide();
	  //search_hotel();
  });

  popKey.mouseover(function(){	
	  k_pop_focus = true;
  }).mouseout(function(){	
	  k_pop_focus = false;
  });
  

		
//  $(".input_key").click(function(){
//	var x_position = $(".input_key").offset();
//	$(".keywords_pop").css({ "left":x_position.left,"top": x_position.top+29});
//	$(".keywords_pop").show();
//  })
})//关键字

//设置Tag值
function setTag(cityname,tagId,tagName){
	$("#tag_id").val(tagId+"|tag");
	setTimeout(function(){ document.getElementById("city").value=cityname; },300);
	setTimeout(function(){ document.getElementById("keywords").value=tagName; },300);
}
//设置Keyword值
function setKeyword(cityname,keyword){
	$("#tag_id").val("");
	setTimeout(function(){ document.getElementById("city").value=cityname; },300);
	setTimeout(function(){ document.getElementById("keywords").value=keyword; },300);
}



