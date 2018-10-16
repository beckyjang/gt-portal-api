package tech.genesis.portal.fourm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.genesis.portal.fourm.domain.UserRoleXref;
import tech.genesis.portal.fourm.domain.UserRoleXrefPk;

public interface UserRoleXrefRepository extends JpaRepository<UserRoleXref, UserRoleXrefPk> {
	UserRoleXref getUerRoleXrefByUuidAndTenantId(String uuid, String tenantId);
}
