package tech.genesis.portal.authentication.service;


import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import tech.genesis.portal.authentication.SessionConfiguration;

/**
 * @author GenesisTech herotic
 *
 */
@Service
public class SessionService {
  
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    public SessionConfiguration sessionConfiguration;
    
    public JSONObject getAuthentication(String requestId, String tenantId) {
    	JSONObject jsonObj = null;
    	
    	final String urlOverHttps = sessionConfiguration.getAuthenticationEndpoint()+tenantId+"/"+requestId;
    	
    	try {
    	
		    final ResponseEntity<String> response = new RestTemplate().exchange(urlOverHttps, HttpMethod.GET, null, String.class);
	        
		    if (response.getStatusCode().value() == 200) {
		    	jsonObj = new JSONObject(response.getBody());
			}
	        else {
	        	logger.info("failed getting");
			}
	    
    	} catch (Exception e) {
    		logger.info("[DEBUG] failed getting"+e.getMessage());
    		new IllegalStateException("Likely a redirect loop");
		}
	    
	    
		return jsonObj;
           
    }
    
}
