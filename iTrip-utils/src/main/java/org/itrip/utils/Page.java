package org.itrip.utils;

public class Page {
	private Integer count;//总数
	private Integer pageSize=5;//每页显示数量
	private Integer pageIndex;//当前页数
	private Integer pageAll;//总页数;
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		if(count < 1)
		count = 1;
		this.count = count;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Integer getPageIndex() {
		if(pageIndex==null || pageIndex<1 ){
			return 1;
		}else if (pageIndex>getPageAll()) {
			return getPageAll();
		}else {
			return pageIndex;
		}
	}
	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}
	public Integer getPageAll() {
		return (getCount()%getPageSize())==0?(getCount()/getPageSize()):(getCount()/getPageSize()+1);
	}
	public Page(Integer pageSize, Integer pageIndex) {
		this.pageSize = pageSize;
		this.pageIndex = pageIndex;
	}
	public Page() {
	}
}
