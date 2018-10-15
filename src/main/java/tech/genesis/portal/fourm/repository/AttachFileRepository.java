package tech.genesis.portal.fourm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.genesis.portal.fourm.domain.AttachFile;

public interface AttachFileRepository extends JpaRepository<AttachFile, Long> {
	List<AttachFile> findAttachFileByTopic_Id(Long topic_id);
	
	AttachFile findAttachFileById(Long id);
}
