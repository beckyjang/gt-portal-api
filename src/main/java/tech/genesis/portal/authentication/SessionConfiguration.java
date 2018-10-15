package tech.genesis.portal.authentication;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
public class SessionConfiguration {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
    Environment env;

    public String getAuthenticationEndpoint() {
        return env.getProperty("authenticator_endpoint");
    }
    
    public String getSubDomain() {
        return env.getProperty("tenant_subdomain");
    }
    
    public String parseTenant(HttpServletRequest request) {
		
		String requestUrl = String.valueOf(request.getRequestURL());
		String requestUri = String.valueOf(request.getRequestURI());
		String requestScheme = String.valueOf(request.getScheme()+"://");
		String requestPort = String.valueOf(":"+request.getServerPort());
		String subDomain = getSubDomain();
		
		if (requestUrl != null) {
		   requestUrl = requestUrl.replaceAll(requestUri, "");
		   requestUrl = requestUrl.replaceAll(requestPort, "");
		   requestUrl = requestUrl.replaceAll(requestScheme, "");
		   requestUrl = requestUrl.replaceAll(subDomain, "");
		}
	    
		logger.info("[DEBUG] tenantId {}", requestUrl); 
	   
		return requestUrl;
	
	}
}
