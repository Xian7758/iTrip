function isDate(sDate) {
	var iYear, iMonth, iDay, iIndex

	var	reg
	reg = new RegExp('[^0-9-]','')
	if (sDate.search(reg) >= 0)
		return false;
	
	iIndex = sDate.indexOf('-');
	if ( iIndex == -1 )
		return false;
	else {
		iYear = parseFloat(sDate.substr(0, iIndex));
		if ( isNaN(iYear) || iYear < 1900 || iYear > 2099 )
			return false;
		else
			sDate = sDate.substring(iIndex + 1, sDate.length);
	}
	
	iIndex = sDate.indexOf('-');
	if ( iIndex == -1 )
		return false;
	else {
		iMonth = parseFloat(sDate.substr(0, iIndex));
		if ( isNaN(iMonth) || iMonth < 1 || iMonth > 12 )
			return false;
		else
			sDate = sDate.substring(iIndex + 1, sDate.length);
	}
	
	iIndex = sDate.indexOf('-');
	if ( iIndex >= 0 )
		return false;
	else {
		iDay = parseFloat(sDate);
		if ( isNaN(iDay) || iDay < 1 || iDay > 31 )
			return false;
	}
	
	
	switch(iMonth) {
		case 4:
		case 6:
		case 9:
		case 11:
			if ( iDay > 30 )
				return false;
			else
				break;
		case 2:
			if ( ( ( iYear % 4 == 0 && iYear % 100 != 0 ) || iYear % 400 == 0 ) && iDay > 29 )
				return false;
			else if ( (iYear % 4 != 0 || (iYear % 100 == 0 && iYear % 400 != 0)) && iDay > 28 )
				return false;
			else
				break;
		default:
	}
	return true;
}



function parseDate(sDate) {
	var iIndex, iYear, iMonth, iDay
	
	iIndex = sDate.indexOf('-');
	iYear = parseFloat(sDate.substr(0, iIndex));
	sDate = sDate.substring(iIndex + 1, sDate.length);
	
	iIndex = sDate.indexOf('-');
	iMonth = parseFloat(sDate.substr(0, iIndex));
	iDay = parseFloat(sDate.substring(iIndex + 1, sDate.length));
	
	return new Date(iYear, iMonth - 1, iDay);
}
function onclick_Flag(FlagType,iCount)
{	var bCheck=true
	if (FlagType =='Modify') 
	{
		eval("bCheck=window.document.HotelAdd.ModifiedFlag" + iCount + ".checked");
		eval("window.document.HotelAdd.DelFlag" + iCount + ".disabled=" + bCheck);
//		eval("window.document.HotelAdd.PauseFlag" + iCount + ".disabled=" + bCheck);

       	 bCheck=!bCheck; 
	     eval("window.document.HotelAdd.Description" + iCount + ".disabled=" + bCheck);
	     eval("window.document.HotelAdd.EffectDate" + iCount + ".disabled=" + bCheck);
	     eval("window.document.HotelAdd.ExpiryDate" + iCount + ".disabled=" + bCheck);
	  }
	
	 else if (FlagType == 'Del')
	  {
		eval("bCheck=window.document.HotelAdd.DelFlag" + iCount + ".checked");
		eval("window.document.HotelAdd.ModifiedFlag" + iCount + ".disabled=" + bCheck);
//		eval("window.document.HotelAdd.PauseFlag" + iCount + ".disabled=" + bCheck);
		
		bCheck=true
	    
		eval("window.document.HotelAdd.Description" + iCount + ".disabled=" + bCheck);
	    eval("window.document.HotelAdd.EffectDate" + iCount + ".disabled=" + bCheck);
	    eval("window.document.HotelAdd.ExpiryDate" + iCount + ".disabled=" + bCheck);

	 }

//    else if (FlagType == 'Pause')
//	  {
//		eval("bCheck=window.document.HotelAdd.PauseFlag" + iCount + ".checked");
//		eval("window.document.HotelAdd.ModifiedFlag" + iCount + ".disabled=" + bCheck);
//		eval("window.document.HotelAdd.DelFlag" + iCount + ".disabled=" + bCheck);
//		
//		bCheck=true
//	    eval("window.document.HotelAdd.Description" + iCount + ".disabled=" + bCheck);
//	    eval("window.document.HotelAdd.EffectDate" + iCount + ".disabled=" + bCheck);
//	    eval("window.document.HotelAdd.ExpiryDate" + iCount + ".disabled=" + bCheck);
//
//	 }
	 else if (FlagType == 'DelNew')
	 {
	 	eval("bCheck=window.document.AddInfo.DelNewFlag" + iCount + ".checked");
		eval("window.document.AddInfo.Description" + iCount + ".disabled=" + bCheck);
	    eval("window.document.AddInfo.EffectDate" + iCount + ".disabled=" + bCheck);
	    eval("window.document.AddInfo.ExpiryDate" + iCount + ".disabled=" + bCheck);
     }
}


function on_checkdate(totalrecord,formname)
  {	
   var bCheck,i,sDate1,sDate2,sDesc
  // var date=new Date()
     for (i=1; i<=totalrecord; i++)
       {
          if(formname=='AddInfo')
          {
            eval("bCheck=window.document."+formname+".DelNewFlag" + i + ".checked");
          }
          else
          {
            bCheck=false;
          }
          if (!bCheck)
          {
              eval("sDesc="+"window.document."+formname+".Description" + i + ".value");
             if (sDesc.length==0 )
                {
	   				alert( "时务信息不能为空,请重新输入" );
			        eval( "window.document."+formname+".Description" + i + ".focus()" );	
			    	return false;
			     }       
	          eval("sDate1="+"window.document."+formname+".EffectDate"+i+".value");
	          eval("sDate2="+"window.document."+formname+".ExpiryDate"+i+".value");
	          if (sDate1.length ==0 )
                {
	   				alert( "起始日期不能为空,请重新输入" );
			        eval( "window.document."+formname+".EffectDate" + i + ".focus()" );	
			    	return false;
			     }
	          if (sDate2.length==0)
                 {
	   				alert( "截止日期不能为空,请重新输入" );
			        eval( "window.document."+formname+".ExpiryDate" + i + ".focus()" );	
			    	return false;
			     }
              
              
	          if (!isDate(sDate1))
                {
	   				alert( "起始日期格式不规范,请重新输入" );
			        eval( "window.document."+formname+".EffectDate" + i + ".focus()" );	
			    	return false;
			     }
			if (!isDate(sDate2))
                {
	   				alert( "截止日期格式不规范,请重新输入" );
			        eval( "window.document."+formname+".ExpiryDate" + i + ".focus()" );	
			    	return false;
			     }
               if (sDate1>sDate2)
               {
               		alert( "截止日期不能早于起始日期,请重新输入" );
               		eval( "window.document."+formname+".EffectDate" + i + ".focus()" );	
			    
			        eval( "window.document."+formname+".ExpiryDate" + i + ".focus()" );	
			    	return false;
			     }
		    
   }
   }
   return true
   }
