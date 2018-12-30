package org.itrip.pojo;

public class Page {
	protected int pageSize;
	protected int currentPage;
	protected int totalCounts;
	protected int startRow;
	protected int totalPage;
	protected int tAttribute;
	protected int totalRows;
    protected String  queryCondition;
	protected String startRowBycurrentPage;
	public String getStartRowBycurrentPage() {
		return startRowBycurrentPage;
	}
	public void setStartRowBycurrentPage(String startRowBycurrentPage) {
		this.startRowBycurrentPage = startRowBycurrentPage;
	}
	public int getTotalRows() {
		return totalRows;
	}
	public void setTotalRows(int totalRows) {
		this.totalRows = totalRows;
	}
	
	public String  getQueryCondition() {
		return queryCondition;
	}
	public void setQueryCondition(String  queryCondition) {
		this.queryCondition = queryCondition;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getTotalCounts() {
		return totalCounts;
	}
	public void setTotalCounts(int totalCounts) {
		this.totalCounts = totalCounts;
	}
	public int getStartRow() {
		return startRow;
	}
	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int gettAttribute() {
		return tAttribute;
	}
	public void settAttribute(int tAttribute) {
		this.tAttribute = tAttribute;
	}
	
}
