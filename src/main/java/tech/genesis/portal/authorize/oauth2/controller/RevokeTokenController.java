package tech.genesis.portal.authorize.oauth2.controller;

import java.util.List;

import javax.net.ssl.SSLContext;
import javax.servlet.http.HttpSession;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import tech.genesis.portal.authorize.oauth2.config.OAuth2Configuration;
import tech.genesis.portal.authorize.oauth2.helper.HttpHelper;


/**
 * @author GenesisTech herotic
 *
 */
@Controller
public class RevokeTokenController {
    
    @Autowired
    public OAuth2Configuration oAuth2Configuration;
    
    @Autowired
    public HttpHelper httpHelper;
    
    //private HttpClientHandler httpClientHandler = HttpClientHandler.getInstance();
    //private CloseableHttpClient httpClient = httpClientHandler.getHttpClient() ;
    
    private static final Logger logger = LoggerFactory.getLogger(RefreshTokenController.class);
    
    /**
     * Call to revoke tokens 
     * 
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping("/oauth/v2/revokeToken_default")
    public String revokeToken_default(HttpSession session) {
        
        String failureMsg="Failed";
        HttpPost post = new HttpPost(oAuth2Configuration.getRevokeTokenEndpoint());

        // add header
        post = httpHelper.addHeader(post);
        List<NameValuePair> urlParameters = httpHelper.getUrlParameters(session, "revoke", "","");
        
        try {
            
        	final SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, 
        			(certificate, authType) -> true)
                    .build();

            final CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLContext(sslContext)
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .build();
        	
        	post.setEntity(new UrlEncodedFormEntity(urlParameters));
            HttpResponse response = httpClient.execute(post);

            logger.info("Response Code : "+ response.getStatusLine().getStatusCode());
            if (response.getStatusLine().getStatusCode() != 200) {
                logger.info("failed");
                return new JSONObject().put("response",failureMsg).toString();
            }
            
            StringBuffer result = httpHelper.getResult(response);
            logger.debug("raw result for revoke token request= " + result);
            
            return new JSONObject().put("response", "Revoke successful").toString();
        }
        catch (Exception ex) {
            logger.error("Exception while calling revokeToken ", ex);
            try {
				return new JSONObject().put("response",failureMsg).toString();
			} catch (JSONException e) {
				logger.error(e.getMessage());
				return null;
			}
        }    
        
    }
    
    /**
     * Call to revoke tokens 
     * 
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping("/revokeToken")
    public String revokeToken(HttpSession session) {
        
    	String failureMsg = "failure";
    	
    	
    	try {
    		
    		final SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, 
        			(certificate, authType) -> true)
                    .build();

            final CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLContext(sslContext)
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .build();
    		
    		HttpPost post = new HttpPost(oAuth2Configuration.getRevokeTokenEndpoint());
	
	        // add header
	        post = httpHelper.addHeader(post);
	        List<NameValuePair> urlParameters = httpHelper.getUrlParameters(session, "revoke", "", "");
	        
        
            post.setEntity(new UrlEncodedFormEntity(urlParameters));
            HttpResponse response = httpClient.execute(post);

            logger.info("Response Code : "+ response.getStatusLine().getStatusCode());
            if (response.getStatusLine().getStatusCode() != 200) {
                logger.info("failed getting Info");
                return new JSONObject().put("response",failureMsg).toString();
            }
            
            StringBuffer result = httpHelper.getResult(response);
            logger.debug("raw result for revoke token request= " + result);
            
            return new JSONObject().put("response", "Revoke successful").toString();
        }
        catch (Exception ex) {
            logger.error("Exception while calling revokeToken ", ex);
            try {
				return new JSONObject().put("response",failureMsg).toString();
			} catch (JSONException e) {
				logger.error(e.getMessage());
				return null;
			}
        }    
        
    }
    

}
