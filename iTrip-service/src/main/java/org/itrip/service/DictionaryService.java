package org.itrip.service;

import java.util.List;

import org.itrip.pojo.Dictionary;

public interface DictionaryService {
	List<Dictionary> listDictionary(String type, String typeName, Integer parentId, Integer cdid);
}
