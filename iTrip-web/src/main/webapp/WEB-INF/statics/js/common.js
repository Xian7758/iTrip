$(document).ready(function(){
	var city_id=$.trim($("#city_id").attr("value"));
	//if($.trim(Request("city")).length>0)
	//{
		//city_id=$.trim(Request("city"));
	//}
	//��֤����ID�Ƿ�Ϊ���֣������������Ĭ��Ϊ����
	var reg = new RegExp("^[0-9]*$");
	if(!reg.test(city_id)){
		$(".input_city").attr("value","����");
		$("#city_id").attr("value","1");
		setCookie("input_city",$("#city").attr("value"),1);
	}
	//���ݳ���ID��ѯ��������
	$.ajax({url: '/ajax/ajax_getCityId.asp',
	type: 'GET',
	contentType: 'text; charset=gb2312',
	data:{cityid:city_id},
	dataType: 'text',
	timeout: 30000,
	error: function(){
	},
	success: function(a){
		var josn_data=eval('('+a+')');
		$(".input_city").attr("value",unescape(josn_data.cityname));
		$("#city_id").attr("value",josn_data.city);
		setCookie("input_city",$("#city").attr("value"),1);
		}
	});
	
	//������ť
	$("#btn_search").click(function(){
		var city_id=$.trim($("#city_id").attr("value"));
		var tag_id=$.trim($("#tag_id").attr("value"));
		var oldcity=$.trim($("#oldcity").attr("value"));
		var surl="";
		if(tag_id=="�ؼ���/�Ƶ���/����/λ��")
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
		
		if($("#city").val() != "���"){
			var days = GetDateDiff(new Date().toDateString(),s);
			var days1 = GetDateDiff(new Date().toDateString(),e);
			var diffdate = GetDateDiff(new Date().toDateString(), new Date().dateAdd("n",2).toDateString());
			
			if(days>diffdate || days1>diffdate){
				var mydate = new Date().dateAdd("d",1);
				setDefaultDate(mydate);
				alert("�ڵؾƵ�ֻ����ǰ������Ԥ����");	return false;
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
			if(inputCity == "����") checkLabelName = "����";
			checkCityName = inputCity;
		}

		cityInfo = check_city_existed(inputCity, false);	
		if(cityInfo.IsExisted == false && checkLabelName != ""){
			cityInfo = check_city_existed(checkLabelName, true);
		}
		
		if(cityInfo.IsExisted == false){
			return false;	
		}
		if($.trim($("#keywords").val())=="�ؼ���/�Ƶ���/����/λ��")
		{
			tag_id="0";
		}
		inserttaghits($.trim($("#keywords").val()));
		var reg=new RegExp("%","g"); 
		var input_key,old_input_key;
		if($.trim($("#keywords").val())=="�ؼ���/�Ƶ���/����/λ��" && checkLabelName.length>0)
		{
			input_key=escape($.trim(checkLabelName));
		}
		else
		{
			input_key=$.trim($("#keywords").val())=="�ؼ���/�Ƶ���/����/λ��"?0:escape($.trim($("#keywords").val()));
		}
		old_input_key = escape($.trim($("#keywords").val()));
		setCookie("input_city",$("#city").attr("value"),1);
		setCookie("start_time",s,1);
		setCookie("end_time",e,1);
		if($.trim($("#keywords").val())=="�ؼ���/�Ƶ���/����/λ��" && tag_id=="0" && input_key=="")
		{
			//surl = '/city_'+city_id+'.html';
			surl='http://hotelinfo.qmango.com/?cityId='+city_id+"&startDate="+s+"&endDate="+e;
		}
		else
		{
			if(tag_id == "0" || tag_id.length == 0){
				input_key=input_key.replace(reg,"QMG");
				//surl='/hotellist_'+city_id+'_'+tag_id+'_0_0_0_1_0_false_false_0_'+input_key+'.html';
				surl='http://hotelinfo.qmango.com/?cityId='+city_id+'&query='+old_input_key+"&startDate="+s+"&endDate="+e;
			}
			else{
				//surl='/hotellist_'+city_id+'_'+tag_id+'_0_0_0_1_distance_false_false_0.html';
				if( tag_id.split('|')[1] == "hotel" )
				{
					surl = "http://hotelinfo.qmango.com/hotel/detail?hotelid="+tag_id.split('|')[0];
				}
				else
				{
					tag_id = tag_id.split('|')[0];
					surl='http://hotelinfo.qmango.com/?cityId='+city_id+'&tagId='+tag_id+"&startDate="+s+"&endDate="+e;
				}
				}
		}
		//alert(surl);
		setTimeout(function(){window.location.href = surl;},"50")
	})
			
	if($("#searchtag").find("a").length==0)
	{
		$(".search_sel").hide();
	}
	
	//����λ�ü�¼�����
	$(".radio_item").find("a").click(function(){
		inserttaghits($.trim($(this).html()));
	})
	//�������򣬳�վ/����������վ��¼�����
	$(".pop_area").find("dd a").click(function(){
		inserttaghits($.trim($(this).html()));
	})
	//�������¼����λ�ã���վ/����������վ�����
	//$(".keywords_list").find("dd a").click(function(){
//		inserttaghits($.trim($(this).html()));
//	})
	
	//��ת����ͼģʽ
	$(".v_map").click(function(){
		window.location.href='/showhotels_map.asp?city='+$("#city_id").attr("value")+'&input_price=0';
	})
	
	//if($("#qq_onlie").length>0)
//	{
//		$("#qq_onlie").css("display","block");
//		$("#qq_onlie").css("z-index","102");
//		$("#qq_onlie").css("top",150);
//		
//		$(window).scroll(function() {    // ҳ�淢��scroll�¼�ʱ����  
//		var bodyTop = 0;
//		var qq_height=document.documentElement.clientHeight;
//		if (typeof window.pageYOffset != 'undefined') {  
//		  bodyTop = window.pageYOffset;  
//		} else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {  
//		  bodyTop = document.documentElement.scrollTop;  
//		}  
//		else if (typeof document.body != 'undefined') {  
//		  bodyTop = document.body.scrollTop;  
//		}  
//		
//		$("#qq_onlie").css("top", bodyTop+150)   // ���ò��CSS��ʽ�е�top����, ע��Ҫ��Сд��Ҫ����"��׼"  
//		});
//		
//		$('#qq_onlie').mouseover(function() {
//		$("#zximg").css("display","block");}); 
//		$('#qq_onlie').mouseout(function() {
//		$("#zximg").css("display","none");});
//	}
	//��������¼
	$(".clearhotel").click(function(){
		$.ajax({url: '/clearcookie.asp',
		   type: 'GET',
		   contentType: 'html; charset=gb2312',
		   data:{tag:1},
		   dataType: 'html',
		   timeout: 3000,
		   success: function(a){ 
		       
			   //alert(a);
			   $("#clear_mb10").hide();
			}
		  });
	})
	
	//�б�ҳSEO�Ż�
	$(".clearfix h2 i").click(function(){
		if($(this).attr("class") == "hotellistSEO_expand")
		{
			$(this).removeClass("hotellistSEO_expand");
			$(this).addClass("hotellistSEO_collapse");
			$("#seodata").show();
		}
		else
		{
			$(this).removeClass("hotellistSEO_collapse");
			$(this).addClass("hotellistSEO_expand");
			$("#seodata").hide();
		}
	})
})