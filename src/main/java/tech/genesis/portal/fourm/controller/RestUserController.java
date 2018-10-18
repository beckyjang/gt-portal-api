package tech.genesis.portal.fourm.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonBackReference;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;

import tech.genesis.portal.authentication.SessionConfiguration;
import tech.genesis.portal.fourm.domain.Answer;
import tech.genesis.portal.fourm.domain.Organization;
import tech.genesis.portal.fourm.domain.Topic;
import tech.genesis.portal.fourm.domain.User;
import tech.genesis.portal.fourm.repository.AnswerRepository;
import tech.genesis.portal.fourm.repository.OrganizationRepository;
import tech.genesis.portal.fourm.repository.TopicRepository;
import tech.genesis.portal.fourm.repository.UserRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
@Transactional
public class RestUserController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	TopicRepository topicRepository;
	
	@Autowired
	AnswerRepository answerRepository;
	
	@Autowired
	OrganizationRepository organizationRepository;
	
	@Autowired
	private SessionConfiguration sessionConfiguration;
	
	public static final String ROLE_PORTAL_ADMIN = "portaladministrators";
	public static final String ROLE_PORTAL_ORG_DEVELOPER = "devorgadministrators";
	public static final String ROLE_PORTAL_DEVELOPER = "developers";
	
	@GetMapping(value = { "/api/v1/users", "/api/v1/users/" })
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	// 4.2.7.8
	@GetMapping("/api/v0/users/spectator/")
	public ResponseEntity<Object> getSpectatorBy4278(HttpServletRequest request){
		
		String tenantId = sessionConfiguration.parseTenant(request);
		
		List<User> userList = userRepository.findUserByTenantId(tenantId);
		
		CumsumerResponse cumsumerResponse = new CumsumerResponse();
		List<CumsumerResponse> cumsumerResponseList = new ArrayList<CumsumerResponse>();
		
		for(User user: userList) {
			cumsumerResponse = new CumsumerResponse();
			String user_uuid = user.getId();
			String roleName = userRepository.getUserRoleName(user_uuid, tenantId);
			
			if(Objects.isNull(roleName))
				continue;
			
			String organization_uuid = user.getOrganizationUuid();
			
			if(Objects.isNull(organization_uuid))
				continue;
			
			Organization organization = organizationRepository.getOranizationByUuidAndTenantId(organization_uuid, tenantId);
			
			if(Objects.isNull(organization))
				continue;
			
			cumsumerResponse.setId(user_uuid);
			
			cumsumerResponse.setItemName(user.getFirstName()+" "+user.getLastName());
			cumsumerResponse.setCategory(organization.getName());
		
			cumsumerResponseList.add(cumsumerResponse);
		}
	   
		HttpHeaders headers = new HttpHeaders();
		
        return new ResponseEntity<Object>(cumsumerResponseList, headers, HttpStatus.OK );
	}
	
	// 4.2.9.1
	@GetMapping("/api/v1/users/spectator")
	public ResponseEntity<Object> getSpectator(HttpServletRequest request){
		
		String tenantId = sessionConfiguration.parseTenant(request);
		
		List<Object[]> userList = userRepository.findAllUsersByTenantId(tenantId);
		
		CumsumerResponse cumsumerResponse = new CumsumerResponse();
		List<CumsumerResponse> cumsumerResponseList = new ArrayList<CumsumerResponse>();
		
		for(Object[] user: userList) {
			cumsumerResponse = new CumsumerResponse();
			String user_uuid = user[0].toString();
			cumsumerResponse.setId(user_uuid);
			cumsumerResponse.setItemName(user[2].toString()+" "+user[3].toString()+"("+user[1].toString()+")");
			cumsumerResponse.setCategory(user[4].toString());
		
			cumsumerResponseList.add(cumsumerResponse);
		}
	   
		HttpHeaders headers = new HttpHeaders();
		
        return new ResponseEntity<Object>(cumsumerResponseList, headers, HttpStatus.OK );
	}
	
	
	@GetMapping("/session")
	public UserResponse getUserBySession(){
		
		/*
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String userDetailName = ((UserDetails)principal).getUsername();
        
        String[] splitArray =  userDetailName.split("\\\\");
        
        String username = splitArray[0];
        String tenantId = splitArray[1];
        String role = splitArray[2];
       
        String uuid_user = userRepository.getUserByUsernameAndTenantId(username, tenantId).getId();
        */

		String username = "admin";
		String tenantId = "apipt";
		String role = ROLE_PORTAL_ADMIN;
		
		User user = userRepository.getUserByUsernameAndTenantId(username, tenantId);
       
        Organization organization = organizationRepository.getOranizationByUuidAndTenantId(user.getOrganizationUuid(), tenantId);
        
        UserResponse userResponse = new UserResponse();
        
        userResponse.setUser(user);
        userResponse.setRole(role);
        userResponse.setOrganization(organization);
        
        return userResponse;
	}
	
	public static class CumsumerResponse {
		private String id;
		private String itemName;
		private String category;
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getItemName() {
			return itemName;
		}
		public void setItemName(String itemName) {
			this.itemName = itemName;
		}
		public String getCategory() {
			return category;
		}
		public void setCategory(String category) {
			this.category = category;
		}
	}
	
	public static class UserResponse {

		private User user;
		private Organization organization;
		private String role;
		
		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		public Organization getOrganization() {
			return organization;
		}

		public void setOrganization(Organization organization) {
			this.organization = organization;
		}
		
		public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}

    }
	
}
