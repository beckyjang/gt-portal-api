package tech.genesis.portal.fourm.domain;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "user_info")
public class User {

	@EmbeddedId
    @JsonIgnore
    private UserPk pk;

	@Column(name="uuid", insertable = false, updatable = false)
    private String id;
	
	@Column(name="tenant_id", insertable = false, updatable = false)
    private String tenantId;
	
    @Column(name="username", nullable = false)
    private String username;
    
    @Column(name="first_name")
    private String firstName;
    
    @Column(name="last_name")
    private String lastName;
    
    @Column(name="email")
    private String email;
    
    @Column(name="status")
    private String status;
    
    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Topic> topics;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private List<Answer> answers;
    
    @Column(name = "organization_uuid")
    private String organizationUuid;
    
    public User() {
    	
    }
    
    public User(UserPk pk, String id, String tenantId, String username, String organizationUuid) {
		this.pk = pk;
		this.id = id;
		this.tenantId = tenantId;
		this.username = username;
		this.organizationUuid = organizationUuid;
	}

	public UserPk getPk() {
		return pk;
	}

	public void setPk(UserPk pk) {
		this.pk = pk;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTenantId() {
		return tenantId;
	}

	public void setTenantId(String tenantId) {
		this.tenantId = tenantId;
	}

	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<Topic> getTopics() {
        return topics;
    }

    public void setTopics(List<Topic> topics) {
        this.topics = topics;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public String displayContentOfOptional() {
        return "";
    }

    public String displayParsedDate() {
        return "";
    }

	public String getOrganizationUuid() {
		return organizationUuid;
	}

	public void setOrganizationUuid(String organizationUuid) {
		this.organizationUuid = organizationUuid;
	}

}
