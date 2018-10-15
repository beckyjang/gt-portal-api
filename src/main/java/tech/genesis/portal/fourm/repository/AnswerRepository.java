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
    void deleteAnswerById(Long id);

    Long countAnswersByUser_Id(String uuid);
    Long countAnswersByUser_IdAndUseful(String uuid, boolean useful);
    Long countAnswersByTopic_Id(Long topic_id);

    List<Answer> findAnswerByUser_IdOrderByCreatedDateDesc(String id);
    List<Answer> findAnswerByUser_IdAndUsefulOrderByCreatedDateDesc(String uuid, boolean useful);
    List<Answer> findAnswerByTopic_Id(Long topic_id);
}
