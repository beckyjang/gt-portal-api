package tech.genesis.portal.papi.api.model;

import javax.annotation.Generated;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Generated("org.jsonschema2pojo")
@JsonIgnoreProperties(ignoreUnknown = true)
@Component
public class Api {
	@JsonProperty("Description")
    private String description;
	
	@JsonProperty("ApiGroupUsage")
    private String apiGroupUsage;
	
	@JsonProperty("InSync")
    private String inSync;
    
    @JsonProperty("PrivateDescription")
    private String privateDescription;
    
    @JsonProperty("ServiceDisruption")
    private String serviceDisruption;
    
    @JsonProperty("Name")
    private String name;
    
    @JsonProperty("ApplicationUsage")
    private String applicationUsage;
    
    @JsonProperty("Version")
    private String version;
    
    @JsonProperty("PortalStatus")
    private String portalStatus;
    
    @JsonProperty("SsgServiceType")
    private String ssgServiceType;
    
    @JsonProperty("AuthenticationType")
    private String authenticationType;
    
    @JsonProperty("SsgName")
    private String ssgName;
    
    @JsonProperty("ApiEulaUuid")
    private String apiEulaUuid;
    
    @JsonProperty("SpecFilename")
    private String specFilename;
    
    @JsonProperty("SsgUrl")
    private String ssgUrl;
    
    @JsonProperty("AccessStatus")
    private String accessStatus;
    
    @JsonProperty("Uuid")
    private String uuid;
    
    @JsonProperty("ApiLocationUrl")
    private String apiLocationUrl;
    
    @JsonProperty("OrgUuid")
    private String orgUuid;
    
    @JsonProperty("OrganizationUsage")
    private String organizationUsage;
    
    @JsonProperty("PublishedByPortal")
    private boolean publishedByPortal;
    
    @JsonProperty("Pending")
    private String pending;

    @JsonProperty("Description")
	public String getDescription() {
		return description;
	}

    @JsonProperty("ApiGroupUsage")
	public String getApiGroupUsage() {
		return apiGroupUsage;
	}

    @JsonProperty("InSync")
	public String getInSync() {
		return inSync;
	}

    @JsonProperty("PrivateDescription")
	public String getPrivateDescription() {
		return privateDescription;
	}

    @JsonProperty("ServiceDisruption")
	public String getServiceDisruption() {
		return serviceDisruption;
	}

    @JsonProperty("Name")
	public String getName() {
		return name;
	}

    @JsonProperty("ApplicationUsage")
	public String getApplicationUsage() {
		return applicationUsage;
	}

    @JsonProperty("Version")
	public String getVersion() {
		return version;
	}

    @JsonProperty("PortalStatus")
	public String getPortalStatus() {
		return portalStatus;
	}

    @JsonProperty("SsgServiceType")
	public String getSsgServiceType() {
		return ssgServiceType;
	}

    @JsonProperty("AuthenticationType")
	public String getAuthenticationType() {
		return authenticationType;
	}

    @JsonProperty("SsgName")
	public String getSsgName() {
		return ssgName;
	}

    @JsonProperty("ApiEulaUuid")
	public String getApiEulaUuid() {
		return apiEulaUuid;
	}

    @JsonProperty("SpecFilename")
    public String getSpecFilename() {
		return specFilename;
	}

    @JsonProperty("SsgUrl")
	public String getSsgUrl() {
		return ssgUrl;
	}

    @JsonProperty("AccessStatus")
	public String getAccessStatus() {
		return accessStatus;
	}

    @JsonProperty("Uuid")
	public String getUuid() {
		return uuid;
	}

    @JsonProperty("ApiLocationUrl")
	public String getApiLocationUrl() {
		return apiLocationUrl;
	}

    @JsonProperty("OrgUuid")
	public String getOrgUuid() {
		return orgUuid;
	}

    @JsonProperty("OrganizationUsage")
	public String getOrganizationUsage() {
		return organizationUsage;
	}

    @JsonProperty("PublishedByPortal")
	public boolean isPublishedByPortal() {
		return publishedByPortal;
	}

    @JsonProperty("Pending")
	public String getPending() {
		return pending;
	}

    
}
