package tech.genesis.portal.fourm.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import tech.genesis.portal.fourm.domain.Answer;
import tech.genesis.portal.fourm.domain.AttachFile;

import tech.genesis.portal.fourm.domain.UploadFileResponse;
import tech.genesis.portal.fourm.repository.AttachFileRepository;
import tech.genesis.portal.fourm.repository.TopicRepository;
import tech.genesis.portal.fourm.repository.UserRepository;
import tech.genesis.portal.fourm.service.FileStorageService;

import javax.servlet.http.HttpServletRequest;

import java.io.File;
import java.io.IOException;

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
    
    @RequestMapping(value = "/uploadImageFile", method = RequestMethod.POST)
	public ImageResponse uploadImageFile(@RequestPart MultipartFile upload,HttpServletRequest request) {
    	String fileName = fileStorageService.storeFile(upload);
    	
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
		
		ImageResponse imageResponse = new ImageResponse();
		
		imageResponse.setUploaded(1);
		imageResponse.setFileName(upload.getOriginalFilename());
		imageResponse.setUrl(fileDownloadUri);
		
		return imageResponse;
	}
    
    @PostMapping("/uploadMultipleFiles")
    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, HttpServletRequest request) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadFile(file,request))
                .collect(Collectors.toList());
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

        String uuid_user = userRepository.getUserByUsernameAndTenantId(username, tenantId).getId();
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
