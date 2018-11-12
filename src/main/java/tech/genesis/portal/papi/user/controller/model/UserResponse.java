package tech.genesis.portal.papi.user.controller.model;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Generated;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@Generated("org.jsonschema2pojo")
@JsonIgnoreProperties(ignoreUnknown = true)
@Component
public class UserResponse {
	
	@JsonProperty("Locale")
    private String locale;
	
	@JsonProperty("OrganizationName")
    private String organizationName;
	
	@JsonProperty("Email")
    private String email;
    
    @JsonProperty("Roletype")
    private String roleType;
    
    @JsonProperty("RoleUuid")
    private String roleUuid;
    
    @JsonProperty("Status")
    private String status;
    
    @JsonProperty("FirstName")
    private String firstName;
    
    @JsonProperty("RoleDescription")
    private String roleDescription;
    
    @JsonProperty("OrganizationUuid")
    private String organizationUuid;
    
    @JsonProperty("RoleName")
    private String roleName;
    
    @JsonProperty("Uuid")
    private String uuid;
    
    @JsonProperty("Username")
    private String userName;
    
    @JsonProperty("FullName")
    private String fullName;
    
    @JsonProperty("LastName")
    private String lastName;
    
    
	@JsonProperty("Locale")
	public String getLocale() {
		return locale;
	}

    @JsonProperty("OrganizationName")
	public String getOrganizationName() {
		return organizationName;
	}

    @JsonProperty("Email")
	public String getEmail() {
		return email;
	}

    @JsonProperty("RoleType")
	public String getRoleType() {
		return roleType;
	}

    @JsonProperty("RoleUuid")
	public String getRoleUuid() {
		return roleUuid;
	}

    @JsonProperty("Status")
	public String getStatus() {
		return status;
	}

    @JsonProperty("FirstName")
	public String getFirstName() {
		return firstName;
	}

    @JsonProperty("RoleDescription")
	public String getRoleDescription() {
		return roleDescription;
    }
    
    @JsonProperty("OrganizationUuid")
	public String getOrganizationUuid() {
		return organizationUuid;
	}
    
    @JsonProperty("RoleName")
	public String getRoleName() {
		return roleName;
	}

    @JsonProperty("Uuid")
	public String getUuid() {
		return uuid;
	}

    @JsonProperty("Username")
    public String getUserName() {
		return userName;
	}

    @JsonProperty("FullName")
    public String getFullName() {
		return fullName;
	}

    @JsonProperty("LastName")
	public String getLastName() {
		return lastName;
	}

    @JsonProperty("Locale")
	public void setLocale(String locale) {
		this.locale = locale;
	}

    @JsonProperty("OrganizationName")
	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}

    @JsonProperty("Email")
	public void setEmail(String email) {
		this.email = email;
	}

    @JsonProperty("RoleType")
	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}

    @JsonProperty("RoleUuid")
	public void setRoleUuid(String roleUuid) {
		this.roleUuid = roleUuid;
	}

    @JsonProperty("Status")
	public void setStatus(String status) {
		this.status = status;
	}

    @JsonProperty("FirstName")
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

    @JsonProperty("RoleDescription")
	public void setRoleDescription(String roleDescription) {
		this.roleDescription = roleDescription;
	}

    @JsonProperty("OrganizationUuid")
	public void setOrganizationUuid(String organizationUuid) {
		this.organizationUuid = organizationUuid;
	}

    @JsonProperty("RoleName")
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

    @JsonProperty("Uuid")
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

    @JsonProperty("Username")
	public void setUserName(String userName) {
		this.userName = userName;
	}

    @JsonProperty("FullName")
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

    @JsonProperty("LastName")
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
    
}
