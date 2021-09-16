package com.spring.mysql.api.starter.repositories;

import com.spring.mysql.api.starter.models.Follow;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {

// getting id's of those following the user
    @Query(value = "SELECT followed_id FROM follow_em.follows WHERE following_id = ?1", nativeQuery = true)
    public List<Long> getIdsOfThoseIFollow(Long following_id);

    // getting ids of those the user is following
    @Query(value = "SELECT following_id FROM follow_em.follows WHERE followed_id = ?1", nativeQuery = true)
   public List<Long> getIdsOfThoseThatFollowMe(Long followed_id);


}
