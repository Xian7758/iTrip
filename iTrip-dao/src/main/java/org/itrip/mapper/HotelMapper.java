package org.itrip.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Room;
import org.springframework.stereotype.Component;

@Component
public interface HotelMapper {
	List<Hotel> listHotel1(@Param(value="cityId")Integer cityId);
	
	List<Hotel> listHotel2(
			@Param(value="types")String types, 
			@Param(value="hotelType")Integer hotelType, 
			@Param(value="cityId")Integer cityId, 
			@Param(value="startPirce")Double startPirce, 
			@Param(value="endPirce")Double endPirce, 
			@Param(value="query")String query, 
			@Param(value="pageIndex")int pageIndex,
			@Param(value="pageSize")int pageSize);
	
	int countHotel(
			@Param(value="types")String types, 
			@Param(value="hotelType")Integer hotelType, 
			@Param(value="cityId")Integer cityId, 
			@Param(value="startPirce")Double startPirce, 
			@Param(value="endPirce")Double endPirce, 
			@Param(value="query")String query);
	
	
	@Select("select *,(SELECT ctname from city c where c.cid=h.cityId) as city from hotel h where id=#{id}")
	Hotel qhotel(@Param(value="id")int id);
	
	@Select("select (SELECT rtype from roomtype r where r.rid=h.rid) as rtype,price,room,facilities,breakfast FROM hotelroom h where hid=#{id}")
	List<Room> rlist(@Param(value="id")int id);
}
