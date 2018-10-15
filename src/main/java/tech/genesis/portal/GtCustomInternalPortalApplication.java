package tech.genesis.portal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import tech.genesis.portal.config.FileStorageProperties;
import tech.genesis.portal.fourm.domain.Organization;
import tech.genesis.portal.fourm.domain.OrganizationPk;
import tech.genesis.portal.fourm.domain.User;
import tech.genesis.portal.fourm.domain.UserPk;
import tech.genesis.portal.fourm.repository.OrganizationRepository;
import tech.genesis.portal.fourm.repository.UserRepository;

@SpringBootApplication
@EnableConfigurationProperties({
    FileStorageProperties.class
})
public class GtCustomInternalPortalApplication {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	OrganizationRepository organizationRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(GtCustomInternalPortalApplication.class, args);
	}
	
	@Bean
    CommandLineRunner runner() {
        return args -> {
        	/*
        	userRepository.save(new User(new UserPk("1","t1"),"1", "t1", "admin","1"));
        	userRepository.save(new User(new UserPk("2","t2"),"2", "t1", "user",""));
        	userRepository.save(new User(new UserPk("3","t3"),"3", "t2", "any",""));
        	
        	organizationRepository.save(new Organization(new OrganizationPk("1","t1"),"1","t1","ENABLED","portal api organization","desc"));
            */
        };
    }
    
	
}
