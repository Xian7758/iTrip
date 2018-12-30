package org.itrip.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.itrip.pojo.Hotel;
import org.itrip.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HotelController {
	@Autowired
	HotelService hotelService;
	
	@RequestMapping("listHotel")
	public String listHotel(Model model){
		Map<Integer,List<Hotel>> map = new HashMap<>();
		for (int i = 0; i < 20; i++) {
			map.put(i, hotelService.listHotel1(i)) ;
		}
		for (int i = 0; i < 20; i++) {
			model.addAttribute("listHotel"+i, map.get(i));
		}
		return "index";
	}
}
