package tech.genesis.portal.papi.user.controller.model;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Generated;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

public class UserRequest {
	
	private String userName;
	
	private String password;
	
	private String tenantId;
    
	public UserRequest() {
		
	}
	
	public String getUserName(){
		return userName;
	}
	
	public String getPassword(){
		return password;
	}
	
	public String getTenantId(){
		return tenantId;
	}
}
