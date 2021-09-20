import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Follow } from 'src/app/models/follow.model';
import { FollowService } from 'src/app/services/follow.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[] = []
  follows: Follow[] = []
  current_user_id: number = 2 //localStorage.getItem("id")
  no_blocks: boolean = false

  constructor(private postService: PostService, private userService: UserService, private followService: FollowService) { 
    
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      console.log(data); 
      this.posts = data;

      /* this.followService.getFollows().subscribe(followData => {
        this.follows = followData
        this.follows = this.follows.filter(x => { x.status == 'decline' })
        console.log(this.follows)
      }) */

      for (let index = 0; index < this.posts.length; index++) {
        this.userService.getUserById(this.posts[index].author_id).subscribe(postData => {
          this.posts[index].user = postData
        })
      }
    });
  }
  submitFollow() {
    
  }
}
