package tech.genesis.portal.fourm.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import tech.genesis.portal.fourm.controller.RestTopicController.TopicForm;
import tech.genesis.portal.fourm.domain.Answer;
import tech.genesis.portal.fourm.domain.AttachFile;
import tech.genesis.portal.fourm.domain.ImageFile;
import tech.genesis.portal.fourm.domain.Topic;
import tech.genesis.portal.fourm.domain.UploadFileResponse;
import tech.genesis.portal.fourm.repository.AttachFileRepository;
import tech.genesis.portal.fourm.repository.ImageFileRepository;
import tech.genesis.portal.fourm.repository.TopicRepository;
import tech.genesis.portal.fourm.repository.UserRepository;
import tech.genesis.portal.fourm.service.FileStorageService;

import javax.persistence.Column;
import javax.servlet.http.HttpServletRequest;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import java.util.stream.Collectors;

import static tech.genesis.portal.fourm.controller.RestTopicController.ROLE_PORTAL_ADMIN;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
@RequestMapping("/api/v1/files")
@Transactional
public class FileController {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);
    
    @Autowired
    private FileStorageService fileStorageService;
    
    @Autowired
	TopicRepository topicRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	AttachFileRepository attachFileRepository;
	
	@Autowired
	ImageFileRepository imageFileRepository;
	
	//@PreAuthorize("hasRole('portaladministrators')")
	@PostMapping("/uploadFile")
    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        String fileName = fileStorageService.storeFileRamdomName(file);
        
        String fileDownloadUri = 
        		"https"
        		.concat("://")
        		.concat(request.getServerName())
        		.concat(request.getServletPath())
        		.concat("/api/v1/files/download/")
        		.concat(file.getOriginalFilename());
        
        /*
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentServletMapping()
                .path("/api/v1/files/download/")
                .path(fileName)
                .toUriString();
        */
        
        return new UploadFileResponse(file.getOriginalFilename(), fileDownloadUri,
                file.getContentType(), file.getSize());
    }
	
	//@PreAuthorize("hasRole('portaladministrators')")
	@PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, HttpServletRequest request) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadFile(file,request))
                .collect(Collectors.toList());
    }
	
	//@PreAuthorize("hasRole('portaladministrators')")
    @RequestMapping(value = "/images", method = RequestMethod.POST)
	public ImageFile postImage(@ModelAttribute ImageFileForm imageFileForm, HttpServletRequest request) {
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

        MultipartFile file = imageFileForm.getFile();
    	
    	String fileName = fileStorageService.storeFileRamdomName(imageFileForm.getFile());
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
    	
    	ImageFile imageFile = new ImageFile();
    	imageFile.setDescription(imageFileForm.getDescription());
    	imageFile.setUploader(imageFileForm.getUploader());
    	imageFile.setFileName(file.getOriginalFilename());
    	imageFile.setFilePath(fileName);
    	imageFile.setContentType(file.getContentType());
    	imageFile.setSize(file.getSize());
    	imageFile.setFileDownloadUri(fileDownloadUri);
    	imageFile.setTenantId(tenantId);
    	imageFile.setCreatedDate(LocalDateTime.now());
    	
		return imageFileRepository.save(imageFile);
	}
    
	//@PreAuthorize("hasRole('portaladministrators')")
    @GetMapping(value = { "/images" })
	public Page<ImageFile> getAllImage(Pageable pageable){
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
        
    	return imageFileRepository.findAllImageFileByTenantIdOrderByCreatedDateDesc(pageable, tenantId);
    }
    
	//@PreAuthorize("hasRole('portaladministrators')")
    @GetMapping(value = { "/images/{id}" })
	public ImageFile getImageById(@PathVariable Long id){
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

		return imageFileRepository.findImageFileByIdAndTenantId(id, tenantId);
    
    }
    
	//@PreAuthorize("hasRole('portaladministrators')")
    @DeleteMapping(value = { "/images/{id}" })
	@ResponseStatus(HttpStatus.OK)
	public void deleteImageById(@PathVariable Long id){
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
		
		ImageFile imageFile = imageFileRepository.findImageFileByIdAndTenantId(id, tenantId);
		imageFileRepository.delete(imageFile);
		fileStorageService.deleteFile(imageFile.getFilePath());
	}
    
    @GetMapping("/download/{date}/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String date, @PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
    	
    	String fullFileName = date + File.separator +fileName;
        Resource resource = fileStorageService.loadFileAsResource(fullFileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            logger.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }


    //@PreAuthorize("hasRole('portaladministrators')")
	@DeleteMapping(value = { "/deleteAttachFile/{id}" })
	@ResponseStatus(HttpStatus.OK)
	public void deleteAttachFileById(@PathVariable Long id){
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

		List<AttachFile> attachFileList = attachFileRepository.findAllAttachFileByIdAndTenantId(id, tenantId);

		attachFileList.forEach(attachFile -> {
			attachFileRepository.delete(attachFile);
			fileStorageService.deleteFile(attachFile.getFilePath());
		});

	}

	public static class ImageFileForm {
		
		private String description;
		private String uploader;
		private MultipartFile file;
		
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getUploader() {
			return uploader;
		}
		public void setUploader(String uploader) {
			this.uploader = uploader;
		}
		public MultipartFile getFile() {
			return file;
		}
		public void setFile(MultipartFile file) {
			this.file = file;
		}
		
	}

	public static class ImageResponse {
		
		private int uploaded;
		
		private String fileName;
		
		private String url;

		public int getUploaded() {
			return uploaded;
		}

		public void setUploaded(int uploaded) {
			this.uploaded = uploaded;
		}

		public String getFileName() {
			return fileName;
		}

		public void setFileName(String fileName) {
			this.fileName = fileName;
		}

		public String getUrl() {
			return url;
		}

		public void setUrl(String url) {
			this.url = url;
		}
		
	}
	
}
