package org.itrip.service;

import java.util.List;

import org.itrip.pojo.Hotel;
import org.itrip.pojo.Room;

public interface HotelService {
	List<Hotel> listHotel1(Integer cityId);
	List<Hotel> listHotel2(String types,Integer hotelType,Integer cityId,Double startPirce,Double endPirce, String query, int pageIndex,int pageSize);
	int countHotel(String types,Integer hotelType,Integer cityId,Double startPirce,Double endPirce, String query);
	Hotel qhotel(int id);
	List<Room> rlist(int id);
}
