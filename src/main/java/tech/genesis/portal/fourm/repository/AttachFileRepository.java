package tech.genesis.portal.fourm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.genesis.portal.fourm.domain.AttachFile;

public interface AttachFileRepository extends JpaRepository<AttachFile, Long> {
	List<AttachFile> findAllAttachFileByIdAndTenantId(Long id, String tenantId);
	List<AttachFile> findAllAttachFileByTopic_IdAndTenantId(Long topic_id, String tenantId);
	AttachFile findAttachFileByIdAndTenantId(Long id, String tenantId);
}
