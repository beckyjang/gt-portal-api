package tech.genesis.portal.authorize.oauth2.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import tech.genesis.portal.authorize.oauth2.config.OAuth2Configuration;
import tech.genesis.portal.authorize.oauth2.helper.HttpHelper;


/**
 * @author GenesisTech herotic
 *
 */
@Controller
public class OAuth2Controller {
	private static final Logger logger = LoggerFactory.getLogger(OAuth2Controller.class);
	
	@Autowired
    public OAuth2Configuration oAuth2Configuration;
	
	@Autowired
    public HttpHelper httpHelper;
	
	/**
	 * Controller mapping Protected Api
	 * @return
	 */
	@RequestMapping("/oauth/v2/protectedApi")
	public View getProtectedApi(HttpSession session) {
		logger.info("call protectedApi ");
		return new RedirectView(prepareUrl(oAuth2Configuration.getOOBScope(), generateCSRFToken(session)), true, true, false);
	}
	
	
	private String prepareUrl(String scope, String csrfToken)  {
		try {
			return oAuth2Configuration.getAuthorizationEndpoint() 
					+ "?client_id=" + oAuth2Configuration.getAppClientId() 
					+ "&response_type=code&scope=" + URLEncoder.encode(scope, "UTF-8") 
					+ "&redirect_uri=" + URLEncoder.encode(oAuth2Configuration.getAppRedirectUri(), "UTF-8") 
					+ "&state=" + csrfToken;
		} catch (UnsupportedEncodingException e) {
			logger.error("Exception while preparing url for redirect ", e);
		}
		return null;
	}
	
	private String generateCSRFToken(HttpSession session)  {
		String csrfToken = UUID.randomUUID().toString();
		session.setAttribute("csrfToken", csrfToken);
		return csrfToken;
	}

}
