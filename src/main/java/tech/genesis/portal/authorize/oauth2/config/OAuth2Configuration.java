package tech.genesis.portal.authorize.oauth2.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

/**
 * @author GenesisTech herotic
 *
 */
@Configuration
@PropertySource(value="classpath:/application.properties", ignoreResourceNotFound=true)
public class OAuth2Configuration {
	
	@Autowired
    Environment env;

	public String getAppClientId() {
    	return env.getProperty("OAuth2AppClientId");
    }

    public String getAppClientSecret() {
        return env.getProperty("OAuth2AppClientSecret");
    }
    
    public String getAppRedirectUri() {
        return env.getProperty("OAuth2AppRedirectUri");
    }
   
    public String getOOBScope(){
		return env.getProperty("oobScope");
	}
	
    public String getAuthorizationEndpoint() {
        return env.getProperty("authorization_endpoint");
    }
    
    public String getTokenEndpoint() {
        return env.getProperty("token_endpoint");
    }
    
    public String getRevokeTokenEndpoint() {
		return env.getProperty("token_revocation_endpoint");
	}
    
	public String getProxyAPIHost() {
		return env.getProperty("proxy_api_host");
	}
    
}
