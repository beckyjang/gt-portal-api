package tech.genesis.portal.fourm.domain;

import org.hibernate.annotations.Type;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "answer")
public class Answer {

    @Id
    @GeneratedValue
    private Long id;

    //@Lob
    @Column(nullable = false, columnDefinition="TEXT")
    private String content;

    @Column(nullable = false)
    private boolean useful;

    @Column(name="tenant_id", insertable = false, updatable = false)
    private String tenantId;
    
    private LocalDateTime createdDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "tenant_id"),
            @JoinColumn(name = "uuid")
    })
    @JsonManagedReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_topic")
    @JsonBackReference
    //@JsonManagedReference
    private Topic topic;
    
    @OneToMany(mappedBy = "answer")
    @JsonManagedReference
    //@JsonBackReference
    private List<AttachFile> attachFile;
   
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isUseful() {
        return useful;
    }

    public void setUseful(boolean useful) {
        this.useful = useful;
    }
    
    public String getTenantId() {
		return tenantId;
	}

	public void setTenantId(String tenantId) {
		this.tenantId = tenantId;
	}

	public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Topic getTopic() {
        return topic;
    }

    public void setTopic(Topic topic) {
        this.topic = topic;
    }
    
    public List<AttachFile> getAttachFile() {
		return attachFile;
	}

	public void setAttachFile(List<AttachFile> attachFile) {
		this.attachFile = attachFile;
	}

	public String displayParsedCreatedDate() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm - dd.MM.yyyy");
        return this.createdDate.format(formatter);
    }

    public String displayBeginning() {
        return (this.content.length() < 32) ? this.content.concat("...") : this.content.substring(0, 30).concat("...");
    }
}
