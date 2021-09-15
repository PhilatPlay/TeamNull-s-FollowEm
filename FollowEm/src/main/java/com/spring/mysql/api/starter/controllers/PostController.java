package com.spring.mysql.api.starter.controllers;


import com.spring.mysql.api.starter.exception.PostNotFoundException;
import com.spring.mysql.api.starter.models.Post;
import com.spring.mysql.api.starter.repositories.PostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PostController {

    @Autowired
    PostRepository postRepository;
    private Post postDetails;

    private final Logger LOGGER = LoggerFactory.getLogger(PostController.class);

    // Get All Posts
    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
    
    // Get individual post
    @GetMapping("/posts/{id}")
    public Optional<Post> displayPostById(@PathVariable("id") long postId) {
        return postRepository.findById(postId);
    }

    // Create a new Post
    @PostMapping("/posts/add")
    public Post createPost(@javax.validation.Valid @RequestBody Post post) {
        LOGGER.info("New post saved!");
        return postRepository.save(post);
    }

    // update a Post
    @PutMapping("/posts/update/{id}")
    public Post updatePost(@PathVariable(value = "id") long postId,
                           @Valid @RequestBody Post postDetails) throws PostNotFoundException {
        this.postDetails = postDetails;
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException(postId));

        post.setAuthor_id(postDetails.getAuthor_id());
        post.setAuthor_name(postDetails.getAuthor_name());
        post.setTitle(postDetails.getTitle());
        post.setContent(postDetails.getContent());

        Post updatedPost = postRepository.save(post);

        return updatedPost;
    }

    // Delete a Post
    @DeleteMapping("/posts/delete/{id}")
    public ResponseEntity<?> deletePost(@PathVariable(value = "id") long postId) throws PostNotFoundException {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException(postId));
        postRepository.delete(post);

        return ResponseEntity.ok().build();
    }

}
