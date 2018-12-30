$(document).ready(function(){  
  timeinit('',''); //初始化日历控件
  
  $(".city_list ul li").find("a").click(function(){
	   $(this).parent().addClass("current").siblings().removeClass("current");
	   var li_num =$(".city_list ul li a");    
	   var index = li_num.index(this);
	   $(".mb_bd .picwrap").eq(index).show().siblings().hide();
  })
  
    $(".db_nav li").find("a").click(function(){
	   $(this).addClass("current").parent().siblings().find("a").removeClass("current");
	   var li_num =$(".db_nav li a");    
	   var index = li_num.index(this);
	   $(".db_content_wrap .db_content").eq(index).show().siblings().hide();
  })
    
  $(".item_icon").hover(function() {
		$(this).fadeTo("fast", 0.6);
	}, function() {
		$(this).fadeTo("fast", 1);
	});
  
  
});


$(document).ready(function(){
	
	$(".selected_city").click(function(){
		$(this).next(".list_item").show();
		return false;
	});
	
	$(".selected_city").hover(function() {
		$(this).parent(".select_list").addClass("hover");
	}, function() {
		$(this).parent(".select_list").removeClass("hover");
	});
	
	$(document).bind("click",function(e){
		var target  = $(e.target);
		if(target.closest(".list_item").length == 0){
			$(".list_item").hide();
		}
	});
	
	$(".db_content").find("a").click(function(){
		var a_text=$(this).html();
		$(this).parent().parent().parent().parent().find(".selected_city em").html(a_text);
		$(".list_item").hide();
		dbsort();
	})
	
	
	$(".picinner a").hover(function() {
		$(this).find(".hotelcom").show();
		$(this).find(".textbg").fadeTo("fast", 0.6);
		$(this).find(".picover").fadeTo("fast", 1);
	}, function() {
		$(this).find(".hotelcom").hide();
		$(this).find(".textbg").fadeTo("fast", 0.3);
		$(this).find(".picover").fadeTo("fast", 0.6);
	});
	
	 function getNumb(){
        var num = new Array();
        for(var i = 0; i < 8; i++){
            var val =  Math.ceil(Math.random() * 8);
            var isEqu = false;
            for(var idx in num){
                if(num[idx] == val){isEqu = true; break;}
            }
            if(isEqu)
                i--;
            else
                num[num.length] = val;
        }
        return num;
    }
	
	function dbsort(){
	  var y=$(".db_item li").length;
	  var x=0;
	  var i=0;

	  var num = new Array();
	  for(var i = 0; i < 8; i++){
		var val =  Math.floor(Math.random() * 8);
		var isEqu = false;
		for(var idx in num){
		  if(num[idx] == val){isEqu = true; break;}
		}
	  if(isEqu)
		i--;
	  else
		num[num.length] = val;
	  }
	  
	  var db_xy=new Array();
	  $(".db_item li").each(function(){	
		db_xy[x]=$(".db_item li").eq(x).position().left;
		x=x+1;
	  })
	  for (var k=0; k<8; k++)
	  {
	  $(".db_item li").eq(num[k]).animate({left:db_xy[k] }, "slow"); 
	  }
	  
	}
	 
	
	
	var index_soso = $(".search_fields").find("input");
	index_soso.focus(function(){
	$(this).addClass("input_focus");
	}).focusout(function(){
		$(this).removeClass("input_focus");
	})//输入框focus变色;
	
	
	$("#dibiaolist span").click(function(){
		var cityid = $("#h_cityid").val();
		window.location.href="/landmark/index.asp?cityid="+cityid+"&classid="+$(this).attr("t");
	});
	
	$("#hot_city a").click(function(){
		$("#sel_city").html($(this).text());
		$("#h_cityid").val($(this).attr("city"));
	});
	
});

$(document).ready(function(){
	
	function step(step_id,step_top){
		var step_box=$(step_id);
		var step_box_wd=$(step_id).width();
		var wScroll=(document.documentElement.scrollWidth>document.documentElement.clientWidth) ? document.documentElement.scrollWidth : document.documentElement.scrollWidth;
		if(step_id=="#step01"){
		step_box.css("left",(wScroll-step_box_wd)/2);
		}else if(step_id=="#step02"){
		step_box.css("left",(wScroll-step_box_wd)-(wScroll-1200)/2-44);
		}else if(step_id=="#step03"){
		step_box.css("left",(wScroll-step_box_wd)-(wScroll-1200)/2-228);
		}else if(step_id=="#step04"){
		step_box.css("left",(wScroll-step_box_wd)-(wScroll-1200)/2-119);
		}else if(step_id=="#step05"){
		step_box.css("left",(wScroll-step_box_wd)-(wScroll-1200)/2-104);
		}else if(step_id=="#step06"){
		step_box.css("left",(wScroll-step_box_wd)/2);
		}
		step_box.show();
		step_box.animate({top:step_top}, "slow"); 
	}
	
	
	function myguide(){
	  var wScroll=(document.documentElement.scrollWidth>document.documentElement.clientWidth) ? document.documentElement.scrollWidth : document.documentElement.scrollWidth;
	  var hScroll=(document.documentElement.scrollHeight>document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.scrollHeight;
      var isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;
	  //var scrollY=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	  if (wScroll>1240){
		 $(".maskbg").height(hScroll).width(wScroll);
	     $(".maskbg").show();
         step("#step01",200);
		 $(".step_next").click(function(){
		  var parent_name=$(this).parent().attr("id");
		  if (parent_name=="step01"){
			  $("#step01").hide();
			  step("#step02",0);
		  }else if(parent_name=="step02"){
			  $("#step02").hide();
			  step("#step03",0);   
		  }else if(parent_name=="step03"){
			  $("#step03").hide();
			  step("#step04",0);  
		  }else if(parent_name=="step04"){
			  $("#step04").hide();
			  //$('html, body').animate({scrollTop: $(document).height()}, 300);
			  step("#step05",42);  
		  }else if(parent_name=="step05"){
			  $("#step05").hide();
			  //$('html, body').animate({scrollTop:0}, 300); 
			  step("#step06",200);  
		  }else if(parent_name=="step06"){
			  $("#step06").hide();
			  $(".maskbg").hide();  
		  }
	     })
       }
	  $(".step_close").click(function(){
		  $(".maskbg").hide();
		  $(".step").hide();
	  })

	}
	
	//写入Cookie，key为键，value是值  
	//duration过期时间（天为单位，默认1天） 
	function addCookie(objName,objValue,objHours){      //添加cookie  
		 var str = objName + "=" + escape(objValue);  
		 if(objHours > 0){                               //为时不设定过期时间，浏览器关闭时cookie自动消失  
			 var date = new Date();  
			 var ms = objHours*24*60*60*1000;  
			 date.setTime(date.getTime() + ms);  
			 str += "; expires=" + date.toGMTString();  
		}  
		document.cookie = str;  
	 }  

	function readCookie(key)  
	{  
	   var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));  
	   if (arr != null){
		   return decodeURIComponent(arr[2]);  
	   }
	   return "";  
	}; 

	if(readCookie("isShowYD") == ""){
		//myguide();
		addCookie("isShowYD","1",30);
	}

});//guide

;(function($){
	$.fn.lubo=function(options){
		return this.each(function(){
            var _lubo=jQuery('.lubo');
            var _box=jQuery('.lubo_box');
            var _this=jQuery(this); // 
            var luboHei=_box.height();
            var Over='mouseover';
            var Out='mouseout';
            var Click='click';
            var Li="li";
            var _cirBox='.cir_box';
            var cirOn='cir_on';
            var _cirOn='.cir_on';
            var cirlen=_box.children(Li).length; //圆点的数量  图片的数量
            var luboTime=3500; //轮播时间
            var switchTime=700;//图片切换时间
            cir();

			//根据图片的数量来生成圆点

			function cir(){

				_lubo.append('<ul class="cir_box"></ul>');

				var cir_box=jQuery('.cir_box');

				for(var i=0; i<cirlen;i++){

					cir_box.append('<li style="" value="'+i+'"></li>');
				}

				var cir_dss=cir_box.width();

				cir_box.css({

					// left:'50%',

					// marginLeft:-cir_dss/2,

					bottom:'10%' ,
					right:'10%' 

				});

				cir_box.children(Li).eq(0).addClass(cirOn);

			}

		
		//定时器

			 int=setInterval(clock,luboTime);

			 function clock(){

			 	var cir_box=jQuery(_cirBox);

			 	var onLen=jQuery(_cirOn).val();	

				_box.children(Li).eq(onLen).stop(false,false).animate({

					opacity:0

				},switchTime,function(){
					 $(this).hide();
				 });

				if(onLen==cirlen-1){

				 		onLen=-1;

				 	}

				_box.children(Li).eq(onLen+1).show().stop(false,false).animate({

					opacity:1

				 },switchTime);
				
				cir_box.children(Li).eq(onLen+1).addClass(cirOn).siblings().removeClass(cirOn);
			 	
			 }

		// 鼠标在图片上 关闭定时器
			
			_lubo.bind(Over,function(){

				clearTimeout(int);

			});

			_lubo.bind(Out,function(){

				int=setInterval(clock,luboTime);

			});

		//鼠标划过圆点 切换图片

			jQuery(_cirBox).children(Li).bind(Over,function(){

				var inde = jQuery(this).index();

				jQuery(this).addClass(cirOn).siblings().removeClass(cirOn);

				_box.children(Li).stop(false,false).animate({

					opacity:0

				},switchTime,function(){
					 $(this).hide();
				 });

				_box.children(Li).eq(inde).show().stop(false,false).animate({

					opacity:1

				},switchTime);

			});


		});

	}
	
})(jQuery);