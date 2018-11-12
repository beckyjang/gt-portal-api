package tech.genesis.portal.papi.api.service;

import java.util.Arrays;
import java.util.List;

import javax.net.ssl.SSLContext;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import tech.genesis.portal.authorize.oauth2.config.OAuth2Configuration;
import tech.genesis.portal.authorize.oauth2.helper.HttpHelper;
import tech.genesis.portal.authorize.oauth2.service.RefreshTokenService;
import tech.genesis.portal.papi.api.model.Api;
import tech.genesis.portal.papi.api.model.ApiResponse;

/**
 * @author GenesisTech herotic
 * 
 */
@Service
public class ApiService {
    
    @Autowired
    public OAuth2Configuration oAuth2Configuration;
    
    @Autowired
    public HttpHelper httpHelper;
    
    @Autowired
    public RefreshTokenService refreshTokenService;
    
    private static ObjectMapper mapper = new ObjectMapper();
    
    private static final Logger logger = LoggerFactory.getLogger(ApiService.class);
    
    //private HttpClientHandler httpClientHandler = HttpClientHandler.getInstance();
    //private CloseableHttpClient httpClient = httpClientHandler.getHttpClient() ;
    
    /**
     * Sample Protected API call using OAuth2 tokens
     * Warnning !!!
     * 
     * 테스트를 위해 cert를 무시하고 post를 호추하는 메소드이므로 상용에서는 절때 사용 하면 안됨
     * SSL 인증을 처리하는 HTTP 통신 필요
     * 
     * Warnning !!!
     * @param session
     * @return
     */
    
    public ApiResponse findApisByAccessToken(String tenantId, String accessToken) {
        
    	String failureMsg="Failed";
    	
        String apiResourceInfoEndpoint = String.format("%s/%s/2.0/Apis", 
        		oAuth2Configuration.getProxyAPIHost(),tenantId);

        logger.info("Endpoint : "+ apiResourceInfoEndpoint);
        
        try {
        	
        	final SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, 
        			(certificate, authType) -> true)
                    .build();

            final CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLContext(sslContext)
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .build();
        	
	        HttpGet apiResourceInfoReq = new HttpGet(apiResourceInfoEndpoint);
	
	        apiResourceInfoReq.setHeader("Accept", "application/json");
	        apiResourceInfoReq.setHeader("Authorization","Bearer " + accessToken);

            HttpResponse response = httpClient.execute(apiResourceInfoReq);

            logger.info("Response Code : "+ response.getStatusLine().getStatusCode());
            
            /*
             * Handle 401 status code - 
             * 
             * 401 응답을받은 경우 새로 고침 토큰을 사용하여 새 액세스 토큰을 받아야하며 API 호출을 다시 시도해야합니다.
             */
            if (response.getStatusLine().getStatusCode() == 401) {
                StringBuffer result = httpHelper.getResult(response);
                logger.debug("raw result for 401 = " + result);
                
                //refresh tokens
                logger.info("401 수신, 토큰 새로 고침");
                
                /***
                 * inmemory에서 다시조회 accesstoken으로
                 */
                //BearerTokenResponse bearerTokenResponse = refreshTokenService.refresh(session);
                //session.setAttribute("access_token", bearerTokenResponse.getAccessToken());
                //session.setAttribute("refresh_token", bearerTokenResponse.getRefreshToken());
                
                //새 토큰을 이용하여 다시 API 호출
                logger.info("새로운 토큰을 이용하여 API 다시 호출");
                //apiResourceInfoReq.setHeader("Authorization","Bearer " + bearerTokenResponse.getAccessToken());
                response = httpClient.execute(apiResourceInfoReq);
            }
            
            if (response.getStatusLine().getStatusCode() != 200){
                logger.info("api 호출 실패");
                throw new Exception();
            }
   
            StringBuffer result = httpHelper.getResult(response);
            logger.debug("result for = " + result);
            
            List<Api> apiList = null;
            
            apiList = Arrays.asList(mapper.readValue(result.toString(), Api[].class));
            
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.setSuccess(true);
            apiResponse.setResponse(apiList);
            
            return apiResponse;
            
        } catch (Exception ex) {
            logger.error("Exception API ", ex);
            return null;
        }
       
    }
    
    public Api findApiDetailByAccessToken(String tenantId, String accessToken, String uuid) {
        
    	String failureMsg="Failed";
    	
        String apiResourceInfoEndpoint = String.format("%s/%s/2.0/Apis('%s')", 
        		oAuth2Configuration.getProxyAPIHost(),tenantId,uuid);
        
        logger.info("Endpoint : "+ apiResourceInfoEndpoint);
        
        try {
        	
        	final SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, 
        			(certificate, authType) -> true)
                    .build();

            final CloseableHttpClient httpClient = HttpClients.custom()
                .setSSLContext(sslContext)
                .setSSLHostnameVerifier(new NoopHostnameVerifier())
                .build();
        	
        	
	        HttpGet apiResourceInfoReq = new HttpGet(apiResourceInfoEndpoint);
	
	        apiResourceInfoReq.setHeader("Accept", "application/json");
	        apiResourceInfoReq.setHeader("Authorization","Bearer " + accessToken);

            HttpResponse response = httpClient.execute(apiResourceInfoReq);

            logger.info("Response Code : "+ response.getStatusLine().getStatusCode());
            
            /*
             * Handle 401 status code - 
             * 
             * 401 응답을받은 경우 새로 고침 토큰을 사용하여 새 액세스 토큰을 받아야하며 API 호출을 다시 시도해야합니다.
             */
            if (response.getStatusLine().getStatusCode() == 401) {
                StringBuffer result = httpHelper.getResult(response);
                logger.debug("raw result for 401 = " + result);
                
                //refresh tokens
                logger.info("401 수신, 토큰 새로 고침");
                
                /***
                 * inmemory에서 다시조회 accesstoken으로
                 */
                //BearerTokenResponse bearerTokenResponse = refreshTokenService.refresh(session);
                //session.setAttribute("access_token", bearerTokenResponse.getAccessToken());
                //session.setAttribute("refresh_token", bearerTokenResponse.getRefreshToken());
                
                //새 토큰을 이용하여 다시 API 호출
                logger.info("새로운 토큰을 이용하여 API 다시 호출");
                //apiResourceInfoReq.setHeader("Authorization","Bearer " + bearerTokenResponse.getAccessToken());
                response = httpClient.execute(apiResourceInfoReq);
            }
            
            if (response.getStatusLine().getStatusCode() != 200){
                logger.info("api 호출 실패");
                throw new Exception();
            }
   
            StringBuffer result = httpHelper.getResult(response);
            logger.debug("result for = " + result);
            
            Api api = api = mapper.readValue(result.toString(), Api.class);
            
            return api;
            
        } catch (Exception ex) {
            logger.error("Exception API ", ex);
            return null;
        }
       
    }
    
}
