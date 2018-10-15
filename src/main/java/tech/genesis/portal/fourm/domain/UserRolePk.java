package tech.genesis.portal.fourm.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class UserRolePk implements Serializable {

    private static final long serialVersionUID = 476151177562655450L;

    @Column(name = "uuid")
    private String uuid;
    
    @Column(name = "tenant_id")
    private String tenentId;
    
    public UserRolePk() {
    	
    }
    
	public UserRolePk(String uuid, String tenentId) {
		this.uuid = uuid;
		this.tenentId = tenentId;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getTenentId() {
		return tenentId;
	}

	public void setTenentId(String tenentId) {
		this.tenentId = tenentId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((tenentId == null) ? 0 : tenentId.hashCode());
		result = prime * result + ((uuid == null) ? 0 : uuid.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserRolePk other = (UserRolePk) obj;
		if (tenentId == null) {
			if (other.tenentId != null)
				return false;
		} else if (!tenentId.equals(other.tenentId))
			return false;
		if (uuid == null) {
			if (other.uuid != null)
				return false;
		} else if (!uuid.equals(other.uuid))
			return false;
		return true;
	}

    
}
