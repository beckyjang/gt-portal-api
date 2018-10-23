package tech.genesis.portal.fourm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import tech.genesis.portal.fourm.controller.RestUserController.CumsumerResponse;
import tech.genesis.portal.fourm.domain.User;
import tech.genesis.portal.fourm.domain.UserPk;

import java.util.List;

public interface UserRepository extends JpaRepository<User, UserPk> {

    //User getUserByUsername(String username);
    User getUserByIdAndTenantId(String uuid, String tenantId);
    User getUserByUsernameAndTenantId(String username, String tenantId);

    // PORTAL-VERSION 4.2.7.8
    List<User> findUserByTenantId(String tenantId);
    
    // PORTAL-VERSION 4.2.7.9
    @Query (
            value = "select ui.uuid as \"id\", (ui.first_name ||' '|| ui.last_name ||'('||ui.username||')') as \"itemName\" , o.name as \"category\" "+
            		"from user_info ui, user_custom_attr uca, organization o " + 
            		"where ui.uuid = uca.user_uuid " + 
            		"and uca.attr_key = 'orgUuid' " +
            		"and o.uuid = uca.attr_value " +
            		"and ui.tenant_id = :tenantId"
            , nativeQuery = true
    )
    List<Object[]> findAllUsersByTenantId(@Param("tenantId") String tenantId);
    
    @Query (
    		value = "select ui.uuid as \"id\", (ui.first_name ||' '|| ui.last_name ||'('||ui.username||')') as \"itemName\" , o.name as \"category\" "+
    				"from user_info ui, user_custom_attr uca, organization o " +
    				"where ui.uuid = uca.user_uuid " + 
            		"and uca.attr_key = 'orgUuid' " +
            		"and o.uuid = uca.attr_value " +
            		"and ui.uuid = :uuid " +
            		"and ui.tenant_id = :tenantId"
    		, nativeQuery = true
    )
    List<Object[]> findUserByIdAndTenantId(@Param("uuid") String uuid, @Param("tenantId") String tenantId);
    
    
    @Query (
            value = "select ur.name from user_role ur, user_role_xref urx where ur.uuid = urx.role_uuid and ur.type = 'EXTERNAL' and urx.user_uuid = :id and ur.tenant_id = :tenantId"
            , nativeQuery = true
        )
    String getUserRoleName(@Param("id") String id, @Param("tenantId") String tenantId);
    
}
