package com.spring.mysql.api.starter.repositories;

import com.spring.mysql.api.starter.models.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {

    // getting
//    @Query("select f from follows where f.followedId = ?")
//    List<Follow> getMyFollowers(long user_id);
//
//    @Query("select f from follows where f.followingId = ?")
//   List<Follow> getIFollow(long user_id);

}