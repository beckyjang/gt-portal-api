package tech.genesis.portal.papi.api.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tech.genesis.portal.authentication.SessionConfiguration;
import tech.genesis.portal.authorize.oauth2.config.OAuth2Configuration;
import tech.genesis.portal.authorize.oauth2.helper.HttpHelper;
import tech.genesis.portal.authorize.oauth2.service.AccessTokenService;
import tech.genesis.portal.papi.api.service.ApiService;

/**
 * @author GenesisTech herotic
 * 
 */
@RestController
@RequestMapping("/papi/v1/apis")
public class ApiController {
    
    @Autowired
    public OAuth2Configuration oAuth2Configuration;
    
    @Autowired
    public HttpHelper httpHelper;
    
    @Autowired
    public AccessTokenService accessTokenService;
    
    @Autowired
    public ApiService apiService;
    
    @Autowired
	private SessionConfiguration sessionConfiguration;
    
    
    private static final Logger logger = LoggerFactory.getLogger(ApiController.class);
    
    
    @GetMapping( value = {"","/"})
    public @ResponseBody ResponseEntity<?> getApis(HttpServletRequest request, HttpSession session) {
    	
    	String tenantId = (String)session.getAttribute("tenant_id");
    	String accessToken = (String)session.getAttribute("access_token");
    	
    	return new ResponseEntity<>(apiService.findApisByAccessToken(
    			tenantId, accessToken), 
    			HttpStatus.OK);
    	
    }
    
    @GetMapping( value = {"/{uuid}"})
    public @ResponseBody ResponseEntity<?> getApiDetail(@PathVariable("uuid") final String uuid,HttpServletRequest request, HttpSession session) {
    	
    	String tenantId = (String)session.getAttribute("tenant_id");
    	String accessToken = (String)session.getAttribute("access_token");
    	
    	return new ResponseEntity<>(apiService.findApiDetailByAccessToken(
    			tenantId, accessToken ,uuid), 
    			HttpStatus.OK);
    	
    }
    
   /*
    @GetMapping( value = {"","/"})
    public @ResponseBody ResponseEntity<?> getApis(HttpServletRequest request) {
    	
    	final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    	CustomUser customUser = (CustomUser) authentication.getPrincipal();
    	
    	return new ResponseEntity<>(apiService.findApisByAccessToken(
    			customUser.getTenantid(), customUser.getAccesstoken()), 
    			HttpStatus.OK);
    	
    }
    
    @GetMapping( value = {"/{uuid}"})
    public @ResponseBody ResponseEntity<?> getApiDetail(@PathVariable("uuid") final String uuid,HttpServletRequest request) {
    	
    	final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    	CustomUser customUser = (CustomUser) authentication.getPrincipal();
    	
    	return new ResponseEntity<>(apiService.findApiDetailByAccessToken(
    			customUser.getTenantid(), customUser.getAccesstoken(),uuid), 
    			HttpStatus.OK);
    	
    }
    */

}
