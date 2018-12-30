function isMobile(m)
{
	var reg = new RegExp('^1[34578][0123456789][0-9]{8}$','');
	if (m.search(reg)==-1)
	{
		var regHK = new RegExp('^[96][0-9]{7}$','');
		if (m.search(regHK)==-1)
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