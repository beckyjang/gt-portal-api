package tech.genesis.portal.authorize.oauth2.controller;

import javax.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import tech.genesis.portal.authorize.oauth2.config.OAuth2Configuration;
import tech.genesis.portal.authorize.oauth2.helper.HttpHelper;
import tech.genesis.portal.authorize.oauth2.model.BearerTokenResponse;
import tech.genesis.portal.authorize.oauth2.service.RefreshTokenService;


/**
 * @author GenesisTech herotic
 *
 */
@Controller
public class RefreshTokenController {
	
	@Autowired
    public OAuth2Configuration oAuth2Configuration;
	
	@Autowired
	public HttpHelper httpHelper;
	
	@Autowired
	public RefreshTokenService refreshTokenService;
	
	private static final Logger logger = LoggerFactory.getLogger(RefreshTokenController.class);
	
    /**
     * Call to refresh tokens 
     * 
     * @param session
     * @return
     */
	@ResponseBody
    @RequestMapping("/oauth/v2/refreshToken")
    public String refreshToken(HttpSession session) {
		
    	String failureMsg="Failed";
    
        try {
        	
            BearerTokenResponse bearerTokenResponse = refreshTokenService.refresh(session);
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
