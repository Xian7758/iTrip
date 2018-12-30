package org.itrip.service;

import org.itrip.pojo.User;

public interface BeforeService {
  public  User checkLogin(String username,String password);
  
  public void  regUser(String userName,String password,String contact,Integer usertypeId,float money);
}
