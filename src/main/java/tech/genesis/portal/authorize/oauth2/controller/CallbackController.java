package tech.genesis.portal.authorize.oauth2.controller;

import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.net.ssl.SSLContext;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.databind.ObjectMapper;

import tech.genesis.portal.authorize.oauth2.config.OAuth2Configuration;
import tech.genesis.portal.authorize.oauth2.helper.HttpHelper;
import tech.genesis.portal.authorize.oauth2.model.BearerTokenResponse;

/**
 * @author GenesisTech herotic
 *
 */
@Controller
public class CallbackController {
    
    @Autowired
    public OAuth2Configuration oAuth2Configuration;
    
    @Autowired
    public HttpHelper httpHelper;
    
    //private HttpClientHandler httpClientHandler = HttpClientHandler.getInstance();
    //private CloseableHttpClient httpClient = httpClientHandler.getHttpClient() ;
    private static final Logger logger = LoggerFactory.getLogger(CallbackController.class);
    
    private static ObjectMapper mapper = new ObjectMapper();
    
    /**
     *  OTK Sever에서 callback url르 데이터를 전달할때 처리할 controller
     *  Authorization code 의 수명이 짧기때문에 access token과 교환하는 작업을 신속하게 진행해야 합니다.
     *      
     * @param auth_code
     * @param state
     * @param realmId
     * @param session
     * @return
     */
    @RequestMapping("/oauth/v2/oauth2redirect")
    public String callBackFromOAuth(@RequestParam("code") String authCode, @RequestParam("state") String state, HttpSession session) {   
        logger.info("inside oauth2redirect " + authCode  );
        
        String csrfToken = (String) session.getAttribute("csrfToken");
        if (csrfToken.equals(state)) {
            
        	session.setAttribute("auth_code", authCode);
        	
        	BearerTokenResponse bearerTokenResponse = ignoringCertificatesretrieveBearerTokens(authCode, session);
            
        	/*
             * 테스트를 위해 세션에 토큰을 저장
             * 상용에서는 토큰을 유지하여햐 하므로 DB를 통해 저장하여 관리하는 방법을 추전드립니다.
             * 사용자의 고유한 ID와 함께 access_token 및 refresh_token 민기 시간을 관리 하시기 바랍니다.
            */
            session.setAttribute("access_token", bearerTokenResponse.getAccessToken());
            session.setAttribute("refresh_token", bearerTokenResponse.getRefreshToken());
            
            return "connected";
        }
        
        return null;
        
    }

    private BearerTokenResponse retrieveBearerTokens(String auth_code, HttpSession session) {
        logger.info("retriev tokens");

        HttpPost post = new HttpPost(oAuth2Configuration.getTokenEndpoint());

        // add header
        post = httpHelper.addHeader(post);
        List<NameValuePair> urlParameters = httpHelper.getUrlParameters(session, "", "", "");

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
                logger.info("failed getting access token");
                return null;
            }

            StringBuffer result = httpHelper.getResult(response);
            logger.debug("raw result for tokens= " + result);

            return mapper.readValue(result.toString(), BearerTokenResponse.class);
            
        } catch (Exception ex) {
            logger.error("Exception while retrieving tokens", ex);
        }
        return null;
    }
    
    /***
     * 
     * Warnning !!!
     * 
     * 테스트를 위해 cert를 무시하고 post를 호추하는 메소드이므로 상용에서는 절때 사용 하면 안됨
     * 
     * Warnning !!!
     * 
     */
    private BearerTokenResponse ignoringCertificatesretrieveBearerTokens(String auth_code, HttpSession session) {
        logger.info("inside bearer tokens");
        

        try {
			
        	final SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, 
        			(certificate, authType) -> true)
                    .build();

            final CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLContext(sslContext)
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .build();
        	
        	
	        HttpPost httpPost = new HttpPost(oAuth2Configuration.getTokenEndpoint());
        
	        //add header
	        httpPost = httpHelper.addHeader(httpPost);
	        final List<NameValuePair> urlParameters = httpHelper.getUrlParameters(session, "", "", "");
	
	        httpPost.setEntity(new UrlEncodedFormEntity(urlParameters));
	       
	        final CloseableHttpResponse response = httpClient.execute(httpPost);
	        
	        logger.info("Response Code : "+ response.getStatusLine().getStatusCode());
	            
	        if (response.getStatusLine().getStatusCode() != 200) {
	        	logger.info("failed getting access token");
	            return null;
	        }
	
	        StringBuffer result = httpHelper.getResult(response);
	        logger.debug("raw result for bearer tokens= " + result);
	
	        return mapper.readValue(result.toString(), BearerTokenResponse.class);
        
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
        
        return null;
    }
    
}
