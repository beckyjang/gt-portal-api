package tech.genesis.portal.security;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.web.context.HttpRequestResponseHolder;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Component;

import tech.genesis.portal.authentication.SessionConfiguration;
import tech.genesis.portal.authentication.service.SessionService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Component
public class CookieSecurityContextRepository implements SecurityContextRepository {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public static final String DEFAULT_AUTHENTICATION_COOKIE_NAME = "gateaugage";
	public static final String ROLE_PREFIX ="ROLE_";
	
	private String authenticationCookieName = DEFAULT_AUTHENTICATION_COOKIE_NAME;
	
	@Autowired
    private SessionService sessionService;
	
	@Autowired
	private SessionConfiguration sessionConfiguration;
	
    @Override
    public SecurityContext loadContext(HttpRequestResponseHolder requestResponseHolder) {
    	
    	HttpServletRequest request = requestResponseHolder.getRequest();
        HttpServletResponse response = requestResponseHolder.getResponse();
        
        logger.info("loadContext: "+request.getRequestURL());
    	
        SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
        
        Cookie authenticationCookie = getAuthenticationCookie(request);
        
        if (authenticationCookie == null) {
            return securityContext;
        }
        
        logger.info("authenticationCookie :"+authenticationCookie.getValue());
        
    	JSONObject userInfo = sessionService.getAuthentication(authenticationCookie.getValue(), 
    			sessionConfiguration.parseTenant(request));
		
    	if (userInfo == null) {
    		return securityContext;
    	}
    
        Authentication authentication = populateAuthentication(userInfo);
        
        if (authentication == null) {
        	return securityContext;
        }
        
        
        securityContext.setAuthentication(authentication);
        
        
        logger.info("loadContext end");
        
        
        
        return securityContext;
    
    }

    private Authentication populateAuthentication(JSONObject userInfo) {
        try {
            String username = getUserName(userInfo);
            String tenantId = getTenantId(userInfo);
        	String role =  ROLE_PREFIX+getUserRole(userInfo);
        	
        	String account = username+"\\"+tenantId+"\\"+role.replace(ROLE_PREFIX, "");
			
        	final List<GrantedAuthority> grantedAuths = new ArrayList<>();
            grantedAuths.add(new SimpleGrantedAuthority(role));
            UserDetails principal = new User(account, "", grantedAuths);
            
            return new UsernamePasswordAuthenticationToken(principal, principal.getPassword(), principal.getAuthorities());
        
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    private String getUserName(JSONObject userInfo) throws JSONException {
    	JSONObject user = (JSONObject) userInfo.get("user");
        String username = user.get("username").toString();
        return username;
    }
    
    private String getTenantId(JSONObject userInfo) throws JSONException {
    	JSONObject user = (JSONObject) userInfo.get("user");
        String tenantId = user.get("tenantId").toString();
        return tenantId;
    }
    
    private String getUserRole(JSONObject userInfo) throws JSONException {
    	JSONObject user = (JSONObject) userInfo.get("user");
        JSONObject customAttrs = (JSONObject) user.get("customAttrs");
        
        return customAttrs.get("role").toString();
    }

    private Cookie getAuthenticationCookie(HttpServletRequest request) {
        if (request.getCookies() == null) {
            return null;
        }
        Optional<Cookie> maybeCookie = Arrays.stream(request.getCookies())
        		.filter(cookie -> cookie.getName().equals(authenticationCookieName)).findFirst();
        return maybeCookie.isPresent() ? maybeCookie.get() : null;
    }

    @Override
    public void saveContext(SecurityContext context, HttpServletRequest request, HttpServletResponse response) {
    }

    @Override
    public boolean containsContext(HttpServletRequest request) {
    	return getAuthenticationCookie(request) != null;
    }

}
