package tech.genesis.portal.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.firewall.StrictHttpFirewall;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
    private SecurityContextRepository securityContextRepository;
	
	

	
	@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth)
			throws Exception {
		/*
		auth.
			inMemoryAuthentication()
			.passwordEncoder(passwordEncoder())
			.withUser("user\\t1\\developer").password("user").roles("USER").and()
			.withUser("admin\\t1\\portaladministrators").password("$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi").roles("portaladministrators");
		*/
	}
	
	
	
	@Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
		
		httpSecurity
		//.addFilterBefore(corsFilter, ChannelProcessingFilter.class)
		.csrf().disable()
        .headers().frameOptions().disable().and()
        .cors().disable()
        //.httpBasic()
		//.and()
		.securityContext().securityContextRepository(securityContextRepository)
        .and()
        .authorizeRequests()
        //.antMatchers(
        //        "/*/api/v1/**"
        //).authenticated()
        // front permit
        .anyRequest().permitAll();
    }
    
}
