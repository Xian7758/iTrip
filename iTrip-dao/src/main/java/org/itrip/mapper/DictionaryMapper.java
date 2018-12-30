package org.itrip.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.itrip.pojo.Dictionary;
import org.springframework.stereotype.Component;

@Component
public interface DictionaryMapper {
	List<Dictionary> listDictionary(@Param(value = "type") String type, @Param(value = "typeName") String typeName,
			@Param(value = "parentId") Integer parentId, @Param(value = "cdid") Integer cdid);
}
