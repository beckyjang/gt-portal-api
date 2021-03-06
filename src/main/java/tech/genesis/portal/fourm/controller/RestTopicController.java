package tech.genesis.portal.fourm.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.google.common.base.Joiner;

import tech.genesis.portal.authentication.SessionConfiguration;
import tech.genesis.portal.authentication.domain.UserInfo;
import tech.genesis.portal.authentication.service.AuthSessionService;
import tech.genesis.portal.fourm.controller.RestUserController.CumsumerResponse;
import tech.genesis.portal.fourm.domain.Answer;
import tech.genesis.portal.fourm.domain.AttachFile;
import tech.genesis.portal.fourm.domain.Topic;
import tech.genesis.portal.fourm.domain.User;
import tech.genesis.portal.fourm.repository.AnswerRepository;
import tech.genesis.portal.fourm.repository.AttachFileRepository;
import tech.genesis.portal.fourm.repository.TopicRepository;
import tech.genesis.portal.fourm.repository.UserRepository;
import tech.genesis.portal.fourm.service.FileStorageService;
import tech.genesis.portal.fourm.specification.TopicSpecificationsBuilder;
import tech.genesis.portal.util.SearchOperation;

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

	@Autowired
	private AuthSessionService authSessionService;
	
	
	@GetMapping(value = { "", "/" })
	@ResponseBody
	public Page<Topic> getAllTopics(Pageable pageable, @RequestParam(value = "search", required=false) String search){
		TopicSpecificationsBuilder builder = new TopicSpecificationsBuilder();
		String operationSetExper = Joiner.on("|")
				.join(SearchOperation.SIMPLE_OPERATION_SET);
		Pattern pattern = Pattern.compile("(\\w+?)(" + operationSetExper + ")(\\p{Punct}?)(\\w+?)(\\p{Punct}?),");
		Matcher matcher = pattern.matcher(search + ",");
		while (matcher.find()) {
			builder.with(matcher.group(1), matcher.group(2), matcher.group(4), matcher.group(3), matcher.group(5));
		}

		Specification<Topic> spec = builder.build();

		return topicRepository.findAll(spec, pageable);
	}

	@GetMapping(value = { "/{id}" })
	public Topic getTopicByIdAndTenantId(@PathVariable Long id){
		
        UserInfo userInfo = authSessionService.getUserInfo();
        
		return topicRepository.findTopicByIdAndTenantId(id,userInfo.getTenantId());
	}

	@GetMapping(value = { "/guide/list" })
	public Page<Topic> getAllGuides(Pageable pageable){

        UserInfo userInfo = authSessionService.getUserInfo();
        
		User user = userRepository.getUserByUsernameAndTenantId(userInfo.getUsername(), userInfo.getTenantId());
		
		if(Objects.isNull(user)){
			throw new IllegalArgumentException("User is null...");
		}

		List<Topic> guideList = new ArrayList<>();
		
		Page<Object[]> queryTopicPage = null;

		if (userInfo.getRole().equals(ROLE_PORTAL_ADMIN)) {
			queryTopicPage = topicRepository.findAllTopicsByCategoryAndTenantIdWithPagination(pageable, CATEGORY_GUIDE, userInfo.getTenantId());
		}
		else {
			queryTopicPage = topicRepository.findAllTopicsByCategoryAndTenantIdAndPermitWithPagination(pageable, CATEGORY_GUIDE, userInfo.getTenantId(), user.getId());
        }

		for(Object[] topic : queryTopicPage){
			Topic item = new Topic();

			item.setId(Long.valueOf(topic[0].toString()));
			item.setTitle(topic[1].toString());
			item.setSubTitle(topic[2].toString());
			item.setUsername(topic[3].toString());
			item.setCreatedate(topic[4].toString());

			guideList.add(item);

		}

		Page<Topic> pageGuide = new PageImpl<>(guideList, pageable, queryTopicPage.getTotalElements() );

		return pageGuide;
	}

	@GetMapping(value = { "/qna/list" })
	public Page<Topic> getAllQna(Pageable pageable){

		UserInfo userInfo = authSessionService.getUserInfo();
        
		List<Topic> qnaList = new ArrayList<>();

		Page<Object[]> queryTopicPage = null;

		queryTopicPage = topicRepository.findAllTopicsByCategoryAndTenantIdWithPagination(pageable, CATEGORY_QNA, userInfo.getTenantId());

		for(Object[] topic : queryTopicPage){
			Topic item = new Topic();

			item.setId(Long.valueOf(topic[0].toString()));
			item.setTitle(topic[1].toString());
			item.setSubTitle(topic[2].toString());
			item.setUsername(topic[3].toString());
			item.setCreatedate(topic[4].toString());

			qnaList.add(item);

		}

		Page<Topic> pageGuide = new PageImpl<>(qnaList, pageable, queryTopicPage.getTotalElements() );

		return pageGuide;
	}


	@GetMapping(value = { "/document/list" })
	public Page<Topic> getAllDocument(Pageable pageable, HttpServletRequest request){

		List<Topic> guideList = new ArrayList<>();

		Page<Object[]> queryTopicPage = null;

		queryTopicPage = topicRepository.findAllTopicsByCategoryAndTenantIdWithPagination(pageable, CATEGORY_DOCUMENT, sessionConfiguration.parseTenant(request));

		for(Object[] topic : queryTopicPage){
			Topic item = new Topic();

			item.setId(Long.valueOf(topic[0].toString()));
			item.setTitle(topic[1].toString());
			item.setSubTitle(topic[2].toString());
			item.setUsername(topic[3].toString());
			item.setCreatedate(topic[4].toString());

			guideList.add(item);

		}

		Page<Topic> pageGuide = new PageImpl<>(guideList, pageable, queryTopicPage.getTotalElements() );

		return pageGuide;
	}

	@GetMapping(value = { "/guide/detail/{id}" })
	public Topic getTopicGuideById(@PathVariable Long id){
		
        UserInfo userInfo = authSessionService.getUserInfo();
        
		Topic guide = topicRepository.findTopicByIdAndTenantId(id, userInfo.getTenantId());

		return guide;
	}
	
	@GetMapping(value = { "/guide/edit/{id}" })
	public TopicEditResponse getTopicEdit(@PathVariable Long id) {
        
        UserInfo userInfo = authSessionService.getUserInfo();
        
		Topic topic = topicRepository.findTopicByIdAndTenantId(id, userInfo.getTenantId());
		
		
		String[] permits = topic.getPermit().split(",");
		
		CumsumerResponse cumsumerResponse = new CumsumerResponse();
		List<CumsumerResponse> cumsumerResponseList = new ArrayList<CumsumerResponse>();
	
		for(String uuid: permits) {
			
			List<Object[]> userList = userRepository.findUserByIdAndTenantId(uuid, userInfo.getTenantId());
			
			for(Object[] user: userList) {
				cumsumerResponse = new CumsumerResponse();
				cumsumerResponse.setId(user[0].toString());
				cumsumerResponse.setItemName(user[1].toString());
				cumsumerResponse.setCategory(user[2].toString());
				cumsumerResponseList.add(cumsumerResponse);
			}
			
		}
	
		TopicEditResponse res = new TopicEditResponse();
		res.setTopic(topic);
		res.setCumsumer(cumsumerResponseList);
		return res;
	}
	

	@GetMapping(value = { "/qna/detail/{id}" })
	public Topic getTopicQnaById(@PathVariable Long id){
		
		UserInfo userInfo = authSessionService.getUserInfo();
		
//		User user = userRepository.getUserByUsernameAndTenantId(userInfo.getUsername(), userInfo.getTenantId());
		
		Topic qna = topicRepository.findTopicByIdAndTenantId(id, userInfo.getTenantId());

		return qna;
	}

	@GetMapping(value = { "/document/detail/{subTitle}" })
	public Topic getTopicDocumentByTitle(@PathVariable String subTitle, HttpServletRequest request){

		Topic document = topicRepository.findTopicBySubTitleAndTenantIdAndCategory(subTitle, sessionConfiguration.parseTenant(request), CATEGORY_DOCUMENT);

		return document;
	}

	@DeleteMapping(value = { "/guide/delete/{id}" })
	@ResponseStatus(HttpStatus.OK)
	public void deleteTopicGuideById(@PathVariable Long id){
		
		UserInfo userInfo = authSessionService.getUserInfo();
        
		List<AttachFile> attachFileList = attachFileRepository.findAllAttachFileByTopic_IdAndTenantId(id, userInfo.getTenantId());
		List<Answer> answerList = answerRepository.findAnswerByTopic_IdAndTenantId(id, userInfo.getTenantId());

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

		UserInfo userInfo = authSessionService.getUserInfo();
        
		List<AttachFile> attachFileList = attachFileRepository.findAllAttachFileByTopic_IdAndTenantId(id, userInfo.getTenantId());
		List<Answer> answerList = answerRepository.findAnswerByTopic_IdAndTenantId(id, userInfo.getTenantId());

		attachFileList.forEach(attachFile -> {
			attachFileRepository.delete(attachFile);
			fileStorageService.deleteFile(attachFile.getFilePath());
		});
		answerList.forEach(answer -> answerRepository.delete(answer));

		topicRepository.deleteById(id);

	}


	@DeleteMapping(value = { "/{id}" })
	@ResponseStatus(HttpStatus.OK)
	public void deleteTopicById(@PathVariable Long id){

		UserInfo userInfo = authSessionService.getUserInfo();
		
		List<AttachFile> attachFileList = attachFileRepository.findAllAttachFileByTopic_IdAndTenantId(id, userInfo.getTenantId());
		List<Answer> answerList = answerRepository.findAnswerByTopic_IdAndTenantId(id, userInfo.getTenantId());

		attachFileList.forEach(attachFile -> {
			attachFileRepository.delete(attachFile);
			fileStorageService.deleteFile(attachFile.getFilePath());
		});
		answerList.forEach(answer -> answerRepository.delete(answer));

		topicRepository.deleteById(id);

	}
	
	@PostMapping()
    public ResponseEntity<Topic> createTopic(@ModelAttribute TopicForm topicForm, HttpServletRequest request) {
		
		UserInfo userInfo = authSessionService.getUserInfo();
		
		User user = userRepository.getUserByUsernameAndTenantId(userInfo.getUsername(), userInfo.getTenantId());


		// if category document find subtitle topic and delete
		if(topicForm.getCategory().equals(CATEGORY_DOCUMENT)) {
			Topic document = topicRepository.findTopicBySubTitleAndTenantIdAndCategory(topicForm.getSubTitle(),
					userInfo.getTenantId(), CATEGORY_DOCUMENT);

			if(!Objects.isNull(document)) {
				List<AttachFile> attachFileList = attachFileRepository.findAllAttachFileByTopic_IdAndTenantId(document.getId(), userInfo.getTenantId());
				List<Answer> answerList = answerRepository.findAnswerByTopic_IdAndTenantId(document.getId(), userInfo.getTenantId());

				attachFileList.forEach(attachFile -> {
					attachFileRepository.delete(attachFile);
					fileStorageService.deleteFile(attachFile.getFilePath());
				});
				answerList.forEach(answer -> answerRepository.delete(answer));

				topicRepository.deleteById(document.getId());
			}
		}

		Topic topic = new Topic();
		AttachFile attachFile = new AttachFile();

		// if file exist set file
		if (Objects.nonNull(topicForm.getFile())) {

			MultipartFile file = topicForm.getFile();

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

			attachFile.setFileName(file.getOriginalFilename());
			attachFile.setFilePath(fileName);
			attachFile.setFileDownloadUri(fileDownloadUri);
			attachFile.setContentType(file.getContentType());
			attachFile.setSize(file.getSize());
			attachFile.setTenantId(userInfo.getTenantId());
			attachFile.setCreatedDate(LocalDateTime.now());

			List<AttachFile> attachFileList = new ArrayList<>();
			attachFileList.add(attachFile);
			topic.setAttachFile(attachFileList);

		}

		topic.setTitle(topicForm.getTitle());
		topic.setSubTitle(topicForm.getSubTitle());
		topic.setCategory(topicForm.getCategory());
		topic.setPermit(topicForm.getPermit());
		topic.setContent(topicForm.getContent());
		topic.setTenantId(userInfo.getTenantId());
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

    @PostMapping(value = { "/{id}" })
    @ResponseStatus(HttpStatus.OK)
    public void updateTopic(@PathVariable Long id, @ModelAttribute TopicForm topicForm, HttpServletRequest request) {
    	
    	UserInfo userInfo = authSessionService.getUserInfo();
    	        
        User user = userRepository.getUserByUsernameAndTenantId(userInfo.getUsername(), userInfo.getTenantId());

        Topic topic = topicRepository.findTopicByIdAndTenantId(id, userInfo.getTenantId());

        topic.setTitle(topicForm.getTitle());
        topic.setSubTitle(topicForm.getSubTitle());
        topic.setCategory(topicForm.getCategory());
        topic.setPermit(topicForm.getPermit());
        topic.setContent(topicForm.getContent());
        topic.setTenantId(userInfo.getTenantId());
        topic.setCreatedDate(LocalDateTime.now());
        topic.setUser(user);

        List<AttachFile> attachFileList = topic.getAttachFile();
        
        // if file exist set file
        if (Objects.nonNull(topicForm.getFile())) {

            MultipartFile file = topicForm.getFile();

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

            AttachFile attachFile = new AttachFile();

            attachFile.setFileName(file.getOriginalFilename());
            attachFile.setFilePath(fileName);
            attachFile.setFileDownloadUri(fileDownloadUri);
            attachFile.setContentType(file.getContentType());
            attachFile.setSize(file.getSize());
            attachFile.setTenantId(userInfo.getTenantId());
            attachFile.setCreatedDate(LocalDateTime.now());
            attachFile.setTopic(topic);
            attachFileList.add(attachFile);

            attachFileRepository.save(attachFile);

            topic.setAttachFile(attachFileList);

        }

        topicRepository.save(topic);

    }

    public static class TopicEditResponse {
    	private Topic topic;
    	private List<CumsumerResponse> cumsumer;
		public Topic getTopic() {
			return topic;
		}
		public void setTopic(Topic topic) {
			this.topic = topic;
		}
		public List<CumsumerResponse> getCumsumer() {
			return cumsumer;
		}
		public void setCumsumer(List<CumsumerResponse> cumsumer) {
			this.cumsumer = cumsumer;
		}
		
    }

	public static class TopicForm {

        private String title;
		private String subTitle;
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

		public String getSubTitle() {
			return subTitle;
		}

		public void setSubTitle(String subTitle) {
			this.subTitle = subTitle;
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
