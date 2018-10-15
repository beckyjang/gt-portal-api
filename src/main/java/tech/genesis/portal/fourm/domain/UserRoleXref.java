package tech.genesis.portal.fourm.domain;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user_role_xref")
public class UserRoleXref {
	@EmbeddedId
    @JsonIgnore
    private UserRoleXrefPk pk;
	
	@Column(name = "uuid", insertable = false, updatable = false)
    private String uuid;
	
	@Column(name="tenant_id", insertable = false, updatable = false)
    private String tenantId;
	
	@Column(name = "user_uuid")
    private String user_uuid;
	
	@Column(name = "role_uuid")
    private String role_uuid;

	public UserRoleXrefPk getPk() {
		return pk;
	}

	public void setPk(UserRoleXrefPk pk) {
		this.pk = pk;
	}

	public String getUser_uuid() {
		return user_uuid;
	}

	public void setUser_uuid(String user_uuid) {
		this.user_uuid = user_uuid;
	}

	public String getRole_uuid() {
		return role_uuid;
	}

	public void setRole_uuid(String role_uuid) {
		this.role_uuid = role_uuid;
	}
	
	
	
}