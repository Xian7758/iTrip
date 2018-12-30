package org.itrip.pojo;

import java.sql.Date;

public class Hotel {
	private Integer id;
	private String hotelName;
	private Integer countryId;
	private Integer provinceId;
	private Integer cityId;
	private Integer commentCount;
	private Integer recommendCount;
	private Float price;
	private String img;
	private String address;
	private String details;
	private String facilities;
	private String hotelPolicy;
	private Integer hotelType;
	private Integer hotelLevel;
	private Date creationDate;
	private Integer createdBy;
	private Date modifyDate;
	private Integer modifiedBy;
	private String features;
	private String city;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public Integer getCountryId() {
		return countryId;
	}
	public void setCountryId(Integer countryId) {
		this.countryId = countryId;
	}
	public Integer getProvinceId() {
		return provinceId;
	}
	public void setProvinceId(Integer provinceId) {
		this.provinceId = provinceId;
	}
	public Integer getCityId() {
		return cityId;
	}
	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public String getFacilities() {
		return facilities;
	}
	public void setFacilities(String facilities) {
		this.facilities = facilities;
	}
	public String getHotelPolicy() {
		return hotelPolicy;
	}
	public void setHotelPolicy(String hotelPolicy) {
		this.hotelPolicy = hotelPolicy;
	}
	public Integer getHotelType() {
		return hotelType;
	}
	public void setHotelType(Integer hotelType) {
		this.hotelType = hotelType;
	}
	public Integer getHotelLevel() {
		return hotelLevel;
	}
	public void setHotelLevel(Integer hotelLevel) {
		this.hotelLevel = hotelLevel;
	}
	public Date getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	public Integer getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}
	public Date getModifyDate() {
		return modifyDate;
	}
	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}
	public Integer getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(Integer modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	public String getFeatures() {
		return features;
	}
	public void setFeatures(String features) {
		this.features = features;
	}
	public Integer getCommentCount() {
		return commentCount;
	}
	public void setCommentCount(Integer commentCount) {
		this.commentCount = commentCount;
	}
	public Integer getRecommendCount() {
		return recommendCount;
	}
	public void setRecommendCount(Integer recommendCount) {
		this.recommendCount = recommendCount;
	}
	public Float getPrice() {
		return price;
	}
	public void setPrice(Float price) {
		this.price = price;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
}
