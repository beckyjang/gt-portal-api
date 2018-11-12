package tech.genesis.portal.papi.user.controller;

import javax.servlet.http.HttpSession;

import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClientBuilder;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tech.genesis.portal.authorize.oauth2.config.OAuth2Configuration;
import tech.genesis.portal.authorize.oauth2.controller.OAuth2Controller;
import tech.genesis.portal.authorize.oauth2.helper.HttpHelper;
import tech.genesis.portal.authorize.oauth2.model.BearerTokenResponse;
import tech.genesis.portal.authorize.oauth2.service.AccessTokenService;
import tech.genesis.portal.papi.user.controller.model.UserRequest;


/**
 * @author GenesisTech herotic
 * 
 */
@RestController
@RequestMapping("/api/v1/users")
public class UsersController {
    
    @Autowired
    public OAuth2Configuration oAuth2Configuration;
    
    @Autowired
    public HttpHelper httpHelper;
    
    @Autowired
    public AccessTokenService accessTokenService;
    
    private static final Logger logger = LoggerFactory.getLogger(UsersController.class);
    
    @ResponseBody
    @PostMapping( value = {"/sign"})
    public String loginUser(@RequestBody UserRequest memberRequest, HttpSession session) {
        
    	String failureMsg="Failed";
    	
        try {
        	
        	String userName = memberRequest.getTenantId()+"\\"+memberRequest.getUserName();
        	String password = memberRequest.getPassword();
        	
            BearerTokenResponse bearerTokenResponse = accessTokenService.getAccessToken(session, userName, password);
            
            /*
             * session save inmemory
             */
           
            session.setAttribute("tenant_id", memberRequest.getTenantId());
            session.setAttribute("access_token", bearerTokenResponse.getAccessToken());
            session.setAttribute("refresh_token", bearerTokenResponse.getRefreshToken());
                        
            String jsonString = new JSONObject()
                    .put("access_token", bearerTokenResponse.getAccessToken())
                    .put("refresh_token", bearerTokenResponse.getRefreshToken()).toString();
            return jsonString;
        }
        catch (Exception ex) {
        	logger.error("Exception refreshToken ", ex);
        	try {
				return new JSONObject().put("response",failureMsg).toString();
			} catch (JSONException e) {
				logger.error(e.getMessage());
				return null;
			}
        }    
               
    }

}
