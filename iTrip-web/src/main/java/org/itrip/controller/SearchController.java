package org.itrip.controller;

import java.util.List;

import org.itrip.pojo.Dictionary;
import org.itrip.service.DictionaryService;
import org.itrip.service.HotelService;
import org.itrip.utils.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SearchController {

	@Autowired
	HotelService hotelService;
	@Autowired
	DictionaryService dictionaryService;

	@RequestMapping("listSearch")
	public String listSearch(Model model, Page page, 
			@RequestParam(value = "query", required = false) String query,
			@RequestParam(value = "date", required = false) String date,
			@RequestParam(value = "date2", required = false) String date2,
			@RequestParam(value = "pageIndex", required = false) String pageIndex,
			@RequestParam(value = "price_min", required = false) String price_min,
			@RequestParam(value = "price_max", required = false) String price_max,
			@RequestParam(value = "pirce_checked", required = false) String pirce_checked,
			@RequestParam(value = "qhtypename", required = false) String qhtypename,
			@RequestParam(value = "cityId", required = false) String cityId,
			@RequestParam(value = "types", required = false) String types) throws Exception {
		
	

		Double startPirce = 0.0;
		Double endPirce = 0.0;

		if (pirce_checked == null) {
			pirce_checked = "0";
		}

		switch (pirce_checked) {
		case "1":
			startPirce = 1.0;
			endPirce = 50.0;
			break;
		case "2":
			startPirce = 50.0;
			endPirce = 100.0;
			break;
		case "3":
			startPirce = 100.0;
			endPirce = 200.0;
			break;
		case "4":
			startPirce = 200.0;
			endPirce = 50000.0;
			break;
		default:
			if (price_min != null && price_min != "") {
				startPirce = Double.valueOf(price_min);
			}
			if (price_max != null && price_max != "") {
				endPirce = Double.valueOf(price_max);
			}
			break;
		}
		
		Integer tempCityId = 0;
		if (cityId != null && cityId != "") {
			tempCityId = Integer.valueOf(cityId);
		}
		Integer tempqhtypename = 0;
		if (qhtypename != null && qhtypename != "") {
			tempqhtypename = Integer.valueOf(qhtypename);
		}

		if (pageIndex == null && pageIndex != "") {
			pageIndex = "1";
		}
		
		page = new Page(5, Integer.valueOf(pageIndex));
		page.setCount(hotelService.countHotel(types, tempqhtypename, tempCityId, startPirce, endPirce, query));

		model.addAttribute("page", page);
		model.addAttribute("query", query);
		model.addAttribute("listDictionaryCityType", dictionaryService.listDictionary(null, null, null, 8));
		model.addAttribute("listDictionaryHotelType", dictionaryService.listDictionary(null, null, null, 11));
		model.addAttribute("pirce_checked", pirce_checked);
		model.addAttribute("price_min", price_min);
		model.addAttribute("price_max", price_max);
		model.addAttribute("tempCityId", tempCityId);
		model.addAttribute("tempqhtypename", tempqhtypename);
		model.addAttribute("types", types);
		model.addAttribute("date", date);
		model.addAttribute("date2", date2);
		
		model.addAttribute("listsize",hotelService.countHotel(types, tempqhtypename, tempCityId, startPirce, endPirce, query));
		
		model.addAttribute("listHotel", hotelService.listHotel2(types, tempqhtypename, tempCityId, startPirce,
				endPirce, query, page.getPageIndex(), page.getPageSize()));
		return "search";
	}
}
