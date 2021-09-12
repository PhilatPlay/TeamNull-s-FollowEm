package com.spring.mysql.api.starter.repositories;

import com.spring.mysql.api.starter.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}