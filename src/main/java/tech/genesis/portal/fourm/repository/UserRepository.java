package tech.genesis.portal.fourm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import tech.genesis.portal.fourm.domain.User;
import tech.genesis.portal.fourm.domain.UserPk;

import java.util.List;

public interface UserRepository extends JpaRepository<User, UserPk> {

    User getUserByUsername(String username);
    User getUserById(String uuid);
    
    User getUserByUsernameAndTenantId(String username, String tenantId);
    
    List<User> findAll();
    List<User> findUserByTenantId(String tenantId);

    @Query (
        value = "(SELECT SUM(points) FROM (SELECT COUNT(topic.uuid) AS points FROM topic WHERE topic.uuid = :id" +
                " UNION ALL SELECT 2 * COUNT(answer.uuid) AS points FROM answer WHERE answer.uuid = :id UNION ALL " +
                "SELECT 3 * COUNT(answer.uuid) AS points FROM answer WHERE answer.uuid = :id AND answer.useful = TRUE) t)",
        nativeQuery = true
    )
    Long getPoints(@Param("id") String id);
    
    
    @Query (
            value = "select ur.name from user_role ur, user_role_xref urx where ur.uuid = urx.role_uuid and ur.type = 'EXTERNAL' and urx.user_uuid = :id and ur.tenant_id = :tenantId"
            , nativeQuery = true
        )
    String getUserRoleName(@Param("id") String id, @Param("tenantId") String tenantId);
    
}
