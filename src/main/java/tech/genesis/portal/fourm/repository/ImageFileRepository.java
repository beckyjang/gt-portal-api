package tech.genesis.portal.fourm.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import tech.genesis.portal.fourm.domain.ImageFile;

public interface ImageFileRepository extends JpaRepository<ImageFile, Long> {
	Page<ImageFile> findAllImageFileByTenantIdOrderByCreatedDateDesc(Pageable pageable, String tenantId);
	ImageFile findImageFileByIdAndTenantId(Long id, String tenantId);
}
