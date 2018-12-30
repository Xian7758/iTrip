package org.itrip.service.impl;


import org.itrip.mapper.UserMapper;
import org.itrip.pojo.User;
import org.itrip.service.BeforeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public  class BeforeServiceimpl implements BeforeService{
	@Autowired
   UserMapper userMapper;


	@Override
	public User checkLogin(String username, String password) {
		
		return userMapper.checkLogin(username, password);
	}
	
	@Override
	public void  regUser(String userName,String password,String contact,Integer usertypeId,float money) {
		userMapper.regUser( userName, password,contact,usertypeId,money);
	}




}
