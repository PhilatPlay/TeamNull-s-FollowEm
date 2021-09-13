package com.spring.mysql.api.starter.repositories;

import com.spring.mysql.api.starter.models.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {

// getting those following the user
//     @Query(value = "SELECT * FROM Follows WHERE following_id = ?1", nativeQuery = true)
//     List<Follow> getMyFollowers(long user_id);

    // getting those the user is following
//     @Query(value = "SELECT * FROM Follows WHERE followed_id = ?1", nativeQuery = true)
//    List<Follow> getIFollow(long user_id);

}
