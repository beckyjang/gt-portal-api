package tech.genesis.portal.fourm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.genesis.portal.fourm.domain.Organization;
import tech.genesis.portal.fourm.domain.OrganizationPk;

public interface OrganizationRepository extends JpaRepository<Organization, OrganizationPk> {
	Organization getOranizationByUuid(String uuid);
}
