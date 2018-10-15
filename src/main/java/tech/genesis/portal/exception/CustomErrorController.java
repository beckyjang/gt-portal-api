package tech.genesis.portal.exception;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomErrorController implements ErrorController {

	@Override
	public String getErrorPath() {
		return null;
	}
	
	@RequestMapping("/error")
	public ResponseEntity<Object>  handleError(HttpServletRequest request) {
	    Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
	     
	    Integer statusCode = HttpStatus.BAD_GATEWAY.value();
	    
	    String error = "error occured";
	    
	    if (status != null) {
	        statusCode = Integer.valueOf(status.toString());
	     
	        
	        if(statusCode == HttpStatus.NOT_FOUND.value()) {
	        	error = "No handler found for " + request.getMethod()+ " " + request.getRequestURL();
	        }
	        else if(statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
	        	error = "internal server error " + request.getMethod()+ " " + request.getRequestURL();
	        }
	        
	    }
	    
	    ApiError apiError = 
	    		new ApiError(HttpStatus.valueOf(statusCode), 
	    				request.getAttribute(RequestDispatcher.ERROR_MESSAGE).toString() , 
	    				error );
	    
	    return new ResponseEntity<Object>(apiError, new HttpHeaders(), apiError.getStatus());
	    
	    
	    
	}

}
