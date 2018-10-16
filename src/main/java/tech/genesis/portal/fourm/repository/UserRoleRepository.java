package tech.genesis.portal.fourm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.genesis.portal.fourm.domain.UserRole;
import tech.genesis.portal.fourm.domain.UserRolePk;
import tech.genesis.portal.fourm.domain.UserRoleXref;

public interface UserRoleRepository extends JpaRepository<UserRole, UserRolePk> {
	UserRoleXref getUerRoleByUuidAndTenantId(String uuid, String tenantId);
}
