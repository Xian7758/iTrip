package org.itrip.service.impl;

import java.util.List;

import org.itrip.mapper.DictionaryMapper;
import org.itrip.pojo.Dictionary;
import org.itrip.service.DictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DictionaryServiceImpl implements DictionaryService{
	
	@Autowired
	DictionaryMapper dictionaryMapper; 
	@Override
	public List<Dictionary> listDictionary(String type, String typeName, Integer parentId, Integer cdid) {
		return dictionaryMapper.listDictionary(type, typeName, parentId, cdid);
	}

}
