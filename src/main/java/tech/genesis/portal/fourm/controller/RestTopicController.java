package tech.genesis.portal.fourm.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import tech.genesis.portal.authentication.SessionConfiguration;
import tech.genesis.portal.fourm.domain.Answer;
import tech.genesis.portal.fourm.domain.AttachFile;
import tech.genesis.portal.fourm.domain.Topic;
import tech.genesis.portal.fourm.domain.User;
import tech.genesis.portal.fourm.repository.AnswerRepository;
import tech.genesis.portal.fourm.repository.AttachFileRepository;
import tech.genesis.portal.fourm.repository.TopicRepository;
import tech.genesis.portal.fourm.repository.UserRepository;
import tech.genesis.portal.fourm.service.FileStorageService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
@RequestMapping("/api/v1/topics")
@Transactional
public class RestTopicController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public static final String CATEGORY_GUIDE = "guide";
	public static final String CATEGORY_DOCUMENT = "document";
	public static final String CATEGORY_QNA = "qna";
	
	public static final String ROLE_PORTAL_ADMIN = "portaladministrators";
	public static final String ROLE_PORTAL_ORG_DEVELOPER = "devorgadministrators";
	public static final String ROLE_PORTAL_DEVELOPER = "developers";
	
	
	@Autowired
	TopicRepository topicRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	AnswerRepository answerRepository;
	@Autowired
	AttachFileRepository attachFileRepository;
	@Autowired
    private FileStorageService fileStorageService;

	@Autowired
	private SessionConfiguration sessionConfiguration;

	@GetMapping(value = { "", "/" })
	public Page<Topic> getAllTopics(Pageable pageable){

		return topicRepository.findAll(pageable);
	}

	@GetMapping(value = { "/{id}" })
	public Topic getTopicByIdAndTenantId(@PathVariable Long id){
		
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
		
		return topicRepository.findTopicByIdAndTenantId(id,tenantId);
	}

	@GetMapping(value = { "/guide/list" })
	public Page<Topic> getAllGuides(Pageable pageable){
		
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
		
		if(Objects.isNull(user)){
			throw new IllegalArgumentException("User is null...");
		}

		List<Topic> guideList = new ArrayList<>();
		
		Page<Object[]> queryTopicPage = null;

		if (role.equals(ROLE_PORTAL_ADMIN)) {
			queryTopicPage = topicRepository.findAllTopicsByCategoryAndTenantIdWithPagination(pageable, CATEGORY_GUIDE, tenantId);
		}
		else {
			queryTopicPage = topicRepository.findAllTopicsByCategoryAndTenantIdAndPermitWithPagination(pageable, CATEGORY_GUIDE, tenantId, user.getId());
        }

		for(Object[] topic : queryTopicPage){
			Topic item = new Topic();

			item.setId(Long.valueOf(topic[0].toString()));
			item.setTitle(topic[1].toString());
			item.setUsername(topic[2].toString());
			item.setCreatedate(topic[3].toString());

			guideList.add(item);

		}

		Page<Topic> pageGuide = new PageImpl<>(guideList, pageable, queryTopicPage.getTotalElements() );

		return pageGuide;
	}

	@GetMapping(value = { "/qna/list" })
	public Page<Topic> getAllQna(Pageable pageable){

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

		List<Topic> qnaList = new ArrayList<>();

		Page<Object[]> queryTopicPage = null;

		queryTopicPage = topicRepository.findAllTopicsByCategoryAndTenantIdWithPagination(pageable, CATEGORY_QNA, tenantId);

		for(Object[] topic : queryTopicPage){
			Topic item = new Topic();

			item.setId(Long.valueOf(topic[0].toString()));
			item.setTitle(topic[1].toString());
			item.setUsername(topic[2].toString());
			item.setCreatedate(topic[3].toString());

			qnaList.add(item);

		}

		Page<Topic> pageGuide = new PageImpl<>(qnaList, pageable, queryTopicPage.getTotalElements() );

		return pageGuide;
	}

	@GetMapping(value = { "/guide/detail/{id}" })
	public Topic getTopicGuideById(@PathVariable Long id){
		/*
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userDetailName = ((UserDetails)principal).getUsername();
        
        String[] splitArray =  userDetailName.split("\\\\");
        
        String username = splitArray[0];
        String tenantId = splitArray[1];
        String role = splitArray[2];
		*/
		String username = "admin";
		String tenantId = "apipt";
		String role = ROLE_PORTAL_ADMIN;

		Topic guide = topicRepository.findTopicByIdAndTenantId(id, tenantId);

		return guide;
	}

	@GetMapping(value = { "/qna/detail/{id}" })
	public Topic getTopicQnaById(@PathVariable Long id){
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
		String uuid_user = user.getId();

		Topic qna = topicRepository.findTopicByIdAndTenantId(id, tenantId);

		return qna;
	}

	@GetMapping(value = { "/document/detail/{title}" })
	public Topic getTopicDocumentByTitle(@PathVariable String title, HttpServletRequest request){

		Topic document = topicRepository.findTopicByTitleAndTenantIdAndCategory(title, sessionConfiguration.parseTenant(request), CATEGORY_DOCUMENT);

		return document;
	}

	@DeleteMapping(value = { "/guide/delete/{id}" })
	@ResponseStatus(HttpStatus.OK)
	public void deleteTopicGuideById(@PathVariable Long id){
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
		
		List<AttachFile> attachFileList = attachFileRepository.findAttachFileByTopic_IdAndTenantId(id, tenantId);
		List<Answer> answerList = answerRepository.findAnswerByTopic_IdAndTenantId(id, tenantId);

		attachFileList.forEach(attachFile -> {
			attachFileRepository.delete(attachFile);
			fileStorageService.deleteFile(attachFile.getFilePath());
		});
		answerList.forEach(answer -> answerRepository.delete(answer));

		topicRepository.deleteById(id);

	}

	@DeleteMapping(value = { "/qna/delete/{id}" })
	@ResponseStatus(HttpStatus.OK)
	public void deleteQnaById(@PathVariable Long id){

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

		List<AttachFile> attachFileList = attachFileRepository.findAttachFileByTopic_IdAndTenantId(id, tenantId);
		List<Answer> answerList = answerRepository.findAnswerByTopic_IdAndTenantId(id, tenantId);

		attachFileList.forEach(attachFile -> {
			attachFileRepository.delete(attachFile);
			fileStorageService.deleteFile(attachFile.getFilePath());
		});
		answerList.forEach(answer -> answerRepository.delete(answer));

		topicRepository.deleteById(id);

	}


	@DeleteMapping(value = { "/{id}" })
	public String deleteTopicById(@PathVariable Long id){

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
		
		List<AttachFile> attachFileList = attachFileRepository.findAttachFileByTopic_IdAndTenantId(id, tenantId);
		List<Answer> answerList = answerRepository.findAnswerByTopic_IdAndTenantId(id, tenantId);

		attachFileList.forEach(attachFile -> {
			attachFileRepository.delete(attachFile);
			fileStorageService.deleteFile(attachFile.getFilePath());
		});
		answerList.forEach(answer -> answerRepository.delete(answer));

		topicRepository.deleteById(id);

		return "delete";
	}
	
	@PostMapping()
    public ResponseEntity<Topic> createTopic(@ModelAttribute TopicForm topicForm, HttpServletRequest request) {
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

		Topic topic = new Topic();
		AttachFile attachFile = new AttachFile();

		// if file exist set file
		if (Objects.nonNull(topicForm.getFile())) {

			MultipartFile file = topicForm.getFile();

			String fileName = fileStorageService.storeFileRamdomName(file);
    		
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


			attachFile.setFileName(file.getOriginalFilename());
			attachFile.setFilePath(fileName);
			attachFile.setFileDownloadUri(fileDownloadUri);
			attachFile.setContentType(file.getContentType());
			attachFile.setSize(file.getSize());
			attachFile.setTenantId(tenantId);
			attachFile.setCreatedDate(LocalDateTime.now());

			List<AttachFile> attachFileList = new ArrayList<>();
			attachFileList.add(attachFile);
			topic.setAttachFile(attachFileList);

		}

		topic.setTitle(topicForm.getTitle());
		topic.setCategory(topicForm.getCategory());
		topic.setPermit(topicForm.getPermit());
		topic.setContent(topicForm.getContent());
		topic.setTenantId(tenantId);
		topic.setCreatedDate(LocalDateTime.now());
		topic.setUser(user);

		Topic createTopic = topicRepository.save(topic);

		if (Objects.nonNull(topicForm.getFile())) {
			attachFile.setTopic(createTopic);
			attachFileRepository.save(attachFile);
		}

		String uri = ServletUriComponentsBuilder
				.fromCurrentServletMapping()
				.path("/api/v1/topics/{id}")
				.buildAndExpand(topic.getId())
				.toString();

		HttpHeaders headers = new HttpHeaders();
		headers.add("Location", uri);

		return new ResponseEntity<>(topic, headers, HttpStatus.CREATED);
	}

	public static class TopicForm {

        private String title;
        private String content;
        private String category;
        private String permit; 
        private MultipartFile file;
        
		public String getTitle() {
			return title;
		}
		
		public void setTitle(String title) {
			this.title = title;
		}
		
		public String getContent() {
			return content;
		}
		
		public void setContent(String content) {
			this.content = content;
		}
		
		public String getCategory() {
			return category;
		}
		
		public void setCategory(String category) {
			this.category = category;
		}
		
		public String getPermit() {
			return permit;
		}

		public void setPermit(String permit) {
			this.permit = permit;
		}

		public MultipartFile getFile() {
			return file;
		}
		
		public void setFile(MultipartFile file) {
			this.file = file;
		}
    }
}
