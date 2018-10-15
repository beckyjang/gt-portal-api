package tech.genesis.portal.fourm.domain;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "organization")
public class Organization {
	
	@EmbeddedId
    @JsonIgnore
    private OrganizationPk pk;
	
	@Column(name = "uuid", insertable = false, updatable = false)
    private String uuid;
	
	@Column(name="tenant_id", insertable = false, updatable = false)
    private String tenantId;
	
	@Column(name = "status")
    private String status;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	public Organization() {
		
	}

	public Organization(OrganizationPk pk, String uuid, String tenantId, String status, String name,
			String description) {
		this.pk = pk;
		this.uuid = uuid;
		this.tenantId = tenantId;
		this.status = status;
		this.name = name;
		this.description = description;
	}

	public OrganizationPk getPk() {
		return pk;
	}

	public void setPk(OrganizationPk pk) {
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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
	
	
	
	
}
