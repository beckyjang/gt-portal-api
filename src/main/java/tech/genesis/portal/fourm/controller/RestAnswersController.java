package tech.genesis.portal.fourm.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import tech.genesis.portal.authentication.domain.UserInfo;
import tech.genesis.portal.authentication.service.AuthSessionService;
import tech.genesis.portal.fourm.domain.Answer;
import tech.genesis.portal.fourm.domain.AttachFile;
import tech.genesis.portal.fourm.domain.User;
import tech.genesis.portal.fourm.repository.AnswerRepository;
import tech.genesis.portal.fourm.repository.AttachFileRepository;
import tech.genesis.portal.fourm.repository.TopicRepository;
import tech.genesis.portal.fourm.repository.UserRepository;
import tech.genesis.portal.fourm.service.FileStorageService;

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
	@Autowired
	private AuthSessionService authSessionService;
	
    @PostMapping(value={"/topic/{topic_id}"})
    public ResponseEntity<Answer> createAnswerBySessionByTopicId(@ModelAttribute AnswerForm answerForm, @PathVariable String topic_id, HttpServletRequest request) {
		
    	UserInfo userInfo = authSessionService.getUserInfo();
    	
        User user = userRepository.getUserByUsernameAndTenantId(userInfo.getUsername(), userInfo.getTenantId());
		
        Answer answer = new Answer();
        AttachFile attachFile = new AttachFile();
        
        // if file exist set file
        if(Objects.nonNull(answerForm.getFile())) {
     
        	MultipartFile file = answerForm.getFile();
    		
        	String fileName = fileStorageService.storeFileRamdomName(file);
    		
    		String fileDownloadUri = 
            		"https"
            		.concat("://")
            		.concat(request.getServerName())
            		.concat(request.getServletPath())
            		.concat("/api/v1/files/download/")
            		.concat(fileName);
        	/*
        	String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentServletMapping()
                    .path("/api/v1/files/download/")
                    .path(fileName)
                    .toUriString();
        	*/

    		attachFile.setFileName(fileName);
    		attachFile.setFileDownloadUri(fileDownloadUri);
    		attachFile.setContentType(file.getContentType());
    		attachFile.setSize(file.getSize());
    		attachFile.setTenantId(userInfo.getTenantId());
    		attachFile.setCreatedDate(LocalDateTime.now());
    		
    		List<AttachFile> attachFileList = new ArrayList<>();
    		attachFileList.add(attachFile);
    		answer.setAttachFile(attachFileList);
    		
        }

        answer.setContent(answerForm.getContent());
        answer.setCreatedDate(LocalDateTime.now());
        answer.setTenantId(userInfo.getTenantId());
        answer.setUseful(false);
        answer.setTopic(topicRepository.findTopicByIdAndTenantId(Long.valueOf(topic_id),userInfo.getTenantId()));
        answer.setUser(user);

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
    
    @DeleteMapping(value = { "/{id}" })
	@ResponseStatus(HttpStatus.OK)
	public void deleteAnswersById(@PathVariable Long id){
    	
    	UserInfo userInfo = authSessionService.getUserInfo();
        
		List<Answer> answerList = answerRepository.findAnswerByTopic_IdAndTenantId(id, userInfo.getTenantId());

		Answer answer = answerRepository.findAnswerByIdAndTenantId(id, userInfo.getTenantId());
		
		List<AttachFile> attachFileList = answer.getAttachFile();
		
		attachFileList.forEach(attachFile -> {
			fileStorageService.deleteFile(attachFile.getFilePath());
		});
		
		answerRepository.delete(answer);
		
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
