package org.itrip.pojo;

public class User {
	private Integer id;
	private String contact;
	private String userName;
	private String password;
	private int usertypeId;
	private float money;
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getUsertypeId() {
		return usertypeId;
	}
	public void setUsertypeId(int usertypeId) {
		this.usertypeId = usertypeId;
	}
	public float getMoney() {
		return money;
	}
	public void setMoney(float money) {
		this.money = money;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
