package tech.genesis.portal.fourm.service;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import tech.genesis.portal.config.FileStorageProperties;
import tech.genesis.portal.exception.FileNotFoundException;
import tech.genesis.portal.exception.FileStorageException;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class FileStorageService {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private final Path fileStorageLocation;

    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
            
            System.out.println("Files Create Directory:"+this.fileStorageLocation.toString());
            
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public String storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	    Date incrementedDate = new Date();
	    String datePath = sdf.format(incrementedDate);
        

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Filename contains invalid path sequence " + fileName);
            }
            
            //
            Path createDatePath = Paths.get(this.fileStorageLocation.toString()+File.separator+datePath).toAbsolutePath().normalize();
                        
            Files.createDirectories(createDatePath);

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = createDatePath.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return datePath+"/"+fileName;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }
    
    public String storeFileRamdomName(MultipartFile file) {
        // Normalize file name
        String sourceName = StringUtils.cleanPath(file.getOriginalFilename());
        String sourceExt = FilenameUtils.getExtension(sourceName);
        String destFileName = RandomStringUtils.randomAlphanumeric(8).concat(".").concat(sourceExt);
        
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	    Date incrementedDate = new Date();
	    String datePath = sdf.format(incrementedDate);
        

        try {
            // Check if the file's name contains invalid characters
            if(sourceName.contains("..")) {
                throw new FileStorageException("Filename contains invalid path sequence " + sourceName);
            }

            //
            Path createDatePath = Paths.get(this.fileStorageLocation.toString()+File.separator+datePath).toAbsolutePath().normalize();
                        
            Files.createDirectories(createDatePath);
            
            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = createDatePath.resolve(destFileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return datePath+"/"+destFileName;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + sourceName + ". Please try again!", ex);
        }
    }
    
    
    public void deleteFile(String fileName) {

    	
    	try {
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
			Files.delete(targetLocation);
		} catch (Exception ex) {

    	    logger.error(ex.getMessage());

			//throw new FileStorageException("Could not delete file " + fileName + ". Please try again!", ex);
		}
    }
    
    public Resource loadFileAsResource(String fileName) {
    	try {
            
    		Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if(resource.exists()) {
                return resource;
            } else {
                throw new FileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new FileNotFoundException("File not found " + fileName, ex);
        }
    }
    
}
