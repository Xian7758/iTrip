package org.itrip.pojo;

public class Comovement {
	private String prname;
	private String coname;
	private String ctname;
	private Integer coid;
	private Integer prid;
	private Integer ctid;
	
	
	public Integer getPrid() {
		return prid;
	}
	public void setPrid(Integer prid) {
		this.prid = prid;
	}
	public Integer getCtid() {
		return ctid;
	}
	public void setCtid(Integer ctid) {
		this.ctid = ctid;
	}
	public String getPrname() {
		return prname;
	}
	public void setPrname(String prname) {
		this.prname = prname;
	}
	public String getConame() {
		return coname;
	}
	public void setConame(String coname) {
		this.coname = coname;
	}
	public String getCtname() {
		return ctname;
	}
	public void setCtname(String ctname) {
		this.ctname = ctname;
	}
	public Integer getCoid() {
		return coid;
	}
	public void setCoid(Integer coid) {
		this.coid = coid;
	}
}
