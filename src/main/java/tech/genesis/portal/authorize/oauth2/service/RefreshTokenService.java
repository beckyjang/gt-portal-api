package tech.genesis.portal.authorize.oauth2.service;

import java.util.List;

import javax.net.ssl.SSLContext;
import javax.servlet.http.HttpSession;

import org.apache.http.HeaderElement;
import org.apache.http.HeaderElementIterator;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ConnectionKeepAliveStrategy;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.message.BasicHeaderElementIterator;
import org.apache.http.protocol.HTTP;
import org.apache.http.protocol.HttpContext;
import org.apache.http.protocol.HttpCoreContext;
import org.apache.http.ssl.SSLContextBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import tech.genesis.portal.authorize.oauth2.config.OAuth2Configuration;
import tech.genesis.portal.authorize.oauth2.helper.HttpHelper;
import tech.genesis.portal.authorize.oauth2.model.BearerTokenResponse;

/**
 * @author GenesisTech herotic
 *
 */
@Service
public class RefreshTokenService {
    
    @Autowired
    public OAuth2Configuration oAuth2Configuration;
    
    @Autowired
    public HttpHelper httpHelper;
    
    //private HttpClientHandler httpClientHandler = HttpClientHandler.getInstance();
    //private CloseableHttpClient httpClient = httpClientHandler.getHttpClient() ;
    private static final Logger logger = LoggerFactory.getLogger(RefreshTokenService.class);
    
    private static ObjectMapper mapper = new ObjectMapper();
    
    
    /**
     * 리프레쉬 토큰 교환
     * 
     * Warnning !!!
     * 
     * 테스트를 위해 cert를 무시하고 post를 호추하는 메소드이므로 상용에서는 절때 사용 하면 안됨
     * SSL 인증을 처리하는 HTTP 통신 필요
     * 
     * Warnning !!!
     * 
     * 
     * @param session
     * @return
     * @throws Exception
     */
    public BearerTokenResponse refresh(HttpSession session) throws Exception {
        
    	
    	HttpPost post = new HttpPost(oAuth2Configuration.getTokenEndpoint());

        // add header
        post = httpHelper.addHeader(post);
        List<NameValuePair> urlParameters = httpHelper.getUrlParameters(session, "refresh", "","");

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
                logger.info("failed getting");
                throw new Exception();
            }
            
            StringBuffer result = httpHelper.getResult(response);
            logger.debug("raw result for refresh token request= " + result);
            
            BearerTokenResponse bearerTokenResponse = mapper.readValue(result.toString(), BearerTokenResponse.class);
            return bearerTokenResponse; 

        }
        catch (Exception ex) {
            logger.error("Exception while calling refreshToken ", ex);
            throw new Exception(ex);
        }
           
    }

}
