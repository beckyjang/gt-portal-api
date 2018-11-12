package tech.genesis.portal.authentication.service;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import tech.genesis.portal.authentication.domain.UserInfo;

@Service
public class AuthSessionService {

	public UserInfo getUserInfo() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String userDetailName = ((UserDetails)principal).getUsername();
        
        String[] splitArray =  userDetailName.split("\\\\");
        
        UserInfo userInfo = new UserInfo();
        userInfo.setUsername(splitArray[0]);
        userInfo.setTenantId(splitArray[1]);
        userInfo.setRole(splitArray[2]);
        
        /*
    	username = "admin";
		tenantId = "apipt";
		role = ROLE_PORTAL_ADMIN;
        */
        
        return userInfo;
	}
	
}
