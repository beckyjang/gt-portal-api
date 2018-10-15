package tech.genesis.portal.fourm.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.genesis.portal.fourm.domain.UserRole;
import tech.genesis.portal.fourm.domain.UserRoleXref;
import tech.genesis.portal.fourm.repository.UserRoleRepository;
import tech.genesis.portal.fourm.repository.UserRoleXrefRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
@RequestMapping("/api/v1/userrole")
public class RestUserRoleController {
	
	@Autowired
	UserRoleRepository userRoleRepository;
	
	@Autowired
	UserRoleXrefRepository userRoleXrefRepository;
	
	@GetMapping(value = { "", "/" })
	public List<UserRole> getAllUserRole(){
		return userRoleRepository.findAll();
	}

	@GetMapping(value = { "/xref" })
	public List<UserRoleXref> getAllUserRoleXref(){
		return userRoleXrefRepository.findAll();
	}
}
