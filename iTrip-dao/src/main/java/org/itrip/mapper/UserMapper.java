package org.itrip.mapper;


import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.itrip.pojo.User;
import org.springframework.stereotype.Component;

@Component
public interface UserMapper {
	/*登录*/
	@Select("select * from user where userName=#{userName} and password=MD5(#{password})")
	public  User checkLogin(@Param(value="userName") String userName,@Param(value="password")String password);
	
	/*注册*/
	@Insert("insert into user( userName, password,contact,usertypeId,money) values( #{userName}, #{password},#{contact},#{usertypeId},#{money})")
	public void regUser(@Param(value="userName") String userName,@Param(value="password")String password,@Param(value="contact")String contact
			,@Param(value="usertypeId") Integer usertypeId,	@Param(value="money") float money);
}
