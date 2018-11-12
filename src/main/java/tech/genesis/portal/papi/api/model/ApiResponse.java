package tech.genesis.portal.papi.api.model;

import java.util.List;
import java.util.Map;

public class ApiResponse {
	private boolean success;
	private List<Api> response;
	
	public boolean getSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<Api> getResponse() {
		return response;
	}
	public void setResponse(List<Api> response) {
		this.response = response;
	}
	
	
}
