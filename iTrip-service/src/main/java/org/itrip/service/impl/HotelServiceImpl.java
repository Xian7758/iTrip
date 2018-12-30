package org.itrip.service.impl;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.itrip.mapper.HotelMapper;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Room;
import org.itrip.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelServiceImpl implements HotelService{

	
	
	@Autowired
	HotelMapper hotelMapper;
	
	@Override
	public List<Hotel> listHotel1(Integer cityId) {
		return hotelMapper.listHotel1(cityId);
	}

	@Override
	public List<Hotel> listHotel2(String types,Integer hotelType,Integer cityId,Double startPirce,Double endPirce,String query, int pageIndex,int pageSize) {
		return hotelMapper.listHotel2(types,hotelType,cityId, startPirce, endPirce, query, (pageIndex - 1) * pageSize, pageSize);
	}
	@Override
	public Hotel qhotel(int id) {
		return hotelMapper.qhotel(id);
	}

	@Override
	public List<Room> rlist(int id) {
		return hotelMapper.rlist(id);
	}

	@Override
	public int countHotel(String types, Integer hotelType, Integer cityId, Double startPirce, Double endPirce,
			String query) {
		return hotelMapper.countHotel(types, hotelType, cityId, startPirce, endPirce, query);
	}
	
}
