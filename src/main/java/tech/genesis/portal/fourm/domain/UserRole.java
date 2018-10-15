package tech.genesis.portal.fourm.domain;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user_role")
public class UserRole {
	@EmbeddedId
    @JsonIgnore
    private UserRolePk pk;
	
	@Column(name = "uuid", insertable = false, updatable = false)
    private String uuid;
	
	@Column(name="tenant_id", insertable = false, updatable = false)
    private String tenantId;
	
	@Column(name="name", nullable = false, length = 100)
    private String name;
	
	@Column(name="description", nullable = false)
    private String description;
	
	@Column(name="type", nullable = false)
    private String type;
	
	@Column(name="active", nullable = false)
    private boolean active;

	public UserRolePk getPk() {
		return pk;
	}

	public void setPk(UserRolePk pk) {
		this.pk = pk;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getTenantId() {
		return tenantId;
	}

	public void setTenantId(String tenantId) {
		this.tenantId = tenantId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	
	
}