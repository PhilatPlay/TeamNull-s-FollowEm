package com.spring.mysql.api.starter.controllers;

import com.spring.mysql.api.starter.exception.FollowNotFoundException;
import com.spring.mysql.api.starter.models.Follow;
import com.spring.mysql.api.starter.repositories.FollowRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class FollowController {

    @Autowired
    FollowRepository followRepository;
    private Follow followDetails;

    private final Logger LOGGER = LoggerFactory.getLogger(FollowController.class);

    // Get All Follows
    @GetMapping("/follows")
    public List<Follow> getAllFollows() {
        return followRepository.findAll();
    }
//****************************************** See follow repository for custom methods
     // Get who follows the user
//    @GetMapping("/myfollowers")
//    public List<Follow> getMyFollowers(long user_id) {
//        return followRepository.findAll();
//    }
//
//    // Get who the user follows
//    @GetMapping("/myfollows")
//    public List<Follow> getIFollow(long user_id) {
//        return followRepository.findAll();
//    }
//**************************************

    // Create a new Follow
    @PostMapping("/follows/add")
    public Follow createFollow(@Valid @RequestBody Follow follow) {
        LOGGER.info("New follow saved!");
        return followRepository.save(follow);
    }

    // APPROVE a Follow
    @PutMapping("/follows/approve/{id}")
    public Follow approveFollow(@PathVariable(value = "id") long follow_id,
                           @Valid @RequestBody Follow followDetails) throws FollowNotFoundException {
        this.followDetails = followDetails;
        Follow follow = followRepository.findById(follow_id)
                .orElseThrow(() -> new FollowNotFoundException(follow_id));
        follow.setStatus(followDetails.getStatus());
        Follow approvedFollow = followRepository.save(follow);

        return approvedFollow;
    }

    // DECLINE a Follow
    @PutMapping("/follows/decline/{id}")
    public Follow declineFollow(@PathVariable(value = "id") long follow_id,
                                @Valid @RequestBody Follow followDetails) throws FollowNotFoundException {
        this.followDetails = followDetails;
        Follow follow = followRepository.findById(follow_id)
                .orElseThrow(() -> new FollowNotFoundException(follow_id));
        follow.setStatus(followDetails.getStatus());
        Follow declinedFollow = followRepository.save(follow);

        return declinedFollow;
    }

    // Delete a Follow
    @DeleteMapping("/follows/delete/{id}")
    public ResponseEntity<?> deleteFollow(@PathVariable(value = "id") long follow_id) throws FollowNotFoundException {
        Follow follow = followRepository.findById(follow_id)
                .orElseThrow(() -> new FollowNotFoundException(follow_id));
        followRepository.delete(follow);

        return ResponseEntity.ok().build();
    }


}




