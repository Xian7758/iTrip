(function($){
    $.querycity = function(input,options){
        var input = $(input);
        input.attr('autocomplete','off');
        if($.trim(input.val())=='' || $.trim(input.val())==options.defaultText){ 
            input.val(options.defaultText).css('color','#aaa');
        }
        var t_pop_focus = false;
        var t_suggest_focus = false;
        var t_suggest_page_click = false;
        $('body').append("<div id='pop_city_"+input.attr('id')+"' class='pop_city' style='display:none'><div class='c_title'><span></span></div><div class='list_label_wrap'><ul class='list_label clearfix'></ul></div><div class='pop_city_container'></div></div>");
		
        $('body').append("<div id='suggest_city_"+input.attr('id')+"' class='list_city' style='display:none'><div class='list_city_head'></div><div class='list_city_container'></div><div class='page_break'></div></div>");
        var popMain = $("#pop_city_"+input.attr('id'))
        var popContainer = popMain.find('.pop_city_container');
        var labelMain = popMain.find('.list_label');
        var suggestMain = $("#suggest_city_"+input.attr('id'));
        popMain.bgIframe();
        suggestMain.bgIframe();
        popInit();
        resetPosition();
		
		ChangeCityKeyList(); //初始化地标 
        
        $(window).resize(function(){
            resetPosition();
        });        
        
        input.focus(function(){
            if(t_suggest_page_click){
                t_suggest_page_click = false;
                return true;
            }
            suggestMain.hide();
		    if($.trim($(this).val())==options.defaultText){
			    $(this).val('').css('color','#000');
	    	}
			this.select();
		    popMain.show();
        }).click(function(){		
            if(t_suggest_page_click){
                t_suggest_page_click = false;
                return;
            }
			this.select();
            suggestMain.hide();
		    popMain.show();		
	    }).blur(function(){				
		    if(t_pop_focus == false){
			    popMain.hide();				
			    if($.trim(input.val())=='' || $.trim(input.val())==options.defaultText){				
				    input.val(options.defaultText).css('color','#aaa');
			    }
		    }
	    });
        labelMain.find('a').live('click',function(){	
		    input.focus();//使焦点在输入框，避免blur事件无法触发
		    t_pop_focus = true;
		    var labelId = $(this).attr('id');
		    labelMain.find('li a').removeClass('current');
		    $(this).addClass('current');
		    popContainer.find('ul').hide();
		    $("#"+labelId+'_container').show();
	    });
	    popContainer.find('a').live('click',function(){
		    input.val($(this).html());
			$("#city_id").attr("value",$(this).attr("value"));
			ChangeCityKeyList();
		    popMain.hide();
			clearkeyword();
			//search_hotel();
	    });
	    popMain.mouseover(function(){	
		    t_pop_focus = true;
	    }).mouseout(function(){	
		    t_pop_focus = false;
	    });

        input.blur(function(){
		    if( t_suggest_focus == false ){
			    if($(this).val()==''){
				    $(this).val( suggestMain.find('.list_city_container a.selected').children('b').text().split("，")[0]);
					$("#city_id").attr("value",suggestMain.find('.list_city_container a.selected').children('b').attr("value"));
					//ChangeCityKeyList();
			    }
			suggestMain.hide();
		    }
        }).keydown(function(event){
            popMain.hide();
    		event = window.event || event;
	    	var keyCode = event.keyCode || event.which || event.charCode;		
		    if (keyCode == 37) {//左
                prevPage();    
            } else if (keyCode == 39) {//右
                nextPage();
            }else if(keyCode == 38){//上
                prevResult();
            }else if(keyCode == 40){//下
                 nextResult();
            }
    	}).keypress(function(event){
            event = window.event || event;
            var keyCode = event.keyCode || event.which || event.charCode;
            if(13 == keyCode){
                if(suggestMain.find('.list_city_container a.selected').length > 0){
                    
					if(suggestMain.find('.list_city_container a.selected').attr('data-type') && suggestMain.find('.list_city_container a.selected').attr('data-type') == 0){
						input.val(suggestMain.find('.list_city_container a.selected').children('b').text().split("，")[1]);
						clearkeyword();
						$('#keywords').val(suggestMain.find('.list_city_container a.selected').children('b').text().split("，")[0]);
					}else{
						input.val(suggestMain.find('.list_city_container a.selected').children('b').text().split("，")[0]);
						clearkeyword();
					}
					$("#city_id").attr("value",suggestMain.find('.list_city_container a.selected').children('b').attr("value"));
					ChangeCityKeyList();
                    suggestMain.hide();
					//clearkeyword();
                }
            }
        }).keyup(function(event){
            event = window.event || event;
            var keyCode = event.keyCode || event.which || event.charCode;        
            if(keyCode != 13 && keyCode != 37 && keyCode != 39 && keyCode !=9 && keyCode !=38 && keyCode !=40 ){
			    //keyCode == 9是tab切换键
                queryCity(); 
            }
        });
      
        suggestMain.find('.list_city_container a').live('click',function(){
			if($(this).attr('data-type') && $(this).attr('data-type') == 0){
           		input.val($(this).children('b').text().split("，")[1]);
				clearkeyword();
				$('#keywords').val($(this).children('b').text().split("，")[0]);
			}else{
				input.val($(this).children('b').text().split("，")[0]);
				clearkeyword();
			}
			$("#city_id").attr("value",$(this).children('b').attr("value"));
			ChangeCityKeyList();
            suggestMain.hide();
			//clearkeyword();
			//search_hotel();
        }).live('mouseover',function(){
            t_suggest_focus = true;        
        }).live('mouseout',function(){
            t_suggest_focus = false;
        });
        suggestMain.find('.page_break a').live('mouseover',function(){
            t_suggest_focus = true;        
        }).live('mouseout',function(){
            t_suggest_focus = false;
        });
	    suggestMain.find('.page_break a').live('click',function(event){
            t_suggest_page_click = true;
            input.click();
		    if($(this).attr('inum') != null){
			    setAddPage($(this).attr('inum'));
    		}
	    });

        function nextPage(){
              var add_cur= suggestMain.find(".page_break a.current").next();
                if (add_cur != null) {                
                    if ($(add_cur).attr("inum") != null) {
                        setAddPage($(add_cur).attr("inum"));
                    }
                }
        }
        function prevPage(){
                var add_cur = suggestMain.find(".page_break a.current").prev();
                if (add_cur != null) {
                    if ($(add_cur).attr("inum") != null) {
                        setAddPage($(add_cur).attr("inum"));
                    }
                }
        }
        function nextResult(){
                  var t_index = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a.selected')[0]);
                    suggestMain.find('.list_city_container').children().removeClass('selected');          
                    t_index += 1;
                    var t_end =  suggestMain.find('.list_city_container a').index( suggestMain.find('.list_city_container a:visible').filter(':last')[0]);
                    if(t_index > t_end ){
                        t_index = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a:visible').eq(0));
                    } 
                    suggestMain.find('.list_city_container a').eq(t_index).addClass('selected'); 
        }
        function prevResult(){
                 
                     var t_index = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a.selected')[0]);
                suggestMain.find('.list_city_container').children().removeClass('selected');
                t_index -= 1;
                var t_start = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a:visible').filter(':first')[0]);
                if( t_index < t_start){
                    t_index = suggestMain.find('.list_city_container a').index(suggestMain.find('.list_city_container a:visible').filter(':last')[0]);
                }
                suggestMain.find('.list_city_container a').eq(t_index).addClass('selected');      
        }
    	function loadCity(){		
	    	var cityList = suggestMain.find('.list_city_container');		
		    cityList.empty();
            if(options.hotList){
                var hotList = options.hotList;
            }else{
                var hotList = [0,1,2,3,4,5,6,7,8,9];
            }
	    	for(var item in hotList){
			    if(item>options.suggestLength){
				    return;
			    }
			    var _data = options.data[hotList[item]];
	    		cityList.append("<a href='javascript:void(0)' ><span></span><b value='"+_data[0]+"'>"+_data[1]+"</b></a>");
		    }		
    		suggestMain.find('.list_city_head').html(options.suggestTitleText);
            setAddPage(1);
	    	suggestMain.show();
		    setTopSelect();
	    }
    	function queryCity(){
            popMain.hide();
            var value = input.val().toLowerCase();
			if( /[\u4e00-\u9fa5]/.test(value ) &&  /[a-zA-Z]+/.test(value ) )
			{
				value = pinyin.getFullChars(value); //如果同时含有中英文，那么就转成拼音
			}
            if( value.length == 0){
                loadCity();
                return; 
            }
            var city_container = suggestMain.find('.list_city_container');        
		    var isHave = false;
            var _tmp = new Array();
            for(var item in options.data){			
                var _data = options.data[item];		
                if(typeof (_data) != 'undefined'){
                    if(_data[2].indexOf(value) >= 0 || _data[3].indexOf(value) >= 0 || _data[1].indexOf(value) >=0 || _data[0].indexOf(value) >=0 ){					                   		var valueSzm=value.substring(0,1);
					    var dataSzm=_data[3].substring(0,1);
					    if (value.length==1 && dataSzm==valueSzm){
                        isHave = true;
                        _tmp.push(_data);
						//alert(dataSzm==valueSzm)
						}else if(value.length!=1){
                        isHave = true;
                        _tmp.push(_data);
							}
//                        isHave = true;
//                        _tmp.push(_data);
                    }
                }
             }
;
		    if(isHave){
                city_container.empty();
                for(var item in _tmp){
                var _data= _tmp[item];
                city_container.append("<a href='javascript:void(0)' style='display:none'><span></span><b value="+_data[0] +">"+     _data[1] +"</b></a>");                
                }
			    suggestMain.find('.list_city_head').html(value+",按拼音排序");
                setAddPage(1);
                setTopSelect()
    		}else{
			
			   $.ajax({url: '/ajax/ajax_gettags.asp',
			   type: 'GET',
			   async: false,
			   contentType: 'text; charset=gb2312',
			   data:{keyword:encodeURI(value) },
			   dataType: 'text',
			   timeout: 5000,
			   error: function(){
					$("#city_id").attr("value","");
	    	    	suggestMain.find('.list_city_head').html("<span class='msg'>对不起,找不到"+value+"</span>");
								 },
			   success: function(a){ 
			  		// alert(a);
			      var datej= eval("(" + a + ")");
				  city_container.html("");
				    for (var i=0; i<datej.taglist.length; i++)
					{
                        city_container.append("<a data-type='0' href='javascript:void(0)' style='display:none'><span></span><b value="+unescape(datej.taglist[i].city) +">"+ unescape(datej.taglist[i].tagname) +"，"+ unescape(datej.taglist[i].cityname) +"</b></a>");     
					}
					suggestMain.find('.list_city_head').html(value+",按拼音排序");
               		setAddPage(1);
                	setTopSelect()
				   jQuery.ajaxSetup ({cache:false});
				}
			  });
				
		    }
            suggestMain.show();
	    }
        function setAddPage(pageIndex){
            suggestMain.find('.list_city_container a').removeClass('selected');
            suggestMain.find('.list_city_container').children().each(function(i){			
                var k = i+1;
                if(k> options.suggestLength*(pageIndex-1) && k <= options.suggestLength*pageIndex){
                    $(this).css('display','block');
                }else{
                    $(this).hide();    
                }
             });
            setTopSelect();
            setAddPageHtml(pageIndex);
        }
        function setAddPageHtml(pageIndex){
            var cityPageBreak = suggestMain.find('.page_break');
            cityPageBreak.empty();	
            if(suggestMain.find('.list_city_container').children().length > options.suggestLength){
                var pageBreakSize = Math.ceil(suggestMain.find('.list_city_container').children().length/options.suggestLength);	
    			if(pageBreakSize <= 1){
	    			return;
		    	}			
                var start = end = pageIndex;
                for(var index = 0 ,num = 1 ; index < options.pageLength && num < options.pageLength; index++){
                    if(start > 1){
                        start--;num++;
                    }
                    if(end<pageBreakSize){
                        end ++;num++;
                    }
                }
                if(pageIndex > 1){
                    cityPageBreak.append("<a href='javascript:void(0)' inum='"+(pageIndex-1)+"'>&lt;-</a>");
                }	
                for(var i=start;i<=end;i++){
                    if(i == pageIndex){
                        cityPageBreak.append("<a href='javascript:void(0)' class='current' inum='"+(i)+"'>"+(i)+"</a");
                    }else{
                        cityPageBreak.append("<a href='javascript:void(0)' inum='"+(i)+"'>"+(i)+"</a");
                    }        
             }         
			    if (pageIndex<pageBreakSize) {
                    cityPageBreak.append("<a href='javascript:void(0);' inum='"+ (i-1) +"'>-&gt;</a>");
                }
                cityPageBreak.show();           
            }else{
                cityPageBreak.hide();    
            }
	    	return;
        }
	    function setTopSelect(){		
		    if(suggestMain.find('.list_city_container').children().length > 0 ){
			    suggestMain.find('.list_city_container').children(':visible').eq(0).addClass('selected');
		    }
	    }
        function onSelect(){
            if( typeof options.onSelect == 'function'){
                alert(1);
            }
        }
        function popInit(){
            var index = 0;
            var index2 = 0;
			var strongTab = "";
			var strongTab2 = "";
			var letterStr = "";
			var letterStrBak = "";
            popMain.find('.c_title span').html(options.popTitleText);
            if(!options.tabs){
                popContainer.append("<ul id='label_"+input.attr('id')+"_container' class='current'></ul>");
                labelMain.remove();
                for( var item in options.data){
                      $("#label_"+input.attr('id')+"_container").append("<li><a href='javascript:void(0)' value='"+options.data[cityCode][0]+"'>"+options.data[item][1].split("，")[0]+"</a></li>");
                }
                return;
            }
    		for(var itemLabel in options.tabs){		
			    index++;			
			    if(index == 1){
				    popContainer.append("<ul id='label_"+input.attr('id')+index+"_container' class='current' data-type='"+itemLabel+"'></ul>");
				    labelMain.append("<li><a id='label_"+input.attr('id')+index+"' class='current' href='javascript:void(0)'>"+itemLabel+"</a></li>");
				    //xuyang 更改热门效果
				    if(!options.tabs2){
                        return;
                    }
				    for(var itemLabel2 in options.tabs2){	
				        index2++;	
				        if(index2 != 1){
							$("#label_"+input.attr('id')+index+"_container").append("<br />");
						}
						
				        $("#label_"+input.attr('id')+index+"_container").append("<li style='width:46px;color:#FF7000;'>"+itemLabel2+"</li>");
				        
				        var brIndex2 = 0;
			            for(var item2 in options.tabs2[itemLabel2]){
				            var cityCode = options.tabs2[itemLabel2][item2];
				       
				            if(!options.data[cityCode]){
					            break;
    			            }		
        			        
    			            //超过5个城市做缩进填充
						    if(brIndex2!=0 && brIndex2%5==0){
							    $("#label_"+input.attr('id')+index+"_container").append("<li style='width:46px; color:#FF7000;'></li>");
						    }
						    
						    /*增加高亮加粗显示*/
					        if(index == 1){
						        if(options.data[cityCode][1].split("，")[0] == "广州" || options.data[cityCode][1].split("，")[0] == "香港" || options.data[cityCode][1].split("，")[0] == "桂林" || options.data[cityCode][1].split("，")[0] == "贵阳"){
							        strongTab2 = "style='color:#0066CC;'";
						        }
					        }
        			        
                            $("#label_"+input.attr('id')+index+"_container").append("<li style='margin-right:0;'><a href='javascript:void(0)' "+strongTab2+" value='"+options.data[cityCode][0]+"'>"+options.data[cityCode][1].split("，")[0]+"</a></li>");
                            strongTab2 = "";
					        brIndex2++;
                        }
						var last = options.tabs2[itemLabel2].length % 5;
						if(last > 0){
							for(var i=0;i<(5-last);i++){
								$("#label_"+input.attr('id')+index+"_container").append("<li style='width:46px; color:#FF7000;'></li>");
							}
						}
                    }
                    
                    var gz = "<li style='width:46px;color:#FF7000;'>古镇</li>"+
                     "<li style='margin-right:0;'><a value='866' href='javascript:void(0)'>凤凰</a></li>"+
                    "<li style='margin-right:0;'><a value='37' href='javascript:void(0)'>丽江</a></li>"+
                    "<li style='margin-right:0;'><a value='36' href='javascript:void(0)'>大理</a></li>"+
                    "<li style='margin-right:0;'><a value='871' href='javascript:void(0)' style='color:#0066CC;'>阳朔</a></li>"+
                    "<li style='margin-right:0;'><a value='571' href='javascript:void(0)' onclick='setKeyword(\"嘉兴市\",\"西塘\")'>西塘</a></li>"+
                    "<br/><li style='width:46px; color:#FF7000;'></li><li style='margin-right:0;'><a value='571' href='javascript:void(0)' onclick='setKeyword(\"嘉兴市\",\"乌镇\")'>乌镇</a></li>"+
                    "<li style='margin-right:0;'><a value='660' href='javascript:void(0)'>香格里拉</a></li>"+
                    "<li style='margin-right:0;'><a value='2132' href='javascript:void(0)' style='color:#0066CC;' onclick='setKeyword(\"贺州\",\"黄姚\")'>黄姚</a></li>"+
                    "<li style='margin-right:0;'><a value='22586' href='javascript:void(0)' style='color:#0066CC;'>西江</a></li>"+
                    "<li style='margin-right:0;'><a value='22457' href='javascript:void(0)'>束河</a></li>"+
                    "<br/><li style='width:46px; color:#FF7000;'></li><li  style='margin-right:0;'><a value='1161' href='javascript:void(0)'>泸沽湖</a></li>"+
                    "<li style='margin-right:0;'><a value='23' href='javascript:void(0)' onclick='setKeyword(\"黄山\",\"宏村\")' >宏村</a></li>"+
                    "<li style='margin-right:0;'><a value='986' href='javascript:void(0)' style='color:#0066CC;'>镇远</a></li>"+
                    "<li style='margin-right:0;'><a value='104' href='javascript:void(0)'>平遥</a></li>"+
                    "<li style='margin-right:0;'><a value='22602' href='javascript:void(0)'>周庄</a></li>";
                    $("#label_"+input.attr('id')+index+"_container").append(gz);
                    
                    var jd = "<br/><li style='width:46px;color:#FF7000;'>景点</li>"+
                    "<li style='margin-right:0;'><a value='25' href='javascript:void(0)' onclick='setTag(\"厦门\",184098,\"鼓浪屿\")'>鼓浪屿</a></li>"+
                    "<li style='margin-right:0;'><a value='22564' href='javascript:void(0)'>九寨沟</a></li>"+
                    "<li style='margin-right:0;'><a value='27' href='javascript:void(0)'>张家界</a></li>"+
                    "<li style='margin-right:0;'><a value='23' href='javascript:void(0)'>黄山</a></li>"+
                    "<li style='margin-right:0;'><a value='1161' href='javascript:void(0)'>泸沽湖</a></li>"+
                    "<br/><li style='width:46px; color:#FF7000;'></li><li style='margin-right:0;'><a value='187' href='javascript:void(0)'>北戴河</a></li>"+
                    "<li style='margin-right:0;'><a value='10006' href='javascript:void(0)'>西湖</a></li>"+
                    "<li style='margin-right:0;'><a value='20' href='javascript:void(0)'>千岛湖</a></li>"+
                    "<li style='margin-right:0;'><a value='1' href='javascript:void(0)' onclick='setTag(\"北京\",37,\"故宫\")'>故宫</a></li>"+
                    "<li style='margin-right:0;'><a value='22535' href='javascript:void(0)'>泰山</a></li>"+
                    "<br/><li style='width:46px; color:#FF7000;'></li><li style='margin-right:0;'><a value='30' href='javascript:void(0)' onclick='setTag(\"深圳\",189545,\"较场尾\")' >较场尾</a></li>"+
                    "<li style='margin-right:0;'><a value='30' href='javascript:void(0)' onclick='setTag(\"深圳\",189543,\"欢乐谷\")' >欢乐谷</a></li>"+
                    "<li style='margin-right:0;'><a value='871' href='javascript:void(0)' onclick='setTag(\"阳朔\",189724,\"西街\")' style='color:#0066CC;'>西街</a></li>"+
					"<li style='margin-right:0;'><a value='1526' href='javascript:void(0)' onclick='setKeyword(\"龙胜\",\"龙脊梯田\")' style='color:#0066CC;'>龙脊梯田</a></li>"+
                    "<li style='margin-right:0;'><a value='179' href='javascript:void(0)' style='color:#0066CC;'>黄果树</a></li>";
                    $("#label_"+input.attr('id')+index+"_container").append(jd);
                    
				    
			    }else{
				    popContainer.append("<ul style='display:none' id='label_"+input.attr('id')+index+"_container' data-type='"+itemLabel+"'></ul>");
				    labelMain.append("<li><a id='label_"+input.attr('id')+index+"' href='javascript:void(0)'>"+itemLabel+"</a></li>");		
			    }
			    
			   
				var brIndex = 0;
			    for(var item in options.tabs[itemLabel]){
				    var cityCode = options.tabs[itemLabel][item];
				    if(!options.data[cityCode]){
					    break;
    			    }		

					/*增加首字母*/
					if(itemLabel == "ABCD" || itemLabel =="EFGHJ" || itemLabel =="KLMN" || itemLabel =="PQRSTW" || itemLabel =="XYZ"){
						letterStr = options.data[cityCode][3].substr(0,1).toUpperCase();
						
						//碰到新字母插入换行，并且将索引重新计算
						if(letterStr != letterStrBak && brIndex != 0){
							$("#label_"+input.attr('id')+index+"_container").append("<br />");
							brIndex = 0;
						}
						
						//碰到新字母插入首字母
						if(letterStr != letterStrBak){
							$("#label_"+input.attr('id')+index+"_container").append("<li style='width:20px; color:#FF7000;'>"+letterStr+"</li>");
						}
						
						//相同首字母并且超过5个城市做缩进填充
						if(letterStr == letterStrBak && brIndex%5==0){
							$("#label_"+input.attr('id')+index+"_container").append("<li style='width:20px; color:#FF7000;'></li>");
						}
						
						letterStrBak = letterStr;
					}
					
					/*增加高亮加粗显示*/
					if(index == 1){
					    if(options.data[cityCode][1].split("，")[0] == "厦门" || options.data[cityCode][1].split("，")[0] == "广州" || options.data[cityCode][1].split("，")[0] == "香港" || options.data[cityCode][1].split("，")[0] == "杭州" || options.data[cityCode][1].split("，")[0] == "桂林"){
					        strongTab = "style='color:#0066CC;'";
				        }
					}
					
				    $("#label_"+input.attr('id')+index+"_container").append("<li><a href='javascript:void(0)' "+strongTab+" value='"+options.data[cityCode][0]+"'>"+options.data[cityCode][1].split("，")[0]+"</a></li>");
					strongTab = "";
					brIndex++;
			    }
		    }			
        }
        function resetPosition(){
            popMain.css({'top':input.offset().top+input.outerHeight(),'left':input.offset().left});
            suggestMain.css({'top':input.offset().top+input.outerHeight(),'left':input.offset().left});
        }
    }
    $.fn.querycity = function(options){
		var defaults = {
			'data'          : {},
			'tabs'          : '',
			'tabs2'          : '',
			'hotList'       : '',            
			//'defaultText'   : '北京',
			'popTitleText'  : '请选择城市或输入城市名称的拼音或英文',
			'suggestTitleText' : '输入中文/拼音或↑↓选择',
			'suggestLength' : 10,
			'pageLength'    : 5, 
			'onSelect'      : '' 
		};
		//$("#city_id").attr("value","1");
        var options = $.extend(defaults,options);
        this.each(function(){
            new $.querycity(this,options);            
        });
        return this;
    };
})(jQuery);


(function($){
$.fn.bgIframe = $.fn.bgiframe = function(s) {
	if ( $.browser.msie && /6.0/.test(navigator.userAgent) ) {
		s = $.extend({
			top     : 'auto', // auto == .currentStyle.borderTopWidth
			left    : 'auto', // auto == .currentStyle.borderLeftWidth
			width   : 'auto', // auto == offsetWidth
			height  : 'auto', // auto == offsetHeight
			opacity : true,
			src     : 'javascript:false;'
		}, s || {});
		var prop = function(n){return n&&n.constructor==Number?n+'px':n;},
		    html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+
		               'style="display:block;position:absolute;z-index:-1;'+
			               (s.opacity !== false?'filter:Alpha(Opacity=\'0\');':'')+
					       'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+
					       'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+
					       'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+
					       'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+
					'"/>';
		return this.each(function() {
			if ( $('> iframe.bgiframe', this).length == 0 )
				this.insertBefore( document.createElement(html), this.firstChild );
		});
	}
	return this;
};
})(jQuery);

