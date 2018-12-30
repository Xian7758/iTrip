/*
* autor zhongweiming
*/
(function($){
     //turn pics begin
     $.fn.mangoshowpic = function(settings){
	     var timer, currNum;
	     settings = jQuery.extend({
		       imgsrc : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"],
			   links  : ["http://www.qmango.com/","http://www.qmango.com/","http://www.qmango.com/","http://www.qmango.com/","http://www.qmango.com/","http://www.qmango.com/"],
		     smalltab : "tabs",
			   bigtab : "picli",
			   isAuto : true,
			    times : 6000
		 }, settings || {});
		 $('ul.'+settings.bigtab+' li').each(
		    function(i, item){
			   $(item).html('<a name="'+i+'" href = '+ settings.links[i] +' target="_blank"><img src = '+ settings.imgsrc[i] +' alt=""></a>');
			}
		 );
		// $('ul.'+settings.bigtab+' li').each(
//		    function(i, item){
//			   $(item).html('<a name="'+i+'" style="cursor:pointer" onclick="c_link(&apos;'+settings.links[i]+'&apos;)" target="_blank"><img src = '+ settings.imgsrc[i] +' alt=""></a>');
//			}
//		 );
//		 
		 
		 $('div.'+settings.smalltab+' span').each(function(i, item){
		     if($(item).hasClass('on')) currNum = i;
			 $('ul.'+settings.bigtab+' li').eq(currNum).fadeIn();
			 $(item).mouseover(function(){
			     $('div.'+settings.smalltab+' span').removeClass();
				 $('ul.'+settings.bigtab+' li').hide();
			     $(this).addClass('on');
				 $('ul.'+settings.bigtab+' li').eq(i).fadeIn("slow");
				 currNum = i;
			 });
			 
		 });
		 
		 $.each([$('div.'+settings.smalltab), $('ul.'+settings.bigtab)], function(i, item){
		     $(item).hover(
			    function(){
				   settings.isAuto = false;
				},
				function(){
				   settings.isAuto = true;
				}
			 );
		 });			 
		 setInterval(
			 function(){
				 if(!settings.isAuto) return false;
				 $('div.'+settings.smalltab+' span').each(function(i, item){
					 if($(item).hasClass('on')) currNum = i;
				 });
				 if(currNum == ($('div.'+settings.smalltab+' span').length-1)){
					 $('div.'+settings.smalltab+' span').removeClass();
					 $('ul.'+settings.bigtab+' li').hide();
					 $('div.'+settings.smalltab+' span').eq(0).addClass('on');
					 $('ul.'+settings.bigtab+' li').eq(0).fadeIn("slow");
				 }else{
					 $('div.'+settings.smalltab+' span').removeClass();
					 $('ul.'+settings.bigtab+' li').hide();
					 $('div.'+settings.smalltab+' span').eq(currNum).next().addClass('on');
					 $('ul.'+settings.bigtab+' li').eq(currNum).next().fadeIn("slow");
				 
				 }
			
			 },settings.times);

		 
		 
	 };
	 //turn pics end
	 
	 //tabs begin
	 /* The underlying HTML has to look like this:
	  * <div id="tabWrap">
	  *     <ul class="tabNav">
	  *         <li><a href="#frag-1">Section 1</a></li>
	  *         <li><a href="#frag-2">Section 2</a></li>
	  *         <li><a href="#frag-3">Section 3</a></li>
	  *     </ul>
	  *     <div id="frag-1" class="tabCont">
	  *
	  *     </div>
	  *     <div id="frag-2" class="tabCont">
	  *
	  *     </div>
	  *     <div id="frag-3" class="tabCont">
	  * 
	  *     </div>
	  * </div>
	 */
	 $.fn.mangoTabs = function(settings){
	     settings = jQuery.extend({
		     container : "tabWrap",
			    tabNav : "tabNav",
			   tabCont : "tabCont",
		 selectedClass : "selected",
		     showClass : "showcont",
			 hideClass : "hidecont",
			    nodata : "nodata",
			 bindEvent : "click"
		 }, settings || {});
		 return this.each(function(){
		     var container = this;
			 var tnav = $('ul.'+ settings.tabNav , container);
			 tnav = tnav.size() && tnav || $('>ul:eq(0)', container); //当ul不存在样式的时候取容器内第一个ul作为节点
			 
			 var tabs = $('a', tnav);
			 var lis = $('li', tnav);
			 tabs.each(function(){
			     if(/#/.test(this.href)){
				    var toid = this.href.split('#')[1];
					$(this).bind(settings.bindEvent, function(e){
					     $(lis).removeClass();
						 $('div.'+ settings.tabCont, container).removeClass(settings.showClass).addClass(settings.hideClass);
                         $(this).parent().addClass(settings.selectedClass);
                         $('#'+toid).removeClass(settings.hideClass).addClass(settings.showClass);						 
					});
					$(this).click(function(e){
					    this.blur();
						//$(this).attr("hideFocus", "true");
					    e.preventDefault();
					});
				 }
			     
			 });
		 });
		 
	 };
	 //tabs end
	 
	 //input select begin
	 $.fn.changeinput = function(settings){
	     settings = jQuery.extend({
		     name : "changename",
		 changeid : "which"
		 }, settings || {});
		 
		 return this.each(function(){
		     var contain = this;
			 var inputs = $('input[name = "'+ settings.name + '"]', contain);
			 inputs.each(function(){
				 $(this).bind('click', function(){
				     $("#" + settings.changeid).text($(this).attr("showName") +"：");
				 });
			 });
		 });
	 };
	 //input select end
})(jQuery);