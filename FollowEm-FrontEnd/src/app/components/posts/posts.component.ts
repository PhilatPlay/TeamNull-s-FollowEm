import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { FollowService } from 'src/app/services/follow.service';
import { Follow } from 'src/app/models/follow.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public x: any;  
  followModel = new Follow(0, 0, 0, '');
  constructor(private postService: PostService, followService: FollowService) { 
    postService.getPosts().subscribe((data) => {console.log(data); this.x = data});
  }

  ngOnInit(): void {
  }
  submitFollow() {
    
  }
}
