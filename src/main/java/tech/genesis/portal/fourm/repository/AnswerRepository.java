package tech.genesis.portal.fourm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import tech.genesis.portal.fourm.domain.Answer;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Modifying
    @Transactional
    @Query ("UPDATE Answer a SET a.useful = :bool WHERE a.id = :id")
    void setUsefulForAnswer(@Param("bool") Boolean bool, @Param("id") Long id);

    @Transactional
    void deleteAnswerByIdAndTenantId(Long id, String tenantId);
    
    List<Answer> findAnswerByTopic_IdAndTenantId(Long topic_id, String tenantId);
}
