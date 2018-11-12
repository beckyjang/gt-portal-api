package tech.genesis.portal.authentication.domain;

public class UserInfo {
	
	private String username;
	private String tenantId;
	private String role;

	public String getUsername() {
		return username;
	}

	public String getTenantId() {
		return tenantId;
	}

	public String getRole() {
		return role;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setTenantId(String tenantId) {
		this.tenantId = tenantId;
	}

	public void setRole(String role) {
		this.role = role;
	}


}
