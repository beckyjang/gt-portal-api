package tech.genesis.portal.fourm.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import tech.genesis.portal.fourm.domain.Topic;

import java.util.List;

public interface TopicRepository extends JpaRepository<Topic, Long> {

    Long countTopicsByUser_Id(String uuid);

    Topic findTopicById(Long id);
    Topic findTopicByIdAndTenantId(Long id, String tenantId);
    Topic findTopicByTitleAndTenantIdAndCategory(String title, String tenantId, String category);
    
    Long countTopicsByCategory(String category);
    List<Topic> findTopicsByCategory(Pageable page, String category);

    Page<Topic> findTopicsByCategoryOrderByCreatedDateDesc(Pageable page, String category);
    Page<Topic> findTopicsByUser_IdOrderByCreatedDateDesc(Pageable page, String uuid);
    Page<Topic> findTopicsByUser_Id(Pageable pageable, String uuid);
    
    Page<Topic> findAll(Pageable pageable);
    
    @Query(value = "SELECT id, title FROM Topic t ORDER BY id")
    Page<Topic> findAllTopicsWithPagination(Pageable pageable);
    
    @Query(value = "SELECT id, title, (select u.username from user_info u where u.uuid = t.uuid and u.tenant_id = ?2) as username, created_date" +
            " FROM Topic t WHERE t.category = ?1 and t.tenant_id = ?2 ORDER BY created_date DESC",
            countQuery = "SELECT count(*)" +
                    " FROM Topic t WHERE t.category = ?1 and t.tenant_id = ?2",
            nativeQuery = true)
    Page<Object[]> findAllTopicsByCategoryAndTenantIdWithPagination(Pageable pageable, String category, String tenantId);

    @Query(value = "SELECT id, title, (select u.username from user_info u where u.uuid = t.uuid and u.tenant_id = ?2) as username , created_date" +
            "FROM Topic t WHERE t.category = ?1 and t.tenant_id = ?2 and " +
            "convert_from(loread(lo_open(permit::::int, x'40000'::::int), x'40000'::::int), 'UTF-8') " +
            "like CONCAT('%',?3,'%')"+
            "ORDER BY t.created_date DESC",
            countQuery = "SELECT count(*) FROM topic WHERE category = ?1 and tenant_id = ?2 and " +
                    "convert_from(loread(lo_open(permit::::int, x'40000'::::int), x'40000'::::int), 'UTF-8') " +
                    "like CONCAT('%',?3,'%')",
            nativeQuery = true)
    Page<Object[]> findAllTopicsByCategoryAndTenantIdAndPermitWithPagination(Pageable pageable, String category, String tenantId, String permit);

}