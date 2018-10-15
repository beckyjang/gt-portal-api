package tech.genesis.portal.fourm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import tech.genesis.portal.fourm.domain.Answer;
import tech.genesis.portal.fourm.domain.AttachFile;
import tech.genesis.portal.fourm.repository.AnswerRepository;
import tech.genesis.portal.fourm.repository.AttachFileRepository;
import tech.genesis.portal.fourm.repository.TopicRepository;
import tech.genesis.portal.fourm.repository.UserRepository;
import tech.genesis.portal.fourm.service.FileStorageService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import static tech.genesis.portal.fourm.controller.RestTopicController.ROLE_PORTAL_ADMIN;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
@RequestMapping("/api/v1/answers")
@Transactional
public class RestAnswersController {

	@Autowired
    AnswerRepository answerRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    TopicRepository topicRepository;
    @Autowired
	AttachFileRepository attachFileRepository;
    @Autowired
    private FileStorageService fileStorageService;
    
    @GetMapping
    public List<Answer> getAllAnswer() {
        return answerRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Answer> getAnswersById(@PathVariable Long id) {
        return answerRepository.findById(id);
    }
    
    @GetMapping("/user/{uuid}")
    public List<Answer> getAnswersByUser(@PathVariable String uuid) {
        return answerRepository.findAnswerByUser_IdOrderByCreatedDateDesc(uuid);
    }
    
    @GetMapping("/useful/user/{uuid}")
    public List<Answer> getUsefulAnswersByUser(@PathVariable String uuid) {
        return answerRepository.findAnswerByUser_IdAndUsefulOrderByCreatedDateDesc(uuid, true);
    }
    
    @PostMapping(value={"/topic/{topic_id}"})
    public ResponseEntity<Answer> createAnswerBySessionByTopicId(@ModelAttribute AnswerForm answerForm, @PathVariable String topic_id, HttpServletRequest request) {
    	
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

        String uuid_user = userRepository.getUserByUsernameAndTenantId(username, tenantId).getId();
		
        Answer answer = new Answer();
        AttachFile attachFile = new AttachFile();
        
        // if file exist set file
        if(Objects.nonNull(answerForm.getFile())) {
     
        	MultipartFile file = answerForm.getFile();
    		
    		String fileName = fileStorageService.storeFile(file);
    		
    		/*
    		String fileDownloadUri =
            		"https"
            		.concat("://")
            		.concat(request.getServerName())
            		.concat(request.getServletPath())
            		.concat("/api/v1/files/download/")
            		.concat(fileName);
    		*/

            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentServletMapping()
                    .path("/api/v1/files/download/")
                    .path(fileName)
                    .toUriString();

    		attachFile.setFileName(fileName);
    		attachFile.setFileDownloadUri(fileDownloadUri);
    		attachFile.setContentType(file.getContentType());
    		attachFile.setSize(file.getSize());
    		attachFile.setTenantId(tenantId);
    		attachFile.setCreatedDate(LocalDateTime.now());
    		
    		List<AttachFile> attachFileList = new ArrayList<>();
    		attachFileList.add(attachFile);
    		answer.setAttachFile(attachFileList);
    		
        }
        
        
        answer.setContent(answerForm.getContent());
        answer.setCreatedDate(LocalDateTime.now());
        answer.setTenantId(tenantId);
        answer.setUseful(false);
        answer.setTopic(topicRepository.findTopicById(Long.valueOf(topic_id)));
        answer.setUser(userRepository.getUserById(uuid_user));

        Answer createAnswer = answerRepository.save(answer);
        
        if(Objects.nonNull(answerForm.getFile())) { 
	        attachFile.setAnswer(createAnswer);
	        attachFileRepository.save(attachFile);
        }

        String uri = ServletUriComponentsBuilder
                .fromCurrentServletMapping()
                .path("/api/v1/answers/{id}")
                .buildAndExpand(answer.getId())
                .toString();
        
        HttpHeaders headers = new HttpHeaders();
	    headers.add("Location", uri);

        return new ResponseEntity<>(answer, headers, HttpStatus.CREATED);
	}
    
    public static class AnswerForm {

        private String content;
        private MultipartFile file;
        
		public String getContent() {
			return content;
		}
		public void setContent(String content) {
			this.content = content;
		}
		public MultipartFile getFile() {
			return file;
		}
		public void setFile(MultipartFile file) {
			this.file = file;
		}
		
    }
    
}
