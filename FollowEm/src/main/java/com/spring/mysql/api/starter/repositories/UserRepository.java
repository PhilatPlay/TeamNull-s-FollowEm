package com.spring.mysql.api.starter.repositories;

import com.spring.mysql.api.starter.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  // getting those the user is following
    @Query(value = "SELECT * FROM users inner join posts using (user_id) WHERE user_id = ?1", nativeQuery = true)
    public List<Object> getUserData(Long user_id);
}
