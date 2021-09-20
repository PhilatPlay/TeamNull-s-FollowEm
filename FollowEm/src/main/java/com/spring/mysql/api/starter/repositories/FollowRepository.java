package com.spring.mysql.api.starter.repositories;

import com.spring.mysql.api.starter.models.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {

// getting id's of those following the user
    @Query(value = "SELECT followed_id FROM follow_em.follows WHERE status = 'approved' AND following_id = ?1", nativeQuery = true)
    public List<Long> getIdsOfThoseIFollow(Long following_id);

    // getting ids of those the user is following
    @Query(value = "SELECT following_id FROM follow_em.follows WHERE status = 'approved' AND followed_id = ?1", nativeQuery = true)
   public List<Long> getIdsOfThoseThatFollowMe(Long followed_id);


}
